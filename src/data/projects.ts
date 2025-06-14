import { SkillCategory } from "@/types";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  skills: SkillCategory[];
  company: string;
  year: string;
  context: {
    title: string;
    content: string;
  };
  objectives: string[];
  achievements: { title: string; description: string }[];
  skills_detail: {
    transverse: { name: string; description: string }[];
    general: { name: string; description: string }[];
    technical: { category: string; skills: string[] }[];
  };
  tools: { name: string; description: string }[];
  conclusion: string;
};

export const getSkillName = (skill: SkillCategory): string => {
  switch (skill) {
    case SkillCategory.DEVELOPPEMENT:
      return "Développement";
    case SkillCategory.GESTION_DE_PROJET:
      return "Gestion de projet";
    case SkillCategory.DESIGN:
      return "Design";
    case SkillCategory.ANALYSE:
      return "Analyse";
    case SkillCategory.COMMUNICATION:
      return "Communication";
    case SkillCategory.ORGANISATION:
      return "Organisation";
    case SkillCategory.RIGUEUR:
      return "Rigueur";
    default:
      return "Inconnu";
  }
};

export const projects: Project[] = [
  {
    id: "portfolio-redesign",
    title: "Refonte Portfolio",
    description: "Refonte complète de mon site web portfolio pour présenter mes compétences et projets de manière plus moderne et efficace.",
    technologies: ["React", "Tailwind CSS", "Radix UI", "Vercel"],
    skills: [SkillCategory.DEVELOPPEMENT, SkillCategory.DESIGN, SkillCategory.GESTION_DE_PROJET],
    company: "Personnel",
    year: "2024",
    context: {
      title: "Contexte du projet",
      content: "Ayant besoin d'un site web pour présenter mes compétences et mes projets, j'ai décidé de refondre mon portfolio en utilisant les dernières technologies web. L'objectif était de créer un site web moderne, responsive et facile à maintenir."
    },
    objectives: [
      "Concevoir une interface utilisateur attrayante et intuitive.",
      "Mettre en place une architecture de code propre et maintenable.",
      "Optimiser le site web pour une performance maximale.",
      "Déployer le site web sur une plateforme fiable et scalable."
    ],
    achievements: [
      {
        title: "Conception d'une interface utilisateur moderne",
        description: "J'ai conçu une interface utilisateur moderne et intuitive en utilisant les principes du design thinking. J'ai également veillé à ce que le site web soit responsive et accessible sur tous les appareils."
      },
      {
        title: "Mise en place d'une architecture de code propre",
        description: "J'ai mis en place une architecture de code propre et maintenable en utilisant les dernières technologies web. J'ai également veillé à ce que le code soit bien documenté et facile à comprendre."
      },
      {
        title: "Optimisation du site web pour une performance maximale",
        description: "J'ai optimisé le site web pour une performance maximale en utilisant les techniques d'optimisation web les plus récentes. J'ai également veillé à ce que le site web soit rapide et réactif."
      }
    ],
    skills_detail: {
      transverse: [
        {
          name: "Gestion de projet",
          description: "J'ai géré le projet de A à Z, de la conception à la mise en production. J'ai également veillé à ce que le projet soit livré dans les délais et le budget impartis."
        },
        {
          name: "Communication",
          description: "J'ai communiqué avec les différentes parties prenantes du projet pour m'assurer que leurs besoins étaient pris en compte. J'ai également veillé à ce que le projet soit bien documenté et facile à comprendre."
        },
        {
          name: "Organisation",
          description: "J'ai organisé le projet de manière à ce qu'il soit facile à suivre et à gérer. J'ai également veillé à ce que le projet soit bien documenté et facile à comprendre."
        }
      ],
      general: [
        {
          name: "Design",
          description: "J'ai conçu l'interface utilisateur du site web en utilisant les principes du design thinking. J'ai également veillé à ce que le site web soit responsive et accessible sur tous les appareils."
        },
        {
          name: "Développement",
          description: "J'ai développé le site web en utilisant les dernières technologies web. J'ai également veillé à ce que le code soit bien documenté et facile à comprendre."
        }
      ],
      technical: [
        {
          category: "Frontend",
          skills: [
            "React",
            "Tailwind CSS",
            "Radix UI"
          ]
        },
        {
          category: "Backend",
          skills: [
            "Node.js",
            "Express",
            "MongoDB"
          ]
        }
      ]
    },
    tools: [
      {
        name: "VS Code",
        description: "Editeur de code"
      },
      {
        name: "Figma",
        description: "Outil de design"
      },
      {
        name: "Vercel",
        description: "Plateforme de déploiement"
      }
    ],
    conclusion: "Ce projet m'a permis de mettre en pratique mes compétences en développement web et en design. J'ai également appris à gérer un projet de A à Z et à communiquer avec les différentes parties prenantes du projet."
  },
  {
    id: "magellan-sagt",
    title: "MAGELLAN - SAGT",
    description: "Amélioration du module SAGT (Système d'Aide à la Gestion du Trafic) pour automatiser les actions lors d'événements majeurs sur le réseau autoroutier.",
    technologies: ["MAGELLAN", "Excel", "Documentation"],
    skills: [SkillCategory.ANALYSE, SkillCategory.RIGUEUR, SkillCategory.ORGANISATION],
    company: "APRR",
    year: "2024",
    context: {
      title: "Contexte du projet",
      content: "Dans le cadre du programme MAGELLAN mené par APRR, j'ai participé à l'amélioration du module SAGT (Système d'Aide à la Gestion du Trafic), un outil essentiel qui automatise les actions à engager lors d'événements majeurs sur le réseau autoroutier, comme les accidents, les bouchons ou les intempéries. Le cœur du système repose sur un ensemble de règles qui déclenchent des scénarios en temps réel (signalisation dynamique, alertes, consignes). Cependant, ces règles étaient nombreuses, peu harmonisées, et difficiles à maintenir. J'ai donc été mobilisé pour analyser leur structure, repérer les incohérences et proposer une nomenclature claire et standardisée, afin de faciliter la création, la lisibilité et la gestion quotidienne de ces automatismes par les équipes opérationnelles."
    },
    objectives: [
      "Reprendre l'ensemble des règles du module SAGT pour en améliorer la lisibilité et la cohérence.",
      "Définir une nomenclature standardisée permettant de structurer les noms, catégories et formats des règles d'automatisation.",
      "Faciliter la création de nouvelles règles par les utilisateurs internes, en réduisant les erreurs et le temps de paramétrage.",
      "Renforcer la fiabilité fonctionnelle du système en garantissant une uniformité dans les déclencheurs et scénarios gérés par le logiciel."
    ],
    achievements: [
      {
        title: "Analyse des règles existantes",
        description: "J'ai commencé par un audit complet des règles déjà en place dans le module SAGT. Ce travail m'a permis d'identifier un manque d'uniformité dans les noms, les formats et les structures logiques employées."
      },
      {
        title: "Construction d'une nomenclature normalisée",
        description: "J'ai conçu un tableau de nomenclature regroupant toutes les catégories de règles, leurs usages types, les bonnes pratiques de rédaction, ainsi que des modèles de nommage. Cet outil est devenu une référence pour les équipes."
      },
      {
        title: "Mise en place d'un support documentaire",
        description: "J'ai intégré cette nomenclature à une documentation claire et accessible, partagée avec les référents métiers pour garantir une utilisation cohérente et partagée."
      },
      {
        title: "Accompagnement des équipes opérationnelles",
        description: "J'ai expliqué les objectifs de cette démarche aux utilisateurs du SAGT, en illustrant les bénéfices concrets pour leur quotidien (gain de temps, moins d'erreurs, plus de clarté)."
      },
      {
        title: "Amélioration continue",
        description: "Un système de retour d'expérience a été mis en place afin d'adapter la nomenclature si besoin, en fonction des retours du terrain et de l'évolution des besoins."
      }
    ],
    skills_detail: {
      transverse: [
        {
          name: "Organisation personnelle",
          description: "J'ai planifié mes phases d'analyse, d'uniformisation et de documentation de façon autonome et structurée, avec des points de contrôle à chaque étape."
        },
        {
          name: "Esprit d'analyse",
          description: "Cette compétence m'a permis de décrypter un environnement complexe de règles automatisées, de repérer les incohérences, et de proposer une structuration efficace et durable."
        },
        {
          name: "Adaptabilité",
          description: "Le projet impliquait des règles très différentes d'une région à l'autre, et des pratiques métiers hétérogènes. J'ai su m'adapter rapidement aux cas spécifiques tout en proposant une solution centralisée et homogène."
        },
        {
          name: "Capacité d'apprentissage",
          description: "J'ai dû comprendre le fonctionnement d'un système métier que je ne connaissais pas. Par l'observation, les échanges avec les utilisateurs et l'analyse des données, j'ai assimilé rapidement son architecture et ses logiques internes."
        },
        {
          name: "Rigueur",
          description: "Chaque règle impactait directement le comportement du système d'information en temps réel. J'ai donc appliqué une vérification systématique, ligne par ligne, pour éviter toute erreur fonctionnelle ou incohérence dans le paramétrage."
        }
      ],
      general: [
        {
          name: "Communication interservices",
          description: "J'ai interagi avec plusieurs pôles métiers pour comprendre leurs attentes, recueillir les besoins et présenter les outils mis en place de façon pédagogique."
        },
        {
          name: "Gestion de projet",
          description: "J'ai géré le projet de manière autonome, depuis la compréhension des logiques applicatives jusqu'à la restitution des règles aux utilisateurs. J'ai organisé le travail par phases et garanti une cohérence globale entre les objectifs fixés et les livrables produits."
        }
      ],
      technical: [
        {
          category: "Rédaction",
          skills: [
            "J'ai produit une documentation structurée, permettant aux équipes de créer, modifier ou analyser les règles métiers en toute autonomie. Cette nomenclature facilite également la formation et la montée en compétence des nouveaux arrivants."
          ]
        },
        {
          category: "Conduite de projet logiciel",
          skills: [
            "Cette compétence a été essentielle pour structurer une démarche complète : analyse de l'existant, élaboration d'une nomenclature, validation fonctionnelle et documentation. Elle m'a permis d'aligner les règles d'automatisation aux besoins métier, tout en gardant une logique de projet structurée et évolutive."
          ]
        }
      ]
    },
    tools: [
      {
        name: "MAGELLAN – Module SAGT",
        description: "logiciel métier pour la gestion automatisée des événements trafic."
      },
      {
        name: "Tableaux Excel",
        description: "pour la structuration de la nomenclature."
      },
      {
        name: "Outils internes APRR",
        description: "pour le partage documentaire et les échanges métiers (intranet, partages réseau)."
      }
    ],
    conclusion: "Ce projet m'a permis de me positionner comme un acteur force de proposition dans l'amélioration d'un outil stratégique pour la régulation du trafic autoroutier. En combinant structuration, écoute métier et documentation rigoureuse, j'ai contribué à simplifier un système complexe et à renforcer la qualité des services opérationnels. Cette expérience a enrichi ma vision fonctionnelle des outils, tout en renforçant mes compétences en coordination, en formalisation de bonnes pratiques et en accompagnement au changement."
  }
];
