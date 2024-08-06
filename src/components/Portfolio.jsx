import React from "react";
import allStar from "../assets/portfolio/allStar.jpg";
import expenseTracker from "../assets/portfolio/expenseTracker.png";
import schedule from "../assets/portfolio/schedule.jpg";
import data from "../assets/portfolio/data.jpg";

const Portfolio = () => {
  function handleClick(link) {
    if (link !== "none") {
      window.open(link, "_blank");
    }
  }
  const portfolios = [
    {
      id: 1,
      src: allStar,
      title: "All-Star Tutoring Website",
      tools: ["React", "JS", "HTML", "CSS", "EmailJS"],
      demoLink: "https://all-startutoring.netlify.app",
      codeLink:
        "https://github.com/HarmanSandhu179/all-star-tutoring-landing-page",
    },
    {
      id: 2,
      src: expenseTracker,
      title: "Expense Tracker",
      tools: ["React", "MongoDB", "Express", "Node", "TailwindCSS"],
      demoLink: "none",
      codeLink:
        "https://github.com/HarmanSandhu179/PersonalExpenseTracker/tree/main",
    },
    {
      id: 3,
      src: schedule,
      title: "Scheduling App",
      tools: ["Java", "JUnit", "JSON"],
      demoLink: "none",
      codeLink: "https://github.com/HarmanSandhu179/Scheduling-GUI",
    },
    {
      id: 4,
      src: data,
      title: "Data Analysis",
      tools: ["R"],
      demoLink: "none",
      codeLink: "https://github.com/HarmanSandhu179/DSCI-100-Group-Project",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, tools, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
              <p className="font-bold text-gray-500 text-center">{title}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-2/3"
              />
              <div className="grid grid-cols-3 gap-1 m-1">
                {tools.map((tool) => (
                  <p
                    key={tool}
                    className="bg-gray-500 rounded-md text-center overflow-hidden"
                  >
                    {tool}
                  </p>
                ))}
                <button
                  className="row-start-3 pb-2 duration-200 hover:scale-105"
                  onClick={() => handleClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="row-start-3 pb-2 duration-200 hover:scale-105"
                  onClick={() => handleClick(codeLink)}
                >
                  Code
                </button>
              </div>
              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
