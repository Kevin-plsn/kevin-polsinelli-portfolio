
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { getSkillName } from "@/data/projects";

interface SkillBadgeProps {
  skillId: string;
}

const SkillBadge = ({ skillId }: SkillBadgeProps) => {
  return (
    <Link to="/skills" className="inline-block">
      <Badge 
        variant="outline" 
        className="hover:bg-primary/10 transition-colors cursor-pointer"
      >
        {getSkillName(skillId)}
      </Badge>
    </Link>
  );
};

export default SkillBadge;
