import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const GridCard = ({ link, smallTitle, title, description, button, Icon }) => {
  return (
    <Link href={link} className="group relative block">
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
            <Icon className="h-6 w-6 md:h-10 md:w-10 text-white" />
          </div>

          <div className="absolute -bottom-4 -right-4 h-24 w-24 md:h-32 md:w-32 rounded-full bg-red-500/20 backdrop-blur-sm" />

          <div className="absolute -left-8 top-1/2 h-20 w-20 md:h-24 md:w-24 -translate-y-1/2 rounded-full bg-red-700/30 backdrop-blur-sm" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                {smallTitle}
              </span>

              <h3 className="mt-4 md:mt-6 text-2xl md:text-3xl font-bold text-white">
                {title}
              </h3>

              <p className="mt-3 md:mt-4 max-w-md text-base md:text-lg text-red-50/90">
                {description}
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <div className="flex items-center gap-2 text-white">
                <span className="text-base md:text-lg font-semibold">
                  {button}
                </span>

                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default GridCard;
