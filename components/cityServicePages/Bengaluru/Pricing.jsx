"use client";
import { tiersHome } from "@/data/pricing";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [isService, setIsService] = useState(true);
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container container-expand">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0 lg:mx-6">
            <div
              className="vstack items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary-800 dark:text-white max-w-fc">
                PRICING
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-dark dark:text-white text-center">
                Find Your Perfect <br />
                <span className="d-inline-flex px-1 text-tertiary dark:text-primary ">
                  AI Monitoring Plan
                </span>
              </h2>
              <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow border rounded-2 fs-7 fw-medium"
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={isService ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsService(true)}
                    className="text-none w-128px cstack p-1"
                  >
                    Services
                  </a>
                </li>
                <li className={!isService ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsService(false)}
                    className="text-none w-128px cstack p-1"
                  >
                    Tools
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-switcher pricing-switcher mt-4">
              <div className="uc-active">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-3 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiersHome.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {/* {tier.title} */}
                            {isService ? tier.sTitle : tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {isService ? tier.sdescription : tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {isService ? tier.sPrice : tier.price}{" "}
                              <span className="fs-7">
                                {isService ? tier.speriod : tier.period}
                              </span>
                            </h5>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <Link
                                href={`/sign-up`}
                                className={`btn btn-md sm:btn-sm lg:btn-md ${
                                  tier.title === "Enterprise"
                                    ? "btn-dark"
                                    : "btn-primary"
                                } text-white`}
                              >
                                {/* {tier.linkText} */}
                                {isService ? tier.slinkText : tier.linkText}
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px">
                                {/* {tier.linkSubtext} */}
                                {isService
                                  ? tier.slinkSubtext
                                  : tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {/* {tier.title === "Essentials"
                                ? "Key features:"
                                : `Everything in ${
                                    tier.title === "Business"
                                      ? "Essentials"
                                      : "Business"
                                  }, plus:`} */}
                              {isService ? tier.sfor : tier.for}
                            </span>
                            {tier.features.map((features, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                {/* <span>{features}</span> */}
                                <span>
                                  {isService ? tier.sfeatures[idx] : features}
                                </span>
                                {/* <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>
                                  {isService ? tier.sfeatures[idx] : features}
                                </span> */}
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* <span className="fs-7 opacity-70 min-h-24px">
                          {isService ? tier.sincluded : tier.included}
                        </span> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="footer panel text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
            >
              <Link
                href={`/pricing`}
                className="btn btn-md bg-primary text-tertiary hover:bg-tertiary hover:text-white dark:bg-primary dark:hover:bg-secondary dark:hover:text-tertiary rounded-default border-opacity-20 hover:border-opacity-40 shadow-xs mt-4 lg:mt-6 xl:mt-8"
              >
                <span>Compare plans</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
