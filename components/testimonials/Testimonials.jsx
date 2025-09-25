import { testimonials2, testimonialsPage } from "@/data/testimonials";
import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-11">
        <div className="container container-70">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 lg:gap-6"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h3 sm:h3 lg:h1 m-0 text-center">
                Real Stories.{" "}
                <span className="text-tertiary dark:text-primary">
                  Real Impact.
                </span>
              </h1>
              <p className="fs-5 lg:fs-4 mt-1 text-center lg:px-6 xl:px-8">
                Our work speaks for itself, but the voices of those we’ve worked
                with say even more. Explore real stories from clients,
                collaborators, and learners who’ve built visibility, trust, and
                results with us.
              </p>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-3 uc-grid"
                data-uc-grid=""
              >
                {testimonialsPage.map((item, index) => (
                  <div key={index} className="uc-grid-margin uc-first-column">
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                      <div className="panel vstack items-start gap-2">
                        {/* <div className="panel">
                          <div className="hstack h-48px">
                            <Image
                              className="w-128px text-gray-900 dark:text-white image-filter"
                              src={item.brandImg}
                              alt="Brand"
                              width={170}
                              height={48}
                              data-uc-svg=""
                            />
                          </div>
                        </div> */}
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                          {item.testimonial}
                        </p>
                      </div>
                      <div className="panel hstack gap-2 mt-2 lg:mt-4">
                        <Image
                          className="w-40px rounded-circle"
                          src={item.authorImg}
                          alt={item.authorName}
                          width={150}
                          height={150}
                        />
                        <div className="panel vstack items-start gap-0">
                          <h6 className="h6 m-0">{item.authorName}</h6>
                          <span className="fs-7 opacity-70">
                            {item.authorRole}
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
