"use client";
import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import localFont from "next/font/local";

const polysans = localFont({
  src: "../../../public/assets/fonts/polysans/PolySans-Medium.woff2",
  weight: "700",
});

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkDarkClass = () => {
      const htmlElement = document.documentElement;
      const hasUcDark = htmlElement.classList.contains("uc-dark");
      setIsDarkMode(hasUcDark);
      // console.log(`Class "uc-dark" is now present: ${hasUcDark}`);
      // console.log(hasUcDark);
    };

    checkDarkClass();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check if the class list changed on the <html> element
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkDarkClass();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden rounded-2"
    >
      <div
        className={
          isDarkMode
            ? "position-absolute top-0 start-0 end-0 h-100 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 lg:pb-2 dark-enabled"
            : "position-absolute top-0 start-0 end-0 h-100 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 lg:pb-2 dark-disabled"
        }
      >
        {" "}
      </div>

      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        {/* <div className="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
          <video
            data-uc-cover=""
            src="/assets/images/media/lexend-home-8.webm"
            autoPlay
            muted
            loop
          />
        </div> */}
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="section-inner panel min-h-700px">
                    <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-gray-300 dark:border-tertiary" />
                    <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-gray-300 dark:border-tertiary" />
                    <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-gray-300 dark:border-tertiary-600" />
                    {/* <div className="position-cover bg-gradient-to-b from-white dark:from-tertiary-700 via-transparent to-white dark:to-tertiary-800" /> */}
                    <div className="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
                    <div
                      className="d-none xl:d-block"
                      data-anime="targets: >*; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <div
                        className="position-absolute rounded-circle border dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                        style={{ top: "0%", right: "11%" }}
                        data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 50;"
                      >
                        <Image
                          className=""
                          alt="chatGPT logo"
                          src="/assets/images/apps/gpt.webp"
                          width={800}
                          height={800}
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                      <div
                        className="position-absolute rounded-circle border dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                        style={{ top: "6%", left: "24%" }}
                        data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
                      >
                        <Image
                          className=""
                          alt="gemini logo"
                          src="/assets/images/apps/gemini.webp"
                          width={800}
                          height={800}
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                      <div
                        className="position-absolute rounded-circle border dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                        style={{ top: "30%", left: "-12%" }}
                        data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
                      >
                        <Image
                          className=""
                          alt="copilot"
                          src="/assets/images/apps/copilot.webp"
                          width={2500}
                          height={2311}
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                      <div
                        className="position-absolute rounded-circle border dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                        style={{ top: "45%", right: "-13.5%" }}
                        data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 50;"
                      >
                        <Image
                          className=""
                          alt="perplexity logo"
                          src="/assets/images/apps/perplexity.webp"
                          width={351}
                          height={373}
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                      <div
                        className="position-absolute rounded-circle border  dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                        style={{ top: "75%", right: "18%" }}
                        data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
                      >
                        <Image
                          className=""
                          alt="deepseak logo"
                          src="/assets/images/apps/deepseak.webp"
                          width={800}
                          height={800}
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                      <div
                        className="position-absolute rounded-circle border dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                        style={{ top: "85%", left: "8%" }}
                        data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                      >
                        <Image
                          className=""
                          alt="grok logo"
                          src="/assets/images/apps/grok.webp"
                          width={333}
                          height={300}
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                    </div>
                    <div
                      className="panel vstack items-center gap-2 max-w-900px mx-auto text-center px-4 mt-6 lg:px-0 mt-8 xl:px-0 mt-11"
                      data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                      {/* <span className="fs-7 fw-bold py-narrow px-2 bg-primary text-gray-500 rounded-pill border border-dark">
                        Get started today!
                      </span> */}

                      {/* <p className="fs-5 lg:fs-4 lh-md fw-medium text-gray-500 dark:text-white">
                        AI Monitor is the world's first open source tool for
                        Artificial Intelligence Optimization (AIO), Generative
                        Engine Optimization (GEO), or Answer Engine Optimization
                        (AEO).
                      </p> */}
                      <div className={polysans.className}>
                        <h1
                          className="h2 xl:display-5 mt-0 mb-4 text-center text-tertiary dark:text-white"
                          style={{ transform: "translateY(0px)", opacity: 1 }}
                        >
                          Monitor & Boost Your Brand’s Visibility on{" "}
                          <br />{" "}
                          <span
                            className="text-gray-500 dark:text-primary"
                            data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                          >
                            <TyperComponent
                              strings={[
                                "ChatGPT",
                                "AI Overview",
                                "Copilot",
                                "Perplexity",
                              ]}
                            />
                          </span>
                          {/* <span className="typed-cursor" aria-hidden="true">
                          |
                        </span> */}
                        </h1>
                        <h4>
                        AI Monitor is an award-winning digital Marketing agency and Creator of the World’s First Open Source Tool for monitoring visibility on AI Search Engines. 

                        </h4>
                      </div>

                      <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4">
                        <div className="mb-2 lg:mb-3">
                          <a
                            href="https://v8dash.getaimonitor.com/signup"
                            className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                          >
                            <span>Generate AI Visibility Report</span>
                          </a>
                        </div>
                        <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-row md-flex-column">
                          <div className="hstack justify-center gap-2">
                            <b>Super</b>
                            <div className="rating panel">
                              <div className="hstack justify-center gap-narrow">
                                <i
                                  className="icon unicon-star-filled text-white p-narrow"
                                  style={{ backgroundColor: "#00b67a" }}
                                />
                                <i
                                  className="icon unicon-star-filled text-white p-narrow"
                                  style={{ backgroundColor: "#00b67a" }}
                                />
                                <i
                                  className="icon unicon-star-filled text-white p-narrow"
                                  style={{ backgroundColor: "#00b67a" }}
                                />
                                <i
                                  className="icon unicon-star-filled text-white p-narrow"
                                  style={{ backgroundColor: "#00b67a" }}
                                />
                                <i
                                  className="icon unicon-star-half-filled text-white p-narrow"
                                  style={{ backgroundColor: "#00b67a" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="hstack justify-center gap-narrow">
                            <span className="desc rtl:order-first">
                              with reviews on <strong>Trustpilot and G2</strong>
                            </span>
                            {/* <div>
                              <Image
                                alt="Trustpilot"
                                className="w-96px dark:d-none"
                                src="/assets/images/review-logo/05.svg"
                                width={138}
                                height={42}
                              />
                              <Image
                                alt="Trustpilot"
                                className="w-96px d-none dark:d-inline-flex"
                                src="/assets/images/review-logo/dark-05.svg"
                                width={138}
                                height={42}
                              />
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
