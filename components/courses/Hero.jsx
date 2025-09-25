import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0" />
      <div className="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
          <video
            data-uc-cover=""
            src="/assets/images/media/lexend-home-8.webm"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                    <h1
                      className="h2 md:h1 lg:display-5 m-0 mt-2"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                      AI Decides{" "}
                      <span
                        className="text-tertiary dark:text-primary"
                        data-uc-splitext="types: 'chars'"
                        data-anime="targets: > *; translateY: [-5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 250; delay: anime.stagger(50);"
                      >
                        Who Gets Seen.{" "}
                      </span>
                      Will It Choose{" "}
                      <span
                        className="text-tertiary dark:text-primary"
                        data-uc-splitext="types: 'chars'"
                        data-anime="targets: > *; translateY: [-5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 250; delay: anime.stagger(50);"
                      >
                        You?
                      </span>
                    </h1>
                    <p
                      className="fs-6 xl:fs-3 xl:px-10 dark:text-white text-opacity-70 mt-4 lg:mt-6 xl:mt-8"
                      data-uc-splitext="types: 'words'"
                      // data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});"
                    >
                      “In 2025, platforms like ChatGPT, Perplexity, and Google
                      AI Overviews decide who gets seen online. Learn how AEO
                      and GEO shape AI-driven search visibility in this new era.
                    </p>
                  </div>
                  <div
                    className="panel border shadow-lg rounded-2 p-1"
                    data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;"
                  >
                    <Image
                      className="rounded-1-5 lg:rounded-2"
                      alt="AI Monitor Courses pahe hero image"
                      src="/assets/images/template/courses-hero.webp"
                      width={1353}
                      height={978}
                    />
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
