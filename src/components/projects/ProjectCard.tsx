
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";

export interface DetailedSkill {
  name: string;
  description: string;
}

export interface DetailedSkills {
  transverse: DetailedSkill[];
  general: DetailedSkill[];
  technical: DetailedSkill[];
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

const ProjectCard = ({ 
  project, 
  expandedProject, 
  onToggle, 
  showAllProjects, 
  onBackToAll,
  getSkillName 
}: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${isExpanded ? 'col-span-full' : ''}`}>
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">{project.title}</CardTitle>
        <CardDescription className="text-gray-600">
          {project.shortDesc}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {!isExpanded && (
          <>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Compétences mobilisées</h4>
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
            </div>
            
            <Button 
              onClick={() => onToggle(project.id)}
              className="w-full"
              variant="outline"
            >
              Voir les détails
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {isExpanded && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <Button 
                onClick={onBackToAll}
                variant="outline"
                size="sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à tous les projets
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Contexte</h4>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Objectifs</h4>
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
              <h4 className="text-lg font-semibold text-primary mb-3">Réalisation</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.realization}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">✅ Compétences mobilisées</h4>
              
              {project.detailedSkills ? (
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-primary/80">🧠 Compétences transverses</h5>
                    <div className="space-y-3">
                      {project.detailedSkills.transverse.map((skill, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-medium">{skill.name}</span> – <span className="text-gray-700">{skill.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-primary/80">📅 Savoir-faire généraux</h5>
                    <div className="space-y-3">
                      {project.detailedSkills.general.map((skill, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-medium">{skill.name}</span> – <span className="text-gray-700">{skill.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-primary/80">💻 Savoir-faire techniques</h5>
                    <div className="space-y-3">
                      {project.detailedSkills.technical.map((skill, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-medium">{skill.name}</span> – <span className="text-gray-700">{skill.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
