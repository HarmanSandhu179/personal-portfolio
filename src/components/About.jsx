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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id officiis
          eaque, soluta rerum commodi iusto aliquam impedit itaque voluptates
          veritatis saepe laboriosam maiores animi dignissimos dolorum sint
          blanditiis quod possimus!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          quibusdam debitis sequi nesciunt totam dolorum, iusto iure culpa
          beatae quos obcaecati ab vel rerum fugiat qui, vitae accusamus harum
          cupiditate nemo voluptatum dignissimos? Voluptate ducimus, vero
          mollitia error ab ad aliquam! Rem nulla libero quod eius saepe, totam
          quidem aliquid.
        </p>
      </div>
    </div>
  );
}

export default About;
