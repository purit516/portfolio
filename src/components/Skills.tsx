"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

//TODO: animate the skill bubbles

export default function Skills() {
  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeader>Skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, idx) => (
          <motion.li key={idx} className="bg-white border rounded-xl px-5 py-3">
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
