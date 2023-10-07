import React, { useState } from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import Logo from "../assets/logo.png";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full min-h-screen-50 bg-[#ffffff]">
      {/*container*/}
      <div className="flex justify-center items-center py-8 ">
        <img
          class="object-cover"
          src={Logo}
          alt="Logo Image"
          style={{ width: "500px" }}
        />
      </div>
    </div>
  );
};

export default Home;
