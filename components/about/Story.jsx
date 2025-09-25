import { featuresHome } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Story() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel lg:pt-10 text-gray-700 dark:text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                OUR STORY
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                By the One Who Built It,{" "}
                <span className="text-tertiary dark:text-primary">
                  Avinash Tripathi
                </span>{" "}
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Hi, I’m Avinash. I didn’t start AI Monitor because it was trendy
                or “the next big thing.” I started it because of a gut-punching
                problem I faced firsthand. A few years ago, I poured my heart
                into a startup only to see AI search engines misrepresent my
                work entirely. My first thought? “I need to file a legal case!”
                Looking back, it sounds dramatic… but at the time, it felt real.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Weeks of research, late-night experiments, and way too much
                coffee later, I realized there was no human intentionally
                messing up my brand; it was AI interpreting it wrong. That
                moment sparked a mission: to protect businesses from being
                misunderstood by AI. If this could happen to me, it could happen
                to anyone. Brands deserved to be seen, understood, and
                represented accurately.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8">
                I founded AI Monitor in 2023 with one belief: traditional SEO
                isn’t enough anymore. The digital world is evolving fast.
                Generative AI, answer engines, and large language models are
                rewriting the rules of visibility. Being on Google’s first page
                isn’t enough; if AI doesn’t “see” your brand correctly, it might
                as well not exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
