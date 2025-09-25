import React from "react";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Hero from "@/components/cityServicePages/Lucknow/Hero";
import FeatureImage from "@/components/cityServicePages/Lucknow/FeatureImage";
import Facts from "@/components/cityServicePages/Lucknow/Facts";
import Services from "@/components/cityServicePages/Lucknow/Services";
import Features from "@/components/cityServicePages/Lucknow/Features";
import Pricing from "@/components/cityServicePages/Lucknow/Pricing";
import CaseStudies from "@/components/cityServicePages/Lucknow/CaseStudies";
import Testimonials from "@/components/cityServicePages/Lucknow/Testimonials";
import Cta from "@/components/cityServicePages/Lucknow/Cta";
export const metadata = {
  title: "AI Monitor Best Generative Engine Optimization Agency in Delhi",
  description:
    "Boost your brand’s AI visibility with AI Monitor, Delhi’s leading Generative Engine Optimization GEO agency. Get discovered by AI-tools.",
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
              <FeatureImage />
              <Facts />
              <Services />
              <Features />
              <Pricing />
              <CaseStudies />
              <Testimonials />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
