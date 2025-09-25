import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import RefundPolicy from "@/components/refund-policy/RefundPolicy";
export const metadata = {
  title:
    "Refund Policy || AI Monitor | Get Your Brand Recommended by ChatGPT &amp; Google AI Overview",
  description:
    "Pick confidently with AI Monitor’s 15-day refund policy. Enjoy a full money-back guarantee if you are not satisfied with your experience",
};
export default function TermsPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <RefundPolicy />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
