import React from "react";
import HeroImage from "../assets/me.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import TypingAnimation from "./TypingAnimation";

const Home = () => {
  function handleClick() {
    window.open(
      "https://drive.google.com/file/d/1gTdM1ZPexwK9pf_ae6SKqIwBKw-xwzFl/view?usp=share_link",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="h-screen flex items-center justify-center px-6">
        <div className="max-w-screen-lg w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          {/* --- Left Side --- */}
          <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              Harman <br className="hidden sm:block" /> Sandhu
            </h1>

            {/* ✅ Reserve space for typing text so layout doesn't shift */}
            <div className="text-gray-400 mt-4 max-w-md mx-auto md:mx-0 text-base sm:text-lg min-h-[4.5rem] sm:min-h-[3.5rem]">
              <TypingAnimation
                text="Hi! I'm currently in my 4th year at the University of British Columbia majoring in Computer Science."
                speed={100}
              />
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                onClick={handleClick}
                className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          {/* --- Right Side (Fixed Image) --- */}
          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src={HeroImage}
              alt="Portrait of Harman Sandhu"
              className="rounded-2xl w-56 sm:w-72 md:w-96 object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
