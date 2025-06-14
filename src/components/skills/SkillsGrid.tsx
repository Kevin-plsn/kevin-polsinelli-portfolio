
import { Skill } from "@/types/skills";
import SkillCard from "./SkillCard";

interface SkillsGridProps {
  skills: Skill[];
  onSkillExpand: (id: string) => void;
}

const SkillsGrid = ({ skills, onSkillExpand }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <SkillCard 
          key={skill.id} 
          skill={skill} 
          onExpand={onSkillExpand}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;
