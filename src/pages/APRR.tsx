
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const APRRPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <Button asChild variant="outline" className="group mb-6">
              <Link to="/experiences">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Retour aux expériences
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="border border-primary/20 rounded-lg p-6 flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/dc42d57c-c697-4a46-a922-1969a273854a.png" 
                  alt="APRR Logo" 
                  className="max-w-full h-auto max-h-60"
                />
              </div>
              <div className="border border-primary/20 rounded-lg p-6 flex justify-center">
                <img 
                  src="/lovable-uploads/d835cfec-72ec-4987-ba86-073891ceda41.png" 
                  alt="Carte APRR" 
                  className="max-w-full h-auto max-h-80"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">APRR – Autoroutes Paris-Rhin-Rhône</h1>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  APRR est l'un des plus grands groupes autoroutiers de France, exploitant plus de 2300 km d'autoroutes 
                  reliant Paris à la région Rhône-Alpes, la Bourgogne et le Grand Est.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-800">Missions principales</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Développement et maintenance d'applications de gestion interne</li>
                  <li>Optimisation des systèmes de péage et de surveillance du trafic</li>
                  <li>Implémentation de solutions IT innovantes pour améliorer la sécurité et le confort des usagers</li>
                  <li>Participation aux projets de transformation numérique de l'entreprise</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-800">Compétences développées</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestion de projets informatiques à grande échelle</li>
                  <li>Travail en équipe pluridisciplinaire</li>
                  <li>Maîtrise des outils et frameworks de développement modernes</li>
                  <li>Analyse et résolution de problèmes complexes</li>
                  <li>Communication avec différentes parties prenantes (techniques et non-techniques)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default APRRPage;
