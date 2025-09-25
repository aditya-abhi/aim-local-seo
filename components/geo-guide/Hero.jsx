"use client";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-tertiary-700 lg:mx-2 rounded-bottom-2 " />
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2">
                    The Future of Search Has Arrived - <br />
                    <span className="text-primary dark:text-secondary">
                      Is Your Brand Ready?{" "}
                    </span>
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    Our Ultimate GEO Guide is your AI search playbook packed
                    with proven strategies, actionable techniques, and exclusive
                    insights that help you take control of your visibility
                    before your competitors do.
                  </p>
                  <Link
                    href={`https://appt.link/ai-monitor/30-minutes-introductory-call`}
                    target="_blank"
                    className="btn btn-lg btn-tertiary text-white hover:bg-primary hover:text-tertiary dark:border-secondary dark:bg-primary dark:text-tertiary dark:hover:bg-secondary dark:hover:text-tertiary dark:hover:border-primary border-2 px-2 w-auto"
                  >
                    {/* <i className="icon-narrow unicon-chat-launch fw-bold" /> */}
                    <span>Download Now</span>
                  </Link>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className=""
                    alt="Generative Engine Optimization Guide illustration"
                    src="/assets/images/landing/guide-hero.webp"
                    width="1492"
                    height="1250"
                  />
                  {/* <Image
                    className=""
                    alt="hero-mockup-rtl"
                    src="/assets/images/template/hero-mockup.png"
                    width="1492"
                    height="1250"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
