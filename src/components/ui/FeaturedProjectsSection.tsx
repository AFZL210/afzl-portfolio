"use client";
import { useState } from "react";
import FeaturedProject from "./FeaturedProject";
import data from "@/data/data.json";

const FeaturedProjectSection = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="featured-projects" className="w-full h-fit mt-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold gradient-one">Projects</h1>
        <div className="w-[80%] h-[.12rem] bg-white"></div>
      </div>
      <div className="flex flex-col gap-8">
        {data.featuredProjects
          .slice(0, showMore ? data.featuredProjects.length : 2)
          .map((project, index) => (
            <FeaturedProject
              key={index}
              demoUrl={project.demoUrl}
              description={project.description}
              githubUrl={project.githubUrl}
              heading={project.heading}
              subHeading={project.subHeading}
              tech={project.tech}
              video={project.video}
            />
          ))}
      </div>
      <button
        className="mt-8 px-4 py-2  text-white rounded hover:text-[#a29a59] w-full transition-all"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default FeaturedProjectSection;
