import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footers = () => {
  return (
    <div className="mt-20">
      <div className=" ">
        <Image src={assets.logo} alt="" className="mx-auto mb-2 w-36" />
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          mohandhisham4@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex justify-between mx-[10%] py-6  mt-12 text-gray-600 border-t border-gray-400 ">
        <p className="text-sm">© 2025 Mohanad Hisham. All rights reserved.</p>
        <ul className="flex items-center justify-center mt-4 gap-6 sm:mt-0 ">
          <li>
            <a href="" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footers;
