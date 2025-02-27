import { ArrowRight, ChevronRight, Layout } from "lucide-react";

const services = [
  {
    title: "Commercial (Fit-Out)",

    category: "Commercial Excellence",

    description:
      "Innovative designs to elevate your business environment gracefully.",

    imageUrl: "/images/commercial-fitout.jpg",

    href: "/services/commercial-fitout",
  },

  {
    title: "Extension",

    category: "Space Enhancement",

    description: "Expand living space with our expertly designed extension.",

    imageUrl: "/images/extension.jpg",

    href: "/services/extension",
  },

  {
    title: "Architectural Design",

    category: "Design Excellence",

    description:
      "Crafting visionary spaces that redefine luxury living through innovative architectural solutions and meticulous attention to detail.",

    imageUrl: "/images/architectural-design.jpg",

    href: "/Services/architectural-design",
  },

  {
    title: "Design and Build",

    category: "Integrated Solutions",

    description:
      "A seamless journey from concept to reality, where every detail is crafted to perfection under one unified vision.",

    imageUrl: "/images/design-build.jpg",

    href: "/Services/build-and-design",
  },

  {
    title: "Loft Conversions",

    category: "Space Innovation",

    description:
      "Transforming overlooked spaces into breathtaking living areas that maximize both functionality and aesthetic appeal.",

    imageUrl: "/images/loft-conversion.jpg",

    href: "/Services/loft-conversions",
  },

  {
    title: "Luxury Renovation",

    category: "Premium Transformation",

    description:
      "Elevating existing spaces with sophisticated design elements and premium materials for an unparalleled living experience.",

    imageUrl: "/images/renovation.jpg",

    href: "/Services/renovations",
  },

  {
    title: "Basement Conversions",

    category: "Underground Luxury",

    description:
      "Creating extraordinary subterranean spaces that blend seamlessly with your home while adding significant value.",

    imageUrl: "/images/basement.jpg",

    href: "/Services/basements",
  },

  {
    title: "New Build",

    category: "Bespoke Creation",

    description:
      "Bringing dreams to life through meticulously planned and expertly executed new build projects that set new standards.",

    imageUrl: "/images/new-build.jpg",

    href: "/Services/new-build",
  },
];
const Services = () => (
  <section className="relative z-10 bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32">
    {/* Background Elements */}

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />

    <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
      {/* Header Section */}

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-red-600/10 px-6 py-2 text-red-600">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600"></span>
          Exceptional Services
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Crafting Excellence in
          <span className="relative ml-2 inline-block text-red-600">
            Construction
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

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl lg:text-2xl">
          Where vision meets craftsmanship, creating spaces that inspire and
          endure through generations.
        </p>
      </div>

      {/* Services Grid */}

      <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
        <PortfolioShowcase />
      </div>

      {/* Bottom CTA */}

      <div className="mt-16 text-center sm:mt-20">
        <a
          href="/services"
          className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25"
        >
          View All Services
          <ArrowRight className="h-5 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>

    {/* Decorative Elements */}

    <div className="absolute -bottom-6 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />

    <div className="absolute bottom-0 left-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
  </section>
);
const ServiceCard = ({
  href,
  imageUrl,
  title,
  category,
  index,
  description,
}) => (
  <a href={href} className="group relative block">
    <div className="relative h-full overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transition-transform duration-300 group-hover:translate-y-2 group-hover:opacity-0">
          <span className="mb-2 inline-block rounded-full bg-red-600/20 px-3 py-1 text-sm backdrop-blur-sm">
            {category}
          </span>
        </div>

        <div className="absolute right-4 md:right-6 top-4 md:top-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <span className="font-mono text-base md:text-lg font-medium text-red-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900">
              {title}
            </h3>

            <p className="mt-3 text-sm md:text-base text-gray-600">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-red-600">
          <span className="text-sm font-semibold">Explore Service</span>

          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </a>
);

const PortfolioShowcase = () => (
  <a href="/portfolio" className="group relative block">
    <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-800">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(#fff 2px, transparent 2px),
    
    linear-gradient(90deg, #fff 2px, transparent 2px)`,

            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative h-full p-6 md:p-8">
        <div className="absolute right-6 md:right-4 top-6 md:top-2 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Layout className="h-6 w-6 md:h-10 md:w-10 text-white" />
        </div>

        <div className="absolute -bottom-4 -right-4 h-24 w-24 md:h-32 md:w-32 rounded-full bg-red-500/20 backdrop-blur-sm" />

        <div className="absolute -left-8 top-1/2 h-20 w-20 md:h-24 md:w-24 -translate-y-1/2 rounded-full bg-red-700/30 backdrop-blur-sm" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Featured Projects
            </span>

            <h3 className="mt-4 md:mt-6 text-2xl md:text-3xl font-bold text-white">
              View Our Portfolio
            </h3>

            <p className="mt-3 md:mt-4 max-w-md text-base md:text-lg text-red-50/90">
              Explore our showcase of completed projects and transformations
              that demonstrate our commitment to excellence.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="flex items-center gap-2 text-white">
              <span className="text-base md:text-lg font-semibold">
                Explore All Projects
              </span>

              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </a>
);

export default Services;
