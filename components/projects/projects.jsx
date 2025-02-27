"use client";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      id: 1,

      title: "Harbour Exchange Square",

      category: "Commercial",

      location: "3rd Floor, Canary Wharf",

      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
    },

    {
      id: 2,

      title: "Centro Office Space",

      category: "Commercial",

      location: "Guildford",

      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800",
    },

    {
      id: 3,

      title: "Woodland House",

      category: "Commercial",

      location: "Northampton",

      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800",
    },

    {
      id: 4,

      title: "Bridge House",

      category: "Commercial",

      location: "Stratford",

      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
    },
  ];

  const totalPages = Math.ceil(projects.length / 3);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative z-10 bg-white py-24 sm:py-32">
      {/* Background Pattern */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-red-600/10 px-6 py-2 text-red-600">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600"></span>
            Remarkable Projects
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Latest
            <span className="relative ml-2 inline-block text-red-600">
              Projects
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 Q50,12 100,0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Explore our extensive portfolio showcasing the breadth of our
            expertise, from iconic structures to sustainable solutions, all
            meticulously crafted to perfection.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .slice(currentPage * 3, (currentPage + 1) * 3)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* Navigation Controls */}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-colors hover:border-red-600 hover:bg-red-600"
            >
              <ArrowLeft className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    currentPage === idx
                      ? "bg-red-600"
                      : "bg-gray-200 hover:bg-red-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-colors hover:border-red-600 hover:bg-red-600"
            >
              <ArrowRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Decorative Elements */}

      <div className="absolute bottom-0 left-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group relative h-[400px] w-full overflow-hidden rounded-3xl bg-gray-100">
    <div className="absolute inset-0">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
      <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
        {project.category}
      </span>

      <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>

      <p className="mt-2 text-gray-300">{project.location}</p>

      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span>View Project</span>

        <ExternalLink className="h-4 w-4" />
      </div>
    </div>
  </div>
);

export default Projects;
