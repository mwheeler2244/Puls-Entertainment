import React from "react";
import { Header } from "../components/Header";

const partners = [
  {
    name: "Lezil Graphics",
    img: "/assets/lezil.jpeg",
    alt: "Lezil Graphics logo placeholder",
    description:
      "Lisa Blumer at Leezil Graphics is amazing! She’s been a valued member of the community that has driven AMS (Now PULS) for over a decade. She designed the original AMS Entertainment logo, and when it came time to rebrand, Leezil Graphics was the ONLY option! Check out Leezil Graphics today!",
    website: "https://www.leezilgraphics.com/?",
    accent: "#0aaae8",
    border: "#76ba50",
  },
  {
    name: "Caps Etc.",
    img: "/assets/caps.jpeg",
    alt: "Caps Etc. logo placeholder",
    description:
      "The polos, t-shirts, hats you see us wear, they come from CAPS ETC. As a small business, we like to support small businesses, and Tracy and his team at CAPS ETC. are where it’s at! For your team, employees, special occasion, or just for fun. If you’re looking for custom gear, this is where you need to go!",
    website: "https://capsetc.net/",
    accent: "#76ba50",
    border: "#0aaae8",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-x-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='39' height='39' rx='7.5' stroke='%230aaae8' stroke-dasharray='4 8'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
      <Header />
      <main className="relative z-10 max-w-5xl mx-auto py-20 px-4 flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-8 text-white tracking-tight">
            Our Partners
          </h1>
          <p className="text-lg leading-relaxed text-neutral-300">
            At PULS Entertainment, we value small businesses, and the
            hardworking people who keep them running. So, in addition to hiring
            these small businesses for our needs, we’ve decided to welcome these
            businesses to our family. You won’t find a business on this page
            that we do not use, ourselves. For more information on these
            businesses, simply tap on their logo to be directed to their
            websites.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
          {partners.map((partner) => (
            <section
              key={partner.name}
              className="flex flex-col h-full bg-neutral-900 border-2 rounded-2xl p-8 shadow-xl items-center transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_0_32px_4px] focus-within:shadow-[0_0_32px_4px] group outline-none"
              style={{
                borderColor: partner.accent,
                boxShadow: `0 2px 24px 0 ${partner.accent}22`,
              }}
              tabIndex={0}
            >
              <img
                src={partner.img}
                alt={partner.alt}
                className="mb-5 rounded-lg h-28 w-28 object-contain border-4 bg-neutral-800 shadow-md hover:shadow-lg transition-shadow border-white group-hover:border-[var(--accent)] group-focus:border-[var(--accent)]"
                style={{ borderColor: partner.border }}
              />
              <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-sm">
                {partner.name}
              </h2>
              <p className="text-base text-neutral-300 mb-6 flex-1">
                {partner.description}
              </p>
              <div className="mt-auto w-full flex justify-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 font-semibold text-base  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] shadow-md"
                  style={{
                    color: "white",
                    border: `1px solid `,
                  }}
                  tabIndex={0}
                >
                  Visit Website
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
