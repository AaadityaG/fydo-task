import React from "react";
import Lg from "../assets/Logo.png";

const Logo = () => {
  return (
    <div
      id="logo"
      className="flex items-center w-[full] h-[15px] cursor-pointer text-[#fff]"
    >
      <h1 className="font-fydo font-extrabold text-2xl lg:text-3xl">
        Greet<span className="text-[#FE3838]">.</span>
      </h1>
      <span className="mx-1 mr-1 text-sm ">|</span>
      <img className="w-[58px] lg:w-[95px]" src={Lg} alt="logo" />
    </div>
  );
};

export default Logo;
