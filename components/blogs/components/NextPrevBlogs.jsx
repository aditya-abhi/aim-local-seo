import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NextPrevBlogs() {
  return (
    <div className="container container-80">
      <div className="post-navigation panel vstack sm:hstack justify-between gap-2 my-6 xl:my-9 fdr-min-600">
        <div className="new-post panel hstack w-100 sm:w-1/2">
          <div className="panel hstack justify-center w-100px h-100px">
            <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
              <Image
                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                alt="How can marketing help your business?"
                src="/assets/images/blog/img-02.jpg"
                width="1280"
                height="853"
              />
              <Link
                href={`/blog-details/1`}
                className="position-cover"
                data-caption="How can marketing help your business?"
              ></Link>
            </figure>
          </div>
          <div className="panel vstack justify-center px-2 gap-1 w-1/3">
            <span className="fs-7 opacity-60">Prev Article</span>
            <h6 className="h6 lg:h5 m-0">
              How can marketing help your business?
            </h6>
          </div>
          <Link href={`/blog-details/1`} className="position-cover"></Link>
        </div>
        <div className="new-post panel hstack w-100 sm:w-1/2">
          <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
            <span className="fs-7 opacity-60">Next Article</span>
            <h6 className="h6 lg:h5 m-0">
              Top 5 reasons to invest in marketing
            </h6>
          </div>
          <div className="panel hstack justify-center w-100px h-100px">
            <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
              <Image
                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                alt="Top 5 reasons to invest in marketing"
                src="/assets/images/blog/img-01.jpg"
                width="1280"
                height="853"
              />
              <Link
                href={`/blog-details/1`}
                className="position-cover"
                data-caption="Top 5 reasons to invest in marketing"
              ></Link>
            </figure>
          </div>
          <Link href={`/blog-details/1`} className="position-cover"></Link>
        </div>
      </div>
    </div>
  );
}
