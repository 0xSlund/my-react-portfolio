import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/SL-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#9ADCFF] text-gray-900">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          {" "}
          <Link to="home" smooth={true} offset={50} duration={400}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={50} duration={400}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={50} duration={400}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={50} duration={400}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="blog" smooth={true} offset={50} duration={400}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={50} duration={400}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#9ADCFF] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={400}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={400}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={400}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={400}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="blog" smooth={true} offset={50} duration={400}>
            Blog
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={400}>
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-400">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://www.linkedin.com/in/seanlund/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://github.com/Slund0"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#35D0BA]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="/"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF9234]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://drive.google.com/file/d/1zWvHEDLQ1qXWliXxKl0QbFHN9DRLPLFC/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
