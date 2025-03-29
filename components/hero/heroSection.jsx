import { ArrowRight, Building2, Shield } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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
                <div className="space-y-2 w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.2] pb-1 group transition-all duration-300 delay-100 cursor-pointer">
                    Transform Your Vision Into Reality{" "}
                    <span className="text-pretty tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent leading-[1.2] pb-3">
                      with Expert Services
                    </span>
                  </h1>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2">
                  Full-service construction solutions dedicated to delivering
                  high-quality residential and commercial projects. From concept
                  to completion, every vision is prioritized to ensure
                  exceptional results
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-full font-medium text-base transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
                >
                  <Link href="/contactus">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-600 px-6 py-5 rounded-full font-semibold text-base transition-all duration-300 hover:translate-y-1"
                >
                  {/* <Link href="/aboutus">Learn More</Link> */}
                  <Link href="/projects">View Portfolio</Link>
                  {/* View Portfolio */}
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
                        Eco-friendly materials and energy-efficient solutions
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
                        High-quality materials and craftsmanship
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
const ContactUsHero = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-[url('/luxury-architecture.jpg')] bg-cover bg-center bg-gradientdownred"
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" /> */}
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Get in Touch With Our Team
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
            Have a question or need assistance? Our friendly team is always
            happy to help. Reach out to us and get the help you need quickly and
            easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="tel:020-8004-3327"
              className="w-full sm:w-auto bg-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium
hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2
group shadow-lg shadow-red-500/25"
            >
              <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call Us Now
            </a>
            <a
              href="mailto:info@cdc.construction"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 md:py-4 rounded-full
font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2
border border-white/20"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamCard = () => {
  return (
    <div className="bg-gray-950 px-8 py-16">
      <div className="mx-auto flex max-w-md flex-col gap-y-10">
        <div className="rounded-3xl bg-white/15 p-3 outline -outline-offset-1 outline-white/25">
          <img
            className="aspect-5/6 rounded-[12px] bg-gray-800 object-cover shadow-2xl outline -outline-offset-1 outline-white/10"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
        <figure className="relative isolate pt-6">
          <svg
            viewBox="0 0 162 128"
            fill="none"
            aria-hidden="true"
            className="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
          >
            <path
              id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
              d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
            />
            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
          </svg>
          <blockquote className="text-xl/8 font-semibold text-white">
            <p>
              Gravida quam mi erat tortor neque molestie. Auctor aliquet at
              porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
              posuere. Nunc eu scelerisque interdum eget tellus non nibh
              scelerisque bibendum.
            </p>
          </blockquote>
          <figcaption className="mt-8 text-base">
            <div className="font-semibold text-white">Judith Black</div>
            <div className="mt-1 text-gray-400">CEO of Workcation</div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export { HeroSection, TeamCard };
