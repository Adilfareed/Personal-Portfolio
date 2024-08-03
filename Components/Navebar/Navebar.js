import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Navebar = () => {
  return (
    <div className="navebar-main">
      <div className="name1"> Adil fareed</div>
      <div className="navebar">
        <ul className="navebar-ul">
          <Link href="/">
            <li> Home </li>
          </Link>
          <Link href="/about">About </Link>
          <Link href="/contact">
            <li>Contact</li>{" "}
          </Link>
        </ul>
      </div>
      <div className="link">
        <Link href="https://github.com/Adilfareed">
          <FaGithub />
        </Link>

        <Link href="https://www.linkedin.com/in/adil-fareed/">
          <FaLinkedin />
        </Link>
     <Link href=""> <MdOutlineEmail /></Link>  
      </div>
    </div>
  );
};

export default Navebar;
