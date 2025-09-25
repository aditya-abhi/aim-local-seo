import { features10, featuresMain } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Problems() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 dark:text-white dark:text-opacity-70 mx-2 ">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h1 m-0">
                You're Losing Customers to Your Competition{" "}
                <span className="text-tertiary dark:text-primary">
                  Every Single Day.
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                A strong local presence doesn't just build brand awareness; it
                directly drives high-intent customers to your door.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 col-match g-2 lg:g-4 text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {featuresMain.map((feature, index) => (
                <div key={index}>
                  <div className="panel vstack gap-2 p-2 overflow-hidden bg-secondary text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15 items-center justify-center text-center">
                    <div className="panel lg:max-w-300px lg:min-w-300px items-center justify-center">
                      <Image
                        className="rounded-1-5 border border-dark dark:border-white dark:border-opacity-15"
                        alt={feature.alt}
                        src={feature.src}
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-2 text-center">
                      <h4 className="h4 m-0 text-inherit">{feature.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
