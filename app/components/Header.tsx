"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="z-20 p-8 relative">
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
            href="https://www.instagram.com/pulsentertainment24/?igsh=MTU2eGp4MHh6NHh6Ng%3D%3D#"
            target="blank"
            aria-label="Instagram"
            className="cursor-pointer text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A48.348 48.348 0 0112 2.163zm0 1.441c-3.149 0-3.509.011-4.73.068-2.738.125-3.967 1.35-4.092 4.092-.057 1.22-.067 1.564-.067 4.73s.01 3.51.067 4.73c.125 2.742 1.354 3.967 4.092 4.092 1.22.057 1.58.068 4.73.068 3.149 0 3.509-.011 4.73-.068 2.738-.125 3.967-1.35 4.092-4.092.057-1.22.067-1.564.067-4.73s-.01-3.51-.067-4.73c-.125-2.742-1.354-3.967-4.092-4.092-1.22-.057-1.58-.068-4.73-.068zm0 5.831a4.607 4.607 0 100 9.214 4.607 4.607 0 000-9.214zm0 7.773a3.166 3.166 0 110-6.332 3.166 3.166 0 010 6.332zm5.705-8.885a1.144 1.144 0 100 2.288 1.144 1.144 0 000-2.288z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/people/PULS-Entertainment/61563958379055/?mibextid=LQQJ4d"
            aria-label="Facebook"
            target="blank"
            className="cursor-pointer text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://x.com/PULS2024"
            aria-label="Twitter"
            target="blank"
            className="cursor-pointer text-gray-400 hover:text-white z-20"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-6 lg:hidden z-50 cursor-pointer relative">
          <button
            className="cursor-pointer text-gray-300 font-mono text-sm tracking-wider flex items-center space-x-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
          >
            {/* Hamburger SVG */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Nav Overlay */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: mobileOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 shadow-lg flex flex-col p-8 space-y-8 lg:hidden ${
            mobileOpen ? "" : "pointer-events-none"
          }`}
          style={{ boxShadow: "0 0 20px #0008" }}
        >
          <button
            className="self-end mb-8 text-gray-400 hover:text-white cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            {/* X/Close SVG */}
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-6 text-gray-300 font-mono text-lg tracking-widest">
            <a
              href="/about"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              onClick={() => setMobileOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="/services"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              onClick={() => setMobileOpen(false)}
            >
              SERVICES
            </a>
            <a
              href="/clients"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              onClick={() => setMobileOpen(false)}
            >
              CLIENTS
            </a>
            <a
              href="/partners"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              onClick={() => setMobileOpen(false)}
            >
              PARTNERS
            </a>
            <a
              href="/contact"
              className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
              onClick={() => setMobileOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </motion.div>
      </div>
    </nav>
  );
};
