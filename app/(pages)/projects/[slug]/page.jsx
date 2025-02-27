"use client";

import React, { useState, useCallback } from "react";

import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetail = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = {
    main: [
      {
        id: 1,

        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=60",

        alt: "Modern kitchen overview",
      },

      {
        id: 2,

        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",

        alt: "Living room design",
      },

      {
        id: 3,

        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",

        alt: "Kitchen details",
      },

      {
        id: 4,

        url: "https://images.unsplash.com/photo-1600566752547-c2a4ef8c70a3?w=800&auto=format&fit=crop&q=60",

        alt: "Bathroom design",
      },

      {
        id: 5,

        url: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?w=800&auto=format&fit=crop&q=60",

        alt: "Exterior view",
      },
    ],
  };

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);

    setLightboxOpen(true);

    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);

    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback((e) => {
    e.stopPropagation();

    setCurrentImageIndex((prev) =>
      prev === projectImages.main.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevImage = useCallback((e) => {
    e.stopPropagation();

    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.main.length - 1 : prev - 1
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}

      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <a
            href="/portfolio"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />

            <span className="text-sm sm:text-base">Back to Projects</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Project Header */}

          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              NorthHill Drive, Romford
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="bg-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                Kitchen
              </span>

              <span className="bg-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                Interior Design
              </span>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Complete home renovation project featuring a modern kitchen
              installation, interior redesign, and bathroom remodeling.
            </p>
          </div>

          {/* Image Gallery */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {/* Main Large Image */}

            <div className="sm:col-span-2">
              <div
                className="relative h-[300px] sm:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer

transform transition-transform duration-300 hover:scale-[1.02] touch-manipulation"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={projectImages.main[0].url}
                  alt={projectImages.main[0].alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Smaller Images Grid */}

            {projectImages.main.slice(1).map((image, index) => (
              <div
                key={image.id}
                className="relative h-[200px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer

transform transition-transform duration-300 hover:scale-[1.02] touch-manipulation"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Project Details */}

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Project Overview
                </h3>

                <ul className="space-y-2 sm:space-y-3 text-gray-600">
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium min-w-[120px]">Location:</span>

                    <span>Romford, UK</span>
                  </li>

                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium min-w-[120px]">Duration:</span>

                    <span>12 weeks</span>
                  </li>

                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium min-w-[120px]">
                      Completed:
                    </span>

                    <span>January 2024</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Services Provided
                </h3>

                <ul className="space-y-2 sm:space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    Kitchen Design and Installation
                  </li>

                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    Interior Design
                  </li>

                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    Bathroom Renovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center

touch-none"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full

transition-colors z-50 touch-manipulation"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2

hover:bg-white/10 rounded-full transition-colors z-50 touch-manipulation"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={projectImages.main[currentImageIndex].url}
              alt={projectImages.main[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain animate-fadeIn"
              loading="eager"
            />
          </div>

          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2

hover:bg-white/10 rounded-full transition-colors z-50 touch-manipulation"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base">
            {currentImageIndex + 1} / {projectImages.main.length}
          </div>
        </div>
      )}

      {/* Call to Action */}

      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>

          <a
            href="/contact"
            className="inline-block bg-red-500 text-white px-6 sm:px-8 py-3 rounded-lg

hover:bg-red-600 transition-colors touch-manipulation"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
