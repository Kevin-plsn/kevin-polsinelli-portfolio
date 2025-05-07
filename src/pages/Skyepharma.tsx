
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SkyepharmaPage = () => {
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
              <div className="border border-primary/20 rounded-lg p-6 flex justify-center">
                <img 
                  src="/lovable-uploads/893ea8e3-6378-426c-8b04-c9a14d103aa5.png" 
                  alt="Skyepharma Logo" 
                  className="max-w-full h-auto max-h-60"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">SKYEPHARMA</h1>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Skyepharma est une entreprise pharmaceutique spécialisée dans le développement et la fabrication de 
                  médicaments innovants, utilisant des technologies de pointe pour offrir des solutions personnalisées.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-800">Missions principales</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Développement et maintenance des systèmes d'information internes</li>
                  <li>Optimisation des processus de production via des solutions IT</li>
                  <li>Gestion des bases de données sécurisées pour la R&D</li>
                  <li>Support technique pour les équipes scientifiques et administratives</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-800">Compétences développées</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Connaissance approfondie des normes et réglementations du secteur pharmaceutique</li>
                  <li>Maîtrise des systèmes de gestion de données sensibles</li>
                  <li>Capacité à travailler dans un environnement hautement régulé</li>
                  <li>Développement de solutions IT sur mesure pour des besoins spécifiques</li>
                  <li>Collaboration avec des équipes scientifiques multidisciplinaires</li>
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

export default SkyepharmaPage;
