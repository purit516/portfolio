import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <a href={link} target="_blank">
        <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-4 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-[4rem] cursor-pointer">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, idx) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full "
                  key={idx}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Ground server frontend"
            className="absolute hidden sm:block top-8 -right-[5rem] w-[24rem] rounded-lg shadow-2xl sm:group-even:ml-[5rem]
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-10
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-10
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </a>
    </div>
  );
}
