
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ProjectsHeaderProps {
  showAllProjects: boolean;
  onBackToAll: () => void;
}

const ProjectsHeader = ({ showAllProjects, onBackToAll }: ProjectsHeaderProps) => {
  return (
    <>
      {!showAllProjects && (
        <Button 
          onClick={onBackToAll} 
          variant="outline" 
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour à tous les projets
        </Button>
      )}
      
      {showAllProjects && (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes projets</h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              Cette page présente les projets majeurs que j'ai réalisés durant mes années d'alternance. 
              Chaque projet est associé à une compétence développée dans un contexte réel, et témoigne 
              de ma capacité à répondre à des besoins concrets dans différents environnements professionnels.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectsHeader;
