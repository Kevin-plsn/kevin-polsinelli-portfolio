
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
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
                <h2 className="text-2xl font-bold text-primary mb-4">Skyepharma – Technicien Support & Informatique Industrielle (Alternance)</h2>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">Période: De septembre 2021 à août 2023</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Contexte :</h3>
                    <p className="mt-2">
                      Dans le cadre de mon Bachelor AIS, j'ai rejoins Skyepharma Production SAS qui s'impose comme un acteur majeur dans l'industrie pharmaceutique, dédiée à la fabrication et au développement de produits de santé novateurs.
                    </p>
                    <p className="mt-2">
                      Forte d'une réputation solide, l'entreprise se distingue par son engagement en faveur de l'innovation et de la qualité, s'appuyant sur une expertise reconnue pour répondre aux défis
                      thérapeutiques actuels et futurs. Intégré au sein du service informatique, j'ai évolué dans un environnement hautement normé (qualité pharmaceutique, traçabilité, sécurité), ce qui m'a permis de découvrir l'univers de l'informatique industrielle et de participer à des projets concrets au service de la production et de l'innovation IT.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Mes missions principales :</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>🧑‍💻 Administration Active Directory / Exchange : Gestion des comptes utilisateurs, des groupes de sécurité et des boîtes mail selon les process qualité.</li>
                      <li>💻 Déploiement de nouveaux postes : Création d'un script d'automatisation pour faciliter le déploiement de nouveaux PC neufs dans l'environnement industriel.</li>
                      <li>💽 Migration de disques durs : Remplacement des HDD par des SSD sur les postes fixes afin d'optimiser les performances et la réactivité du matériel.</li>
                      <li>📞 Mise en place de la nouvelle téléphonie IP : Participation à l'accompagnement des utilisateurs dans la transition vers un système de téléphonie IP moderne.</li>
                      <li>🔄 Sauvegarde des données : Migration des anciennes sauvegardes sur bandes magnétiques vers Veeam Backup, pour améliorer la gestion, la sécurité et la restauration des données.</li>
                      <li>📲 Déploiement de scanettes : Installation de nouvelles scanettes pour les équipes du magasin et de la production, facilitant la traçabilité et les flux logistiques.</li>
                      <li>🛡 Déploiement de l'antivirus SentinelOne : Installation, paramétrage et supervision d'un nouvel antivirus centralisé, garantissant une meilleure protection du parc informatique.</li>
                      <li>📱 Mise en place d'un MDM : Déploiement d'une solution de Mobile Device Management (MDM) pour la nouvelle flotte de 15 smartphones, avec configuration des profils utilisateurs.</li>
                      <li>🔍 Supervision Centreon : Participation au déploiement de Centreon pour superviser les équipements critiques et prévenir les incidents réseau ou système.</li>
                      <li>🏭 Support pour un nouveau site de production : Assistance technique et logistique dans l'ouverture d'un nouveau site, en lien avec la DSI centrale.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Projets réalisés :</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Automatisation du déploiement des postes informatiques : Grâce à un script personnalisé, j'ai considérablement réduit le temps d'installation et de configuration des nouveaux postes.</li>
                      <li>Transition des sauvegardes vers Veeam Backup : Cette modernisation a permis une centralisation et une meilleure fiabilité des sauvegardes critiques dans un environnement réglementé.</li>
                      <li>Déploiement et supervision d'une flotte mobile : La mise en place du MDM a permis un meilleur contrôle des équipements et une gestion centralisée, en phase avec les exigences de sécurité de l'industrie pharmaceutique.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-semibold text-gray-800">Anecdote professionnelle :</h3>
                    <p className="mt-2">
                      En janvier 2023, un tournant majeur a marqué mon alternance chez Skyepharma : l'informaticien industriel en poste a quitté l'entreprise de manière soudaine, sans passation ni transmission formelle de ses connaissances. Face à cette situation imprévue, j'ai dû reprendre l'ensemble de ses missions critiques, incluant la gestion des équipements industriels connectés, les interventions sur les automates, la supervision des systèmes liés à la production, ainsi que le support technique spécifique aux environnements de production pharmaceutique.
                    </p>
                    <p className="mt-2">
                      Malgré le défi, j'ai su m'adapter rapidement, me former sur le tas, interagir avec les différents services (maintenance, production, qualité), et assurer une continuité de service sans interruption pour les équipes de production. Cette expérience m'a permis de renforcer considérablement mon autonomie, ma capacité d'analyse et ma réactivité dans un environnement à haute exigence.
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

export default SkyepharmaPage;
