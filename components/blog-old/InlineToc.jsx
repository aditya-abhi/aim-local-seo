"use client";

import React, { useEffect, useState, useRef } from "react";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function InlineToc() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const visibleItemsCount = 5;
  const itemsRef = useRef([]); // Keep a ref to current items for observer

  useEffect(() => {
    const content = document.querySelector(".post-content");
    if (!content) return;

    const headings = Array.from(content.querySelectorAll("h2"));

    const collected = headings
      .map((el, index) => {
        if (!el.id) {
          const id = slugify(el.textContent || "");
          if (id) el.id = id;
        }

        return {
          id: el.id,
          text: el.textContent || "",
          level: el.tagName.toLowerCase(),
        };
      })
      .filter((h) => !!h.id);

    setItems(collected);
    itemsRef.current = collected; // Update ref immediately
    // Reset visible window when items change
    setVisibleStartIndex(0);
    setActiveId(""); // Reset active heading
  }, []);

  // Calculate visible items based on active heading
  const visibleItems = items.slice(
    visibleStartIndex,
    visibleStartIndex + visibleItemsCount
  );

  const showNextItems = () => {
    const currentItems = itemsRef.current;
    if (visibleStartIndex + visibleItemsCount < currentItems.length) {
      setVisibleStartIndex(visibleStartIndex + visibleItemsCount);
      // Smooth scroll to top of TOC panel
      setTimeout(() => {
        const tocPanel = document.querySelector(
          '[aria-label="Table of contents"]'
        );
        if (tocPanel) {
          tocPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const showPrevItems = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(Math.max(0, visibleStartIndex - visibleItemsCount));
      // Smooth scroll to top of TOC panel
      setTimeout(() => {
        const tocPanel = document.querySelector(
          '[aria-label="Table of contents"]'
        );
        if (tocPanel) {
          tocPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  // Intersection Observer for active heading detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // Find the heading that is most visible in the viewport
      let mostVisibleEntry = null;
      let maxVisibilityRatio = 0;

      entries.forEach((entry) => {
        const activeHeadingId = entry.target.id;
        const rect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;

        // Calculate how much of the heading is visible
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / rect.height;

        // Only consider intersecting entries and find the most visible one
        if (entry.isIntersecting && visibilityRatio > maxVisibilityRatio) {
          maxVisibilityRatio = visibilityRatio;
          mostVisibleEntry = entry;
        }
      });

      // Process the most visible heading
      if (mostVisibleEntry) {
        const activeHeadingId = mostVisibleEntry.target.id;
        setActiveId(activeHeadingId);

        // Auto-adjust visible window based on active heading
        const currentItems = itemsRef.current; // Use ref for immediate access
        const activeIndex = currentItems.findIndex(
          (item) => item.id === activeHeadingId
        );

        if (activeIndex !== -1) {
          // Calculate the optimal window to show the active item
          let newStartIndex = Math.max(0, activeIndex - 2); // Center the active item

          // Make sure we don't exceed bounds
          if (newStartIndex + visibleItemsCount > currentItems.length) {
            newStartIndex = Math.max(
              0,
              currentItems.length - visibleItemsCount
            );
          }

          // Update the visible window
          if (newStartIndex !== visibleStartIndex) {
            setVisibleStartIndex(newStartIndex);
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all h2 headings only
    const headingElements = document.querySelectorAll("h2");
    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (!items.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="panel p-1 lg:p-2 xl:p-3 rounded-1-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden d-block lg:d-none"
      style={{ minHeight: "200px" }}
    >
      {/* Navigation Controls - Top */}
      {visibleStartIndex > 0 && (
        <div className="d-flex justify-center items-center mb-1 sm:mb-2">
          <button
            onClick={showPrevItems}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 text-xs sm:text-sm font-semibold text-white !bg-green-600 hover:!bg-green-700 !rounded-full transition-all duration-200 shadow-sm hover:shadow-md !z-30 relative w-full sm:w-auto"
            title="Show Previous Items"
            style={{
              backgroundColor: "#16a34a",
              zIndex: 90,
              position: "relative",
              borderRadius: "9999px",
            }}
          >
            <span className="text-sm sm:text-base">↑</span>
            <span>Prev.</span>
          </button>
        </div>
      )}

      <ul
        className="vstack gap-1 m-0 p-0 list-none transition-none"
        style={{ listStyle: "none" }}
      >
        {visibleItems.map((item, idx) => {
          const actualIndex = visibleStartIndex + idx;
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className="text-sm sm:text-base ps-2"
              style={{
                minHeight: "28px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="hstack items-start gap-3">
                <span
                  className={`h6 lg:h5 fst-italic text-center m-0 min-w-20px transition-colors ${
                    isActive
                      ? "text-green-600 dark:text-green-400 font-bold"
                      : "text-primary dark:text-tertiary"
                  }`}
                >
                  {actualIndex + 1}
                </span>
                <a
                  href={`#${item.id}`}
                  className={`text-none hover:opacity-80 transition-colors duration-300 relative ${
                    isActive
                      ? "!text-green-700 dark:!text-green-300 !font-black !text-sm sm:!text-base !bg-[#93e85f] !px-2 !py-1 !rounded-md !z-20 !shadow-sm"
                      : "text-gray-900 dark:text-white !text-sm sm:!text-base"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: "#93e85f",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          zIndex: 80,
                          position: "relative",
                        }
                      : {}
                  }
                >
                  {item.text}
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Navigation Controls - Bottom */}
      {visibleStartIndex + visibleItemsCount < itemsRef.current.length && (
        <div className="d-flex justify-center items-center mt-3 sm:mt-4">
          <button
            onClick={showNextItems}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 text-xs sm:text-sm font-semibold text-white !bg-green-600 hover:!bg-green-700 !rounded-full transition-all duration-200 shadow-sm hover:shadow-md !z-30 relative w-full sm:w-auto"
            title="Show Next Items"
            style={{
              backgroundColor: "#16a34a",
              zIndex: 90,
              position: "relative",
              borderRadius: "9999px",
            }}
          >
            <span>Next</span>
            <span className="text-sm sm:text-base">↓</span>
          </button>
        </div>
      )}
    </nav>
  );
}
