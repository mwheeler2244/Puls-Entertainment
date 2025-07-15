"use client";
import React from "react";
import Image from "next/image";
import { Header } from "../components/Header";
import { useRouter } from "next/navigation";

const ACCENT_BLUE = "#0aaae8";
const ACCENT_GREEN = "#76ba50";

const services = [
  {
    title: "Web Design and Development",
    description:
      "In today's digital age, a compelling online presence is essential. We craft visually stunning, user-friendly websites tailored to your needs, ensuring a seamless experience for your fans and industry contacts.",
    image: "/assets/webdev.avif",
    alt: "Web Design and Development",
  },
  {
    title: "Social Media Management and Marketing",
    description:
      "Connect with your audience through strategic social media management. We curate engaging content, manage your platforms, and execute targeted campaigns to grow your fanbase and brand visibility.",
    image: "/assets/social.jpeg",
    alt: "Social Media Management and Marketing",
  },
  {
    title: "Photography, Videography, and Editing",
    description:
      "Capture your artistry with professional visual services. We provide high-quality photography and videography, transforming raw footage into captivating visual stories that reflect your unique style.",
    image: "/assets/photo.jpeg",
    alt: "Photography, Videography, and Editing",
  },
];

const ServicesPage = () => {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <section className="w-full text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Amplifying Our Services
          </h1>
          <div
            className="mx-auto mb-2"
            style={{
              width: 64,
              height: 4,
              background: ACCENT_BLUE,
              borderRadius: 2,
            }}
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            At PULS Entertainment, we offer a harmonious blend of services
            designed to elevate your brand and artistic presence. Our passion
            for music and creativity drives us to deliver exceptional results,
            ensuring your unique voice is heard and seen.
          </p>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-[#181a1b] rounded-2xl shadow-lg flex flex-col items-center p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl group border border-[#23272a]"
                style={{ boxShadow: "0 4px 32px 0 rgba(10,170,232,0.08)" }}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={320}
                  height={200}
                  className="rounded-xl shadow-md object-cover mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{ maxHeight: 180, background: "#222", width: "100%" }}
                />
                <h2 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight flex items-center gap-2 text-center">
                  <span>{service.title}</span>
                  <span
                    className="inline-block"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: idx % 2 === 0 ? ACCENT_BLUE : ACCENT_GREEN,
                    }}
                  />
                </h2>
                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col items-center pt-24">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight text-center max-w-2xl">
            Unleash your creative journey with a complimentary consultation
          </h3>
          <button
            onClick={() => router.push("/contact")}
            className="cursor-pointer flex items-center gap-3 bor hover:bg-[#76ba50] text-white font-semibold px-10 py-4 text-lg  shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0aaae8] focus:ring-offset-2"
          >
            <span>Contact Us</span>
            <svg
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
