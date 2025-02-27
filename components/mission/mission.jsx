import { Building2, Sparkles, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements - Made responsive */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-50 via-white to-transparent"></div>

        <div className="absolute right-0 bottom-0 w-full md:w-[50%] lg:w-[500px] aspect-square bg-gradient-to-tl from-gray-50 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vision Header - Improved text scaling */}

        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 sm:mb-6">
            Our Vision
          </span>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-4">
            For as long as there have been cities, the public square has been a
            fundamental part of the urban landscape - an open, approachable
            space to meet and engage with friends and neighbours. Space aims to
            capture this spirit of bringing people together in an exciting,
            welcoming environment.
          </p>
        </div>

        {/* Features Grid - Improved responsive layout */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Co-Living Spaces Card */}

          <div className="group relative p-6 sm:p-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

            <div className="relative space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold">
                High Quality Co-Living Spaces
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our fully furnished spaces are designed and purpose-built with
                Co-Living in mind, featuring high-end finishes and amenities
                that go far beyond traditional apartment buildings.
              </p>
            </div>
          </div>

          {/* Vibrant Communities Card */}

          <div className="group relative p-6 sm:p-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

            <div className="relative space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold">
                Fostering Vibrant Communities
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our passion is bringing people together. Beyond creating
                beautiful spaces, we provide shared experiences and foster
                meaningful connections.
              </p>
            </div>
          </div>

          {/* Simple and All-inclusive Card */}

          <div className="group relative p-6 sm:p-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

            <div className="relative space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold">
                Simple and All-inclusive
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We worry about the details so that our residents don't have to.
                From our online application process to simple, all-inclusive
                billing we aim to make the living experience as effortless as
                possible.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section - Improved responsive design */}

        <div className="mt-16 sm:mt-20 md:mt-24 bg-gradient-to-br from-red-600 to-red-700 rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                500+
              </div>

              <div className="text-sm sm:text-base text-red-100">
                Co-living Spaces
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                12
              </div>

              <div className="text-sm sm:text-base text-red-100">
                Global Locations
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                98%
              </div>

              <div className="text-sm sm:text-base text-red-100">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Made responsive and optimized */}

        <div className="hidden md:block absolute left-0 top-1/2 w-16 sm:w-20 lg:w-24 aspect-square -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full border-4 border-red-100 animate-[spin_8s_linear_infinite]"></div>
        </div>

        <div className="absolute right-0 bottom-0 w-32 sm:w-40 lg:w-48 aspect-square translate-x-1/4 translate-y-1/4 opacity-10">
          <div className="w-full h-full bg-red-600 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
