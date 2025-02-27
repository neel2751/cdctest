"use client";
import { ArrowUpRight, Heart, Lightbulb, Rocket, Shield } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../ui/button";

const ValuesSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".value-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Premium Background Elements */}

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-red-50/30 to-transparent rounded-full opacity-60 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-gray-100/50 to-transparent rounded-full opacity-50 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Section Header */}

        <div className="max-w-3xl mx-auto text-center mb-24 space-y-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Cultural Excellence
          </div>

          <div className="relative">
            <h2 className="text-6xl font-bold tracking-tight mb-6">
              The CDC
              <div className="absolute -right-12 top-0">
                <div className="floating" style={{ animationDelay: "-2s" }}>
                  <div className="bg-white border border-gray-100 rounded-lg p-2 shadow-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-red-500"
                    >
                      <path
                        d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our culture isn't something we keep to ourselves. Our culture is
              baked into every feature of CDC. Because the keys to our success
              are yours, too.
            </p>
          </div>
        </div>

        {/* Premium Values Grid */}

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Trustworthy Card */}

          <div className="value-card group relative bg-white rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>

                <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-gray-900 transition-colors duration-300" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Trustworthy</h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Brings your vision to life with unwavering integrity and
                  meticulous craftsmanship. Transparent communication paves the
                  way for smooth collaboration.
                </p>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-gray-900 to-gray-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Empowerment Card */}

          <div
            className="value-card group relative bg-white rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 border border-gray-100"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                  <Rocket className="w-8 h-8" />
                </div>

                <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors duration-300" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Empowerment</h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  No surprises, just quality. From the first blueprint to the
                  final finishing touch, we deliver exceptional results within
                  your timeline and budget.
                </p>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Considerate Card */}

          <div
            className="value-card group relative bg-white rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 border border-gray-100"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white shadow-lg">
                  <Heart className="w-8 h-8" />
                </div>

                <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-gray-900 transition-colors duration-300" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Considerate</h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Building a brighter future, we weave structures into the
                  fabric of communities, creating a legacy of care for both
                  people and planet.
                </p>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-gray-900 to-gray-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Innovation Card */}

          <div
            className="value-card group relative bg-white rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 border border-gray-100"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                  <Lightbulb className="w-8 h-8" />
                </div>

                <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors duration-300" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  The future of construction is built on fresh ideas. We embrace
                  sustainable materials, futuristic design, and ingenious
                  processes.
                </p>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl transform -skew-y-2"></div>

          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 flex items-center justify-between">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Ready to Build Together?
              </h3>

              <p className="text-gray-400">
                Join our team of visionary builders and creators.
              </p>
            </div>

            <Button className="bg-white text-gray-900 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Meet Our Team
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ValuesSection;
