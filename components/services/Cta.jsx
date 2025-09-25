import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <div
      id="uc_cta"
      className="uc-cta panel pb-8 z-1"
      data-anime="translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
    >
      <div className="container">
        <div className="panel vstack items-center gap-2 p-4 lg:p-6 xl:p-9 mt-4 lg:mt-6 xl:mt-8 bg-secondary rounded-2 dark:bg-tertiary-700 text-center">
          <Image
            className="position-absolute text-tertiary d-none lg:d-block"
            alt="stars"
            style={{ bottom: "25%", left: "10%" }}
            data-uc-svg=""
            src="/assets/images/common/stars.svg"
            width={55}
            height={49}
          />
          <Image
            className="position-absolute text-tertiary d-none lg:d-block"
            alt="star"
            style={{ top: "25%", right: "10%" }}
            data-uc-svg=""
            src="/assets/images/common/star.svg"
            width={19}
            height={29}
          />
          <h2 className="h3 xl:display-6 lh-lg m-0 max-w-md mx-auto text-tertiary dark:text-secondary">
            Stop Chasing Clicks.
            <span className="px-1 bg-tertiary dark:bg-secondary text-primary d-block lg:d-inline-block">
              Start Owning Answers.
            </span>{" "}
          </h2>
          <div className="mt-2">
            <p className="fs-6 sm:fs-5 text-tertiary-700 dark:text-white">
              The future of your brand's discovery is being written by AI right
              now. Secure your place as an industry authority before your
              competitors do. Schedule your free, no-obligation strategy call
              with our GEO experts today.
            </p>
            <p className="fs-6 sm:fs-5 text-tertiary-700 dark:text-white">
              We will provide a complimentary AI Visibility Audit to show you
              exactly where you stand today.{" "}
            </p>
          </div>
          <div className="vstack md:hstack justify-center gap-2 mt-3">
            <a
              href="https://appt.link/ai-monitor/30-minutes-introductory-call"
              target="_blank"
              className="btn btn-md xl:btn-lg btn-tertiary dark:btn-secondary text-primary px-3 lg:px-5 fw-bold hover:contrast-shadow"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
