import AccordionFeature2 from "@/components/common/AccordionFeature2";
import React from "react";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel bg-secondary dark:bg-tertiary-700 mx-2 lg:rounded-2">
        <div className="container lg:max-w-lg py-6 lg:py-8 xl:py-10 ">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
              <div>
                <div className="vstack items-center text-center gap-2">
                  <h2 className="h4 sm:h3 xl:h2">
                    Frequently Asked Questions!
                  </h2>
                </div>
              </div>
              <div>
                <div className="panel">
                  <ul
                    className="uc-accordion gap-1 max-w-md mx-auto"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    <AccordionFeature2 parentClass="panel p-2 md:p-3 lg:p-4 bg-white rounded-1-5 dark:text-gray-900" />
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
