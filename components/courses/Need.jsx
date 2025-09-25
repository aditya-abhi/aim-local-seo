import { coursesNeed } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Need() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 bg-tertiary-700 lg:mx-2 lg:rounded-2">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel vstack items-center gap-4 lg:gap-6 xl:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 sm:max-w-600px lg:max-w-700px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {/* <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Solutions
              </span> */}
              <h2 className="h3 lg:h2 xl:h1 m-0 text-gray-700 dark:text-secondary">
                AI Search Is{" "}
                <span className="text-primary">
                  Redefining Digital Visibility
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8 text-gray-700 dark:text-white">
                With the rise of answer engines, generative engines, and
                AI-powered platforms, traditional SEO is no longer enough.
                Mastering AEO, GEO, AIO, and LLM SEO is now essential to stay
                visible and competitive in 2025.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 g-2 col-match"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {coursesNeed.map((feature, index) => (
                <div key={index} className={feature.order}>
                  <div className="features-item hstack items-start gap-2 lg:gap-4 p-2 lg:p-4 py-4 lg:py-6 bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-1-5">
                    <div className="icon-box cstack rounded w-1/3">
                      <Image
                        className="min-w-80px text-tertiary dark:text-primary"
                        alt={feature.alt}
                        src={feature.src}
                        width={80}
                        height={80}
                        data-uc-svg=""
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-1">
                        <h3 className="title h6 lg:h5 xl:h4 m-0">
                          {feature.title}
                        </h3>
                        <p className="desc fs-6 dark:text-white">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="panel w-100 max-w-xl mt-4 lg:mt-6 xl:mt-8"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <div
                  className="row child-cols col-match items-center justify-center text-center gy-4 lg:gy-8"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                >
                  <div style={{ transform: "translateY(0px)", opacity: 1 }}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary dark:text-secondary">
                        4.8/5
                      </h5>
                      <p className="fw-medium text-white">
                        Average satisfaction rating
                      </p>
                    </div>
                  </div>
                  <div style={{ transform: "translateY(0px)", opacity: 1 }}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary dark:text-secondary">
                        5000+
                      </h5>
                      <p className="fw-medium text-white">Learners Enrolled</p>
                    </div>
                  </div>
                  <div style={{ transform: "translateY(0px)", opacity: 1 }}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary dark:text-secondary">
                        96%
                      </h5>
                      <p className="fw-medium text-white">Completion rate</p>
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
