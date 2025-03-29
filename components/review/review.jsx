"use client";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

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
    <>
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
              <div
                key={review.id}
                className="group relative touch-manipulation"
              >
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
      {/* <TestimonialSection /> */}
    </>
  );
};

// export default ReviewsSection;

const TestimonialSection = () => {
  const GOOGLE_BUSINESS_URL = "https://g.co/kgs/JZZs9hh";

  const [currentIndex, setCurrentIndex] = useState(0);

  const [reviews] = useState([
    {
      author_name: "Ankush Deshbhratar",
      rating: 5,
      text: "Creative Design & Construction Ltd. (CDC) consistently delivers exceptional Design and Construction solutions, interior works for both Residential and Commercial projects, setting a standard of excellence in the industry. Their attention to detail, innovative designs, and commitment to Client satisfaction make them a Top choice for anyone seeking quality work and good service. Highly recommended!!!",
      time: "10 months ago",
      reviewCount: 3,
    },

    {
      author_name: "Mhbubul Alam",
      rating: 5,
      text: "I recently have very good experiance with CREATIVE DESIGN & CONSTRUCTION LIMITED. Their expertise in design and construction was evident from start to finish. Communication was excellent, and they addressed our concerns promptly. The craftsmanship displayed was exceptional, resulting in a space that exceeded our expectations.",
      time: "10 months ago",
      isLocalGuide: true,
      reviewCount: 14,
      photoCount: 4,
    },

    {
      author_name: "Moshiur Rahman",
      rating: 5,
      text: "We were looking for an Architectural design and construction company. And we found Creative Design and Construction Company in Google search. Their experts surveyed our property in Southend-On-Sea and afterwards they have submitted their design and meets of all our required extensions, remodeling, refurbishments of our property with cost.",
      time: "10 months ago",
      reviewCount: 2,
    },

    {
      author_name: "Mohammad Bhuiyan",
      rating: 5,
      text: "A highly professional and well equipped one stop construction company where all of your construction needs including, architectural services, planning permission & design and build services for both residential and commercial projects are undertaken with great care and professionalism. I will highly recommend CDC.",
      time: "a year ago",
      reviewCount: 3,
    },

    {
      author_name: "Anurag Chopra",
      rating: 5,
      text: "I had a great experience from CDC, Their service is very good' staff is very cooperative and they complete their jobs in given time period.",
      time: "10 months ago",
      reviewCount: 1,
    },

    {
      author_name: "Sourav Jassal",
      rating: 5,
      text: "I had a great experience by having a good experience from this company interior designer is really good in my house and in the living room in the low budget they did the job thanks so much",
      time: "10 months ago",
      reviewCount: 1,
    },
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;

      return nextIndex >= reviews.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 3;

      return nextIndex < 0 ? Math.max(reviews.length - 3, 0) : nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 sm:h-5 sm:w-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const handleReviewClick = () => {
    window.open(GOOGLE_BUSINESS_URL, "_blank");
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  const canShowNext = currentIndex + 3 < reviews.length;
  const canShowPrev = currentIndex > 0;
  return (
    <section className=" my-6 py-8 sm:py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-500/5 via-red-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600">
            Real reviews from our valued customers on Google
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-2">
              {visibleReviews.map((review, index) => (
                <div
                  key={currentIndex + index}
                  className="transform transition-all duration-300 hover:scale-105"
                  onClick={handleReviewClick}
                  role="button"
                  tabIndex={0}
                >
                  <div className="bg-white rounded-lg shadow p-4 sm:p-6 cursor-pointer h-full flex flex-col">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mb-4" />

                    <div className="flex items-center mb-4">
                      {renderStars(review.rating)}
                    </div>

                    <p className="text-gray-800 text-sm sm:text-base mb-4 flex-grow line-clamp-4">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base text-pretty tracking-tight">
                            {review.author_name}
                          </p>
                          {review.isLocalGuide && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              Local Guide
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                          <span>{review.time}</span>

                          {review.reviewCount && (
                            <span>• {review.reviewCount} reviews</span>
                          )}

                          {review.photoCount && (
                            <span>• {review.photoCount} photos</span>
                          )}
                        </div>
                      </div>

                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google Reviews"
                        title="Google Reviews"
                        className="h-4 sm:h-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className={`${
                !canShowPrev ? "opacity-50 cursor-not-allowed" : ""
              } bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200`}
              disabled={!canShowPrev}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className={`${
                !canShowNext ? "opacity-50 cursor-not-allowed" : ""
              } bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200`}
              disabled={!canShowNext}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </Button>
          </div>

          {/* Dots indicator */}

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    Math.floor(currentIndex / 3) === index
                      ? "bg-red-600 w-4"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to review set ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
