import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Computer, 
  ChevronLeft, 
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
import { projects } from "@/data/projects";

type Skill = {
  id: string;
  icon: React.ReactNode;
  title: string;
  type: "technique" | "comportementale" | "generale";
  definition: string;
  application: string;
  assessment: string;
  relatedProjects: string[];
};

const SkillsPage = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(true);
  const [filter, setFilter] = useState<"all" | "technique" | "comportementale" | "generale">("all");
  const location = useLocation();
  const navigate = useNavigate();

  // Extract skill ID from URL hash if present
  useEffect(() => {
    const skillId = location.hash.replace('#', '');
    if (skillId && skills.some(s => s.id === skillId)) {
      setExpandedSkill(skillId);
      setShowAllSkills(false);
      // Scroll to top when a skill is selected
      window.scrollTo(0, 0);
    }
  }, [location]);

  const skills: Skill[] = [
    {
      id: "management-projet",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      title: "Gestion de projet",
      type: "generale",
      definition: "Capacité à structurer, planifier, piloter et finaliser un projet en respectant les objectifs, les délais, les ressources et les contraintes.",
      application: "Cette compétence a été activement mobilisée à travers plusieurs projets techniques menés en autonomie ou en coordination avec des collaborateurs.\n\nDans le projet de standardisation du parc d'impression, j'ai mené l'ensemble du cycle projet : diagnostic initial, élaboration des critères de choix, consultation des fournisseurs, prise de décision, déploiement du matériel, configuration du portail de supervision avec le prestataire, puis documentation et suivi. Chaque étape a été structurée à l'aide de tableaux de bord et points de validation avec les équipes. Pour Office 365, j'ai organisé la transition des utilisateurs en phases, priorisé les services les plus impactés, et anticipé les contraintes. J'ai veillé à intégrer une part importante d'accompagnement utilisateurs dans le calendrier, en pilotant à la fois les aspects techniques et humains du changement. Sur SAGT, j'ai structuré une méthodologie claire pour l'analyse des règles existantes, la création de standards, la diffusion des bonnes pratiques. Cette approche projet a permis d'atteindre les objectifs sans perturber le fonctionnement de l'outil métier.",
      assessment: "Pour moi, la gestion de projet n'est pas seulement une méthode : c'est une posture. Elle permet de garder une vision d'ensemble tout en gérant les détails opérationnels du quotidien. J'ai appris à anticiper, à structurer mes tâches en étapes claires, à gérer les imprévus sans perdre de vue l'objectif final.\n\nJ'accorde une attention particulière à la communication tout au long du projet, que ce soit avec les utilisateurs, les responsables ou les prestataires. J'utilise des supports visuels simples pour partager l'avancement et favoriser la transparence.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-5-magellan-sagt"]
    },
    {
      id: "communication-relationnel",
      icon: <Users className="h-5 w-5" />,
      title: "Communication et relationnel",
      type: "generale",
      definition: "Capacité à interagir efficacement avec différents interlocuteurs, à adapter son discours selon le profil (technique, métier, utilisateur), et à entretenir une collaboration fluide dans un environnement professionnel.",
      application: "Dans les projets Migration Office 365, Audit de sécurité, Informatique industrielle, MAGELLAN – METEOR et MAGELLAN – SAGT, j'ai communiqué régulièrement avec les utilisateurs et les équipes métiers pour expliquer les changements, recueillir leurs besoins ou résoudre les incidents. Cette compétence m'a permis de créer un climat de confiance, de fluidifier les échanges techniques et d'assurer une meilleure compréhension des enjeux des projets.",
      assessment: "Cette compétence me permet aujourd'hui d'être un relais fiable entre les utilisateurs et les équipes techniques. Elle facilite la compréhension mutuelle, renforce la confiance, et garantit une meilleure adoption des solutions déployées. Elle est essentielle dans tout environnement de travail collaboratif ou en gestion de projet.",
      relatedProjects: ["projet-2-migration-office", "projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "esprit-analyse",
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Esprit d'analyse",
      type: "comportementale",
      definition: "Capacité à comprendre une situation complexe, identifier ses éléments clés, détecter les incohérences et proposer des solutions pertinentes en s'appuyant sur des faits et une réflexion structurée.",
      application: "Dans les projets Audit de sécurité, Standardisation du parc d'impression, MAGELLAN – SAGT, MAGELLAN – METEOR et Informatique industrielle, j'ai analysé des configurations techniques, identifié des incohérences, structuré des solutions concrètes et anticipé les impacts opérationnels. Cette compétence m'a permis de prendre des décisions éclairées dans des contextes où la précision était essentielle.",
      assessment: "L'esprit d'analyse me permet de traiter efficacement des situations techniques complexes, de faire ressortir les enjeux critiques, et d'élaborer des solutions adaptées. Il constitue un levier essentiel pour garantir la qualité, la cohérence et la pérennité des actions menées dans des environnements structurés.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "rigueur",
      icon: <Target className="h-5 w-5" />,
      title: "Rigueur",
      type: "comportementale",
      definition: "Capacité et respect à appliquer les méthodes de travail précises, les procédures et contraintes techniques, tout en assurant la fiabilité et la qualité des livrables produits.",
      application: "Les projets Migration Office 365,  Audit de sécurité et MAGELLAN – SAGT m'ont permis de comprendre à quel point la rigueur est essentielle pour garantir la fiabilité des déploiements, le respect des recommandations et la qualité des livrables. Cette compétence m'a permis d'aborder chaque phase avec une attention constante aux détails, en assurant des résultats stables et conformes aux attentes métier.",
      assessment: "La rigueur m'a permis de garantir la qualité et la fiabilité des actions menées sur des systèmes critiques. Elle renforce ma capacité à travailler dans des environnements exigeants, à produire des livrables fiables, et à limiter les erreurs en phase d'exécution. Cette approche méthodique est essentielle dans les domaines liés à la sécurité, à l'automatisation ou à la production.",
      relatedProjects: ["projet-2-migration-office", "projet-3-audit-securite", "projet-5-magellan-sagt"]
    },
    {
      id: "initiative",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Initiative",
      type: "generale",
      definition: "Capacité à proposer, anticiper ou entreprendre des actions sans y être formellement invité, dans le but d'améliorer une situation, de résoudre un problème ou de répondre à un besoin identifié sur le terrain.",
      application: "Dans les projets Standardisation du parc d'impression, Migration Office 365 et MAGELLAN – SAGT, j'ai identifié des problématiques non signalées et proposé des solutions concrètes pour améliorer l'organisation ou les outils. Cette compétence m'a permis d'apporter une réelle valeur ajoutée en anticipant les besoins et en structurant des réponses efficaces sans directive préalable.",
      assessment: "Ces initiatives ont démontré ma capacité à observer, analyser et agir rapidement pour résoudre des dysfonctionnements opérationnels. Elles m'ont permis de contribuer à une meilleure fluidité du service, de simplifier des processus internes, et de gagner en autonomie et en crédibilité au sein de l'équipe.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-5-magellan-sagt"]
    },
    {
      id: "organisation-personnelle",
      icon: <Clock className="h-5 w-5" />,
      title: "Organisation personnelle",
      type: "generale",
      definition: "Capacité à gérer efficacement son temps, ses priorités et ses tâches, afin d'atteindre les objectifs fixés dans les délais, même dans un environnement exigeant ou multitâche.",
      application: "Dans les projets Standardisation du parc d'impression, Migration Office 365, Audit de sécurité, Informatique industrielle et MAGELLAN – METEOR, j'ai structuré mon travail en tenant compte des contraintes de production, des délais techniques et des priorités utilisateurs. Cette compétence à planifier mes interventions m'a permis de rester efficace et autonome, même dans des contextes multitâches ou sans encadrement direct.",
      assessment: "Cette expérience m'a permis de développer une forte capacité d'organisation et de gestion autonome dans un contexte exigeant. J'ai appris à gérer seul un périmètre complet, à structurer mes priorités en fonction des contraintes techniques et à assurer une continuité de service dans un environnement sensible.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-6-magellan-meteor"]
    },
    {
      id: "autonomie",
      icon: <UserCog className="h-5 w-5" />,
      title: "Autonomie",
      type: "comportementale",
      definition: "Capacité à prendre des initiatives, à organiser son travail de manière indépendante et à prendre des décisions sans supervision directe, tout en assumant ses responsabilités.",
      application: "Dans les projets Informatique industrielle et Audit de sécurité, j'ai géré seul la configuration de postes critiques, le suivi des comptes Active Directory, et le déploiement de mesures de sécurité (BitLocker, mots de passe BIOS), souvent sans documentation ni passation. Cette compétence m'a permis de maintenir la continuité du service en environnement sensible et de prendre des initiatives techniques en toute confiance.",
      assessment: "Cette expérience m'a permis de développer une véritable autonomie opérationnelle, essentielle dans les environnements industriels exigeants. Elle m'a appris à gérer des situations imprévues, à prendre des décisions rapidement, et à m'auto-organiser pour maintenir un niveau de service élevé, même sans appui extérieur. Cette compétence me sera précieuse dans toute situation où la réactivité et la capacité à avancer seul sont attendues.",
      relatedProjects: ["projet-4-informatique-industrielle", "projet-3-audit-securite"]
    },
    {
      id: "administration-windows",
      icon: <Computer className="h-5 w-5" />,
      title: "Administration Windows",
      type: "technique",
      definition: "Maîtrise des fonctionnalités du système d'exploitation Windows en entreprise : gestion des comptes et des droits via Active Directory, sécurisation des postes, intégration réseau, et mise en œuvre de politiques système (GPO).",
      application: "Dans le cadre de ma mission d'informaticien industriel chez Skyepharma, j'ai assuré la gestion complète des comptes utilisateurs dans Active Directory : création, suppression et organisation des accès, dans un environnement marqué par un fort turnover. Cette compétence m'a également été utile lors du déploiement par GPO de BitLocker à la suite d'un audit de sécurité, que j'ai configuré manuellement poste par poste par la suite. J'ai renforcé la protection physique des équipements en définissant des mots de passe administrateurs dans le BIOS. Cette compétence m'a permis d'assurer la continuité de service et d'implémenter des mesures concrètes de sécurisation dans un environnement critique, sans transmission préalable.",
      assessment: "Cette expérience m'a permis de développer une autonomie totale sur la gestion des comptes utilisateurs et des postes dans un environnement complexe. J'ai appris à organiser et structurer une gestion système fiable, même sans supervision, tout en respectant les standards de sécurité et de continuité d'activité.",
      relatedProjects: ["projet-3-audit-securite", "projet-4-informatique-industrielle"]
    },
    {
      id: "securite",
      icon: <Shield className="h-5 w-5" />,
      title: "Sécurité",
      type: "technique",
      definition: "Mise en œuvre de solutions et de pratiques visant à protéger les systèmes d'exploitation contre les accès non autorisés, les pertes de données ou les vulnérabilités, en assurant la confidentialité, l'intégrité et la disponibilité des informations.",
      application: "A la suite d'un audit de sécurité, j'ai mobilisé cette compétence pour sécuriser le parc informatique. J'ai déployé la solution de chiffrement BitLocker via GPO, puis je suis intervenu poste par poste pour m'assurer de la bonne configuration. En complément, j'ai configuré un mot de passe administrateur dans le BIOS . Cette démarche m'a permis de concilier exigences de sécurité et contraintes de production, en assurant la conformité sans interrompre les activités.",
      assessment: "Ces projets m'ont permis de renforcer ma capacité à appliquer des mesures de sécurité concrètes et adaptées aux contraintes de terrain. J'ai développé une sensibilité aux bonnes pratiques de sécurité des systèmes d'exploitation, appris à interpréter des recommandations d'audit, et à mettre en œuvre des solutions efficaces, même en l'absence d'outils d'automatisation.",
      relatedProjects: ["projet-3-audit-securite"]
    },
    {
      id: "bureautique-productivite",
      icon: <Database className="h-5 w-5" />,
      title: "Bureautique et productivité personnelle",
      type: "technique",
      definition: "Capacité à optimiser les environnements informatiques et les outils bureautiques afin de garantir une utilisation fluide, homogène et efficace des postes de travail et des ressources associées.",
      application: "J'ai mobilisé cette compétence à plusieurs reprises. Lors du projet de migration Office 365, j'ai mené un inventaire des versions installées pour standardiser les environnements bureautiques, facilitant ainsi la collaboration entre utilisateurs. Dans le projet de standardisation du parc d'imprimantes, j'ai construit un tableau de suivi précis regroupant les emplacements, les modèles et les consommables associés, afin de faciliter la gestion logistique et anticiper les ruptures.",
      assessment: "Ce type de projet m'a permis de développer des réflexes d'analyse et d'adaptation face aux besoins bureautiques du terrain. J'ai appris à améliorer la cohérence d'un parc informatique, à favoriser la productivité des utilisateurs et à proposer des méthodes pratiques qui allègent le travail quotidien des équipes. Cette compétence me permet d'intervenir efficacement dans la structuration et la fluidité des environnements numériques internes.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office"]
    },
    {
      id: "conduite-projet-logiciel",
      icon: <Computer className="h-5 w-5" />,
      title: "Conduite de projet logiciel",
      type: "technique",
      definition: "Capacité à participer à la conception, à l'adaptation et à l'évolution d'un logiciel métier en suivant une logique projet : compréhension des besoins, structuration des livrables, tests, documentation, accompagnement au changement et retours utilisateurs.",
      application: "Cette compétence à été utilisée dans le projet MAGELLAN - METEOR, j'ai participé au paramétrage fonctionnel du logiciel aux côtés des référents régionaux, en configurant des contextes adaptés aux postes de commandement pour refléter les zones météo et trafic pertinentes. Dans le projet MAGELLAN - SAGT, j'ai structuré une nomenclature de règles permettant d'uniformiser les automatisations du système de gestion du trafic. J'ai ainsi facilité la création de nouvelles règles par les équipes internes en proposant une documentation claire et centralisée.",
      assessment: "Ce projet m'a permis de développer une vision complète de la conduite de projet logiciel en contexte métier. J'ai appris à formaliser des besoins, à structurer une réponse fonctionnelle dans un outil, à travailler en interaction avec les utilisateurs finaux et à contribuer à l'amélioration continue d'un service. Cette compétence me prépare à évoluer vers des rôles de coordination fonctionnelle, d'assistance à maîtrise d'ouvrage ou de pilotage d'outils métiers transverses.",
      relatedProjects: ["projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    }
  ];

  const getProjectTitle = (projectId: string) => {
    const projectTitles: {[key: string]: string} = {
      "projet-1-standardisation-parc": "Standardisation du parc d'impression",
      "projet-2-migration-office": "Migration Office 365",
      "projet-3-audit-securite": "Audit de sécurité",
      "projet-4-informatique-industrielle": "Informatique industrielle",
      "projet-5-magellan-sagt": "MAGELLAN – SAGT",
      "projet-6-magellan-meteor": "MAGELLAN – METEOR"
    };
    
    return projectTitles[projectId] || projectId;
  };
  
  // Get the correct project image from the projects data
  const getProjectImage = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.image : "";
  };

  const toggleSkillExpansion = (id: string) => {
    if (expandedSkill === id) {
      setExpandedSkill(null);
      setShowAllSkills(true);
      navigate('/skills');
    } else {
      setExpandedSkill(id);
      setShowAllSkills(false);
      navigate(`/skills#${id}`);
      // Scroll to top when expanding a skill
      window.scrollTo(0, 0);
    }
  };

  const backToAllSkills = () => {
    setExpandedSkill(null);
    setShowAllSkills(true);
    navigate('/skills');
  };

  // Filter skills based on selected category
  const filteredSkills = skills.filter(skill => 
    filter === "all" || skill.type === filter
  );

  // If a skill is expanded, only show that skill
  const displayedSkills = expandedSkill 
    ? skills.filter(skill => skill.id === expandedSkill)
    : filteredSkills;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {!expandedSkill && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes compétences</h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-muted-foreground">
                  Cette page présente les compétences techniques et comportementales que j'ai développées 
                  tout au long de mon parcours professionnel. Chaque compétence est illustrée par des exemples 
                  concrets issus de mes expériences.
                </p>
              </div>
            </>
          )}
          
          {expandedSkill && (
            <Button 
              onClick={backToAllSkills} 
              variant="outline" 
              className="mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour à toutes les compétences
            </Button>
          )}
          
          {!expandedSkill && (
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <Button 
                onClick={() => setFilter("all")}
                variant={filter === "all" ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                Toutes les compétences
              </Button>
              <Button 
                onClick={() => setFilter("technique")}
                variant={filter === "technique" ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                <Computer className="h-4 w-4" />
                Compétences techniques
              </Button>
              <Button 
                onClick={() => setFilter("comportementale")}
                variant={filter === "comportementale" ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                <BrainCircuit className="h-4 w-4" />
                Compétences comportementales
              </Button>
              <Button 
                onClick={() => setFilter("generale")}
                variant={filter === "generale" ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                <FileSpreadsheet className="h-4 w-4" />
                Compétences générales
              </Button>
            </div>
          )}
          
          {expandedSkill ? (
            // Full page display for expanded skill
            displayedSkills.map((skill) => (
              <div key={skill.id} id={skill.id}>
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {skill.icon}
                  </div>
                  {skill.title}
                </h2>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">🔍 Définition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{skill.definition}</p>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">🛠 Mise en application</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line">{skill.application}</p>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">💬 Mon point de vue sur la compétence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line">{skill.assessment}</p>
                  </CardContent>
                </Card>
                
                {skill.relatedProjects.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">📂 Projets associés</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {skill.relatedProjects.map(projectId => (
                        <Link 
                          key={projectId} 
                          to={`/projects#${projectId}`}
                          className="no-underline"
                        >
                          <Card className="hover:shadow-md transition-shadow border border-primary/20">
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={getProjectImage(projectId)}
                                alt={getProjectTitle(projectId)}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-primary">{getProjectTitle(projectId)}</h4>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            // Grid of skill cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedSkills.map((skill) => (
                <Card 
                  key={skill.id} 
                  id={skill.id}
                  className="hover:shadow-md transition-all border border-primary/20 h-full flex flex-col"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-4 flex-grow">
                    <p className="text-sm text-muted-foreground mb-6">
                      {skill.definition}
                    </p>
                    
                    <Badge className="mb-2" variant="outline">
                      {skill.type === "technique" 
                        ? "Compétence technique" 
                        : skill.type === "comportementale" 
                        ? "Compétence comportementale" 
                        : "Compétence générale"}
                    </Badge>
                  </CardContent>
                  
                  <div className="p-4 pt-0 mt-auto">
                    <Button 
                      onClick={() => toggleSkillExpansion(skill.id)} 
                      variant="default" 
                      className="w-full"
                    >
                      Voir les détails
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
