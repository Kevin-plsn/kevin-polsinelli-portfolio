
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
  detailedSkills: {
    transverses: Array<{
      name: string;
      description: string;
    }>;
    generaux: Array<{
      name: string;
      description: string;
    }>;
    techniques: Array<{
      name: string;
      description: string;
    }>;
  };
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const isExpanded = expandedProject === project.id;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (isExpanded) {
    return (
      <div className="col-span-full max-w-4xl mx-auto">
        <Card className="h-auto">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <Button
              onClick={onBackToAll}
              className="absolute top-4 left-4 bg-white/90 text-gray-700 hover:bg-white"
              size="sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux projets
            </Button>
          </div>
          
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Context Section */}
            <div>
              <button
                onClick={() => toggleSection('context')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                  🧭 Contexte du projet
                </h3>
                {expandedSection === 'context' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'context' && (
                <p className="text-gray-700 leading-relaxed">{project.context}</p>
              )}
            </div>

            {/* Objectives Section */}
            <div>
              <button
                onClick={() => toggleSection('objectives')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                  🎯 Objectifs
                </h3>
                {expandedSection === 'objectives' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'objectives' && (
                <ul className="space-y-2">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      {objective}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Realization Section */}
            <div>
              <button
                onClick={() => toggleSection('realization')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                  🛠️ Réalisations
                </h3>
                {expandedSection === 'realization' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'realization' && (
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.realization}
                </div>
              )}
            </div>

            {/* Skills Section */}
            <div>
              <button
                onClick={() => toggleSection('skills')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                  ✅ Compétences mobilisées
                </h3>
                {expandedSection === 'skills' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'skills' && (
                <div className="space-y-4">
                  {/* Compétences transverses */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      🧠 Compétences transverses
                    </h4>
                    <div className="space-y-2">
                      {project.detailedSkills.transverses.map((skill, index) => (
                        <div key={index} className="border-l-3 border-blue-500 pl-3">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-gray-600"> – {skill.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Savoir-faire généraux */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      🧩 Savoir-faire généraux
                    </h4>
                    <div className="space-y-2">
                      {project.detailedSkills.generaux.map((skill, index) => (
                        <div key={index} className="border-l-3 border-green-500 pl-3">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-gray-600"> – {skill.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Savoir-faire techniques */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      💻 Savoir-faire techniques
                    </h4>
                    <div className="space-y-2">
                      {project.detailedSkills.techniques.map((skill, index) => (
                        <div key={index} className="border-l-3 border-purple-500 pl-3">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-gray-600"> – {skill.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="h-full cursor-pointer transition-all duration-200 hover:shadow-lg" onClick={() => onToggle(project.id)}>
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {project.shortDesc}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {getSkillName(skill)}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.skills.length - 3} autres
            </Badge>
          )}
        </div>
        
        <Button className="w-full mt-auto">
          Voir le détail
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
