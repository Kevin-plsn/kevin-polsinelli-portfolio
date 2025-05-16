
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Database, Book, BrainCircuit, BookCheck, Users, LayoutGrid, Code, ShieldCheck } from "lucide-react";

type Skill = {
  id: string;
  title: string;
  icon: React.ElementType;
  category: "technique" | "comportementale" | "generale";
  shortDesc: string;
  application: string;
  assessment: string;
  relatedProjects: string[];
};

type Project = {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
};

const SkillsPage = () => {
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const skillId = location.hash.replace('#', '');
    if (skillId) {
      setOpenSkill(skillId);
      
      // Find skill category to set correct tab
      const skill = skills.find(s => s.id === skillId);
      if (skill) {
        setActiveTab(skill.category);
      }
      
      // Scroll to skill
      setTimeout(() => {
        const element = document.getElementById(skillId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const skills: Skill[] = [
    {
      id: "management-projet",
      title: "Management de projet",
      icon: LayoutGrid,
      category: "generale",
      shortDesc: "Capacité à structurer, suivre et contribuer à un projet technique en respectant les étapes clés, les ressources disponibles et les attentes métiers.",
      application: "Chez APRR, dans le cadre du projet MAGELLAN, j'ai contribué au paramétrage de l'outil METEOR. Aux côtés du responsable de l'équipe fonctionnelle, nous avons organisé les différentes étapes nécessaires à sa mise en œuvre. En collaboration avec les référents du logiciel répartis dans plusieurs régions, j'ai structuré mon travail comme un véritable projet, en définissant des étapes clés pour guider l'avancement. Cette approche m'a permis de bien comprendre les enjeux de l'outil et de rester efficace tout au long du processus.",
      assessment: "Ce projet m'a permis de saisir l'importance d'un cadre méthodologique structuré : de l'expression des besoins au suivi des tâches, en passant par la documentation et la coordination avec les référents métier. Cette compétence renforcera ma capacité à contribuer efficacement à la réussite de futurs projets et me prépare à évoluer vers un rôle de référent technique sur logiciel.",
      relatedProjects: ["projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "communication-relationnel",
      title: "Communication et relationnel",
      icon: Users,
      category: "generale",
      shortDesc: "Capacité à interagir efficacement avec différents interlocuteurs, à adapter son discours selon le profil (technique, métier, utilisateur), et à entretenir une collaboration fluide dans un environnement professionnel.",
      application: "Chez APRR lors du paramétrage de METEOR, j'ai su remonté les problèmes terrains et prendre les informations pour rédigé des tickets d'anomalies pour nos services. Ce qui m'a permis d'adapter ma communication à des profils non techniques tout en transmettant des informations claires. Chez Skyepharma, j'ai accompagné les utilisateurs lors du déploiement de la nouvelle téléphonie IP, en assurant des explications accessibles et des supports compréhensibles. Dans chaque projet, j'ai su m'intégrer aux équipes, recueillir les besoins et maintenir un dialogue constant, aussi bien avec les équipes IT qu'avec les utilisateurs métiers.",
      assessment: "Cette compétence me permet aujourd'hui d'être un relais fiable entre les utilisateurs et les équipes techniques. Elle facilite la compréhension mutuelle, renforce la confiance, et garantit une meilleure adoption des solutions déployées. Elle est essentielle dans tout environnement de travail collaboratif ou en gestion de projet.",
      relatedProjects: ["projet-2-migration-office", "projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "esprit-analyse",
      title: "Esprit d'analyse",
      icon: BrainCircuit,
      category: "comportementale",
      shortDesc: "Capacité à comprendre une situation complexe, identifier ses éléments clés, détecter les incohérences et proposer des solutions pertinentes en s'appuyant sur des faits et une réflexion structurée.",
      application: "Dans le cadre du projet SAGT chez APRR, j'ai travaillé sur la cohérence des règles de paramétrage en analysant les nomenclatures utilisées dans le système. Ce travail m'a permis d'identifier des doublons, des écarts de nommage, et de proposer une structure homogène facilitant la compréhension et la maintenance du système. Chez Skyepharma, suite à un audit de sécurité, j'ai analysé l'état du parc informatique pour définir une stratégie de chiffrement BitLocker et de protection BIOS adaptée à l'environnement.",
      assessment: "L'esprit d'analyse me permet de traiter efficacement des situations techniques complexes, de faire ressortir les enjeux critiques, et d'élaborer des solutions adaptées. Il constitue un levier essentiel pour garantir la qualité, la cohérence et la pérennité des actions menées dans des environnements structurés.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "rigueur",
      title: "Rigueur",
      icon: BookCheck,
      category: "comportementale",
      shortDesc: "Capacité et respect à appliquer les méthodes de travail précises, les procédures et contraintes techniques, tout en assurant la fiabilité et la qualité des livrables produits.",
      application: "Chez Skyepharma, lors du déploiement de BitLocker sur l'ensemble du parc informatique, j'ai respecté une procédure stricte de configuration, d'activation et de vérification, en veillant à ne pas perturber l'environnement industriel. J'ai également sécurisé l'accès au BIOS par mot de passe sur chaque ordinateur de chaque collaborateur, en documentant chaque étape. Dans le projet METEOR chez APRR, j'ai appliqué rigoureusement les règles de configuration définies pour chaque Poste de Commandement, afin d'assurer l'harmonisation des contextes de sur l'ensemble du réseau.",
      assessment: "La rigueur m'a permis de garantir la qualité et la fiabilité des actions menées sur des systèmes critiques. Elle renforce ma capacité à travailler dans des environnements exigeants, à produire des livrables fiables, et à limiter les erreurs en phase d'exécution. Cette approche méthodique est essentielle dans les domaines liés à la sécurité, à l'automatisation ou à la production.",
      relatedProjects: ["projet-2-migration-office", "projet-3-audit-securite", "projet-5-magellan-sagt"]
    },
    {
      id: "initiative",
      title: "Initiative",
      icon: BookCheck,
      category: "generale",
      shortDesc: "Capacité à proposer, anticiper ou entreprendre des actions sans y être formellement invité, dans le but d'améliorer une situation, de résoudre un problème ou de répondre à un besoin identifié sur le terrain.",
      application: "Chez Skyepharma, dans le projet de standardisation du parc d'impression, j'ai constaté que chaque service utilisait des modèles d'imprimantes différents, ce qui rendait le suivi des consommables difficile et chronophage. J'ai alors proposé une centralisation du modèle d'imprimante, afin de simplifier la gestion des stocks et d'optimiser les commandes. Lors de la migration vers Office 365, j'ai constaté que certains collaborateurs utilisaient des versions différentes d'Office, ce qui empêchait parfois l'ouverture correcte de fichiers Excel ou Word. J'ai pris l'initiative de recenser les versions installées, d'alerter l'équipe IT, puis de contribuer à l'organisation.",
      assessment: "Ces initiatives ont démontré ma capacité à observer, analyser et agir rapidement pour résoudre des dysfonctionnements opérationnels. Elles m'ont permis de contribuer à une meilleure fluidité du service, de simplifier des processus internes, et de gagner en autonomie et en crédibilité au sein de l'équipe.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-5-magellan-sagt"]
    },
    {
      id: "organisation-personnelle",
      title: "Organisation personnelle",
      icon: LayoutGrid,
      category: "generale",
      shortDesc: "Capacité à gérer efficacement son temps, ses priorités et ses tâches, afin d'atteindre les objectifs fixés dans les délais, même dans un environnement exigeant ou multitâche.",
      application: "Chez Skyepharma, lors de ma mission informatique industrielle, j'ai repris l'ensemble de la gestion du parc informatique industriel suite au départ de l'informaticien en poste, sans passation avec quelques documentations préalable. J'ai dû organiser mes tâches de façon autonome, afin de gérer mes missions de technicien côte administratif et production. la mise à jour régulière des comptes utilisateurs dans Active Directory Industriel, tout en maintenant le suivi matériel et le bon fonctionnement des équipements utilisés en production. Cette mission m'a obligé à planifier rigoureusement mes interventions, à prioriser les urgences terrain et à tenir un suivi précis de l'environnement informatique global de l'entreprise.",
      assessment: "Cette expérience m'a permis de développer une forte capacité d'organisation et de gestion autonome dans un contexte exigeant. J'ai appris à gérer seul un périmètre complet, à structurer mes priorités en fonction des contraintes techniques et à assurer une continuité de service dans un environnement sensible.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-6-magellan-meteor"]
    },
    {
      id: "autonomie",
      title: "Autonomie",
      icon: Book,
      category: "comportementale",
      shortDesc: "Capacité à prendre des initiatives, à organiser son travail de manière indépendante et à prendre des décisions sans supervision directe, tout en assumant ses responsabilités.",
      application: "Dans le cadre de ma mission en informatique industrielle chez Skyepharma, j'ai dû reprendre seul l'ensemble des tâches du technicien précédent, parti sans passation. J'ai été chargé de la gestion du parc informatique de production, du maintien à jour de l'Active Directory dans un environnement à fort turnover, et de la résolution des incidents sur des postes critiques, parfois directement reliés aux chaînes de production. Sans encadrement direct ni documentation formalisée, j'ai su m'adapter, prioriser les interventions et garantir la continuité de service avec efficacité.",
      assessment: "Cette expérience m'a permis de développer une véritable autonomie opérationnelle, essentielle dans les environnements industriels exigeants. Elle m'a appris à gérer des situations imprévues, à prendre des décisions rapidement, et à m'auto-organiser pour maintenir un niveau de service élevé, même sans appui extérieur. Cette compétence me sera précieuse dans toute situation où la réactivité et la capacité à avancer seul sont attendues.",
      relatedProjects: ["projet-4-informatique-industrielle"]
    },
    {
      id: "administration-windows",
      title: "Administration Windows",
      icon: Database,
      category: "technique",
      shortDesc: "Maîtrise des fonctionnalités du système d'exploitation Windows en entreprise : gestion des comptes et des droits via Active Directory, sécurisation des postes, intégration réseau, et mise en œuvre de politiques système (GPO).",
      application: "Dans le cadre de ma mission d'informaticien industriel chez Skyepharma, j'ai pris en charge la gestion complète des comptes utilisateurs dans l'Active Directory, en assurant la création, la suppression et l'organisation des accès au sein d'une structure exposée à un fort turnover. J'ai maintenu l'intégrité du domaine malgré l'absence de passation, en assurant un suivi rigoureux des comptes et des machines utilisées en production. À la suite d'un audit de sécurité, j'ai mis en place le chiffrement des postes utilisateurs avec BitLocker, en définissant les paramètres manuellement poste par poste selon les recommandations internes. J'ai également sécurisé les postes au niveau matériel en configurant un mot de passe administrateur BIOS pour limiter les accès non autorisés. Ce projet m'a permis de développer une bonne connaissance de Windows/AD qui m'a permis de m'adapter à des environnements professionnels.",
      assessment: "Cette expérience m'a permis de développer une autonomie totale sur la gestion des comptes utilisateurs et des postes dans un environnement complexe. J'ai appris à organiser et structurer une gestion système fiable, même sans supervision, tout en respectant les standards de sécurité et de continuité d'activité.",
      relatedProjects: ["projet-3-audit-securite", "projet-4-informatique-industrielle"]
    },
    {
      id: "securite",
      title: "Sécurité",
      icon: ShieldCheck,
      category: "technique",
      shortDesc: "Mise en œuvre de solutions et de pratiques visant à protéger les systèmes d'exploitation contre les accès non autorisés, les pertes de données ou les vulnérabilités, en assurant la confidentialité, l'intégrité et la disponibilité des informations.",
      application: "Chez Skyepharma, dans le cadre de l'audit de sécurité mené par une équipe externe de pentester, j'ai été chargé de mettre en œuvre plusieurs mesures correctives sur les postes de travail. J'ai mis en place BitLocker pour garantir le chiffrement des disques durs des utilisateurs, en assurant la compatibilité des machines et la bonne configuration des options de sécurité. J'ai également sécurisé les postes au niveau matériel en configurant manuellement un mot de passe administrateur dans le BIOS afin de limiter les modifications non autorisées. Cette démarche faisait suite à des recommandations précises formulées dans le rapport d'audit, et a nécessité une coordination étroite avec les utilisateurs et les services IT internes. En parallèle, j'ai participé à la migration vers Office 365, en veillant à l'uniformité des versions déployées et à la protection des données migrées.",
      assessment: "Ces projets m'ont permis de renforcer ma capacité à appliquer des mesures de sécurité concrètes et adaptées aux contraintes de terrain. J'ai développé une sensibilité aux bonnes pratiques de sécurité des systèmes d'exploitation, appris à interpréter des recommandations d'audit, et à mettre en œuvre des solutions efficaces, même en l'absence d'outils d'automatisation.",
      relatedProjects: ["projet-3-audit-securite"]
    },
    {
      id: "bureautique-productivite",
      title: "Bureautique et productivité personnelle",
      icon: LayoutGrid,
      category: "technique",
      shortDesc: "Capacité à optimiser les environnements informatiques et les outils bureautiques afin de garantir une utilisation fluide, homogène et efficace des postes de travail et des ressources associées.",
      application: "Chez Skyepharma, j'ai accompagné les équipes lors de la migration vers Office 365 en assurant une uniformisation des versions de la suite bureautique. Certaines incompatibilités empêchaient la lecture correcte des fichiers partagés, ce qui ralentissait les échanges. J'ai mené un inventaire, organisé les mises à niveau, et facilité l'adoption d'un environnement commun. En parallèle, dans le projet Standardisation du parc d'impression, j'ai pris l'initiative de centraliser la gestion des imprimantes et des toners. La diversité des modèles rendait le suivi complexe ; j'ai mis en place un tableau synthétique pour suivre les consommables, standardiser les commandes et améliorer la lisibilité globale. Chez APRR, dans le cadre du projet MAGELLAN – SAGT, j'ai identifié que les règles métiers utilisées dans le logiciel n'étaient pas nommées de façon cohérente. Pour y remédier, j'ai conçu un tableau de nomenclature claire et homogène, utilisé par toute l'équipe comme modèle. Ce travail a permis d'uniformiser les noms de règles, de réduire les erreurs de saisie et de fluidifier le paramétrage fonctionnel du système.",
      assessment: "Ce type de projet m'a permis de développer des réflexes d'analyse et d'adaptation face aux besoins bureautiques du terrain. J'ai appris à améliorer la cohérence d'un parc informatique, à favoriser la productivité des utilisateurs et à proposer des méthodes pratiques qui allègent le travail quotidien des équipes. Cette compétence me permet d'intervenir efficacement dans la structuration et la fluidité des environnements numériques internes.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office"]
    },
    {
      id: "conduite-projet-logiciel",
      title: "Conduite de projet logiciel",
      icon: Code,
      category: "technique",
      shortDesc: "Capacité à participer à la conception, à l'adaptation et à l'évolution d'un logiciel métier en suivant une logique projet : compréhension des besoins, structuration des livrables, tests, documentation, accompagnement au changement et retours utilisateurs.",
      application: "Chez APRR, j'ai intégré l'équipe administratrice fonctionnelle du projet MAGELLAN, qui vise à centraliser et améliorer les outils métiers utilisés dans différents services. Dans ce cadre, j'ai travaillé sur le projet MAGELLAN - METEOR, un outil d'aide à l'exploitation permettant la visualisation en temps réel des données trafic et météo. J'ai participé au paramétrage fonctionnel des vues régionales, en lien avec les référents terrain, en structurant le travail par étapes pour assurer cohérence, clarté et compatibilité avec les besoins opérationnels. J'ai également contribué au projet MAGELLAN - SAGT, qui automatise les actions déclenchées lors d'événements sur le réseau autoroutier. J'ai constaté une hétérogénéité dans le nommage des règles, freinant leur création et leur compréhension. Pour y remédier, j'ai conçu un tableau de nomenclature partagé, facilitant l'harmonisation et accélérant le travail des équipes. Ces missions ont nécessité un suivi structuré, des échanges fréquents avec les utilisateurs métiers, la rédaction de supports, ainsi qu'un travail itératif pour adapter la configuration du système.",
      assessment: "Ce projet m'a permis de développer une vision complète de la conduite de projet logiciel en contexte métier. J'ai appris à formaliser des besoins, à structurer une réponse fonctionnelle dans un outil, à travailler en interaction avec les utilisateurs finaux et à contribuer à l'amélioration continue d'un service. Cette compétence me prépare à évoluer vers des rôles de coordination fonctionnelle, d'assistance à maîtrise d'ouvrage ou de pilotage d'outils métiers transverses.",
      relatedProjects: ["projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    }
  ];

  const projects: Project[] = [
    {
      id: "projet-1-standardisation-parc",
      title: "Standardisation du parc d'impression",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Optimisation et centralisation de la gestion des imprimantes."
    },
    {
      id: "projet-2-migration-office",
      title: "Migration Office 365",
      image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Harmonisation des versions d'Office sur le parc informatique."
    },
    {
      id: "projet-3-audit-securite",
      title: "Audit de sécurité",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Mise en conformité des postes suite à un audit de sécurité."
    },
    {
      id: "projet-4-informatique-industrielle",
      title: "Informatique industrielle",
      image: "https://images.unsplash.com/photo-1581267455542-6053a3322176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Gestion du parc informatique industriel et support aux utilisateurs."
    },
    {
      id: "projet-5-magellan-sagt",
      title: "MAGELLAN – SAGT",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Standardisation des règles d'automatisation dans le SAGT d'APRR."
    },
    {
      id: "projet-6-magellan-meteor",
      title: "MAGELLAN – METEOR",
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Paramétrage d'un système de visualisation en temps réel pour la météo et le trafic autoroutier."
    }
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setOpenSkill(null);
  };

  const toggleSkill = (skillId: string) => {
    setOpenSkill(openSkill === skillId ? null : skillId);
  };

  const handleCategoryButtonClick = (category: string) => {
    setActiveTab(category);
    setOpenSkill(null);
  };

  const filteredSkills = skills.filter(skill => {
    if (activeTab === "all") return true;
    return skill.category === activeTab;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes compétences</h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground">
              Cette page présente les compétences que j'ai développées au cours de ma formation et de mes expériences 
              professionnelles. Chaque compétence est illustrée par des exemples concrets de mise en application dans 
              un contexte professionnel.
            </p>
          </div>
          
          {/* Direct category access buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant={activeTab === "technique" ? "default" : "outline"} 
              onClick={() => handleCategoryButtonClick("technique")}
              className="min-w-[160px]"
            >
              <Code className="mr-2 h-4 w-4" /> Compétences techniques
            </Button>
            <Button 
              variant={activeTab === "comportementale" ? "default" : "outline"} 
              onClick={() => handleCategoryButtonClick("comportementale")}
              className="min-w-[160px]"
            >
              <BrainCircuit className="mr-2 h-4 w-4" /> Compétences comportementales
            </Button>
            <Button 
              variant={activeTab === "generale" ? "default" : "outline"} 
              onClick={() => handleCategoryButtonClick("generale")}
              className="min-w-[160px]"
            >
              <Book className="mr-2 h-4 w-4" /> Compétences générales
            </Button>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="technique">Techniques</TabsTrigger>
                <TabsTrigger value="comportementale">Comportementales</TabsTrigger>
                <TabsTrigger value="generale">Générales</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill) => (
                  <Collapsible
                    key={skill.id}
                    open={openSkill === skill.id}
                    onOpenChange={() => toggleSkill(skill.id)}
                    className="w-full"
                  >
                    <Card id={skill.id} className="border border-primary/20 h-full transition-all duration-300 hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <skill.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-primary">{skill.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {skill.category === "technique" ? "Compétence technique" : 
                               skill.category === "comportementale" ? "Compétence comportementale" : 
                               "Compétence générale"}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="bg-gray-50 dark:bg-gray-900/30 p-3 rounded-md">
                            <h4 className="text-sm font-medium mb-2 text-primary">Définition</h4>
                            <p className="text-sm text-muted-foreground">{skill.shortDesc}</p>
                          </div>
                          
                          <CollapsibleContent className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-900/30 p-3 rounded-md">
                              <h4 className="text-sm font-medium mb-2 text-primary">Mise en application</h4>
                              <p className="text-sm text-foreground">{skill.application}</p>
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-gray-900/30 p-3 rounded-md">
                              <h4 className="text-sm font-medium mb-2 text-primary">Bilan de compétences professionnelles</h4>
                              <p className="text-sm text-foreground">{skill.assessment}</p>
                            </div>
                            
                            {skill.relatedProjects.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium mb-4 text-primary">Projets associés</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {skill.relatedProjects.map(projectId => {
                                    const project = projects.find(p => p.id === projectId);
                                    if (!project) return null;
                                    
                                    return (
                                      <Link 
                                        key={projectId}
                                        to={`/projects#${projectId}`}
                                        className="block hover:scale-[1.02] transition-transform"
                                      >
                                        <Card className="h-full overflow-hidden border border-primary/10">
                                          <div className="aspect-video w-full overflow-hidden">
                                            <img 
                                              src={project.image} 
                                              alt={project.title} 
                                              className="h-full w-full object-cover"
                                            />
                                          </div>
                                          <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">{project.title}</CardTitle>
                                          </CardHeader>
                                          <CardFooter className="pt-0">
                                            <p className="text-xs text-muted-foreground">{project.shortDesc}</p>
                                          </CardFooter>
                                        </Card>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </CollapsibleContent>
                          
                          <CollapsibleTrigger asChild>
                            <Button variant={openSkill === skill.id ? "secondary" : "outline"} size="sm" className="w-full mt-2">
                              {openSkill === skill.id ? "Masquer les détails" : "Voir les détails"}
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                      </CardContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
