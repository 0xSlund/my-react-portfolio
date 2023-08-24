import React from "react";

import JavaScript from "../assets/javascript-original.svg";
import CSS from "../assets/css3-original.svg";
import Github from "../assets/github-original.svg";
import HTML from "../assets/html5-original.svg";
import Node from "../assets/nodejs-original-wordmark.svg";
import Python from "../assets/python-original.svg";
import ReactImg from "../assets/react-original.svg";
import TailWindCSS from "../assets/tailwindcss.svg";

const skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#F0F5F9] text-black">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[100%]">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 ">
            Skills
          </p>
          <p className="py-4">
            These are technologies that I have worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
        <div>
      <div className="max-w-[1000px] mx-auto py-8 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 ">
          Currently Studying
          </p>
          <p className="py-4">
            These are some languages that I am familiarizing myself with to build great apps.
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={Node} alt="NodeJS icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={TailWindCSS}
              alt="TailWind CSS icon"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
        </div>
      </div>
      </div>
        </div>
      </div>    

  );
};

export default skills;
