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
                3 Easy Steps to Monitor Your AI Bot Traffic
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                How We Turn Your AI Blind Spots Into Clear Traffic Attribution
              </p>
            </div>
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
                            src="/assets/images/tools/feature3-1.webp"
                            width={1400}
                            height={1412}
                            alt="Sign Up & Activate Your Account with AI Crawlability Clinic"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px bg-primary text-secondary rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                <i className="unicon-cloud-download" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Step 1 — Sign Up & Activate Your Account
                              </h3>
                              <div className="text-gray-800 dark:text-white mt-4">
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Kick things off with a quick and secure
                                  registration. Just enter your name and email
                                  to create your account. You’ll receive an
                                  activation link instantly—click it to unlock
                                  your dashboard.
                                </p>
                                <ul className="mt-2">
                                  <li>
                                    <strong>Enter your name and email →</strong>{" "}
                                    Create your account
                                  </li>
                                  <li>
                                    <strong>Check your inbox →</strong> Click
                                    the activation link
                                  </li>
                                  <li>
                                    <strong>No setup required →</strong> Start
                                    tracking in minutes
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
                            src="/assets/images/tools/feature3-2.webp"
                            width={1400}
                            height={1412}
                            alt="Add Your Domain & Install the Pixel code provided"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px bg-primary text-secondary rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                <i className="unicon-cloud-download" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Step 2 — Add Your Domain & Install the Pixel
                              </h3>
                              <div className="text-gray-800 dark:text-white mt-4">
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Once activated, enter the domain you want to
                                  monitor. Our system begins scanning AI Bot
                                  traffic on your website. To complete the
                                  setup, copy your unique Pixel code and paste
                                  it into your site’s section.
                                </p>
                                <ul className="mt-2">
                                  <li>
                                    <strong>Enter your website domain →</strong>{" "}
                                    Generate your Pixel
                                  </li>
                                  <li>
                                    <strong>
                                      Paste the code into your site’s →
                                    </strong>{" "}
                                    Save and publish
                                  </li>
                                  <li>
                                    <strong>AI Bot traffic tracking →</strong>{" "}
                                    Activated instantly
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
                            src="/assets/images/tools/feature3-3.webp"
                            width={1400}
                            height={1412}
                            alt="Explore Your AI Crawlability Clinic Dashboard"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px bg-primary text-secondary rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                <i className="unicon-cloud-download" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Step 3 — Explore Your Bot Dashboard
                              </h3>
                              <div className="text-gray-800 dark:text-white mt-4">
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  Dive into real-time insights on AI bot
                                  activity. Monitor visit frequency, bot
                                  identities, and behavioral patterns across
                                  your site. Track the behavioral trends,
                                  updated in real-time for precision and
                                  clarity.
                                </p>
                                <ul className="mt-2">
                                  <li>
                                    <strong>
                                      View bot names & visit frequency →
                                    </strong>{" "}
                                    In real-time
                                  </li>
                                  <li>
                                    <strong>Track Bot sources →</strong> Updated
                                    hourly
                                  </li>
                                  <li>
                                    <strong>Spot behavioral patterns →</strong>{" "}
                                    Understand bot intent & engagemen
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
