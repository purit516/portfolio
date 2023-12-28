"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p>
        My journey into software development began with one goal in mind: to
        solve <span className="font-medium">real-world problems</span> and{" "}
        <span className="font-medium">impact people</span> through technology.
        Through my work as a developer for startups, project teams, and large
        companies, I&apos;ve gained valuable experience working with a diverse
        range of technology stacks and tools. Whether I&apos;m immersed in code,
        leading software teams, collaborating with fellow developers, or
        engaging with end users, I&apos;m committed to delivering{" "}
        <span className="font-medium">impactful results</span> and fostering{" "}
        <span className="font-medium">continuous learning</span>.
      </p>
      <p>
        When I&apos;m away from the computer, I enjoy film photography, playing
        guitar, going on hikes, and finding new recipes to cook on YouTube!
      </p>
    </motion.section>
  );
}
