import Breadcumb from "@/components/otherPages/Breadcumb";
import Notfound from "@/components/otherPages/404";
import Header7 from "@/components/headers/Header7 copy";
import Footer7 from "@/components/footers/Footer7";
export const metadata = {
  title:
    "Not Found || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          {/* <Breadcumb /> */}
          <Notfound />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
