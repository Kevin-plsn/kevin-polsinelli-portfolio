import { Project } from "../components/projects/ProjectCard";

export const projects: Project[] = [
  {
    id: "projet-1-standardisation-parc",
    title: "Standardisation du parc d'impression",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Standardisation et sécurisation du parc d'impression avec déploiement de la solution RICOH et Streamline NX pour une gestion centralisée et sécurisée.",
    context: "Pour améliorer la gestion du parc d'impression et renforcer la sécurité des accès utilisateurs, nous avons engagé une démarche de standardisation en collaboration avec le prestataire RICOH. L'objectif était multiple : simplifier le suivi des consommables, limiter les erreurs de commande, gagner en réactivité en cas de panne, et centraliser l'ensemble des informations liées aux imprimantes. L'outil Streamline NX a été déployé pour permettre un contrôle précis des impressions via des badges utilisateurs, assurant ainsi une meilleure traçabilité des impressions entrantes et sortantes. Ce projet visait à homogénéiser les équipements entre services, tout en professionnalisant la supervision et la sécurité documentaire au sein de l'entreprise.",
    objectives: [
      "Uniformiser le parc d'imprimantes avec des modèles RICOH pour faciliter la maintenance, le support et les commandes de consommables",
      "Réduire les erreurs de gestion en centralisant les informations techniques et logistiques via une interface commune",
      "Mettre en place un système de suivi intelligent des niveaux d'encre et des pannes, avec alertes automatisées pour anticiper les besoins",
      "Automatiser les commandes de toners, réduisant les ruptures et allégeant la charge de travail de l'équipe informatique",
      "Renforcer la sécurité documentaire grâce à l'authentification par badge via Streamline NX, permettant de contrôler et tracer toutes les impressions",
      "Optimiser les coûts et l'empreinte environnementale grâce à du matériel moderne, plus économe et mieux intégré à l'écosystème de l'entreprise"
    ],
    realization: "📋 État des lieux initial : J'ai mené un inventaire complet des imprimantes présentes dans l'entreprise, en recensant les modèles, leurs emplacements, les consommables associés, ainsi que les problèmes fréquents rencontrés par les utilisateurs. Cela m'a permis d'identifier les sources d'inefficacité et les doublons matériels. 🤝 Comparaison et sélection du prestataire : J'ai contacté plusieurs fournisseurs et organisé des rendez-vous pour analyser leurs offres. En étudiant les critères techniques, économiques et écologiques, le choix s'est porté sur RICOH pour sa capacité à fournir un matériel homogène, performant et compatible avec un système de supervision avancé. 🔄 Remplacement progressif des imprimantes : Les anciennes imprimantes ont été progressivement remplacées par des modèles RICOH, sélectionnés pour leur durabilité, leur faible consommation énergétique, et leur compatibilité avec les systèmes d'impression sécurisés. 🖥️ Déploiement de Streamline NX : J'ai contribué à la configuration de la solution Streamline NX pour permettre une authentification par badge sur chaque imprimante. Cette fonctionnalité a permis de renforcer la sécurité des impressions, d'éviter les impressions oubliées, et de tracer chaque utilisation par utilisateur. 📊 Mise en place d'une supervision centralisée : Grâce au portail RICOH, j'ai configuré le suivi en temps réel de l'état du parc : niveaux d'encre, alertes de maintenance, historique des incidents. Cette visibilité a permis de gagner en réactivité et de limiter les interruptions de service. 🛒 Automatisation des commandes de toner : Le système mis en place permet désormais de déclencher automatiquement les commandes de consommables lorsque les seuils critiques sont atteints. Cela a réduit les ruptures et évité les interventions manuelles du support IT. 📁 Création d'un tableau de gestion structuré : J'ai conçu une documentation sous Excel regroupant les informations clés (modèles, emplacements, dates d'installation, garanties, types de toner). Ce tableau est aujourd'hui utilisé comme outil de suivi et de référence pour les interventions et les remplacements. 👥 Accompagnement au changement : Enfin, j'ai participé à la communication auprès des équipes pour expliquer le fonctionnement du nouveau système, recueillir les retours, et m'assurer de l'adoption fluide des nouvelles imprimantes. Ce projet m'a permis de conduire une démarche complète d'analyse, de structuration et de déploiement dans un contexte concret d'entreprise. Techniquement, j'ai consolidé mes compétences en gestion de parc d'impression réseau, en automatisation des processus (commandes de consommables, supervision centralisée) et en sécurité des impressions grâce à la solution Streamline NX. J'ai également appris à évaluer des prestataires selon des critères techniques et organisationnels, ce qui m'a donné une vision plus globale de la gestion IT. Sur le plan professionnel, ce projet a renforcé mon autonomie, ma capacité d'organisation et mon esprit d'analyse. J'ai su prendre l'initiative pour résoudre une problématique ignorée jusque-là, et j'ai mené toutes les phases du projet, de l'audit au suivi post-installation, en passant par la relation fournisseur. Cette expérience m'a montré l'importance de l'organisation et de la capacité à transformer un besoin latent en solution concrète, mesurable et durable.",
    skills: ["bureautique-productivite", "organisation-personnelle", "initiative", "esprit-analyse", "autonomie", "securite", "management-projet"]
  },
  {
    id: "projet-2-migration-office",
    title: "Migration Office 365",
    image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Migration vers Microsoft Office 365 pour uniformiser les versions et améliorer la collaboration entre services chez Skyepharma.",
    context: "Au sein de l'entreprise Skyepharma, les collaborateurs utilisaient des versions variées de Microsoft Office, souvent obsolètes ou non alignées avec les standards internes. Cette hétérogénéité générait de nombreux problèmes de compatibilité : documents qui s'ouvraient mal, fonctionnalités indisponibles, fichiers illisibles ou corrompus. Résultat : une collaboration difficile entre services, une perte de temps considérable et une sollicitation fréquente du support technique. Pour moderniser l'environnement de travail, fluidifier les échanges et renforcer la cohérence des outils numériques, l'entreprise a décidé de migrer l'ensemble des postes vers la suite Microsoft Office 365. Cette solution cloud permettait d'uniformiser les versions, de centraliser la gestion des outils (Outlook, OneDrive, Teams, etc.) et d'améliorer l'expérience utilisateur au quotidien.",
    objectives: [
      "Uniformiser les versions de Microsoft Office sur l'ensemble des postes pour éliminer les problèmes de compatibilité entre documents et outils",
      "Faciliter la collaboration entre services grâce à une suite d'outils intégrés d'Office 365 (Outlook, Teams, OneDrive…)",
      "Alléger la charge de l'assistance technique en réduisant les sollicitations liées aux incompatibilités de fichiers ou aux versions obsolètes",
      "Moderniser l'infrastructure IT en adoptant une solution cloud évolutive et centralisée",
      "Améliorer l'environnement de travail avec une plateforme plus stable, cohérente et accessible, adaptée aux nouveaux usages professionnels"
    ],
    realization: "J'ai mené un inventaire des versions installées sur les différents postes afin d'identifier les écarts. Une fois les besoins établis, j'ai coordonné les mises à jour en priorisant les services les plus impactés. En parallèle, j'ai accompagné les utilisateurs dans la découverte des outils d'Office 365 (notamment Outlook, OneDrive, et Teams), en simplifiant la configuration de leurs environnements. Mon rôle a été à la fois technique et humain, en facilitant l'appropriation des outils tout en assurant un déploiement stable.",
    skills: ["bureautique-productivite", "organisation-personnelle", "communication-relationnel", "rigueur", "initiative", "autonomie", "esprit-analyse"]
  },
  {
    id: "projet-3-audit-securite",
    title: "Audit de sécurité",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Mise en conformité des postes utilisateurs suite à un audit de sécurité par le déploiement de BitLocker et la sécurisation du BIOS.",
    context: "À la suite d'un audit de sécurité, plusieurs points de vulnérabilité ont été révélés sur les postes de travail, notamment l'absence de chiffrement systématique des données sensibles et un accès BIOS encore libre sur certaines machines. Pour y remédier, une démarche de sécurisation globale a été lancée. L'objectif : protéger les postes à la fois sur le plan logiciel et matériel. J'ai ainsi été chargé de déployer BitLocker via des stratégies de groupe (GPO) pour assurer le chiffrement automatique des disques, tout en renforçant l'accès physique aux machines en configurant des mots de passe d'administration au niveau du BIOS. Cette double action visait à garantir l'intégrité des données et empêcher toute intervention non autorisée sur les terminaux.",
    objectives: [
      "Chiffrer l'ensemble des postes utilisateurs afin de protéger les données stockées localement",
      "Renforcer la sécurité physique en restreignant l'accès BIOS par mot de passe administrateur",
      "Automatiser le déploiement des règles de sécurité à travers les GPO (stratégies de groupe)",
      "Répondre aux recommandations issues de l'audit de sécurité mené en interne",
      "Assurer la traçabilité des actions réalisées et accompagner les utilisateurs dans les changements apportés",
      "Réduire le risque de fuite ou d'altération de données en cas de vol ou d'accès non autorisé"
    ],
    realization: "J'ai déployé BitLocker manuellement sur chaque poste concerné, en veillant à la bonne configuration des paramètres de chiffrement et à la sauvegarde sécurisée des clés de récupération. En complément, j'ai configuré des mots de passe d'administration dans le BIOS pour empêcher tout démarrage non autorisé ou modification critique. Ce projet a été mené dans un environnement sensible où rigueur, confidentialité et documentation étaient indispensables. L'ensemble du processus a été structuré en suivant une logique projet : recensement, déploiement progressif, tests de conformité et transmission des informations aux équipes IT.",
    skills: ["securite", "administration-windows", "rigueur", "communication-relationnel", "organisation-personnelle", "esprit-analyse", "autonomie"]
  },
  {
    id: "projet-4-informatique-industrielle",
    title: "Informatique industrielle",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Gestion autonome du parc informatique industriel et support utilisateurs dans un contexte de production sensible et de forte rotation du personnel.",
    context: "Dans un environnement industriel à forte contrainte de production, j'ai été amené à prendre en main l'intégralité du périmètre informatique en atelier, suite au départ du technicien en charge. L'entreprise faisait face à une forte rotation de personnel intérimaire, ce qui impliquait une gestion dynamique des comptes et des droits d'accès via Active Directory. En parallèle, les lignes de production reposaient sur un parc hétérogène de machines industrielles (IMA, Glatt, Siemens, Marchesini) nécessitant des interventions régulières pour assurer la continuité de fonctionnement. J'ai également réalisé des audits de ligne pour identifier les risques et points critiques.",
    objectives: [
      "Assurer la gestion des comptes utilisateurs dans Active Directory en réponse au turnover important de personnel",
      "Maintenir la disponibilité des équipements informatiques liés à la production (pupitres, interfaces, PC industriels)",
      "Intervenir rapidement en cas d'incident pour ne pas perturber la chaîne de production",
      "Réaliser un audit complet des postes en atelier pour identifier les risques, incohérences et points critiques",
      "Collaborer efficacement avec les opérateurs et techniciens de ligne pour adapter les configurations aux besoins réels",
      "Débloquer et maintenir en condition opérationnelle des lignes pilotées par des systèmes complexes (IMA, IFIX, Siemens...)"
    ],
    realization: "J'ai assuré la création, modification et suppression des comptes dans l'Active Directory pour suivre l'évolution fréquente du personnel. En parallèle, j'ai veillé au bon fonctionnement des postes informatiques intégrés à la production, souvent en interaction directe avec les automates industriels. En totale autonomie, j'ai organisé mes interventions selon les priorités métiers, tout en maintenant un environnement stable malgré le manque de documentation initiale. Cette mission m'a appris à jongler entre réactivité, rigueur et autonomie dans un cadre à forte contrainte opérationnelle.",
    skills: ["autonomie", "esprit-analyse", "resolution-problemes", "adaptabilite", "organisation-personnelle", "redaction", "systemes-windows-ad", "securite-informatique", "support-technique"]
  },
  {
    id: "projet-5-magellan-sagt",
    title: "MAGELLAN – SAGT",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Standardisation et optimisation des règles d'automatisation dans le système d'aide à la gestion du trafic d'APRR.",
    context: "Dans le cadre du programme MAGELLAN mené par APRR, j'ai participé à l'amélioration du module SAGT (Système d'Aide à la Gestion du Trafic), un outil essentiel qui automatise les actions à engager lors d'événements majeurs sur le réseau autoroutier, comme les accidents, les bouchons ou les intempéries. Le cœur du système repose sur un ensemble de règles qui déclenchent des scénarios en temps réel (signalisation dynamique, alertes, consignes). Cependant, ces règles étaient nombreuses, peu harmonisées, et difficiles à maintenir. J'ai donc été mobilisé pour analyser leur structure, repérer les incohérences et proposer une nomenclature claire et standardisée, afin de faciliter la création, la lisibilité et la gestion quotidienne de ces automatismes par les équipes opérationnelles.",
    objectives: [
      "Reprendre l'ensemble des règles du module SAGT pour en améliorer la lisibilité et la cohérence",
      "Définir une nomenclature standardisée permettant de structurer les noms, catégories et formats des règles d'automatisation",
      "Faciliter la création de nouvelles règles par les utilisateurs internes, en réduisant les erreurs et le temps de paramétrage",
      "Renforcer la fiabilité fonctionnelle du système en garantissant une uniformité dans les déclencheurs et scénarios gérés par le logiciel"
    ],
    realization: "En analysant les règles existantes dans le logiciel, j'ai constaté un écart important dans les formats de nommage et dans la structuration des entrées. J'ai alors pris l'initiative de concevoir un tableau de nomenclature normalisée, regroupant toutes les valeurs possibles et les bonnes pratiques à respecter pour créer de nouvelles règles. Ce document partagé a permis aux équipes de gagner en temps et en clarté lors de la configuration des automatismes. Cette action a renforcé la fiabilité fonctionnelle du système SAGT, tout en apportant un support concret aux utilisateurs du logiciel.",
    skills: ["conduite-projet-logiciel", "initiative", "esprit-analyse", "rigueur", "communication-relationnel", "organisation-personnelle", "autonomie"]
  },
  {
    id: "projet-6-magellan-meteor",
    title: "MAGELLAN – METEOR",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Paramétrage d'un système de visualisation en temps réel pour la météo et le trafic autoroutier.",
    context: "Dans le cadre du programme MAGELLAN porté par APRR, l'outil METEOR a été mis en place pour permettre aux opérateurs autoroutiers de visualiser en temps réel les conditions météo et de trafic sur l'ensemble du réseau. Cet outil stratégique devait centraliser les informations issues de capteurs (stations météo, capteurs de comptage, etc.) pour faciliter la prise de décision en salle de contrôle. Intégré à l'équipe administratrice fonctionnelle, j'ai participé activement au paramétrage des \"contextes\" de surveillance, qui définissent les équipements et zones visibles par chaque poste de commandement. Mon rôle a été de structurer et adapter l'affichage en fonction des besoins spécifiques des différentes régions, en veillant à ce que chaque utilisateur dispose d'une interface claire, pertinente et cohérente avec son périmètre géographique.",
    objectives: [
      "Structurer les contextes de surveillance dans METEOR selon les zones géographiques et les priorités régionales",
      "Assurer une visualisation claire et pertinente des équipements météo/trafic (stations, capteurs, etc.) pour chaque salle de contrôle",
      "Renforcer la fiabilité de la prise de décision grâce à un affichage métier cohérent",
      "Améliorer l'ergonomie de la plateforme pour simplifier l'usage au quotidien par les opérateurs",
      "Assurer la liaison fonctionnelle entre les besoins terrains et les configurations techniques"
    ],
    realization: "En lien avec les référents régionaux, j'ai créé des \"contextes\" personnalisés pour chaque poste de commandement, intégrant les équipements de mesure (stations météo, stations de comptage, etc.) correspondant aux zones surveillées. J'ai adapté la configuration de METEOR pour que chaque PC bénéficie d'une visualisation claire et pertinente des données trafic/météo. Mon intervention a permis une meilleure exploitation fonctionnelle du système et a contribué à une prise de décision plus rapide par les opérateurs.",
    skills: ["conduite-projet-logiciel", "esprit-analyse", "communication-relationnel", "management-projet", "autonomie"]
  }
];

export const getSkillName = (skillId: string) => {
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
    "autonomie": "Autonomie",
    "adaptabilite": "Adaptabilité",
    "resolution-problemes": "Résolution de problèmes",
    "capacite-apprentissage": "Capacité d'apprentissage",
    "gestion-projet": "Gestion de projet",
    "communication-interservices": "Communication interservices",
    "redaction": "Rédaction",
    "support-technique": "Support technique",
    "securite-informatique": "Sécurité informatique",
    "systemes-windows-ad": "Systèmes Windows / Active Directory",
    "ergonomie-ihm": "Ergonomie et interfaces homme-machine",
    "conception-reseau": "Conception réseau"
  };
  
  return skillNames[skillId] || skillId;
};
