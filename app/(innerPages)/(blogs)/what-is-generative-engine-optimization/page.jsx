import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import AEOToolsNewCopy from "@/components/blogs/AEOToolsNewCopy";
import WhatisGEO from "@/components/blogs/WhatisGEO";
import WhatisGEO2 from "@/components/blogs/WhatisGEO2";
import WhatisGEOFaq from "@/components/blogs/faqs/WhatisGEOFaq";
export const metadata = {
  title:
    "What is Generative Engine Optimization)? All you need to know in 2025 || AI Monitor",
  description:
    "Want to crack AI Search Algorithm? Explore these top 11 Generative Engine Optimization techniques and master GEO inside out in 2025!",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Header7 />
          <Head
            pageName="What is Generative Engine Optimization (GEO)? All you need to know in 2025 
"
            src="/assets/images/blog/what-is-geo.webp"
            publishedOn="Jul 08 , 2025"
            updatedOn="Sep 07, 2025"
          />
          <Experiment1 />
          <AuthorBioShort />
          <WhatisGEO />
          {/* <WhatisGEO2 /> */}
          <Author />
          <WhatisGEOFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={"/what-is-generative-engine-optimization/"}
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
