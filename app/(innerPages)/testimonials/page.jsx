import Terms from "@/components/terms/Terms";
import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Testimonials from "@/components/testimonials/Testimonials";
export const metadata = {
  title:
    "Testimonials || AI Monitor | Get Your Brand Recommended by ChatGPT &amp; Google AI Overview",
  description:
    "Discover real testimonials from our satisfied clients. See how we’ve helped businesses succeed and why they trust us to deliver outstanding results.",
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
              <Testimonials />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
