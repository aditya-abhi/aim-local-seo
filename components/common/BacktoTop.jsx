"use client";

import { useContextElement } from "@/context/Context";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileTableOfContent from "@/components/blogs/components/MobileTableOfContent";

export default function BacktoTop() {
  const { isDark, handleToggle } = useContextElement();
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const isBlogPage =
    pathname?.startsWith("/blogs/") || pathname?.startsWith("/blog/");

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than page height
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTOC = () => {
    setIsTOCOpen(!isTOCOpen);
  };

  return (
    <>
      <div
        className={`backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack  ${
          isVisible ? "uc-active" : ""
        }`}
      >
        {isBlogPage && isVisible && (
          <button
            className={`btn btn-sm w-40px h-40px rounded-circle mb-1 border-0 transition-all duration-200 ${
              isTOCOpen 
                ? "shadow-lg" 
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg"
            }`}
            style={{
              backgroundColor: isTOCOpen ? "#025864" : undefined,
              color: isTOCOpen ? "#ffffff" : undefined
            }}
            onClick={toggleTOC}
            title={isTOCOpen ? "Close Table of Contents" : "Open Table of Contents"}
          >
            {isTOCOpen ? (
              <span 
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "normal",
                  lineHeight: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  zIndex: 1000
                }}
              >
                ×
              </span>
            ) : (
              <i 
                className="icon-2 unicon-list"
                style={{
                  fontSize: "16px",
                  zIndex: 1000
                }}
              />
            )}
          </button>
        )}
        <div
          className="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white"
          data-darkmode-toggle=""
        >
          <label className="switch">
            <span className="sr-only">Dark mode toggle</span>
            <input onChange={handleToggle} type="checkbox" checked={isDark} />
            <span className="slider fs-5"></span>
          </label>
        </div>
        <a
          className="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle"
          onClick={scrollToTop}
          data-uc-backtotop
        >
          <i className="icon-2 unicon-chevron-up"></i>
        </a>
      </div>

      {/* Mobile TOC - Bottom-anchored expandable */}
      {isBlogPage && (
        <MobileTableOfContent
          isOpen={isTOCOpen}
          onToggle={toggleTOC}
          onClose={() => setIsTOCOpen(false)}
        />
      )}
    </>
  );
}
