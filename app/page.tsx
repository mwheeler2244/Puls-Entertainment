import { HeroSection, Footer, MissionStatement } from "./components";
import AboutTeaserSection from "./components/AboutTeaserSection";

export default function PulsEntertainment() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <MissionStatement />
      <AboutTeaserSection />
      <Footer />
    </main>
  );
}
