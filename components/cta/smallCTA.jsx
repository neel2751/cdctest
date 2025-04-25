import React from "react";

const SmallCTA = ({ text, Icon }) => {
  return (
    <div className="inline-flex items-center justify-center gap-2 px-5 py-2 mb-8 rounded-full border border-red-100 bg-gradient-to-r from-red-50 to-white shadow-sm">
      {Icon && <Icon className="w-4 h-4 text-red-500" />}

      <span className="text-sm font-semibold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
};

export default SmallCTA;
