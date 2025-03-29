"use client";
import { useCallback } from "react";
import { Button } from "../ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const LightBox = ({
  closeLightbox,
  currentImageIndex,
  prevImage,
  nextImage,
  projectImages,
  url,
  alt,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center touch-none"
      onClick={closeLightbox}
    >
      <Button
        size="icon"
        variant="outline"
        className="absolute top-4 right-4 p-2 rounded-full transition-colors z-50 touch-manipulation"
        onClick={closeLightbox}
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2  p-2 rounded-full transition-colors z-50 touch-manipulation"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <div className="relative w-full h-full flex items-center justify-center p-4 rounded-xl">
        <img
          src={url}
          alt={alt}
          className="max-w-full max-h-full object-contain animate-fadeIn rounded-xl"
          loading="eager"
        />
      </div>

      <Button
        size="icon"
        variant="secondary"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors z-50 touch-manipulation"
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base">
        {currentImageIndex + 1} / {projectImages.length}
      </div>
    </div>
  );
};

export const LightBoxNew = ({
  projectImages,
  setCurrentImageIndex,
  currentImageIndex,
  setLightboxOpen,
  url,
  alt,
}) => {
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);
  const nextImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => {
        if (!projectImages || projectImages === 0) return 1; // Ensure valid range
        return prevIndex === projectImages ? 1 : prevIndex + 1; // Loop 20 → 1
      });
    },
    [projectImages]
  );

  const prevImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => {
        if (!projectImages || projectImages === 0) return 1; // Ensure valid range
        return prevIndex === 1 ? projectImages : prevIndex - 1; // Loop 1 → 20
      });
    },
    [projectImages]
  );
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center touch-none"
      onClick={closeLightbox}
    >
      <Button
        size="icon"
        variant="outline"
        className="absolute top-4 right-4 p-2 rounded-full transition-colors z-50 touch-manipulation"
        onClick={closeLightbox}
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2  p-2 rounded-full transition-colors z-50 touch-manipulation"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <div className="relative w-full h-full flex items-center justify-center p-4 rounded-xl">
        <img
          src={url}
          alt={alt}
          className="max-w-full max-h-full object-contain animate-fadeIn rounded-xl"
          loading="eager"
        />
      </div>

      <Button
        size="icon"
        variant="secondary"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors z-50 touch-manipulation"
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base">
        {currentImageIndex} / {projectImages}
      </div>
    </div>
  );
};
