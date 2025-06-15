
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, CheckCircle2, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export type Project = {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
};

type ProjectCardProps = {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (skillId: string) => string;
};

const ProjectCard = ({ 
  project, 
  expandedProject, 
  onToggle, 
  showAllProjects, 
  onBackToAll,
  getSkillName 
}: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;

  if (isExpanded && !showAllProjects) {
    return (
      <div className="col-span-full">
        <Button 
          onClick={onBackToAll} 
          variant="outline" 
          className="mb-6"
        >
          ← Retour à tous les projets
        </Button>
        
        <Card className="w-full">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg opacity-90">{project.shortDesc}</p>
            </div>
          </div>
          
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Contexte
              </h2>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Objectifs
              </h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Réalisation
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.realization}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Compétences mobilisées</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Link key={skill} to={`/skills#${skill}`}>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {getSkillName(skill)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div 
        className="h-48 overflow-hidden cursor-pointer"
        onClick={() => onToggle(project.id)}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-2">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">{project.shortDesc}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Compétences mobilisées :</p>
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((skill) => (
              <Link key={skill} to={`/skills#${skill}`}>
                <Badge 
                  variant="secondary" 
                  className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {getSkillName(skill)}
                </Badge>
              </Link>
            ))}
            {project.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={() => onToggle(project.id)} 
          className="w-full group"
        >
          Voir les détails
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-[-2px]" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-[2px]" />
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
