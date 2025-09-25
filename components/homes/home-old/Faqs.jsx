import AccordionHome from "@/components/common/AccordionHome";
import React from "react";
import Link from "next/link";

export default function Faq() {
  return (
    <div id="faq" className="faq section panel  scrollSpysection">
      <div className="section-outer panel py-6 xl:py-10">
        <div className="container xl:max-w-xl">
          <div className="justify-center d-flex d-block lg:d-none">
            <div className="cstack gap-1 py-1 px-3 border max-w-fc rounded-pill mb-3">
              {/* <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" /> */}
              <span className="fs-8 fw-bold text-uppercase">FAQs</span>
            </div>
          </div>
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-5 sticky-element">
                <div
                  className="uc-sticky-placeholder"
                  style={{ height: 0, width: 0, margin: 0 }}
                  hidden=""
                />
                <div className="panel vstack items-start gap-2 uc-sticky">
                  <div className="cstack gap-1 py-1 px-3 border rounded-pill d-none lg:d-block">
                    {/* <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" /> */}
                    <span className="fs-8 fw-bold text-uppercase">FAQs</span>
                  </div>
                  <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-tertiary dark:text-white">
                    Frequenlty Asked
                    <br />
                    <span className="d-inline-flex px-1 bg-tertiary-500 text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      Questions
                    </span>
                  </h2>
                  <p className="fs-6 lg:fs-5">
                    {/* We’re looking for people who share our vision! most of our
                    time used to be taken up by most of who created new websites
                    for their businesses. */}
                  </p>
                  {/* <Link
                    href={`/page-contact`}
                    className="btn btn-sm lg:btn-md btn-primary px-3 mt-2"
                  >
                    <span>Still have a question?</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link> */}
                </div>
              </div>
              <div className="lg:col-6">
                <div className="panel">
                  <ul
                    className="gap-2 uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true"
                  >
                    <AccordionHome parentClass="panel p-2 md:p-4 border rounded-1-5" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
