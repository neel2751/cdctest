import React from "react";
import SmallCTA from "../cta/smallCTA";
import { Medal } from "lucide-react";

const SECTORS = [
  {
    id: 1,
    name: "Retail",
    icon: "/images/sector/retail.svg",
  },
  {
    id: 2,
    name: "Hospitality",
    icon: "/images/sector/hospitality.svg",
  },
  {
    id: 3,
    name: "Office",
    icon: "/images/sector/office.svg",
  },
  {
    id: 4,
    name: "Education",
    icon: "/images/sector/education.svg",
  },
  {
    id: 5,
    name: "Residentail",
    icon: "/images/sector/residentail.svg",
  },
  {
    id: 6,
    name: "Automotive",
    icon: "/images/sector/automotive.svg",
  },
  {
    id: 7,
    name: "Healthcare",
    icon: "/images/sector/healthcare.svg",
  },
  {
    id: 8,
    name: "Interior",
    icon: "/images/sector/interior.svg",
  },
  {
    id: 9,
    name: "Design",
    icon: "/images/sector/design.svg",
  },
];

const Sector = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
        <SmallCTA Icon={Medal} text={" Discover our sectors"} />
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty -mt-5">
          We serve various
          <span className="relative ml-2 text-red-600">
            Sectors
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
        <div className="my-20"></div>
        <div className="mt-16 grid w-full grid-cols-2 gap-px bg-red-500 md:grid-cols-3">
          {SECTORS.map((data) => (
            <div
              key={data?.id}
              className="flex w-full flex-col items-center justify-center gap-6 bg-white px-3 py-4 md:gap-8 md:px-6 md:py-8"
            >
              <div className="flex size-20 items-center justify-center rounded-xl border border-red-100 bg-white drop-shadow-lg p-3">
                <img src={data?.icon} alt={data?.name} />
              </div>
              <h2 className="text-lg text-pretty font-medium text-neutral-900">
                {data?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sector;
