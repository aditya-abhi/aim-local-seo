import { services } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <>
      {services.map((section, index) => (
        <div key={index}>
          <h6 className="h6 mb-3">
            <i className={`fs-7 ${section.icon} ltr:me-narrow rtl:ms-narrow`} />
            {section.title}
          </h6>
          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  className="hstack items-start gap-2 hover:text-primary-600"
                  href={item.link}
                >
                  <div className="">
                    <span className="icon rounded cstack min-w-32px h-32px rounded ">
                      <Image
                        className="w-32px rounded"
                        alt="icon"
                        width={24}
                        height={24}
                        src={item.image}
                        priority={true}
                      />
                    </span>
                  </div>
                  <span className="vstack gap-narrow mt-nnarrow">
                    <b className="fw-medium dark:text-white hover:text-primary-600">
                      {item.title}
                    </b>
                  </span>
                </Link>
                {/* <Link
                  href={item.link}
                  className="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                >
                  <span className="icon rounded">
                    <Image
                      className="w-32px rounded"
                      alt="icon"
                      width={24}
                      height={24}
                      src={item.iconSrc}
                    />
                  </span>
                  <div className="panel">
                    <span className="fs-7 mb-narrow">{item.title}</span>
                  </div>
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
