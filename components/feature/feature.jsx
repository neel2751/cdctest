import { ChevronRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),

      title: "Construction Professionals",

      category: "Expert Team",

      description:
        "Industry-leading professionals committed to delivering excellence in every project phase.",
    },

    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),

      title: "£10M Insurance Coverage",

      category: "Protection",

      description:
        "Comprehensive insurance coverage ensuring complete peace of mind throughout your project.",
    },

    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),

      title: "On-Time Completion",

      category: "Efficiency",

      description:
        "Strict adherence to project timelines with efficient project management systems.",
    },

    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),

      title: "10-Year Warranty",

      category: "Guarantee",

      description:
        "Extensive structural warranty providing long-term protection for your investment.",
    },

    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),

      title: "HSA Compliance",

      category: "Safety",

      description:
        "Full compliance with all health, safety, and environmental regulations.",
    },

    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),

      title: "Client Satisfaction",

      category: "Service",

      description:
        "Dedicated to exceeding expectations with personalized service and support.",
    },
  ];
  return (
    <section className="relative z-10 bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32">
      {/* Background Elements */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-red-600/10 px-4 py-1.5 text-red-600">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600"></span>
            Why Choose Us
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
            Building Trust Through
            <span className="relative ml-2 inline-block text-red-600">
              Excellence
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 Q50,12 100,0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-lg lg:text-xl">
            Delivering exceptional quality and reliability in every project we
            undertake.
          </p>
        </div>

        {/* Features Grid */}

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}

      <div className="absolute -bottom-6 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />

      <div className="absolute bottom-0 left-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
    </section>
  );
};
const FeatureCard = ({ title, description, icon: Icon, category, index }) => (
  <div className="group relative block">
    <div className="relative h-full overflow-hidden rounded-[2rem] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative p-8 sm:p-10">
        <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-red-600" strokeWidth={1.5} />
        </div>

        <div className="mb-6">
          <span className="mb-2 inline-block rounded-full bg-red-600/20 px-4 py-1 text-sm backdrop-blur-sm text-red-600">
            {category}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold leading-tight text-gray-900 sm:text-2xl">
              {title}
            </h3>

            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-red-600">
          <span className="text-sm font-semibold">Learn More</span>

          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </div>
);

export default Features;
