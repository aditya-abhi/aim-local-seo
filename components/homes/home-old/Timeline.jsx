"use client";
import { comic } from "@/data/timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
export default function Timeline() {
  const containerRef = useRef(null);
  const swiperRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            if (swiperRef.current) {
              // Enable and start autoplay only once when first visible
              swiperRef.current.params.autoplay.enabled = true;
              swiperRef.current.autoplay.start();
            }
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      id="about-timeline"
      className="about-timeline section panel overflow-hidden"
      ref={containerRef}
    >
      <div className="section-outer panel py-6 xl:py-9 bg-tertiary-700">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-2">
              <span className="fs-7 fw-bold py-narrow px-2 border border-white dark:border-white rounded-pill text-white">
                OUR ORIGIN STORY
              </span>
              <div className="mt-2 pb-4 lg:pb-8">
                <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-center text-white">
                  How It All Started: <br />
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    The Comic Book Edition
                  </span>
                </h2>
                {/* <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white mt-2 text-center">
                  A journey of passion, purpose, and people. It all started with
                  a single idea and a shared dream to make a difference. We've
                  poured our hearts into every step, and we're so excited to
                  share how we got here.
                </p> */}
              </div>
              <div
                style={{ width: "fit-content", maxWidth: "600px" }}
                className="panel swiper-parent"
              >
                <Swiper
                  className="swiper-timeline swiper swiper-container overflow-unset"
                  slidesPerView={1}
                  spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    enabled: false,
                  }}
                  pagination={{ clickable: true, el: ".spdt-timeline" }}
                  speed={800}
                  modules={[Autoplay, Pagination]}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  // centeredSlides={true}
                  // centeredSlidesBounds={true}
                >
                  {comic.map((item, index) => (
                    <SwiperSlide key={index} className="panel">
                      <div className="timeline-box panel vstack items-center gap-9 text-center mx-2">
                        <div className="image-wrap panel overflow-hidden w-400px lg:w-500px xl:w-600px">
                          <Image
                            className="image w-100 origin-bottom rounded-2"
                            src={item.src}
                            width={600}
                            height={600}
                            alt={item.alt}
                          />
                        </div>
                        {/* <div className="content panel vstack items-center px-3 xl:px-6">
                          <h3 className="title h4 sm:h3 dark:text-white">
                            {item.year}
                          </h3>
                          <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                            {item.description}
                          </p>
                        </div> */}
                      </div>
                    </SwiperSlide>
                  ))}
                  <div
                    className="swiper-pagination position-relative mt-3 spdt-timeline"
                    style={{ color: "#39FF14" }}
                  />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
