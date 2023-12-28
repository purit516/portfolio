"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-700 -mt-6">
        Feel free to reach out to me at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          pb465@cornell.edu
        </a>{" "}
        or via{" "}
        <a
          href="https://www.linkedin.com/in/purit-butsapak/"
          className="underline"
        >
          LinkedIn
        </a>
      </p>
    </motion.section>
  );
}
