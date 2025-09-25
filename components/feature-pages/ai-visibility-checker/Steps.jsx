import { featureSteps1 } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Steps() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fw-bold text-primary dark:text-secondary">
                Main features
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                3 Easy Steps to Set Up Your AI Dashboard
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                How We Turn AI Chaos Into Clarity
              </p>
            </div>
            {/* <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              {featureSteps1.map((elm, i) => (
                <div key={i}>
                  <div className="feature-item panel">
                    <div className="row child-cols items-center justify-between g-2 md:g-4">
                      <div
                        className={
                          elm.reverseOrder
                            ? "col-12 md:col-6 lg:col-5 md:order-2"
                            : "col-12 md:col-6 lg:col-5"
                        }
                      >
                        <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              src={elm.imageSrc}
                              width={1400}
                              height={1412}
                              alt="Ensuring timely delivery and maximum efficiency"
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        className={
                          elm.reverseOrder
                            ? "col-12 md:col-6 lg:col-6 md:order-1"
                            : "col-12 md:col-6 lg:col-6"
                        }
                      >
                        <div className="panel">
                          <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                            <div>
                              <div className="panel vstack gap-2">
                                <span className="cstack w-48px h-48px bg-primary text-secondary rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                  <i className={`icon-1 ${elm.icon}`} />
                                </span>
                                <h3 className="h4 sm:h3 xl:h2 m-0">
                                  {elm.title}
                                </h3>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  {elm.description}
                                </p>
                                <a
                                  href="#"
                                  className="uc-link dark:text-secondary fw-bold hstack gap-narrow sm:mt-1 lg:mt-2"
                                >
                                  <span>Let's find out</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            {/* Step-1 */}
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6 my-4 lg:my-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              <div>
                <div className="feature-item panel">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            src="/assets/images/template/brand-scope-1.webp"
                            width={1400}
                            height={1412}
                            alt="Ensuring timely delivery and maximum efficiency"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px bg-tertiary dark:bg-primary text-white fw-bold rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                <i className="unicon-login icon-2" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Step 1 — Enter Your Brand Domain
                              </h3>
                              <div className="text-gray-800 dark:text-white mt-4">
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Start by adding your brand’s website URL.
                                </p>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Our system automatically scans and analyzes
                                  your domain to prepare your personalized
                                  dashboard setup.
                                </p>
                                <ul className="mt-2">
                                  <li>
                                    <strong>Just enter your domain →</strong>{" "}
                                    Hit Analyze → Done!
                                  </li>
                                  <li>
                                    <strong>Zero manual setup,</strong>{" "}
                                    everything starts from your website.
                                  </li>
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
            {/* Step-2 */}
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6 my-4 lg:my-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              <div>
                <div className="feature-item panel">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            src="/assets/images/template/brand-scope-2.webp"
                            width={1400}
                            height={1412}
                            alt="Ensuring timely delivery and maximum efficiency"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px bg-tertiary dark:bg-primary text-white fw-bold rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                <i className="unicon-list icon-2" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Step 2 — Review & Customize Your Brand Profile
                              </h3>
                              <div className="text-gray-800 dark:text-white mt-4">
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Once we analyze your domain, we generate a
                                  complete brand intelligence profile —
                                  including:
                                </p>
                                <ul className="mt-2">
                                  <li>
                                    <strong>Brand Description →</strong>{" "}
                                    Products & services you offer
                                  </li>
                                  <li>
                                    <strong>
                                      Key Topics & Semantic Clusters →
                                    </strong>{" "}
                                    How AI categorizes your niche
                                  </li>
                                  <li>
                                    <strong>Competitors →</strong> Who you’re
                                    compared against in AI answers
                                  </li>
                                </ul>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 ">
                                  Want to tweak something? You can edit your
                                  brand info, add/remove services, or change
                                  competitors' full control, your way.
                                </p>
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
            {/* Step-3 */}
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6 my-4 lg:my-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              <div>
                <div className="feature-item panel">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            src="/assets/images/template/brand-scope-3.webp"
                            width={1400}
                            height={1412}
                            alt="Ensuring timely delivery and maximum efficiency"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px bg-tertiary dark:bg-primary text-white fw-bold rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                <i className="unicon-face-satisfied icon-2" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Step 3 — Explore & Customize Queries
                              </h3>
                              <div className="text-gray-800 dark:text-white mt-4">
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Finally, we give you a list of AI-driven
                                  queries related to your brand, products, and
                                  competitors.
                                </p>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 mt-2">
                                  These are the same real queries users ask
                                  across ChatGPT, Perplexity, Google AI
                                  Overviews, and more.
                                </p>
                                <ul className="mt-2">
                                  <li>
                                    See exactly what people (and AI) are saying
                                    about you
                                  </li>
                                  <li>
                                    Filter or add your own custom queries to
                                    track specific topics
                                  </li>
                                  <li>
                                    Personalize your visibility insights in
                                    seconds
                                  </li>
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
        </div>
      </div>
    </div>
  );
}
