import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import About from "@/components/about/About";
import Values from "@/components/about/Values";
import Story from "@/components/about/Story";
import Work from "@/components/about/Work";
import Cta from "@/components/about/Cta";
export const metadata = {
  title:
    "About-Us || AI Monitor | Get Your Brand Recommended by ChatGPT &amp; Google AI Overview",
  description:
    "Get to know AI Monitor : our mission, our team, and the passion that drives us to deliver exceptional products and GEO services.",
};
export default function TermsPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              {/* <Terms /> */}
              <About />
              <Values />
              <Story />
              <Work />
              <Cta />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
