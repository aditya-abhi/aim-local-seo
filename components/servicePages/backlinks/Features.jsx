import { stepsService12, stepsService4 } from "@/data/process";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container">
          <div
            className="section-inner panel vstack border rounded-3 overflow-hidden bg-secondary dark:bg-gray-300 dark:bg-opacity-15"
            data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
          >
            <div className="panel p-4 md:p-6 lg:p-8 text-center items-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                The Power of Backlinks & Mentions
              </h2>
              <p className="fs-6 xl:fs-5 fw-bold text-dark dark:text-white text-opacity-70 mt-2">
                Our service connects you with relevant, high-authority websites
                that matter in your industry. We don’t just build links, we
                build trust.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols justify-center col-match g-4 sep uc-grid"
              data-uc-grid=""
            >
              {stepsService12.map((step, index) => (
                <div key={index} className={step.minWidth}>
                  <div className="panel vstack items-center gap-2 text-center p-5 xl:py-8">
                    <span className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-tertiary text-tertiary dark:text-primary">
                      {step.number}
                    </span>
                    <Image
                      className="w-100 max-h-200px rounded-1"
                      alt="Image"
                      src={step.imgSrc}
                      width={1200}
                      height={800}
                    />
                    <h3 className="h5 lg:h4 m-0">{step.title}</h3>
                    <p className="fs-6 dark:text-white">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
