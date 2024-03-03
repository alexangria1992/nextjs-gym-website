import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className="fixed left-0 border-2 border-yellow-300 right-0 w-full
     bg-white"
    >
      <div className="container mx-auto border-2 border-green-500">
        <Nav containerStyles=" py-12 flex gap-4 " />
      </div>
    </header>
  );
};

export default Header;
