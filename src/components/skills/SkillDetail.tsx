
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Skill } from "@/types/skills";
import { getProjectTitle } from "@/data/skills";
import { projects } from "@/data/projects";

interface SkillDetailProps {
  skill: Skill;
}

const SkillDetail = ({ skill }: SkillDetailProps) => {
  const getProjectImage = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.image : "";
  };

  return (
    <div id={skill.id}>
      <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          {skill.icon}
        </div>
        {skill.title}
      </h2>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">🔍 Définition</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{skill.definition}</p>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">🛠 Mise en application</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 whitespace-pre-line">{skill.application}</p>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">💬 Mon point de vue sur la compétence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 whitespace-pre-line">{skill.assessment}</p>
        </CardContent>
      </Card>
      
      {skill.relatedProjects.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">📂 Projets associés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skill.relatedProjects.map(projectId => (
              <Link 
                key={projectId} 
                to={`/projects#${projectId}`}
                className="no-underline"
              >
                <Card className="hover:shadow-md transition-shadow border border-primary/20">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={getProjectImage(projectId)}
                      alt={getProjectTitle(projectId)}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary">{getProjectTitle(projectId)}</h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetail;
