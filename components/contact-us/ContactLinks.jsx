import { panels } from "@/data/contact";
import React from "react";
import Image from "next/image";

export default function ContactLinks() {
  return (
    <div id="helpful-links" className="section panel overflow-hidden">
      <div className="section-outer panel pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center dark-text-secondary"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                We’ve Got Your Back - Let’s Talk{" "}
                <span className="text-tertiary dark:text-primary">
                  AI Visibility
                </span>
              </h2>
              <div className="row child-cols-12 g-6 md:g-8 xl:g-6">
                <div
                  className="row child-cols items-center col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="col-12 md:col-6 lg:col-5">
                    <div className="panel vstack gap-2 items-center text-center px-3 py-4 lg:py-6 xl:py-8 rounded-2 bg-secondary dark:bg-tertiary-700 lg:hover:-translate-y-2 duration-150 transition-all">
                      <div className="cstack mb-2">
                        <Image
                          className="w-64px lg:w-80px d-block dark:d-none"
                          src="/assets/images/custom-icons/phone-light.svg"
                          width={100}
                          height={100}
                          alt="Call Button"
                        />
                        <Image
                          className="w-64px lg:w-80px d-none dark:d-block"
                          src="/assets/images/custom-icons/phone-dark.svg"
                          width={100}
                          height={100}
                          alt="Call button"
                        />
                      </div>
                      <h5 className="h5 m-0">Call Us</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80 dark:text-white">
                        {" "}
                        Get expert guidance and explore solutions tailored to
                        your brand’s growth goals.
                      </p>
                      <a
                        href="tel:+91-96505-10773"
                        className="fw-bold hstack gap-narrow justify-center text-tertiary dark:text-primary"
                      >
                        <span className="text-gray-700 dark:text-white">
                          India:
                        </span>{" "}
                        +91-96505-10773
                      </a>
                      <a
                        href="tel:+1-623-223-7423"
                        className="fw-bold hstack gap-narrow justify-center text-tertiary dark:text-primary"
                      >
                        <span className="text-gray-700 dark:text-white">
                          US:
                        </span>{" "}
                        +1-623-223-7423
                      </a>
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-5">
                    <div className="panel vstack gap-2 items-center text-center px-3 py-4 lg:py-6 xl:py-8 rounded-2 bg-secondary dark:bg-tertiary-700 lg:hover:-translate-y-2 duration-150 transition-all">
                      <div className="cstack mb-2">
                        <Image
                          className="w-64px lg:w-80px d-block dark:d-none"
                          src="/assets/images/custom-icons/email-light.svg"
                          width={100}
                          height={100}
                          alt="Call Button"
                        />
                        <Image
                          className="w-64px lg:w-80px d-none dark:d-block"
                          src="/assets/images/custom-icons/email-dark.svg"
                          width={100}
                          height={100}
                          alt="Call button"
                        />
                      </div>
                      <h5 className="h5 m-0">Email Us</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80 dark:text-white">
                        {" "}
                        Send us a quick email, and our team will get back to you
                        within 24 hours.
                      </p>
                      <a
                        href="mailto:hello@getaimonitor.com"
                        className="fw-bold hstack gap-narrow justify-center text-tertiary dark:text-primary"
                      >
                        hello@getaimonitor.com
                      </a>
                      <a
                        href="mailto:team@getaimonitor.com"
                        className="fw-bold hstack gap-narrow justify-center text-tertiary dark:text-primary"
                      >
                        team@getaimonitor.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center panel vstack items-center gap-1 lg:gap-2 p-3 panel rounded border">
                <h3 className="h4 sm:h4 lg:h3 m-0 text-tertiary dark:text-primary">
                  Book a Demo
                </h3>
                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                  Experience our platform firsthand and see how AI-driven
                  insights can transform your brand’s visibility.
                </p>
                <div className="">
                  <a
                    href="https://v8dash.getaimonitor.com/signup"
                    className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                  >
                    <span>Generate AI Visibility Report</span>
                  </a>
                </div>
              </div>
              <div className="row child-cols-12 g-6 md:g-8 xl:g-6">
                <div
                  className="row child-cols items-center col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="col-12 md:col-6 lg:col-5">
                    <div className="panel vstack gap-2 items-center text-center px-3 py-4 lg:py-6 xl:py-8 rounded-2 bg-secondary dark:bg-tertiary-700 lg:hover:-translate-y-2 duration-150 transition-all">
                      <div className="cstack mb-2">
                        <Image
                          className="w-64px lg:w-80px d-block dark:d-none"
                          src="/assets/images/custom-icons/location-light.svg"
                          width={100}
                          height={100}
                          alt="location tag"
                        />
                        <Image
                          className="w-64px lg:w-80px d-none dark:d-block"
                          src="/assets/images/custom-icons/location-dark.svg"
                          width={100}
                          height={100}
                          alt="location tag"
                        />
                      </div>
                      <h5 className="h5 m-0">Visit Us</h5>
                      <div className="gap-0">
                        <h6 className="mb-0">India Office:</h6>
                        <p className="fs-6 opacity-70 dark:opacity-80 dark:text-white">
                          {" "}
                          A-64, A Block,
                          <br /> Sector 63, Noida,
                          <br /> Uttar Pradesh – 201301
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-5">
                    <div className="panel vstack gap-2 items-center text-center px-3 py-4 lg:py-6 xl:py-8 rounded-2 bg-secondary dark:bg-tertiary-700 lg:hover:-translate-y-2 duration-150 transition-all">
                      <div className="cstack mb-2">
                        <Image
                          className="w-64px lg:w-80px d-block dark:d-none"
                          src="/assets/images/custom-icons/location-light.svg"
                          width={100}
                          height={100}
                          alt="Call Button"
                        />
                        <Image
                          className="w-64px lg:w-80px d-none dark:d-block"
                          src="/assets/images/custom-icons/location-dark.svg"
                          width={100}
                          height={100}
                          alt="Call button"
                        />
                      </div>
                      <h5 className="h5 m-0">Visit Us</h5>
                      <div className="gap-0">
                        <h6 className="mb-0">US Office:</h6>
                        <p className="fs-6 opacity-70 dark:opacity-80 dark:text-white">
                          {" "}
                          221 East Indianola Avenue,
                          <br /> Phoenix, <br /> Arizona 85012
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
  );
}
