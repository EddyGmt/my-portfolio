import Link from "next/link";
import Section from "./section";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 p-2 fixed flex items-baseline justify-around bg-blue-500 rounded-lg">
      <h1 className="text-lg font-bold text-primary">Eddy G</h1>
      <ul className="rounded-lg border-white">
        <Link className="px-4" href="#about">
          About Me
        </Link>
        <Link className="px-4" href="#stack">
          Stacks
        </Link>
        <Link className="px-4" href="#projects">
          Projects
        </Link>
        <Link className="px-4" href="#contact">
          Contact
        </Link>
      </ul>
      <ul>
        <Link className="" href="https://github.com/EddyGmt" target="blank">
          <FaGithub />
        </Link>
      </ul>
    </header>
  );
};
export default Navbar;
