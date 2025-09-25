"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

export default function Hero2() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      {/* <div className="position-absolute start-0 bottom-0 w-100 h-1/2 bg-gradient-to-t from-tertiary to-white dark:d-none"></div>
      <div className="position-absolute start-0 bottom-0 w-100 h-1/2 bg-gradient-to-t from-gray-800 to-gray-900 d-none dark:d-block"></div> */}
      <div className="section-outer panel bg-gradient-to-t from-primary-200 dark:from-gray-900 to-white dark:to-tertiary-800 rounded-bottom-2 mx-2">
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        ></div>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center gx-0">
              <div className="col-12 order-1 lg:order-0 lg:col-6 xl:col-6">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div
                    className="position-absolute rotate-180"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    // style={{ top: "20%" }}
                  >
                    <Image
                      className=""
                      alt="hero-image"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [-24, 180];"
                      src="/assets/images/vectors/bg.svg"
                      width={845}
                      height={1500}
                    />
                  </div>
                  <div className="panel overflow-hidden pt-9 z-2">
                    <Image
                      className=""
                      alt="Main hero image"
                      src="/assets/images/landing/hero-s.png"
                      width="1600"
                      height="1176"
                    />
                  </div>
                  <div
                    className="sm:hero-service-1 lg:hero-service-1 position-absolute w-150px xl:w-350px lg:d-block z-3"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ bottom: "10%" }}
                  >
                    <Image
                      className="rounded-2 shadow-lg border"
                      alt="hero-image"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [-24, 180];"
                      src="/assets/images/template/hero-15-graph-02.svg"
                      width={845}
                      height={963}
                    />
                  </div>
                  <div
                    className="hero-service-2 r--2 position-absolute w-200px xl:w-300px lg:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ top: "33%" }}
                  >
                    <Image
                      className="rounded-2 shadow-lg border"
                      alt="hero-image"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [-24, 48];"
                      src="/assets/images/template/hero-15-graph-01.svg"
                      width={656}
                      height={818}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 sm:col-9 lg:col-5 order-0 lg:order-1 pt-9 lg:pt-4">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2">
                    <span className="mb-2 text-tertiary dark:text-secondary">
                      Turn Conversations into Conversions.
                    </span>
                    <br className="d-none lg:d-block" />
                    <span className="px-1 py-0 bg-primary dark:bg-secondary text-tertiary">
                      Win SaaS on Reddit!
                    </span>
                    {/* Dominate AI Search with an Amazing Team. */}
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Stop wishing and start engaging. Our community-fueled
                    strategies decode Reddit conversations, spark leads, and
                    amplify brand trust.
                  </p>
                  <div className="panel mt-3 lg:mt-4">
                    <div className="row child-cols-12 lg:child-cols-6 justify-center gx-0">
                      <div className="vstack">
                        <div className="hstack gap-1 ">
                          <h2 className="h2 lg:h1 fw-bold mb-narrow text-primary">
                            90%
                          </h2>
                        </div>
                        <span className="fs-7 fw-medium mb-narrow dark:text-white">
                          Organisations Use GenAI
                        </span>
                      </div>
                      <div className="vstack">
                        <div className="hstack gap-1">
                          <h2 className="h2 lg:h1 fw-bold mb-narrow text-primary">
                            4.4x
                          </h2>
                        </div>
                        <span className="fs-7 fw-medium mb-narrow dark:text-white">
                          Higher Conversions with AI
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-lg border rounded-2">
                    <div className="row child-cols justify-center lg:justify-between items-center gx-0 my-0 lg:my-2">
                      <div className="col-12 lg:col-6 xl:col-6 justify-end">
                        <div
                          className="vstack md:hstack gap-3 my-1 lg:mb-0 mx-2 sm-flex-column"
                          data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                        >
                          <Link
                            href={`https://appt.link/ai-monitor/30-minutes-introductory-call`}
                            target="_blank"
                            className="btn btn-xl btn-tertiary text-white hover:bg-primary hover:text-tertiary dark:border-secondary dark:bg-primary dark:text-tertiary dark:hover:bg-secondary dark:hover:text-tertiary dark:hover:border-primary border-2 px-2 w-auto"
                          >
                            {/* <i className="icon-narrow unicon-chat-launch fw-bold" /> */}
                            <span>Book a free Call</span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 lg:col-6 xl:col-6">
                        <div className="vstack md:hstack justify-center lg:justify-start my-1 fdr">
                          <div className="hstack justify-center gap-0">
                            <Image
                              alt="Avatar-image"
                              className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900"
                              src="/assets/images/avatars/02.jpg"
                              width="96"
                              height="96"
                            />
                            <Image
                              alt="Avatar-image"
                              className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                              src="/assets/images/avatars/05.png"
                              width="150"
                              height="150"
                            />
                            <Image
                              alt="Avatar-image"
                              className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                              src="/assets/images/avatars/02.png"
                              width="150"
                              height="150"
                            />
                            <Image
                              alt="Avatar-image"
                              className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                              src="/assets/images/avatars/01.jpg"
                              width="96"
                              height="96"
                            />
                          </div>
                          <div className="panel ">
                            <span className="fs-7 fw-medium dark:text-white">
                              2,4k trusted us
                            </span>
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
    </div>
  );
}
