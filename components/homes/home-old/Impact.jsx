import { featuresHome } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Impact() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 lg:pt-10 text-gray-700 dark:text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                STAY AHEAD OF THE CURVE
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-tertiary dark:text-white">
                AI Visibility Agency Expertise + Tool Intelligence ={" "}
                <span className="d-inline-flex px-1 bg-tertiary-500 text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  AI Monitor
                </span>
              </h2>
              {/* <h2 className="h3 lg:h2 xl:h1 m-0">
                <span className="text-tertiary dark:text-primary">
                  Double the Impact
                </span>{" "}
                Agency Expertise + Tool Intelligence ={" "}
                <span className="text-tertiary dark:text-primary">
                  AI Monitor
                </span>{" "}
              </h2> */}
              <p className="fs-6 xl:fs-5 xl:px-8">
                We began with a simple idea: growth shouldn’t be complicated.
                Most businesses choose between hiring an agency for strategy or
                using a tool for data. With AI Monitor, you don’t have to. We
                bring together the expertise of an agency and the precision of
                AI technology, delivering smarter insights, stronger visibility,
                and a future-proof digital strategy in one place.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8">
                While others focus only on Google optimization, we’re already
                helping clients get referenced and recommended by AI search
                platforms like ChatGPT and Google AI Overview. The result?
                Businesses working with us grow 47% faster, not because we keep
                up with change, but because we stay ahead of it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
