import { services } from "@/data/data";
import {
  ArrowRight,
  ChevronRight,
  HardHat,
  Layout,
  Telescope,
} from "lucide-react";
import Link from "next/link";
import SmallCTA from "../cta/smallCTA";
import GridCard from "../general/gridCard";
import { Button } from "../ui/button";
import Heading from "../header/heading";

const Services = () => (
  <section className="relative z-10 bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32">
    {/* Background Elements */}

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />

    <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
      {/* Header Section */}

      <div className="relative mx-auto max-w-3xl text-center">
        <SmallCTA Icon={HardHat} text={"Explore our services"} />
        <Heading title={"Exceptional Service in"} subtitle={"Construction"} />

        {/* <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-lg lg:text-xl"> */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-base lg:text-lg">
          At CDC, we pride ourselves on delivering exceptional services that
          exceed expectations. Our team of experts is dedicated to providing
          top-notch solutions that meet the unique needs of each project.
          {/* Where vision meets craftsmanship, creating spaces that inspire and
          endure through generations. */}
        </p>
      </div>

      {/* Services Grid */}

      <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
        <GridCard
          link={"/projects"}
          Icon={Layout}
          smallTitle={"Featured Projects"}
          title={"View Our Portfolio"}
          description={
            "Explore our showcase of completed projects and transformations that demonstrate our commitment to excellence."
          }
          button={"Explore All Projects"}
        />
      </div>

      {/* Bottom CTA */}

      <div className="mt-16 text-center sm:mt-20">
        <Button
          asChild
          className="bg-red-600 group rounded-full h-12 text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 hover:scale-105"
        >
          <Link href="/services">
            View All Services
            <ArrowRight className="h-5 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
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
  <Link href={`/services/${href}`} className="group relative block">
    <div className="relative h-full overflow-hidden rounded-2xl shadow bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
          title={title}
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
            <h3 className="text-lg md:text-xl font-semibold leading-tight text-gray-900">
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
  </Link>
);

export default Services;
