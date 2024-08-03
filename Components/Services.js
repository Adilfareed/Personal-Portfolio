import React from "react";
import Web from "../public/web.png";
import cms from "../public/cms.png";
import seo from "../public/SEO.png";
import Image from "next/image";
const Services = () => {
  return (
    <div className="services-main">
      <div className="skills ">
        <div className="skill ">
          <h1 className="heading">Front-End</h1>
          <p className="desc">
          As a developer, I absolutely love the world of front-end ,

          <br/> development, creating beautiful interfaces <br/>and enhancing user experiences!
          </p>
        </div>
        <div className="skill ">
        <h1 className="heading">Back-End</h1>
          <p className="desc">
          Back-end developers are the foundation of <br/>every application, with their knowledge powering <br/>the unseen magic that keeps everything running smoothly. Outstanding abilities!
          </p>
        </div>
        <div className="skill">
          <h1 className="heading">CMS & SEO</h1>
          <p className="desc">
          "Outstanding abilities in CMS development, such as Shopify and WordPress, and SEO are the foundation<br/> of every application, with their knowledge powering the unseen magic that keeps everything running smoothly."
          </p>
        </div>
      </div>
      <div className="about">
        <h1>Hello i'm <br/> Adil Fareed</h1>
        <p>"I graduated from FUUAST in 2024 <br/> I have a strong interest in coding and enjoy the challenge of tackling complex issues.<br/> I live in Houston, Texas, where I am inspired by the thriving tech scene and am enthusiastic about the career options it has to offer.<br/> I'm excited to advance my knowledge and expertise in web development, and I look forward to making a contribution to the rapidly changing world of technology."</p>
      </div>
    </div>
  );
};

export default Services;
