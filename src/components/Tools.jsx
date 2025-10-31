import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import cplus from "../assets/cplus.png";
import ts from "../assets/typescript.png";
import aws from "../assets/aws.png";
import mysql from "../assets/mysql.svg";

const techs = [
  { id: 1, src: html, title: "HTML" },
  { id: 2, src: css, title: "CSS" },
  { id: 3, src: javascript, title: "JavaScript" },
  { id: 4, src: ts, title: "TypeScript" },
  { id: 5, src: reactImage, title: "React" },
  { id: 6, src: tailwind, title: "Tailwind" },
  { id: 7, src: node, title: "Node" },
  { id: 8, src: cplus, title: "C++" },
  { id: 9, src: github, title: "GitHub" },
  { id: 10, src: aws, title: "AWS" },
  { id: 11, src: mysql, title: "MySQL" },
];

const ToolCard = ({ src, title }) => (
  <div
    className="group relative overflow-hidden rounded-2xl border border-white/10
               bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-sm
               hover:border-sky-400/40 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_10px_30px_-10px_rgba(0,0,0,0.6)]
               transition-all duration-300 p-5 flex flex-col items-center"
  >
    {/* Fixed-size wrapper to keep all icons centered */}
    <div className="h-20 w-20 flex items-center justify-center">
      <img
        src={src}
        alt={title}
        className="max-h-full max-w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
        loading="lazy"
        decoding="async"
      />
    </div>

    <p className="mt-3 text-sm sm:text-base text-gray-200">{title}</p>

    <span
      className="pointer-events-none absolute inset-x-0 -bottom-px h-px w-full
                      bg-gradient-to-r from-transparent via-sky-400/60 to-transparent
                      opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </div>
);

const Tools = () => {
  return (
    <section
      id="tools"
      name="tools"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="min-h-screen pt-20 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold">
            Tools
            <span className="mt-2 block h-[3px] w-16 bg-sky-400 rounded"></span>
          </h2>

          <p className="mt-4 max-w-3xl text-gray-400">
            Technologies I work with across frontend, backend, and tooling.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techs.map((t) => (
              <ToolCard key={t.id} src={t.src} title={t.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
