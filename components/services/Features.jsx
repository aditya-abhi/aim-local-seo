import { servicesFeature } from "@/data/features";
import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                Search Has Changed.{" "}
                <span className="text-tertiary dark:text-primary">
                  Have You?
                </span>
                {/* <span className="text-primary"> Lexend.</span> */}
              </h2>
              <div className=" text-center">
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mb-0">
                  The age of "10 blue links" is over. Today, customers get
                  instant, definitive answers from AI. Platforms like ChatGPT,
                  Google AI Overviews, and Perplexity are the new starting point
                  for buying decisions.
                </p>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  If your brand isn't cited in these AI-generated answers,
                  you're not only losing clicks, but you're also becoming
                  invisible. Traditional SEO was about climbing a list; today,
                  it is about becoming the source.
                </p>
              </div>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 items-center justify-center"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {servicesFeature.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item panel p-4 border rounded-2 hover:bg-primary dark:hover:bg-primary dark:text-white dark:hover:text-gray-900 hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          {/* <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" /> */}
                          <div className="vstack justify-between gap-2 h-100">
                            <i className={`icon icon-4 ${feature.icon}`} />
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
