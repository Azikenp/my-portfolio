import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="flex items-center py-[2rem] md:py-[1.82rem] px-[0.85rem] md:px-[2.85rem] lg:px-[3.85rem] flex-col  transition duration-700 ease-in-out">
      <div className="flex items-center justify-between w-full">
        <Link
          to="/"
          className="text-[#dde5eb] cursor-pointer text-[1.76rem] md:text-[1.94rem] lg:text-[2.32rem] font-[800] font-poppins"
        >
          <h3>Aziken.dev</h3>
        </Link>

        <button
          onClick={handleClick}
          className="text-[#dde5eb] text-[1.76rem] md:hidden"
        >
          <FaBars />
        </button>

        <div className="hidden md:flex gap-x-[70px] text-[#a1a6aa] uppercase font-bold text-[19px] lg:text-[20px]">
          <Link to="#about" className="hover:text-[#dde5eb]">about</Link>
          <Link to="projects" className="hover:text-[#dde5eb]">projects</Link>
          <Link to="contact" className="hover:text-[#dde5eb]">contact</Link>
        </div>
      </div>

      {/* mobile menu */}
      {toggle ? (
        <div id="nav--links" className="flex flex-col items-center transition duration-700 ease-in-out gap-y-7 text-[#dde5eb] uppercase font-semibold w-full max-w-[470px] p-[1.72rem] mt-4 md:hidden">
          <Link className="text-[#a1a6aa] hover:text-[#dde5eb]" to="#about">about</Link>
          <Link className="text-[#a1a6aa] hover:text-[#dde5eb]" to="projects">projects</Link>
          <Link className="text-[#a1a6aa] hover:text-[#dde5eb]" to="contact">contact</Link>
        </div>
      ) : (
        null
      )}
    </nav>
  );
};

export default Nav;
