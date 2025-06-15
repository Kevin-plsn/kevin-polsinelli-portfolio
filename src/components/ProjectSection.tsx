
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, CheckCircle2, Compass, Target, Wrench, Users, Settings } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="project" className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">Projet MAGELLAN – SAGT</h2>
        <p className="text-lg text-gray-600 mb-8">
          Amélioration du module SAGT pour la gestion automatisée des événements trafic avec standardisation des règles et nomenclature.
        </p>
        
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-orange-50">
            <div className="bg-orange-100 p-2 rounded-full">
              <Compass className="h-6 w-6 text-orange-600" />
            </div>
            <CardTitle className="text-orange-700">🧭 Contexte du projet</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700 mb-4">
              Dans le cadre du programme MAGELLAN mené par APRR, j'ai participé à l'amélioration du module SAGT (Système d'Aide à la Gestion du Trafic), un outil essentiel qui automatise les actions à engager lors d'événements majeurs sur le réseau autoroutier, comme les accidents, les bouchons ou les intempéries.
            </p>
            <p className="text-gray-700 mb-4">
              Le cœur du système repose sur un ensemble de règles qui déclenchent des scénarios en temps réel (signalisation dynamique, alertes, consignes). Cependant, ces règles étaient nombreuses, peu harmonisées, et difficiles à maintenir.
            </p>
            <p className="text-gray-700">
              J'ai donc été mobilisé pour analyser leur structure, repérer les incohérences et proposer une nomenclature claire et standardisée, afin de faciliter la création, la lisibilité et la gestion quotidienne de ces automatismes par les équipes opérationnelles.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-pink-50">
            <div className="bg-pink-100 p-2 rounded-full">
              <Target className="h-6 w-6 text-pink-600" />
            </div>
            <CardTitle className="text-pink-700">🎯 Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Reprendre l'ensemble des règles du module SAGT pour en améliorer la lisibilité et la cohérence.</p>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Définir une nomenclature standardisée permettant de structurer les noms, catégories et formats des règles d'automatisation.</p>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Faciliter la création de nouvelles règles par les utilisateurs internes, en réduisant les erreurs et le temps de paramétrage.</p>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Renforcer la fiabilité fonctionnelle du système en garantissant une uniformité dans les déclencheurs et scénarios gérés par le logiciel.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-green-50">
            <div className="bg-green-100 p-2 rounded-full">
              <Wrench className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-green-700">🛠️ Réalisations</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-green-700 mb-2">Analyse des règles existantes</h4>
                <p className="text-gray-700">
                  J'ai commencé par un audit complet des règles déjà en place dans le module SAGT. Ce travail m'a permis d'identifier un manque d'uniformité dans les noms, les formats et les structures logiques employées.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-green-700 mb-2">Construction d'une nomenclature normalisée</h4>
                <p className="text-gray-700">
                  J'ai conçu un tableau de nomenclature regroupant toutes les catégories de règles, leurs usages types, les bonnes pratiques de rédaction, ainsi que des modèles de nommage. Cet outil est devenu une référence pour les équipes.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-green-700 mb-2">Mise en place d'un support documentaire</h4>
                <p className="text-gray-700">
                  J'ai intégré cette nomenclature à une documentation claire et accessible, partagée avec les référents métiers pour garantir une utilisation cohérente et partagée.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-green-700 mb-2">Accompagnement des équipes opérationnelles</h4>
                <p className="text-gray-700">
                  J'ai expliqué les objectifs de cette démarche aux utilisateurs du SAGT, en illustrant les bénéfices concrets pour leur quotidien (gain de temps, moins d'erreurs, plus de clarté).
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-green-700 mb-2">Amélioration continue</h4>
                <p className="text-gray-700">
                  Un système de retour d'expérience a été mis en place afin d'adapter la nomenclature si besoin, en fonction des retours du terrain et de l'évolution des besoins.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-blue-50">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-700">✅ Compétences mobilisées</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">🧠 Compétences comportementales</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg shadow-sm border border-pink-200">
                  <h5 className="font-medium mb-2 text-pink-700">Esprit d'analyse</h5>
                  <p className="text-sm text-gray-600">Cette compétence m'a permis de décrypter un environnement complexe de règles automatisées, de repérer les incohérences, et de proposer une structuration efficace et durable.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg shadow-sm border border-pink-200">
                  <h5 className="font-medium mb-2 text-pink-700">Autonomie</h5>
                  <p className="text-sm text-gray-600">J'ai planifié mes phases d'analyse, d'uniformisation et de documentation de façon autonome et structurée, avec des points de contrôle à chaque étape.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg shadow-sm border border-pink-200">
                  <h5 className="font-medium mb-2 text-pink-700">Adaptabilité</h5>
                  <p className="text-sm text-gray-600">Le projet impliquait des règles très différentes d'une région à l'autre, et des pratiques métiers hétérogènes. J'ai su m'adapter rapidement aux cas spécifiques tout en proposant une solution centralisée et homogène.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-4">🧩 Savoir-faire généraux</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                  <h5 className="font-medium mb-2 text-green-700">Gestion de projet</h5>
                  <p className="text-sm text-gray-600">J'ai géré le projet de manière autonome, depuis la compréhension des logiques applicatives jusqu'à la restitution des règles aux utilisateurs. J'ai organisé le travail par phases et garanti une cohérence globale entre les objectifs fixés et les livrables produits.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                  <h5 className="font-medium mb-2 text-green-700">Rédaction</h5>
                  <p className="text-sm text-gray-600">J'ai produit une documentation structurée, permettant aux équipes de créer, modifier ou analyser les règles métiers en toute autonomie. Cette nomenclature facilite également la formation et la montée en compétence des nouveaux arrivants.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">💻 Savoir-faire techniques</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
                  <h5 className="font-medium mb-2 text-blue-700">Conduite de projet logiciel</h5>
                  <p className="text-sm text-gray-600">Cette compétence a été essentielle pour structurer une démarche complète : analyse de l'existant, élaboration d'une nomenclature, validation fonctionnelle et documentation. Elle m'a permis d'aligner les règles d'automatisation aux besoins métier, tout en gardant une logique de projet structurée et évolutive.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-indigo-50">
            <div className="bg-indigo-100 p-2 rounded-full">
              <Settings className="h-6 w-6 text-indigo-600" />
            </div>
            <CardTitle className="text-indigo-700">🧰 Outils utilisés</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-indigo-700">MAGELLAN – Module SAGT :</span> logiciel métier pour la gestion automatisée des événements trafic.
                </p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-indigo-700">Tableaux Excel :</span> pour la structuration de la nomenclature.
                </p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-200 md:col-span-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-indigo-700">Outils internes APRR :</span> pour le partage documentaire et les échanges métiers (intranet, partages réseau).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-purple-50">
            <div className="bg-purple-100 p-2 rounded-full">
              <Bookmark className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-purple-700">📝 Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700 mb-4">
              Ce projet m'a permis de me positionner comme un acteur force de proposition dans l'amélioration d'un outil stratégique pour la régulation du trafic autoroutier. En combinant structuration, écoute métier et documentation rigoureuse, j'ai contribué à simplifier un système complexe et à renforcer la qualité des services opérationnels.
            </p>
            <p className="text-gray-700">
              Cette expérience a enrichi ma vision fonctionnelle des outils, tout en renforçant mes compétences en coordination, en formalisation de bonnes pratiques et en accompagnement au changement.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectSection;
