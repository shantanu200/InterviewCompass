import Benfits from "@/components/Benifits";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-full ">
      <Navbar />
      <Hero />
      <Features />
      <Benfits />
      <Pricing />
    </main>
  );
}
