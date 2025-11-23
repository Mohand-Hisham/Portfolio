"use client";
import React, { useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar({ isDarkMode, setIsDarkMode }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenu = useRef();

  function openMenu() {
    sideMenu.current.style.transform = "translateX(-16rem)";
  }

  function closeMenu() {
    sideMenu.current.style.transform = "translateX(16rem)";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Image
          src={assets.header_bg_color}
          alt=""
          className="top-0 right-0 fixed right-0 -z-10 w-full translate-y-[-80%] dark:hidden"
        />
      </div>
      <nav
        className={`px-5 lg:px-8 xl:px-[8%] flex justify-between items-center w-full fixed z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        <ul
          className={`hidden md:flex gap-6 lg:gap-8 items-center rounded-full px-12 py-3  shadow-sm bg-opacity-50
            ${
              isScroll
                ? ""
                : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
            }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#About">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#Contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-6"
              alt="moon-icon"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex gap-3 items-center px-10 py-2.5 border border-gray-500 ml-4 rounded-full dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow-icon"
            />
          </a>

          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-6"
              alt="moon-icon"
            />
          </button>
        </div>
        {/* mobile menu */}

        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-4 fixed top-0 bottom-0 -right-64 py-20 px-10 w-64 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </div>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#work">
              My work
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
