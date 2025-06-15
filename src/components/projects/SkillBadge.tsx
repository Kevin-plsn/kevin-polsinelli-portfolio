
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface SkillBadgeProps {
  skillId: string;
  skillName: string;
}

const SkillBadge = ({ skillId, skillName }: SkillBadgeProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/skills');
  };

  return (
    <Badge 
      variant="secondary" 
      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
      onClick={handleClick}
    >
      {skillName}
    </Badge>
  );
};

export default SkillBadge;
