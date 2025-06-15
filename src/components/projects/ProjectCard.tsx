
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SkillBadge from "./SkillBadge";

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
  isExpanded: boolean;
  onToggle: () => void;
}

const ProjectCard = ({ project, isExpanded, onToggle }: ProjectCardProps) => {
  return (
    <Card className="mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm">{project.shortDesc}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skillId) => (
              <SkillBadge key={skillId} skillId={skillId} />
            ))}
          </div>
          <button
            onClick={onToggle}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isExpanded ? "Réduire" : "Voir plus"}
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-6 animate-in slide-in-from-top-5 duration-300">
            <Separator />
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <span>🧭</span> Contexte du projet
              </h4>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <span>🎯</span> Objectifs
              </h4>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <span>🛠️</span> Réalisations
              </h4>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.realization}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
