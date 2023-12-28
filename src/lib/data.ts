import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuPlane, LuSchool } from "react-icons/lu";
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
    organization: "Cornell University", 
    title: "Student",
    location: "Ithaca, NY",
    description:
      "Pursuing a B.A. and M.Eng in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 - May 2025",
  },
  {
    organization: "CUAir", 
    title: "Software Developer",
    location: "Ithaca, NY",
    description:
      "Part of a project team that builds an autonomous aircraft. On the Imaging Systems subteam, which builds software to manage image capture and processing.",
    icon: React.createElement(LuPlane),
    date: "Oct 2021 - Aug 2023",
  },
  {
    organization: "Unipantry", 
    title: "Software Engineering Intern",
    location: "Ithaca, NY",
    description:
      "Worked on a startup to develop an MVP for a social media recipe sharing mobile app.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Aug 2022",
  },
  {
    organization: "Cornell CIS", 
    title: "Teaching Assistant",
    location: "Ithaca, NY",
    description:
      "CS 3110: Functional Programming and Data Structures",
    icon: React.createElement(LuSchool),
    date: "Aug 2022 - Present",
  },
  {
    organization: "Tourable", 
    title: "Full Stack Developer",
    location: "Ithaca, NY",
    description:
      "Worked on a startup to build a virtual college tour platform used by 25% of incoming international students at Cornell.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - May 2023",
  },
  {
    organization: "Ford Motor Company", 
    title: "Software Engineering Intern",
    location: "Remote",
    description:
      "Interned on the Ford Pro Intelligence Data Platform team. Created and deployed a data lineage application to validate vehicle signal data across a commercial fleet.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Aug 2023",
  },
  {
    organization: "CUAir", 
    title: "Imaging Systems Lead",
    location: "Ithaca, NY",
    description:
      "Lead a cross-functional subteam, organize work sessions, oversee projects, and manage timelines and deliverables.",
    icon: React.createElement(LuPlane),
    date: "Aug 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Imaging Ground Server",
    description: "A web app built for CUAir's unmanned aircraft that handles image transmission, geolocation, tagging, and storage. Spearheaded a frontend redesign to increase tagging efficiency. Developed APIs to send information and commands across systems.",
    tags: ["Spring Boot", "React", "Redux", "PostgreSQL", "Docker"],
  },
  {
    title: "2 Peas in a Pod",
    description: "A podcast recommendation platform for you and your best friend. Utilizes information retrieval techniques to generate a curated list of podcasts based on the preferences of two individuals.",
    tags: ["React", "Flask", "NumPy", "Pandas", "Scikit-learn", "MySQL", "Docker"]
  },
  {
    title: "UniPantry",
    description:
      "A social media recipe sharing application aimed at providing healthy and accessible meal options for college students.",
    tags: ["React Native", "Express.js", "Node.js", "CSS", "Google Firebase"],
  },
  {
    title: "Tourable",
    description:
      "A virtual college tour platform built to give students the chance to experience life on college campuses, regardless of where they are in the world.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS"],
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
  "Podman",
  "Jenkins",
  "Git"

] as const;