import React from "react";

import Logo from "./Logo";
import Button from "./Button";

import { FaChevronDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full h-16 md:h-20 lg:h-20 bg-[#0B0D17] text-[#FFFFFF] flex justify-between items-center p-5">
      <Logo />

      <div
        id="tabs"
        className="invisible md:invisible lg:visible lg:flex lg:gap-6 lg:items-center lg:cursor-pointer"
      >
        <div className="flex flex-row items-center gap-3 lg:flex lg:flex-row md:flex-row-reverse ">
          <span className="invisible md:invisible lg:visible">
            Browsing events in
          </span>{" "}
          <FaChevronDown className="mx-1 inline text-[#FE3838]" />{" "}
          <span className="text-[#FE3838] underline">Bhubaneshwar</span>
        </div>
        <div>Contact Us</div>
        <div>FAQs</div>
      </div>

      <div
        id="login"
        className="lg:flex gap-3 lg:visible md:invisible invisible"
      >
        <Button text={"List Your Events"} />
        <Button text={"Login"} className="opacity-5" />
      </div>

      <div
        id="hamburger"
        className="lg:invisible lg:hidden visible flex items-center justify-center cursor-pointer"
      >
        <FiMenu size={"24px"} />
      </div>
    </div>
  );
};

export default Navbar;
