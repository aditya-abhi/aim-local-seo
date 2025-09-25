"use client";
import Image from "next/image";
import React from "react";
import { openGeoEnrollModal } from "@/utlis/toggleGeoEnrollModal";

export default function Cta() {
  return (
    <div
      id="uc_cta"
      className="uc-cta panel overflow-hidden z-1"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
    >
      <div className="section-outer py-6 lg:py-8 xl:py-10">
        <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed" />
        <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed" />
        <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="position-absolute rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "0%", right: "11%" }}
              data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 50;"
            >
              <Image
                className=""
                alt="ChatGPT Logo"
                src="/assets/images/apps/gpt.webp"
                width={800}
                height={800}
              />
            </div>
            <div
              className="position-absolute rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "-19%", left: "25%" }}
              data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
            >
              <Image
                className="Gemini Logo"
                alt="brand"
                src="/assets/images/apps//gemini.webp"
                width={800}
                height={800}
              />
            </div>
            <div
              className="position-absolute bg-gradient-45 from-pink-100 to-orange-100 rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "20%", left: "-1.5%" }}
              data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
            >
              <Image
                className=""
                alt="Perplexity Logo"
                src="/assets/images/apps/perplexity.webp"
                width={2500}
                height={2311}
              />
            </div>
            <div
              className="position-absolute rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "45%", right: "-1.5%" }}
              data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 50;"
            >
              <Image
                className=""
                alt="Copilot Logo"
                data-uc-svg=""
                src="/assets/images/apps/copilot.webp"
                width={351}
                height={373}
              />
            </div>
            <div
              className="position-absolute bg-white rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "65%", right: "20%" }}
              data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
            >
              <Image
                className=""
                alt="Deepseak Logo"
                src="/assets/images/apps/deepseak.webp"
                width={800}
                height={800}
              />
            </div>
            <div
              className="position-absolute rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "75%", left: "10.5%" }}
              data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
            >
              <Image
                className=""
                alt="Grok Logo"
                src="/assets/images/apps/grok.webp"
                width={333}
                height={300}
              />
            </div>
            <div className="panel vstack items-center gap-2 max-w-md mx-auto text-center px-4 lg:px-0">
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Get started today!
              </span>
              <h2 className="h2 xl:display-5 m-0 text-center">
                Secure Your Spot{" "}
                <span className="text-tertiary dark:text-primary">Today</span>
              </h2>
              <p className="fs-5 lg:fs-4">
                This free GEO course is limited to the first 500 participants to
                ensure a high-quality learning experience.
              </p>
              <div
                className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4"
                data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="mb-2 lg:mb-3">
                  <a
                    onClick={openGeoEnrollModal}
                    aria-label="Button to claim your free Generative Engine Optimization Course spot"
                    className="btn btn-md xl:btn-lg btn-primary hover:bg-tertiary hover:text-primary border px-3 lg:px-5 w-auto"
                    role="button"
                  >
                    <span>Claim Your Spot Now!</span>
                  </a>
                </div>
                <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-row md-flex-column">
                  <div className="hstack justify-center gap-2">
                    <b>Super</b>
                    <div className="rating panel">
                      <div className="hstack justify-center gap-narrow">
                        <i
                          className="icon unicon-star-filled text-white p-narrow"
                          style={{ backgroundColor: "#00b67a" }}
                        />
                        <i
                          className="icon unicon-star-filled text-white p-narrow"
                          style={{ backgroundColor: "#00b67a" }}
                        />
                        <i
                          className="icon unicon-star-filled text-white p-narrow"
                          style={{ backgroundColor: "#00b67a" }}
                        />
                        <i
                          className="icon unicon-star-filled text-white p-narrow"
                          style={{ backgroundColor: "#00b67a" }}
                        />
                        <i
                          className="icon unicon-star-half-filled text-white p-narrow"
                          style={{ backgroundColor: "#00b67a" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hstack justify-center gap-narrow">
                    <span className="desc rtl:order-first">
                      with reviews on <strong>Trustpilot and G2</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
