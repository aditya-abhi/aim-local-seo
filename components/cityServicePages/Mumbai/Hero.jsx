import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark bg-tertiary-700 lg:mx-2 lg:rounded-2 lg:rounded-top-0"
    >
      <div className="section-outer py-6 lg:py-8 xl:py-11 min-h-700px">
        <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="position-cover bg-gradient-to-b from-white dark:from-tertiary-700 via-transparent to-white dark:to-tertiary-800" />
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
        <div className="container container-80">
          <div className="section-inner panel">
            <div
              className="d-none xl:d-block"
              data-anime="targets: >*; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
            >
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "10%", right: "10.5%" }}
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
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "-5%", left: "24%" }}
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
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "30%", left: "-1.5%" }}
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
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "45%", right: "-1.5%" }}
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
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "75%", right: "21%" }}
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
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "85%", left: "11.5%" }}
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
              className="panel vstack items-center gap-2 max-w-lg mx-auto text-center px-4 lg:px-0 mt-6"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Get started today!
              </span>
              <h2
                className="h3 lg:h2 xl:display-5 m-0 text-center"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Best Generative Engine Optimization (GEO) Agency in <br />
              </h2>
              <h2
                className="h2 xl:display-3 text-center text-tertiary dark:text-primary"
                data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
              >
                <TyperComponent strings={["Mumbai", "મુંબઈ", "मुंबई"]} />
                {/* </span> */}
              </h2>

              <p className="fs-5 lg:fs-4 text-white opacity-80">
                At AI Monitor, we are proud to be rated the world’s best &
                largest Generative Engine Optimization Agency for Enterprises
                based in Mumbai (don’t ask us how—we’re still figuring that
                out).
              </p>
              <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4">
                <div className="mb-2 lg:mb-3">
                  <a
                    href="https://appt.link/ai-monitor/30-minutes-introductory-call"
                    className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                  >
                    <span>Get Started</span>
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
                    <div>
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
