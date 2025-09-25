import { tiersPricing } from "@/data/pricing";
import Link from "next/link";
import React from "react";

export default function PricingService() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel pt-9 pb-6 xl:pt-11 xl:pb-9 px-4 lg:px-6">
        <div className="container container-expand">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h1 className="title h2 lg:h1 xl:h1">
                  Pricing That Makes Sense
                </h1>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  No hidden fees, no surprises - just clear plans designed to
                  help you grow.
                </p>
              </div>
              <div
                className="heading vstack gap-2 items-center panel text-center"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h2 m-0">
                  Our Services to Supercharge{" "}
                  <span className="px-1 bg-tertiary text-primary">
                    Your Brand
                  </span>
                </h2>
                <p className="fs-6 xl:fs-5">
                  Custom solutions to optimize your AI search presence,
                  benchmark competitors, and drive measurable growth.
                </p>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-3 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiersPricing.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.sTitle}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {tier.sdescription}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {tier.sPrice}
                              <span className="fs-7">{tier.speriod}</span>
                            </h5>
                            <span className="fs-7 opacity-70">
                              {/* {tier.priceDetails} */}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <Link
                                href={`/sign-up`}
                                className={`btn btn-md sm:btn-sm lg:btn-md ${
                                  tier.sTitle === "Enterprise"
                                    ? "btn-dark"
                                    : "btn-primary"
                                } text-white`}
                              >
                                {tier.slinkText}
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px">
                                {tier.slinkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.sfor}
                            </span>
                            {tier.sfeatures.map((sfeatures, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{sfeatures}</span>
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
