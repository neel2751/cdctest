import { ArrowUpRight } from "lucide-react";
import React from "react";

const TeamCard = ({ filteredMembers, cardRefs, handleOpenMember }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredMembers.map((member, index) => (
        <div
          key={member.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] group"
          onClick={() => handleOpenMember(member)}
        >
          <div className="aspect-square relative overflow-hidden">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="object-cover member-image"
            />
            <div className="text-red-600 absolute group-hover:top-4 -top-8 right-4 transition-all duration-300 bg-white p-2 rounded-full">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          <div className="px-4 pb-4 bg-white relative">
            <div className="flex justify-between items-start">
              <div className="w-64">
                <h3 className="font-semibold tracking-tight text-pretty text-xl group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm whitespace-nowrap truncate">
                  {member.role}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <span className="inline-block bg-red-600/10 text-red-600 text-xs px-2 py-1 rounded-full">
                {member.department}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
