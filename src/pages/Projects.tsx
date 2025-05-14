
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Création de contextes METEOR – APRR",
      description: "METEOR est un outil intégré au programme MAGELLAN déployé chez APRR pour permettre aux Postes de Commandement (PC) d'avoir une vue en temps réel des conditions météo et du trafic. J'ai intégré le projet après son déploiement initial pour adapter et configurer les contextes visuels utilisés par les opérateurs selon les zones géographiques.",
      objectives: [
        "Créer des contextes géographiques (Nord, Sud, Est, Ouest) pour la supervision",
        "Améliorer la lisibilité des informations et la réactivité des équipes",
        "Assurer une cohérence fonctionnelle avec les autres outils métier"
      ],
      realization: [
        "Configuration des zones de supervision sur METEOR",
        "Recueil des besoins auprès des équipes de terrain",
        "Tests de validation dans les salles de supervision",
        "Élaboration de supports d'utilisation et de fiches pratiques",
        "Ajustements ergonomiques selon les retours utilisateurs"
      ],
      skills: {
        intellectual: "Esprit d'analyse, rigueur, autonomie",
        general: "Communication avec les métiers, documentation fonctionnelle",
        technical: "Outils SAE, supervision temps réel, ergonomie applicative"
      }
    },
    {
      id: 2,
      title: "Création automatisée de comptes utilisateurs via GHABIL – APRR",
      description: "GHABIL est un outil interne utilisé chez APRR pour automatiser la création de comptes Active Directory en lien avec la gestion RH. J'ai été chargé d'analyser et d'harmoniser les règles de création de comptes afin de faciliter la maintenance du système et de garantir une cohérence entre les différents services.",
      objectives: [
        "Standardiser les règles de nommage des comptes dans GHABIL",
        "Faciliter la création automatique de comptes utilisateurs",
        "Réduire les erreurs et les interventions manuelles"
      ],
      realization: [
        "Analyse des règles de nommage existantes",
        "Création d'un tableau de correspondance pour homogénéiser les règles",
        "Partage d'un guide standardisé pour les futurs ajouts",
        "Communication aux équipes fonctionnelles sur les bonnes pratiques"
      ],
      skills: {
        intellectual: "Esprit de synthèse, initiative",
        general: "Organisation personnelle, formalisation de standards",
        technical: "Active Directory, outils d'automatisation, documentation technique"
      }
    },
    {
      id: 3,
      title: "Déploiement BitLocker & sécurisation BIOS – Skyepharma",
      description: "À la suite d'un audit de sécurité (pentest), la direction informatique de Skyepharma a décidé de renforcer la sécurité des postes utilisateurs. J'ai été en charge du déploiement de BitLocker via GPO ainsi que de la configuration de mots de passe BIOS sur les ordinateurs portables et fixes.",
      objectives: [
        "Sécuriser les postes utilisateurs contre le vol de données",
        "Respecter les recommandations issues de l'audit de sécurité",
        "Centraliser le contrôle via Active Directory"
      ],
      realization: [
        "Déploiement de BitLocker avec stratégie GPO",
        "Activation de la TPM et configuration automatique du chiffrement",
        "Configuration manuelle des mots de passe BIOS sur chaque machine",
        "Tests de redémarrage sécurisé",
        "Rédaction de documentation à usage interne"
      ],
      skills: {
        intellectual: "Rigueur, respect des normes de sécurité",
        general: "Rédaction de procédures, suivi d'un audit",
        technical: "GPO, BitLocker, BIOS, sécurité poste client"
      }
    },
    {
      id: 4,
      title: "Mise en place d'un MDM pour flotte mobile – Skyepharma",
      description: "Skyepharma a renouvelé sa flotte de smartphones professionnels. Il m'a été confié le déploiement d'un MDM (Mobile Device Management) afin de gérer ces appareils à distance, garantir leur sécurité et en faciliter l'administration.",
      objectives: [
        "Déployer une solution de gestion à distance des mobiles",
        "Sécuriser l'accès aux données pro",
        "Pré-configurer les appareils avant remise aux utilisateurs"
      ],
      realization: [
        "Choix et mise en place du MDM",
        "Enregistrement des 15 appareils dans la console",
        "Paramétrage des règles de sécurité (code, accès restreint, GPS, etc.)",
        "Formation des utilisateurs à l'utilisation des smartphones",
        "Suivi des alertes et tests de verrouillage à distance"
      ],
      skills: {
        intellectual: "Autonomie, gestion de projet",
        general: "Relation utilisateurs, documentation",
        technical: "MDM, sécurité mobile, téléphonie professionnelle"
      }
    },
    {
      id: 5,
      title: "Gestion Active Directory Industriel – Skyepharma",
      description: "Dans un contexte de forte rotation du personnel (intérim), j'ai assuré la gestion quotidienne de l'Active Directory : création, modification et suppression des comptes utilisateurs et groupes.",
      objectives: [
        "Garantir un environnement AD propre et à jour",
        "Gérer les accès en fonction des profils métiers",
        "Réduire les risques de sécurité liés aux comptes orphelins"
      ],
      realization: [
        "Création de comptes et attribution de droits",
        "Nettoyage des comptes inactifs ou dupliqués",
        "Suivi des mouvements RH pour les suppressions"
      ],
      skills: {
        intellectual: "Organisation, réactivité",
        general: "Suivi administratif, documentation IT",
        technical: "Active Directory, gestion des droits, scripts PowerShell"
      }
    },
    {
      id: 6,
      title: "Déploiement supervision Centreon – Skyepharma",
      description: "Skyepharma souhaitait renforcer la supervision de son infrastructure IT. J'ai participé à la mise en place de Centreon, un outil open-source permettant de surveiller en temps réel l'état des serveurs, switches et équipements critiques.",
      objectives: [
        "Mettre en place une supervision proactive",
        "Réduire les temps d'indisponibilité",
        "Alerter automatiquement en cas de panne"
      ],
      realization: [
        "Installation de Centreon sur serveur dédié",
        "Ajout des hôtes critiques : serveurs, switchs, imprimantes, etc.",
        "Paramétrage des seuils d'alerte et notifications mail",
        "Tests de panne simulée",
        "Création de tableaux de bord lisibles pour l'équipe IT"
      ],
      skills: {
        intellectual: "Esprit de synthèse, anticipation",
        general: "Suivi d'outils IT, reporting",
        technical: "Supervision, Centreon, monitoring réseau"
      }
    },
    {
      id: 7,
      title: "Déploiement téléphonie IP – Skyepharma",
      description: "Skyepharma a remplacé son ancienne téléphonie par une solution VoIP. J'ai accompagné le projet du déploiement des postes jusqu'à la formation des utilisateurs.",
      objectives: [
        "Installer les téléphones IP dans tous les services",
        "Configurer les profils utilisateurs dans le système",
        "Assurer la prise en main des nouveaux outils"
      ],
      realization: [
        "Configuration réseau des téléphones IP",
        "Affectation des postes utilisateurs dans le système",
        "Tests de communication (interne / externe)",
        "Rédaction de procédures d'utilisation simples",
        "Support technique pendant la phase de transition"
      ],
      skills: {
        intellectual: "Pédagogie, écoute",
        general: "Formation utilisateurs, support technique",
        technical: "Téléphonie IP, réseau LAN, VLAN voix"
      }
    },
    {
      id: 8,
      title: "Reprise informatique industrielle – Skyepharma",
      description: "Suite au départ de l'informaticien industriel sans passation, j'ai repris en urgence la gestion de l'IT industrielle de l'usine. J'ai assuré la continuité du support en atelier et la maintenance des systèmes connectés à la production.",
      objectives: [
        "Garantir le bon fonctionnement des machines et postes industriels",
        "Résoudre les incidents de production liés à l'IT",
        "Tenir à jour les comptes et équipements en environnement critique"
      ],
      realization: [
        "Gestion de l'AD spécifique au personnel de production",
        "Maintenance des PC industriels connectés aux automates",
        "Suivi des incidents techniques et coordination avec la production",
        "Documentation des procédures internes"
      ],
      skills: {
        intellectual: "Réactivité, gestion du stress",
        general: "Support technique, travail en environnement critique",
        technical: "Informatique industrielle, AD, réseau local"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes projets</h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              Cette page présente les projets majeurs que j'ai réalisés durant mes années d'alternance. 
              Chaque projet est associé à une compétence développée dans un contexte réel, et témoigne 
              de ma capacité à répondre à des besoins concrets dans différents environnements professionnels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground">{project.description}</p>
                    
                    <div>
                      <h3 className="font-semibold text-sm mb-2">🎯 Objectifs</h3>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {project.objectives.map((objective, index) => (
                          <li key={index}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sm mb-2">🛠️ Réalisation</h3>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {project.realization.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sm mb-2">✅ Compétences mobilisées</h3>
                      <div className="pl-5 space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">🧠 Aptitudes intellectuelles et comportementales:</span>{" "}
                          {project.skills.intellectual}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">🧩 Savoir-faire généraux:</span>{" "}
                          {project.skills.general}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">💻 Savoir-faire techniques:</span>{" "}
                          {project.skills.technical}
                        </p>
                      </div>
                    </div>
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
