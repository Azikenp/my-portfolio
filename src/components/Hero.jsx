import React from "react";
import avatar from "../assets/avatar.gif"

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between  py-[2rem] md:py-[1.82rem] px-[0.85rem] md:px-[2.85rem] lg:px-[3.85rem] mt-10 min-h-[83vh] md:min-h-[82.55vh] border-b-[1px] border-[#f0f8ffe7]">
      <div className="pr-6">
          <h1 className="text-[#a1a6aa] text-[5rem] font-extrabold leading-tight">Front-end Developer</h1>
        <p className="text-[#dde5eb] font-semibold mt-12 text-[2.75rem] leading-[68px] md:leading-normal">
          Creating <br /> <span className="text-[#892be2d8]">Amazing </span>User Experiences
        </p>
      </div>
      <div className="hidden md:block">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
  );
};


export default Hero;
