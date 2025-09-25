import Image from "next/image";
import React from "react";

export default function GEOCourseCTA() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0" />
      <div className="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
      <div className="py-8 lg:py-9 xl:py-10">
        <div className="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
          <video
            data-uc-cover=""
            src="/assets/images/media/lexend-home-8.webm"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="container container-expand">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                    <h1
                      className="h2 md:h1 lg:display-5 m-0 mt-2"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                      <span
                        className="text-tertiary dark:text-primary"
                        data-uc-splitext="types: 'chars'"
                        data-anime="targets: > *; translateY: [-5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 250; delay: anime.stagger(50);"
                      >
                        Drive growth{" "}
                      </span>
                      with our <br className="d-none lg:d-block" />
                      cutting-edge SaaS platform
                    </h1>

                    <div className="panel p-3 lg:p-6 bg-secondary w-100 dark:bg-white rounded-3 mt-4 sm:mt-6">
                      <div className="row child-cols-12 sm:child-cols-6 col-match g-3 lg:g-8">
                        <div>
                          <div className="panel rounded-2 overflow-hidden">
                            {/* <Swiper
                              allowTouchMove={false}
                              onSwiper={setThumbsSwiper}
                              {...swiperThumbOptions}
                              className="swiper connect-image"
                            > */}
                            {/* {testimonials.map((elm, i) => ( */}
                            {/* <SwiperSlide key={i} className="swiper-slide"> */}
                            {/* <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden"> */}
                            <Image
                              className="media-cover h-100 image uc-transition-scale-up uc-transition-opaque"
                              src="/assets/images/portrait/course-3.png"
                              width={1000}
                              height={667}
                              alt="Mark Zellers"
                            />
                            {/* </figure> */}
                            {/* </SwiperSlide> */}
                            {/* ))} */}
                            {/* </Swiper> */}
                          </div>
                        </div>
                        <div>
                          <div className="panel">
                            {/* <Swiper
                              thumbs={{ swiper: thumbsSwiper }}
                              {...swiperOptions2}
                              pagination={{
                                clickable: true,
                                el: ".spb1",
                              }}
                              className="swiper h-100 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                            > */}
                            {/* {testimonials.map((testimonial, index) => (
                                <SwiperSlide
                                  className="swiper-slide h-100 pb-6"
                                  key={index}
                                > */}
                            <div className="panel vstack justify-between items-center gap-2 lg:gap-3 h-100 text-center">
                              <div className="panel">
                                <i className="icon icon-4 unicon-quotes text-primary" />
                                <p className="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4 dark:text-tertiary">
                                  {/* {testimonial.quote} */}
                                  Most consumers now get answers from AI
                                  chatbots, bypassing Google altogether. Even
                                  those still using Google see AI Overviews,
                                  instant AI-generated answers that eliminate
                                  the need to click links. To stay visible in
                                  this AI-driven search era, you need Generative
                                  Engine Optimization (GEO), the latest digital
                                  marketing strategy for ranking in AI-powered
                                  results.
                                </p>
                              </div>
                              <div className="panel pt-0">
                                <div className="panel vstack items-center gap-narrow">
                                  <h6 className="h5 m-0 text-gray-900">
                                    {/* {testimonial.name} */}
                                    <ul className="text-start">
                                      <li>
                                        What is Generative Engine Optimization
                                        (GEO)?
                                      </li>
                                      <li>SE vs. GE vs. LLM</li>
                                      <li>
                                        Top Generative Engines: Google AI
                                        Overview, ChatGPT, Perplexity
                                      </li>
                                    </ul>
                                  </h6>
                                  <span className="fs-6 opacity-70">
                                    {/* {testimonial.position} */}
                                  </span>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="btn btn-sm btn-primary border px-2 mt-2"
                              >
                                <span>Try it now</span>
                                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                              </a>
                            </div>

                            {/* </SwiperSlide>
                              ))} */}
                            <div className="panel pt-0">
                              <div className=" spb1 swiper-pagination text-primary m-0 justify-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" />
                            </div>
                            {/* </Swiper> */}
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
