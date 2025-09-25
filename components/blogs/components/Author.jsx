import Image from "next/image";
import React from "react";

export default function Author() {
  return (
    <div className="container">
      <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
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
              <h4 className="h5 m-0">Avinash Tripathi</h4>
              <p className="fs-6">
                My journey into Generative Engine Optimization (GEO) began with
                a fortunate accident. I was happily working as an entrepreneur
                when one day, while researching, I noticed that Microsoft
                Copilot made a negative comment about my startup. Instead of
                ignoring what Copilot said, I chose to understand, learn, and
                understand how AI-driven search works, even though a lot of
                people around me felt that it was beyond my competence. My
                persistence paid off as my work has been featured by leading
                media companies such as The Hindu, Yahoo, and Scroll. Most
                recently, I was awarded the #1 GEO Consultant by YesUsers
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
    </div>
  );
}
