"use client";
import { useState, useEffect } from "react";
import { PORTFOLIO } from "@/data/data";
import ProjectCard from "./project-card";
import ProjectFilter from "./project-filter";
import ProjectEmpty from "./project-empty";
import ProjectPagination from "./project-pagination";
import { Building2 } from "lucide-react";

// Get unique categories for filter
const categories = [
  "All",
  ...new Set(PORTFOLIO.map((project) => project.category)),
];

// Number of projects per page
const PROJECTS_PER_PAGE = 6;

export default function ProjectPortfolio() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? PORTFOLIO
      : PORTFOLIO?.filter((project) => project.category === filter);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // Get current page projects
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of portfolio section
    document
      .getElementById("portfolio-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio-section" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of construction projects, showcasing
            our expertise and commitment to quality.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <ProjectFilter
              category={category}
              filter={filter}
              setFilter={setFilter}
              key={category}
            />
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {currentProjects?.length === 0 && (
          <ProjectEmpty
            Icon={Building2}
            title={"No Projects found"}
            desc={"Try filtering by another category"}
          />
        )}
        {/* Pagination */}
        {currentProjects?.length !== 0 && totalPages > 1 && (
          <ProjectPagination
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
}
