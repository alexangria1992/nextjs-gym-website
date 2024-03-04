"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setheaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px" : "top-[124px]"} ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } text-white xl:hidden flex flex-col text-center gap-8 fixed bg-primary-200
        w-full left-0 top-[124px] text-base uppercase font-medium transition-all`}
        />
        {/* Desktop Nav - hidden on small devices */}
        <Nav
          containerStyles="flex gap-4 text-white hidden text-base uppercase  font-medium 
        transition-all xl:flex"
        />
        {/* hide/open/menu button */}
        <div className="flex items-center gap-4">
          {/* Log In and Register Button */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              login
            </button>
            <button className="hover:text-accent transition-all  text-base uppercase font-medium">
              register
            </button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
