import React, { useState } from "react";
import project1 from "../public/project 1.png";
import project2 from "../public/project 2.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Project = () => {

  
  return (
    <div className="maindiv">
      <div className="textdiv">
        <h1 className="maintext">Latest Work </h1>
        <p className="line2">Perfect Solutions For Digital Expirience</p>
      </div>
      <div className="projects">
        <div className="project">
          <h1 className="project-name">Adi's Store </h1>
          <Image src={project1} alt="Picture of the author" />
          <Link
            target="_blank"
            className="button"
            href="https://estore-gamma.vercel.app/"
          >
            visit Site{" "}
          </Link>
        </div>
        <div className="project">
          <h1 className="project-name">Buddget Buddy</h1>
          <Image src={project2} alt="Picture of the author" />
          <Link
            target="_blank"
            className="button"
            href="https://adilfareed.github.io/budget-calculator/"
          >
            visit Site{" "}
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Project;
