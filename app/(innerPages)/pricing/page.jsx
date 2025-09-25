import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import PricingService from "@/components/pricing/PricingService";
import PricingTools from "@/components/pricing/PricingTools";
import PricingTable from "@/components/pricing/PricingTable";
import Cta from "@/components/pricing/Cta";
import Testimonials from "@/components/pricing/Testimonials";

import React from "react";
export const metadata = {
  title:
    "Pricing | AI Monitor | Get Your Brand Recommended by ChatGPT &amp; Google AI Overview",
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
              <PricingService />
              {/* <PricingTools /> */}
              <PricingTable />
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
