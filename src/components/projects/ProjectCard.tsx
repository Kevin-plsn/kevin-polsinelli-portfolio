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
  detailedSkills?: {
    transverses: string[];
    generaux: string[];
    techniques: string[];
  };
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
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Uniformiser le parc d'imprimantes avec des modèles RICOH pour faciliter la maintenance, le support et les commandes de consommables.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Réduire les erreurs de gestion en centralisant les informations techniques et logistiques via une interface commune.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Mettre en place un système de suivi intelligent des niveaux d'encre et des pannes, avec alertes automatisées pour anticiper les besoins.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Automatiser les commandes de toners, réduisant les ruptures et allégeant la charge de travail de l'équipe informatique.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Renforcer la sécurité documentaire grâce à l'authentification par badge via Streamline NX, permettant de contrôler et tracer toutes les impressions.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Optimiser les coûts et l'empreinte environnementale grâce à du matériel moderne, plus économe et mieux intégré à l'écosystème de l'entreprise.</p>
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
              <Link to="/skills#autonomie" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Autonomie</h5>
                <p className="text-sm text-gray-600">Projet mené de manière indépendante, de l'analyse initiale au déploiement complet.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#esprit-analyse" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Esprit d'analyse</h5>
                <p className="text-sm text-gray-600">Pour repérer les points de friction dans la gestion du parc et proposer une solution cohérente.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#organisation-personnelle" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Organisation personnelle</h5>
                <p className="text-sm text-gray-600">Pour planifier chaque étape : état des lieux, rendez-vous fournisseurs, déploiement.</p>
              </Link>
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
              <Link to="/skills#management-projet" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Gestion de projet</h5>
                <p className="text-sm text-gray-600">Pilotage des différentes étapes du projet (analyse, choix fournisseur, déploiement, suivi).</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rédaction</h5>
                <p className="text-sm text-gray-600">Élaboration de documents de suivi clairs et structurés pour assurer la traçabilité du projet.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div>
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#administration-windows" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Support technique</h5>
                <p className="text-sm text-gray-600">Installation des équipements, résolution des incidents de démarrage.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#securite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Sécurité informatique</h5>
                <p className="text-sm text-gray-600">Paramétrage de l'authentification badge avec Streamline NX.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#bureautique-productivite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Conception réseau</h5>
                <p className="text-sm text-gray-600">Intégration des imprimantes dans des VLAN dédiés pour segmenter le trafic réseau et sécuriser les flux.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils utilisés */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-xl mb-6 text-cyan-800 flex items-center gap-2">
          🛠️ Outils utilisés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Streamline NX (RICOH)</h5>
            <p className="text-sm text-gray-600">Supervision, impression sécurisée, authentification par badge.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Excel</h5>
            <p className="text-sm text-gray-600">Gestion des tableaux de suivi, documentation du parc.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Portail de gestion RICOH</h5>
            <p className="text-sm text-gray-600">Visualisation du parc, état des machines, alertes et consommables.</p>
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

const renderMigrationOfficeContent = () => {
  return (
    <div className="space-y-8">
      {/* Contexte du projet */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-xl mb-4 text-blue-800 flex items-center gap-2">
          🧭 Contexte du projet
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Au sein de l'entreprise Skyepharma, les collaborateurs utilisaient des versions variées de Microsoft Office, souvent obsolètes ou non alignées avec les standards internes. Cette hétérogénéité générait de nombreux problèmes de compatibilité : documents qui s'ouvraient mal, fonctionnalités indisponibles, fichiers illisibles ou corrompus. Résultat : une collaboration difficile entre services, une perte de temps considérable et une sollicitation fréquente du support technique.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Pour moderniser l'environnement de travail, fluidifier les échanges et renforcer la cohérence des outils numériques, l'entreprise a décidé de migrer l'ensemble des postes vers la suite Microsoft Office 365. Cette solution cloud permettait d'uniformiser les versions, de centraliser la gestion des outils (Outlook, OneDrive, Teams, etc.) et d'améliorer l'expérience utilisateur au quotidien.
        </p>
      </div>

      {/* Objectifs */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-xl mb-4 text-green-800 flex items-center gap-2">
          🎯 Objectifs
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Uniformiser les versions de Microsoft Office sur l'ensemble des postes pour éliminer les problèmes de compatibilité entre documents et outils.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Faciliter la collaboration entre services grâce à une suite d'outils intégrés d'Office 365 (Outlook, Teams, OneDrive…).</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Alléger la charge de l'assistance technique en réduisant les sollicitations liées aux incompatibilités de fichiers ou aux versions obsolètes.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Moderniser l'infrastructure IT en adoptant une solution cloud évolutive et centralisée.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Améliorer l'environnement de travail avec une plateforme plus stable, cohérente et accessible, adaptée aux nouveaux usages professionnels.</p>
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
              📋 État des lieux du parc applicatif
            </h4>
            <p className="text-gray-700">
              J'ai mené un inventaire détaillé des versions d'Office installées sur chaque poste de travail afin d'identifier les écarts et planifier la migration.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🛠️ Préparation du déploiement
            </h4>
            <p className="text-gray-700">
              J'ai désinstallé les versions obsolètes d'Office, nettoyé les configurations locales et préparé les postes à l'installation de la version cloud Microsoft 365.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🚀 Déploiement d'Office 365
            </h4>
            <p className="text-gray-700">
              J'ai installé Microsoft 365 Apps sur les postes de travail et configuré les profils utilisateurs pour assurer une transition fluide vers Outlook, Teams et OneDrive.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              ⚙️ Configuration des outils collaboratifs
            </h4>
            <p className="text-gray-700">
              J'ai aidé les utilisateurs à configurer leurs espaces OneDrive, synchroniser les documents, rejoindre les équipes Teams et adopter les nouvelles pratiques de travail.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              👥 Accompagnement des utilisateurs
            </h4>
            <p className="text-gray-700">
              J'ai assuré un accompagnement personnalisé pour faciliter la prise en main des nouveaux outils, répondre aux questions courantes et garantir l'autonomie des équipes.
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
              <Link to="/skills#rigueur" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rigueur</h5>
                <p className="text-sm text-gray-600">Indispensable pour suivre une procédure claire poste par poste et éviter les erreurs de configuration.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#organisation-personnelle" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Organisation personnelle</h5>
                <p className="text-sm text-gray-600">Planification rigoureuse du calendrier de migration par service pour optimiser les délais.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#autonomie" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Autonomie</h5>
                <p className="text-sm text-gray-600">J'ai mené le projet sans supervision directe, en prenant des initiatives face aux imprévus.</p>
              </Link>
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
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rédaction</h5>
                <p className="text-sm text-gray-600">Rédaction de consignes claires et synthétiques pour l'utilisation des outils Office 365.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#management-projet" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Gestion de projet</h5>
                <p className="text-sm text-gray-600">Organisation du déploiement en vagues successives et coordination du planning utilisateur.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div>
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#bureautique-productivite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Support technique</h5>
                <p className="text-sm text-gray-600">Dépannage des installations, gestion des profils corrompus, résolution d'incidents liés aux versions.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#administration-windows" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Administration système</h5>
                <p className="text-sm text-gray-600">Configuration des profils utilisateurs et gestion des licences Microsoft 365.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils utilisés */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-xl mb-6 text-cyan-800 flex items-center gap-2">
          🛠️ Outils utilisés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Microsoft 365 Apps</h5>
            <p className="text-sm text-gray-600">Outlook, OneDrive, Teams, Word, Excel pour la suite bureautique complète.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Centre d'administration Microsoft 365</h5>
            <p className="text-sm text-gray-600">Gestion centralisée des utilisateurs et des licences.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Portail utilisateur Microsoft</h5>
            <p className="text-sm text-gray-600">Gestion des comptes et licences utilisateurs.</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-xl mb-4 text-teal-800 flex items-center gap-2">
          📝 Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ce projet m'a permis de conduire une transition vers une infrastructure bureautique moderne et collaborative. J'ai renforcé mes compétences techniques dans le déploiement logiciel et la gestion d'environnement cloud, tout en développant une posture d'écoute et de pédagogie auprès des utilisateurs. Grâce à cette expérience, je me sens à l'aise pour piloter des projets de modernisation informatique, alliant expertise technique et accompagnement humain.
        </p>
      </div>
    </div>
  );
};

const renderAuditSecuriteContent = () => {
  return (
    <div className="space-y-8">
      {/* Contexte du projet */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-xl mb-4 text-blue-800 flex items-center gap-2">
          🧭 Contexte du projet
        </h3>
        <p className="text-gray-700 leading-relaxed">
          À la suite d'un audit de sécurité, plusieurs points de vulnérabilité ont été révélés sur les postes de travail, notamment l'absence de chiffrement systématique des données sensibles et un accès BIOS encore libre sur certaines machines. Pour y remédier, une démarche de sécurisation globale a été lancée.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          L'objectif : protéger les postes à la fois sur le plan logiciel et matériel. J'ai ainsi été chargé de déployer BitLocker via des stratégies de groupe (GPO) pour assurer le chiffrement automatique des disques, tout en renforçant l'accès physique aux machines en configurant des mots de passe d'administration au niveau du BIOS. Cette double action visait à garantir l'intégrité des données et empêcher toute intervention non autorisée sur les terminaux.
        </p>
      </div>

      {/* Objectifs */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-xl mb-4 text-green-800 flex items-center gap-2">
          🎯 Objectifs
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Chiffrer l'ensemble des postes utilisateurs afin de protéger les données stockées localement.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Renforcer la sécurité physique en restreignant l'accès BIOS par mot de passe administrateur.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Automatiser le déploiement des règles de sécurité à travers les GPO (stratégies de groupe).</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Répondre aux recommandations issues de l'audit de sécurité mené en interne.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Assurer la traçabilité des actions réalisées et accompagner les utilisateurs dans les changements apportés.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Réduire le risque de fuite ou d'altération de données en cas de vol ou d'accès non autorisé.</p>
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
              📋 Recensement et planification
            </h4>
            <p className="text-gray-700">
              J'ai tout d'abord identifié les postes non conformes à l'aide d'un inventaire des machines, en lien avec le rapport d'audit.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🔐 Déploiement de BitLocker par GPO
            </h4>
            <p className="text-gray-700">
              J'ai configuré et appliqué une stratégie de groupe pour déployer BitLocker à distance, en définissant les politiques de chiffrement, la méthode de sauvegarde des clés, et les options de démarrage sécurisé.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🛡️ Sécurisation du BIOS
            </h4>
            <p className="text-gray-700">
              Sur chaque machine concernée, j'ai accédé au BIOS afin de définir un mot de passe administrateur, empêchant ainsi toute modification matérielle sans autorisation.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              ✅ Tests et vérifications
            </h4>
            <p className="text-gray-700">
              Des tests de démarrage et de récupération ont été effectués pour s'assurer que le chiffrement n'impactait pas l'activité, et que les clés étaient correctement stockées.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              👥 Sensibilisation des utilisateurs
            </h4>
            <p className="text-gray-700">
              J'ai informé les utilisateurs des changements, répondu à leurs interrogations sur le fonctionnement de BitLocker et assuré un accompagnement dans l'usage post-déploiement notamment sur le changement de leurs mots de passe.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              📁 Suivi documentaire
            </h4>
            <p className="text-gray-700">
              Un fichier Excel de suivi a été élaboré, regroupant les machines sécurisées, les dates de déploiement, et l'état du chiffrement pour assurer une traçabilité rigoureuse.
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
              <Link to="/skills#autonomie" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Autonomie</h5>
                <p className="text-sm text-gray-600">J'ai mené le projet en totale autonomie, depuis l'analyse des failles jusqu'au déploiement des solutions.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#rigueur" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rigueur</h5>
                <p className="text-sm text-gray-600">Indispensable dans la mise en conformité : chaque étape devait être validée sans erreur.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#esprit-analyse" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Esprit d'analyse</h5>
                <p className="text-sm text-gray-600">J'ai analysé les résultats de l'audit de sécurité pour prioriser les failles à corriger.</p>
              </Link>
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
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rédaction</h5>
                <p className="text-sm text-gray-600">Création de supports de suivi (Excel) facilitant le contrôle et les audits futurs.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#organisation-personnelle" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Organisation personnelle</h5>
                <p className="text-sm text-gray-600">Planification et suivi rigoureux des étapes de sécurisation.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div>
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#administration-windows" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Système Windows / Active Directory</h5>
                <p className="text-sm text-gray-600">Création et application de GPO spécifiques au chiffrement.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#securite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Sécurité informatique</h5>
                <p className="text-sm text-gray-600">Configuration et application efficaces des règles de chiffrement via BitLocker.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils utilisés */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-xl mb-6 text-cyan-800 flex items-center gap-2">
          🛠️ Outils utilisés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">BitLocker</h5>
            <p className="text-sm text-gray-600">Pour le chiffrement des disques dur des postes de travail.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">GPO (Group Policy Management)</h5>
            <p className="text-sm text-gray-600">Pour la configuration et le déploiement à grande échelle.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">BIOS/UEFI</h5>
            <p className="text-sm text-gray-600">Pour la sécurisation matérielle des machines.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Excel</h5>
            <p className="text-sm text-gray-600">Pour le suivi administratif et technique des machines.</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-xl mb-4 text-teal-800 flex items-center gap-2">
          📝 Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ce projet m'a permis de développer une approche complète de la sécurisation des postes de travail, à la fois sur les plans logiciel et matériel. J'ai consolidé mes compétences en gestion des GPO, en administration système et en communication utilisateur. La rigueur exigée m'a appris à respecter une méthodologie stricte tout en maintenant la fluidité de l'activité opérationnelle. Cette mission m'a également sensibilisé à l'importance de la documentation dans le cadre de démarches de conformité, et m'a permis de mieux intégrer les enjeux de sécurité dans une logique métier.
        </p>
      </div>
    </div>
  );
};

const renderInformatiqueIndustrielleContent = () => {
  return (
    <div className="space-y-8">
      {/* Contexte du projet */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-xl mb-4 text-blue-800 flex items-center gap-2">
          🧭 Contexte du projet
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Dans un environnement industriel à forte contrainte de production, j'ai été amené à prendre en main l'intégralité du périmètre informatique en atelier, suite au départ du technicien en charge. L'entreprise faisait face à une forte rotation de personnel intérimaire, ce qui impliquait une gestion dynamique des comptes et des droits d'accès via Active Directory.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          En parallèle, les lignes de production reposaient sur un parc hétérogène de machines industrielles (IMA, Glatt, Siemens, Marchesini) nécessitant des interventions régulières pour assurer la continuité de fonctionnement. J'ai également réalisé des audits de ligne pour identifier les risques et points critiques.
        </p>
      </div>

      {/* Objectifs */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-xl mb-4 text-green-800 flex items-center gap-2">
          🎯 Objectifs
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Assurer la gestion des comptes utilisateurs dans Active Directory en réponse au turnover important de personnel.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Maintenir la disponibilité des équipements informatiques liés à la production (pupitres, interfaces, PC industriels).</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Intervenir rapidement en cas d'incident pour ne pas perturber la chaîne de production.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Réaliser un audit complet des postes en atelier pour identifier les risques, incohérences et points critiques.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Collaborer efficacement avec les opérateurs et techniciens de ligne pour adapter les configurations aux besoins réels.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Débloquer et maintenir en condition opérationnelle des lignes pilotées par des systèmes complexes (IMA, IFIX, Siemens...).</p>
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
              🔧 Gestion des comptes et audit du parc
            </h4>
            <p className="text-gray-700">
              Création, modification et suppression des comptes utilisateurs sur Active Directory selon les entrées/sorties en atelier. Étiquetage des machines, vérification des noms dans AD, nettoyage des doublons et détection des incohérences.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🏭 Interventions techniques sur lignes de production
            </h4>
            <p className="text-gray-700">
              Déblocage d'une ligne de conditionnement IMA, reconfiguration du PC industriel via AD pour rétablir la communication. Assistance sur machines Glatt et Marchesini, interventions sur les pupitres Siemens (HMI), et ajustements dans les logiciels de supervision IFIX.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🧪 Audit de ligne et continuité de service
            </h4>
            <p className="text-gray-700">
              Réalisation d'un audit de l'environnement informatique de production : recensement des postes, configurations, utilisateurs associés, criticité des machines. Création d'un tableau de suivi des postes de production pour fiabiliser les futures interventions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🤝 Communication et coordination
            </h4>
            <p className="text-gray-700">
              Dialogue constant avec les chefs d'équipe et opérateurs pour recueillir les besoins métier et anticiper les incidents. Explication des procédures d'accès, règles de sécurité informatique et dépannage de premier niveau.
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
              <Link to="/skills#autonomie" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Autonomie</h5>
                <p className="text-sm text-gray-600">Prise de poste sans passation, responsabilité de l'ensemble du périmètre industriel.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#esprit-analyse" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Esprit d'analyse</h5>
                <p className="text-sm text-gray-600">Diagnostic rapide des pannes, compréhension des causes profondes.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#organisation-personnelle" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Organisation personnelle</h5>
                <p className="text-sm text-gray-600">Gestion simultanée de demandes urgentes, planification des audits.</p>
              </Link>
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
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rédaction</h5>
                <p className="text-sm text-gray-600">Élaboration de tableaux de suivi et documentation claire pour les audits de ligne.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#rigueur" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rigueur</h5>
                <p className="text-sm text-gray-600">Intervention en environnement sensible où la moindre erreur peut entraîner un arrêt de production.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div>
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#administration-windows" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Systèmes Windows / Active Directory</h5>
                <p className="text-sm text-gray-600">Gestion complète des comptes, intégration des postes au domaine.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#securite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Sécurité informatique</h5>
                <p className="text-sm text-gray-600">Renforcement des accès aux postes et aux systèmes critiques.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#bureautique-productivite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Support technique</h5>
                <p className="text-sm text-gray-600">Dépannage en environnement sensible, interventions en autonomie sur des systèmes critiques.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils utilisés */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-xl mb-6 text-cyan-800 flex items-center gap-2">
          🛠️ Outils utilisés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Active Directory</h5>
            <p className="text-sm text-gray-600">Gestion des comptes utilisateurs et intégration des postes industriels au domaine.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">IFIX (SCADA)</h5>
            <p className="text-sm text-gray-600">Système de supervision et contrôle des processus industriels.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Pupitres Siemens</h5>
            <p className="text-sm text-gray-600">Interfaces homme-machine pour le pilotage des équipements de production.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Microsoft Excel</h5>
            <p className="text-sm text-gray-600">Audit et suivi des postes de production.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Machines industrielles</h5>
            <p className="text-sm text-gray-600">IMA, Glatt, Marchesini - équipements de conditionnement pharmaceutique.</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-xl mb-4 text-teal-800 flex items-center gap-2">
          📝 Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ce projet m'a permis de gagner en autonomie dans un environnement sensible, où la moindre erreur pouvait entraîner un arrêt de production. J'ai développé ma réactivité, ma rigueur et mon aisance à intervenir sur des systèmes critiques sans supervision. L'audit des machines industrielles et les interventions sur ligne m'ont donné une compréhension plus fine de l'informatique industrielle, du dialogue homme-machine, et de l'importance de l'intégration entre IT et production. Cette expérience a été un accélérateur de compétences techniques et humaines dans un contexte très opérationnel.
        </p>
      </div>
    </div>
  );
};

const renderMagellanSagtContent = () => {
  return (
    <div className="space-y-8">
      {/* Contexte du projet */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-xl mb-4 text-blue-800 flex items-center gap-2">
          🧭 Contexte du projet
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Dans le cadre du programme MAGELLAN mené par APRR, j'ai participé à l'amélioration du module SAGT (Système d'Aide à la Gestion du Trafic), un outil essentiel qui automatise les actions à engager lors d'événements majeurs sur le réseau autoroutier, comme les accidents, les bouchons ou les intempéries.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Le cœur du système repose sur un ensemble de règles qui déclenchent des scénarios en temps réel (signalisation dynamique, alertes, consignes). Cependant, ces règles étaient nombreuses, peu harmonisées, et difficiles à maintenir. J'ai donc été mobilisé pour analyser leur structure, repérer les incohérences et proposer une nomenclature claire et standardisée, afin de faciliter la création, la lisibilité et la gestion quotidienne de ces automatismes par les équipes opérationnelles.
        </p>
      </div>

      {/* Objectifs */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-xl mb-4 text-green-800 flex items-center gap-2">
          🎯 Objectifs
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Reprendre l'ensemble des règles du module SAGT pour en améliorer la lisibilité et la cohérence.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Définir une nomenclature standardisée permettant de structurer les noms, catégories et formats des règles d'automatisation.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Faciliter la création de nouvelles règles par les utilisateurs internes, en réduisant les erreurs et le temps de paramétrage.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Renforcer la fiabilité fonctionnelle du système en garantissant une uniformité dans les déclencheurs et scénarios gérés par le logiciel.</p>
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
              🔹 Analyse des règles existantes
            </h4>
            <p className="text-gray-700">
              J'ai commencé par un audit complet des règles déjà en place dans le module SAGT. Ce travail m'a permis d'identifier un manque d'uniformité dans les noms, les formats et les structures logiques employées.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🔹 Construction d'une nomenclature normalisée
            </h4>
            <p className="text-gray-700">
              J'ai conçu un tableau de nomenclature regroupant toutes les catégories de règles, leurs usages types, les bonnes pratiques de rédaction, ainsi que des modèles de nommage. Cet outil est devenu une référence pour les équipes.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🔹 Mise en place d'un support documentaire
            </h4>
            <p className="text-gray-700">
              J'ai intégré cette nomenclature à une documentation claire et accessible, partagée avec les référents métiers pour garantir une utilisation cohérente et partagée.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🔹 Accompagnement des équipes opérationnelles
            </h4>
            <p className="text-gray-700">
              J'ai expliqué les objectifs de cette démarche aux utilisateurs du SAGT, en illustrant les bénéfices concrets pour leur quotidien (gain de temps, moins d'erreurs, plus de clarté).
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🔹 Amélioration continue
            </h4>
            <p className="text-gray-700">
              Un système de retour d'expérience a été mis en place afin d'adapter la nomenclature si besoin, en fonction des retours du terrain et de l'évolution des besoins.
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
              <Link to="/skills#organisation-personnelle" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Organisation personnelle</h5>
                <p className="text-sm text-gray-600">J'ai planifié mes phases d'analyse, d'uniformisation et de documentation de façon autonome et structurée.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#esprit-analyse" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Esprit d'analyse</h5>
                <p className="text-sm text-gray-600">Cette compétence m'a permis de décrypter un environnement complexe de règles automatisées.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#rigueur" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rigueur</h5>
                <p className="text-sm text-gray-600">Chaque règle impactait directement le comportement du système d'information en temps réel.</p>
              </Link>
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
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Communication interservices</h5>
                <p className="text-sm text-gray-600">J'ai interagi avec plusieurs pôles métiers pour comprendre leurs attentes et recueillir les besoins.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#management-projet" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Gestion de projet</h5>
                <p className="text-sm text-gray-600">J'ai géré le projet de manière autonome, depuis la compréhension des logiques applicatives jusqu'à la restitution des règles aux utilisateurs.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div>
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rédaction</h5>
                <p className="text-sm text-gray-600">J'ai produit une documentation structurée, permettant aux équipes de créer, modifier ou analyser les règles métiers en toute autonomie.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#conduite-projet-logiciel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Conduite de projet logiciel</h5>
                <p className="text-sm text-gray-600">Cette compétence a été essentielle pour structurer une démarche complète : analyse de l'existant, élaboration d'une nomenclature, validation fonctionnelle et documentation.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils utilisés */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-xl mb-6 text-cyan-800 flex items-center gap-2">
          🛠️ Outils utilisés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">MAGELLAN – Module SAGT</h5>
            <p className="text-sm text-gray-600">Logiciel métier pour la gestion automatisée des événements trafic.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Tableaux Excel</h5>
            <p className="text-sm text-gray-600">Pour la structuration de la nomenclature.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Outils internes APRR</h5>
            <p className="text-sm text-gray-600">Pour le partage documentaire et les échanges métiers (intranet, partages réseau).</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-xl mb-4 text-teal-800 flex items-center gap-2">
          📝 Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ce projet m'a permis de me positionner comme un acteur force de proposition dans l'amélioration d'un outil stratégique pour la régulation du trafic autoroutier. En combinant structuration, écoute métier et documentation rigoureuse, j'ai contribué à simplifier un système complexe et à renforcer la qualité des services opérationnels. Cette expérience a enrichi ma vision fonctionnelle des outils, tout en renforçant mes compétences en coordination, en formalisation de bonnes pratiques et en accompagnement au changement.
        </p>
      </div>
    </div>
  );
};

const renderMagellanMeteorContent = () => {
  return (
    <div className="space-y-8">
      {/* Contexte du projet */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-xl mb-4 text-blue-800 flex items-center gap-2">
          🧭 Contexte du projet
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Dans le cadre du programme MAGELLAN porté par APRR, l'outil METEOR a été mis en place pour permettre aux opérateurs autoroutiers de visualiser en temps réel les conditions météo et de trafic sur l'ensemble du réseau. Cet outil stratégique devait centraliser les informations issues de capteurs (stations météo, capteurs de comptage, etc.) pour faciliter la prise de décision en salle de contrôle.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Intégré à l'équipe administratrice fonctionnelle, j'ai participé activement au paramétrage des "contextes" de surveillance, qui définissent les équipements et zones visibles par chaque poste de commandement. Mon rôle a été de structurer et adapter l'affichage en fonction des besoins spécifiques des différentes régions, en veillant à ce que chaque utilisateur dispose d'une interface claire, pertinente et cohérente avec son périmètre géographique.
        </p>
      </div>

      {/* Objectifs */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-xl mb-4 text-green-800 flex items-center gap-2">
          🎯 Objectifs
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Structurer les contextes de surveillance dans METEOR selon les zones géographiques et les priorités régionales.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Assurer une visualisation claire et pertinente des équipements météo/trafic (stations, capteurs, etc.) pour chaque salle de contrôle.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Renforcer la fiabilité de la prise de décision grâce à un affichage métier cohérent.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Améliorer l'ergonomie de la plateforme pour simplifier l'usage au quotidien par les opérateurs.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 mt-1">•</span>
            <p>Assurer la liaison fonctionnelle entre les besoins terrains et les configurations techniques.</p>
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
              📊 Analyse fonctionnelle des besoins régionaux
            </h4>
            <p className="text-gray-700">
              J'ai recueilli les besoins spécifiques des différents postes de commandement en termes de zones surveillées, événements critiques et capteurs associés.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🗺️ Création de contextes personnalisés
            </h4>
            <p className="text-gray-700">
              J'ai configuré des vues adaptées pour chaque région, en y intégrant les bons équipements de mesure et en validant la cohérence avec le terrain.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              ✅ Tests et validation croisée
            </h4>
            <p className="text-gray-700">
              Chaque configuration a été testée avec les utilisateurs finaux pour garantir une adéquation parfaite entre affichage et périmètre d'intervention.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              📝 Mise à jour documentaire
            </h4>
            <p className="text-gray-700">
              J'ai rédigé un guide interne pour faciliter la maintenance future des contextes créés et assurer la continuité opérationnelle.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
            <h4 className="font-semibold text-lg text-purple-700 mb-2 flex items-center gap-2">
              🤝 Collaboration transverse
            </h4>
            <p className="text-gray-700">
              J'ai interagi avec les pôles techniques, régionaux et l'équipe MAGELLAN pour synchroniser le paramétrage avec l'évolution du réseau.
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
              <Link to="/skills#esprit-analyse" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Esprit d'analyse</h5>
                <p className="text-sm text-gray-600">J'ai analysé les besoins métiers régionaux, décrypté les configurations existantes, et proposé des ajustements ergonomiques concrets.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#autonomie" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Autonomie</h5>
                <p className="text-sm text-gray-600">J'ai géré la configuration des vues métier de façon autonome, en intégrant les spécificités régionales sans assistance technique directe.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#organisation-personnelle" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Organisation personnelle</h5>
                <p className="text-sm text-gray-600">Planification et coordination efficace des différentes phases de configuration et de tests.</p>
              </Link>
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
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Rédaction</h5>
                <p className="text-sm text-gray-600">J'ai documenté les choix de configuration, expliqué les modifications apportées aux interfaces, et rédigé des supports de communication pour les utilisateurs finaux.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#communication-relationnel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Communication interservices</h5>
                <p className="text-sm text-gray-600">J'ai été l'intermédiaire entre les référents métiers, les utilisateurs terrain et les équipes techniques.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Savoir-faire techniques */}
        <div>
          <h4 className="font-semibold text-lg text-orange-700 mb-4 flex items-center gap-2">
            💻 Savoir-faire techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#bureautique-productivite" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Ergonomie et interfaces homme-machine</h5>
                <p className="text-sm text-gray-600">J'ai ajusté les interfaces de la plateforme METEOR pour améliorer la lisibilité et la réactivité de l'outil en situation critique.</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
              <Link to="/skills#conduite-projet-logiciel" className="block hover:text-orange-600 transition-colors">
                <h5 className="font-medium text-orange-600 mb-2 hover:underline">Conduite de projet logiciel</h5>
                <p className="text-sm text-gray-600">Ce projet a nécessité un pilotage méthodique des évolutions de la plateforme METEOR, en tenant compte des spécificités de chaque région.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils utilisés */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-xl mb-6 text-cyan-800 flex items-center gap-2">
          🛠️ Outils utilisés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">METEOR (outil métier APRR)</h5>
            <p className="text-sm text-gray-600">Plateforme de visualisation temps réel des conditions météo et de trafic autoroutier.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Excel</h5>
            <p className="text-sm text-gray-600">Pour le suivi de configuration et la documentation des contextes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
            <h5 className="font-medium text-cyan-600 mb-2">Documentation fonctionnelle interne</h5>
            <p className="text-sm text-gray-600">Outils de partage et de collaboration pour la documentation des processus.</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-xl mb-4 text-teal-800 flex items-center gap-2">
          📝 Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ce projet m'a permis de m'immerger dans un environnement métier spécifique, en m'adaptant à un outil critique utilisé par les équipes d'exploitation autoroutière. J'ai renforcé mes compétences en paramétrage fonctionnel, en communication interservices et en analyse terrain. En contribuant à la fiabilité de l'outil METEOR, j'ai participé activement à l'amélioration de la prise de décision opérationnelle. Cette expérience a enrichi ma capacité à transformer des besoins concrets en solutions techniques dans un contexte de gestion de réseau complexe.
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
            {project.id === "projet-1-standardisation-parc" && renderStandardisationContent()}
            {project.id === "projet-2-migration-office" && renderMigrationOfficeContent()}
            {project.id === "projet-3-audit-securite" && renderAuditSecuriteContent()}
            {project.id === "projet-4-informatique-industrielle" && renderInformatiqueIndustrielleContent()}
            {project.id === "projet-5-magellan-sagt" && renderMagellanSagtContent()}
            {project.id === "projet-6-magellan-meteor" && renderMagellanMeteorContent()}
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
