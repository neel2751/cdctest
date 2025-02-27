"use client";
import { Building2, ThumbsUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

const visionFeatures = [
  {
    icon: Building2,

    title: "High quality Co-Living spaces",

    description:
      "Our fully furnished spaces are designed and purpose-built with Co-Living in mind, featuring high-end finishes and amenities that go far beyond traditional apartment buildings.",
  },

  {
    icon: Users,

    title: "Fostering vibrant communities",

    description:
      "Our passion is bringing people together. Beyond creating beautiful spaces, we provide shared experiences.",
  },

  {
    icon: ThumbsUp,

    title: "Simple and all-inclusive",

    description:
      "We worry about the details so that our residents don't have to. From our online application process to simple, all-inclusive billing we aim to make the living experience as effortless as possible.",
  },
];

const VisionSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),

      { threshold: 0.1 }
    );

    const section = document.getElementById("vision-section");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision-section"
      className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}

      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}

        <div
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000
    
    ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
            Our vision
          </h2>

          <p className="text-base sm:text-lg text-black/70 leading-relaxed px-4 sm:px-0">
            For as long as there have been cities, the public square has been a
            fundamental part of the urban landscape - an open, approachable
            space to meet and engage with friends and neighbours. Space aims to
            capture this spirit of bringing people together in an exciting,
            welcoming environment.
          </p>
        </div>

        {/* Features Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {visionFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-start h-full p-4 sm:p-6">
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-red-50">
                  <feature.icon
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-4">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
