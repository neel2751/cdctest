"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Building,
  Clock,
  Maximize,
  ArrowLeft,
} from "lucide-react";
import { PORTFOLIO } from "@/data/data";
import { LightBoxNew } from "../gallary/lightBox";

export default function ProjectDetailNew({ slug }) {
  const projectData = PORTFOLIO.find(({ link }) => link === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm sm:text-sm">Back to Projects</span>
          </Link>
        </div>
      </nav>
      {/* Project Header */}
      <div className="">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {projectData?.title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-red-500" />
                  {projectData?.location}
                </div>
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-red-500" />
                  {projectData?.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={
              `https://cdc.construction/images/projects/${projectData.images_link}/${projectData.image}` ||
              "/placeholder.svg"
            }
            alt={projectData?.title}
            className="object-cover"
          />
          <button
            onClick={() => openLightbox(1)}
            className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
            aria-label="View full-size image"
          >
            <Maximize className="h-5 w-5" />
          </button>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 mb-6">{projectData?.description}</p>

            <div className="whitespace-pre-line text-gray-700">
              {projectData?.longDescription}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Project Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="h-5 w-5 text-red-500" />
                  Category
                </div>
                <div className="font-medium">{projectData?.category}</div>
              </div>
              <div className="flex justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-red-500" />
                  Location
                </div>
                <div className="font-medium">{projectData?.location}</div>
              </div>
              <div className="flex justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-red-500" />
                  Duration
                </div>
                <div className="font-medium">
                  {projectData?.duration || "On-going"}
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-red-500" />
                  Completion
                </div>
                <div className="font-medium">
                  {projectData?.date || "Running"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {Array.from({ length: projectData?.images }).map((_, index) => {
            const url = `https://cdc.construction/images/projects/${
              projectData?.images_link
            }/${index + 1}.jpg`;
            return (
              <LazyImage
                url={url}
                index={index}
                key={index}
                openLightbox={openLightbox}
                alt={`${projectData?.title} Image ${index + 2}`}
              />
            );
          })}
        </div>

        {/* Related Projects */}
        {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Related Projects
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Related Projects */}
        </div>
      </div>

      {/* Full-screen Image Viewer */}
      {lightboxOpen && (
        <LightBoxNew
          projectImages={projectData.images}
          url={`https://cdc.construction/images/projects/${projectData?.images_link}/${currentImageIndex}.jpg`}
          alt={projectData?.title}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          setLightboxOpen={setLightboxOpen}
        />
      )}
    </div>
  );
}

const LazyImage = ({ url, alt, index, openLightbox }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect(); // Load only once, then stop observing
        }
      },
      { threshold: 1.0 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="animate-spin w-6 h-6 border-2 border-t-transparent border-gray-600 rounded-full"></span>
        </div>
      )}
      <div
        key={index}
        className="relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer group"
        onClick={() => openLightbox(index + 1)}
      >
        <picture>
          <source
            srcSet={`${url}?width=100 100w, ${url}?width=200 200w, ${url}?width=400 400w, ${url}?width=800 800w, ${url}?width=1200 1200w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            type="image/webp"
          />
          <source
            srcSet={`${url}?width=100 100w, ${url}?width=200 200w, ${url}?width=400 400w, ${url}?width=800 800w, ${url}?width=1200 1200w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            type="image/jpeg"
          />
          <img
            ref={imgRef}
            data-src={url}
            src={url}
            loading="lazy"
            srcSet={`${url}?width=100 100w, ${url}?width=200 200w, ${url}?width=480 480w, ${url}?width=800 800w, ${url}?width=1200 1200w`}
            sizes="(max-width: 600px) 480px, (max-width:1200px) 800px, 1200px"
            alt={alt}
            className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-square"
          />
        </picture>
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Maximize className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};
