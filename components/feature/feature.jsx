import {
  BadgeCheck,
  ChevronRight,
  Clock,
  HardHat,
  ShieldCheck,
  Siren,
  ThumbsUp,
  Users,
} from "lucide-react";
import SmallCTA from "../cta/smallCTA";
import Heading from "../header/heading";

const Features = () => {
  const features = [
    {
      icon: Users,

      title: "Construction Professionals",

      category: "Expert Team",

      description:
        "Industry-leading professionals committed to delivering excellence in every project phase.",
    },

    {
      icon: ShieldCheck,

      title: "£10M Insurance Coverage",

      category: "Protection",

      description:
        "Comprehensive insurance coverage ensuring complete peace of mind throughout your project.",
    },

    {
      icon: Clock,

      title: "On-Time Completion",

      category: "Efficiency",

      description:
        "Strict adherence to project timelines with efficient project management systems.",
    },

    {
      icon: BadgeCheck,

      title: "10-Year Warranty",

      category: "Quality",

      description:
        "Extensive structural warranty providing long-term protection for your investment.",
    },

    {
      icon: HardHat,

      title: "HSA Compliance",

      category: "Safety",

      description:
        "Full compliance with all health, safety, and environmental regulations.",
    },

    {
      icon: ThumbsUp,

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
          <SmallCTA Icon={Siren} text={"Why Choose Us?"} />
          {/* <div className="mb-6 inline-flex items-center rounded-full bg-red-600/10 px-4 py-1.5 text-red-600">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600"></span>
            Why Choose Us
          </div> */}
          <Heading title={"Building Trust Through"} subtitle={"Excellence"} />
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-base lg:text-lg">
            Our commitment to excellence is reflected in every aspect of our
            business. We strive to deliver exceptional results, build lasting
            relationships, and make a positive impact on our clients and
            communities.
          </p>
        </div>

        {/* Features Grid */}

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
    <div className="relative h-full overflow-hidden rounded-[1rem] shadow bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative p-8 sm:p-6">
        <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-red-600" strokeWidth={1.5} />
        </div>

        <div className="mb-6">
          <span className="mb-2 inline-block rounded-full bg-red-600/20 py-1 px-2 text-xs backdrop-blur-sm text-red-600">
            {category}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold leading-tight text-gray-900 sm:text-xl">
              {title}
            </h3>

            <p className="mt-4 text-base text-gray-600 sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
