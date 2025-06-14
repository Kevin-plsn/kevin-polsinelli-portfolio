
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skill } from "@/types/skills";

interface SkillCardProps {
  skill: Skill;
  onExpand: (id: string) => void;
}

const SkillCard = ({ skill, onExpand }: SkillCardProps) => {
  return (
    <Card 
      id={skill.id}
      className="hover:shadow-md transition-all border border-primary/20 h-full flex flex-col"
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
        <div className="bg-primary/10 p-2 rounded-full">
          {skill.icon}
        </div>
        <CardTitle className="text-lg">{skill.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-4 flex-grow">
        <p className="text-sm text-muted-foreground mb-6">
          {skill.definition}
        </p>
        
        <Badge className="mb-2" variant="outline">
          {skill.type === "technique" 
            ? "Compétence technique" 
            : skill.type === "comportementale" 
            ? "Compétence comportementale" 
            : "Compétence générale"}
        </Badge>
      </CardContent>
      
      <div className="p-4 pt-0 mt-auto">
        <Button 
          onClick={() => onExpand(skill.id)} 
          variant="default" 
          className="w-full"
        >
          Voir les détails
        </Button>
      </div>
    </Card>
  );
};

export default SkillCard;
