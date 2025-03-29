import { Building } from "lucide-react";

const ProjectEmpty = ({ Icon, title, desc }) => {
  return (
    <div className="text-center py-12 bg-white rounded-lg shadow">
      <Icon className="h-12 w-12 text-red-300 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title || "No Projects found"}
      </h3>
      <p className="text-gray-600">
        {/* No projects match your current filter. Try selecting a different
        category. */}
        {desc ||
          "No projects match your current filter. Try selecting a different category."}
      </p>
    </div>
  );
};

export default ProjectEmpty;
