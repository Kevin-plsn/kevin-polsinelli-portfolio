import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2, Compass, Target, Wrench, BookOpen, ChevronLeft } from "lucide-react";
import { Project } from "./ProjectCard";

interface ProjectCardProps {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (skillId: string) => string;
}

const ProjectCard = ({ project, expandedProject, onToggle, showAllProjects, onBackToAll, getSkillName }: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;

  const handleImageClick = () => {
    onToggle(project.id);
  };

  if (isExpanded && !showAllProjects) {
    return (
      <div className="col-span-full">
        {/* Back button */}
        <Button 
          onClick={onBackToAll} 
          variant="outline" 
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour à tous les projets
        </Button>

        {/* Project header */}
        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Briefcase className="h-6 w-6" />
          </div>
          {project.title}
        </h2>

        {/* Context section */}
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>🧭 Contexte du projet</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700 whitespace-pre-line">{project.context}</p>
          </CardContent>
        </Card>

        {/* Objectives section */}
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>🎯 Objectifs</CardTitle>
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

        {/* Realization section */}
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>🛠️ Réalisations</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700 whitespace-pre-line">{project.realization}</p>
          </CardContent>
        </Card>

        {/* Skills section with clickable skills */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>✅ Compétences mobilisées</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skillId) => (
                <Link 
                  key={skillId} 
                  to={`/skills#${skillId}`}
                  className="no-underline"
                >
                  <Badge 
                    variant="outline" 
                    className="hover:bg-primary/10 transition-colors cursor-pointer border-primary/30 text-primary hover:border-primary/50"
                  >
                    {getSkillName(skillId)}
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Collapsed project card view
  return (
    <Card className="hover:shadow-md transition-all border border-primary/20 h-full flex flex-col">
      <div className="h-48 overflow-hidden cursor-pointer" onClick={handleImageClick}>
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-primary">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-4 flex-grow">
        <p className="text-sm text-muted-foreground mb-4">
          {project.shortDesc}
        </p>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-primary">Compétences mobilisées :</h4>
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((skillId) => (
              <Link 
                key={skillId} 
                to={`/skills#${skillId}`}
                className="no-underline"
              >
                <Badge 
                  variant="outline" 
                  className="text-xs hover:bg-primary/10 transition-colors cursor-pointer border-primary/30 text-primary hover:border-primary/50"
                >
                  {getSkillName(skillId)}
                </Badge>
              </Link>
            ))}
            {project.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <div className="p-4 pt-0 mt-auto">
        <Button 
          onClick={() => onToggle(project.id)} 
          variant="default" 
          className="w-full"
        >
          Voir les détails
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
