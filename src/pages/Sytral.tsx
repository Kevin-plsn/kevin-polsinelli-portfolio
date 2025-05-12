
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
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
                <h2 className="text-2xl font-bold text-primary mb-4">SYTRAL Mobilités – Stagiaire Informatique (Stage de découverte)</h2>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">Période: De mai à juillet 2021</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Contexte :</h3>
                    <p className="mt-2">
                      Dans le cadre de mon parcours de formation initiale, j'ai eu l'opportunité d'effectuer un stage de découverte de 3 mois au sein de SYTRAL Mobilités, l'autorité organisatrice des transports en commun de la métropole lyonnaise. Ce stage m'a permis de découvrir concrètement le fonctionnement d'un service informatique en environnement public et de me familiariser avec les enjeux liés à la gestion des infrastructures dans un grand établissement.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Mes missions principales :</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>🧩 Découverte des différentes équipes IT : Présentation des métiers, des outils utilisés et des processus internes (support, réseau, systèmes, projets).</li>
                      <li>🗃️ Recensement des baies réseau : Dans le cadre de travaux d'aménagement de nouveaux bureaux, j'ai été chargé de faire un état des lieux complet des baies informatiques réparties dans le bâtiment principal, en identifiant leur emplacement, leur contenu et leur état.</li>
                      <li>📐 Participation à la réorganisation : En collaboration avec les équipes techniques, j'ai aidé à la préparation logistique pour la relocalisation de certains équipements dans les nouveaux espaces.</li>
                      <li>📝 Rédaction de documents de suivi : Élaboration d'un tableau récapitulatif clair pour permettre aux équipes techniques de visualiser rapidement les ressources réseau présentes dans le bâtiment.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-semibold text-gray-800">Ce que ce stage m'a apporté :</h3>
                    <p className="mt-2">
                      Ce stage a marqué ma première immersion dans le monde professionnel de l'informatique. Il m'a permis de comprendre l'importance de l'organisation, de la rigueur documentaire, et des enjeux matériels en amont de tout projet IT. J'ai également pris conscience du rôle central que joue l'IT dans le bon fonctionnement quotidien d'une structure aussi complexe qu'un réseau de transports en commun.
                    </p>
                  </div>
                </div>
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
