import {
  blogPostList,
  blogPosts2,
  blogPosts3,
  blogPosts7,
  posts2,
} from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RightSideBottom() {
  return (
    <div className="uc-sidebar panel vstack gap-2 d-none lg:d-block">
      <div className="widget featured-widget vstack gap-2 lg:gap-4 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 border mb-3">
        <div className="widget-title text-center">
          <h5 className="fs-7 m-0">Featured posts</h5>
        </div>
        <div className="widget-content mt-2">
          {blogPostList.slice(4, 7).map((post, index) => (
            <div className="panel text-center" key={index}>
              <div className="ratio ratio-16x9 rounded lg:rounded-1-5 uc-transition-toggle overflow-hidden">
                <Image
                  className="media-cover image uc-transition-scale-up uc-transition-opaque mt-3"
                  alt={post.imgAlt}
                  src={post.imgSrc}
                  width="768"
                  height="560"
                />
                <Link
                  className="position-cover"
                  data-caption={post.imgAlt}
                  href={`${post.link}`}
                />
              </div>
              <h4 className="h5 mt-3">
                <Link className="text-none" href={`${post.link}`}>
                  {post.title}
                </Link>
              </h4>
              {/* <p className="fs-6">{post.description}</p> */}
              <Link
                className="btn btn-text text-primary dark:text-primary border-bottom"
                href={`${post.link}`}
              >
                Read more
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
