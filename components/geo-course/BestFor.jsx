import { bestForGEO } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BestFor() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                RECOMMENDED FOR
              </span>
              <h2 className="h3 lg:h2 m-0">
                Who Should Attend This{" "}
                <span className="text-primary">
                  Generative Engine Optimization (GEO)
                </span>{" "}
                Course?
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                This course is PERFECT for:
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4 lg:g-6 col-match"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {bestForGEO.map((feature, index) => (
                <div key={index} className={feature.order}>
                  <div className="features-item vstack items-center justify-center text-center gap-4">
                    <div className="icon-box cstack w-48px h-48px dark:bg-white rounded">
                      <Image
                        className="w-24px xl:w-32px"
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
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="fs-5 xl:fs-4 xl:px-8 items-center text-center pt-6">
              Whether you manage content for a brand, run your own agency, or
              want to stay ahead of the curve, this course gives you proven,
              actionable strategies to ensure your content is seen, cited, and
              recommended by AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
