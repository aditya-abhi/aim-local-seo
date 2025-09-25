"use client";

import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Link from "next/link";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function DesktopTableOfContentsClient() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [isHydrated, setIsHydrated] = useState(false);
  const itemsRef = useRef([]);
  const observerRef = useRef(null);
  const tocRef = useRef(null);

  // Hydration effect - runs only on client
  useEffect(() => {
    setIsHydrated(true);

    // Hide server-rendered static content once client component is ready
    const serverRendered = document.querySelector(".toc-server-rendered");
    if (serverRendered) {
      serverRendered.style.display = "none";
    }
  }, []);

  // Enhanced heading detection with reading time calculation
  useEffect(() => {
    const content =
      document.querySelector(".uc-main") ||
      document.querySelector(".post-content");
    if (!content) return;

    // Support multi-level headings
    const headings = Array.from(
      content.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );

    const collected = headings
      .map((el, index) => {
        if (!el.id) {
          const id = slugify(el.textContent || "");
          if (id) el.id = id;
        }

        const level = parseInt(el.tagName.charAt(1));
        return {
          id: el.id,
          text: el.textContent || "",
          level: level,
          indent: Math.max(0, level - 1), // Better indentation for desktop
          element: el,
        };
      })
      .filter((h) => !!h.id);

    setItems(collected);
    itemsRef.current = collected;

    // Calculate estimated reading time
    const wordCount = content.textContent?.split(/\s+/).length || 0;
    const readTime = Math.ceil(wordCount / 200); // 200 words per minute
    setEstimatedReadTime(readTime);
  }, []);

  // Advanced intersection observer for desktop
  useEffect(() => {
    if (!items.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -60% 0px", // More conservative margins to reduce conflicts
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    let debounceTimer = null;

    const observerCallback = (entries) => {
      // Clear previous debounce
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Debounce the update to prevent rapid firing
      debounceTimer = setTimeout(() => {
        const visibleEntries = entries
          .filter(
            (entry) => entry.isIntersecting && entry.intersectionRatio > 0.1
          )
          .sort((a, b) => {
            const aRect = a.boundingClientRect;
            const bRect = b.boundingClientRect;
            // Prefer entries closer to the top of the viewport
            return aRect.top - bRect.top;
          });

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries[0];
          const newActiveId = mostVisible.target.id;

          // Only update if it's actually different to prevent unnecessary re-renders
          setActiveId((prevActiveId) => {
            if (prevActiveId !== newActiveId) {
              // Auto-expand parent section if a sub-heading becomes active
              const activeItem = items.find((item) => item.id === newActiveId);
              if (activeItem && activeItem.level === 3) {
                // Find parent H2 heading
                const activeIndex = items.findIndex(
                  (item) => item.id === newActiveId
                );
                for (let i = activeIndex - 1; i >= 0; i--) {
                  if (items[i].level === 2) {
                    // Auto-collapse: only expand this parent, close all others
                    setExpandedSections(new Set([items[i].id]));
                    break;
                  }
                }
              }
              return newActiveId;
            }
            return prevActiveId;
          });
        }
      }, 100); // 100ms debounce
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    items.forEach((item) => {
      if (item.element) {
        observerRef.current.observe(item.element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [items]);

  // Reading progress with smooth animation
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const winHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      const progress = Math.min(100, Math.max(0, scrollPercent * 100));
      setReadingProgress(progress);
    };

    const throttledUpdate = throttle(updateProgress, 50); // Smoother for desktop
    window.addEventListener("scroll", throttledUpdate, { passive: true });
    window.addEventListener("resize", throttledUpdate, { passive: true }); // Handle window resize
    updateProgress(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", throttledUpdate);
      window.removeEventListener("resize", throttledUpdate);
    };
  }, []);

  // Enhanced smooth scroll with easing, variable speed, and responsive offsets
  const scrollToHeading = useCallback((id, event) => {
    event?.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    // Responsive scroll offset based on screen size
    const getScrollOffset = () => {
      const width = window.innerWidth;
      if (width < 768) return 80; // Mobile: smaller offset
      if (width < 1024) return 100; // Tablet: medium offset
      return 120; // Desktop: larger offset
    };

    const startPosition = window.pageYOffset;
    const elementPosition = element.getBoundingClientRect().top;
    const targetPosition = startPosition + elementPosition - getScrollOffset();
    const distance = Math.abs(targetPosition - startPosition);

    // Variable duration based on distance (min 300ms, max 1500ms)
    const baseDuration = Math.min(Math.max(distance / 3, 300), 1500);
    const duration = distance < 100 ? 200 : baseDuration; // Quick scroll for short distances

    // Easing function (easeInOutCubic for natural feel)
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Custom scroll animation with easing
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      const currentPosition =
        startPosition + (targetPosition - startPosition) * easedProgress;
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Update URL hash after scroll completes
        if (window.history.replaceState) {
          window.history.replaceState(null, null, `#${id}`);
        }
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!tocRef.current?.contains(document.activeElement)) return;

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const direction = e.key === "ArrowDown" ? 1 : -1;
        const currentIndex = items.findIndex((item) => item.id === activeId);
        const nextIndex = Math.max(
          0,
          Math.min(items.length - 1, currentIndex + direction)
        );

        if (items[nextIndex]) {
          scrollToHeading(items[nextIndex].id);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeId, items, scrollToHeading]);

  // Toggle accordion section with auto-collapse
  const toggleSection = useCallback((itemId) => {
    setExpandedSections((prev) => {
      const isCurrentlyExpanded = prev.has(itemId);

      if (isCurrentlyExpanded) {
        // If clicking on an expanded section, collapse it
        return new Set();
      } else {
        // If clicking on a collapsed section, expand only this one
        return new Set([itemId]);
      }
    });
  }, []);

  // Memoized TOC structure with hierarchy for performance
  const tocStructure = useMemo(() => {
    const structuredItems = [];

    // Filter to only get H2 headings as primary items
    const h2Items = items.filter((item) => item.level === 2);

    for (let i = 0; i < h2Items.length; i++) {
      const item = h2Items[i];
      const isActive = activeId === item.id;
      const isExpanded = expandedSections.has(item.id);

      // Find all sub-headings (H3+) that belong to this H2
      const children = [];
      let hasActiveChild = false;

      // Find the range of items that belong to this H2
      const currentH2Index = items.findIndex((h) => h.id === item.id);
      const nextH2Index = items.findIndex(
        (h, idx) => idx > currentH2Index && h.level === 2
      );
      const endIndex = nextH2Index === -1 ? items.length : nextH2Index;

      // Get all H3+ items between this H2 and the next H2
      for (let j = currentH2Index + 1; j < endIndex; j++) {
        const subItem = items[j];
        if (subItem.level === 3) {
          // Only direct H3 children
          const childIsActive = activeId === subItem.id;
          if (childIsActive) {
            hasActiveChild = true;
          }
          children.push({
            ...subItem,
            isActive: childIsActive,
            parentId: item.id,
          });
        }
      }

      const hasChildren = children.length > 0;
      // Parent is highlighted if it's active OR if any of its children are active
      const isParentHighlighted = isActive || hasActiveChild;

      structuredItems.push({
        ...item,
        isActive: isParentHighlighted,
        hasChildren,
        isExpanded: isExpanded || hasActiveChild, // Auto-expand if child is active
        children,
        index: i, // Use H2 index
      });
    }

    return structuredItems;
  }, [items, activeId, expandedSections]);

  // Don't render anything until hydrated to prevent mismatch
  if (!isHydrated) {
    return null;
  }

  if (!items.length) {
    // Fallback content when no headings are detected
    const fallbackItems = [
      "Virtual Reality and Mental Health: Exploring the Therapeutic",
      "The Future of Sustainable Living: Driving Eco-Friendly Lifestyles",
      "Smart Homes, Smarter Living: Exploring IoT and AI",
      "How Businesses Are Adapting to E-Commerce and AI Integration",
    ];

    return (
      <div className="uc-sidebar panel vstack gap-2">
        <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 border">
          <div className="widget-title text-center">
            <h5 className="fs-7 m-0">Table of Content</h5>
          </div>

          {/* Reading Progress Bar - Moved below title */}
          <div className="progress-container mt-2 px-2">
            <div className="d-flex justify-between items-center mb-1">
              <span className="fs-8 text-gray-600 dark:text-gray-400">
                Reading Progress
              </span>
              <span className="fs-8 fw-medium text-dark dark:text-white">
                {Math.round(readingProgress)}%
              </span>
            </div>
            <div className="bg-gray-300 dark:bg-gray-600 rounded h-1 overflow-hidden">
              <div
                className="bg-primary h-full rounded transition-all duration-500"
                style={{ width: `${readingProgress}%` }}
              />
            </div>
          </div>

          <div className="widget-content">
            <div className="row child-cols-12 gx-4 gy-3 sep-x">
              {fallbackItems.map((item, i) => (
                <div key={i}>
                  <article className="post type-post panel">
                    <div className="row child-cols g-2 lg:g-3">
                      <div>
                        <div className="hstack items-start gap-3">
                          <span className="fs-7 text-center text-dark dark:text-white m-0 min-w-20px">
                            {i + 1}
                          </span>{" "}
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title fs-7 m-0">
                              <Link
                                className="text-none text-dark dark:text-white hover:text-primary transition-colors duration-200"
                                href="#"
                              >
                                {item}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="uc-sidebar panel vstack gap-2">
      {/* <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-tertiary-700"> */}
      <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 border">
        <div className="widget-title text-center">
          <h5 className="fs-7 m-0">Table of Content</h5>
        </div>

        {/* Reading Progress Bar - Moved below title */}
        <div className="progress-container mt-2 px-2">
          <div className="d-flex justify-between items-center mb-1">
            <span className="fs-8 text-gray-600 dark:text-gray-400">
              Reading Progress
            </span>
            <span className="fs-8 fw-medium text-dark dark:text-white">
              {Math.round(readingProgress)}%
            </span>
          </div>
          <div className="bg-gray-300 dark:bg-gray-600 rounded h-1 overflow-hidden">
            <div
              className="bg-primary h-full rounded transition-all duration-500"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        <div className="widget-content">
          <div className="row child-cols-12 gx-4 gy-2 sep-x">
            {tocStructure.map((item, i) => (
              <div key={item.id}>
                <article className="post type-post panel">
                  <div className="row child-cols g-2 lg:g-3">
                    <div>
                      {/* Main heading */}
                      <div className="hstack items-start gap-2">
                        <span
                          className={`fs-7 text-center m-0 min-w-20px ${
                            item.isActive
                              ? "text-tertiary dark:text-primary fw-bold"
                              : "text-dark dark:text-white"
                          }`}
                        >
                          {i + 1}
                        </span>

                        <div className="post-header panel vstack justify-between gap-1 flex-1">
                          <div className="d-flex items-center justify-between w-100">
                            <h3
                              className={`post-title fs-7 m-0 flex-1 ${
                                item.isActive
                                  ? "fw-bold text-tertiary dark:text-primary"
                                  : ""
                              }`}
                            >
                              <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToHeading(item.id, e)}
                                className={`text-none transition-colors duration-200 ${
                                  item.isActive
                                    ? "text-tertiary dark:text-primary"
                                    : "text-dark dark:text-white hover:text-tertiary dark:hover:text-primary"
                                }`}
                              >
                                {item.text}
                              </a>
                            </h3>

                            {/* Accordion toggle button */}
                            {item.hasChildren && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleSection(item.id);
                                }}
                                className="btn btn-xs p-0 ms-2 rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  backgroundColor: "#025864",
                                  border: "none",
                                  width: "20px",
                                  height: "20px",
                                  minWidth: "20px",
                                }}
                                title={item.isExpanded ? "Collapse" : "Expand"}
                              >
                                <i
                                  className={`unicon-chevron-${
                                    item.isExpanded ? "up" : "down"
                                  } text-white`}
                                  style={{ fontSize: "10px" }}
                                />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Sub-headings (children) */}
                      {item.hasChildren && item.isExpanded && (
                        <div className="sub-headings mt-2 ms-4 ps-2">
                          {item.children.map((child, childIndex) => (
                            <div
                              key={child.id}
                              className="sub-heading-item mb-1"
                            >
                              <div className="hstack items-start gap-2">
                                <span
                                  className={`fs-8 text-center m-0 min-w-16px ${
                                    child.isActive
                                      ? "text-tertiary dark:text-primary fw-bold"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {i + 1}.{childIndex + 1}
                                </span>
                                <h4
                                  className={`fs-8 m-0 ${
                                    child.isActive
                                      ? "fw-bold text-tertiary dark:text-primary"
                                      : "text-gray-700 dark:text-gray-300"
                                  }`}
                                >
                                  <a
                                    href={`#${child.id}`}
                                    onClick={(e) =>
                                      scrollToHeading(child.id, e)
                                    }
                                    className={`text-none transition-colors duration-200 ${
                                      child.isActive
                                        ? "text-tertiary dark:text-primary"
                                        : "hover:text-tertiary dark:hover:text-primary"
                                    }`}
                                  >
                                    {child.text}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Throttle utility function
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
