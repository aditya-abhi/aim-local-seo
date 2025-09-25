import { learningsGEO } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Learnings() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 dark:text-white dark:text-opacity-70 mx-2">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {/* <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Main Features
              </span> */}
              <h2 className="h3 lg:h2 m-0">
                What You Will{" "}
                <span className="text-tertiary dark:text-primary">Learn!</span>
              </h2>
              <p className="fs-6 xl:fs-4 xl:px-8 opacity-80">
                A complete pathway to GEO mastery covering expertise, training,
                certification, and career opportunities. I
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {learningsGEO.map((feature, index) => (
                <div key={index}>
                  <div className="panel vstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15 justify-center items-center">
                    <div className="panel max-w-300px lg:w-400px xl:w-450px lg:min-w-300px">
                      <Image
                        className="rounded-1-5 border dark:border-white dark:border-opacity-15"
                        alt={feature.alt}
                        src={feature.src}
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="pt-4 panel vstack items-center text-center p-2 lg:pb-3">
                      <h4 className="h4 m-0 text-inherit opacity-80">
                        {feature.title}
                      </h4>
                      <p className="opacity-80">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="panel mt-4 p-5 lg:py-4 rounded-2 bg-tertiary text-white"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <div className="vstack justify-between items-center justify-center">
                <i className="icon icon-4 unicon-quotes text-primary" />
                <p className="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4">
                  GEO is not the future of digital marketing—it's the present.
                  Those who master it now will have an insurmountable advantage
                  over people who adopt a wait and watch approach.
                </p>
                <p className="fs-5 sm:fs-5 lg:fs-4 fw-bold pb-4">
                  Avinash Tripathi, Co-founder{" "}
                  <a href="https://getaimonitor.com" className="text-primary">
                    AI Monitor
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
