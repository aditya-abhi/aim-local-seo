import { blogPosts2, blogPosts3, blogPosts7, posts2 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AISummaryButtons from "../components/AISummaryButtons";

export default function RightSideTop() {
  return (
    <div className="uc-sidebar panel vstack gap-2 ">
      <div className="widget featured-widget vstack gap-2 lg:gap-4 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 border mb-3">
        {/* AI Summary Buttons Widget */}
        <div className="widget ai-summary-widget mb-3">
          <AISummaryButtons />
        </div>
      </div>
    </div>
  );
}
