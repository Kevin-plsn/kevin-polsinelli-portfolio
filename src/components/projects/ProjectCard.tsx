import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";

export interface DetailedSkill {
  name: string;
  description: string;
}

export interface DetailedSkills {
  transverse?: DetailedSkill[];
  general?: DetailedSkill[];
  technical?: DetailedSkill[];
}

export interface Project {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
  detailedSkills?: DetailedSkills;
}

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

  return (
    <Card className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'col-span-full' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {project.title}
        </h3>
      </div>

      <CardContent className="p-6">
        {!isExpanded ? (
          <>
            <p className="text-gray-600 mb-4 line-clamp-3">{project.shortDesc}</p>
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
            <button
              onClick={() => onToggle(project.id)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Voir plus <ChevronDown className="h-4 w-4" />
            </button>
          </>
        ) : (
          <div className="space-y-8">
            {!showAllProjects && (
              <button
                onClick={onBackToAll}
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à tous les projets
              </button>
            )}

            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Contexte</h4>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Objectifs</h4>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Réalisations</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.realization}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Compétences mobilisées</h4>
              
              {project.detailedSkills ? (
                <div className="space-y-6">
                  {project.detailedSkills.transverse && (
                    <div>
                      <h5 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <span>🧠</span>
                        Compétences transverses
                      </h5>
                      <div className="space-y-3">
                        {project.detailedSkills.transverse.map((skill, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h6 className="font-medium text-gray-900 mb-1">{skill.name}</h6>
                            <p className="text-sm text-gray-600">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.detailedSkills.general && (
                    <div>
                      <h5 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <span>📅</span>
                        Savoir-faire généraux
                      </h5>
                      <div className="space-y-3">
                        {project.detailedSkills.general.map((skill, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h6 className="font-medium text-gray-900 mb-1">{skill.name}</h6>
                            <p className="text-sm text-gray-600">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.detailedSkills.technical && (
                    <div>
                      <h5 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <span>💻</span>
                        Savoir-faire techniques
                      </h5>
                      <div className="space-y-3">
                        {project.detailedSkills.technical.map((skill, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h6 className="font-medium text-gray-900 mb-1">{skill.name}</h6>
                            <p className="text-sm text-gray-600">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {getSkillName(skill)}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onToggle(project.id)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium pt-4"
            >
              Voir moins <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
