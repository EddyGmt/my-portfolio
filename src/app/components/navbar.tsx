"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 flex w-full items center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 "
      >
        Eddy G
      </a>

      <ul className="hidden md:flex gap-10">
        <Link
          href="#about"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          About Me
        </Link>
        <Link
          href="#stack"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Stacks
        </Link>
        <Link
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Contact
        </Link>
      </ul>
      <ul className="hidden md:flex gap-5">
        <Link
          href="https://github.com/EddyGmt"
          className="pt-1"
          target="_blank"
        >
          <FaGithub size={20} className="transition-all duration-300 hover:text-gray-500"/>
        </Link>
        <Link
          href="https://www.linkedin.com/in/eddy-gomet/"
          className="pt-1"
          target="_blank"
        >
          <FaLinkedin size={20} className="transition-all duration-300 hover:text-blue-500" />
        </Link>
        <Link
          href="https://open.spotify.com/show/3rYk7Z09X2imbNKLzxJBnS?si=817330cc962341da"
          className="pt-1"
          target="_blank"
        >
          <FaSpotify size={20} className="transition-all duration-300 hover:text-green-500"/>
        </Link>
      </ul>
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={toggleMenu} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={toggleMenu} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black bg-opacity-90 p-8 ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-8">
            <Link
              href="#about"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              About Me
            </Link>
            <Link
              href="#stack"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Stacks
            </Link>
            <Link
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Contact
            </Link>
          </ul>
          <ul className="flex flex-wrap gap-8 text-center">
            <Link
              href="https://github.com/EddyGmt"
              className="pt-1"
              target="_blank"
            >
              <FaGithub size={20} className="transition-all duration-300 hover:text-blue-500"/>
            </Link>
            <Link
              href="https://www.linkedin.com/in/eddy-gomet/"
              className="pt-1"
              target="_blank"
            >
              <FaLinkedin size={20} className="transition-all duration-300 hover:text-blue-500"/>
            </Link>
            <Link
              href="https://open.spotify.com/show/3rYk7Z09X2imbNKLzxJBnS?si=817330cc962341da"
              className="pt-1"
              target="_blank"
            >
              <FaSpotify size={20} className="transition-all duration-300 hover:text-green-500"/>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
