import { allBlogs } from "@/data/blogs";
import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Cta from "@/components/common/CaseStudy/Cta";
import Prismara from "@/components/common/CaseStudy/Prismara";
export const metadata = {
  title: "Prismara Case Study || AI Monitor",
  description:
    "Learn how Prismara increased its Marketing-Qualified Leads by leveraging the expertise of AI Monitor.",
};
export default async function BlogDetailsPage1(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <Prismara blogItem={blogItem} />
          <Cta />
          {/* <Newsletter /> */}
        </div>
        <Footer7 />
      </div>
    </>
  );
}
