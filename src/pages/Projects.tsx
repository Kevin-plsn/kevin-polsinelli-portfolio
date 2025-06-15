
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewProjectList from "@/components/projects/NewProjectList";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <NewProjectList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
