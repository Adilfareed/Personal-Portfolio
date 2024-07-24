import React from "react";
import project1 from "../public/project 1.png";
import project2 from "../public/project 2.png";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="maindiv">
      <div className="textdiv">
        <h1 className="maintext">Latest Work </h1>
        <p className="line2" >Perfect Solutions For Digital Expirience</p>
      </div>
      <div className="projects">
      <div className="project">
        <h1 className="project-name">Adi's Store </h1>
        <Image src={project1} alt="Picture of the author" />
        <button className="button">Visit Site</button>
      </div>
      <div className="project">
      <h1 className="project-name">Buddget Buddy</h1>
        <Image src={project2} alt="Picture of the author" />
        <button className="button">Visit Site</button>
      </div>
      </div>
      <h1 className="view"> All Projects</h1>
      
    </div>
  );
};

export default Projects;
