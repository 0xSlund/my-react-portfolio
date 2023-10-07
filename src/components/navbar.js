import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#F0F5F9] text-gray-900">
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          {" "}
          <Link to="home" smooth={true} offset={25} duration={400}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={5} duration={400}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={25} duration={400}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={50} duration={400}>
            Contact
          </Link>
        </li>
        <li>
          <a href="https://fujn.global/">Visit Fujn</a>
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
            : "absolute top-0 left-0 w-full h-screen bg-[#F0F5F9] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            offset={50}
            duration={400}
          >
            Home
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={50}
            duration={400}
          >
            About
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link
            onClick={handleClick}
            to="catalog"
            smooth={true}
            offset={50}
            duration={400}
          >
            Catalog
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={50}
            duration={400}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00B2FF]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://www.facebook.com/wearefujn"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C13584]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://instagram.com/wearefujn"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://www.linkedin.com/company/fujn"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="https://www.youtube.com/channel/UCuzsuaWENbCtp2-xKctjozA"
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
