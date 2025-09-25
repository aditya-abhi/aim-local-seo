import FAQAEOCourse from "@/components/common/FAQAEOCourse";
import React from "react";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel">
        <div className="container lg:max-w-lg pt-6 lg:pt-8 xl:pt-10">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
              <div>
                <div className="vstack items-center text-center gap-2">
                  <h2 className="h3 lg:h2 m-0">
                    Frequently Asked{" "}
                    <spam className="text-tertiary dark:text-primary">
                      Questions!
                    </spam>
                  </h2>
                </div>
              </div>
              <div>
                <div className="panel">
                  <ul
                    className="uc-accordion gap-1 max-w-md mx-auto"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    <FAQAEOCourse parentClass="panel p-2 md:p-3 lg:p-4 bg-secondary dark:bg-tertiary-700 rounded-1-5" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
