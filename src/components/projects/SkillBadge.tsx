
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface SkillBadgeProps {
  skillId: string;
  skillName: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const SkillBadge = ({ skillId, skillName, variant = "secondary" }: SkillBadgeProps) => {
  return (
    <Link to={`/skills#${skillId}`} className="no-underline">
      <Badge 
        variant={variant} 
        className="cursor-pointer hover:bg-primary/20 transition-colors"
      >
        {skillName}
      </Badge>
    </Link>
  );
};

export default SkillBadge;
