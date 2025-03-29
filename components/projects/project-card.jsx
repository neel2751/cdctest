import { ArrowUpRight, Building, MapPin } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
    >
      <div className="relative overflow-hidden  aspect-[4/3]">
        <img
          src={`https://cdc.construction/images/projects/${project.images_link}/${project.image}`}
          alt={project.title}
          className="object-cover transition-transform duration-500 aspect-[4/3]"
        />

        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.category}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end group-hover:opacity-100">
          <div className="p-6">
            <div>
              <p className="text-white mb-4">{project.description}</p>
              <Link
                href={`projects/${project?.link}`}
                className="flex items-center gap-2 text-white font-medium"
              >
                View Project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {project?.title}
        </h3>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-red-500" />
            {project?.location}
          </div>
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4 text-red-500" />
            {project?.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
