"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { mailer } from "@/utlis/mailer";
import { openGeoEnrollModal } from "@/utlis/toggleGeoEnrollModal";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-8 lg:py-9 xl:py-10 bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 mx-2">
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="">
                <div className="panel vstack gap-2 lg:gap-6">
                  <div className="sticky-scene panel">
                    <div
                      className="px-4 lg:px-6 py-4 lg:py-6 bg-white rounded-2"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="row child-cols col-match justify-between g-4 lg:g-6 xl:g-6">
                        <div className="order-0 lg:order-1">
                          <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                            <img
                              src="../../../assets/images/portrait/geo-course-hero.webp"
                              alt="Hero Image"
                            />
                          </div>
                        </div>
                        <div className="order-1 lg:order-0 col-12 sm:col-6">
                          <div className="panel vstack justify-center gap-4 h-100">
                            <div>
                              <div className="panel vstack gap-2">
                                <h1 className="h2 lg:h1 m-0 text-tertiary">
                                  Generative Engine Optimization (GEO) Course
                                </h1>
                                <p className="fs-6 lg:fs-5 opacity-70 text-dark">
                                  Master the skills to get your brand discovered
                                  in ChatGPT, Google AI Overview, Perplexity AI,
                                  and more.
                                </p>
                                <p className="fs-6 lg:fs-5 opacity-70 mt-0 text-dark">
                                  Generative Engine Optimization (GEO) is the
                                  practice of making your content visible and
                                  cite-worthy in AI-generated answers, not just
                                  in traditional search results. In this
                                  intensive 7-day course, you’ll learn how to
                                  optimize for AI platforms, structure your
                                  content for citation, and future-proof your
                                  brand visibility in an era where users get
                                  answers from AI, not links.
                                </p>
                                <div className="panel mt-3 lg:mt-4">
                                  <div className="row child-cols-12 lg:child-cols-4 justify-center gx-0">
                                    <div className="vstack">
                                      <div className="hstack justify-center gap-1">
                                        <span className="icon mb-narrow">
                                          <i
                                            className="icon unicon-star-filled text-white p-narrow"
                                            style={{
                                              backgroundColor: "#00b67a",
                                            }}
                                          />
                                        </span>
                                        <div className="vstack">
                                          <span className="fs-2 fw-bold mb-narrow text-inherit text-tertiary">
                                            4.5
                                          </span>
                                        </div>
                                      </div>
                                      <span className="fs-7 fw-medium mb-narrow text-dark">
                                        Average Rating
                                      </span>
                                    </div>
                                    <div className="vstack">
                                      <div className="hstack justify-center gap-1">
                                        <span className="icon mb-narrow">
                                          <i
                                            className="icon unicon-calendar text-white p-narrow"
                                            style={{
                                              backgroundColor: "#00b67a",
                                            }}
                                          />
                                        </span>
                                        <div className="vstack">
                                          <span className="fs-2 fw-bold mb-narrow text-tertiary">
                                            7 Days
                                          </span>
                                        </div>
                                      </div>
                                      <span className="fs-7 fw-medium mb-narrow text-dark">
                                        Course Duration
                                      </span>
                                    </div>
                                    <div className="vstack">
                                      <div className="hstack justify-center gap-1">
                                        <span className="icon mb-narrow">
                                          <i
                                            className="icon unicon-star-filled text-white p-narrow"
                                            style={{
                                              backgroundColor: "#00b67a",
                                            }}
                                          />
                                        </span>
                                        <div className="vstack">
                                          <span className="fs-2 fw-bold mb-narrow text-tertiary">
                                            5000+
                                          </span>
                                        </div>
                                      </div>
                                      <span className="fs-7 fw-medium mb-narrow text-dark">
                                        Learners
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="panel mt-3 lg:mt-2">
                                  <a
                                    onClick={openGeoEnrollModal}
                                    className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                                    role="button"
                                  >
                                    Enroll Now
                                  </a>
                                  <span className="fs-7 text-dark text-opacity-70 ms-3 text-line-through text-center">
                                    $249
                                  </span>
                                  <span className="fs-2 text-primary ms-1">
                                    Free
                                  </span>
                                </div>
                                {/* <button
                                  // class="ml-onclick-form"
                                  className="button button-lg button-primary"
                                  onclick="ml('show', '3ttGXK', true)"
                                >
                                  Click here to show form
                                </button> */}
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
