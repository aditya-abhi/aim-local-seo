"use client";
import { pricingPlans3 } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Stats() {
  const [isYearly, setIsYearly] = useState(false);
  const [showFullFeatures, setShowFullFeatures] = useState(false);
  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 lg:mx-2 mt-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="section-header vstack items-center gap-2 lg:gap-3"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
                  AI Has Changed the{" "}
                  <span className="text-tertiary dark:text-primary">
                    Search Forever
                  </span>
                </h2>
                <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                  ChatGPT, Google AI Overviews, and Perplexity AI are redefining
                  visibility. The rules have shifted; your brand must adapt or
                  risk disappearing.
                </p>
              </div>
            </div>
            <div
              className="pricing-benefits panel vstack gap-2 lg:gap-3 mt-6 lg:mt-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="row child-cols-6 lg:child-cols g-2 col-match"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white dark:bg-secondary text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-01.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      <span className="fs-4 fw-bold text-primary dark:text-tertiary">
                        47%
                      </span>{" "}
                      of Google searches now show AI Overviews, replacing
                      organic results.
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white dark:bg-secondary text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-08.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Businesses report{" "}
                      <span className="fs-4 fw-bold text-primary dark:text-tertiary">
                        20–70% drop
                      </span>{" "}
                      in traffic due to AI-generated answers.
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white dark:bg-secondary text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-07.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      By 2026, brands relying only on SEO risk a{" "}
                      <span className="fs-4 fw-bold text-primary dark:text-tertiary">
                        40% decline
                      </span>{" "}
                      in visibility.
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white dark:bg-secondary text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-04.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Generative Engine Optimization strategies can boost
                      AI-driven visibility by up to{" "}
                      <span className="fs-4 fw-bold text-primary dark:text-tertiary">
                        40%
                      </span>
                      .
                    </span>
                  </div>
                </div>
                {/* <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-05.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Third-Party Management &amp; AI-Powered Tools
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
