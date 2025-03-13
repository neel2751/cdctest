"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden p-20 bg-white">
      {/* Background Image with Overlay and Gradient */}
      <div className="border-b">
        <div className="absolute inset-0 z-0 bg-white p-20 rounded-md">
          <video
            src="https://cdc.construction/video/CDC.mp4"
            className="object-cover w-full h-full scale-105 transition-transform duration-1000 hover:scale-100 rounded-2xl"
            autoPlay
            loop
            muted
          />
          {/* <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Modern buildings"
            className="object-cover w-full h-full scale-105 transition-transform hover:scale-100 rounded-2xl"
          /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" /> */}
        </div>
      </div>

      {/* Navigation Bar */}

      {/* Hero Content */}
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
  );
};

export default Hero;
