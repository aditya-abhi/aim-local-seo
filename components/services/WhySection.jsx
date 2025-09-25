import Image from "next/image";
import React from "react";

export default function WhySection() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-tertiary-700 mx-2 rounded-2 text-white">
        <div className="container">
          <div className="section-inner panel">
            <h2 className="h3 lg:h2 text-white text-center">
              Rank Where Conversations Begin.
            </h2>
            <div
              className="panel row child-cols-12 g-2 lg:g-4"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="Instant Messaging"
                            src="/assets/images/template/ai-advantage.webp"
                            width={1000}
                            height={778}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
                                <i className="icon-1 unicon-manage-protection" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0 text-white">
                                AI Advantage
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                This shift isn’t a threat - it’s a
                                once-in-a-decade opportunity. While competitors
                                chase keywords, you can position your brand as
                                the trusted source of truth for the AI engines
                                shaping your industry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="HD Video Calling"
                            src="/assets/images/template/ai-dominance.webp"
                            width={1000}
                            height={800}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
                                <i className="icon-1 unicon-renew" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0 text-white">
                                AI Dominance
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                AI Monitor helps B2B enterprises and SaaS brands
                                secure dominant visibility across the AI
                                ecosystem. We don’t just get you seen - we
                                position your brand as the authority AI engines
                                choose.
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
        </div>
      </div>
    </div>
  );
}
