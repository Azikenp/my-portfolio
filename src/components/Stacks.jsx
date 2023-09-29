import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaGit,
  FaGithub,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import tailwind from '../assets/tailwindcss.svg'
import materiaUi from '../assets/material-ui2.svg'

const Stacks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[2rem] md:py-[1.82rem] px-[0.85rem] md:px-[2.85rem] lg:px-[3.85rem] border-b-[1px] border-[#f0f8ffe7] pb-24">
      <h3 className="text-[#dde5eb] text-[2.14rem] capitalize font-bold mb-9 text-center">
        My stacks
      </h3>
      <div className="flex justify-center flex-wrap gap-5 md:gap-10 md:grid grid-cols-4 lg:grid-cols-6 md:mb-20">
        <div className="hover:scale-[101%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaHtml5 className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">Html</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaCss3Alt className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">Css</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaJsSquare className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">JavaScript</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaSass className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">Sass</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaGit className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">Git</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaGithub className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">Github</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaBootstrap className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">Bootstrap</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <FaReact className="w-6 h-6" />
          <p className="text-[#dde5eb] mt-1">React</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <img src={materiaUi} width="30" height="30" alt="" />
          <p className="text-[#dde5eb] mt-1">Material Ui</p>
        </div>
        <div className="hover:scale-[105%] stacks flex flex-col p-3 rounded-lg items-center text-[#a1a6aa]">
          <img src={tailwind} width="30" height="30" alt="" />
          <p className="text-[#dde5eb] mt-1">Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
