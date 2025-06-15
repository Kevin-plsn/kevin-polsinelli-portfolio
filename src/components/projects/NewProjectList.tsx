
import { projects } from "@/data/projects";
import NewProjectCard from "./NewProjectCard";

const NewProjectList = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Mes Projets</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les projets que j'ai menés dans différents environnements professionnels, 
          avec le détail des compétences mobilisées et des réalisations accomplies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <NewProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600">
          <span className="font-semibold">{projects.length}</span> projets réalisés
        </p>
      </div>
    </div>
  );
};

export default NewProjectList;
