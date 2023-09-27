import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const handlClick = () => {
        setToggle(prev => !prev)
    }

  return (
    <nav className="flex items-center flex-col py-[2rem] px-[0.85rem]">
      <div className="flex items-center justify-between w-full">
        <Link
          to="/"
          className="text-[#dde5eb] cursor-pointer text-[1.76rem] font-[800] font-poppins"
        >
          <h3>Aziken.dev</h3>
        </Link>

        <button onClick={handlClick} className="text-[#dde5eb] text-[1.76rem] md:hidden">
          <FaBars />
        </button>

        <div className="hidden md:flex gap-x-11 text-[#dde5eb]">
          <Link to="#about">about</Link>
          <Link to="projects">projects</Link>
          <Link to="contact">contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
