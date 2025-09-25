"use client";

import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
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
    const serverRendered = document.querySelector('.toc-server-rendered');
    if (serverRendered) {
      serverRendered.style.display = 'none';
    }
  }, []);

  // Enhanced heading detection with reading time calculation
  useEffect(() => {
    const content = document.querySelector(".uc-main") || document.querySelector(".post-content");
    if (!content) return;

    // Support multi-level headings
    const headings = Array.from(content.querySelectorAll("h1, h2, h3, h4, h5, h6"));

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
      rootMargin: "-20% 0px -35% 0px", // Optimized for desktop viewport
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => {
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          return Math.abs(aRect.top) - Math.abs(bRect.top);
        });

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries[0];
        const newActiveId = mostVisible.target.id;
        setActiveId(newActiveId);
        
        // Auto-expand parent section if a sub-heading becomes active
        const activeItem = items.find(item => item.id === newActiveId);
        if (activeItem && activeItem.level > 2) {
          // Find parent heading (level 2 or 1)
          const parentItem = items.find(item => 
            item.level < activeItem.level && 
            items.indexOf(item) < items.indexOf(activeItem)
          );
          if (parentItem) {
            setExpandedSections(prev => new Set(prev).add(parentItem.id));
          }
        }
      }
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
    };
  }, [items]);

  // Reading progress with smooth animation
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const winHeight = window.innerHeight || document.documentElement.clientHeight;
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

  // Enhanced smooth scroll with offset calculation
  const scrollToHeading = useCallback((id, event) => {
    event?.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for desktop header/navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without triggering scroll
      if (window.history.replaceState) {
        window.history.replaceState(null, null, `#${id}`);
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!tocRef.current?.contains(document.activeElement)) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const currentIndex = items.findIndex(item => item.id === activeId);
        const nextIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));
        
        if (items[nextIndex]) {
          scrollToHeading(items[nextIndex].id);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeId, items, scrollToHeading]);

  // Toggle accordion section
  const toggleSection = useCallback((itemId) => {
    setExpandedSections(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      return newExpanded;
    });
  }, []);

  // Memoized TOC structure with hierarchy for performance
  const tocStructure = useMemo(() => {
    const structuredItems = [];
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const isActive = activeId === item.id;
      const isExpanded = expandedSections.has(item.id);
      
      // Find children (next items with higher level)
      const children = [];
      let j = i + 1;
      while (j < items.length && items[j].level > item.level) {
        if (items[j].level === item.level + 1) {
          // Direct child
          children.push({
            ...items[j],
            isActive: activeId === items[j].id,
            parentId: item.id
          });
        }
        j++;
      }
      
      const hasChildren = children.length > 0;
      
      structuredItems.push({
        ...item,
        isActive,
        hasChildren,
        isExpanded,
        children,
        index: i,
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
      "How Businesses Are Adapting to E-Commerce and AI Integration"
    ];

    return (
      <div className="uc-sidebar panel vstack gap-2">
        <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
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
                        <span className="h5 lg:h4 fst-italic text-center text-primary m-0 min-w-20px">
                          {i + 1}
                        </span>{" "}
                        <div className="post-header panel vstack justify-between gap-1">
                          <h3 className="post-title fs-7 m-0">
                              <Link
                                className="text-none"
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
      <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
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
                        <span className={`h5 lg:h4 fst-italic text-center m-0 min-w-20px ${item.isActive ? 'text-primary fw-bold' : 'text-primary'}`}>
                          {i + 1}
                        </span>
                        
                        <div className="post-header panel vstack justify-between gap-1 flex-1">
                          <div className="d-flex items-center justify-between w-100">
                            <h3 className={`post-title fs-7 m-0 flex-1 ${item.isActive ? 'fw-bold' : ''}`}>
                              <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToHeading(item.id, e)}
                                className={`text-none ${item.isActive ? 'text-primary' : ''}`}
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
                                  backgroundColor: '#01353C',
                                  border: 'none',
                                  width: '20px',
                                  height: '20px',
                                  minWidth: '20px'
                                }}
                                title={item.isExpanded ? "Collapse" : "Expand"}
                              >
                                <i 
                                  className={`unicon-chevron-${item.isExpanded ? 'up' : 'down'} text-white`} 
                                  style={{ fontSize: '10px' }}
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
                            <div key={child.id} className="sub-heading-item mb-1">
                              <div className="hstack items-start gap-2">
                                <span className={`fs-8 text-center m-0 min-w-16px ${child.isActive ? 'text-primary fw-bold' : 'text-gray-500'}`}>
                                  {i + 1}.{childIndex + 1}
                                </span>
                                <h4 className={`fs-8 m-0 ${child.isActive ? 'fw-bold text-primary' : 'text-gray-700 dark:text-gray-300'}`}>
                                  <a
                                    href={`#${child.id}`}
                                    onClick={(e) => scrollToHeading(child.id, e)}
                                    className="text-none hover:text-primary"
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
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
