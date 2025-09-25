import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/services/Hero";
import Hero2 from "@/components/services/Hero2";
import Features from "@/components/services/Features";
import Services from "@/components/services/Services";
import Faq from "@/components/services/Faqs";
import Testimonials from "@/components/services/Testimonials";
import Cta from "@/components/services/Cta";
// import Problem from "@/components/features/Problem";
// import Target from "@/components/features/Target";
import WhySection from "@/components/services/WhySection";
import ChooseUs from "@/components/services/ChooseUs";
import ServiceTimeline from "@/components/servicePages/saasSeo/ServiceTimeline";
import CaseStudies from "@/components/services/CaseStudies";

export const metadata = {
  title: "Services || AI Monitor",
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
            {/* <Hero /> */}
            <Hero2 />
            <Features />
            <WhySection />
            {/* <ServiceTimeline /> */}
            <Services />
            <CaseStudies />
            <Testimonials />
            <ChooseUs />
            <Faq />
            <Cta />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
