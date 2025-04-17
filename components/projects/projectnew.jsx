import React from "react";

import { Building2, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import SmallCTA from "../cta/smallCTA";
import Heading from "../header/heading";
import { PORTFOLIO } from "@/data/data";

const PremiumProjectsMasonry = () => {
  const projects = PORTFOLIO.filter(({ featured }) => featured);

  return (
    <section className="w-full py-32 bg-white relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <SmallCTA Icon={Building2} text={"Remarkable Projects"} />
          <Heading title={"Discover Our latest"} subtitle={"Developments"} />

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-base lg:text-lg">
            Our latest developments showcase the best of our expertise and
            commitment to delivering exceptional results. Explore our current
            projects and discover the possibilities.
            {/* Explore our extensive portfolio showcasing the breadth of our
            expertise, from iconic structures to sustainable solutions, all
            meticulously crafted to perfection. */}
          </p>
        </div>

        {/* Project Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* Featured Project - Takes up 2 columns */}

          <div className="md:col-span-2 h-[400px]">
            <ProjectCard project={projects[0]} />
          </div>

          {/* Regular Projects */}

          {projects.slice(1).map((project, index) => (
            <div key={index} className="h-[400px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* More Projects Button */}

        <div className="mt-16 relative text-center sm:mt-20 z-50">
          <Button
            asChild
            className="bg-red-600 group rounded-full h-12 text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 hover:scale-105"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-5 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
    {/* Project Image */}

    <div className="absolute inset-0">
      <img
        src={`https://cdc.construction/images/projects/${project.images_link}/${project.image}`}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}

    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-red-500" />

          <span className="text-sm font-medium text-white/90">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white">
          {project.title}

          {project.subtitle && (
            <span className="block text-lg font-normal mt-1">
              {project.subtitle}
            </span>
          )}
        </h3>

        <p className="text-white/80">{project.location}</p>

        {/* View Project Link */}

        <Link
          href={`/projects/${project.link}`}
          className="pt-4 flex items-center gap-2 text-white group/link cursor-pointer"
        >
          <span className="text-sm font-medium">View Project</span>

          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </div>
);

export default PremiumProjectsMasonry;
