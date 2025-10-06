import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I’m a passionate Software Engineer focused on building efficient,
          real-world solutions that blend technical precision with practical
          impact. Most recently, I interned at Ontraccr Technologies, where I
          implemented real-time collaboration systems, PDF generation pipelines,
          and automated equipment-hour tracking—contributing to a smoother
          experience for teams working in high-traffic environments.
        </p>
        <br />
        <p className="text-xl">
          Before that, I worked at Goodself, rebuilding responsive marketing
          sites and leading QA from development through production. I also built
          and sold a full-stack application, LeaserFlow, to a trucking company
          an experience that strengthened my full-stack skills and taught me how
          to build software that truly solves business problems.
        </p>
        <br />
        <p className="text-xl">
          Outside of tech, I value staying active and balanced. Playing
          basketball keeps me fit and sharpens my teamwork and focus, while
          hiking and spending time outdoors help me recharge and think
          creatively. I enjoy taking the same growth mindset I use in sports and
          applying it to software—constantly learning, iterating, and improving.
        </p>
      </div>
    </div>
  );
}

export default About;
