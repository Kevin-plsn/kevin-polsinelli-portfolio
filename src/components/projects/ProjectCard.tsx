import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (id: string) => string;
}

const ProjectCard = ({ project, expandedProject, onToggle, showAllProjects, onBackToAll, getSkillName }: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;

  const handleImageClick = () => {
    onToggle(project.id);
  };

  const renderProjectContent = () => (
    <>
      <section>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-700">{project.longDescription}</p>
      </section>

      {project.sections && project.sections.map((section, index) => (
        <section key={index} className="mb-6">
          <h4 className="text-xl font-semibold mb-2">{section.title}</h4>
          {section.content.map((paragraph, i) => (
            <p key={i} className="text-gray-700 mb-2">{paragraph}</p>
          ))}
        </section>
      ))}

      <section>
        <h4 className="text-xl font-semibold mb-2">Compétences</h4>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skillId) => (
            <Badge key={skillId} variant="secondary" className="text-xs">
              {getSkillName(skillId)}
            </Badge>
          ))}
        </div>
      </section>

      <Button onClick={onBackToAll} className="mt-4">
        Retour à tous les projets
      </Button>
    </>
  );

  if (isExpanded && !showAllProjects) {
    return (
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex-1">
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          {renderProjectContent()}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={handleImageClick}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer" onClick={handleImageClick}></div>
      </div>
      
      <CardHeader className="flex-1">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skillId) => (
            <Badge key={skillId} variant="secondary" className="text-xs">
              {getSkillName(skillId)}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={() => onToggle(project.id)} 
          className="w-full"
          variant="outline"
        >
          Voir le projet
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
