
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
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
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">APRR - Technicien de domaine SI Trafic (alternance)</h2>
                  
                  <div className="flex items-center mb-4 text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-medium">Période de l'alternance: De novembre 2023 à aujourd'hui</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">🧭 Contexte :</h3>
                      <p className="mt-2">
                        Recruté en novembre 2023, j'ai intégré le groupe APRR (Autoroutes Paris-Rhin-Rhône), acteur majeur dans le domaine des infrastructures autoroutières en France. 
                        Mon alternance s'inscrit dans un contexte de transformation numérique et de modernisation des outils internes, dans une entreprise où l'optimisation du trafic et la performance des systèmes d'information sont des enjeux clés.
                      </p>
                      <p className="mt-2">
                        J'ai rejoint l'équipe administratrice fonctionnelle SI Trafic pour le projet MAGELLAN, un projet stratégique visant à harmoniser et moderniser les systèmes d'information liés à la gestion des services autoroutiers. 
                        Mon rôle consistait à assurer le paramétrage fonctionnel du système, tout en accompagnant les utilisateurs dans cette transition.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">🎯 Missions principales :</h3>
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>🔧 Paramétrage fonctionnel du système MAGELLAN pour l'adapter aux besoins métiers spécifiques d'APRR (trafic, péage, sécurité, interventions terrain…).</li>
                        <li>📘 Rédaction de documentation utilisateur claire et accessible, pour faciliter la prise en main du nouvel outil.</li>
                        <li>🤝 Support fonctionnel de proximité auprès des utilisateurs métiers (assistance, clarification des processus, remontée des anomalies).</li>
                        <li>🧩 Participation active aux ateliers métiers afin de recueillir les besoins fonctionnels et d'assurer leur bonne intégration dans le système.</li>
                        <li>🎯 Tests fonctionnels et validation des paramétrages avant mise en production.</li>
                        <li>📈 Amélioration continue de l'expérience utilisateur à travers des retours réguliers, des ajustements d'interface et des optimisations ergonomiques.</li>
                        <li>🔄 Contribution à l'accompagnement au changement, par des formations utilisateurs et de la communication interne.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">🛠️ Projets réalisés :</h3>
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>🚦 Configuration des workflows métiers liés au trafic autoroutier, notamment sur les interventions d'urgence et les suivis techniques.</li>
                        <li>🧪 Mise en place d'un processus de test utilisateurs avec retours terrain pour améliorer les interfaces.</li>
                        <li>📊 Participation à la création d'indicateurs fonctionnels, en lien avec les besoins de pilotage des directions métier.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <h3 className="text-xl font-semibold text-gray-800">📌 Anecdote professionnelle :</h3>
                      <p className="mt-2">
                        Lors d'une phase d'analyse sur le module de gestion des plans d'actions automatisés, j'ai constaté que les règles utilisées pour déclencher les actions lors d'événements de trafic étaient nommées de manière incohérente. Cela rendait leur compréhension difficile et ralentissait le travail de paramétrage.
                      </p>
                      <p className="mt-2">
                        De plus, le système en place ne permettait pas de modifier facilement les règles existantes, ce qui m'a obligé à trouver une solution alternative. Pour pallier cette contrainte, j'ai conçu un tableau Excel structuré qui recense et homogénéise toutes les règles existantes. Cet outil fournit désormais une base claire et normalisée pour la création de nouvelles règles, en guidant l'équipe sur les conventions de nommage à respecter.
                      </p>
                      <p className="mt-2">
                        Cette initiative a permis de gagner du temps, de réduire les erreurs de saisie et d'améliorer la cohérence globale du paramétrage. Elle a également mis en lumière ma capacité à m'adapter rapidement à des limites techniques tout en maintenant un haut niveau de rigueur fonctionnelle.
                      </p>
                    </div>
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

export default APRRPage;
