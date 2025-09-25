"use client";

import { pricingNew } from "@/data/pricing";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Pricing() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 pt-6 lg:pt-8 xl:pt-10 lg:mx-2 lg:rounded-2 bg-tertiary-700">
        <div className="container ">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center  items-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-white max-w-fc">
                  WORD WIDE PRESENCE
                </span>
                <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                  Want to Make ChatGPT <br />
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Work For You?
                  </span>
                </h2>
                <p className="fs-6 text-secondary xl:fs-5">
                  Join the Best GEO & AEO Community on Earth! (Martians left us
                  on read—classic aliens.)
                </p>
              </div>
              <div className="content panel w-100"></div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                <div
                  className="panel max-w-100 mt-2 rounded lg:rounded-1-5 xl:rounded-2 overflow-hidden"
                  data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;"
                >
                  <img
                    src="/assets/images/template/world-map.webp"
                    alt="World map"
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px h-56px d-none lg:d-block"
                  style={{ top: "37%", right: "49%" }}
                  data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Germany Flag"
                    src="/assets/images/flags/germany.webp"
                    width={800}
                    height={800}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px h-56px d-none lg:d-block"
                  style={{ top: "27%", left: "12%" }}
                  data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
                >
                  <Image
                    className=""
                    alt="Canada Flag"
                    src="/assets/images/flags/canada.webp"
                    width={800}
                    height={800}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px h-56px d-none lg:d-block"
                  style={{ top: "40%", left: "18%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
                >
                  <Image
                    className=""
                    alt="United States of America Flag"
                    src="/assets/images/flags/usa.webp"
                    width={2500}
                    height={2311}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ bottom: "20%", right: "15%" }}
                  data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Australia Flag"
                    data-uc-svg=""
                    src="/assets/images/flags/australia.webp"
                    width={351}
                    height={373}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "52%", right: "29.5%" }}
                  data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
                >
                  <Image
                    className=""
                    alt="India Flag"
                    src="/assets/images/flags/india.webp"
                    width={800}
                    height={800}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "31%", right: "52%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="United Kingdom Flag"
                    src="/assets/images/flags/uk.webp"
                    width={333}
                    height={300}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "42%", right: "12%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Japan Flag"
                    src="/assets/images/flags/japan.webp"
                    width={333}
                    height={300}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "70%", left: "30%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Brazil Flag"
                    src="/assets/images/flags/brazil.webp"
                    width={333}
                    height={300}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "42%", right: "42.5%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Turkey Flag"
                    src="/assets/images/flags/turkey.webp"
                    width={333}
                    height={300}
                  />
                </div>
              </div>
              <div className="mb-2 lg:mb-3">
                <a
                  href="#"
                  className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                >
                  <span className="text-tertiary">Join our Community</span>
                </a>
                {/* <AppointletButton bookingPageUrl={appointletURL} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
