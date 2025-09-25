import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2";
import AccordionService1_1 from "@/components/common/ServiceAccordions/AccordionService1-1";
import AccordionService1_2 from "@/components/common/ServiceAccordions/AccordionService1-2";
import AccordionService1_3 from "@/components/common/ServiceAccordions/AccordionService1-3";

export default function Process() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 bg-white dark:bg-tertiary-800 dark:text-white"
    >
      <div className="section-outer panel lg:mt-8">
        <div className="container container-full">
          <div className="section-inner panel">
            <div className="items-center mt-4 mb-4 lg:mb-8 lg:mt-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center">
              <h2 className="h3 lg:h2 m-0">
                Our Roadmap to{" "}
                <span className="text-tertiary dark:text-primary">
                  AI Search Success
                </span>{" "}
              </h2>
              <p className="mt-2 fs-5 fw-bold">
                Winning in AI search isn’t luck - it’s strategy. Here’s how we
                guide your brand to dominate Google SGE, ChatGPT, Bing AI,
                Perplexity, and beyond.
              </p>
            </div>
            <div className="row child-cols-12 col-match g-0">
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src="/assets/images/template/feature-1.webp"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          Phase 1: Discovery & Strategy
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          We start by building a strong foundation with deep
                          collaboration and research.
                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          <ul
                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                            data-uc-accordion="collapsible: false"
                            style={{ "--divider-gap": "40px" }}
                          >
                            <AccordionService1_1 />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div
                      className="lg:order-2"
                      data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                    >
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0 lg:rounded-bottom-start-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src="/assets/images/template/feature-2.webp"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div
                      className="order-1"
                      data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    >
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          Phase 2: Build & Optimize
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          With a strategy in place, we optimize your brand to
                          shine in AI-driven search results.
                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          <ul
                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                            data-uc-accordion="collapsible: false"
                            style={{ "--divider-gap": "40px" }}
                          >
                            <AccordionService1_2 />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-end-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src="/assets/images/template/feature-1.webp"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          Phase 3: Launch & Growth
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          We don’t just launch, we grow, measure, and optimize
                          for long-term success.
                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          <ul
                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                            data-uc-accordion="collapsible: false"
                            style={{ "--divider-gap": "40px" }}
                          >
                            <AccordionService1_3 />
                          </ul>
                        </div>
                      </div>
                    </div>
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
