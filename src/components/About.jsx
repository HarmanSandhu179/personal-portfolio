import React from "react";

function About() {
  return (
    <section
      id="about"
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="min-h-screen pt-20 pb-16 flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold">
            About
            <span className="mt-2 block h-[3px] w-16 bg-sky-400 rounded"></span>
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              I’m a passionate Software Engineer focused on building efficient,
              real-world solutions that blend technical precision with practical
              impact. Most recently, I interned at Ontraccr Technologies, where
              I implemented real-time collaboration systems, PDF generation
              pipelines, and automated equipment-hour tracking—contributing to a
              smoother experience for teams working in high-traffic
              environments.
            </p>

            <p>
              Before that, I worked at Goodself, rebuilding responsive marketing
              sites and leading QA from development through production. I also
              built and sold a full-stack application, LeaserFlow—an experience
              that strengthened my full-stack skills and taught me how to ship
              software that truly solves business problems.
            </p>

            <p>
              Outside of tech, I value staying active and balanced. Basketball
              keeps me sharp on teamwork and focus, while hiking helps me
              recharge and think creatively. I bring that same growth mindset to
              software— constantly learning, iterating, and improving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
