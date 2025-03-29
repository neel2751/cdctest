"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ArrowUpRight, Users } from "lucide-react";
import { TEAMMEMBER } from "@/data/data";
import TeamCard from "../team/team-card";
import ProjectEmpty from "../projects/project-empty";

// Get unique departments for filter
const departments = [
  "All",
  ...new Set(TEAMMEMBER.map((member) => member.department)),
];

export default function TeamSectionNew() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState("All");
  const cardRefs = useRef([]);

  const filteredMembers =
    filter === "All"
      ? TEAMMEMBER
      : TEAMMEMBER.filter((member) => member.department === filter);

  const handleOpenMember = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  const handleNext = () => {
    if (!selectedMember) return;

    const currentIndex = filteredMembers.findIndex(
      (m) => m.id === selectedMember.id
    );
    const nextIndex = (currentIndex + 1) % filteredMembers.length;
    setSelectedMember(filteredMembers[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedMember) return;

    const currentIndex = filteredMembers.findIndex(
      (m) => m.id === selectedMember.id
    );
    const previousIndex =
      (currentIndex - 1 + filteredMembers.length) % filteredMembers.length;
    setSelectedMember(filteredMembers[previousIndex]);
  };

  // Reset card refs when filtered members change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, filteredMembers.length);
  }, [filteredMembers]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          {/* Meet the talented individuals who make our company exceptional. Each
          member brings unique skills and perspectives to our team. */}
          Our diverse team of professionals brings together expertise from
          various disciplines to deliver exceptional results for every project.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {departments.map((department) => (
          <Button
            key={department}
            variant={filter === department ? "default" : "outline"}
            onClick={() => setFilter(department)}
            className={`rounded-full transition-all duration-300 ${
              filter === department
                ? "bg-red-600 text-white"
                : "hover:border-red-600 hover:text-red-600"
            }`}
          >
            {department}
          </Button>
        ))}
      </div>

      {/* Team grid */}
      <TeamCard
        filteredMembers={filteredMembers}
        cardRefs={cardRefs}
        handleOpenMember={handleOpenMember}
      />

      {/* Empty state if no results */}
      {filteredMembers.length === 0 && (
        <ProjectEmpty
          Icon={Users}
          title={"No team members found"}
          desc={"Try searching for a different department"}
        />
      )}

      {/* Member detail dialog */}
      <Dialog open={!!selectedMember} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-3xl bg-white">
          {selectedMember && (
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="aspect-square relative rounded-xl overflow-hidden border-4">
                    <img
                      src={selectedMember?.image}
                      alt={selectedMember?.name}
                      className="object-cover aspect-square"
                    />
                  </div>
                </div>
                <div>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-neutral-800 text-pretty">
                      {selectedMember?.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mb-4 flex items-center gap-2">
                    <h3 className="text-sm text-red-800">
                      {selectedMember?.role}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {selectedMember?.bio}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {selectedMember?.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-red-600 text-xs px-2 py-1 rounded-full border border-red-600/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-6 sticky">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous team member</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next team member</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {departments.map((department) => (
        <Button
          key={department}
          variant={filter === department ? "default" : "outline"}
          onClick={() => setFilter(department)}
          className={`rounded-full transition-all duration-300 ${
            filter === department
              ? "bg-red-600 text-white"
              : "hover:border-red-600 hover:text-red-600"
          }`}
        >
          {department}
        </Button>
      ))}
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <p className="text-muted-foreground">
        No team members found in this department.
      </p>
    </div>
  );
};

const TeamDialog = ({
  selectedMember,
  handleClose,
  handleNext,
  handlePrevious,
}) => {
  return (
    <Dialog open={!!selectedMember} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-3xl bg-white">
        {selectedMember && (
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <div className="aspect-square relative rounded-xl overflow-hidden border-4">
                  <img
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="object-cover aspect-square"
                  />
                </div>
              </div>
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-neutral-800 text-pretty">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="text-sm text-red-800">
                    {selectedMember.role}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {selectedMember.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-red-600 text-xs px-2 py-1 rounded-full border border-red-600/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6 sticky">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous team member</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next team member</span>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
