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
          I'm an aspiring Software Engineer passionate about using technology to
          help solve problems and create awesome projects! I'm currently working
          on learning Full-Stack Development and looking for an internship.
        </p>
        <br />
        <p className="text-xl">
          Besides technology and school, I have a variety of interests that keep
          me active and balanced. I love playing basketball, which helps me stay
          fit and sharpens my teamwork skills. Hiking is another passion of
          mine; it allows me to explore nature and find inspiration away from
          the screen. These activities, along with spending quality time with
          friends and family, contribute to my well-rounded lifestyle and help
          me stay motivated and refreshed.
        </p>
      </div>
    </div>
  );
}

export default About;
