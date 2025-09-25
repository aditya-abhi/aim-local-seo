import { featuresHome } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Facts() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 md:py-8 lg:pt-10 lg:pb-9 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-bold py-narrow px-2 border border-white rounded-pill">
                WELCOME TO GEO ERA
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                SEO is as Outdated as{" "}
                <span className="d-inline-flex px-1 text-primary">
                  Dial-up Internet
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Let's be honest “Just Google It” era is over! AI is getting
                chattier than your aunt at Thanksgiving. Here’s what’s
                happening:
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4 lg:g-6 col-match lg:pb-8 cstack items-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {featuresHome.map((feature, index) => (
                <div key={index} className={feature.order}>
                  <div className="features-item vstack items-center justify-center text-center gap-4">
                    <div className="icon-box cstack w-48px h-48px dark:bg-white rounded">
                      <Image
                        className="w-36px xl:w-40px"
                        alt="feature-icon"
                        src={feature.icon}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-1">
                        <h3 className="title h6 lg:h5 m-0">{feature.title}</h3>
                        <p className="desc fs-6 opacity-60 dark:opacity-90">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div
              className="panel vstack items-center gap-2 xl:gap-3 mt-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 m-0">
                Introducing the{" "}
                <span className="text-tertiary dark:text-primary">
                  First Command Center
                </span>{" "}
                for AI Visibility.
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                AI Monitor is the world's first open-source tool for Artificial
                Intelligence Optimization (AIO), Generative Engine Optimization
                (GEO), and Answer Engine Optimization (AEO). We built it to give
                brands, marketers, and developers a single platform to track,
                analyze, and influence their presence across the world's most
                important AI models.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
