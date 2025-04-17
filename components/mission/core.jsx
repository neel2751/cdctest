import { Medal } from "lucide-react";
import React from "react";
import SmallCTA from "../cta/smallCTA";

const CoreData = [
  {
    id: 1,
    title: "integrity",
    description:
      "We are committed to transparency and honesty in all our dealings. We believe in doing the right thing, even when it's hard.",
    imgUrl:
      "https://res.cloudinary.com/drcjzx0sw/image/upload/v1742821303/imgq_tb7hy2.webp",
  },
  {
    id: 2,
    title: "Collaboration",
    description:
      "Working together with our clients to understand requirment and achieve goals to the best of our abilities.",
    imgUrl:
      "https://notioly.com/wp-content/uploads/2025/02/511.Supporting-The-World.png",
  },
  {
    id: 3,
    title: "Professionalism",
    description:
      " We are committed to providing a quality and professional service that meets the needs of our customers.",
    imgUrl:
      "https://notioly.com/wp-content/uploads/2025/01/494.A-Break-In-Good-Company.png",
  },
];

const Core = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-500/5 via-red-500/5 to-transparent" />
      <div className=" relative container mx-auto">
        <SmallCTA Icon={Medal} text={" CORE CAPABILITIES"} />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty -mt-5">
          Exceptional Service in
          <span className="relative ml-2 text-red-600">
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
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col hover:border-red-600 hover:border hover:rounded-xl group">
            {/* <ArrowRight className="h-auto w-4" /> */}
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742815062/Group_10834_yfksqv.png"
              alt="icon"
              className="flex size-40 shrink-0 items-center justify-center w-full object-cover rounded-t-xl"
            />
            <div className="p-6 relative border-x border-b bg-white rounded-b-xl group-hover:border-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_110%)]" />

              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium group-hover:text-red-600">
                  Expertise
                </h3>
              </div>
              <p className="text-muted-foreground">
                An in depth understanding of the London construction industry
                across a wide range of project types and sectors.
              </p>
            </div>
          </div>
          <div className="flex flex-col hover:border-red-600 hover:border hover:rounded-xl group">
            {/* <ArrowRight className="h-auto w-4" /> */}
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742817803/Group_108372_i1wswz.png"
              alt="icon"
              className="flex size-40 shrink-0 items-center justify-center w-full object-cover rounded-t-xl"
            />
            <div className="p-6 relative border-x border-b bg-white rounded-b-xl group-hover:border-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_110%)]" />

              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium group-hover:text-red-600">
                  Innovation
                </h3>
              </div>
              <p className="text-muted-foreground">
                We 're constantly pushing the boundaries of what's possible in
                construction, always looking for new and better ways to deliver.
                {/* our cutting-edge solutions that evolve with client needs. */}
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:col-span-2 md:grid-cols-3">
            {CoreData?.map((item) => (
              <CoreCard
                key={item?.id}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;

const CoreCard = ({ title, description, imgUrl }) => {
  return (
    <div className="grid grid-cols-1 rounded-2xl border bg-white shadow-sm relative hover:border-red-400 group">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_10%_at_80%_10%,#000_40%,transparent_110%)]" />

      <div className="p-6">
        <p className="text-md my-4 font-semibold text-pretty group-hover:text-red-600">
          {title}
        </p>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-auto flex min-h-[200px] justify-center rounded-b-2xl">
        <div className="h-[200px] w-full">
          <img
            src={imgUrl}
            alt="placeholder"
            className="h-full w-full rounded-b-2xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};
