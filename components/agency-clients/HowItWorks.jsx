import { features3 } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white text-uppercase">
                  How It Works
                </span>
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Your Path to{" "}
                  <span className="text-tertiary dark:text-primary">
                    AI-Driven Growth
                  </span>
                </h2>
                <p className="fs-6 xl:fs-5 xl:px-8">
                  We've built a two-part solution to not only help you thrive in
                  the AI era but also to grow your business effortlessly.
                </p>
              </div>
              <div
                className="feature-item panel items-center"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/template/feature-01.svg"
                        width={780}
                        height={728}
                        alt="Test alt"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-between gap-4 sm:gap-6 h-100 mt-2 lg:mt-4 xl:mt-6">
                      <div>
                        <div className="panel vstack gap-2">
                          <h3 className="h4 lg:h3 xl:h2 m-0">
                            The Foundation: AI Search Optimization as a Service
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-4">
                            First, we equip you with a powerful platform to
                            offer AI Search Optimization Services to your
                            clients, services they are already demanding.
                          </p>
                          <ul>
                            <li>
                              <strong>A Single Source of Truth:</strong> Get all
                              the tools you need from geo-specific content
                              generation to performance analytics in one
                              centralized platform.
                            </li>
                            <li className="mt-2">
                              <strong>Instant AI Integration:</strong>{" "}
                              Effortlessly transition into the AI era without
                              hiring an expensive team of data scientists. Our
                              tool handles the complexity for you.
                            </li>
                            <li className="mt-2">
                              <strong>Streamlined Operations:</strong> Automate
                              time-consuming tasks and get back to what matters:
                              client strategy and creative work.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
              <div
                className="feature-item panel items-center"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/template/feature-01.svg"
                        width={780}
                        height={728}
                        alt="Test alt"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-between gap-4 lg:gap-6 h-100 mt-2 lg:mt-4 xl:mt-6">
                      <div>
                        <div className="panel vstack gap-2">
                          <h3 className="h4 lg:h3 xl:h2 m-0">
                            The Partnership: We Find the Clients, You Win the
                            Business
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-4">
                            Ready to accelerate your growth? We act as a client
                            finder. We are constantly approached by users who
                            need services but want an agency that's ready for
                            the AI-first world.
                          </p>
                          <ul>
                            <li>
                              <strong>You Become a Partner:</strong> Join our
                              exclusive network of certified agencies.
                            </li>
                            <li className="mt-2">
                              <strong>We Send You Qualified Leads:</strong> We
                              connect you with a steady stream of pre-qualified
                              leads who are specifically looking for an agency
                              like yours.
                            </li>
                            <li className="mt-2">
                              <strong>You Focus on Closing:</strong> Instead of
                              spending time on business development, your team
                              can focus on what they do best: creating great
                              work and winning new business.
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
  );
}
