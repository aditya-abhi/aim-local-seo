import { coursesHeader } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Courses() {
  return (
    <>
      {" "}
      {coursesHeader.map((section, index) => (
        <div key={index} className="vstack gap-3">
          <Link href={section.link}>
            <h6 className="h6 m-0 hover:text-primary-600">
              {/* <i
                className={`fs-7 ${section.icon} ltr:me-narrow rtl:ms-narrow`}
              /> */}
              {section.title}
            </h6>
            <p>{section.desc}q</p>
          </Link>
          {/* {section.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <Link
                href={item.ilink}
                className="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
              >
                <span className="icon rounded dark:bg-white">
                  <Image
                    className="w-32px"
                    alt="icon"
                    width={24}
                    height={24}
                    src={item.iconSrc}
                  />
                </span>
                <div className="panel">
                  <span className="fs-7 mb-narrow">{item.title}</span>
                </div>
              </Link>
            </div>
          ))} */}
        </div>
      ))}
    </>
  );
}
