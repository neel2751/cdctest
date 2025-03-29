import { services } from "@/data/data";
import { ChevronRight, Telescope } from "lucide-react";
import Link from "next/link";
import React from "react";
import GridCard from "../general/gridCard";
import SmallCTA from "../cta/smallCTA";

const ServicePage = () => {
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
          <SmallCTA Icon={Telescope} text="Our Services" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-xl mx-auto">
            We Offer a Wide Range of{" "}
            <span className="text-red-600">Services</span>
          </h2>

          <p className="text-lg text-gray-600">
            Our team is dedicated to providing top-notch services to our
            clients. We offer a wide range of services that cater to different
            needs and industries.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={`services/${service.href}`}
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer overflow-hidden h-[400px]"
            >
              {/* Image Container with Overlay */}

              <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* Image */}

                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${service.imageUrl})`,
                    }}
                  />

                  {/* Gradient Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content Container */}

              <div className="relative h-full p-8 flex flex-col justify-end">
                {/* Service Category Tag */}

                <span className="absolute top-4 right-4 text-xs font-medium bg-white/10 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                  {service.category}
                </span>

                {/* Icon Container */}

                <div className="relative mb-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <div className="text-white w-6 h-6">
                      <img src={service.icon} alt={service.name} />
                    </div>
                  </div>
                </div>

                {/* Content */}

                <div className="space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}

                <div className="mt-6 flex items-center text-sm font-medium text-red-400 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom Highlight */}

              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-red-700 transition-all duration-500"></div>
            </Link>
          ))}
          <GridCard
            link={"/contactus"}
            Icon={Telescope}
            smallTitle={"Get in Touch"}
            title={"Contact Us"}
            description={
              "Looking for a custom solution or have a question? We'd love to hear from you."
            }
            button={" Get in Touch"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
