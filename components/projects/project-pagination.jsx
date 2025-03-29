import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectPagination = ({ handlePageChange, currentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentPage === page
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default ProjectPagination;
