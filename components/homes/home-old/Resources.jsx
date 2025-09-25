import React from "react";
import Image from "next/image";

export default function Resources() {
  return (
    <div id="features" className="features section panel scrollSpysection">
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 mb-6 lg:mb-8 xl:mb-10 bg-tertiary-700 lg:mx-2 lg:rounded-2">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border text-white border border-white rounded-pill">
                <span className="fs-8 fw-bold text-uppercase">
                  Resource Center
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                Featured Resources to Master{" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  AI Visibility
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                From insights and guides to podcasts and courses, we make it
                simple to understand, track, and improve your brand’s presence
                across AI-powered search.
              </p>
            </div>
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div>
                      <h3 className="mb-0">Actionable Blogs & Insights</h3>
                      <p className="fs-6 md:fs-5 m-0">
                        We break down the latest trends in AI search, GEO, AEO,
                        and Local SEO into simple, actionable takeaways so you
                        can make smarter decisions, faster.
                      </p>
                    </div>
                    <a
                      href="/blogs"
                      className="btn btn-sm btn-primary px-2 mt-2"
                    >
                      <span>Read Featured Blogs</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6">
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      alt=""
                      src="/assets/images/landing/blog.webp"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-gradient-45 from-primary to-tertiary-700 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel p-3">
                    <Image
                      className="rounded-bottom-1-5 lg:rounded-bottom-3"
                      alt="dashboard-components"
                      src="/assets/images/features/courses.webp"
                      width="664"
                      height="496"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2">
                      <h4 className="h4 m-0">Masterclasses & Certification</h4>
                      <p className="fs-6 lg:fs-5 dark:text-white">
                        We have structured courses and masterclasses to teach
                        you everything about Generative Engine Optimization
                        (GEO), Answer engine optimization, and brand visibility
                        — from basics to advanced tactics.
                      </p>
                    </div>
                    <a
                      href="/free-courses"
                      className="btn btn-sm btn-secondary text-tertiary px-2 mt-2"
                    >
                      <span>Explore Courses</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-black rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                >
                  <div className="panel px-3 lg:px-4 xl:px-6">
                    <Image
                      className="rounded-bottom-1-5 border border-top-0"
                      alt="ui components"
                      src="/assets/images/landing/guide.webp"
                      width="800"
                      height="620"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2 mt-1">
                      <h4 className="h4 m-0">Step-by-Step Guides</h4>
                      <p className="fs-6 lg:fs-5 dark:text-white">
                        No fluff. Just practical frameworks and hands-on
                        strategies for tracking visibility, optimizing
                        performance, and improving AI-driven search rankings.
                      </p>
                    </div>
                    <a
                      href="/most-comprehensive-generative-engine-optimization-geo-guide"
                      className="btn btn-sm btn-secondary text-tertiary px-2 mt-2"
                    >
                      <span>Get the Guide</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-7">
                <div
                  className="panel vstack items-start overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                >
                  <div
                    className="panel vstack items-center gap-1 p-3 lg:p-4"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 m-0">Expert-Led Podcasts</h4>
                    <p className="fs-6 md:fs-5 m-0 xl:px-4 text-center">
                      Real conversations with GEO and marketing leaders sharing
                      strategies, lessons, and insights to help you stay visible
                      where it matters most.
                    </p>
                    <a
                      href="/podcasts"
                      className="btn btn-sm btn-primary px-2 mt-2"
                    >
                      <span> Listen to the Latest Episode</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    {/* <Image
                      alt="builder-tools"
                      src="/assets/images/features/podcast-1.webp"
                      width="1280"
                      height="800"
                      className="rounded-2"
                    /> */}
                    <video
                      className="rounded-2"
                      src="/assets/images/landing/podcast.webm"
                      autoPlay
                      muted
                      loop
                    />
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
