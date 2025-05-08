import { motion, Variants } from "framer-motion";
import "./Skills.css";

export function Skills() {
  class SkillsSection {
    title: string;
    desc: string;
    skillList: string[];

    constructor(title: string, desc: string, skillList: string[]) {
      this.title = title;
      this.desc = desc;
      this.skillList = skillList;
    }

    openLink = (openLink: string) => {
      window.open(openLink);
    };

    display() {
      return (
        <motion.div
          className="skills-section"
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          initial="offscreen"
          whileInView="onscreen"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="skills-subtitle">{this.title}</div>
          <div className="skills-list">
            {this.skillList.map((skill) => (
              <div key={skill} className="skills-list-item">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      );
    }
  }

  let sectionOne = new SkillsSection("Frontend", "Test", [
    "HTML-CSS",
    "JavaScript/TS",
    "React",
    "Next.js",
    "Framer Motion",

    "Tailwind",
   
  ]);
  let sectionTwo = new SkillsSection("Backend", "Test", [
    "Node.js",


    "Express.js",
    "MongoDB",

    "SQL",
    "Docker",
  ]);
  let sectionThree = new SkillsSection("Mobile", "Test", [
    "React Native",
    "Expo",
  ]);
  let sectionFour = new SkillsSection("Other", "Test", [
    "GitHub",
    "Firebase",
    "AWS Services",
  
    "Figma",
  
    "Vercel",
   
  ]);

  return (
    <div id="skills" className="skills-page flex">
      <div className="skills-page-container screen-max">
        <div className="skills-title">
          Skills<span> .</span>
        </div>
        <div className="skills-container">
          {sectionOne.display()}
          {sectionTwo.display()}
          {sectionThree.display()}
          {sectionFour.display()}
        </div>
      </div>
    </div>
  );
}

const itemVariants: Variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
    },
  },
};