"use client";

import { caseStudyBrands } from "@/data/brands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Brands() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container sm:max-w-lg xl:max-w-xl py-6 lg:pt-8 xl:pt-10">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
              data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <p className="fs-5 lg:fs-4 fw-bold">
                Brands That Put Their Growth in Our Hands
              </p>
              <div className="panel">
                <div className="element-brands text-gray-900 dark:text-white mask-x">
                  <Swiper
                    slidesPerView={2.25}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 7000, disableOnInteraction: true }}
                    speed={7000}
                    breakpoints={{
                      0: { slidesPerView: 2.25 },
                      640: { slidesPerView: 4, centeredSlides: false },
                      1024: { slidesPerView: 6, spaceBetween: 100 },
                    }}
                    modules={[Autoplay]}
                  >
                    {caseStudyBrands.map((brand, index) => (
                      <SwiperSlide key={index} className="text-center">
                        <Image
                          className="brand-item-image w-full h-40px xl:h-48px d-block dark:d-none"
                          alt={brand.alt}
                          src={brand.lightSrc}
                          width={brand.width}
                          height={48}
                        />
                        <Image
                          className="brand-item-image h-40px xl:h-48px dark:d-block d-none"
                          alt={brand.alt}
                          src={brand.darkSrc}
                          width={brand.width}
                          height={48}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
