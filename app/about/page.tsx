"use client";
import React, { useState, useEffect } from "react";
import { Header } from "../components";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineData = [
    {
      year: "2014",
      title: "The Beginning",
      content:
        "The story of PULS Entertainment starts in 2014, when 17-year-old Andrew Michael Smith visited the iconic Zoo Bar in Lincoln, NE for the first time. A band was performing and impressed Andrew. Though he knew the history of the venue, he felt that band deserved to be playing for larger crowds. Knowing he had experience in communicating with managers and agents as an autograph collector, Andrew asked the band for contact information. The band leader wrote his email address on a cd sleeve, Andrew became AMS, and AMS Entertainment was born.",
    },
    {
      year: "2014-2024",
      title: "The Journey",
      content:
        "Still in high school, AMS had no roadmap, no field guide. He was driven purely by an intense love and passion for the music. For 10 years, AMS Entertainment worked with artists and craftsmen ranging from bar bands to bonafide rock stars, with the sole mission of keeping the music he loved, alive and well. He never asked for payment for his services, it was all for the love of music. After 10 years, AMS was approached by legendary studio musician Alvin Taylor to help promote Taylor's upcoming autobiography. AMS decided it was time to come back in a big way, with more drive and focus than ever before.",
    },
    {
      year: "2024",
      title: "The Evolution",
      content:
        "This time though, things would be different. A more modern approach, 10 years of lessons learned, and connections made, PULS Entertainment is here, and ready to take the world by storm.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <div
          className={`text-center space-y-4 mb-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-full border-2 flex items-center justify-center text-sm font-medium tracking-wide transition-all duration-500 ${
                      activeSection === index
                        ? "border-white bg-white text-black"
                        : "border-gray-600 bg-black text-gray-400"
                    }`}
                  >
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2
                    className={`text-3xl md:text-4xl font-light mb-6 transition-all duration-500 tracking-tight ${
                      activeSection === index ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <div
                    className={`relative overflow-hidden transition-all duration-700 ${
                      activeSection === index ? "max-h-96" : "max-h-32"
                    }`}
                  >
                    <p
                      className={`text-xl leading-relaxed transition-all duration-500 ${
                        activeSection === index
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {item.content}
                    </p>
                    {activeSection !== index && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < timelineData.length - 1 && (
                <div
                  className={`w-px h-12 bg-gray-800 ml-10 mt-8 transition-all duration-500 ${
                    activeSection === index ? "opacity-100" : "opacity-30"
                  }`}
                ></div>
              )}

              {/* Down Arrow for Manual Navigation */}
              {activeSection === index && index < timelineData.length - 1 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setActiveSection(index + 1)}
                    aria-label="Next section"
                    className="p-2 rounded-full border border-white hover:bg-white/10 transition-colors"
                  >
                    <svg
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center pt-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/services"
              className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200 transition-colors"
            >
              Our Services
            </a>
            <button className="border border-white text-white px-8 py-3 text-lg hover:bg-white/10 transition-colors">
              <a href="/contact">Get In Touch</a>
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-4 mt-12">
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
