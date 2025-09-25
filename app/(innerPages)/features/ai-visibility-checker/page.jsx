import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/feature-pages/ai-visibility-checker/Hero";
import Faq from "@/components/feature-pages/ai-visibility-checker/Faqs";
import Testimonials from "@/components/feature-pages/ai-visibility-checker/Testimonials";
import Cta from "@/components/feature-pages/ai-visibility-checker/Cta";
import Problem from "@/components/feature-pages/ai-visibility-checker/Problem";
import Target from "@/components/feature-pages/ai-visibility-checker/Target";
import Report from "@/components/feature-pages/ai-visibility-checker/Report";
import Features from "@/components/feature-pages/ai-visibility-checker/Features";
import Features2 from "@/components/feature-pages/ai-visibility-checker/Features2";
import Steps from "@/components/feature-pages/ai-visibility-checker/Steps";

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
            {/* <Features2 /> */}
            <Steps />
            {/* <Problem />
            <Target /> */}
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
