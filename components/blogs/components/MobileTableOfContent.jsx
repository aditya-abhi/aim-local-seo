"use client";

import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./MobileTableOfContent.css";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function MobileTableOfContent({ isOpen, onToggle, onClose }) {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [scrollBounce, setScrollBounce] = useState("");
  const itemsRef = useRef([]);
  const observerRef = useRef(null);
  const tocRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Extract headings from content
  useEffect(() => {
    const content =
      document.querySelector(".uc-main") ||
      document.querySelector(".post-content");
    if (!content) return;

    // Support multi-level headings (h1-h6)
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
          tagName: el.tagName.toLowerCase(),
          element: el,
        };
      })
      .filter((h) => !!h.id);

    setItems(collected);
    itemsRef.current = collected;

    // Calculate estimated read time
    const wordCount = content.textContent?.split(/\s+/).length || 0;
    const readTime = Math.ceil(wordCount / 200); // 200 words per minute
    setEstimatedReadTime(readTime);
  }, []);

  // Intersection Observer for active heading detection and reading progress
  useEffect(() => {
    if (!items.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries) => {
      let mostVisibleEntry = null;
      let maxVisibilityRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(windowHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / rect.height;

          if (visibilityRatio > maxVisibilityRatio) {
            maxVisibilityRatio = visibilityRatio;
            mostVisibleEntry = entry;
          }
        }
      });

      if (mostVisibleEntry) {
        setActiveId(mostVisibleEntry.target.id);
      }

      // Calculate reading progress
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / docHeight) * 100)
      );
      setReadingProgress(progress);
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observerRef.current = observer;

    // Observe all headings
    items.forEach((item) => {
      if (item.element) {
        observer.observe(item.element);
      }
    });

    return () => {
      if (observerRef.current) {
        items.forEach((item) => {
          if (item.element) {
            observerRef.current.unobserve(item.element);
          }
        });
      }
    };
  }, [items]);

  // Smooth scroll to heading
  const scrollToHeading = useCallback(
    (headingId, event) => {
      event?.preventDefault();
      const element = document.getElementById(headingId);
      if (element) {
        const headerOffset = 80; // Account for any fixed headers
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close TOC after navigation on mobile
        if (onClose && window.innerWidth < 768) {
          setTimeout(onClose, 300);
        }
      }
    },
    [onClose]
  );

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Scroll bounce feedback effect with highlight color
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isOpen) return;

    let touchStartY = 0;
    let isDragging = false;
    let bounceTimeout;

    const triggerBounce = (direction) => {
      setScrollBounce(direction);
      clearTimeout(bounceTimeout);
      bounceTimeout = setTimeout(() => {
        setScrollBounce("");
      }, 350);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      // Check for overscroll at top
      if (scrollTop <= 0 && deltaY < -30) {
        e.preventDefault();
        triggerBounce("top");
      }
      // Check for overscroll at bottom
      else if (scrollTop + clientHeight >= scrollHeight - 1 && deltaY > 30) {
        e.preventDefault();
        triggerBounce("bottom");
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Mouse wheel support for desktop testing
    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      if (scrollTop <= 0 && e.deltaY < 0) {
        e.preventDefault();
        triggerBounce("top");
      } else if (scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0) {
        e.preventDefault();
        triggerBounce("bottom");
      }
    };

    // Add event listeners
    scrollContainer.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    scrollContainer.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    scrollContainer.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
      scrollContainer.removeEventListener("wheel", handleWheel);
      clearTimeout(bounceTimeout);
    };
  }, [isOpen]);

  // Group items by hierarchy
  const structuredItems = useMemo(() => {
    const structured = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const isActive = activeId === item.id;
      const isExpanded = expandedSections.has(item.id);

      // Find children (next items with higher level)
      const children = [];
      let j = i + 1;
      while (j < items.length && items[j].level > item.level) {
        if (items[j].level === item.level + 1) {
          children.push({
            ...items[j],
            isActive: activeId === items[j].id,
          });
        }
        j++;
      }

      structured.push({
        ...item,
        isActive,
        isExpanded,
        children,
        hasChildren: children.length > 0,
      });
    }

    return structured;
  }, [items, activeId, expandedSections]);

  if (!items.length) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="mobile-toc-backdrop position-fixed top-0 start-0 w-100 h-100 z-1040 bg-black bg-opacity-50 d-lg-none"
          onClick={handleBackdropClick}
        />
      )}

      {/* Bottom-anchored TOC Panel */}
      <div
        ref={tocRef}
        className={`mobile-toc-panel position-fixed bottom-0 start-0 end-0 z-1050 bg-secondary dark:bg-tertiary-700 shadow-lg border-top border-gray-200 dark:border-gray-700 d-lg-none ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          maxHeight: "70vh",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
        }}
      >
        {/* Handle Bar */}
        <div className="d-flex justify-center py-3">
          <div
            className="mobile-toc-handle bg-gray-400 dark:bg-gray-500 rounded-pill opacity-60"
            style={{
              width: "36px",
              height: "3px",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          />
        </div>

        {/* Header with close button - matching desktop style */}
        <div className="widget-title text-center px-4 pb-3 position-relative">
          <h5 className="fs-7 m-0 dark:text-white">Table of Content</h5>

          {/* Close button - inline with header */}
          <button
            className="mobile-toc-close-btn text-red w-28px h-28px dark:text-white fw-bold"
            onClick={onClose}
            title="Close"
            style={{
              position: "absolute",
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
              // width: "28px",
              // height: "28px",
              backgroundColor: "transparent",
              //  border: "1.5px solid #dc2626",
              borderRadius: "50%",
              //  color: "#dc2626",
              zIndex: 99999,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1",
              transition: "all 0.2s ease-in-out",
              padding: "0",
              margin: "0",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1",
              }}
            >
              ×
            </span>
          </button>
        </div>

        {/* Reading Progress Bar - matching desktop style */}
        <div className="progress-container mt-2 px-4">
          <div className="d-flex justify-between items-center mb-1">
            <span className="fs-8 text-gray-600 dark:text-white">
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

        {/* TOC Content - matching desktop widget structure */}
        <div className="widget-content">
          <div
            ref={scrollContainerRef}
            className={`mobile-toc-content overflow-y-auto overflow-x-hidden px-2 py-3 ${
              scrollBounce ? `bounce-${scrollBounce}` : ""
            }`}
            style={{
              maxHeight: "calc(70vh - 160px)",
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "none",
            }}
          >
            <div className="row child-cols-12 gx-4 gy-2 sep-x">
              {structuredItems.map((item, index) => (
                <div key={item.id}>
                  <article className="post type-post panel">
                    <div className="row child-cols g-2 lg:g-3">
                      <div>
                        {/* Main heading - matching desktop style */}
                        <div className="hstack items-start gap-2">
                          <span
                            className={`fs-7 text-center m-0 min-w-20px ${
                              item.isActive
                                ? "text-primary fw-bold"
                                : "text-dark dark:text-white"
                            }`}
                          >
                            {index + 1}
                          </span>

                          <div className="post-header panel vstack justify-between gap-1 flex-1">
                            <div className="d-flex items-center justify-between w-100">
                              <h3
                                className={`post-title fs-7 m-0 flex-1 ${
                                  item.isActive ? "fw-bold" : ""
                                }`}
                              >
                                <a
                                  href={`#${item.id}`}
                                  onClick={(e) => scrollToHeading(item.id, e)}
                                  className={`text-none transition-colors duration-200 ${
                                    item.isActive
                                      ? "text-primary"
                                      : "text-dark dark:text-white hover:text-primary"
                                  }`}
                                >
                                  {item.text}
                                </a>
                              </h3>

                              {/* Accordion toggle button - matching desktop */}
                              {item.hasChildren && (
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const newExpanded = new Set(
                                      expandedSections
                                    );
                                    if (newExpanded.has(item.id)) {
                                      newExpanded.delete(item.id);
                                    } else {
                                      newExpanded.add(item.id);
                                    }
                                    setExpandedSections(newExpanded);
                                  }}
                                  className="btn btn-xs p-0 ms-2 rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    backgroundColor: "#025864",
                                    border: "none",
                                    width: "20px",
                                    height: "20px",
                                    minWidth: "20px",
                                  }}
                                  title={
                                    item.isExpanded ? "Collapse" : "Expand"
                                  }
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

                        {/* Sub-headings (children) - matching desktop */}
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
                                        ? "text-primary fw-bold"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {index + 1}.{childIndex + 1}
                                  </span>
                                  <h4
                                    className={`fs-8 m-0 ${
                                      child.isActive
                                        ? "fw-bold text-primary"
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
                                          ? "text-primary"
                                          : "hover:text-primary"
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

        {/* Footer with quick actions */}
        <div className="px-4 py-3 border-top border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="d-flex justify-between items-center">
            <button
              className="btn btn-sm btn-outline-primary d-flex items-center gap-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onClose();
              }}
            >
              <i className="icon-1 unicon-arrow-up" />
              <span>Back to Top</span>
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {items.length} section{items.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
