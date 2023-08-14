"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const handleNavClick = () => {
    setShowHeader(!showHeader);
  };
  return (
    <header className="flex justify-between min-[1000px]:px-40 py-10 max-[600px]:px-10 min-[600px]:px-10 max-[600px]:flex-col mt-4">
      <div className="flex text-white font-title text-4xl">
        <h1 className="font-title text-[40px] leading-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          NAMMOB
        </h1>
        <span className="font-title text-[20px] leading-[3.5rem]">.POM</span>
      </div>
      <div className="flex gap-10 px-6 text-white max-[600px]:flex-col max-[600px]:px-0">
        <div
          className="mt-8 w-12 h-12 min-[600px]:hidden"
          onClick={handleNavClick}
        >
          <FontAwesomeIcon icon={faBars} className="fa-3x" />
        </div>
        {showHeader ? (
          <>
            <div className={`flex ${showHeader ? "" : "max-[600px]:hidden"}`}>
              <Link
                href="/"
                className="font-para font-semibold text-[20px] leading-5 items-baseline"
              >
                Navigation
              </Link>
            </div>
            <div className={`flex ${showHeader ? "" : "max-[600px]:hidden"}`}>
              <Link
                href="/"
                className="font-para font-semibold text-[20px] leading-5"
              >
                Navigation
              </Link>
            </div>
            <div className={`flex ${showHeader ? "" : "max-[600px]:hidden"}`}>
              <Link
                href="/"
                className="font-para font-semibold text-[20px] leading-5"
              >
                Navigation
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex max-[600px]:hidden">
              <Link
                href="/"
                className="font-para font-semibold text-[16px] leading-[3.5rem] "
              >
                Navigation
              </Link>
            </div>
            <div className="flex max-[600px]:hidden">
              <Link
                href="/"
                className="font-para font-semibold text-[16px] leading-[3.5rem]"
              >
                Navigation
              </Link>
            </div>
            <div className="flex max-[600px]:hidden">
              <Link
                href="/"
                className="font-para font-semibold text-[16px] leading-[3.5rem] "
              >
                Navigation
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
