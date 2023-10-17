import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Notice from "./components/Notice";
import OursTem from "./components/OursTem";

export default function Home() {
  return (
    <main className="container mx-auto px-24">
      <HeroSection />
      <Notice/>
      <OursTem/>
    </main>
  );
}
