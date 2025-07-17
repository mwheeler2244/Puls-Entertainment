"use client";

import { useState } from "react";
import { Toast } from "./Toast";

export const Footer = () => {
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: "", isVisible: false });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (linkName: string) => {
    showToast(
      `${linkName} page coming soon! We're working on bringing you this feature.`
    );
  };

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <footer className="relative bg-black text-white">
        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Section with Brand and Navigation */}
          <div className="pt-16 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Brand Section - Takes 4 columns */}
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <img
                      src="/assets/logo.jpeg"
                      alt="PULS Entertainment Logo"
                      className="w-20 h-12 object-contain mr-3 drop-shadow-lg"
                      style={{ filter: "drop-shadow(0 0 4px #0aaae888)" }}
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                    Discovering and celebrating exceptional musical talent from
                    all around the globe. We connect artists with audiences
                    worldwide.
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/PULS2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-[#0aaae8] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/pulsentertainment24/?igsh=MTU2eGp4MHh6NHh6Ng%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-[#76ba50] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#76ba50] focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/people/PULS-Entertainment/61563958379055/?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-[#0aaae8] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation Section - Takes 4 columns */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                      Navigation
                    </h4>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/about"
                          className="group flex items-center text-gray-300 hover:text-[#0aaae8] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#0aaae8] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services"
                          className="group flex items-center text-gray-300 hover:text-[#0aaae8] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#0aaae8] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => handleLinkClick("Archive")}
                          className="group flex items-center text-gray-300 hover:text-[#0aaae8] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#0aaae8] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Archive
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => handleLinkClick("Contact")}
                          className="group flex items-center text-gray-300 hover:text-[#0aaae8] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#0aaae8] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                      Discover
                    </h4>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          onClick={() => handleLinkClick("Artists")}
                          className="group flex items-center text-gray-300 hover:text-[#76ba50] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#76ba50] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#76ba50] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Featured Artists
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => handleLinkClick("Events")}
                          className="group flex items-center text-gray-300 hover:text-[#76ba50] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#76ba50] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#76ba50] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Upcoming Events
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => handleLinkClick("Newsletter")}
                          className="group flex items-center text-gray-300 hover:text-[#76ba50] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#76ba50] focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
                        >
                          <span className="w-2 h-2 bg-[#76ba50] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Section - Takes 4 columns */}
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                    Get In Touch
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ready to discover amazing music? Let's connect and explore
                    the world of exceptional talent together.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-[#0aaae8] text-black font-semibold  hover:bg-[#76ba50] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2 focus:ring-offset-black group"
                  >
                    <span>Contact Us</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025{" "}
                <span className="text-[#0aaae8] font-semibold">
                  Puls Entertainment
                </span>
                . All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  Made with{" "}
                  <span className="text-[#76ba50] mx-1 text-lg">♫</span> for
                  music lovers
                </span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">
                  Discovering talent worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
