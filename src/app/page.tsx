import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Experiences from "@/components/Experiences";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
