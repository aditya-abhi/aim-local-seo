import { aboutUs, panelsData } from "@/data/plans";
import React from "react";
import Image from "next/image";

export default function Values() {
  return (
    <div
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-tertiary-700 lg:mx-2 lg:rounded-2">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Our Values it’s Simple!
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {aboutUs.map((panel) => (
                  <div key={panel.id}>
                    <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-white dark:bg-secondary">
                      <Image
                        className="w-64px lg:w-80px d-block dark:d-none"
                        src={panel.lightImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                      <Image
                        className="w-64px lg:w-80px d-none dark:d-block"
                        src={panel.darkImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                      <h5 className="h5 lg:h4 m-0 dark:text-dark">
                        {panel.title}
                      </h5>
                      <p className="fs-6 opacity-70 dark:text-dark">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
