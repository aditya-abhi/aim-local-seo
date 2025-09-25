"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Purpose() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel pb-6 xl:pb-9 py-6 md:py-8 lg:pt-10 lg:pb-9 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white">
        <div className="container max-w-xl lg:max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white">
                PERFECT FOR
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                Your Brand. Your Story.
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  Everywhere AI Looks
                </span>
              </h2>

              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We help{" "}
                <strong>
                  SEO Experts, PR Professionals, startup Founders, and Inbound
                  Marketers
                </strong>{" "}
                track, optimize, and protect their brand’s presence across{" "}
                <strong>
                  ChatGPT, Google AI Overviews, Perplexity, Claude, and more,
                </strong>{" "}
                so you can stay ahead in the AI-driven search era.
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul
                  className="main-features-nav-narrow hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist"
                >
                  <li
                    className={`${activeTab == 1 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(1)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">SEO Experts</a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    className={`${activeTab == 2 ? "uc-active" : ""}`}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">PR Professionals</a>
                  </li>
                  <li
                    className={`${activeTab == 3 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(3)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Founders</a>
                  </li>
                  <li
                    className={`${activeTab == 4 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(4)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">
                      Inbound Marketers
                    </a>
                  </li>
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
                              alt="A SEO professional poasing"
                              src="/assets/images/template/seo.webp"
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
                                    Win Where It Matters Most - AI Search
                                    Visibility.
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    <li>
                                      <strong>Master GEO & AEO → </strong> Track
                                      your content’s performance across
                                      AI-driven search results and optimize
                                      visibility.
                                    </li>
                                    <li>
                                      <strong>Find Optimization Gaps → </strong>{" "}
                                      Identify where competitors are ranking in
                                      ChatGPT, Perplexity, and Google AI
                                      Overviews.
                                    </li>
                                    <li>
                                      <strong>
                                        Leverage Structured Data →{" "}
                                      </strong>{" "}
                                      Use AI-ready schema insights to boost
                                      brand discoverability.
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
                              alt="A PR professional doing media briefing"
                              src="/assets/images/template/pr.webp"
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
                                    Own the AI Narrative – Stay Visible and
                                    Trusted
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    <li>
                                      <strong>
                                        Protect Brand Reputation →{" "}
                                      </strong>{" "}
                                      Spot inaccurate AI-generated answers and
                                      take corrective action quickly.
                                    </li>
                                    <li>
                                      <strong>
                                        Ensure Narrative Consistency →{" "}
                                      </strong>{" "}
                                      Control how your brand is described across
                                      AI-powered platforms.
                                    </li>
                                    <li>
                                      <strong>Get Real-Time Alerts → </strong>{" "}
                                      Be instantly notified when AI tools
                                      mention your brand, positively or
                                      negatively.
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
                              alt="A founder appearing in the newspaper article"
                              src="/assets/images/template/founders.webp"
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
                                    Command the AI Landscape - Your Brand, Your
                                    Vision
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    <li>
                                      <strong>
                                        Monitor Brand Perception →{" "}
                                      </strong>
                                      Understand how AI engines represent your
                                      company in real time.
                                    </li>
                                    <li>
                                      <strong>Find Competitive Gaps → </strong>
                                      See where competitors are being featured
                                      across AI platforms. competitors are being
                                      featured across AI platforms.
                                    </li>
                                    <li>
                                      <strong>Stay in Control → </strong>
                                      Maintain message consistency and protect
                                      your brand’s position in AI-driven search.
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
                {activeTab == 4 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Inbound marketer posing with an office background"
                              src="/assets/images/template/inbound.webp"
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
                                    Don’t Let AI Overlook Your Campaigns - Stay
                                    in Control.
                                  </h3>
                                  <ul className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    <li>
                                      <strong>Track Campaign Impact → </strong>
                                      See how your campaigns are mentioned
                                      across ChatGPT, Google AI Overviews, and
                                      Perplexity.
                                    </li>
                                    <li>
                                      <strong>
                                        Monitor Brand Sentiment →{" "}
                                      </strong>
                                      Get real-time insights into how AI engines
                                      describe your brand.
                                    </li>
                                    <li>
                                      <strong>
                                        Prove ROI to Leadership →{" "}
                                      </strong>
                                      Easily export AI visibility reports for
                                      presentations and stakeholders.
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
