"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductPages from "./ProductPages";
import Features from "./Features";
import Solutions from "./Solutions";
import Services from "./Services";
import { categories } from "@/data/menu";
import Courses from "./Courses";

export default function Header7() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setScrollingDown(currentScrollPos <= 80 ? false : isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`uc-header header-eight uc-navbar-sticky-wrap z-999 uc-dark uc-sticky  ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      } ${scrollingDown ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""}`}
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      style={{}}
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent`}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
          <div className="container">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white px-1 lg:px-2 bg-white dark:bg-tertiary-600 bg-opacity-90 rounded-2 mt-2 shadow-xs"
              data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo ltr:ms-1 rtl:me-1">
                  <Link
                    className="panel text-none"
                    href={`/`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt="AI Monitor Logo"
                      src="/assets/images/common/ai-monitor-logo-light.webp"
                      width={148}
                      height={39}
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="AI Monitor Logo"
                      src="/assets/images/common/ai-monitor-logo-dark.webp"
                      width={148}
                      height={39}
                    />
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center  ">
                <ul className="uc-navbar-nav fs-5 gap-3 lg:gap-4 d-none lg:d-flex">
                  <li className="has-dd-menu hover:text-primary-600">
                    <a href="/" role="button" aria-haspopup="true">
                      <span className="dark:hover:text-secondary">Home </span>
                    </a>
                  </li>
                  <li className="has-dd-menu hover:text-primary-600">
                    <a href="/features" role="button" aria-haspopup="true">
                      Features{" "}
                      <span
                        data-uc-navbar-parent-icon=""
                        className="uc-icon uc-navbar-parent-icon"
                      >
                        <svg width={12} height={12} viewBox="0 0 12 12">
                          <polyline
                            fill="none"
                            stroke="#000"
                            strokeWidth="1.1"
                            points="1 3.5 6 8.5 11 3.5"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      className="uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden shadow-xl bg-white dark:bg-tertiary-600 dark:text-white uc-drop uc-open"
                      data-uc-drop=" offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;"
                      style={{
                        width: "100%",
                        maxWidth: 1452,
                      }}
                    >
                      <div className="uc-dropbar-content p-3 lg:p-6">
                        <div className="container container-full">
                          <div className="row child-cols-4 gx-6">
                            <Features />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href={`#pricing`}>Pricing</Link>
                  </li>
                  <li>
                    <Link href={`https://getaimonitor.com/blog/`}>Blogs</Link>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <Link
                  className="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-3 d-none lg:d-inline-flex shadow-xs"
                  href="https://calendly.com/team-getaimonitor/ai-monitor-local-seo-demo"
                  target="_blank"
                >
                  Get-Started
                </Link>
                <a
                  className="btn btn-md btn-tertiary text-white w-48px h-48px d-inline-flex lg:d-none"
                  onClick={openMobileMenu}
                >
                  <i className="icon icon-2 unicon-menu" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
