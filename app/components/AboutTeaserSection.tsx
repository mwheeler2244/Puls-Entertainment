import React from "react";

const AboutTeaserSection = () => {
  return (
    <section className="relative py-28 px-4 bg-black overflow-hidden">
      {/* Subtle blurred white spotlight, centered */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-[#76ba50] rounded-full opacity-80 z-10 shadow-lg" />
      {/* Decorative Vertical Accent Bar */}
      <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 z-20">
        {/* Image with double border and glow, centered */}
        <div className="w-full max-w-xs flex-shrink-0 relative flex items-center justify-center mx-auto">
          <span className="absolute -top-4 -left-4 w-full h-full rounded-xl border-4 border-[#76ba50] z-0" />
          <img
            src="/assets/ams-1.jpeg"
            alt="About our journey"
            className="relative w-full rounded-xl object-cover shadow-2xl z-20"
            style={{
              background: "#111",
            }}
          />
        </div>
        {/* Content, centered and symmetrical */}
        <div className="flex-1 text-center md:text-left space-y-10 flex flex-col items-center md:items-start justify-center">
          <div className="flex items-center justify-center md:justify-start gap-3 w-full">
            {/* Colored dot accent, symmetrical */}
            <span className="inline-block w-4 h-4 rounded-full bg-[#0aaae8] shadow-md" />
            <h2
              className="text-5xl md:text-6xl font-extrabold text-white tracking-wide relative inline-block leading-tight"
              style={{
                letterSpacing: "0.01em",
                textShadow: "0 2px 12px rgba(10,170,232,0.10)",
              }}
            >
              The essence of our journey
              <span className="block mt-3 h-2 w-20 bg-[#0aaae8] rounded-md mx-auto md:mx-0 relative left-0 top-1" />
            </h2>
          </div>
          <p
            className="text-gray-200 text-xl leading-relaxed font-light max-w-2xl mx-auto md:mx-0"
            style={{ lineHeight: 1.7 }}
          >
            For over 10 years, our mission has remained the same: to discover
            and elevate artists. What started as a spark in a bar became a
            passion, connecting countless musicians with new audiences.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-4 bg-black  border-2 px-12 py-4 font-mono text-lg font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2"
          >
            Learn More
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full  text-white ml-2 shadow-md">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      {/* Subtle bottom accent shape, centered */}
    </section>
  );
};

export default AboutTeaserSection;
