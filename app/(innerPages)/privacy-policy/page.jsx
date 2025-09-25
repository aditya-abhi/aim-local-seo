import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
export const metadata = {
  title:
    "Privacy Policy || AI Monitor | Get Your Brand Recommended by ChatGPT &amp; Google AI Overview",
  description:
    "Read our Privacy Policy to understand your rights, responsibilities, and important policies when using our website and services.",
};
export default function TermsPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <PrivacyPolicy />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
