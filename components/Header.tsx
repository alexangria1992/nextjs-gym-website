"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [headerActive, setheaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setheaderActive(window.scrollY > 50);
    };
    //add scroll event
    window.addEventListener("scroll", handleScroll);
    //clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed top-0   bg-primary-200  w-full h-[100px] transition-all z-50 max-w-[1920px]`}
    >
      <div className="container  mx-auto h-full flex items-center justify-between ">
        {/* Logo */}
        <Link href="">
          <Image src={"/assets/img/logo.png"} width={117} height={55} alt="" />
        </Link>
        {/* Mobile Nav -- hidden on large devices */}
        <MobileNav containerStyles="text-white xl:hidden" />
        {/* Desktop Nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
