import React from "react";

const TAG = ({ children }) => (
  <span className="px-2.5 py-1 text-[11px] rounded-full border border-white/10 bg-white/5 text-gray-300">
    {children}
  </span>
);

const Item = ({ role, company, location, dates, bullets = [], tags = [] }) => (
  <div
    className="group relative overflow-hidden rounded-2xl border border-white/10
               bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-sm
               hover:border-sky-400/40 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_10px_30px_-10px_rgba(0,0,0,0.6)]
               transition-all duration-300 p-5"
  >
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-lg font-semibold tracking-tight">
        {role} · <span className="text-sky-300">{company}</span>
      </h3>
      <p className="text-sm text-gray-400">
        {location} • {dates}
      </p>
    </div>

    <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>

    {tags.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <TAG key={t}>{t}</TAG>
        ))}
      </div>
    )}

    <span className="pointer-events-none absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </div>
);

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Ontraccr Technologies",
    location: "Vancouver, BC",
    dates: "Jan 2025 – Apr 2025",
    bullets: [
      "Implemented real-time collaboration safeguards (WebSockets) to prevent conflicting edits on high-traffic boards.",
      "Built Draft & Published Shifts scheduling across web/mobile/backend, expanding into staffing use cases.",
      "Extended form-to-PDF generation with image appending (pdf-lib) for richer site reports.",
      "Added validation across 20+ workflow steps to eliminate incomplete saves and reduce support tickets.",
      "Developed equipment-hour thresholds with automated notifications to prevent overuse and reduce downtime.",
    ],
    tags: ["React", "React Native", "Node", "socket.io", "pdf-lib"],
  },
  {
    role: "Software Developer Intern",
    company: "Goodself",
    location: "Vancouver, BC",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "Rebuilt marketing sites in React + Tailwind with reusable components that matched Figma and improved performance.",
      "Developed a clinic inquiry form with validation and backend integration for secure submissions.",
      "Integrated Mixpanel events to monitor engagement and inform product & marketing decisions.",
      "Led QA from dev → staging → prod: coordinated 7+ testers, wrote test plans, ran cycles, and verified fixes.",
    ],
    tags: ["React", "Tailwind CSS", "Mixpanel", "QA"],
  },
  // (Optional) Leadership blended into Experience — remove if you prefer a separate page/section.
  {
    role: "Operations Manager",
    company: "Pizza 64",
    location: "Surrey, BC",
    dates: "Oct 2023 – Present",
    bullets: [
      "Managed scheduling, expense tracking, and digital marketing across delivery platforms, contributing to ~10% revenue growth.",
    ],
    tags: ["Scheduling", "Ops", "Marketing"],
  },
  {
    role: "Founder",
    company: "All-Star Tutoring",
    location: "Vancouver, BC",
    dates: "Dec 2022 – Present",
    bullets: [
      "Built and scaled a tutoring service supporting 40+ students with personalized lessons and custom study material.",
    ],
    tags: ["Entrepreneurship", "Education"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      name="experience"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold">
          Experience
          <span className="mt-2 block h-[3px] w-16 bg-sky-400 rounded"></span>
        </h2>

        <p className="mt-4 max-w-3xl text-gray-400">
          Roles, responsibilities, and impact across internships and leadership.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {EXPERIENCE.map((e, i) => (
            <Item key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
