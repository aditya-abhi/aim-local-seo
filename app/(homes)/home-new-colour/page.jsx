import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/homes/home-new-colour/Blogs";
import Brands from "@/components/homes/home-new-colour/Brands";
import Cta from "@/components/homes/home-new-colour/Cta";
import Faqs from "@/components/homes/home-new-colour/Faqs";
import Features from "@/components/homes/home-new-colour/Features";
import Features2 from "@/components/homes/home-new-colour/Features2";
import Articles from "@/components/homes/home-new-colour/Articles";
// import Hero from "@/components/homes/home-new/Hero";
// import Hero from "@/components/homes/home-new/Hero-2";
import Hero from "@/components/homes/home-new-colour/Hero-3";
import Pricing from "@/components/homes/home-new-colour/Pricing";
import Testimonials from "@/components/homes/home-new-colour/Testimonials";
// import Tools from "@/components/homes/home-new-colour/Tools";
import React from "react";
export const metadata = {
  title:
    "Home New Colour || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="theme-4-colour">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Brands />
              {/* <Tools /> */}
              <Features2 />
              <Features />
              <Articles />
              <Pricing />
              <Testimonials />
              <Faqs />
              <Blogs />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
