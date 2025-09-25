import React from "react";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Hero from "@/components/cityServicePages/Chennai/Hero";
import FeatureImage from "@/components/cityServicePages/Chennai/FeatureImage";
import Facts from "@/components/cityServicePages/Chennai/Facts";
import Services from "@/components/cityServicePages/Chennai/Services";
import Features from "@/components/cityServicePages/Chennai/Features";
import Pricing from "@/components/cityServicePages/Chennai/Pricing";
import CaseStudies from "@/components/cityServicePages/Chennai/CaseStudies";
import Testimonials from "@/components/cityServicePages/Chennai/Testimonials";
import Cta from "@/components/cityServicePages/Chennai/Cta";
export const metadata = {
  title: "AI Monitor Best Generative Engine Optimization Agency in Chennai",
  description:
    "Boost your brand’s AI visibility with AI Monitor, Chennai’s leading Generative Engine Optimization GEO agency. Get discovered by AI-tools.",
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
