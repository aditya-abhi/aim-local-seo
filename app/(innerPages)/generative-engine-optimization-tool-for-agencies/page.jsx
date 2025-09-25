import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/agency-clients/Hero";
import Faq from "@/components/agency-clients/Faqs";
import Testimonials from "@/components/agency-clients/Testimonials";
import Cta from "@/components/agency-clients/Cta";
import FitFor from "@/components/agency-clients/FitFor";
import Solutions from "@/components/agency-clients/Solutions";
import HowItWorks from "@/components/agency-clients/HowItWorks";
export const metadata = {
  title: "AI Search Optimization for Agencies || AI Monitor",
  description:
    "Boost rankings with AI-driven Generative Engine Optimization. AI Monitor helps agencies optimize content for better visibility and engagement.",
};
export default function page() {
  return (
    <div className="theme-4">
      <div className="page-wrapper">
        <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
          <Header />
          <div id="wrapper" className="wrap">
            <Hero />
            <FitFor />
            <Solutions />
            <HowItWorks />
            <Faq />
            <Testimonials />
            <Cta />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
