import Accordion from "@/components/common/AccordionAEOCourse";
import React from "react";

export default function AchievementsOld() {
  return (
    <div id="faq" className="faq section panel scrollSpysection">
      <div className="section-outer panel lg:mt-8 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-5 sticky-element">
                <div
                  className="uc-sticky-placeholder"
                  style={{ height: 0, width: 0, margin: 0 }}
                  hidden=""
                />
                <div className="panel vstack items-start gap-2 uc-sticky">
                  <h2 className="h3 lg:h2 m-0 text-white">
                    What You’ll Achieve by the End of This Free,{" "}
                    <span className="text-primary">
                      7-Day Intensive AEO Course
                    </span>
                  </h2>
                </div>
              </div>
              <div className="lg:col-6">
                <div className="panel">
                  <ul
                    className="gap-2 uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true"
                  >
                    <Accordion parentClass="panel p-2 md:p-4 border rounded-1-5" />
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
