import { instructor } from "@/data/features";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Instructor() {
  return (
    <div
      hidden=""
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
              <h2
                className="h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Meet Your Instructor:{" "}
                <span className="text-tertiary dark:text-primary">
                  Avinash Tripathi
                </span>
              </h2>
              <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
                <div className="row g-4 items-center">
                  <div className="col-12 sm:col-5 xl:col-3">
                    <figure className="featured-image m-0 rounded rounded-circle ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="Avinash Tripathi"
                        src="/assets/images/avatars/avinash.webp"
                        width="1000"
                        height="667"
                      />
                    </figure>
                  </div>
                  <div className="col">
                    <div className="panel vstack items-start gap-2 md:gap-3">
                      <h4 className="h4 m-0">Avinash Tripathi</h4>
                      <p className="fs-5 fw-bold">
                        Founder | AI Search Strategist | 20+ Years in Data &
                        Digital Marketing
                      </p>
                      <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                        <li>
                          <a href="https://www.linkedin.com/in/avi-tri">
                            <i className="icon-2 unicon-logo-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/AIO_Guru">
                            <i className="icon-2 unicon-logo-x-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/avinash.tripathi.902/">
                            <i className="icon-2 unicon-logo-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 lg:px-6 xl:px-8">
                    <p className="fs-6 lg:fs-5">
                      HEY, I’m Avinash Tripathi, and I’ve spent over 20 years in
                      data, marketing, and analytics, focusing on AI-powered
                      search and digital strategy.
                    </p>
                    <p className="fs-6 lg:fs-5">
                      Here’s what got me fired up: I kept seeing brands
                      misrepresented by AI engines like ChatGPT, including my
                      own startup, which was interpreted in a really bad way. I
                      know exactly how that feels, and it drove me to decode how
                      these platforms actually work so brands, including mine,
                      could finally be seen the way they deserve. That’s also
                      why I went searching for a real solution, not just
                      theories.
                    </p>
                    <p className="fs-6 lg:fs-5">
                      Over the years, I’ve helped global brands boost their AI
                      visibility by 300%+ in just 60 days, especially on ChatGPT
                      and Perplexity.
                    </p>
                    <h4 className="mt-2 h5 lg:h4">
                      Real talk – I’m here to help you win.
                    </h4>
                    <p className="fs-6 lg:fs-5">
                      This isn’t just another course, and I’m not here to play
                      guru. I’ve built things from scratch, made mistakes, and
                      turned setbacks into strategies, including teaching brands
                      how to get AI to finally say the right things about them.
                    </p>
                    <p className="fs-6 lg:fs-5">
                      I created this space for people like you: curious,
                      ambitious, maybe a little overwhelmed (been there) who
                      want real answers and guidance without fluff.
                    </p>
                    <p className="fs-6 lg:fs-5">
                      Whether you’re starting fresh, pivoting, or feeling stuck,
                      you’re not alone. We’ll tackle this together clear
                      direction, actionable insights, and lots of support.
                    </p>
                    <p className="fs-6 lg:fs-5">
                      You bring the hunger. I’ll bring the roadmap. Let’s make
                      AI work for your brand, not against it.
                    </p>
                  </div>
                  <div className="px-4 lg:px-6 xl:px-8">
                    <h3 className="">Teaching & Coaching Highlights</h3>
                    <ul className="">
                      <li>20+ Years of Experience</li>
                      <li>5+ Companies Founded</li>
                      <li>15+ Free Courses Launched</li>
                      <li>7,000+ Students Impacted</li>
                      <li>300%+ AI Visibility Gains (ChatGPT, Perplexity)</li>
                    </ul>
                  </div>
                  <div className="px-4 lg:px-6 xl:px-8">
                    <h3 className="">Global Media Coverage & Recognition:</h3>
                    <div
                      className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 col-match g-2 lg:g-4 justify-between"
                      data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                      {instructor.map((integration, index) => (
                        <div key={index}>
                          <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white">
                            <div className="vstack gap-3">
                              <div className="hstack justify-between items-center">
                                <Image
                                  className="w-100"
                                  src={integration.imgSrc}
                                  width={40}
                                  height={40}
                                  alt={integration.title}
                                />
                              </div>
                              <p className="fs-6 opacity-70 dark:opacity-80">
                                {integration.description}
                              </p>
                            </div>
                            <Link
                              href={`${integration.link}`}
                              target="_blank"
                              className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                            >
                              <span>Explore</span>
                              <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                            </Link>
                          </div>
                        </div>
                      ))}
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
