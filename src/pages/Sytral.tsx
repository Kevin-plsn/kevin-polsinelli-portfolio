
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SytralPage = () => {
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
                  src="/lovable-uploads/f31ad815-1bc1-4748-9e3c-d5659c190765.png" 
                  alt="SYTRAL Logo" 
                  className="max-w-full h-auto max-h-60"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">SYTRAL</h1>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Le SYTRAL (Syndicat mixte des transports pour le Rhône et l'agglomération lyonnaise) est l'autorité 
                  organisatrice des transports en commun de la métropole de Lyon et du département du Rhône.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-800">Missions principales</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Développement et maintenance des systèmes d'information pour la gestion des transports</li>
                  <li>Implémentation de solutions numériques pour l'amélioration de l'expérience usager</li>
                  <li>Participation aux projets de billettique et de transport intelligent</li>
                  <li>Analyse de données de fréquentation et optimisation des itinéraires</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-800">Compétences développées</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Connaissance des systèmes de transport urbain et de leur gestion</li>
                  <li>Maîtrise des outils d'analyse de données et de visualisation</li>
                  <li>Compréhension des enjeux de mobilité urbaine et développement durable</li>
                  <li>Gestion de projets IT dans le secteur public</li>
                  <li>Collaboration avec différents acteurs institutionnels</li>
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

export default SytralPage;
