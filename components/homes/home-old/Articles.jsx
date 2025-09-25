"use client";

import { testimonialsNew } from "@/data/testimonials";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Articles() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-tertiary-700 text-white">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="section-header vstack items-center gap-2 lg:gap-3">
                <span className="fs-7 fw-bold py-narrow px-2 border border-white rounded-pill text-white">
                  GOOGLING IS SO Y2K
                </span>
                <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-white text-center">
                  Web Search is Changing. <br />
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Are You Ready?
                  </span>
                </h2>
              </div>
              <div className="panel w-100">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1.25}
                  centeredSlides={true}
                  className="swiper overflow-unset swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                  breakpoints={{
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                      centeredSlides: false,
                    },
                  }}
                  initialSlide={2}
                >
                  {testimonialsNew.map((testimonial, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary">
                        <div className="panel vstack items-start gap-2">
                          <p className="fs-6 lg:fs-5 text-dark text-opacity-70">
                            “{testimonial.text}”
                          </p>
                        </div>
                        <div className="panel hstack gap-2 mt-2">
                          <Image
                            className="w-64px rounded-circle"
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            width={200}
                            height={200}
                          />
                          <div className="panel vstack justify-center gap-narrow text-tertiary">
                            <span className="fw-bold ft-secondary m-0">
                              {testimonial.name}
                            </span>
                            <span className="fw-bold ft-secondary m-0">
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
