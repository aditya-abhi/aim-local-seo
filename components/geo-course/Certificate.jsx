import React from "react";
import Image from "next/image";

export default function Certificate() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="panel text-center items-center justify-center">
            <h2 className="h3 lg:h2">
              Turn Learning into{" "}
              <span className="text-tertiary dark:text-primary">
                Leadership!
              </span>
            </h2>
            <p className="my-4">
              Our Generative Engine Certification isn’t just a badge; it’s
              recognition that you’re ready to shape how brands succeed in the
              AI-first search era.
            </p>
            <Image
              src="/assets/images/media/geo-certificate.webp"
              className="rounded-2"
              width={1500}
              height={1061}
              alt="Sample certificate for course completion"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
