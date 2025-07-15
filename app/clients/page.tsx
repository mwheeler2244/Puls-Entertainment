"use client";
import React from "react";
import Image from "next/image";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ACCENT_BLUE = "#0aaae8";
const ACCENT_GREEN = "#76ba50";

const clients = [
  {
    name: "Alvin Taylor",
    image: "/assets/alvin.jpeg",
    accent: ACCENT_GREEN,
    link: "https://www.AlvinTaylorMusic.com",
    bio: `Alvin Taylor, legendary drummer, producer, and now author became the first official client of PULS Entertainment in the summer of 2024. Since the 1960’s, Alvin Taylor has been one of the most sought-after session drummers in the world. He has performed and recorded with George Harrison, Elton John, Leo Sayer, Little Richard, Ike and Tina Turner, Billy Preston, and countless others. Alvin Taylor, a longtime friend of AMS reached out for help promoting his book, “Drum Major 2 Major Drummer”. Since PULS has been involved, Alvin has been able to share celebrity testimonials for his work, new modern campaigns to widen his audience, a website designed specifically for him, and more.`,
    linkLabel: "www.AlvinTaylorMusic.com",
  },
  {
    name: "Michael Sembello",
    image: "/assets/michael.jpeg",
    accent: ACCENT_BLUE,
    link: null,
    bio: `From Stevie Wonder’s “Songs In The Key Of Life” to Michael Jackson’s “Thriller”, there’s no doubt that Michael Sembello is an incredibly accomplished guitar player. Perhaps best known for the absolute smash hit song, “Maniac” as heard in the hit film “Flashdance”, Michael Sembello is a musical force of nature! His skills and talents are limitless between his songwriting, guitar playing, production skills, and vocals, I think we can all admit that we have danced to the music Michael has made!`,
    linkLabel: null,
  },
];

const ClientsPage = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-x-hidden">
      <Header />
      <main className="relative z-10 max-w-4xl mx-auto px-4 pt-44 pb-32">
        {/* Hero Section */}
        <section className="w-full text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Our Clients
          </h1>
          <div
            className="mx-auto mb-4"
            style={{
              width: 56,
              height: 3,
              background: ACCENT_GREEN,
              borderRadius: 2,
            }}
          />
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mt-4 mb-12">
            We are proud to work with world-class talent. Our clients inspire
            audiences and set new standards in music and entertainment.
          </p>
          <div className="w-full h-px bg-gray-800/60 mb-2" />
        </section>
        {/* Clients Grid */}
        <section>
          <div className="flex flex-col gap-20 md:flex-row md:gap-12 md:justify-center items-stretch">
            {clients.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center max-w-md w-full mx-auto p-10 bg-[#181a1b]/80 rounded-3xl shadow-2xl border border-[#23272a] relative backdrop-blur-md"
              >
                {/* Floating accent dot */}
                <div
                  className="w-4 h-4 rounded-full absolute -top-6 left-1/2 -translate-x-1/2 border-2"
                  style={{ background: client.accent, borderColor: "#222" }}
                />
                <div
                  className="relative mb-8 mt-2 w-40 h-40 rounded-full overflow-hidden shadow-lg"
                  style={{ border: `3px solid ${client.accent}` }}
                >
                  <Image
                    src={client.image}
                    alt={`Portrait of ${client.name}`}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-light mb-2 tracking-widest"
                  style={{ color: client.accent, letterSpacing: 2 }}
                >
                  {client.name}
                </h2>
                <div
                  className="w-8 h-1 mx-auto mb-6 rounded-full"
                  style={{ background: client.accent, opacity: 0.7 }}
                />
                <p
                  className="text-lg text-gray-300 font-light leading-relaxed mb-7 flex items-start justify-center gap-2"
                  style={{ letterSpacing: 0.01 }}
                >
                  <span className="text-2xl text-gray-500 mt-0.5">“</span>
                  {client.bio}
                </p>
                {client.link && (
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold px-6 py-2 rounded-full border border-current transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0aaae8] text-base hover:bg-white hover:text-black bg-transparent"
                    style={{ color: client.accent, borderColor: client.accent }}
                  >
                    {client.linkLabel}
                    <FiExternalLink className="inline-block text-lg mb-0.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientsPage;
