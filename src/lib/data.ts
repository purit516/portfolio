import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Imaging Ground Server",
    description: "A web app built for CUAir's unmanned aircraft that handles image transmission, geolocation, tagging, and storage. Spearheaded a frontend redesign to increase tagging efficiency. Developed APIs to send information and commands across systems.",
    tags: ["Spring Boot", "React", "Redux", "PostgreSQL"],
  },
  
  {
    title: "UniPantry",
    description:
      "A social media recipe sharing application aimed at providing healthy and accessible meal options for college students.",
    tags: ["React Native", "Express.js", "Node.js", "CSS", "Google Firebase"],
  },
  {
    title: "2 Peas in a Pod",
    description: "A podcast recommendation platform for you and your best friend. The app generates a curated list of podcasts based on the preferences of two individuals. Utilizes information retrieval concepts such as TF-IDF vectors, cosine similarity, and Rocchio's algorithm. Final project for Cornell CS 4300: Language and Information.",
    tags: ["React", "Flask", "NumPy", "Pandas", "Scikit-learn", "MySQL", "Docker"]
  },
  {
    title: "OCaml Twitter",
    description:
      "A Twitter-like messaging board implemented using functional programming through a command line interface. Includes a main feed, trending page, user profiles, interactions, and search functionality.",
    tags: ["OCaml"],
  },
] as const;

export const skillsData = [
  "Java",
  "Kotlin",
  "Spring Boot",
  "Python",
  "Flask",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "HTML",
  "CSS",
  "Node.js",
  "Next.js",
  "OCaml",
  "Rust",
  "C",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "GCP",
  "Docker",
  "Jenkins",
  "Git"

] as const;