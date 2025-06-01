
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Computer, 
  BrainCircuit, 
  FileSpreadsheet, 
  Shield, 
  Database, 
  Clock, 
  Users, 
  Lightbulb, 
  Target, 
  UserCog
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (skillId: string) => string;
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
}

const getSkillIcon = (skillId: string) => {
  const skillIcons: {[key: string]: React.ReactNode} = {
    "administration-windows": <Computer className="h-4 w-4" />,
    "securite": <Shield className="h-4 w-4" />,
    "bureautique-productivite": <Database className="h-4 w-4" />,
    "conduite-projet-logiciel": <Computer className="h-4 w-4" />,
    "management-projet": <FileSpreadsheet className="h-4 w-4" />,
    "communication-relationnel": <Users className="h-4 w-4" />,
    "esprit-analyse": <BrainCircuit className="h-4 w-4" />,
    "rigueur": <Target className="h-4 w-4" />,
    "initiative": <Lightbulb className="h-4 w-4" />,
    "organisation-personnelle": <Clock className="h-4 w-4" />,
    "autonomie": <UserCog className="h-4 w-4" />
  };
  
  return skillIcons[skillId] || <Computer className="h-4 w-4" />;
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
  
  return (
    <Card 
      key={project.id} 
      id={project.id}
      className={`overflow-hidden border border-primary/20 transition-all duration-300 ${
        isExpanded 
          ? "col-span-1 md:col-span-2 lg:col-span-3" 
          : "hover:shadow-md"
      }`}
    >
      <div className={`w-full overflow-hidden ${
        isExpanded 
          ? "h-48 md:h-64" 
          : "aspect-video"
      }`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-6">
          {project.shortDesc}
        </p>
        
        {isExpanded ? (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">🧭 Contexte du projet</h3>
              <p className="text-sm text-foreground">{project.context}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">🎯 Objectifs</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {project.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">🛠️ Réalisation</h3>
              <p className="text-sm text-foreground">{project.realization}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">✅ Compétences mobilisées</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <Link 
                    key={skill} 
                    to={`/skills#${skill}`} 
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {getSkillIcon(skill)}
                    {getSkillName(skill)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        
        <div className="pt-6 text-center">
          {!isExpanded ? (
            <Button 
              onClick={() => onToggle(project.id)} 
              variant="default"
            >
              Voir le détail du projet
            </Button>
          ) : (
            <Button 
              onClick={onBackToAll} 
              variant="outline"
            >
              Retour à tous les projets
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
