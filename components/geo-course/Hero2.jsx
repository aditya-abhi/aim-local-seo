import Image from "next/image";
import React from "react";
import { features6 } from "@/data/features";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0" />
      <div className="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
                    {features6.map((feature) => (
                      <div
                        key={feature.id}
                        className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-white"
                        data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                      >
                        <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                          <div className="order-0 lg:order-1">
                            <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                              <Image
                                src={feature.imgSrc}
                                width={780}
                                height={728}
                                alt={feature.imgAlt}
                              />
                            </div>
                          </div>
                          <div className="order-1 lg:order-0 col-12 sm:col-5">
                            <div className="panel vstack justify-center gap-4 h-100">
                              <div>
                                <div className="panel vstack gap-2">
                                  <span className="fs-6 fw-bold m-0 text-primary">
                                    {feature.id.toString().padStart(2, "0")}.
                                  </span>
                                  <h3 className="h4 lg:h2 m-0">
                                    {feature.title}
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 dark:text-secondary">
                                    {feature.description}
                                  </p>
                                  {feature.link && (
                                    <a
                                      href={feature.link.href}
                                      className="uc-link fw-bold hstack gap-narrow"
                                    >
                                      <span>{feature.link.text}</span>
                                      <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                    </a>
                                  )}
                                </div>
                              </div>
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
    </div>
  );
}
