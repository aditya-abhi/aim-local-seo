import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/geoService/Hero2";
import Problem from "@/components/servicePages/geoService/Problem";
import Features from "@/components/servicePages/geoService/Features";
import Process from "@/components/servicePages/geoService/Process";
import Services from "@/components/servicePages/geoService/Services";
import Faqs from "@/components/servicePages/geoService/Faqs";
import Cta from "@/components/servicePages/geoService/Cta";
import ServiceTimeline from "@/components/servicePages/geoService/ServiceTimeline";

export const metadata = {
  title: "Generative Engine Optimization Service || AI Monitor",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <div className="theme-4">
      <div className="page-wrapper">
        <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
          <Header />
          <div id="wrapper" className="wrap">
            <Hero2 />
            <Problem />
            <Features />
            <ServiceTimeline />
            {/* <Process /> */}
            <Services />
            <Faqs />
            <Cta />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
