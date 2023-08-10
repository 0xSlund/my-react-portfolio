import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variation";
import CircleImg from "../assets/circle.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen bg-[#F0F5F9]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {" "}
        
        <p className="text-yellow-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#283C63]">
          Sean Lund
        </h1>
        <div>
          <span className="text-2xl sm:text-5xl font-bold text-[#353535]">
            I am{" "}
          </span>
          <TypeAnimation
            className="text-2xl sm:text-5xl font-bold text-[#353535]"
            sequence={[
              "a Student.",
              2000,
              "an Intern.",
              2000,
              "a Researcher.",
              2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </div>
        <p className="text-[#353535] py-4 max-w-[400px]">
          I am a student at Brandeis University that is interning at a startup
          called Fujn. I enjoy challenging myself and working in a collaborative
          environment to boost my ability to self-pace my learning journey. I am
          currently focusing on improving my web development skills and
          branching out to the wonderful world of Python.
        </p>
        <div>
          <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              offset={50}
              duration={400}
            >
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
