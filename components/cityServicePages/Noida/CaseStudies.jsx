import { caseStudies } from "@/data/integrations";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9 dark:text-white">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white">
                  CASE STUDIES
                </span>
                <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-tertiary dark:text-white text-center">
                  Success Stories That <br />
                  <span className="d-inline-flex px-1 bg-tertiary-500 text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Speak for Themselves
                  </span>
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Explore how startups, enterprises, and global brands achieved
                  massive growth through our AI visibility, GEO, and SEO
                  strategies.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {caseStudies.map((integration, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent text-dark dark:text-white">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-dark dark:text-white">
                              {integration.name}
                            </h5>
                            <span className="fs-7 opacity-70 dark:opacity-80">
                              {integration.category}
                            </span>
                          </div>
                          <Image
                            className="w-32px lg:w-40px d-block dark:d-none"
                            src={integration.imageUrl}
                            width={40}
                            height={40}
                            alt={integration.imageAlt}
                          />
                          <Image
                            className="w-32px lg:w-40px d-none dark:d-block"
                            src={integration.imageDark}
                            width={40}
                            height={40}
                            alt={integration.imageAlt}
                          />
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          <span className="text-tertiary dark:text-primary fs-4 fw-bold">
                            {integration.span}
                          </span>{" "}
                          {integration.description}
                        </p>
                      </div>
                      <Link
                        href={`${integration.url}`}
                        className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                      >
                        <span>Explore</span>
                        <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                      </Link>
                    </div>
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
