"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel my-6 lg:my-8 xl:my-10">
        <div
          className="d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "40%", left: "24%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={193}
              height={216}
              alt="star-1"
              data-uc-svg=""
              src="/assets/images/template/star-1.svg"
            />
          </div>
          <div
            className="position-absolute  rotate-45"
            style={{ bottom: "40%", right: "24%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={69}
              height={95}
              alt="star-2"
              data-uc-svg=""
              src="/assets/images/template/star-2.svg"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Start Your AI Visibility{" "}
                <span className="text-primary">Journey Today</span>
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                Gain the skills to optimize your brand for AEO, GEO, AIO, and
                LLM SEO, and secure a lasting presence across AI-driven
                platforms completely free.
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column fdr">
                <Link
                  href={`/free-course/best-generative-engine-optimization-geo-course-for-free`}
                  target="_blank"
                  className="btn btn-md lg:btn-lg btn-tertiary hover:bg-primary hover:text-black text-white dark:bg-primary dark:text-gray-700 dark:hover:bg-secondary"
                >
                  Enroll in the Free GEO Course
                </Link>
                <Link
                  href={`/free-courses/best-answer-engine-optimization-course-for-free/`}
                  target="_blank"
                  className="btn btn-md lg:btn-lg btn-tertiary hover:bg-primary hover:text-black text-white dark:bg-primary dark:text-gray-700 dark:hover:bg-secondary"
                >
                  Enroll in the Free AEO Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
