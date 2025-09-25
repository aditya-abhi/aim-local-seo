"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FitFor() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9 py-6 md:py-8 lg:pt-10 lg:pb-9 ">
        <div className="container max-w-xl lg:max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-gray-700 dark:text-white">
                PERFECT FOR
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                The Old Way of Doing Things is{" "}
                <span className="text-tertiary dark:text-primary">
                  Costing You!
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                You're brilliant at what you do, but your process is holding you
                back.
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul
                  className="main-features-nav hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist"
                >
                  <li
                    className={`${activeTab == 1 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(1)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0 dark:hover:text-primary">
                      SEO Agencies
                    </a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    className={`${activeTab == 2 ? "uc-active" : ""}`}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0 dark:hover:text-primary">
                      PR Agencies
                    </a>
                  </li>
                  <li
                    className={`${activeTab == 3 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(3)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0 dark:hover:text-primary">
                      Marketing Agencies
                    </a>
                  </li>
                  {/* <li
                    className={`${activeTab == 4 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(4)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">
                      Inbound Marketers
                    </a>
                  </li> */}
                </ul>
              </div>
              <div
                className="main-features-switcher uc-switcher overflow-hidden"
                role="presentation"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                {activeTab == 1 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="SEO professionals poasing"
                              src="/assets/images/features/seo-agency.webp"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Have you felt the disruption already hitting
                                    SEO?
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 dark:text-white">
                                    <li>
                                      <strong>New Client Demands → </strong>{" "}
                                      Brands must now be visible in AI summaries
                                      and chatbots—not just search result links.
                                    </li>
                                    <li className="mt-1">
                                      <strong>Obscurity in AI → </strong> Your
                                      high-ranking pages are skipped as AI
                                      delivers direct answers, erasing your
                                      visibility.
                                    </li>
                                    <li className="mt-1">
                                      <strong>The GEO Shift →</strong> Use
                                      Clinging to outdated SEO tactics is
                                      costing you relevance in the AI-first
                                      digital landscape
                                    </li>
                                  </ul>
                                  {/* <a
                                    href="#"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>See all integrations</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="PR professionals doing media briefing"
                              src="/assets/images/features/pr-agency.webp"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Are you seeing the rules of PR shifting?
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 dark:text-white">
                                    <li>
                                      <strong>Influence AI Narratives →</strong>{" "}
                                      Your client gets coverage, but AI
                                      summaries dilute or misrepresent their
                                      core message.
                                    </li>
                                    <li className="mt-1">
                                      <strong>Zero-Click Reality → </strong>{" "}
                                      You’re earning placements, yet AI
                                      overviews steal attention, your brand
                                      story goes unseen and untracked.
                                    </li>
                                    <li className="mt-1">
                                      <strong>Scale Brand Defense → </strong>{" "}
                                      Manual tools lag behind. AI-driven
                                      misinformation spreads fast, leaving your
                                      team reactive and exposed.
                                    </li>
                                  </ul>
                                  {/* <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="marketing professionals discussing strategy"
                              src="/assets/images/features/marketing-agency.webp"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Is marketing moving faster than you can keep
                                    up?
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 dark:text-white">
                                    <li>
                                      <strong>Unlocalized Content → </strong>
                                      Your campaigns are struggling to connect
                                      because you can’t scale geo-specific ads
                                      and posts for every market.
                                    </li>
                                    <li className="mt-1">
                                      <strong>Siloed Insights → </strong>
                                      Your data is stuck in silos, blocking AI
                                      from finding patterns that fuel stronger
                                      personalization and performance.
                                    </li>
                                    <li className="mt-1">
                                      <strong>Inefficient Spend → </strong>
                                      AI could optimize campaigns, but without
                                      automation, large-scale testing is
                                      impossible, and budgets get wasted.
                                    </li>
                                  </ul>
                                  {/* <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
