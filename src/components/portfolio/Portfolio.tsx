import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "./Portfolio.css";
import PortfolioItem, { PortfolioItemProps } from "./PortfolioItem";

export const data: PortfolioItemProps[] = [
  {
    id: 0,
    title: "Fresh &cooled ",
    description: "Chiller Van rental Service ",
    imageUrl: "freshandcooled.png",
    link: "https://fresh-cool.vercel.app/",
    github: "https://github.com/Adilfareed/Fresh-Cool-",
    stack: ["Next.js", ],
    filters: ["all"],
  },
  {
    id: 1,
    title: "E-store",
    description:
      "E-commerce website ",
    imageUrl: "Estore.png",
    link: "https://estore-gamma.vercel.app/",
    github: "https://github.com/Adilfareed/Estore",
    stack: [
      "React.js",
    
    ],
    filters: ["all", "web", "mobile"],
  },
  {
    id: 2,
    title: "Budget Buddy",
    description:
      "A simple, user-friendly tool for tracking expenses and managing finances.",
    imageUrl: "budget.png",
    link: "https://adilfareed.github.io/budget-calculator/",
    github: "https://github.com/Adilfareed/budget-calculator",
    stack: ["Html", "javascript", "CSS", ],
    filters: ["all", "web", ],
  },
  // {
  //   id: 3,
  //   title: "Stugether",
  //   description:
  //     "Web application built with Django to connect students together",
  //   imageUrl: "stugether_app.png",
  //   link: "https://stugether.herokuapp.com/",
  //   github: "https://github.com/gowth6m/stugether",
  //   stack: ["Django", "Python", "SQL"],
  //   filters: ["all", "web"],
  // },
  // {
  //   id: 4,
  //   title: "Zombie Maze",
  //   description:
  //     "A simple 2D top-down zombie shooting game created in Python using the PyGame library",
  //   imageUrl: "zombie_maze.gif",
  //   link: "",
  //   github: "https://github.com/gowth6m/zombie-maze",
  //   stack: ["Python", "PyGame", "2D Game"],
  //   filters: ["all", "game"],
  // },
  // {
  //   id: 5,
  //   title: "Gravity Simulator",
  //   description:
  //     "Simulation of gravity between particles written in JavaScript",
  //   imageUrl: "gravitySim_app.png",
  //   link: "https://gowth6m.github.io/gravity-simulator/",
  //   github: "https://github.com/gowth6m/gravity-simulator",
  //   stack: ["Javascript", "HTML", "CSS"],
  //   filters: ["all", "web"],
  // },
  // {
  //   id: 6,
  //   title: "Lift Simulator",
  //   description: "A simulation of a lift system implemented in Java with GUI",
  //   imageUrl: "liftSim.gif",
  //   link: "",
  //   github: "https://github.com/gowth6m/lift-system",
  //   stack: ["Java", "GUI"],
  //   filters: ["all", "other", "data", "desktop"],
  // },
  // {
  //   id: 7,
  //   title: "Human-Object Interaction Research",
  //   description: "Research on HOI. Evaluation on five HOI models",
  //   imageUrl: "hoi.png",
  //   link: "https://drive.google.com/file/d/1Al9_xuqENbQTCBpftxPDgjBnDaKR9nei/view?usp=sharing",
  //   github: "https://github.com/gowth6m/human-object-interaction",
  //   stack: ["Machine Learning", "CNN", "R-CNN", "Jupyter"],
  //   filters: ["all", "data", "other"],
  // },
  // {
  //   id: 8,
  //   title: "Game of Life in Haskell",
  //   description:
  //     "Implementation of Conway's Game of Life in Haskell using an imperative approach",
  //   imageUrl: "gol.gif",
  //   link: "",
  //   github: "https://github.com/gowth6m/game-of-life-haskell",
  //   stack: ["Haskell", "GUI"],
  //   filters: ["all", "other"],
  // },
];

interface PortfolioProps {
  standalone: boolean;
}

export function Portfolio({ standalone }: PortfolioProps) {
  // let items: PortfolioItem[] = [];
  // let items: PortfolioItemProps[];
  let filters: string[] = [
    "all",
    "web",
    "mobile",
    "desktop",
    "game",
    "data",
    "other",
  ];
  const [currentFilter, setCurrentFilter] = useState("all");

  // for (let i = 0; i < data.length; i++) {
  //   items.push({
  //     id: data[i].id,
  //     title: data[i].title,
  //     description: data[i].description,
  //     imageUrl: data[i].imageUrl,
  //     link: data[i].link,
  //     github: data[i].github,
  //     stack: data[i].stack,
  //     filters: data[i].filters,
  //   });
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="portfolio-page flex"
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="portfolio-page-container screen-max">
        {standalone ? (
          <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </>
        ) : null}
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        {/* Filters */}
        {/* <div className="filters-container flex">
          {filters.map((filter, index) => (
            <FilterItem
              key={index}
              title={filter}
              initialClicked={filter === "all" ? true : false}
              setCurrentFilter={setCurrentFilter}
              currentFilter={currentFilter}
            />
          ))}
        </div> */}

        {/* Filtered Items */}
        <div className="portfolio-items-container">
          {
            data.map((item) => {
              if (item.filters.includes(currentFilter)) {
                return (
                  <PortfolioItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    link={item.link}
                    github={item.github}
                    stack={item.stack}
                    filters={item.filters}
                  />
                );
              } else {
                return null;
              }
            })
            // .filter((item: PortfolioItemProps) => item.filters?.includes(currentFilter))
            // .map((item: PortfolioItemProps) => {
            //   return (
            //     <PortfolioItem
            //       key={item.id}
            //       id={item.id}
            //       title={item.title}
            //       description={item.description}
            //       imageUrl={item.imageUrl}
            //       link={item.link}
            //       github={item.github}
            //       stack={item.stack}
            //       filters={item.filters}
            //     />
            //   );
            // })
          }
        </div>
      </div>
    </motion.div>
  );
}
