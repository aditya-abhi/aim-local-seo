import React from "react";

export default function Quote() {
  return (
    <div
      id="clients_feedback"
      className="clients-feedback section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div
            className="section-inner panel swiper-parent"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="panel p-3 lg:p-6 bg-tertiary text-white rounded-3 sm:mt-6 my-8">
              <div className="row child-cols-12 g-3 lg:g-8">
                <div>
                  <div className="panel rounded-2 overflow-hidden">
                    <div className="panel vstack justify-between items-center gap-2 lg:gap-3 h-100 text-center">
                      <div className="panel">
                        <i className="icon icon-4 unicon-quotes text-primary" />
                        <p className="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4 pb-4">
                          Stop missing out on the 65% of users who bypass
                          traditional search. With the Best Generative Engine
                          Optimization Course. You’ll learn how to dominate
                          platforms like ChatGPT, Google AI Overview, and
                          Microsoft Copilot, ensuring your content stands out in
                          AI-driven search results with this free GEO Course.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
