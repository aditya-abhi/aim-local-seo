import { llmSeoService } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Problem() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel vstack items-center gap-4 lg:gap-6 xl:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 sm:max-w-600px lg:max-w-700px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {/* <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Solutions
              </span> */}
              <h2 className="h3 lg:h1 m-0">
                Are You Struggling to Get LLMs to{" "}
                <span className="text-tertiary dark:text-primary">
                  Recognize Your Brand?
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8 dark:text-white">
                Traditional SEO only optimizes for human search intent. We make
                your content AI-ready by structuring it in a way that large
                language models (LLMs) can easily interpret.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 g-2 col-match"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {llmSeoService.map((feature, index) => (
                <div key={index} className={feature.order}>
                  <div className="features-item hstack items-start gap-2 lg:gap-4 p-2 lg:p-4 py-4 lg:py-6 bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-1-5">
                    <div className="icon-box cstack rounded w-1/3">
                      <Image
                        className="min-w-40px max-w-40px text-tertiary dark:text-primary"
                        alt={feature.alt}
                        src={feature.src}
                        width={24}
                        height={24}
                        data-uc-svg=""
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-1">
                        <h3 className="title h6 lg:h5 m-0">{feature.title}</h3>
                        <p className="desc fs-6 dark:text-white">
                          {feature.description}
                        </p>
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
  );
}
