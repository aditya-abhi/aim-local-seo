import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import ServiceTimeline from "@/components/homes/home-new/ServiceTimeline";
import Hero from "@/components/homes/home-new/Hero";
import Problem from "@/components/homes/home-new/Problem";
import Features from "@/components/homes/home-new/Features";
import Services from "@/components/homes/home-new/Services";
import Faqs from "@/components/homes/home-new/Faqs";
import Cta from "@/components/homes/home-new/Cta";
import React from "react";
import Testimonials from "@/components/homes/home-new/Testimonials";
import Pricing from "@/components/homes/home-new/Pricing";
export const metadata = {
  title: "AI Monitor | Boost Your Brand Visibility in AI Search",
  description:
    "AI Monitor, the world’s first open-source tool for GEO, AEO, and AIO, helps brands optimize for AI search to enhance AI Visibility to stay ahead in the AI-driven search era.",
};
export default function page() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Problem />
              <Features />
              <ServiceTimeline />
              {/* <Process /> */}
              <Services />
              <Pricing />
              <Testimonials />
              <Faqs />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
