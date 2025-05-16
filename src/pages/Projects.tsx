
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

type Project = {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
};

const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract project ID from URL hash if present
  useEffect(() => {
    const projectId = location.hash.replace('#', '');
    if (projectId) {
      setExpandedProject(projectId);
      setShowAllProjects(false);
    }
  }, [location]);

  const projects: Project[] = [
    {
      id: "projet-1-standardisation-parc",
      title: "Standardisation du parc d'impression",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Optimisation et centralisation de la gestion des imprimantes et consommables pour simplifier le suivi et réduire les coûts.",
      context: "Lors de mon alternance chez Skyepharma, j'ai constaté une gestion désorganisée des imprimantes et des toners. Chaque service possédait des modèles différents, ce qui compliquait la traçabilité, la gestion des commandes et le suivi des consommables. Cette situation entraînait une perte de temps pour les utilisateurs comme pour l'équipe informatique.",
      objectives: [
        "Centraliser les informations sur les imprimantes pour simplifier leur gestion",
        "Améliorer la visibilité sur les consommables (toners)",
        "Proposer une méthode durable et structurée pour optimiser les stocks"
      ],
      realization: "J'ai réalisé un état des lieux du parc d'imprimantes, en identifiant tous les modèles utilisés dans chaque service. J'ai ensuite construit un tableau de suivi regroupant les emplacements, les types de toners associés, et les besoins récurrents. Ce document a été intégré à l'organisation de l'équipe IT pour anticiper les ruptures, éviter les erreurs de commande, et accélérer les remplacements. Ce projet m'a permis de structurer l'information opérationnelle et de proposer une solution concrète à une problématique de terrain.",
      skills: ["bureautique-productivite", "organisation-personnelle", "initiative", "esprit-analyse"]
    },
    {
      id: "projet-2-migration-office",
      title: "Migration Office 365",
      image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Harmonisation des versions d'Office sur le parc informatique pour résoudre les problèmes de compatibilité et améliorer la collaboration.",
      context: "Lors de ma mission chez Skyepharma, un manque d'homogénéité entre les versions d'Office utilisées sur les postes de travail posait de nombreux problèmes de compatibilité, notamment dans la lecture et l'édition de fichiers partagés. Cette situation impactait la collaboration entre les équipes et ralentissait les processus métiers.",
      objectives: [
        "Uniformiser les versions d'Office pour améliorer la compatibilité entre les utilisateurs",
        "Faciliter la transition vers la suite Office 365",
        "Accompagner les collaborateurs dans la prise en main des nouveaux outils"
      ],
      realization: "J'ai mené un inventaire des versions installées sur les différents postes afin d'identifier les écarts. Une fois les besoins établis, j'ai coordonné les mises à jour en priorisant les services les plus impactés. En parallèle, j'ai accompagné les utilisateurs dans la découverte des outils d'Office 365 (notamment Outlook, OneDrive, et Teams), en simplifiant la configuration de leurs environnements. Mon rôle a été à la fois technique et humain, en facilitant l'appropriation des outils tout en assurant un déploiement stable.",
      skills: ["bureautique-productivite", "organisation-personnelle", "communication-relationnel", "rigueur", "initiative"]
    },
    {
      id: "projet-3-audit-securite",
      title: "Audit de sécurité",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Mise en conformité des postes utilisateurs suite à un audit de sécurité par le déploiement de solutions de chiffrement et de protection d'accès.",
      context: "À la suite d'un audit de sécurité chez Skyepharma, plusieurs failles ont été identifiées concernant la protection des postes utilisateurs. Notamment, le chiffrement des données n'était pas systématiquement appliqué, et l'accès matériel aux machines n'était pas suffisamment restreint. L'entreprise a donc engagé une démarche de mise en conformité pour renforcer la sécurité des postes de travail.",
      objectives: [
        "Mettre en conformité les postes selon les recommandations de l'audit",
        "Protéger les données stockées localement via le chiffrement",
        "Restreindre l'accès matériel aux machines (BIOS) pour éviter toute manipulation non autorisée"
      ],
      realization: "J'ai déployé BitLocker manuellement sur chaque poste concerné, en veillant à la bonne configuration des paramètres de chiffrement et à la sauvegarde sécurisée des clés de récupération. En complément, j'ai configuré des mots de passe d'administration dans le BIOS pour empêcher tout démarrage non autorisé ou modification critique. Ce projet a été mené dans un environnement sensible où rigueur, confidentialité et documentation étaient indispensables. L'ensemble du processus a été structuré en suivant une logique projet : recensement, déploiement progressif, tests de conformité et transmission des informations aux équipes IT.",
      skills: ["securite", "administration-windows", "rigueur", "communication-relationnel", "organisation-personnelle", "esprit-analyse"]
    },
    {
      id: "projet-4-informatique-industrielle",
      title: "Informatique industrielle",
      image: "https://images.unsplash.com/photo-1581267455542-6053a3322176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Gestion autonome du parc informatique industriel et support utilisateurs dans un contexte de production sensible et de forte rotation du personnel.",
      context: "Durant mon alternance chez Skyepharma, j'ai été amené à intervenir dans un contexte industriel exigeant, marqué par une forte présence d'intérimaires et des besoins constants d'adaptation informatique en production. J'ai dû assurer la gestion du parc informatique de production et intervenir en autonomie sur des environnements critiques sans passation, suite au départ du technicien en charge de l'informatique industrielle.",
      objectives: [
        "Maintenir à jour l'Active Directory dans un contexte de fort turnover",
        "Garantir la continuité du service informatique en environnement de production",
        "Répondre rapidement aux incidents sur les machines connectées à la chaîne industrielle"
      ],
      realization: "J'ai assuré la création, modification et suppression des comptes dans l'Active Directory pour suivre l'évolution fréquente du personnel. En parallèle, j'ai veillé au bon fonctionnement des postes informatiques intégrés à la production, souvent en interaction directe avec les automates industriels. En totale autonomie, j'ai organisé mes interventions selon les priorités métiers, tout en maintenant un environnement stable malgré le manque de documentation initiale. Cette mission m'a appris à jongler entre réactivité, rigueur et autonomie dans un cadre à forte contrainte opérationnelle.",
      skills: ["administration-windows", "organisation-personnelle", "autonomie", "esprit-analyse", "communication-relationnel"]
    },
    {
      id: "projet-5-magellan-sagt",
      title: "MAGELLAN – SAGT",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Standardisation et optimisation des règles d'automatisation dans le système d'aide à la gestion du trafic d'APRR.",
      context: "Toujours dans le cadre du programme MAGELLAN chez APRR, le module SAGT (Système d'Aide à la Gestion des Trafic) permet d'automatiser les actions à déclencher lors d'événements sur le réseau autoroutier (accidents, bouchons, conditions météo, etc.). J'ai été sollicité pour intervenir sur l'organisation des règles utilisées par le système, qui manquaient d'uniformité et rendaient leur création complexe et chronophage pour les équipes.",
      objectives: [
        "Homogénéiser les règles d'automatisation dans le module SAGT",
        "Faciliter la création de nouvelles règles pour les utilisateurs internes",
        "Améliorer la lisibilité et la cohérence du système"
      ],
      realization: "En analysant les règles existantes dans le logiciel, j'ai constaté un écart important dans les formats de nommage et dans la structuration des entrées. J'ai alors pris l'initiative de concevoir un tableau de nomenclature normalisée, regroupant toutes les valeurs possibles et les bonnes pratiques à respecter pour créer de nouvelles règles. Ce document partagé a permis aux équipes de gagner en temps et en clarté lors de la configuration des automatismes. Cette action a renforcé la fiabilité fonctionnelle du système SAGT, tout en apportant un support concret aux utilisateurs du logiciel.",
      skills: ["conduite-projet-logiciel", "initiative", "esprit-analyse", "rigueur", "communication-relationnel", "management-projet"]
    },
    {
      id: "projet-6-magellan-meteor",
      title: "MAGELLAN – METEOR",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Paramétrage d'un système de visualisation en temps réel pour la météo et le trafic autoroutier.",
      context: "Dans le cadre du projet MAGELLAN - METEOR chez APRR, l'outil METEOR a été conçu pour offrir une visualisation en temps réel de la météo et du trafic autoroutier. L'objectif était d'apporter aux opérateurs en poste de commandement une lecture claire des événements affectant les différentes zones du réseau. Mon rôle, au sein de l'équipe administratrice fonctionnelle, a été de contribuer au paramétrage du système pour qu'il réponde précisément aux besoins métier.",
      objectives: [
        "Paramétrer les zones de surveillance météo/trafic dans les différents équipes utilisatrices du logiciel",
        "S'assurer de la cohérence des informations affichées par rapport à la géographie du réseau APRR",
        "Améliorer l'ergonomie de la plateforme et sa compréhension métier"
      ],
      realization: "En lien avec les référents régionaux, j'ai créé des \"contextes\" personnalisés pour chaque poste de commandement, intégrant les équipements de mesure (stations météo, stations de comptage, etc.) correspondant aux zones surveillées. J'ai adapté la configuration de METEOR pour que chaque PC bénéficie d'une visualisation claire et pertinente des données trafic/météo. Mon intervention a permis une meilleure exploitation fonctionnelle du système et a contribué à une prise de décision plus rapide par les opérateurs.",
      skills: ["conduite-projet-logiciel", "organisation-personnelle", "esprit-analyse", "communication-relationnel"]
    }
  ];

  const toggleProjectExpansion = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
      setShowAllProjects(true);
      navigate('/projects');
    } else {
      setExpandedProject(id);
      setShowAllProjects(false);
      navigate(`/projects#${id}`);
    }
  };

  const getSkillName = (skillId: string) => {
    const skillNames: {[key: string]: string} = {
      "administration-windows": "Administration Windows",
      "securite": "Sécurité",
      "bureautique-productivite": "Bureautique et productivité",
      "conduite-projet-logiciel": "Conduite de projet logiciel",
      "management-projet": "Management de projet",
      "communication-relationnel": "Communication et relationnel",
      "esprit-analyse": "Esprit d'analyse",
      "rigueur": "Rigueur",
      "initiative": "Initiative",
      "organisation-personnelle": "Organisation personnelle",
      "autonomie": "Autonomie"
    };
    
    return skillNames[skillId] || skillId;
  };

  const backToAllProjects = () => {
    setExpandedProject(null);
    setShowAllProjects(true);
    navigate('/projects');
  };

  // Filter projects to display
  const filteredProjects = expandedProject 
    ? projects.filter(project => project.id === expandedProject) 
    : projects;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {!showAllProjects && (
            <Button 
              onClick={backToAllProjects} 
              variant="outline" 
              className="mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour à tous les projets
            </Button>
          )}
          
          {showAllProjects && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes projets</h1>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg text-muted-foreground">
                  Cette page présente les projets majeurs que j'ai réalisés durant mes années d'alternance. 
                  Chaque projet est associé à une compétence développée dans un contexte réel, et témoigne 
                  de ma capacité à répondre à des besoins concrets dans différents environnements professionnels.
                </p>
              </div>
            </>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                id={project.id}
                className={`overflow-hidden border border-primary/20 transition-all duration-300 ${
                  expandedProject === project.id 
                    ? "col-span-1 md:col-span-2 lg:col-span-3" 
                    : "hover:shadow-md"
                }`}
              >
                <div className={`w-full overflow-hidden ${
                  expandedProject === project.id 
                    ? "max-h-[200px] md:max-h-[250px]" 
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
                  
                  {expandedProject === project.id ? (
                    <div className="space-y-6">
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
                              className="inline-flex items-center rounded-md border border-input bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {getSkillName(skill)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  
                  <div className="pt-6 text-center">
                    {!expandedProject ? (
                      <Button 
                        onClick={() => toggleProjectExpansion(project.id)} 
                        variant="default"
                      >
                        Voir le détail du projet
                      </Button>
                    ) : (
                      <Button 
                        onClick={backToAllProjects} 
                        variant="outline"
                      >
                        Retour à tous les projets
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
