import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div id="About" className="scroll-mt-20 w-full py-10 px-[12%]">
        <h4 className="text-lg text-center font-Ovo">Introduction</h4>
        <h2 className=" w-full text-5xl text-center font-Ovo">About</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="w-64 sm:w-80 max-w-none  rounded-3xl">
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full  rounded-3xl "
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 font-Ovo max-w-2xl">
              A passionate and highly motivated Frontend Developer specializing
              in React.js and modern JavaScript. With a strong foundation in
              HTML5, CSS3, and responsive design, I thrive on turning ideas into
              pixel-perfect, user-friendly applications. I may be new to the
              professional field, but my personal projects demonstrate a
              commitment to clean code, state management (Redux/Context API),
              and continuous learning. Eager to contribute my skills and grow
              with a dynamic team.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighHover hover:-translate-y-1 duration-500 hover:shadow-black"
                  key={index}
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="my-6 text-gray-700 font-Ovo">Tools i use</h4>
              <ul className="flex gap-2 items-center">
                {toolsData.map((tool, index) => (
                  <li
                    key={index}
                    className=" flex items-center justify-center border border-gray-400 rounded-lg w-12 sm:w-14 aspect-square hover:-translate-y-1 duration-500"
                  >
                    <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
