"use client";
import React, { useState } from "react";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
    // console.log(totalPosts, postsPerPage);
  }
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // const [activePage, setActivePage] = useState();

  // const handleClick = (page) => {
  //   setActivePage(page);
  //   setCurrentPage(page);
  //   // console.log(page);
  // };

  const handleClick = (page) => {
    // Boundary checks to ensure page is within valid range
    if (page < 1 || page > totalPages) {
      return;
    }
    // setActivePage(page);
    setCurrentPage(page);
  };

  return (
    <ul>
      <li>
        <a onClick={() => handleClick(currentPage - 1)}>
          <span className="icon icon-1 unicon-chevron-left rtl:rotate-180" />
        </a>
      </li>
      {/* {[1, 2].map((page) => ( */}
      {pages.map((page, index) => (
        <li key={index}>
          <a
            className={currentPage === page ? "uc-active" : ""}
            onClick={() => handleClick(page)}
          >
            {page}
          </a>
        </li>
      ))}
      <li>
        <a onClick={() => handleClick(currentPage + 1)}>
          <span className="icon icon-1 unicon-chevron-right rtl:rotate-180" />
        </a>
      </li>
    </ul>
  );
}
