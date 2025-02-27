"use client";

import { useState } from "react";

const PortfolioSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [slideDirection, setSlideDirection] = useState("");

  const portfolioItems = [
    // Page 1

    [
      {
        id: 1,

        title: "Galsworthy, Ilford",

        image: "/projects/galsworthy.jpg",

        category: "Kitchen",

        slug: "galsworthy-ilford",
      },

      {
        id: 2,

        title: "NorthHill Drive, Romford",

        image: "/projects/northhill.jpg",

        category: "Kitchen",

        slug: "northhill-drive-romford",
      },

      {
        id: 3,

        title: "Roading Lane, Ilford",

        image: "/projects/roading-lane.jpg",

        category: "Landscape",

        slug: "roading-lane-ilford",
      },

      {
        id: 4,

        title: "Brambly Crescent, Gants Hill",

        image: "/projects/brambly.jpg",

        category: "Interior",

        slug: "brambly-crescent-gants-hill",
      },

      {
        id: 5,

        title: "Norman Close, Dartford",

        image: "/projects/norman-close.jpg",

        category: "Living Room",

        slug: "norman-close-dartford",
      },

      {
        id: 6,

        title: "East Ham",

        image: "/projects/east-ham.jpg",

        category: "Interior",

        slug: "east-ham",
      },
    ],

    // Page 2

    [
      {
        id: 7,

        title: "Simon Lane, Chingford",

        image: "/projects/simon-lane.jpg",

        category: "Extension",

        slug: "simon-lane-chingford",
      },

      {
        id: 8,

        title: "9 Hainault Grove, Hainault",

        image: "/projects/hainault-9.jpg",

        category: "Kitchen",

        slug: "9-hainault-grove",
      },

      {
        id: 9,

        title: "7 Hainault Grove, Hainault",

        image: "/projects/hainault-7.jpg",

        category: "Dining",

        slug: "7-hainault-grove",
      },
    ],
  ];

  const handlePageChange = (newPage) => {
    if (newPage === currentPage) return;

    setSlideDirection(newPage > currentPage ? "slide-left" : "slide-right");

    setCurrentPage(newPage);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Portfolio
        </h2>

        <div className="relative">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500
    
    ${slideDirection === "slide-left" ? "animate-slideLeft" : ""}
    
    ${slideDirection === "slide-right" ? "animate-slideRight" : ""}
    
    `}
            onAnimationEnd={() => setSlideDirection("")}
          >
            {portfolioItems[currentPage - 1].map((item) => (
              <a
                href={`/projects/${item.slug}`}
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 md:h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium bg-red-500 px-3 py-1 rounded-full inline-block mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Pagination */}

        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(1)}
            className={`w-10 h-10 rounded-lg ${
              currentPage === 1
                ? "bg-red-500 text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            } flex items-center justify-center transition-colors`}
          >
            1
          </button>

          <button
            onClick={() => handlePageChange(2)}
            className={`w-10 h-10 rounded-lg ${
              currentPage === 2
                ? "bg-red-500 text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            } flex items-center justify-center transition-colors`}
          >
            2
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);

            opacity: 1;
          }

          50% {
            transform: translateX(-100%);

            opacity: 0;
          }

          50.1% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(0);

            opacity: 1;
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(0);

            opacity: 1;
          }

          50% {
            transform: translateX(100%);

            opacity: 0;
          }

          50.1% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(0);

            opacity: 1;
          }
        }

        .animate-slideLeft {
          animation: slideLeft 0.8s ease-in-out;
        }

        .animate-slideRight {
          animation: slideRight 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
