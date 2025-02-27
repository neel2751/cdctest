import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="relative w-full overflow-hidden px-20">
    {/* Background Image */}

    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        alt="Modern architecture"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/95 via-rose-900/85 to-rose-800/95" />
    </div>

    {/* Content Section */}

    <div className="relative min-h-[200px] py-20">
      {/* Floating Circles */}

      <div className="absolute top-4 left-8">
        <div className="w-24 h-24 rounded-full bg-[#7FD1E3] bg-opacity-90 backdrop-blur-sm animate-float">
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="text-[#0A2518]"
            >
              <path
                fill="currentColor"
                d="M15 4h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-8 8h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm8 0h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM7 4h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-12">
        <div className="w-20 h-20 rounded-full bg-[#FFB17A] bg-opacity-90 backdrop-blur-sm animate-float-delayed">
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-[#0A2518]"
            >
              <path
                fill="currentColor"
                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v5h4v2h-6V9h2z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-24">
        <div className="w-28 h-28 rounded-full bg-[#98E2C6] bg-opacity-90 backdrop-blur-sm animate-float-more-delayed">
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="text-[#0A2518]"
            >
              <path
                fill="currentColor"
                d="M13.5 2a7.5 7.5 0 0 1 7.5 7.5v6a7.5 7.5 0 0 1-7.5 7.5h-3a7.5 7.5 0 0 1-7.5-7.5v-6A7.5 7.5 0 0 1 10.5 2h3zm-3 3a4.5 4.5 0 0 0-4.5 4.5v6a4.5 4.5 0 0 0 4.5 4.5h3a4.5 4.5 0 0 0 4.5-4.5v-6A4.5 4.5 0 0 0 13.5 5h-3z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className="relative container mx-auto px-6 max-w-6xl h-full flex items-center">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Transform your vision into reality with our help.
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            Ready to turn your vision into solid ground? We're more than
            builders, we're partners. Let's collaborate, innovate, and craft a
            space that exceeds your wildest dreams.
          </p>

          <div className="pt-4">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 transform hover:scale-105">
              <span className="relative z-10 flex items-center font-medium">
                Get a free quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export { CTA };
