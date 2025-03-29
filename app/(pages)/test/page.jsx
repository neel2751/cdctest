"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Gallery from "@/components/gallary/gallery";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const projectImages = [
    {
      id: 1,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "Modern kitchen overview",
    },
    {
      id: 2,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      alt: "Living room design",
    },
    {
      id: 3,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      alt: "Kitchen details",
    },
    {
      id: 4,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      alt: "Bathroom design",
    },
    {
      id: 5,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      alt: "Exterior view",
    },
    {
      id: 6,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      alt: "Exterior view",
    },
    {
      id: 7,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      alt: "Exterior view",
    },
    {
      id: 8,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      alt: "Exterior view",
    },
    {
      id: 9,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      alt: "Exterior view",
    },
    {
      id: 10,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      alt: "Exterior view",
    },
    {
      id: 11,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      alt: "Exterior view",
    },
    {
      id: 12,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      alt: "Exterior view",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden p-20 bg-white">
        {/* Background Image with Overlay and Gradient */}
        <div className="border-b">
          <div className="absolute inset-0 p-20 rounded-md">
            {/* <video
            src="https://demo.awaikenthemes.com/assets/videos/builtup-video.mp4"
            className="object-cover w-full h-full scale-105 transition-transform duration-1000 hover:scale-100 rounded-2xl"
            autoPlay
            loop
            muted
          /> */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="Modern buildings"
              className="object-cover w-full h-full scale-105 transition-transform hover:scale-100 rounded-2xl"
            />
          </div>
          <div className="absolute bg-black bg-gradient-to-b  from-black/70 via-black/50 to-black/70 h-full max-w-max" />
        </div>

        {/* Navigation Bar */}

        {/* Hero Content */}
        {/* <div className="absolute bg-black h-full w-full opacity-50"></div> */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="max-w-4xl mx-auto text-center px-4 space-y-8">
            <div
              className={`text-yellow-500 mb-4 tracking-wider font-medium transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              WELCOME TO BUILTUP
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Building dreams with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
                {" "}
                precision and excellence
              </span>
            </h1>

            <p
              className={`text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto transition-all duration-700 ease-out delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              We specialize in turning visions into reality with exceptional
              craftsmanship and meticulous attention to detail. With years of
              experience and a commitment to quality.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="group bg-yellow-500 text-black px-8 py-3 rounded-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-0.5 flex items-center gap-2">
                Get Started
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <button className="group border-2 border-white text-white px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-black transform hover:-translate-y-0.5 flex items-center gap-2">
                View Projects
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-all duration-700 ease-out delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ChevronDown size={24} className="animate-bounce opacity-80" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-10">
        <Gallery projectImages={projectImages} />
      </div>
    </>
  );
};

export default Hero;
