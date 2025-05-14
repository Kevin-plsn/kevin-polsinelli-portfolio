
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, MessageSquare, Monitor, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SkillsPage = () => {
  const skills = [
    {
      title: "Gestion de projet SAE",
      icon: <Monitor className="h-12 w-12 text-primary" />,
      definition: "La gestion de projet SAE (Services d'Aide à l'Exploitation) consiste à piloter le déploiement, l'évolution ou l'optimisation d'outils dédiés à l'exploitation des infrastructures (réseaux routiers, équipements techniques, systèmes métiers). Un SAE vise à centraliser, fiabiliser et automatiser les informations utiles à la prise de décision en temps réel : alertes, incidents, météo, interventions. Ce type de projet requiert une coordination étroite entre les équipes IT, les métiers et les exploitants terrain, tout en assurant la continuité de service, l'ergonomie des interfaces et la conformité aux exigences opérationnelles.",
      projects: "Intégré au projet MAGELLAN chez APRR après son lancement, j'ai contribué à l'évolution de METEOR, un outil de supervision permettant la visualisation en temps réel du trafic et des conditions météo. Ma mission consistait à paramétrer les contextes de visualisation pour les Postes de Commandement, en adaptant les interfaces aux spécificités géographiques. J'ai analysé les besoins métiers, validé les paramétrages réalisés et accompagné les équipes terrain dans la prise en main du système.",
      impact: "Ce projet m'a permis de comprendre comment intégrer des évolutions dans un projet déjà en place, en m'adaptant à des contraintes fonctionnelles et à des retours utilisateurs. J'ai renforcé ma capacité à structurer un projet, à travailler en coordination avec des équipes variées, et à livrer une solution concrète et utile sur le terrain.",
      projectLink: "/projects"
    },
    {
      title: "Support technique & informatique industrielle",
      icon: <Code className="h-12 w-12 text-primary" />,
      definition: "Le support technique regroupe les actions visant à maintenir le bon fonctionnement du parc informatique et à accompagner les utilisateurs. En environnement industriel, cela inclut également l'intervention sur les équipements liés à la production, dans un cadre souvent normatif et critique.",
      projects: "Chez Skyepharma, j'ai repris l'ensemble des missions de l'informaticien industriel après son départ sans passation. J'ai assuré le support de niveau 1 et 2, le suivi du parc informatique, la gestion des incidents sur les machines de production, et la mise à jour régulière de l'Active Directory dans un contexte de forte rotation du personnel intérimaire.",
      impact: "Cette expérience m'a permis de renforcer mon autonomie, ma réactivité et ma capacité d'analyse dans un contexte où les erreurs peuvent avoir un impact direct sur la production. J'ai appris à prioriser les demandes, à être opérationnel rapidement sur des environnements critiques, et à créer un lien de confiance avec les utilisateurs.",
      projectLink: "/projects"
    },
    {
      title: "Automatisation et sécurisation des environnements IT",
      icon: <Shield className="h-12 w-12 text-primary" />,
      definition: "Automatiser et sécuriser les environnements IT permet de standardiser les processus, réduire les erreurs humaines, et garantir une meilleure protection des systèmes et des données. Cela repose sur des outils comme les scripts, les GPO, le MDM ou l'Active Directory.",
      projects: "Chez APRR, j'ai utilisé GHABIL pour automatiser la création de comptes utilisateurs selon les services. Chez Skyepharma, j'ai déployé BitLocker via GPO, sécurisé les postes avec un mot de passe BIOS, et mis en place un MDM pour la gestion d'une nouvelle flotte de smartphones. Ces actions ont renforcé l'autonomie de gestion et la protection des équipements.",
      impact: "J'ai appris à automatiser intelligemment des tâches critiques, à déployer des solutions de sécurité cohérentes à l'échelle de l'entreprise, et à structurer des configurations pour en assurer la fiabilité. Cela m'a permis de gagner du temps, de fiabiliser les installations, et de répondre aux exigences des audits de sécurité.",
      projectLink: "/projects"
    },
    {
      title: "Administration et sécurité des systèmes d'information",
      icon: <Database className="h-12 w-12 text-primary" />,
      definition: "Administrer un SI, c'est garantir la stabilité, la sécurité et la cohérence des services informatiques. Cela comprend la gestion des comptes utilisateurs, des droits d'accès, des politiques de sécurité et la supervision de l'ensemble de l'infrastructure.",
      projects: "J'ai administré l'Active Directory chez Skyepharma (création de comptes, affectation aux groupes), géré la sécurité des postes via BitLocker, et configuré des GPO adaptées aux besoins internes. J'ai également participé à la supervision via Centreon pour maintenir les équipements critiques.",
      impact: "Ces missions m'ont permis d'adopter une posture rigoureuse et préventive dans la gestion du SI. J'ai compris l'importance d'une politique de sécurité structurée, appris à intervenir rapidement en cas d'incident, et à documenter mes actions pour assurer leur traçabilité.",
      projectLink: "/projects"
    },
    {
      title: "Supervision et gestion d'infrastructure",
      icon: <Monitor className="h-12 w-12 text-primary" />,
      definition: "La supervision permet de surveiller en temps réel l'état et les performances des ressources informatiques. Elle est essentielle pour anticiper les incidents, maintenir la disponibilité des services et garantir une infrastructure stable.",
      projects: "Chez Skyepharma, j'ai participé à la mise en place de la supervision Centreon. J'ai configuré des points de contrôle, paramétré les alertes critiques et aidé à l'intégration de nouveaux équipements au système de surveillance.",
      impact: "Cette mission m'a appris à lire et interpréter des indicateurs techniques, à être proactif dans la détection d'incidents, et à collaborer avec les équipes pour adapter la supervision aux enjeux réels de production. Elle a renforcé ma vision globale de l'infrastructure et ma capacité à travailler en mode préventif.",
      projectLink: "/projects"
    },
    {
      title: "Communication et accompagnement des utilisateurs",
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      definition: "Communiquer efficacement et accompagner les utilisateurs est essentiel pour faciliter l'adoption des outils IT. Cela inclut la formation, la création de supports et la capacité à vulgariser des sujets techniques selon les profils.",
      projects: "Chez APRR, j'ai formé les opérateurs des PC à l'utilisation de METEOR, en leur expliquant les nouveaux contextes de visualisation mis en place. Chez Skyepharma, j'ai accompagné le déploiement de la nouvelle téléphonie IP en rédigeant des procédures claires et en formant les collaborateurs.",
      impact: "J'ai appris à m'adapter à des publics variés, à transmettre des consignes techniques de manière simple, et à recueillir des retours pour améliorer les outils. Cela a renforcé mes qualités relationnelles et mon aisance dans les échanges transverses.",
      projectLink: "/projects"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes compétences</h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              Au fil de mes expériences en alternance et de ma formation en ingénierie informatique, j'ai acquis des compétences solides à la fois techniques et humaines. Cette section présente les domaines dans lesquels j'ai évolué, les projets concrets que j'ai menés, et les savoir-faire que j'ai développés pour répondre aux enjeux de l'entreprise et du terrain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {skills.map((skill, index) => (
              <Card key={index} className="border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {skill.icon}
                  <div>
                    <CardTitle className="text-xl font-semibold">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Définition</h3>
                    <p className="text-sm text-foreground">{skill.definition}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Projets et actions menées</h3>
                    <p className="text-sm text-foreground">{skill.projects}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Ce que cette compétence m'a apportée</h3>
                    <p className="text-sm text-foreground">{skill.impact}</p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button asChild variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      <Link to={skill.projectLink}>Voir les projets associés</Link>
                    </Button>
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

export default SkillsPage;
