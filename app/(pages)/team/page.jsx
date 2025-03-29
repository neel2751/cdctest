import TeamGallery from "@/components/gallary/teamGallary";
import TeamSectionNew from "@/components/gallary/teamSection";

const TeamSection = () => {
  return (
    <>
      <div className="mt-10">
        <TeamSectionNew />
      </div>
      <TeamGallery />
    </>
  );
};

export default TeamSection;
