
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSkillName } from "@/data/projects";

export interface Project {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
}

interface ProjectCardProps {
  project: Project;
}

const NewProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-primary line-clamp-2">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3">
          {project.shortDesc}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Contexte</h4>
            <p className="text-sm text-gray-600 line-clamp-4">
              {project.context}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Objectifs principaux</h4>
            <ul className="space-y-1">
              {project.objectives.slice(0, 3).map((objective, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="line-clamp-2">{objective}</span>
                </li>
              ))}
              {project.objectives.length > 3 && (
                <li className="text-sm text-gray-500 italic">
                  ... et {project.objectives.length - 3} autres objectifs
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold text-sm text-gray-800 mb-3">Compétences mobilisées</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skillId) => (
              <Badge 
                key={skillId} 
                variant="secondary" 
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {getSkillName(skillId)}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewProjectCard;
