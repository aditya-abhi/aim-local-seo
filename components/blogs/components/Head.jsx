"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Head({
  pageName = "Blog Sidebar Left",
  publishedOn = "September 14, 2025",
  updatedOn = "",
  src = "",
}) {
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    if (updatedOn != "") {
      setIsUpdated(true);
    }
  }, []);

  return (
    <>
      <div className="position-absolute top-0 start-0 end-0 min-h-350px xl:min-h-900px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 mt-0 z-0" />
      <div>
        <ul className="breadcrumb nav-x justify-center items-center fs-7 m-0 fw-bold text-white pt-6 mt-8 lg:mt-8">
          <li>
            <span className="opacity-90 text-white">
              <Image
                className="text-white icon-1"
                alt="home-icon"
                data-uc-svg=""
                src="/assets/images/common/icons/homepage.svg"
                width="32"
                height="32"
              />
            </span>
          </li>
          <li>
            <span className="opacity-50">
              <Link href={`/`}>Home</Link>
            </span>
          </li>
          <li>
            <i className=" unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
          </li>
          <li>
            <span className="opacity-50">{pageName}</span>
          </li>
        </ul>

        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-lg mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 my-4 lg:my-6">{pageName}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container max-w-fc">
          <div className="post-author panel px-3 p-3 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2 max-w-100 lg:max-w-900px xl:max-w-xl">
            {!isExpanded && (
              <div
                className="flex items-center gap-3 md:gap-4 cursor-pointer"
                onClick={toggleAuthorDetails}
              >
                <div className="row g-4 items-center">
                  <div className="col-12 sm:col-5 xl:col-3 ">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden w-64px">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque rounded-full"
                        src="/assets/images/avatars/avinash.webp"
                        alt="Author Image"
                        width="48"
                        height="48"
                      />
                    </figure>
                  </div>
                  <div className="col">
                    <div className="panel vstack items-start gap-2 md:gap-3">
                      <h4 className="h5 m-0">Avinash Tripathi</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isExpanded && (
              <div
                className="py-4 px-3 sm:px-4 uc-prose cursor-pointer"
                onClick={toggleAuthorDetails}
              >
                <div className="row g-4 items-center">
                  <div className="col-12 sm:col-5 xl:col-3">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="Avinash Tripathi Image"
                        src="/assets/images/avatars/avinash.webp"
                        width="1000"
                        height="667"
                      />
                    </figure>
                  </div>
                  <div className="col">
                    <div className="panel vstack items-start gap-2 md:gap-3">
                      <h3 className="mb-0">Author:</h3>
                      <h4 className="h5 m-0">Avinash Tripathi</h4>
                      <p className="fs-6">
                        My journey into Generative Engine Optimization (GEO)
                        began with a fortunate accident. I was happily working
                        as an entrepreneur when one day, while researching, I
                        noticed that Microsoft Copilot made a negative comment
                        about my startup. Instead of ignoring what Copilot said,
                        I chose to understand, learn, and understand how
                        AI-driven search works, even though a lot of people
                        around me felt that it was beyond my competence. My
                        persistence paid off as my work has been featured by
                        leading media companies such as The Hindu, Yahoo, and
                        Scroll. Most recently, I was awarded the #1 GEO
                        Consultant by YesUsers
                      </p>
                      <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                        <li>
                          <a href="#medium">
                            <i className="icon-2 unicon-logo-medium" />
                          </a>
                        </li>
                        <li>
                          <a href="#x">
                            <i className="icon-2 unicon-logo-x-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#instagram">
                            <i className="icon-2 unicon-logo-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div> */}

        {/* <Image
          src="/assets/images/blog/blog-1.webp"
          alt="blog header image"
          width={1600}
          height={900}
          className="rounded-2 h-auto"
        /> */}
        <div className="container lg:container-75 mt-4 mb-4">
          <figure className="rounded=2 ratio ratio-16x9 uc-transition-toggle overflow-hidden">
            <Image
              className="rounded-2"
              alt="Maximizing your reach with marketing strategies"
              src={src}
              width={1600}
              height={900}
            />
          </figure>
        </div>
        <div className="container lg:container-75 hstack gap-4 mt-2 mb-4 lg:pl-5">
          <h2 className="h6">
            Published on:{" "}
            <span className="text-tertiary dark:text-primary">
              {publishedOn}{" "}
            </span>{" "}
          </h2>
          <div className={isUpdated ? "d-block" : "d-none"}>
            <h2 className="h6">
              Updated on:{" "}
              <span className="text-tertiary dark:text-primary">
                {updatedOn}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
