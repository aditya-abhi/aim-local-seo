import { tiersHome } from "@/data/pricing";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-gradient-to-t from-tertiary-700 dark:from-primary to-primary-100 dark:to-tertiary-700  mx-2 rounded-2">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary-900 dark:text-white max-w-fc">
                  PRICING
                </span>
                <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-tertiary dark:text-white text-center">
                  Find Your Perfect <br />
                  <span className="d-inline-flex px-1 bg-tertiary-500 text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    AI Monitoring Plan
                  </span>
                </h2>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiersHome.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-white">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Most Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 text-tertiary-900">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {/* {tier.description} */}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 text-gray-500">
                              {tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {/* {tier.priceDetails} */}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <Link
                                href={`/sign-up`}
                                className={`btn btn-md sm:btn-sm lg:btn-md ${
                                  tier.title === "Enterprise"
                                    ? "btn-dark"
                                    : "btn-tertiary"
                                } text-white`}
                              >
                                {tier.linkText}
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px text-gray-500">
                                {tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold text-gray-500">
                              Perfect for brands who:
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span className="text-gray-500">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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
  );
}
