"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [currentLang, setCurrentLang] = useState("ENG");

  return (
    <nav className="z-20 p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src="/assets/logo.jpeg"
              alt="PULS Entertainment Logo"
              className="w-20 h-12 object-contain mr-3 drop-shadow-lg"
              style={{ filter: "drop-shadow(0 0 4px #0aaae888)" }}
            />
          </motion.a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex flex-1 justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <nav className="flex space-x-12 text-gray-300 font-mono text-sm tracking-widest">
            <motion.a
              href="/about"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              ABOUT
            </motion.a>
            <motion.a
              href="/services"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              SERVICES
            </motion.a>
            <motion.a
              href="/clients"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              CLIENTS
            </motion.a>
            <motion.a
              href="/partners"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              PARTNERS
            </motion.a>
            <motion.a
              href="/contact"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              CONTACT
            </motion.a>
          </nav>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center space-x-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A48.348 48.348 0 0112 2.163zm0 1.441c-3.149 0-3.509.011-4.73.068-2.738.125-3.967 1.35-4.092 4.092-.057 1.22-.067 1.564-.067 4.73s.01 3.51.067 4.73c.125 2.742 1.354 3.967 4.092 4.092 1.22.057 1.58.068 4.73.068 3.149 0 3.509-.011 4.73-.068 2.738-.125 3.967-1.35 4.092-4.092.057-1.22.067-1.564.067-4.73s-.01-3.51-.067-4.73c-.125-2.742-1.354-3.967-4.092-4.092-1.22-.057-1.58-.068-4.73-.068zm0 5.831a4.607 4.607 0 100 9.214 4.607 4.607 0 000-9.214zm0 7.773a3.166 3.166 0 110-6.332 3.166 3.166 0 010 6.332zm5.705-8.885a1.144 1.144 0 100 2.288 1.144 1.144 0 000-2.288z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.55 1.7 2.14 2.94 4.03 2.97-1.47 1.15-3.33 1.83-5.35 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-6 lg:hidden">
          <button
            onClick={() =>
              setCurrentLang(currentLang === "ENG" ? "ESP" : "ENG")
            }
            className="text-gray-300 font-mono text-sm tracking-wider border border-gray-300 px-3 py-1"
          >
            {currentLang}
          </button>

          <button className="text-gray-300 font-mono text-sm tracking-wider flex items-center space-x-2">
            <span>MENU</span>
            <div className="flex flex-col space-y-1">
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
