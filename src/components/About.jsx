import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";
import hashnode from '../assets/img/brand-icon-white.png'


const About = () => {
  return (
    <div id='about' className=' py-[2rem] md:py-[1.82rem] px-[0.85rem] md:px-[2.85rem] lg:px-[3.85rem] pt-[4rem] pb-[4rem] border-b-[1px] border-[#f0f8ffe7]'>
      <h1 className='text-center text-[2.14rem] md:text-[2.44rem] text-[#dde5eb] font-bold capitalize mb-3'>about me</h1>
      <div className='text-[#dde5eb] text-[1.34rem]'>
        <p>My name is Aziken Precious and i am a skilled Frontend Developer. With a passion for web development, i have honed my skills in creating beautiful, intuitive user interfaces using the latest technologies.</p><br />
        <p>With a strong commitment to learning and growth, i am always seeking new opportunities to expand my skills and contribute to meaningful projects. Connect with me to learn more about my work and interests.</p>
      </div>
      <div className="flex items-center justify-center mt-5 gap-x-7 text-[#dde5eb]">
        <a href="https://www.linkedin.com/in/aziken-precious-712043237/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:scale-[105%] w-6 md:w-8 h-6 md:h-8" />
        </a>
        <a href="https://github.com/Azikenp" target="_blank" rel="noreferrer">
          <FaGithub className="hover:scale-[105%] w-6 md:w-8 h-6 md:h-8" />
        </a>
        <a href="mailto:azikenp26@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className="hover:scale-[105%] w-6 md:w-8 h-6 md:h-8" />
        </a>
        <a href="https://hashnode.com/@Azikenp" target="_blank" rel="noreferrer">
          <img src={hashnode} className="hover:scale-[105%] w-6 md:w-8 h-6 md:h-8" alt="hashnode icon" />
        </a>
      </div>
    </div>
  )
}

export default About