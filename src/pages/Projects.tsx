
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes projets</h1>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Cette page est en cours de développement. Revenez bientôt pour découvrir les projets 
              sur lesquels j'ai travaillé.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md p-8 border border-primary/20 rounded-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Page en construction</h2>
              <p className="text-muted-foreground">
                Le contenu de cette page sera disponible prochainement. Merci de votre patience.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
