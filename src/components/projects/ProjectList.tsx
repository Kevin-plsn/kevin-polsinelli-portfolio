
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import { projects, getSkillName } from "@/data/projects";

const ProjectList = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract project ID from URL hash if present
  useEffect(() => {
    const projectId = location.hash.replace('#', '');
    if (projectId) {
      setExpandedProject(projectId);
      setShowAllProjects(false);
    }
  }, [location]);

  const toggleProjectExpansion = (id: string) => {
    if (expandedProject === id) {
      backToAllProjects();
    } else {
      setExpandedProject(id);
      setShowAllProjects(false);
      navigate(`/projects#${id}`);
    }
  };

  const backToAllProjects = () => {
    setExpandedProject(null);
    setShowAllProjects(true);
    navigate('/projects');
  };

  // Filter projects to display
  const filteredProjects = expandedProject 
    ? projects.filter(project => project.id === expandedProject) 
    : projects;

  return (
    <>
      <ProjectsHeader 
        showAllProjects={showAllProjects} 
        onBackToAll={backToAllProjects} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expandedProject={expandedProject}
            onToggle={toggleProjectExpansion}
            showAllProjects={showAllProjects}
            onBackToAll={backToAllProjects}
            getSkillName={getSkillName}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
