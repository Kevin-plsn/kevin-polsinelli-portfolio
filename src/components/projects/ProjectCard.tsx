import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, CheckCircle2, Target, Wrench, Bookmark, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface ProjectCardProps {
  project: Project;
  expandedProject: string | null;
  onToggle: (id: string) => void;
  showAllProjects: boolean;
  onBackToAll: () => void;
  getSkillName: (skillId: string) => string;
}

const ProjectCard = ({ project, expandedProject, onToggle, showAllProjects, onBackToAll, getSkillName }: ProjectCardProps) => {
  const isExpanded = expandedProject === project.id;

  const renderSkillBadge = (skillId: string) => {
    const skillRoutes: {[key: string]: string} = {
      "administration-windows": "/skills#administration-windows",
      "securite": "/skills#securite",
      "bureautique-productivite": "/skills#bureautique-productivite",
      "conduite-projet-logiciel": "/skills#conduite-projet-logiciel",
      "management-projet": "/skills#management-projet",
      "communication-relationnel": "/skills#communication-relationnel",
      "esprit-analyse": "/skills#esprit-analyse",
      "rigueur": "/skills#rigueur",
      "initiative": "/skills#initiative",
      "organisation-personnelle": "/skills#organisation-personnelle",
      "autonomie": "/skills#autonomie"
    };

    return (
      <Badge 
        key={skillId} 
        variant="secondary" 
        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = skillRoutes[skillId] || "/skills";
        }}
      >
        {getSkillName(skillId)}
      </Badge>
    );
  };

  const renderExpandedContent = () => {
    if (project.id === "projet-1-standardisation-parc") {
      return (
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contexte du projet</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.context}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Objectifs</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{obj}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.realization}</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map(skillId => renderSkillBadge(skillId))}
          </div>
        </div>
      );
    }

    if (project.id === "projet-2-migration-office") {
      return (
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contexte du projet</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.context}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Objectifs</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{obj}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.realization}</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map(skillId => renderSkillBadge(skillId))}
          </div>
        </div>
      );
    }

    if (project.id === "projet-3-audit-securite") {
      return (
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contexte du projet</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.context}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Objectifs</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{obj}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.realization}</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map(skillId => renderSkillBadge(skillId))}
          </div>
        </div>
      );
    }

    if (project.id === "projet-4-informatique-industrielle") {
      return (
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contexte du projet</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.context}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Objectifs</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{obj}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.realization}</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map(skillId => renderSkillBadge(skillId))}
          </div>
        </div>
      );
    }

    if (project.id === "projet-5-magellan-sagt") {
      return (
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contexte du projet</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>
                Dans le cadre du programme MAGELLAN mené par APRR, j'ai participé à l'amélioration du module SAGT (Système d'Aide à la Gestion du Trafic), un outil essentiel qui automatise les actions à engager lors d'événements majeurs sur le réseau autoroutier, comme les accidents, les bouchons ou les intempéries. Le cœur du système repose sur un ensemble de règles qui déclenchent des scénarios en temps réel (signalisation dynamique, alertes, consignes).
              </p>
              <p>
                Cependant, ces règles étaient nombreuses, peu harmonisées, et difficiles à maintenir. J'ai donc été mobilisé pour analyser leur structure, repérer les incohérences et proposer une nomenclature claire et standardisée, afin de faciliter la création, la lisibilité et la gestion quotidienne de ces automatismes par les équipes opérationnelles.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Objectifs</CardTitle>
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

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div className="border-l-4 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold text-lg">🔹 Analyse des règles existantes</h4>
                <p className="text-gray-700 mt-1">
                  J'ai commencé par un audit complet des règles déjà en place dans le module SAGT. Ce travail m'a permis d'identifier un manque d'uniformité dans les noms, les formats et les structures logiques employées.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold text-lg">🔹 Construction d'une nomenclature normalisée</h4>
                <p className="text-gray-700 mt-1">
                  J'ai conçu un tableau de nomenclature regroupant toutes les catégories de règles, leurs usages types, les bonnes pratiques de rédaction, ainsi que des modèles de nommage. Cet outil est devenu une référence pour les équipes.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold text-lg">🔹 Mise en place d'un support documentaire</h4>
                <p className="text-gray-700 mt-1">
                  J'ai intégré cette nomenclature à une documentation claire et accessible, partagée avec les référents métiers pour garantir une utilisation cohérente et partagée.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold text-lg">🔹 Accompagnement des équipes opérationnelles</h4>
                <p className="text-gray-700 mt-1">
                  J'ai expliqué les objectifs de cette démarche aux utilisateurs du SAGT, en illustrant les bénéfices concrets pour leur quotidien (gain de temps, moins d'erreurs, plus de clarté).
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold text-lg">🔹 Amélioration continue</h4>
                <p className="text-gray-700 mt-1">
                  Un système de retour d'expérience a été mis en place afin d'adapter la nomenclature si besoin, en fonction des retours du terrain et de l'évolution des besoins.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Bookmark className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Compétences mobilisées</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">🧠 Compétences transverses</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Organisation personnelle</h5>
                    <p className="text-sm text-gray-600">J'ai planifié mes phases d'analyse, d'uniformisation et de documentation de façon autonome et structurée, avec des points de contrôle à chaque étape.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Esprit d'analyse</h5>
                    <p className="text-sm text-gray-600">Cette compétence m'a permis de décrypter un environnement complexe de règles automatisées, de repérer les incohérences, et de proposer une structuration efficace et durable.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Adaptabilité</h5>
                    <p className="text-sm text-gray-600">Le projet impliquait des règles très différentes d'une région à l'autre, et des pratiques métiers hétérogènes. J'ai su m'adapter rapidement aux cas spécifiques.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Capacité d'apprentissage</h5>
                    <p className="text-sm text-gray-600">J'ai dû comprendre le fonctionnement d'un système métier que je ne connaissais pas par l'observation, les échanges et l'analyse des données.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Rigueur</h5>
                    <p className="text-sm text-gray-600">Chaque règle impactait directement le comportement du système. J'ai appliqué une vérification systématique pour éviter toute erreur fonctionnelle.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">🧩 Savoir-faire généraux</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Communication interservices</h5>
                    <p className="text-sm text-gray-600">J'ai interagi avec plusieurs pôles métiers pour comprendre leurs attentes, recueillir les besoins et présenter les outils mis en place de façon pédagogique.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Gestion de projet</h5>
                    <p className="text-sm text-gray-600">J'ai géré le projet de manière autonome, depuis la compréhension des logiques applicatives jusqu'à la restitution des règles aux utilisateurs.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">💻 Savoir-faire techniques</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Rédaction</h5>
                    <p className="text-sm text-gray-600">J'ai produit une documentation structurée, permettant aux équipes de créer, modifier ou analyser les règles métiers en toute autonomie.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-1">Conduite de projet logiciel</h5>
                    <p className="text-sm text-gray-600">Cette compétence a été essentielle pour structurer une démarche complète : analyse de l'existant, élaboration d'une nomenclature, validation fonctionnelle et documentation.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">🧰 Outils utilisés</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">MAGELLAN – Module SAGT :</span> logiciel métier pour la gestion automatisée des événements trafic.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Tableaux Excel :</span> pour la structuration de la nomenclature.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Outils internes APRR :</span> pour le partage documentaire et les échanges métiers (intranet, partages réseau).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">📝 Conclusion</h4>
                <p className="text-gray-700">
                  Ce projet m'a permis de me positionner comme un acteur force de proposition dans l'amélioration d'un outil stratégique pour la régulation du trafic autoroutier. En combinant structuration, écoute métier et documentation rigoureuse, j'ai contribué à simplifier un système complexe et à renforcer la qualité des services opérationnels.
                </p>
                <p className="text-gray-700 mt-3">
                  Cette expérience a enrichi ma vision fonctionnelle des outils, tout en renforçant mes compétences en coordination, en formalisation de bonnes pratiques et en accompagnement au changement.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map(skillId => renderSkillBadge(skillId))}
          </div>
        </div>
      );
    }

    if (project.id === "projet-6-magellan-meteor") {
      return (
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contexte du projet</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.context}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Objectifs</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{obj}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 prose max-w-none text-gray-700">
              <p>{project.realization}</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map(skillId => renderSkillBadge(skillId))}
          </div>
        </div>
      );
    }

    return null;
  };

  if (isExpanded && !showAllProjects) {
    return (
      <div className="col-span-full max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={onBackToAll}
            className="flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour à tous les projets
          </Button>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
            <CardDescription className="text-lg">{project.shortDesc}</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {renderExpandedContent()}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onToggle(project.id)}
    >
      <CardHeader>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <CardTitle className="text-primary">{project.title}</CardTitle>
        <CardDescription>{project.shortDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map(skillId => renderSkillBadge(skillId))}
          {project.skills.length > 3 && (
            <Badge variant="outline">+{project.skills.length - 3} autres</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
