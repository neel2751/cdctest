"use client";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: 1,

    author: "Christopher S.",

    role: "Executive Director",

    date: "June 2023",

    rating: 5,

    text: "Sai and Narendra and the team were so helpful. I wish I had started my job with their architect who helped me sort out the mess that my original architect had left me in. And so it continued, they were always helpful, offering up creative solutions, going above and beyond and provided such a high quality of work. And fast too!",

    verified: true,
  },
  {
    id: 2,

    author: "Jimmy Flynn",

    role: "Chief Innovation Officer",

    date: "June 2023",

    rating: 5,

    text: "I am delighted to come across Creative Design and Construction after dreadful few months dealing with unprofessional construction company and architect! Andrew and Sadequl were working on my project of completely refurbishing my house, everything has been done with good quality and good value.",

    verified: true,
  },
  {
    id: 3,

    author: "Silviya Barrett",

    role: "Design Director",

    date: "June 2023",

    rating: 5,

    text: "Creative Design and Construction has just completed a complete renovation of our house in Dagenham over the past 3 months. We're very happy with the result, they did a great job - we have high standards and they delivered.",

    verified: true,
  },
];

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(reviews.length / 3);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-24 lg:py-32">
      {/* Decorative elements - with better mobile positioning */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -left-16 sm:-left-40 -top-16 sm:-top-40 h-48 sm:h-80 w-48 sm:w-80 rounded-full bg-red-500/5 blur-3xl"></div>

        <div className="absolute right-0 top-0 h-56 sm:h-96 w-56 sm:w-96 rounded-full bg-blue-500/5 blur-3xl"></div>

        <div className="absolute bottom-0 right-8 sm:right-20 h-40 sm:h-64 w-40 sm:w-64 rounded-full bg-red-500/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header section with improved mobile spacing */}

        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black md:text-5xl">
            Client Testimonials
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Excellence Recognized by Industry Leaders
          </p>
        </div>

        {/* Reviews Grid - with improved mobile layout and touch targets */}

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="group relative touch-manipulation">
              {/* Gradient border with better mobile performance */}

              <div
                className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500 via-blue-500 to-red-500 opacity-40
        
        blur-sm group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              ></div>

              <div className="relative flex h-full flex-col justify-between rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-xl">
                {/* Quote icon with better mobile sizing */}

                <Quote
                  className="absolute -top-3 -left-2 h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-500/20"
                  aria-hidden="true"
                />

                <div>
                  {/* Rating Stars with proper touch areas */}

                  <div className="flex items-center gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-blue-600 text-blue-600"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Review Text with improved readability */}

                  <p
                    className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-gray-700
        
        group-hover:text-gray-900 transition-colors duration-300"
                  >
                    {review.text}
                  </p>
                </div>

                {/* Author Info with better mobile layout */}

                <div className="mt-4 sm:mt-6 lg:mt-8 border-t border-gray-100 pt-4 sm:pt-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="min-w-0">
                      <h3
                        className="font-semibold text-gray-900 group-hover:text-red-600
        
        transition-colors duration-300 truncate"
                      >
                        {review.author}
                      </h3>

                      <p className="text-sm text-blue-600 truncate">
                        {review.role}
                      </p>

                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>

                    {review.verified && (
                      <span
                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1
        
        text-xs font-medium text-blue-700 ring-1 ring-blue-600/20"
                      >
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls with improved touch targets */}

        <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center gap-3 sm:gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="group rounded-full p-3 sm:p-4 bg-white shadow-lg hover:bg-gray-50
        
        transition-all duration-300 ring-1 ring-gray-200 disabled:opacity-50
        
        disabled:cursor-not-allowed touch-manipulation"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-blue-600" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="group rounded-full p-3 sm:p-4 bg-white shadow-lg hover:bg-gray-50
        
        transition-all duration-300 ring-1 ring-gray-200 disabled:opacity-50
        
        disabled:cursor-not-allowed touch-manipulation"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
