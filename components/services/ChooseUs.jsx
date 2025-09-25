import { chooseUs } from "@/data/features";
import Link from "next/link";
import React from "react";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-tertiary-700 lg:mx-2 lg:rounded-2">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <h2 className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto text-white">
                  Why Leading Brands{" "}
                  <span className="text-primary">Choose AI Monitor</span>
                </h2>
                <p className="fs-6 lg:fs-5 fw-bold text-secondary mt-2">
                  We‘re not just another seo consultancy - we're a
                  research-driven partner shaping the future of AI visibility{" "}
                </p>
              </div>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {chooseUs.map((feature, index) => (
                    <div key={index}>
                      <div
                        className={`feature-item panel p-4 rounded-2 bg-secondary hover:bg-primary  hover:text-white hover:scale-105 duration-150 transition-all`}
                      >
                        <div className="vstack panel min-h-250px">
                          <div className="vstack items-center text-center justify-between gap-2 h-100">
                            <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-50">
                              <i className={`icon icon-4 ${feature.icon}`} />
                            </div>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
