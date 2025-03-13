"use client";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronRight,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Trophy,
} from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-white w-full overflow-x-hidden min-h-min sm:pt-8 pt-4">
      {/* Decorative Background Elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-50 to-transparent" />

        <div className="absolute top-40 -left-48 w-96 h-96 bg-red-50 rounded-full filter blur-3xl opacity-30" />

        <div className="absolute top-20 -right-48 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30" />
      </div>

      {/* Main Content */}

      <div className="relative">
        {/* Hero Content */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column */}

            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
                {/* <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">
                    Award Winning Construction Company
                  </span>

                  <ChevronRight className="h-3 w-3" />
                </div> */}

                <div className="space-y-2 w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.2] pb-1">
                    Transform Your Vision Into Reality
                  </h1>

                  <div className="relative">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent leading-[1.2] tracking-tight pb-3">
                      with Expert Services
                    </h1>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2">
                  Full-service construction solutions dedicated to delivering
                  high-quality residential and commercial projects. From concept
                  to completion, every vision is prioritized to ensure
                  exceptional results
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 rounded-full font-semibold text-base transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-slate-200 text-slate-900 hover:bg-slate-50 px-6 py-5 rounded-full font-semibold text-base transition-all duration-300 hover:translate-y-1"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-2xl mx-auto lg:mx-0">
                <div className="bg-white shadow-lg shadow-slate-100 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-xl group">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="p-2 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                      <Building2 className="h-5 w-5 text-red-600" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Sustainable Design
                      </h3>

                      <p className="text-xs text-slate-500">
                        Eco-friendly solutions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-lg shadow-slate-100 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-xl group">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="p-2 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Quality Assured
                      </h3>

                      <p className="text-xs text-slate-500">
                        ISO 9001 certified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}

            <div className="space-y-4 w-full max-w-2xl mx-auto lg:mx-0">
              {/* Main Project Showcase */}

              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover"
                >
                  <source
                    src="https://cdc.construction/video/CDC.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center lg:text-left">
                  <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                    The CDC
                  </h3>

                  <p className="text-sm text-slate-200">
                    Our latest architectural masterpiece in downtown
                  </p>
                </div>
              </div>

              {/* Achievement Cards */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleStartProject = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewPortfolio = () => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Decorative Elements */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-gradient-to-t from-gray-50 to-transparent opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center py-12 sm:py-16 lg:py-20">
          {/* Left Content */}

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Solid foundations for a{" "}
                <span className="text-[#E12D2D] inline-block transform hover:scale-105 transition-transform duration-300">
                  brighter future
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                We are more than just a construction company. We understand that
                every project is unique, and we work closely with our clients to
                develop a customized plan that meets their specific goals and
                budget.
              </p>
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleStartProject}
                className="group h-12 px-6 bg-gray-900 hover:bg-black text-white rounded-full transition-all duration-300
    
    transform hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <span>Start Your Project</span>

                <ArrowRight className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleViewPortfolio}
                variant="outline"
                className="h-12 px-6 border-2 border-gray-900 text-gray-900 rounded-full
    
    hover:bg-gray-900 hover:text-white transition-all duration-300
    
    transform hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Image */}

          <div className="relative lg:h-[600px] h-[400px] sm:h-[500px]">
            <div
              className="relative h-full w-full rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out
    
    hover:shadow-2xl group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/20
    
    group-hover:opacity-50 transition-opacity duration-500"
              />

              <img
                src="/construction-site.jpg"
                alt="Modern Construction Site"
                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out
    
    ${isHovered ? "scale-110" : "scale-100"}`}
              />

              <div
                className={`absolute inset-0 bg-black/20 transition-opacity duration-500
    
    ${isHovered ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E12D2D]/10 rounded-full blur-2xl" />

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export { HeroSection, AboutHero };
