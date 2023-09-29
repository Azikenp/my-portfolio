import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" py-[2rem] md:py-[1.82rem] px-[0.85rem] md:px-[2.85rem] lg:px-[3.85rem] pt-[3rem] pb-[3rem] text-center">
      <h3 className="text-[#dde5eb] text-[2.14rem] capitalize font-bold mb-3 text-center">contact me</h3>
      <div className="text-[#dde5eb] text-[1.34rem] text-center">
        <p>
          You can contact me through any of the following <span className="text-[#892be2d8]">links:</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
