"use client";

import { useState } from "react";

interface PrincipleProps {
  title: string;
  content: string;
  accentColor?: "blue" | "green";
}

const Principle = ({
  title,
  content,
  accentColor = "blue",
}: PrincipleProps) => {
  const [open, setOpen] = useState(false);
  const accentColorHex = accentColor === "blue" ? "#0aaae8" : "#76ba50";

  return (
    <div>
      <div
        className="border-b"
        style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <button
          className="w-full flex items-center justify-between py-8 focus:outline-none group"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl md:text-3xl font-light text-white text-left">
            {title}
          </span>
          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center ml-4">
            <div className="w-6 h-6 relative" style={{ color: accentColorHex }}>
              <span className="absolute w-full h-[2px] bg-current left-0 top-1/2 -translate-y-1/2"></span>
              <span
                className="absolute h-full w-[2px] bg-current top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out"
                style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
              ></span>
            </div>
          </div>
        </button>
      </div>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pt-6 pb-8">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-4xl">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const principles: PrincipleProps[] = [
  {
    title: "Preserve",
    content:
      "First and foremost, PULS stands for preservation. In a world of ever-changing musical styles and cultures, we strive to ensure that the artists and performers who inspired generations, are not forgotten.",
    accentColor: "blue",
  },
  {
    title: "Unite",
    content:
      "There's a kind of magic, standing in line at a concert, with fellow fans. The stories, conversation, and fellowship is unlike any other. PULS is about uniting the fans, no matter where they are, to keep the stories alive.",
    accentColor: "green",
  },
  {
    title: "Learn",
    content:
      "PULS Entertainment is a different kind of marketing group. Most companies focus on dollars and cents. PULS focuses on stories and lessons. We aim to learn the stories behind the songs, albums, tours, etc. so that we may share them with the fans who appreciate them.",
    accentColor: "blue",
  },
];

export const MissionStatement = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl   mb-16">
          <h2 className="text-5xl font-light text-white tracking-tight">
            Our Core Principles
          </h2>
          <p className="mt-6 text-xl text-gray-400 font-light">
            We are guided by three fundamental values. They are the essence of
            our identity and the driving force behind everything we do.
          </p>
        </div>
        <div className="border-t border-gray-800">
          {principles.map((principle) => (
            <Principle
              key={principle.title}
              title={principle.title}
              content={principle.content}
              accentColor={principle.accentColor as "blue" | "green"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
