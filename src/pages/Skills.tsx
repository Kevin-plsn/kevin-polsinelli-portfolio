
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Briefcase, Code, Database, GraduationCap, Network, Shield, Users, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface Project {
  name: string;
  description: string;
}

interface Skill {
  id: string;
  title: string;
  category: string;
  icon: any;
  description: string;
  projects: Project[];
  application: string;
  color: string;
}

const skills: Skill[] = [
  {
    id: "maitrise-outils-informatiques",
    title: "Maîtrise des outils informatiques",
    category: "Compétences techniques",
    icon: Code,
    description: "Excellente maîtrise des outils informatiques, des systèmes d'exploitation et des logiciels courants.",
    projects: [
      { name: "Gestion du parc informatique", description: "Optimisation des ressources" },
      { name: "Support technique", description: "Assistance aux utilisateurs" }
    ],
    application: "Lors de la gestion du parc informatique, j'ai mis en œuvre des solutions innovantes pour optimiser l'utilisation des ressources et améliorer la productivité des équipes. En tant que support technique, j'ai résolu rapidement et efficacement les problèmes rencontrés par les utilisateurs, garantissant ainsi la continuité de leurs activités.",
    color: "border-blue-500"
  },
  {
    id: "gestion-reseaux",
    title: "Gestion de réseaux",
    category: "Compétences techniques",
    icon: Network,
    description: "Compétences approfondies en gestion de réseaux, incluant la configuration, la maintenance et la sécurisation des infrastructures.",
    projects: [
      { name: "Configuration réseau", description: "Mise en place d'un réseau performant" },
      { name: "Sécurisation du réseau", description: "Protection contre les menaces" }
    ],
    application: "J'ai configuré et maintenu des réseaux complexes, en assurant leur performance et leur sécurité. J'ai également mis en place des mesures de protection efficaces contre les menaces, garantissant ainsi la confidentialité et l'intégrité des données.",
    color: "border-green-500"
  },
  {
    id: "securite-informatique",
    title: "Sécurité informatique",
    category: "Compétences techniques",
    icon: Shield,
    description: "Expertise en sécurité informatique, incluant la prévention des intrusions, la détection des vulnérabilités et la mise en place de mesures de protection.",
    projects: [
      { name: "Audit de sécurité", description: "Identification des risques" },
      { name: "Mise en place de mesures de sécurité", description: "Protection des systèmes" }
    ],
    application: "J'ai réalisé des audits de sécurité pour identifier les vulnérabilités des systèmes et j'ai mis en place des mesures de protection efficaces pour prévenir les intrusions et protéger les données sensibles.",
    color: "border-red-500"
  },
  {
    id: "administration-systemes",
    title: "Administration de systèmes",
    category: "Compétences techniques",
    icon: Database,
    description: "Maîtrise de l'administration de systèmes, incluant l'installation, la configuration et la maintenance des serveurs et des applications.",
    projects: [
      { name: "Installation de serveurs", description: "Mise en place de l'infrastructure" },
      { name: "Maintenance des systèmes", description: "Garantie de la disponibilité" }
    ],
    application: "J'ai installé et configuré des serveurs, en assurant leur maintenance et leur disponibilité. J'ai également mis en place des solutions de sauvegarde et de restauration pour garantir la continuité des activités en cas de problème.",
    color: "border-yellow-500"
  },
  {
    id: "gestion-bases-de-donnees",
    title: "Gestion de bases de données",
    category: "Compétences techniques",
    icon: Database,
    description: "Compétences en gestion de bases de données, incluant la conception, l'optimisation et la maintenance des systèmes.",
    projects: [
      { name: "Conception de bases de données", description: "Modélisation des données" },
      { name: "Optimisation des performances", description: "Amélioration de la rapidité" }
    ],
    application: "J'ai conçu et optimisé des bases de données, en assurant leur performance et leur intégrité. J'ai également mis en place des procédures de sauvegarde et de restauration pour garantir la disponibilité des données en cas de problème.",
    color: "border-purple-500"
  },
  {
    id: "developpement-logiciel",
    title: "Développement logiciel",
    category: "Compétences techniques",
    icon: Code,
    description: "Aptitudes en développement logiciel, incluant la conception, la programmation et les tests d'applications.",
    projects: [
      { name: "Conception d'applications", description: "Création de solutions innovantes" },
      { name: "Tests unitaires", description: "Vérification de la qualité" }
    ],
    application: "J'ai conçu et développé des applications, en utilisant les langages de programmation appropriés et en respectant les normes de qualité. J'ai également réalisé des tests unitaires pour vérifier le bon fonctionnement des applications et garantir leur fiabilité.",
    color: "border-indigo-500"
  },
  {
    id: "gestion-projet",
    title: "Gestion de projet",
    category: "Compétences comportementales",
    icon: Briefcase,
    description: "Capacité à gérer des projets, incluant la planification, le suivi et la coordination des équipes.",
    projects: [
      { name: "Planification de projet", description: "Définition des étapes" },
      { name: "Coordination des équipes", description: "Animation des réunions" }
    ],
    application: "J'ai géré des projets complexes, en planifiant les étapes, en coordonnant les équipes et en assurant le suivi des activités. J'ai également mis en place des outils de communication efficaces pour faciliter la collaboration et garantir la réussite des projets.",
    color: "border-teal-500"
  },
  {
    id: "management-projet",
    title: "Management de projet",
    category: "Compétences comportementales",
    icon: Users,
    description: "Capacité à organiser, coordonner et suivre un projet de bout en bout, en définissant des objectifs clairs, en planifiant les étapes et en mobilisant les ressources nécessaires.",
    projects: [
      { name: "MAGELLAN - METEOR", description: "Projet de modernisation" }
    ],
    application: "Dans le projet MAGELLAN – METEOR, j'ai structuré mes interventions comme de véritables projet, en suivant des étapes claires définies en amont, avec coordination des acteurs, documentation et suivi des tâches. Cette compétence m'a permis d'être efficace à chaque phase, même sans être directement chef de projet.",
    color: "border-blue-500"
  },
  {
    id: "organisation-personnelle",
    title: "Organisation personnelle",
    category: "Compétences comportementales",
    icon: Zap,
    description: "Aptitude à structurer son travail, prioriser les tâches et optimiser son temps pour atteindre ses objectifs de manière efficace.",
    projects: [
      { name: "Standardisation du parc d'impression", description: "Uniformisation des équipements" },
      { name: "Migration Office 365", description: "Transition vers le cloud" },
      { name: "Audit de sécurité", description: "Évaluation des risques" },
      { name: "Informatique industrielle", description: "Gestion des systèmes industriels" },
      { name: "MAGELLAN – METEOR", description: "Projet de modernisation" }
    ],
    application: "Dans les projets Standardisation du parc d'impression, Migration Office 365, Audit de sécurité, Informatique industrielle et MAGELLAN – METEOR, j'ai structuré mon travail en tenant compte des contraintes de production, des délais techniques et des priorités utilisateurs. Cette compétence à planifier mes interventions m'a permis de rester efficace et autonome, même dans des contextes multitâches ou sans encadrement direct.",
    color: "border-green-500"
  },
  {
    id: "initiative",
    title: "Initiative",
    category: "Compétences comportementales",
    icon: Zap,
    description: "Capacité à identifier les opportunités d'amélioration et à proposer des solutions concrètes de manière proactive.",
    projects: [
      { name: "Standardisation du parc d'impression", description: "Uniformisation des équipements" },
      { name: "Migration Office 365", description: "Transition vers le cloud" },
      { name: "MAGELLAN – SAGT", description: "Système de gestion automatisée du trafic" }
    ],
    application: "Dans les projets Standardisation du parc d'impression, Migration Office 365 et MAGELLAN – SAGT, j'ai identifié des problématiques non signalées et proposé des solutions concrètes pour améliorer l'organisation ou les outils. Cette compétence m'a permis d'apporter une réelle valeur ajoutée en anticipant les besoins et en structurant des réponses efficaces sans directive préalable.",
    color: "border-yellow-500"
  },
  {
    id: "communication-relationnel",
    title: "Communication et relationnel",
    category: "Compétences comportementales",
    icon: Users,
    description: "Aptitude à échanger efficacement avec différents interlocuteurs, à expliquer des concepts techniques et à maintenir de bonnes relations professionnelles.",
    projects: [
      { name: "Migration Office 365", description: "Transition vers le cloud" },
      { name: "Audit de sécurité", description: "Évaluation des risques" },
      { name: "Informatique industrielle", description: "Gestion des systèmes industriels" },
      { name: "MAGELLAN – METEOR", description: "Projet de modernisation" },
      { name: "MAGELLAN – SAGT", description: "Système de gestion automatisée du trafic" }
    ],
    application: "Dans les projets Migration Office 365, Audit de sécurité, Informatique industrielle, MAGELLAN – METEOR et MAGELLAN – SAGT, j'ai communiqué régulièrement avec les utilisateurs et les équipes métiers pour expliquer les changements, recueillir leurs besoins ou résoudre les incidents. Cette compétence m'a permis de créer un climat de confiance, de fluidifier les échanges techniques et d'assurer une meilleure compréhension des enjeux des projets.",
    color: "border-purple-500"
  },
  {
    id: "autonomie",
    title: "Autonomie",
    category: "Compétences comportementales",
    icon: Zap,
    description: "Capacité à travailler de manière indépendante, à prendre des décisions et à résoudre des problèmes sans supervision constante.",
    projects: [
      { name: "Informatique industrielle", description: "Gestion des systèmes industriels" },
      { name: "Audit de sécurité", description: "Évaluation des risques" }
    ],
    application: "Dans les projets Informatique industrielle et Audit de sécurité, j'ai géré seul la configuration de postes critiques, le suivi des comptes Active Directory, et le déploiement de mesures de sécurité (BitLocker, mots de passe BIOS), souvent sans documentation ni passation. Cette compétence m'a permis de maintenir la continuité du service en environnement sensible et de prendre des initiatives techniques en toute confiance.",
    color: "border-red-500"
  },
  {
    id: "rigueur",
    title: "Rigueur",
    category: "Compétences comportementales",
    icon: Shield,
    description: "Aptitude à appliquer des méthodes précises, à respecter les procédures et à maintenir un niveau de qualité élevé dans son travail.",
    projects: [
      { name: "Audit de sécurité", description: "Évaluation des risques" },
      { name: "Standardisation du parc d'impression", description: "Uniformisation des équipements" },
      { name: "MAGELLAN – SAGT", description: "Système de gestion automatisée du trafic" },
      { name: "MAGELLAN – METEOR", description: "Projet de modernisation" },
      { name: "Informatique industrielle", description: "Gestion des systèmes industriels" }
    ],
    application: "Dans les projets Audit de sécurité, Standardisation du parc d'impression, MAGELLAN – SAGT, MAGELLAN – METEOR et Informatique industrielle, j'ai analysé des configurations techniques, identifié des incohérences, structuré des solutions concrètes et anticipé les impacts opérationnels. Cette compétence m'a permis de prendre des décisions éclairées dans des contextes où la précision était essentielle.",
    color: "border-indigo-500"
  },
  {
    id: "esprit-analyse",
    title: "Esprit d'analyse",
    category: "Compétences comportementales",
    icon: Database,
    description: "Capacité à décomposer des problèmes complexes, à identifier les causes racines et à structurer des solutions logiques.",
    projects: [
      { name: "Audit de sécurité", description: "Évaluation des risques" },
      { name: "Standardisation du parc d'impression", description: "Uniformisation des équipements" },
      { name: "MAGELLAN – SAGT", description: "Système de gestion automatisée du trafic" },
      { name: "MAGELLAN – METEOR", description: "Projet de modernisation" },
      { name: "Informatique industrielle", description: "Gestion des systèmes industriels" }
    ],
    application: "Dans les projets Audit de sécurité, Standardisation du parc d'impression, MAGELLAN – SAGT, MAGELLAN – METEOR et Informatique industrielle, j'ai analysé des configurations techniques, identifié des incohérences, structuré des solutions concrètes et anticipé les impacts opérationnels. Cette compétence m'a permis de prendre des décisions éclairées dans des contextes où la précision était essentielle.",
    color: "border-teal-500"
  },
  {
    id: "administration-windows",
    title: "Administration Windows",
    category: "Compétences générales",
    icon: Network,
    description: "Maîtrise de l'administration des systèmes Windows, incluant la gestion des utilisateurs, des stratégies de groupe et de la sécurité.",
    projects: [
      { name: "Active Directory", description: "Gestion des comptes et accès" },
      { name: "GPO BitLocker", description: "Déploiement sécurisé" }
    ],
    application: "Dans le cadre de ma mission d'informaticien industriel chez Skyepharma, j'ai assuré la gestion complète des comptes utilisateurs dans Active Directory : création, suppression et organisation des accès, dans un environnement marqué par un fort turnover. Cette compétence m'a également été utile lors du déploiement par GPO de BitLocker à la suite d'un audit de sécurité, que j'ai configuré manuellement poste par poste par la suite. J'ai renforcé la protection physique des équipements en définissant des mots de passe administrateurs dans le BIOS. Cette compétence m'a permis d'assurer la continuité de service et d'implémenter des mesures concrètes de sécurisation dans un environnement critique, sans transmission préalable.",
    color: "border-blue-600"
  },
  {
    id: "securite",
    title: "Sécurité",
    category: "Compétences générales",
    icon: Shield,
    description: "Connaissance des bonnes pratiques de sécurité informatique et capacité à mettre en œuvre des mesures de protection.",
    projects: [
      { name: "Audit de sécurité", description: "Évaluation des risques" },
      { name: "Déploiement BitLocker", description: "Chiffrement des données" }
    ],
    application: "A la suite d'un audit de sécurité, j'ai mobilisé cette compétence pour sécuriser le parc informatique. J'ai déployé la solution de chiffrement BitLocker via GPO, puis je suis intervenu poste par poste pour m'assurer de la bonne configuration. En complément, j'ai configuré un mot de passe administrateur dans le BIOS . Cette démarche m'a permis de concilier exigences de sécurité et contraintes de production, en assurant la conformité sans interrompre les activités.",
    color: "border-red-600"
  },
  {
    id: "bureautique",
    title: "Bureautique et productivité personnelle",
    category: "Compétences générales",
    icon: Code,
    description: "Maîtrise des outils bureautiques et des méthodes d'organisation pour optimiser la productivité personnelle.",
    projects: [
      { name: "Migration Office 365", description: "Transition vers le cloud" },
      { name: "Standardisation du parc d'impression", description: "Uniformisation des équipements" }
    ],
    application: "J'ai mobilisé cette compétence à plusieurs reprises. Lors du projet de migration Office 365, j'ai mené un inventaire des versions installées pour standardiser les environnements bureautiques, facilitant ainsi la collaboration entre utilisateurs. Dans le projet de standardisation du parc d'imprimantes, j'ai construit un tableau de suivi précis regroupant les emplacements, les modèles et les consommables associés, afin de faciliter la gestion logistique et anticiper les ruptures.",
    color: "border-green-600"
  },
  {
    id: "conduite-projet-logiciel",
    title: "Conduite de projet logiciel",
    category: "Compétences générales",
    icon: Briefcase,
    description: "Aptitude à mener des projets logiciels en appliquant des méthodologies structurées et en coordonnant les aspects techniques et fonctionnels.",
    projects: [
      { name: "MAGELLAN - METEOR", description: "Projet de modernisation" },
      { name: "MAGELLAN - SAGT", description: "Système de gestion automatisée du trafic" }
    ],
    application: "Cette compétence à été utilisée dans le projet MAGELLAN - METEOR, j'ai participé au paramétrage fonctionnel du logiciel aux côtés des référents régionaux, en configurant des contextes adaptés aux postes de commandement pour refléter les zones météo et trafic pertinentes. Dans le projet MAGELLAN - SAGT, j'ai structuré une nomenclature de règles permettant d'uniformiser les automatisations du système de gestion du trafic. J'ai ainsi facilité la création de nouvelles règles par les équipes internes en proposant une documentation claire et centralisée.",
    color: "border-purple-600"
  }
];

const SkillsPage = () => {
  const { skillId } = useParams();
  
  if (skillId) {
    const skill = skills.find(s => s.id === skillId);
    
    if (!skill) {
      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 py-12">
            <div className="container">
              <p className="text-center text-muted-foreground">Compétence non trouvée</p>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    const IconComponent = skill.icon;
    
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 py-12">
          <div className="container">
            <div className="mb-8">
              <Button asChild variant="outline" className="group mb-6">
                <Link to="/skills">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Retour à toutes les compétences
                </Link>
              </Button>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg border-2 ${skill.color} bg-white shadow-sm`}>
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary">{skill.title}</h1>
                  <p className="text-muted-foreground text-lg">{skill.category}</p>
                </div>
              </div>
              
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Projets associés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {skill.projects.map((project, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="p-1 bg-primary/10 rounded">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{project.name}</h4>
                            <p className="text-sm text-gray-600">{project.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Mise en application</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{skill.application}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Vue principale des compétences
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes compétences</h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              Découvrez l'ensemble de mes compétences développées au cours de mes expériences professionnelles. 
              Chaque compétence est illustrée par des exemples concrets de mise en application dans des projets réels.
            </p>
          </div>
          
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card key={skill.id} className={`transition-all duration-300 hover:shadow-lg border-2 ${skill.color}`}>
                      <CardHeader className="flex items-center space-y-4">
                        <div className="w-full flex justify-center">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-center">{skill.title}</CardTitle>
                        <CardDescription className="text-center text-sm">
                          {skill.description.length > 120 
                            ? `${skill.description.substring(0, 120)}...` 
                            : skill.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-center">
                          <Button asChild className="group">
                            <Link to={`/skills/${skill.id}`}>
                              Voir détails
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
