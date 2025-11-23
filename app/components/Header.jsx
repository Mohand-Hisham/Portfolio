"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
// import React from "react";

const Header = () => {
  return (
    <div className="w-11/12  mx-auto flex flex-col max-w-3xl h-screen items-center justify-center gap-4 text-center">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi I'm Mohand Hisham{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Front end web developer based in egypt.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I'm a front end web developer from cairo,Egypt.
      </p>

      <div className="flex flex-column sm:flex-row items-center gap-4 mt-4">
        <a
          href="#Contact"
          className="w-full sm:w-auto px-10 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/Mohand-Hisham.pdf"
          download
          className="w-full sm:w-auto px-10 py-3  border rounded-full border-gray-500 flex items-center gap-2 "
        >
          My resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
