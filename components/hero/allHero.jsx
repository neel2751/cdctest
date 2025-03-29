"use client";

import { usePathname } from "next/navigation";
import { ALLHEROSECTION, services } from "@/data/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const AllHero = () => {
  const pathName = usePathname();
  const data = ALLHEROSECTION.find(({ slug }) => slug === pathName);
  return <HeroComponents {...data} />;
};

export const AllService = () => {
  const pathName = usePathname();
  const data = services.find((item) => item?.href === pathName);
  return (
    <HeroComponents
      imgSrc={data?.imageUrl}
      title={data?.detailTitle}
      description={data?.detailDescription}
    />
  );
};

export default AllHero;

const HeroComponents = ({ imgSrc, title, description, ctaButtons }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlays */}

      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt="Modern Architecture Background"
          className="w-full h-full object-cover"
        />

        {/* Lighter overlay for dark text readability */}

        <div className="absolute inset-0 bg-white/60"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent"></div>
      </div>

      {/* Content Container */}

      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl backdrop-blur-sm bg-white/30 p-8 rounded-2xl text-center">
          {/* Main Content - centered */}

          <div className="relative">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <div dangerouslySetInnerHTML={{ __html: title }}></div>
            </h1>

            <p className="text-xl text-gray-800 mb-8 leading-relaxed mx-auto max-w-2xl">
              {description}
            </p>

            {/* CTA Buttons - centered */}

            <div className="flex flex-wrap gap-4 justify-center">
              {/* Make Map with button to take action with classname */}
              {ctaButtons &&
                ctaButtons?.map((item, index) => (
                  <Button
                    asChild
                    key={index}
                    variant={index === 0 ? "primary" : "outline"}
                    className={cn(
                      `group inline-flex items-center h-12 text-base rounded-full px-6 ${
                        index === 0
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "text-red-600 border-2 border-red-600 hover:bg-red-700 hover:text-white"
                      }  transition-all duration-300  shadow-lg hover:shadow-xl`,
                      item?.className
                    )}
                  >
                    <Link href={item?.link}>
                      {item?.title}
                      <item.icon />
                    </Link>
                  </Button>
                ))}
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-red-100/30 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>
      </div>
      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
  );
};

export const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070"
          alt="Modern architectural background"
          className="object-cover object-center w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80" />
      </div>

      {/* Content */}

      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Icon */}

        <div className="mb-6">
          <div className="bg-red-500/10 p-4 rounded-lg inline-block">
            <svg
              className="w-8 h-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}

        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Solid foundations for a
            <div className="text-red-500">brighter future</div>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We are more than just a construction company. We understand that
            every project is unique, and we work closely with our clients to
            develop a customized plan that meets their specific goals and
            budget.
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300">
              Start Your Project
              <span className="ml-2">→</span>
            </button>

            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
