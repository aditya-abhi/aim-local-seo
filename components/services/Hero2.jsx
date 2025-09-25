"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

export default function Hero2() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 pt-9 lg:pt-10 bg-secondary dark:bg-tertiary-700 rounded-bottom-2 mx-2">
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        >
          {/* <div
            className="position-absolute  rotate-45"
            style={{ top: "35%", left: "47%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={193}
              height={216}
              alt="chatGPT logo"
              src="/assets/images/apps/gpt.webp"
            />
          </div>
          <div
            className="position-absolute  rotate-45"
            style={{ top: "12%", right: "15%" }}
          >
            <Image
              className="w-48px text-gray-900 dark:text-white"
              width={69}
              height={95}
              alt="chatGPT logo"
              src="/assets/images/apps/gpt.webp"
            />
          </div>
          <div
            className="position-absolute  translate-middle-y -rotate-12"
            style={{ top: "15%", left: "35%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="gemini logo"
              src="/assets/images/apps/gemini.webp"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="gemini logo"
              src="/assets/images/apps/gemini.webp"
              width="100"
              height="100"
            />
          </div> */}
          <div
            className="position-absolute translate-middle-y rotate-45 ms-n3"
            style={{ top: "22%", left: "10%" }}
          >
            <Image
              className="w-72px xl:w-80px d-block dark:d-none"
              alt="deepseak logo"
              src="/assets/images/apps/deepseak.webp"
              width="100"
              height="100"
            />
            <Image
              className="w-72px xl:w-80px d-none dark:d-block"
              alt="deepseak logo"
              src="/assets/images/apps/deepseak.webp"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute  translate-middle-y"
            style={{ bottom: "18%", left: "33%" }}
          >
            <Image
              className="w-64px xl:w-80px d-block dark:d-none"
              alt="grok logo"
              src="/assets/images/apps/grok.webp"
              width="100"
              height="100"
            />
            <Image
              className="w-64px xl:w-80px d-none dark:d-block"
              alt="grok logo"
              src="/assets/images/apps/grok.webp"
              width="100"
              height="100"
            />
          </div>
          {/* <div
            className="position-absolute translate-middle-y rotate-45"
            style={{ bottom: "20%", right: "8%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="grok logo"
              src="/assets/images/apps/grok.webp"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="grok logo"
              src="/assets/images/apps/grok.webp"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y -rotate-12"
            style={{ top: "60%", right: "48%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="copilot"
              src="/assets/images/apps/copilot.webp"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="copilot"
              src="/assets/images/apps/copilot.webp"
              width="100"
              height="100"
            />
          </div> */}
          {/* <div
            className="position-absolute translate-middle-y -rotate-12 me-n3"
            style={{ top: "35%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="icon-chat"
              src="/assets/images/template/icon-chat.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="icon-chat-dark"
              src="/assets/images/template/icon-chat-dark.svg"
              width="100"
              height="100"
            />
          </div> */}
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel py-4">
            <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0">
              <div className="col-12 sm:col-9 lg:col-5">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {/* <span className="fs-6 fw-bold text-primary dark:text-secondary">
                    CRM Tool Workflow
                  </span> */}

                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2">
                    <span className="mb-2 text-tertiary dark:text-secondary">
                      Dominate AI Search with an
                    </span>
                    <br className="d-none lg:d-block" />
                    <span className="px-1 py-0 bg-primary dark:bg-secondary text-tertiary">
                      Amazing Team.
                    </span>
                    {/* Dominate AI Search with an Amazing Team. */}
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Why fear? When we’re here to secure your AI visibility. We
                    make sure your brand leads in ChatGPT, Perplexity, Google AI
                    Overviews, and beyond.
                  </p>
                  <div
                    className="vstack md:hstack  gap-3 my-1 lg:my-3 sm-flex-column"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                  >
                    <Link
                      href={`https://appt.link/ai-monitor/30-minutes-introductory-call`}
                      target="_blank"
                      className="btn btn-md btn-tertiary text-white hover:bg-primary hover:text-tertiary dark:border-secondary dark:bg-primary dark:text-tertiary dark:hover:bg-secondary dark:hover:text-tertiary dark:hover:border-primary border-2 px-3 w-auto"
                    >
                      <i className="icon-narrow unicon-chat-launch fw-bold" />
                      <span>Book a Free Strategy Call</span>
                    </Link>
                    {/* <Link
                      href={`/page-pricing`}
                      className="btn btn-md btn-primary text-tertiary hover:bg-tertiary hover:text-white dark:border-secondary dark:bg-tertiary-700 dark:text-primary dark:hover:bg-primary dark:hover:text-white border-2 px-3 w-auto"
                    >
                      <i className="icon-narrow unicon-chat-launch fw-bold" />
                      <span>Get Your Free AI Visibility Audit</span>
                    </Link> */}
                    {/* <Link
                      href={`/page-pricing`}
                      className="btn btn-md btn-primary text-tertiary hover:bg-tertiary hover:text-white dark:border-secondary dark:bg-tertiary-700 dark:text-primary dark:hover:bg-primary dark:hover:text-white border-2 px-3 w-auto"
                    >
                      <i className="icon-narrow unicon-chat-launch fw-bold" />
                      <span>Start chatting</span>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6 xl:col-7">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div className="panel overflow-hidden">
                    <Image
                      className="d-block dark:d-none"
                      alt="Main hero image"
                      src="/assets/images/landing/services-light.webp"
                      width="1600"
                      height="1176"
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Main hero image"
                      src="/assets/images/landing/services-dark.webp"
                      width="1600"
                      height="1176"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
              <div
                className="block-panel panel"
                data-anime="opacity: [0, 1]; duration: 450; delay: 750;"
              >
                <div className="element-brands text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
