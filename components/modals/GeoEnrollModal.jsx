"use client";

import { closeGeoEnrollModal } from "@/utlis/toggleGeoEnrollModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function GeoEnrollModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        closeGeoEnrollModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeGeoEnrollModal();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      id="uc-geo-enroll-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-0 overflow-hidden"
        role="dialog"
        aria-modal="true"
        style={{ width: "100%", maxWidth: "min(100%, 960px)" }}
      >
        <button
          className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
          type="button"
          onClick={closeGeoEnrollModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel">
          <div className="panel">
            <iframe
              title="GEO Course Enrollment"
              src="https://preview.mailerlite.io/preview/1771466/forms/165273168901048167"
              style={{ width: "100%", height: "min(80vh, 900px)", border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


