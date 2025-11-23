import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="scroll-mt-20 w-full py-10 px-[12%]">
      <h4 className="text-lg text-center font-Ovo">My portfolio</h4>
      <h2 className=" w-full  text-5xl text-center font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-6">
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-no-repeat bg-cover rounded-lg cursor-pointer relative group"
            >
              <div className="bg-white absolute w-10/12 rounded-md py-3 px-5  bottom-5  left-1/2 -translate-x-1/2 duration-500  flex items-center justify-between group-hover:bottom-7 shadow-lg">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-gray-500">{project.description}</p>
                </div>
                <div className="border rounded-full border-black aspect-square w-9 flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image src={assets.send_icon} alt="" className="w-4" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <a
        href=""
        className="flex items-center justify-center gap-2 text-gray-800 rounded-full py-3 px-10 my-20  w-max mx-auto border-[0.5px] hover:bg-lighHover duration-500 "
      >
        Show more <Image src={assets.right_arrow} alt="" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
