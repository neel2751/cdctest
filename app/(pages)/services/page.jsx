"use client";

import React from "react";

import {
  Building2,
  Ruler,
  Home,
  Hammer,
  Layers,
  PlusCircle,
  Briefcase,
  Wrench,
  ChevronRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Ruler />,

      title: "Architectural Design",

      description: "Elevate your space with innovative & design solutions.",

      category: "Design",

      href: "/services/architectural-design",
    },

    {
      icon: <Building2 />,

      title: "Design and Build",

      description: "We offer Design service to customize your new property.",

      category: "Construction",

      href: "/services/design-and-build",
    },

    {
      icon: <Home />,

      title: "Loft Conversions",

      description:
        "Transform space with stylish and functional loft conversion.",

      category: "Conversion",

      href: "/services/loft-conversions",
    },

    {
      icon: <Hammer />,

      title: "Renovation",

      description: "Revitalize your space with our expert touch in Renovation.",

      category: "Renovation",

      href: "/services/renovation",
    },

    {
      icon: <Layers />,

      title: "Basement Conversions",

      description: "Basements designed for style with functionality.",

      category: "Conversion",

      href: "/services/basement-conversions",
    },

    {
      icon: <PlusCircle />,

      title: "New Build",

      description: "Building from scratch with precision and creativity.",

      category: "Construction",

      href: "/services/new-build",
    },

    {
      icon: <Wrench />,

      title: "Extension",

      description: "Expand living space with our expertly designed extension.",

      category: "Construction",

      href: "/services/extension",
    },

    {
      icon: <Briefcase />,

      title: "Commercial (Fit-Out)",

      description:
        "Innovative designs to elevate your business environment gracefully.",

      category: "Commercial",

      href: "/services/commercial",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorative Elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600 tracking-wider uppercase px-4">
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>

          <p className="text-lg text-gray-600">
            Discover how we can transform your space with our comprehensive
            range of premium services.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              href={service.href}
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden"
            >
              {/* Service Category Tag */}

              <span className="absolute top-4 right-4 text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {service.category}
              </span>

              {/* Icon Container */}

              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white w-7 h-7">{service.icon}</div>
                </div>

                <div className="absolute -inset-2 bg-red-600/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>

              {/* Content */}

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Learn More Link */}

              <div className="mt-6 flex items-center text-sm font-medium text-red-600 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover Effects */}

              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 rounded-b-2xl"></div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Looking for a custom solution? We're here to help.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
