import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  context: string;
  objectives: string[];
  realization: string;
  skills: string[];
  technologies: string[];
  results: string[];
};

export const getSkillName = (skillId: string): string => {
  const skillNames: { [key: string]: string } = {
    "adaptabilite": "Adaptabilité",
    "autonomie": "Autonomie",
    "esprit-analyse": "Esprit d'analyse",
    "resolution-problemes": "Résolution de problèmes",
    "capacite-apprentissage": "Capacité d'apprentissage",
    "rigueur": "Rigueur",
    "organisation-personnelle": "Organisation personnelle",
    "gestion-projet": "Gestion de projet",
    "communication-interservices": "Communication interservices",
    "redaction": "Rédaction",
    "support-technique": "Support technique",
    "securite-informatique": "Sécurité informatique",
    "systemes-windows-ad": "Systèmes Windows / Active Directory",
    "conduite-projet-logiciel": "Conduite de projet logiciel",
    "ergonomie-ihm": "Ergonomie et interfaces homme-machine",
    "conception-reseau": "Conception réseau"
  };
  return skillNames[skillId] || "Compétence inconnue";
};

export const projects: Project[] = [
  {
    id: "projet-1-standardisation-parc",
    title: "Standardisation du parc d'impression",
    subtitle: "Optimisation et modernisation des équipements d'impression",
    image: "/lovable-uploads/6b020a7d-495f-49ee-b8f4-e1be02e2d69b.png",
    context: "Dans le cadre de l'optimisation des ressources informatiques de l'entreprise, j'ai été chargé de mener un projet de standardisation complète du parc d'impression. Ce projet visait à remplacer un parc hétérogène et vieillissant par une solution unifiée, plus performante et économiquement viable.",
    objectives: [
      "Réduire les coûts de maintenance et de consommables",
      "Améliorer la fiabilité et les performances des équipements",
      "Simplifier la gestion du parc avec une solution centralisée",
      "Mettre en place un système de supervision et d'approvisionnement automatique"
    ],
    realization: "J'ai mené ce projet de A à Z en autonomie complète. Après un audit complet du parc existant (recensement de 50+ équipements), j'ai établi un cahier des charges précis et consulté plusieurs fournisseurs. Le choix s'est porté sur RICOH pour la qualité de leurs équipements et leur solution de gestion centralisée Streamline NX. J'ai coordonné le déploiement de 30 nouvelles imprimantes multifonctions, configuré le système de supervision centralisé, et mis en place l'authentification par badge pour sécuriser les impressions. Le projet a également inclus la formation des utilisateurs et la création d'une documentation complète pour la maintenance.",
    skills: [
      "organisation-personnelle",
      "gestion-projet", 
      "conception-reseau",
      "securite-informatique",
      "support-technique",
      "redaction",
      "autonomie",
      "esprit-analyse"
    ],
    technologies: ["RICOH Streamline NX", "Windows Server", "Active Directory", "VLAN", "Authentification par badge"],
    results: [
      "Réduction de 40% des coûts de maintenance annuels",
      "Amélioration de 60% de la disponibilité des équipements",
      "Mise en place d'un approvisionnement automatique des consommables",
      "Sécurisation des impressions sensibles par authentification"
    ]
  },
  {
    id: "projet-2-migration-office",
    title: "Migration Office 365",
    subtitle: "Transition vers la suite Microsoft 365 moderne",
    image: "/lovable-uploads/91cb1a3d-669d-42c3-9680-fde64dd31fe1.png",
    context: "L'entreprise utilisait une version obsolète de Microsoft Office qui ne répondait plus aux besoins modernes de collaboration et présentait des risques de sécurité. Une migration vers Office 365 était nécessaire pour moderniser l'environnement de travail et améliorer la productivité des équipes.",
    objectives: [
      "Migrer l'ensemble du parc vers Office 365",
      "Assurer une transition fluide sans interruption d'activité",
      "Former les utilisateurs aux nouveaux outils collaboratifs",
      "Optimiser la gestion des licences et des accès"
    ],
    realization: "J'ai planifié et exécuté cette migration en plusieurs phases. Après une analyse de compatibilité approfondie, j'ai développé une stratégie de déploiement progressive par service. J'ai créé des scripts de désinstallation de l'ancienne suite et d'installation de Office 365, puis j'ai coordonné les interventions sur 150+ postes. Parallèlement, j'ai animé des sessions de formation pour accompagner les utilisateurs dans la découverte des nouveaux outils comme Teams, OneDrive et SharePoint. J'ai également mis en place un support de proximité pendant la période de transition.",
    skills: [
      "organisation-personnelle",
      "gestion-projet",
      "adaptabilite", 
      "support-technique",
      "redaction",
      "autonomie",
      "esprit-analyse",
      "resolution-problemes",
      "rigueur",
      "capacite-apprentissage"
    ],
    technologies: ["Microsoft Office 365", "PowerShell", "Windows 10", "Active Directory", "Microsoft Teams", "OneDrive"],
    results: [
      "Migration de 100% du parc en 3 semaines",
      "Aucune perte de données pendant la transition",
      "Formation de 80+ utilisateurs aux nouveaux outils",
      "Mise en place d'un environnement collaboratif moderne"
    ]
  },
  {
    id: "projet-3-audit-securite", 
    title: "Audit de sécurité",
    subtitle: "Renforcement de la sécurité du système d'information",
    image: "/lovable-uploads/9de0a077-4a3c-4fa0-ac7e-10e08bb2c465.png",
    context: "Suite à un audit de sécurité externe, plusieurs vulnérabilités critiques ont été identifiées dans l'infrastructure informatique. Il était urgent de mettre en place des mesures correctives pour protéger les données sensibles et se conformer aux standards de sécurité.",
    objectives: [
      "Corriger les failles de sécurité identifiées lors de l'audit",
      "Implémenter le chiffrement des postes utilisateurs",
      "Sécuriser l'accès physique aux machines",
      "Mettre en place des politiques de sécurité renforcées"
    ],
    realization: "J'ai pris en charge la mise en conformité sécuritaire de l'ensemble du parc informatique. J'ai déployé BitLocker via les stratégies de groupe (GPO) pour chiffrer les disques durs de tous les postes utilisateurs. En parallèle, j'ai configuré des mots de passe administrateur BIOS sur chaque machine pour empêcher les modifications non autorisées. J'ai également mis à jour les politiques de sécurité Active Directory et créé une documentation complète des procédures. Tous les postes ont été sécurisés individuellement avec vérification du bon fonctionnement du chiffrement.",
    skills: [
      "securite-informatique",
      "systemes-windows-ad",
      "autonomie",
      "rigueur",
      "esprit-analyse",
      "resolution-problemes",
      "capacite-apprentissage",
      "redaction"
    ],
    technologies: ["BitLocker", "GPO", "Active Directory", "Windows 10", "TPM", "BIOS"],
    results: [
      "100% des postes chiffrés avec BitLocker",
      "Sécurisation physique de 150+ machines",
      "Conformité aux standards de sécurité",
      "Réduction significative des risques de vol de données"
    ]
  },
  {
    id: "projet-4-informatique-industrielle",
    title: "Informatique industrielle",
    subtitle: "Gestion et maintenance des systèmes industriels critiques",
    image: "/lovable-uploads/b7ea56a5-46c6-4306-81b8-89970e8d4c89.png",
    context: "Prise de poste en environnement industriel pharmaceutique avec la responsabilité complète du parc informatique industriel. Les systèmes contrôlent des lignes de production critiques avec des exigences de disponibilité maximale et des contraintes réglementaires strictes.",
    objectives: [
      "Assurer la continuité des systèmes de production",
      "Maintenir la conformité réglementaire des équipements",
      "Optimiser les performances des lignes automatisées",
      "Gérer les comptes et accès des systèmes critiques"
    ],
    realization: "J'ai pris en charge l'administration complète des systèmes industriels incluant les pupitres Siemens, les systèmes IFIX, et les machines IMA et Glatt. J'ai géré les comptes utilisateurs dans l'Active Directory industriel, assuré la maintenance préventive et corrective des postes de supervision, et intervenu sur des pannes critiques. Un exemple marquant : déblocage d'urgence d'une ligne IMA en coordination avec les techniciens spécialisés, permettant de minimiser l'arrêt de production. J'ai également mis en place un système de suivi et d'audit des équipements pour assurer la traçabilité réglementaire.",
    skills: [
      "autonomie",
      "esprit-analyse", 
      "resolution-problemes",
      "adaptabilite",
      "organisation-personnelle",
      "support-technique",
      "securite-informatique",
      "systemes-windows-ad",
      "redaction"
    ],
    technologies: ["Siemens WinCC", "GE iFIX", "IMA", "Glatt", "Marchesini", "Active Directory", "Windows Server"],
    results: [
      "99.5% de disponibilité des systèmes critiques",
      "Réduction de 30% du temps d'arrêt non planifié",
      "Mise en conformité réglementaire complète",
      "Documentation exhaustive des procédures"
    ]
  },
  {
    id: "projet-5-magellan-sagt",
    title: "MAGELLAN - SAGT",
    subtitle: "Restructuration des règles d'automatisation du trafic",
    image: "/lovable-uploads/dc42d57c-c697-4a46-a922-1969a273854a.png",
    context: "Le module SAGT (Système d'Aide à la Gestion du Trafic) de MAGELLAN présentait des règles d'automatisation désorganisées et peu maintenables, impactant l'efficacité de la gestion du trafic autoroutier. Une restructuration complète était nécessaire pour améliorer la fiabilité et la lisibilité du système.",
    objectives: [
      "Restructurer et homogénéiser les règles existantes",
      "Créer une nomenclature claire et évolutive",
      "Améliorer la maintenabilité du système",
      "Former les équipes aux nouvelles procédures"
    ],
    realization: "J'ai mené une analyse exhaustive des règles existantes, identifié les incohérences et redondances, puis conçu une nouvelle architecture logique. J'ai créé une nomenclature standardisée pour les règles d'automatisation, restructuré l'ensemble des paramètres selon cette nouvelle logique, et documenté les bonnes pratiques. Le travail a été réalisé en étroite collaboration avec les équipes opérationnelles pour valider chaque évolution. J'ai également assuré la formation des administrateurs fonctionnels à la nouvelle organisation.",
    skills: [
      "esprit-analyse",
      "conduite-projet-logiciel",
      "communication-interservices",
      "redaction",
      "rigueur",
      "capacite-apprentissage",
      "organisation-personnelle",
      "gestion-projet"
    ],
    technologies: ["MAGELLAN SAGT", "Bases de données", "Systèmes de gestion du trafic", "Outils de paramétrage"],
    results: [
      "Réduction de 50% du temps de création de nouvelles règles",
      "Amélioration de la cohérence des automatisations",
      "Documentation complète des procédures",
      "Formation de 15+ administrateurs fonctionnels"
    ]
  },
  {
    id: "projet-6-magellan-meteor",
    title: "MAGELLAN - METEOR",
    subtitle: "Optimisation des interfaces de visualisation météo et trafic",
    image: "/lovable-uploads/d631c07d-942c-41bb-8630-1359b8680576.png",
    context: "Le module METEOR de MAGELLAN permet aux postes de commandement autoroutiers de visualiser les conditions météorologiques et l'état du trafic. Les interfaces nécessitaient une adaptation aux besoins spécifiques de chaque région pour optimiser la prise de décision opérationnelle.",
    objectives: [
      "Adapter les interfaces aux besoins régionaux",
      "Améliorer l'ergonomie et la lisibilité des informations",
      "Optimiser l'affichage des données critiques",
      "Faciliter la prise de décision en situation d'urgence"
    ],
    realization: "J'ai coordonné les retours des différents postes de commandement régionaux pour comprendre leurs besoins spécifiques. J'ai ensuite adapté les configurations d'affichage, reorganisé la hiérarchisation des informations (stations météo, incidents, bouchons), et optimisé les filtres géographiques. Le projet a nécessité une approche collaborative étroite entre les équipes techniques et les utilisateurs terrain. J'ai testé et validé chaque modification avec les opérateurs avant déploiement.",
    skills: [
      "ergonomie-ihm",
      "communication-interservices", 
      "conduite-projet-logiciel",
      "adaptabilite",
      "esprit-analyse",
      "autonomie",
      "redaction"
    ],
    technologies: ["MAGELLAN METEOR", "Interfaces web", "Systèmes de visualisation", "Bases de données météo"],
    results: [
      "Amélioration de l'expérience utilisateur pour 8 régions",
      "Réduction du temps de prise de décision de 25%",
      "Optimisation de l'affichage des informations critiques",
      "Standardisation des configurations régionales"
    ]
  }
];
