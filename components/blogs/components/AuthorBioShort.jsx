import Image from "next/image";
import React from "react";

export default function AuthorBioShort() {
  return (
    <div className="container">
      <div className="post-author panel py-2 px-2 sm:p-1 xl:p-2 border rounded lg:rounded-2 my-2 d-none lg:d-block">
        <div className="row g-2 items-center">
          <div className="col-12 sm:col-2 lg:col-1">
            {/* <figure className="m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden"> */}
            <div className=" m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
              <Image
                className="sm:max-w-30 image uc-transition-scale-up uc-transition-opaque"
                alt="Avinash Tripathi Image"
                src="/assets/images/avatars/avinash.webp"
                width={100}
                height={100}
              />
            </div>
            {/* </figure> */}
          </div>
          <div className="col-12 sm:col-8 lg:col-11">
            <div className="panel vstack items-start">
              <h3 className="h4 m-0">
                Author:{" "}
                <span className="text-tertiary dark:text-primary">
                  Avinash Tripathi
                </span>
              </h3>
              <h4 className="h5 m-0"></h4>
              <p className="fs-6 mt-1">
                My GEO journey began when Copilot critiqued my startup, I chose
                to learn, not ignore. That curiosity led to media features and
                being named the #1 GEO Consultant by YesUsers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row d-block lg:d-none justify-center col-match g-2 lg:g-3"
        data-uc-grid=""
      >
        <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border dark:border-white">
          <div className="panel vstack items-start gap-2">
            {/* <div className="panel">
              <div className="hstack h-48px">
                <Image
                  className="w-128px text-gray-900 dark:text-white image-filter"
                  src="/assets/images/avatars/avinash.webp"
                  width={170}
                  height={48}
                  alt="Avinash Tripathi Image"
                  data-uc-svg=""
                />
              </div>
            </div> */}
            <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
              My GEO journey began when Copilot critiqued my startup, I chose to
              learn, not ignore. That curiosity led to media features and being
              named the #1 GEO Consultant by YesUsers.
            </p>
          </div>
          <div className="panel hstack gap-2 mt-2 lg:mt-4">
            <Image
              className="w-40px rounded-circle"
              src="/assets/images/avatars/avinash.webp"
              alt="Avinash Tripathi Image"
              width={150}
              height={150}
            />
            <div className="panel items-start gap-0">
              <h6 className="h5 m-0">Avinash Tripathi</h6>
              {/* <span className="fs-7 opacity-70">
                                  {testimonial.position}
                                </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
