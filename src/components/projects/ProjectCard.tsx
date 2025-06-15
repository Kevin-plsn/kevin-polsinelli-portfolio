
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ArrowLeft, Target, Wrench, CheckCircle2 } from "lucide-react";
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
      <div className="col-span-full">
        <Card className="shadow-lg">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-lg mt-1">{project.shortDesc}</CardDescription>
                </div>
              </div>
              <Button 
                onClick={onBackToAll}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux projets
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 space-y-8">
            {/* Context Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                🧭 Contexte du projet
              </h3>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>

            {/* Objectives Section */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <Target className="h-5 w-5" />
                Objectifs
              </h3>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{objective}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Realization Section */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Réalisations
              </h3>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.realization}
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                ✅ Compétences mobilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skillId) => (
                  <SkillBadge 
                    key={skillId}
                    skillId={skillId}
                    skillName={getSkillName(skillId)}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.shortDesc}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Compétences mobilisées :</h4>
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((skillId) => (
              <SkillBadge 
                key={skillId}
                skillId={skillId}
                skillName={getSkillName(skillId)}
              />
            ))}
            {project.skills.length > 3 && (
              <Badge variant="outline">
                +{project.skills.length - 3} autres
              </Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={() => onToggle(project.id)}
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          Voir le détail
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
