"use client";
import { Heart, Lightbulb, Rocket, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Shield,

    title: "Trustworthy",

    description:
      "Brings your vision to life with unwavering integrity and meticulous craftsmanship. Transparent communication paves the way for smooth collaboration, while exceeding expectations becomes our standard.",

    color: "from-blue-500 to-indigo-600",

    shadowColor: "shadow-blue-500/20",
  },

  {
    icon: Rocket,

    title: "Empowerment",

    description:
      "No surprises, just quality. From the first blueprint to the final finishing touch, we deliver exceptional results within your timeline and budget. Experience the CDC difference - reliable construction, guaranteed.",

    color: "from-violet-500 to-purple-600",

    shadowColor: "shadow-violet-500/20",
  },

  {
    icon: Heart,

    title: "Considerate",

    description:
      "Building a brighter future. At CDC, we weave structures into the fabric of communities, but a legacy of care for both people and planet. Join us, and let's build a world where sustainability meets stunning design.",

    color: "from-rose-500 to-pink-600",

    shadowColor: "shadow-rose-500/20",
  },

  {
    icon: Lightbulb,

    title: "Innovation",

    description:
      "The future of construction is built on fresh ideas. We're not afraid to break the mold, embracing sustainable materials, futuristic design, and ingenious processes. Partner with us to unleash the potential of your project and leave the ordinary behind.",

    color: "from-amber-500 to-orange-600",

    shadowColor: "shadow-amber-500/20",
  },
];

const EnhancedAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),

      { threshold: 0.1 }
    );

    const section = document.getElementById("about-section");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="relative py-32 bg-white">
      {/* Subtle Grid Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}

        <div
          className={`max-w-3xl mx-auto text-center mb-24 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="inline-flex items-center justify-center px-8 py-2.5 mb-8 border border-black/5
    
    rounded-full text-sm font-medium bg-white shadow-lg shadow-black/[0.03] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-3" />

            <span className="text-black font-semibold tracking-wide uppercase text-[13px]">
              Our Culture
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-black">The</span>

            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {" "}
              CDC
            </span>
          </h2>

          <p className="text-xl text-black/75 leading-relaxed font-light">
            Our culture isn't something we keep to ourselves. Our culture is
            baked into every feature of CDC. Because the keys to our success are
            yours, too.
          </p>
        </div>

        {/* Main Content Grid */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section - Left Side (Desktop) */}

          <div className="relative hidden lg:block h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop"
                alt="Modern construction site with workers"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />

              {/* Premium Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Content Overlay */}

            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <h3 className="text-2xl font-bold mb-2">Building Tomorrow</h3>

              <p className="text-white/90 font-light">
                Excellence in every detail, innovation in every project
              </p>
            </div>
          </div>

          {/* Features Section - Right Side */}

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl transition-all duration-500
    
    ${
      index === activeIndex
        ? "bg-white shadow-2xl scale-[1.02]"
        : "hover:bg-white hover:shadow-xl"
    }
    
    ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
    
    `}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color}
    
    ${feature.shadowColor} shadow-lg flex items-center justify-center transform
    
    group-hover:scale-110 transition-all duration-500`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-3">
                        {feature.title}
                      </h3>

                      <p className="text-black/70 leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Hover Effects */}

                <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}

        <div
          className={`mt-20 text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            className="group relative inline-flex items-center px-8 py-4 text-lg font-medium
    
    text-white bg-black rounded-full overflow-hidden shadow-xl
    
    hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500"
          >
            <span className="relative z-10">Meet Our Team</span>

            <div
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500
    
    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;
