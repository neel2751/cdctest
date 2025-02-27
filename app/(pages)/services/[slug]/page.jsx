"use client";
import React, { useState } from "react";

import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className="relative min-h-[90vh] bg-white overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}

            <div className="space-y-6 max-w-xl animate-fade-in-up">
              <div
                className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full

hover:bg-black/10 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

                <span className="text-sm font-medium">Design Excellence</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold">
                Architectural Design
                <span className="block mt-2 text-red-500 animate-fade-in text-3xl lg:text-4xl">
                  Elevate your space with innovative & design solutions
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed animate-fade-in">
                From conceptual drawings to virtual 3D walkthroughs, we
                transform your vision into reality. Our comprehensive service
                covers planning applications, structural designs, and detailed
                interior-exterior specifications.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#services"
                  className="group bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2

hover:bg-black/90 transition-all duration-300 transform hover:scale-105

active:scale-95 cursor-pointer"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="#consultation"
                  className="group px-6 py-3 rounded-lg border-2 border-black relative

overflow-hidden transition-all duration-300 hover:text-white

transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Free Consultation</span>

                  <div
                    className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100

transition-transform duration-300 origin-left"
                  ></div>
                </a>
              </div>

              {/* Service Steps */}

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">Design Phase</h3>

                  <p className="text-sm text-gray-600">
                    Conceptual drawings & 3D modeling
                  </p>
                </div>

                <div className="space-y-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">Planning</h3>

                  <p className="text-sm text-gray-600">
                    Floor plans & elevations
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}

            <div className="relative h-[600px] hidden lg:block">
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden transition-transform duration-700

transform ${imageLoaded ? "scale-100" : "scale-105"}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                  alt="Modern Architectural Design"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Floating Stats - Animated */}

              <div
                className="absolute -left-8 bottom-12 bg-white p-6 rounded-xl shadow-lg

animate-float cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="space-y-1">
                  <p className="text-3xl font-bold">100%</p>

                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}

        <div
          className="absolute top-20 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-10 opacity-60

animate-pulse-slow"
        />

        <div
          className="absolute bottom-20 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-60

animate-pulse-slow"
        />
      </div>
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}

        <div
          className="absolute top-40 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-10 opacity-60

animate-pulse-slow"
        />

        <div
          className="absolute bottom-40 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-60

animate-pulse-slow"
        />

        <div className="container mx-auto px-6">
          {/* Section 1 */}

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

                <span className="text-sm font-medium">
                  01 - Initial Assessment
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Prior to Starting the Project
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We recommend booking a site survey and feasibility study to
                assess the property's measurements and viability before
                commencing any work on your home. Our in-house architectural
                design team will visit the site, discuss your ideas, and provide
                expert guidance on the optimal design options for your property.
              </p>

              <a
                href="#book-survey"
                className="inline-flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all duration-300"
              >
                Book a Site Survey
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative h-[500px] group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3"
                  alt="Site Survey"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Site Survey & Assessment</p>

                <div className="w-8 h-1 bg-red-500 mt-2"></div>
              </div>
            </div>
          </div>

          {/* Section 2 */}

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[500px] group order-2 lg:order-1">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3"
                  alt="Concept Design"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Concept Development</p>

                <div className="w-8 h-1 bg-red-500 mt-2"></div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

                <span className="text-sm font-medium">02 - Design Phase</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Concept Design Drawings
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                The concept/initial design considers various factors, including
                space, function, context, layout, and economic constraints, and
                is developed through discussions between the client and
                architect. In essence, it helps to ensure that both the client
                and architect have a shared understanding of the project's goals
                and requirements before proceeding with more precise designs as
                part of the architectural design service.
              </p>

              <a
                href="#design-process"
                className="inline-flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all duration-300"
              >
                Learn About Our Process
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 3 */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

                <span className="text-sm font-medium">03 - Visualization</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Architectural 3D Model
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our architectural services include 3D modelling, which enables
                the architect to showcase their work to clients in a vivid and
                memorable manner that resonates with them. Compared to a 2D CAD
                or paper version, a 3D view provides a more straightforward
                approach for clients to comprehend the construction project.
                Additionally, 3D virtual walkthroughs can incorporate movement,
                which adds to the interactive and immersive experience for the
                clients.
              </p>

              <a
                href="#3d-showcase"
                className="inline-flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all duration-300"
              >
                View 3D Showcase
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative h-[500px] group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1614586125858-e695dd97d1b6?ixlib=rb-4.0.3"
                  alt="3D Modeling"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">3D Visualization</p>

                <div className="w-8 h-1 bg-red-500 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
