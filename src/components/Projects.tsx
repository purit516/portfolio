import React from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mb-28" id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectsData.map((proj, idx) => (
          <React.Fragment key={idx}>
            <ProjectCard {...proj} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
