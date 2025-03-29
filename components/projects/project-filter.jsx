const ProjectFilter = ({ category, filter, setFilter }) => {
  return (
    <button
      key={category}
      onClick={() => setFilter(category)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        filter === category
          ? "bg-red-600 text-white shadow-md"
          : "bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-600"
      }`}
    >
      {category}
    </button>
  );
};

export default ProjectFilter;
