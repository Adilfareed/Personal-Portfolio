import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <h1 className="footer-main">
        let's make something amazing together. start by 
        saying hi
      </h1>
      <div className="link2">
        <Link href="https://github.com/Adilfareed">
          <FaGithub />
        </Link>

        <Link href="https://www.linkedin.com/in/adil-fareed/">
          <FaLinkedin />
        </Link>
     <Link href="/contact"> <MdOutlineEmail /></Link>  
      </div>
      <p className="last">Adil Fareed   ® 2023. All Rights Reserved</p>
     
    </div>
  );
};

export default Footer;
