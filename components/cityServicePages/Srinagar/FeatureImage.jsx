"use client";

import { pricingNew } from "@/data/pricing";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function FeatureImage() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 pt-6">
        <div className="container container-90">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              {/* <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center  items-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              ></div> */}
              <div className="content panel min-w-100"></div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                <div
                  className="panel mt-2 rounded lg:rounded-1-5 xl:rounded-2 overflow-hidden"
                  data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;"
                >
                  <img
                    className="d-block dark:d-none"
                    src="/assets/images/cities/srinagar-light.webp"
                    alt="Best-Generative-Engine-Optimization-Agency-in-Srinagar"
                  />
                  <img
                    className="d-none dark:d-block"
                    src="/assets/images/cities/srinagar-dark.webp"
                    alt="Best-Generative-Engine-Optimization-Agency-in-Srinagar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
