import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl text-pretty">
      {/* Exceptional Service in */}
      {title}
      <span className="relative ml-2 text-red-600 inline-block mt-2">
        {/* Construction */}
        {subtitle}
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
  );
};

export default Heading;
