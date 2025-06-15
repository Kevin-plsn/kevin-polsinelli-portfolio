import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  CheckCircle2,
  Compass,
  Computer,
  ChevronDown,
  Target,
  Wrench,
} from "lucide-react";
import { Project } from "@/data/projects";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (skillId: string) => string;
}

const ProjectCard = ({ 
  project, 
  expandedProject, 
  onToggle, 
  showAllProjects, 
  onBackToAll,
  getSkillName 
}: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;

  if (isExpanded) {
    return (
      <div className="col-span-full space-y-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-bold text-primary mb-4 md:mb-0">
            {project.title}
          </h2>
          {showAllProjects ? (
            <Button variant="outline" onClick={() => onToggle(project.id)}>
              Réduire <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" onClick={onBackToAll}>
              Retour à tous les projets <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Context Section */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Contexte du projet</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700">{project.context}</p>
          </CardContent>
        </Card>

        {/* Objectives Section */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{objective}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Realization Section */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Réalisations</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700">{project.realization}</p>
          </CardContent>
        </Card>

        {/* Skills Section with clickable badges */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bookmark className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Compétences mobilisées</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skillId) => (
                <SkillBadge
                  key={skillId}
                  skillId={skillId}
                  skillName={getSkillName(skillId)}
                  variant="outline"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technologies Section */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Computer className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Technologies utilisées</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Résultats obtenus</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{result}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  
  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
      onClick={() => onToggle(project.id)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-gray-200 text-sm">{project.subtitle}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.slice(0, 3).map((skillId) => (
            <SkillBadge
              key={skillId}
              skillId={skillId}
              skillName={getSkillName(skillId)}
            />
          ))}
          {project.skills.length > 3 && (
            <Badge variant="secondary">+{project.skills.length - 3}</Badge>
          )}
        </div>
        <Button variant="outline" size="sm" className="w-full">
          Voir les détails
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
