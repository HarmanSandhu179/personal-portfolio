import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ASSETS
import allStar from "../assets/portfolio/allStar.jpg";
import expenseTracker from "../assets/portfolio/expenseTracker.png";
import cpsc from "../assets/portfolio/cpsc310-screenshot.png";
import schedule from "../assets/portfolio/schedule.jpg";
import data from "../assets/portfolio/data.jpg";
import leaser from "../assets/portfolio/leaser.png";
import dns from "../assets/portfolio/dns.png";

// ---- Data -------------------------------------------------------
const PROJECTS = [
  {
    id: 1,
    title: "LeaserFlow (ACQUIRED)",
    description:
      "Full-stack app acquired by a trucking company to streamline truck leasing, with lead tracking and automated lease management. **Source Code Available Upon Request**",
    cover: leaser,
    tech: ["React", "TypeScript", "Hapi.js", "MySQL", "Prisma", "AWS"],
    demo: "https://leaserflow.com",
    code: null,
  },
  {
    id: 2,
    title: "DNS Lookup Service",
    description:
      "Implemented a DNS lookup service over UDP in Java, handling name server selection, retries, and timeouts. Built DNS message construction and parsing for A, AAAA, NS, CNAME, and MX records with CNAME chain resolution and depth limits. Exposed the resolver via a Spring Boot REST API and deployed using Docker and Vercel.",
    cover: dns,
    tech: ["Java", "Spring Boot", "React", "TypeScript", "Docker"],
    demo: "https://lookup.harmansandhu.dev",
    code: null,
  },
  {
    id: 3,
    title: "All-Star Tutoring Website",
    description:
      "Responsive landing page with contact flow and reusable components.",
    cover: allStar,
    tech: ["React", "JS", "HTML", "CSS", "EmailJS"],
    demo: "https://all-startutoring.netlify.app",
    code: "https://github.com/HarmanSandhu179/all-star-tutoring-landing-page",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "Personal finance tracker with CRUD, categories, and analytics.",
    cover: expenseTracker,
    tech: ["React", "MongoDB", "Express", "Node", "Tailwind"],
    demo: null,
    code: "https://github.com/HarmanSandhu179/PersonalExpenseTracker/tree/main",
  },
  {
    id: 5,
    title: "InsightUBC Project",
    description:
      "CPSC 310 project for querying large datasets with a typed API.",
    cover: cpsc,
    tech: ["TypeScript", "React", "Express", "Tailwind"],
    demo: "https://drive.google.com/file/d/1BRPRRmRNWvuDSvtRWzAl5DsmAbcvdWpt/view",
    code: null,
  },
  {
    id: 6,
    title: "Scheduling App",
    description: "Desktop scheduler with persistence and unit tests.",
    cover: schedule,
    tech: ["Java", "JUnit", "JSON"],
    demo: null,
    code: "https://github.com/HarmanSandhu179/Scheduling-GUI",
  },
  {
    id: 7,
    title: "Data Analysis",
    description: "Exploratory data analysis and reporting.",
    cover: data,
    tech: ["R"],
    demo: null,
    code: "https://github.com/HarmanSandhu179/DSCI-100-Group-Project",
  },
];

// ---- Helpers ----------------------------------------------------
const open = (url) => url && window.open(url, "_blank", "noopener,noreferrer");

// ---- Components -------------------------------------------------
const TechTag = ({ label }) => (
  <span className="px-2.5 py-1 text-[11px] rounded-full border border-white/10 bg-white/5 text-gray-300">
    {label}
  </span>
);

const LinkBtn = ({ label, Icon, onClick, disabled }) => (
  <button
    onClick={disabled ? undefined : onClick}
    className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition
      ${
        disabled
          ? "cursor-not-allowed text-gray-500 border border-white/10 bg-white/5"
          : "text-sky-300 border border-sky-400/30 hover:border-sky-400/60 hover:bg-sky-400/10"
      }`}
    aria-disabled={disabled}
  >
    <Icon
      className={`${
        disabled ? "opacity-50" : "group-hover:translate-x-0.5"
      } transition`}
    />
    {label}
  </button>
);

const ProjectCard = ({ p }) => (
  <div
    className="group relative overflow-hidden rounded-2xl border border-white/10
               bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-sm
               hover:border-sky-400/40 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_10px_30px_-10px_rgba(0,0,0,0.6)]
               transition-all duration-300"
  >
    {/* Cover */}
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <img
        src={p.cover}
        alt={p.title}
        className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent opacity-70" />
    </div>

    {/* Body */}
    <div className="p-5">
      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-2 text-sm text-gray-400 line-clamp-4">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <LinkBtn
          label="Demo"
          Icon={FaExternalLinkAlt}
          onClick={() => open(p.demo)}
          disabled={!p.demo}
        />
        <LinkBtn
          label="Code"
          Icon={FaGithub}
          onClick={() => open(p.code)}
          disabled={!p.code}
        />
      </div>
    </div>

    {/* Accent border on hover */}
    <span className="pointer-events-none absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </div>
);

// ---- Section ----------------------------------------------------
const Portfolio = () => {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold">
          Projects
          <span className="mt-2 block h-[3px] w-16 bg-sky-400 rounded"></span>
        </h2>

        <p className="mt-4 max-w-3xl text-gray-400">
          A selection of things I’ve built and shipped. Click a card for the
          demo or source.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
