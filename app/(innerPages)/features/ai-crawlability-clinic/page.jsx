import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/feature-pages/ai-crawlability-clinic/Hero";
import Faq from "@/components/feature-pages/ai-crawlability-clinic/Faqs";
import Testimonials from "@/components/feature-pages/ai-crawlability-clinic/Testimonials";
import Cta from "@/components/feature-pages/ai-crawlability-clinic/Cta";
import Report from "@/components/feature-pages/ai-crawlability-clinic/Report";
import Features from "@/components/feature-pages/ai-crawlability-clinic/Features";
import Steps from "@/components/feature-pages/ai-crawlability-clinic/Steps";

export const metadata = {
  title:
    "Features || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
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
            <Hero />
            <Report />
            <Features />
            <Steps />
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
