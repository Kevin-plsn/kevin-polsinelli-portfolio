
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Computer, 
  BrainCircuit, 
  FileSpreadsheet, 
  Shield, 
  Database, 
  Clock, 
  Users, 
  Lightbulb, 
  Target, 
  UserCog
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (skillId: string) => string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
}

const getSkillIcon = (skillId: string) => {
  const skillIcons: {[key: string]: React.ReactNode} = {
    "administration-windows": <Computer className="h-4 w-4" />,
    "securite": <Shield className="h-4 w-4" />,
    "bureautique-productivite": <Database className="h-4 w-4" />,
    "conduite-projet-logiciel": <Computer className="h-4 w-4" />,
    "management-projet": <FileSpreadsheet className="h-4 w-4" />,
    "communication-relationnel": <Users className="h-4 w-4" />,
    "esprit-analyse": <BrainCircuit className="h-4 w-4" />,
    "rigueur": <Target className="h-4 w-4" />,
    "initiative": <Lightbulb className="h-4 w-4" />,
    "organisation-personnelle": <Clock className="h-4 w-4" />,
    "autonomie": <UserCog className="h-4 w-4" />
  };
  
  return skillIcons[skillId] || <Computer className="h-4 w-4" />;
};

const renderStandardisationContent = () => {
  return (
    <div className="space-y-8">
      {/* Contexte du projet */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-xl mb-4 text-blue-800 flex items-center gap-2">
          🧭 Contexte du projet
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Pour améliorer la gestion du parc d'impression et renforcer la sécurité des accès utilisateurs, nous avons engagé une démarche de standardisation en collaboration avec le prestataire RICOH. L'objectif était multiple : simplifier le suivi des consommables, limiter les erreurs de commande, gagner en réactivité en cas de panne, et centraliser l'ensemble des informations liées aux imprimantes. L'outil Streamline NX a été déployé pour permettre un contrôle précis des impressions via des badges utilisateurs, assurant ainsi une meilleure traçabilité des impressions entrantes et sortantes. Ce projet visait à homogénéiser les équipements entre services, tout en professionnalisant la supervision et la sécurité documentaire au sein de l'entreprise.
        </p>
      </div>

      {/* Objectifs */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-xl mb-4 text-green-800 flex items-center gap-2">
          🎯 Objectifs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-sm text-gray-700">Uniformiser le parc d'imprimantes avec des modèles RICOH pour faciliter la maintenance, le support et les commandes de consommables.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-sm text-gray-700">Réduire les erreurs de gestion en centralisant les informations techniques et logistiques via une interface commune.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-sm text-gray-700">Mettre en place un système de suivi intelligent des niveaux d'encre et des pannes, avec alertes automatisées pour anticiper les besoins.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-sm text-gray-700">Automatiser les commandes de toners, réduisant les ruptures et allégeant la charge de travail de l'équipe informatique.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-sm text-gray-700">Renforcer la sécurité documentaire grâce à l'authentification par badge via Streamline NX, permettant de contrôler et tracer toutes les impressions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-sm text-gray-700">Optimiser les coûts et l'empreinte environnementale grâce à du matériel moderne, plus économe et mieux intégré à l'écosystème de l'entreprise.</p>
          </div>
        </div>
      </div>

      {/* Réalisations */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-xl mb-6 text-purple-800 flex items-center gap-2">
          🛠️ Réalisations
        </h3>
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              📋 État des lieux initial
            </h4>
            <p className="text-gray-700">
              J'ai mené un inventaire complet des imprimantes présentes dans l'entreprise, en recensant les modèles, leurs emplacements, les consommables associés, ainsi que les problèmes fréquents rencontrés par les utilisateurs. Cela m'a permis d'identifier les sources d'inefficacité et les doublons matériels.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🤝 Comparaison et sélection du prestataire
            </h4>
            <p className="text-gray-700">
              J'ai contacté plusieurs fournisseurs et organisé des rendez-vous pour analyser leurs offres. En étudiant les critères techniques, économiques et écologiques, le choix s'est porté sur RICOH pour sa capacité à fournir un matériel homogène, performant et compatible avec un système de supervision avancé.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🔄 Remplacement progressif des imprimantes
            </h4>
            <p className="text-gray-700">
              Les anciennes imprimantes ont été progressivement remplacées par des modèles RICOH, sélectionnés pour leur durabilité, leur faible consommation énergétique, et leur compatibilité avec les systèmes d'impression sécurisés.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🖥️ Déploiement de Streamline NX
            </h4>
            <p className="text-gray-700">
              J'ai contribué à la configuration de la solution Streamline NX pour permettre une authentification par badge sur chaque imprimante. Cette fonctionnalité a permis de renforcer la sécurité des impressions, d'éviter les impressions oubliées, et de tracer chaque utilisation par utilisateur.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              📊 Mise en place d'une supervision centralisée
            </h4>
            <p className="text-gray-700">
              Grâce au portail RICOH, j'ai configuré le suivi en temps réel de l'état du parc : niveaux d'encre, alertes de maintenance, historique des incidents. Cette visibilité a permis de gagner en réactivité et de limiter les interruptions de service.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🛒 Automatisation des commandes de toner
            </h4>
            <p className="text-gray-700">
              Le système mis en place permet désormais de déclencher automatiquement les commandes de consommables lorsque les seuils critiques sont atteints. Cela a réduit les ruptures et évité les interventions manuelles du support IT.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              📁 Création d'un tableau de gestion structuré
            </h4>
            <p className="text-gray-700">
              J'ai conçu une documentation sous Excel regroupant les informations clés (modèles, emplacements, dates d'installation, garanties, types de toner). Ce tableau est aujourd'hui utilisé comme outil de suivi et de référence pour les interventions et les remplacements.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              👥 Accompagnement au changement
            </h4>
            <p className="text-gray-700">
              Enfin, j'ai participé à la communication auprès des équipes pour expliquer le fonctionnement du nouveau système, recueillir les retours, et m'assurer de l'adoption fluide des nouvelles imprimantes.
            </p>
          </div>
        </div>
      </div>

      {/* Compétences mobilisées */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
        <h3 className="font-semibold text-xl mb-6 text-orange-800 flex items-center gap-2">
          ✅ Compétences mobilisées
        </h3>
        
        {/* Compétences transverses */}
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            🧠 Compétences transverses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Autonomie</h5>
              <p className="text-sm text-gray-600">Projet mené de manière indépendante, de l'analyse initiale au déploiement complet.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Esprit d'analyse</h5>
              <p className="text-sm text-gray-600">Pour repérer les points de friction dans la gestion du parc et proposer une solution cohérente.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Organisation personnelle</h5>
              <p className="text-sm text-gray-600">Pour planifier chaque étape : état des lieux, rendez-vous fournisseurs, déploiement.</p>
            </div>
          </div>
        </div>

        {/* Savoir-faire généraux */}
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            🧩 Savoir-faire généraux
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Gestion de projet</h5>
              <p className="text-sm text-gray-600">Pilotage des différentes étapes du projet (analyse, choix fournisseur, déploiement, suivi).</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Rédaction</h5>
              <p className="text-sm text-gray-600">Élaboration de documents de suivi clairs et structurés pour assurer la traçabilité du projet.</p>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Support technique</h5>
              <p className="text-sm text-gray-600">Installation des équipements, résolution des incidents de démarrage.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Sécurité informatique</h5>
              <p className="text-sm text-gray-600">Paramétrage de l'authentification badge avec Streamline NX.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Conception réseau</h5>
              <p className="text-sm text-gray-600">Intégration des imprimantes dans des VLAN dédiés pour segmenter le trafic réseau et sécuriser les flux.</p>
            </div>
          </div>
        </div>

        {/* Outils utilisés */}
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            🛠️ Outils utilisés
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Streamline NX (RICOH)</h5>
              <p className="text-sm text-gray-600">Supervision, impression sécurisée, authentification par badge.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Excel</h5>
              <p className="text-sm text-gray-600">Gestion des tableaux de suivi, documentation du parc.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <h5 className="font-medium text-orange-600 mb-2">Portail de gestion RICOH</h5>
              <p className="text-sm text-gray-600">Visualisation du parc, état des machines, alertes et consommables.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-xl mb-4 text-teal-800 flex items-center gap-2">
          📝 Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ce projet m'a permis de conduire une démarche complète d'analyse, de structuration et de déploiement dans un contexte concret d'entreprise. Techniquement, j'ai consolidé mes compétences en gestion de parc d'impression réseau, en automatisation des processus (commandes de consommables, supervision centralisée) et en sécurité des impressions grâce à la solution Streamline NX. J'ai également appris à évaluer des prestataires selon des critères techniques et organisationnels, ce qui m'a donné une vision plus globale de la gestion IT.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Sur le plan professionnel, ce projet a renforcé mon autonomie, ma capacité d'organisation et mon esprit d'analyse. J'ai su prendre l'initiative pour résoudre une problématique ignorée jusque-là, et j'ai mené toutes les phases du projet, de l'audit au suivi post-installation, en passant par la relation fournisseur. Cette expérience m'a montré l'importance de l'organisation et de la capacité à transformer un besoin latent en solution concrète, mesurable et durable.
        </p>
      </div>
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  expandedProject, 
  onToggle, 
  showAllProjects,
  onBackToAll,
  getSkillName 
}: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;
  
  return (
    <Card 
      key={project.id} 
      id={project.id}
      className={`overflow-hidden border border-primary/20 transition-all duration-300 ${
        isExpanded 
          ? "col-span-1 md:col-span-2 lg:col-span-3" 
          : "hover:shadow-md"
      }`}
    >
      <div className={`w-full overflow-hidden ${
        isExpanded 
          ? "h-48 md:h-64" 
          : "aspect-video"
      }`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-6">
          {project.shortDesc}
        </p>
        
        {isExpanded ? (
          <div className="space-y-6">
            {project.id === "projet-1-standardisation-parc" ? (
              renderStandardisationContent()
            ) : (
              <>
                <div>
                  <h3 className="font-semibold text-lg mb-2">🧭 Contexte du projet</h3>
                  <p className="text-sm text-foreground">{project.context}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">🎯 Objectifs</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {project.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">🛠️ Réalisation</h3>
                  <p className="text-sm text-foreground">{project.realization}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">✅ Compétences mobilisées</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((skill) => (
                      <Link 
                        key={skill} 
                        to={`/skills#${skill}`} 
                        className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {getSkillIcon(skill)}
                        {getSkillName(skill)}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ) : null}
        
        <div className="pt-6 text-center">
          {!isExpanded ? (
            <Button 
              onClick={() => onToggle(project.id)} 
              variant="default"
            >
              Voir le détail du projet
            </Button>
          ) : (
            <Button 
              onClick={onBackToAll} 
              variant="outline"
            >
              Retour à tous les projets
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
