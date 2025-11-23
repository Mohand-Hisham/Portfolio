import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="scroll-mt-20 w-full py-10 px-[12%]">
      <h4 className="text-lg text-center font-Ovo">What i offers</h4>
      <h2 className=" w-full text-5xl text-center font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Frontend Developer passionate about building beautiful, responsive
        websites. Committed to clean code and modern web standards.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 px-8 py-12 rounded-xl hover:shadow-black hover:bg-lighHover duration-500 dark:hover:bg-darkHover/50 dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-12" />
            <h3 className="font-semibold my-3 text-2xl">{title}</h3>
            <p className="text-gray-500 text-lg my-4 dark:text-white/80 ">
              {description}
            </p>
            {/* <a
              href={link}
              className="text-gray-500 flex gap-2 items-center text-sm mt-5"
            >
              Read more
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
