"use client";
import { alternatingChunks } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { useState, useCallback } from "react";
import { LightBox } from "./lightBox";

const Gallery = ({ projectImages }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  }, []);

  const chunkImage = alternatingChunks(projectImages);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {chunkImage.map((row, index) => (
          <div key={index} className="grid gap-4">
            {row.map((item, idx) => (
              <div key={idx} className="group relative">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item?.url}
                  alt={item?.alt}
                  width="232"
                  height={item?.height}
                />
                <div
                  className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition cursor-pointer touch-manipulation"
                  onClick={() => openLightbox(item.id - 1)}
                >
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <Search className="size-3" />
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <LightBox
          closeLightbox={closeLightbox}
          nextImage={nextImage}
          prevImage={prevImage}
          projectImages={projectImages}
          currentImageIndex={currentImageIndex}
        />
      )}
    </>
  );
};

export default Gallery;
