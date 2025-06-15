
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
  detailedSkills?: {
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
  const isExpanded = expandedProject === project.id;

  if (isExpanded && !showAllProjects) {
    return (
      <div className="col-span-full">
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={onBackToAll}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à tous les projets
              </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-64 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.shortDesc}</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Contexte</h3>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Objectifs</h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Réalisation</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.realization}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                ✅ Compétences mobilisées
              </h3>

              {project.detailedSkills ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      🧠 Compétences transverses
                    </h4>
                    <div className="space-y-3">
                      {project.detailedSkills.transverses.map((skill, index) => (
                        <div key={index} className="border-l-2 border-primary/30 pl-4">
                          <div className="font-medium text-gray-900">{skill.name}</div>
                          <div className="text-gray-700 text-sm mt-1">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      📅 Savoir-faire généraux
                    </h4>
                    <div className="space-y-3">
                      {project.detailedSkills.generaux.map((skill, index) => (
                        <div key={index} className="border-l-2 border-primary/30 pl-4">
                          <div className="font-medium text-gray-900">{skill.name}</div>
                          <div className="text-gray-700 text-sm mt-1">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      💻 Savoir-faire techniques
                    </h4>
                    <div className="space-y-3">
                      {project.detailedSkills.techniques.map((skill, index) => (
                        <div key={index} className="border-l-2 border-primary/30 pl-4">
                          <div className="font-medium text-gray-900">{skill.name}</div>
                          <div className="text-gray-700 text-sm mt-1">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {getSkillName(skill)}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="h-fit hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onToggle(project.id)}>
      <CardHeader className="pb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <CardTitle className="line-clamp-2">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">{project.shortDesc}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
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
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground">Cliquer pour voir plus</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
