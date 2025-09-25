import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/llmSeo/Hero2";
import Problem from "@/components/servicePages/llmSeo/Problem";
import Features from "@/components/servicePages/llmSeo/Features";
import Process from "@/components/servicePages/llmSeo/Process";
import Services from "@/components/servicePages/llmSeo/Services";
import Faqs from "@/components/servicePages/llmSeo/Faqs";
import Cta from "@/components/servicePages/llmSeo/Cta";
import ServiceTimeline from "@/components/servicePages/llmSeo/ServiceTimeline";

export const metadata = {
  title: "LLM Search Enmgine Optimization Service || AI Monitor",
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
