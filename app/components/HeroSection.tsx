"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const HeroSection = () => {
  const [currentLang, setCurrentLang] = useState("ENG");

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Blues/Rock Grunge Background (no SVGs) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grunge texture using only gradients */}
      </div>

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-screen flex flex-col justify-center pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Typography */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-8xl font-light tracking-tight leading-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.span
                  className="block text-gray-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  PRESERVING
                </motion.span>
                <motion.span
                  className="block text-white font-normal"
                  style={{ textShadow: "0 2px 16px rgba(10,170,232,0.10)" }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  MUSIC
                </motion.span>
                <motion.span
                  className="block text-white font-normal"
                  style={{
                    background:
                      "linear-gradient(90deg, #0aaae8 10%, #fff 50%, #0aaae8 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 2px 24px rgba(10,170,232,0.13)",
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  LEGACY
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 max-w-md leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Safeguarding musical heritage through careful archiving and
              preservation for future generations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.button
                className="bg-white text-slate-900 px-8 py-4 text-sm font-mono tracking-widest hover:bg-gray-200 transition-colors border-2 border-white hover:shadow-lg hover:shadow-[#0aaae8]/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                SERVICES{" "}
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 text-sm font-mono tracking-widest hover:bg-white hover:text-slate-900 transition-colors hover:shadow-lg hover:shadow-[#0aaae8]/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                CONTACT
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Geometric Elements */}
        </div>
      </div>

      {/* Retro Footer */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 font-mono tracking-wider"></div>
            <div className="flex items-center space-x-8 text-sm text-gray-400 font-mono tracking-wider">
              <span>PRESERVATION</span>
              <span>•</span>
              <span>ARCHIVE</span>
              <span>•</span>
              <span>LEGACY</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 border-l-2 border-b-2 border-white opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 border-r-2 border-t-2 border-white opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
      ></motion.div>
    </div>
  );
};
