import { features8, featuresPage } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 lg:mb-10 bg-tertiary-700 mx-2 rounded-2">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {/* <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Features
              </span> */}
              <h2 className="h3 lg:h2 m-0 text-white">
                3 Powerful Features.{" "}
                <span className="text-primary">1 Open-Source Platform.</span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8 text-white">
                Cover every angle of AI visibility with purpose-built monitors
                for your brand, traffic, and bots.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {featuresPage.map((feature, index) => (
                <div key={index}>
                  <div className="panel overflow-hidden bg-secondary text-gray-900 rounded-2">
                    <div className="panel p-2 pb-0">
                      <Image
                        className="rounded-1-5"
                        alt=""
                        src={feature.imgSrc}
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-3 lg:p-4">
                      <h4 className="h4 m-0 text-inherit">{feature.title}</h4>
                      <p>{feature.desc}</p>
                      <a
                        href={`${feature.link}`}
                        className="btn btn-sm btn-primary border px-2 mt-2"
                      >
                        <span>Try it now</span>
                        <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                      </a>
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
