
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
  UserCog,
  Settings,
  Search,
  Cog,
  Network,
  Monitor
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
      id: "adaptabilite",
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Adaptabilité",
      type: "comportementale",
      definition: "Capacité à ajuster rapidement ses méthodes de travail, ses priorités ou ses outils face à des environnements changeants, des contraintes imprévues ou des technologies nouvelles.",
      application: "Mon adaptabilité m'a servi à plusieurs reprises lors de mes projets professionnels. Pour les missions d'informatique industrielle, j'ai dû m'adapter à une technologie en constante évolution. J'ai dû prendre en main un système informatique industriel hétérogène, souvent peu documenté, et assurer seul la gestion du parc de production. Lors de la migration vers Office 365, j'ai dû adapter mes méthodes de communication et d'assistance en fonction du niveau de maîtrise des utilisateurs. Certains découvraient entièrement des outils comme OneDrive, ce qui m'a obligé à ajuster mon discours, mes supports, et ma posture selon les profils. Enfin, dans les projets MAGELLAN – SAGT et MAGELLAN – METEOR, les outils étaient en constante évolution et les besoins métier variaient selon les régions. J'ai appris à me synchroniser rapidement avec les différents services, à assimiler des contextes techniques nouveaux, et à ajuster mes approches malgré les imprévus et les évolutions.",
      assessment: "L'adaptabilité est pour moi une qualité fondamentale dans un environnement numérique où les outils, les méthodes et les attentes changent constamment. Je la considère comme un levier de performance, car elle permet de rester opérationnel, même dans l'incertitude. J'aborde chaque situation comme une opportunité d'apprentissage, sans crainte du changement, ce qui me permet de m'adapter durablement plutôt que ponctuellement. J'ai aussi observé que cette posture apporte de la stabilité dans les équipes. En adoptant une attitude calme et ouverte face à l'inconnu, j'ai souvent permis de désamorcer des tensions ou de faciliter la transition lors de projets sensibles.",
      relatedProjects: ["projet-4-informatique-industrielle", "projet-2-migration-office", "projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "autonomie",
      icon: <UserCog className="h-5 w-5" />,
      title: "Autonomie",
      type: "comportementale",
      definition: "Capacité à accomplir des missions de manière indépendante, à prendre des décisions claire et précise sans supervision hiérarchique, et à organiser efficacement son travail.",
      application: "J'ai été en total autonomie dans plusieurs projets où j'étais seul responsable du suivi, et parfois même de la continuité d'activité en environnement sensible. Dans un projet de gestion informatique industrielle, j'ai repris un poste technique, avec des responsabilités critiques liées aux lignes de production. J'ai assuré le support technique, la gestion des comptes utilisateurs, et l'intervention sur des équipements spécifiques comme les pupitres Siemens ou les systèmes IMA et Glatt, tout en garantissant la continuité des opérations. Pour la mission Audit de sécurité, j'ai déployé le chiffrement des postes utilisateurs via BitLocker, en configurant les stratégies de groupe (GPO), et en définissant les paramètres de sécurité adaptés. J'ai également sécurisé physiquement les postes en configurant un mot de passe administrateur BIOS, poste par poste en m'adaptant selon la disponibilité des collaborateurs. Lors de la standardisation du parc d'impression, j'ai mené l'ensemble des actions, de l'analyse initiale jusqu'au déploiement : recensement du matériel, analyse comparative des fournisseurs, configuration des outils de supervision centralisée avec le prestataire de la marque et la mise en place de commandes automatiques de consommables, et documentation des équipements. Dans le cadre de la migration Office 365, j'ai piloté la transition des utilisateurs sans supervision directe. J'ai identifié les blocages potentiels, planifié les déploiements, résolu les conflits logiciels et adapté mon accompagnement selon les niveaux des utilisateurs. Enfin, pour le projet MAGELLAN – METEOR, j'ai travaillé en autonomie sur les configurations des différentes régions pour un outil métier stratégique et l'adaptant selon les climats. J'ai coordonné les retours des utilisateurs terrain, ajusté les affichages en fonction des spécificités locales, et assuré un lien fluide entre les attentes fonctionnelles et les capacités techniques de l'outil. J'ai su avancer seul tout en assurant la fluidité du projet. Cette autonomie a été un facteur important pour gérer les responsabilités majeures de façon autonome.",
      assessment: "Pour moi, être autonome signifie savoir avancer seul sans se replier sur soi-même. C'est prendre des initiatives, se documenter intelligemment, et gérer ses responsabilités avec méthode et fiabilité. J'ai appris à analyser rapidement les situations, à faire les bons choix techniques, et à rester opérationnel même dans tous types de contextes. Mais je sais aussi identifier les limites de mon périmètre et solliciter les bons interlocuteurs au bon moment, pour rester efficace dans un travail d'équipe.",
      relatedProjects: ["projet-4-informatique-industrielle", "projet-3-audit-securite", "projet-1-standardisation-parc", "projet-2-migration-office", "projet-6-magellan-meteor"]
    },
    {
      id: "esprit-analyse",
      icon: <Search className="h-5 w-5" />,
      title: "Esprit d'analyse",
      type: "comportementale",
      definition: "Capacité à comprendre une situation complexe, à identifier ses causes, à extraire les éléments clés et à proposer une solution cohérente et structurée.",
      application: "J'ai mobilisé cette compétence dans de nombreux projets où il fallait aller au-delà des symptômes pour comprendre les véritables causes d'un problème technique ou organisationnel. Dans un projet de sécurisation du parc informatique, l'audit avait révélé plusieurs failles de sécurité. J'ai d'abord étudié les recommandations dans le détail, puis j'ai analysé les risques réels pour prioriser les mesures à appliquer (chiffrement, BIOS, GPO). Cette capacité à traduire des constats techniques en actions concrètes a été essentielle pour mener le projet à bien sans perturber les utilisateurs. Lors de la restructuration du module SAGT, j'ai dû analyser des règles d'automatisation très hétérogènes et peu lisibles. J'ai comparé les logiques existantes, repéré les incohérences et conçu une nomenclature claire et fonctionnelle, ce qui a permis aux équipes d'accélérer et fiabiliser leurs paramétrages. Pour la standardisation des imprimantes, j'ai effectué un état des lieux critique : j'ai identifié les modèles en circulation, évalué leurs limites (consommables, énergies, maintenance), et synthétisé les besoins réels pour recommander une solution plus durable et structurée. Dans le cadre du projet informatique industrielle, j'ai dû analyser en profondeur les dysfonctionnements liés à une ligne de production à l'arrêt. J'ai croisé les informations issues des pupitres Siemens, du système IFIX et des retours terrain pour identifier le point de blocage et rétablir la chaîne rapidement. Lors de la migration Office 365, j'ai rencontré plusieurs cas d'erreurs techniques sur les postes utilisateurs. J'ai identifié les sources récurrentes de ces problèmes (profils corrompus, clés de registre résiduelles), ce qui m'a permis de mettre en place une procédure corrective adaptée et durable. Pour METEOR, j'ai analysé les retours d'expérience terrain des utilisateurs régionaux pour adapter l'interface de visualisation météo/trafic. J'ai su extraire les besoins concrets derrière des retours parfois vagues, et proposer des ajustements fonctionnels ciblés et pertinents.",
      assessment: "L'esprit d'analyse, c'est savoir faire le tri entre les détails inutiles et les vrais éléments clés. Dans les environnements techniques, cette compétence m'a permis de gagner du temps, de faire des choix pertinents et d'éviter les erreurs coûteuses. Je considère qu'il ne suffit pas de suivre une procédure : il faut comprendre pourquoi elle existe, et être capable de l'adapter si le contexte l'exige. Cette approche m'a permis d'être plus réactif dans mon quotidien, mais surtout plus juste dans mes décisions.",
      relatedProjects: ["projet-3-audit-securite", "projet-5-magellan-sagt", "projet-1-standardisation-parc", "projet-4-informatique-industrielle", "projet-2-migration-office", "projet-6-magellan-meteor"]
    },
    {
      id: "resolution-problemes",
      icon: <Cog className="h-5 w-5" />,
      title: "Résolution de problèmes",
      type: "comportementale",
      definition: "Capacité à identifier rapidement une anomalie ou un dysfonctionnement, à en comprendre l'origine, puis à mettre en œuvre une solution efficace et durable, avec ou sans aide extérieure.",
      application: "Cette compétence m'a été essentielle dans plusieurs situations où il fallait intervenir sans script prédéfini, parfois dans l'urgence. Lors du déblocage d'une ligne de production, une machine IMA s'est arrêtée de manière inattendue, causant un arrêt immédiat de la production. J'ai dû diagnostiquer en temps réel l'origine du blocage, en analysant les messages d'erreur sur le pupitre Siemens, en croisant les informations dans le système IFIX, et en agissant directement avec un technicien IMA FRANCE pour rétablir la communication entre les équipements. Cette capacité à raisonner sous pression a permis de relancer la ligne rapidement. Dans le projet Migration Office 365, j'ai été confronté à des erreurs inattendues lors du déploiement de la suite sur certains postes (problèmes de licences, conflits de versions). Plutôt que de faire remonter directement l'incident, j'ai identifié des causes communes (anciens profils corrompus, clés de registre résiduelles) et rédigé une procédure de résolution à suivre sur les prochains cas similaires. Enfin, pour l'audit de sécurité, certains postes refusaient l'application automatique des GPO BitLocker. Après plusieurs tests, j'ai découvert que le problème venait d'une version obsolète du firmware TPM. Une fois mis à jour, les stratégies ont pu être appliquées correctement.",
      assessment: "Pour moi, la résolution de problèmes, ce n'est pas seulement réparer : c'est comprendre, apprendre, et éviter que ça ne se reproduise. Ce sont souvent ces situations imprévues qui me poussent à approfondir mes connaissances et à développer des réflexes techniques solides. J'ai aussi appris qu'un bon diagnostic repose autant sur l'observation que sur l'écoute des utilisateurs. Ce sont souvent leurs retours qui aident à poser les bonnes hypothèses.",
      relatedProjects: ["projet-4-informatique-industrielle", "projet-3-audit-securite", "projet-2-migration-office"]
    },
    {
      id: "capacite-apprentissage",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Capacité d'apprentissage",
      type: "comportementale",
      definition: "Faculté à assimiler rapidement de nouvelles connaissances ou technologies, à comprendre des systèmes inconnus et à les appliquer efficacement dans un contexte professionnel.",
      application: "Cette compétence a été un véritable moteur dans ma progression tout au long de mes projets. Lors de la prise en charge du projet SAGT – MAGELLAN, je me suis retrouvé face à un système métier complexe que je ne connaissais pas. Il m'a fallu comprendre rapidement la logique du logiciel, les interdépendances entre les règles, et le langage métier utilisé par APRR. Grâce à une phase d'observation active et à des échanges avec les postes de commandement et les personnes de mon équipe, j'ai pu adapter les règles existantes et structurer des règles plus cohérentes, répondant mieux aux besoins des opérateurs. Dans le projet Audit de sécurité, je n'avais jamais utilisé BitLocker via GPO auparavant. J'ai dû me documenter, tester différentes configurations, comprendre les implications de la gestion TPM, et m'assurer que les politiques s'appliquaient correctement sur tous les postes. Ce travail autonome m'a permis de déployer une solution conforme en quelques jours, en maîtrisant un nouvel outil de sécurité. Enfin, sur la mission bureautique avec Office 365, j'ai dû comprendre rapidement les licences, les modules déployables et former les utilisateurs. J'ai pris le temps d'explorer l'écosystème O365 pour mieux accompagner la migration.",
      assessment: "J'ai toujours été curieux d'apprendre. Quand une technologie m'est inconnue, je la vois comme une opportunité d'enrichir ma boîte à outils. Je n'ai pas peur d'explorer, de faire des erreurs pour mieux comprendre. Cette capacité à apprendre rapidement m'a permis de m'adapter dans des contextes nouveaux, sans blocage. Elle me donne aussi la confiance nécessaire pour prendre en main des sujets techniques que je ne maîtrise pas encore totalement au départ, et progresser vite.",
      relatedProjects: ["projet-5-magellan-sagt", "projet-3-audit-securite", "projet-2-migration-office"]
    },
    {
      id: "rigueur",
      icon: <Target className="h-5 w-5" />,
      title: "Rigueur",
      type: "comportementale",
      definition: "Capacité à exécuter les tâches de manière précise, méthodique et fiable, en respectant les procédures, les standards de qualité et les exigences de sécurité.",
      application: "Ma rigueur a été essentielle dans plusieurs projets où la moindre erreur pouvait avoir des conséquences techniques, fonctionnelles, voire réglementaires. Dans le cadre de l'Audit de sécurité, j'ai mené une mise en conformité des postes utilisateurs avec des politiques GPO pour BitLocker et le BIOS. J'ai dû appliquer une configuration identique sur l'ensemble des postes, tout en vérifiant le bon déploiement et en contrôlant les clés de récupération. La rigueur était primordiale pour éviter tout blocage utilisateur ou perte de données. Lors de la migration Office 365, j'ai assuré l'uniformité des installations sur tous les postes, en respectant la procédure de désinstallation de l'ancienne suite, d'installation de la nouvelle, et de configuration des comptes. Chaque détail comptait pour garantir une transition fluide sans interrompre l'activité des utilisateurs. Enfin, sur le projet MAGELLAN – SAGT, j'ai travaillé sur des règles métiers sensibles. La moindre erreur de logique ou d'enchaînement aurait pu entraîner de mauvaises actions sur le réseau autoroutier (mauvais affichage, alerte incorrecte). J'ai donc vérifié chaque paramètre, chaque nom de variable, et chaque scénario.",
      assessment: "Pour moi, la rigueur n'est pas une contrainte, mais une condition naturelle du travail bien fait. Elle me permet d'anticiper les problèmes, d'éviter les retours en arrière, et de gagner la confiance de mes collègues. Elle s'exprime dans le respect des procédures, mais aussi dans l'attention portée aux détails, dans la qualité de la documentation. Cette approche m'a permis de livrer des projets propres, durables et alignés avec les attentes.",
      relatedProjects: ["projet-3-audit-securite", "projet-2-migration-office", "projet-5-magellan-sagt"]
    },
    {
      id: "organisation-personnelle",
      icon: <Clock className="h-5 w-5" />,
      title: "Organisation personnelle",
      type: "comportementale",
      definition: "Capacité à planifier, hiérarchiser et exécuter efficacement ses tâches en tenant compte des priorités, des délais et des contraintes de contexte.",
      application: "Mon organisation personnelle m'a été indispensable tout au long de mes missions, notamment dans des environnements à forte contrainte opérationnelle. Dans le projet de standardisation du parc d'impression, j'ai dû coordonner l'état des lieux, la consultation des prestataires, le choix du matériel, et la phase de déploiement — tout en maintenant mes autres activités quotidiennes. J'ai structuré mon travail avec un calendrier clair et un tableau de suivi pour ne rien laisser au hasard. Sur le projet de migration Office 365, j'ai organisé le déploiement par vague, en commençant par les services les plus exposés aux problèmes de compatibilité. J'ai établi un planning par utilisateur, anticipé les points de blocage, et intégré des temps de support pour accompagner les équipes. Enfin, dans mon intervention en informatique industrielle, la gestion du parc en autonomie m'a demandé une organisation rigoureuse. J'ai dû jongler entre la maintenance, les incidents de production, les créations de comptes dans l'Active Directory et les urgences terrain, tout en respectant les délais et sans supervision directe en combinant mes autres activités. Pour MAGELLAN – SAGT, j'ai structuré mes phases d'analyse, de modélisation des règles et de restitution fonctionnelle en tenant compte des contraintes des différents pôles utilisateurs, avec une organisation indépendante et rigoureuse.",
      assessment: "L'organisation personnelle me permet de travailler efficacement, même dans les périodes de forte charge. Elle me donne une vision claire de mes priorités et m'aide à rester réactif sans jamais perdre en qualité. Je suis à l'aise avec les outils de planification (tableaux Excel, agendas partagés, checklists ou Gantt project) et j'ai développé des réflexes pour anticiper les imprévus. Cette autonomie organisationnelle me permet de livrer mes projets dans les temps, tout en gardant de la disponibilité pour les aléas du quotidien.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-4-informatique-industrielle", "projet-5-magellan-sagt"]
    },
    {
      id: "gestion-projet",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      title: "Gestion de projet",
      type: "generale",
      definition: "Capacité à structurer, planifier, piloter et finaliser un projet en respectant les objectifs, les délais, les ressources et les contraintes.",
      application: "Cette compétence a été activement mobilisée à travers plusieurs projets techniques menés en autonomie ou en coordination avec des collaborateurs. Dans le projet de standardisation du parc d'impression, j'ai mené l'ensemble du cycle projet : diagnostic initial, élaboration des critères de choix, consultation des fournisseurs, prise de décision, déploiement du matériel, configuration du portail de supervision avec le prestataire, puis documentation et suivi. Chaque étape a été structurée à l'aide de tableaux de bord et points de validation avec les équipes. Pour Office 365, j'ai organisé la transition des utilisateurs en phases, priorisé les services les plus impactés, et anticipé les contraintes. J'ai veillé à intégrer une part importante d'accompagnement utilisateurs dans le calendrier, en pilotant à la fois les aspects techniques et humains du changement. Sur SAGT, j'ai structuré une méthodologie claire pour l'analyse des règles existantes, la création de standards, la diffusion des bonnes pratiques. Cette approche projet a permis d'atteindre les objectifs sans perturber le fonctionnement de l'outil métier.",
      assessment: "Pour moi, la gestion de projet n'est pas seulement une méthode : c'est une posture. Elle permet de garder une vision d'ensemble tout en gérant les détails opérationnels du quotidien. J'ai appris à anticiper, à structurer mes tâches en étapes claires, à gérer les imprévus sans perdre de vue l'objectif final. J'accorde une attention particulière à la communication tout au long du projet, que ce soit avec les utilisateurs, les responsables ou les prestataires. J'utilise des supports visuels simples pour partager l'avancement et favoriser la transparence.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-2-migration-office", "projet-5-magellan-sagt"]
    },
    {
      id: "communication-interservices",
      icon: <Users className="h-5 w-5" />,
      title: "Communication interservices",
      type: "generale",
      definition: "Capacité à collaborer efficacement avec différents services, en assurant une circulation fluide et compréhensible de l'information entre les parties prenantes techniques et fonctionnelles.",
      application: "Cette compétence m'a été essentielle dans les contextes METEOR, notamment lorsque j'ai dû faire le lien entre les équipes techniques, les utilisateurs finaux. J'ai mené des échanges réguliers avec les postes de commandement de chaque région utilisateurs principaux de ce logiciel pour comprendre leurs besoins, leurs habitudes et contraintes. Ayant cette casquette de maître d'ouvrage, j'ai ensuite traduit ces éléments en exigences techniques pour les services, et j'ai assuré un suivi transparent tout au long du déploiement. J'ai été le point de contact entre les différentes équipes technique, (developpeurs applicatif, les chefs de pôle et les utilisateurs). J'ai recueilli les retours des utilisateurs, je me suis adapté selon leurs besoins, et relayé les décisions techniques en langage clair et à leurs attentes spécifiques. Mon rôle a été d'assurer la cohérence entre les besoins métiers et la configuration technique. Dans le module SAGT, j'ai assuré la liaison entre les pôles métiers et les référents techniques pour structurer les règles d'automatisation. Il a fallu traduire des problématiques métier très concrètes en logiques paramétrables. Cela impliquait des échanges fréquents, une reformulation continue et une présentation claire des modifications prévues afin que toutes les parties puissent valider les évolutions.",
      assessment: "Une communication efficace entre services est essentielle pour la réussite d'un projet. J'ai appris à écouter activement, à reformuler les demandes, à adapter mon discours selon l'interlocuteur et à documenter clairement les échanges. Cela permet d'éviter les malentendus, de gagner du temps et de construire une relation de confiance. J'accorde une importance particulière à la pédagogie, surtout quand il s'agit de faire comprendre des décisions techniques à des profils non-spécialistes.",
      relatedProjects: ["projet-6-magellan-meteor", "projet-5-magellan-sagt"]
    },
    {
      id: "redaction",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      title: "Rédaction",
      type: "generale",
      definition: "Capacité à produire des contenus écrits clairs, structurés et adaptés à leur destinataire, qu'il s'agisse de documentations techniques, de rapports de projet, d'instructions internes ou de supports de communication.",
      application: "Ma rédaction a été essentielle dans la majorité de mes projets, où la clarté de l'écrit était aussi importante que la qualité technique du travail réalisé. Dans le cadre du projet Standardisation du parc d'impression, j'ai rédigé un tableau de suivi complet regroupant les garanties, les emplacements, les modèles et les références de toners. Ce document a été conçu pour permettre une gestion simplifiée et durable du parc IT. Pendant l'Audit de sécurité, j'ai produit une documentation sur les étapes de chiffrement BitLocker, les recommandations d'utilisation des postes, ainsi qu'une fiche de procédure pour le verrouillage du BIOS. Ces documents ont servi de base de référence pour les futures interventions. Sur le projet MAGELLAN – SAGT, j'ai travaillé sur la nomenclature des règles. Pour cela, j'ai mis à plat l'ensemble des cas existants, structuré une documentation claire permettant à toute l'équipe de créer de nouvelles règles plus rapidement, et homogénéisé les noms de manière logique. Dans le projet Migration Office 365, j'ai rédigé des consignes claires et personnalisées à destination des utilisateurs pour faciliter la transition vers les nouveaux outils, tout en anticipant les difficultés selon les profils. Dans le contexte de l'informatique industrielle, j'ai produit un tableau de suivi du parc industriel (poste, usage, criticité, utilisateur) afin de structurer les futures interventions et assurer la traçabilité des équipements sensibles. Sur le projet MAGELLAN – METEOR, j'ai formalisé les retours utilisateurs en documentation claire, permettant d'harmoniser les configurations régionales et faciliter les futurs échanges entre services techniques et métiers.",
      assessment: "Rédiger ne se résume pas à écrire des phrases : c'est organiser l'information de façon à la rendre immédiatement compréhensible et réutilisable. Pour moi, une bonne documentation est celle qui évite qu'on repose deux fois la même question. J'ai toujours veillé à anticiper les besoins du lecteur, qu'il soit technicien, utilisateur ou décideur. Je vois la rédaction comme une compétence transversale qui renforce la qualité de tout projet, car elle garantit la continuité, le partage de connaissances, et la traçabilité du travail accompli.",
      relatedProjects: ["projet-1-standardisation-parc", "projet-3-audit-securite", "projet-5-magellan-sagt", "projet-4-informatique-industrielle", "projet-2-migration-office", "projet-6-magellan-meteor"]
    },
    {
      id: "support-technique",
      icon: <Computer className="h-5 w-5" />,
      title: "Support technique",
      type: "technique",
      definition: "Capacité à diagnostiquer, résoudre ou escalader les incidents techniques rencontrés par les utilisateurs, tout en assurant un accompagnement pédagogique et une continuité de service optimale.",
      application: "Cette compétence a été mobilisée de manière intensive tout au long de mes missions. Dans le cadre de l'informatique industrielle, j'ai dû intervenir directement sur des environnements critiques (lignes de production, machines automatisées) sans supervision et peu de documentation existante. J'ai pu débloquer une ligne de production (IMA), intervenir sur des systèmes comme IFIX, Siemens, Glatt ou Marchesini, et assurer un suivi constant du bon fonctionnement des postes de supervision. Lors du projet Migration Office 365, j'ai accompagné les utilisateurs tout au long de la bascule vers la nouvelle suite. Cela comprenait l'installation de la suite Microsoft 365, le paramétrage personnalisé, la résolution des problèmes de compatibilité, et la réponse aux demandes utilisateurs liées à la transition. Enfin, dans la standardisation du parc d'impression, j'ai assuré le support aux utilisateurs lors de l'arrivée des nouvelles imprimantes RICOH, en expliquant leur fonctionnement, en répondant aux blocages techniques, et en formant ponctuellement les équipes.",
      assessment: "Le support technique ne se limite pas à résoudre des problèmes : il s'agit aussi de rassurer, de vulgariser l'information technique, et de permettre à chacun d'être autonome avec son environnement numérique. J'ai toujours vu le support comme une interface essentielle entre la technique et l'humain. Être bon en support, c'est savoir écouter, comprendre sans jugement, puis agir rapidement et efficacement, même sous pression. J'ai appris à m'adapter au niveau de chaque interlocuteur, et à faire preuve de pédagogie pour rendre la technologie plus accessible.",
      relatedProjects: ["projet-4-informatique-industrielle", "projet-2-migration-office", "projet-1-standardisation-parc"]
    },
    {
      id: "securite-informatique",
      icon: <Shield className="h-5 w-5" />,
      title: "Sécurité informatique",
      type: "technique",
      definition: "Capacité à mettre en place, appliquer et maintenir des mesures de protection afin de garantir la confidentialité, l'intégrité et la disponibilité des systèmes d'information face aux menaces internes ou externes.",
      application: "Cette compétence a été essentielle dans plusieurs projets orientés sécurité. A la suite d'un audit de sécurité, j'ai analysé l'environnement informatique et identifié plusieurs failles : notamment l'absence de chiffrement des données sur les postes utilisateurs et l'accès libre au BIOS des machines. En réponse, j'ai déployé BitLocker via GPO, en configurant le chiffrement poste par poste et en assurant sa conformité. En complément, j'ai renforcé la sécurité matérielle en définissant des mots de passe administrateur BIOS, afin d'empêcher toute modification non autorisée sur les postes. Dans le cadre de la gestion des comptes Active Directory sur la partie industrielle, j'ai assuré un contrôle rigoureux des droits d'accès, en supprimant les comptes inactifs, en corrigeant les attributions inappropriées et en assurant un suivi continu des utilisateurs. Cela a permis de limiter les risques de compromission liés aux mauvaises pratiques de gestion des identités. Pour la standardisation du parc d'impression, j'ai mis en œuvre l'authentification par badge sur les imprimantes pour sécuriser l'accès aux impressions confidentielles. Cette fonctionnalité, intégrée via la solution Streamline NX, a permis de limiter les impressions non autorisées, d'assurer une meilleure traçabilité des usages, et de renforcer la confidentialité des documents professionnels. Ces actions ont contribué à améliorer la posture de sécurité globale du système d'information, tout en respectant les normes internes de l'entreprise.",
      assessment: "La sécurité informatique ne doit jamais être une option. Elle fait partie intégrante de toute bonne infrastructure et doit être pensée dès le départ d'un projet. J'ai compris à travers mes missions que la sécurité, ce n'est pas seulement installer des outils : c'est aussi sensibiliser, auditer, anticiper les usages et prendre des décisions adaptées au contexte. J'ai appris à équilibrer rigueur et pragmatisme pour mettre en place des solutions solides, mais réalistes à maintenir.",
      relatedProjects: ["projet-3-audit-securite", "projet-4-informatique-industrielle", "projet-1-standardisation-parc"]
    },
    {
      id: "systemes-windows-ad",
      icon: <Computer className="h-5 w-5" />,
      title: "Systèmes Windows / Active Directory",
      type: "technique",
      definition: "Capacité à administrer, configurer et maintenir un environnement informatique basé sur Windows, en particulier via Active Directory (AD), pour gérer les comptes utilisateurs, les stratégies de sécurité (GPO), l'intégration des machines au domaine et le bon fonctionnement global du système d'exploitation dans un cadre professionnel.",
      application: "J'ai pleinement mobilisé cette compétence dans la mise en œuvre de plusieurs missions où j'ai géré des environnements Windows en autonomie. J'ai assuré la création, suppression et modification de comptes utilisateurs au sein d'un environnement soumis à un fort turnover. Cette gestion incluait la mise en place de Group Policy Objects (GPO) pour appliquer des règles de sécurité (verrouillage automatique, restrictions, configuration du BitLocker), mais aussi des paramètres réseau ou bureautiques spécifiques. En parallèle, j'ai mené des actions de maintenance et de dépannage sur les systèmes Windows : résolution d'erreurs de session, réattribution de droits et installation de logiciels. Cette compétence m'a également permis d'intervenir en environnement industriel, où la stabilité des postes connectés aux lignes de production était critique, ce qui impliquait des interventions rapides et fiables sur des postes Windows spécifiques.",
      assessment: "Windows et Active Directory restent des piliers dans la majorité des environnements informatiques professionnels. Être à l'aise avec leur administration, c'est pouvoir gérer efficacement les utilisateurs, sécuriser les postes et garantir un fonctionnement fluide du parc informatique. Ce sont des compétences que j'ai consolidées avec l'expérience, notamment en apprenant à adapter les configurations en fonction des contextes métier (bureautique, production, audit) pour gagner en fiabilité et en temps.",
      relatedProjects: ["projet-4-informatique-industrielle", "projet-3-audit-securite"]
    },
    {
      id: "conduite-projet-logiciel",
      icon: <Computer className="h-5 w-5" />,
      title: "Conduite de projet logiciel",
      type: "technique",
      definition: "Capacité à encadrer et structurer les différentes phases d'un projet logiciel ou applicatif : expression des besoins, planification, mise en œuvre technique, coordination des parties prenantes, suivi d'avancement, validation finale et documentation. Elle implique une compréhension des aspects métiers, techniques et organisationnels.",
      application: "Être acteur majoritaire d'un projet logiciel m'a permis d'être mobilisé dans plusieurs projets où j'ai contribué à la structuration, au suivi et à la réalisation de solutions logicielles ou fonctionnelles. Par exemple, dans le module SAGT, j'ai été chargé de restructurer un système de règles automatisées pour la gestion du trafic autoroutier. J'ai mené une phase d'analyse des besoins métiers, formalisé une nouvelle nomenclature, organisé les flux de création et validé les évolutions du système avec l'équipe administratrice fonctionnelle. Cela m'a permis de piloter le projet comme un véritable chantier logiciel, bien que fonctionnel. De même, lors du projet METEOR, j'ai contribué à la réalisation de visualisations complexes à destination des postes de commandement, en coordonnant les retours des utilisateurs régionaux pour adapter les configurations de la plateforme. Ce projet a exigé une planification rigoureuse et un suivi structuré, afin de répondre aux attentes de chaque région tout en respectant les contraintes techniques de l'outil. Cette compétence m'a permis de développer une approche méthodique dans la gestion des projets digitaux, en alliant rigueur, écoute des utilisateurs, et adaptation des solutions aux réalités opérationnelles.",
      assessment: "La conduite de projet logiciel, même à échelle fonctionnelle, demande une forte capacité d'organisation et de dialogue entre les équipes. Elle oblige à jongler entre technique et besoins métiers, et à faire avancer un projet tout en garantissant sa cohérence et sa pertinence. J'apprécie particulièrement cette dimension car elle m'amène à sortir du simple rôle d'exécutant technique, pour adopter une posture de coordinateur et de facilitateur. Elle développe aussi ma rigueur dans la documentation et le pilotage.",
      relatedProjects: ["projet-5-magellan-sagt", "projet-6-magellan-meteor"]
    },
    {
      id: "ergonomie-ihm",
      icon: <Monitor className="h-5 w-5" />,
      title: "Ergonomie et interfaces homme-machine",
      type: "technique",
      definition: "L'ergonomie des interfaces homme-machine (IHM) désigne la capacité à concevoir des interfaces logicielles intuitives, lisibles, et adaptées aux besoins et comportements des utilisateurs. Elle vise à faciliter la prise en main d'un outil, réduire les erreurs d'usage et optimiser l'expérience globale.",
      application: "Cette compétence a été mise en œuvre lors du projet MAGELLAN – METEOR, un outil de visualisation du trafic et des conditions météorologiques à destination des postes de commandement autoroutiers. J'ai été sollicité pour adapter les interfaces en fonction des retours terrain. Cela a impliqué : une analyse avec les référents régionaux. La restructuration de l'affichage pour hiérarchiser les informations critiques (stations météo, bouchons, incidents) ; l'ajustement des filtres et zones géographiques selon les attentes de chaque postes de commandement et districts. L'objectif était de rendre l'outil plus simple à utiliser au quotidien et plus intuitif, même en situation d'urgence. Cette compétence m'a permis d'intervenir sur la clarté visuelle sans modifier le fonctionnement technique de l'outil, en priorisant les besoins utilisateurs.",
      assessment: "L'ergonomie d'une interface est essentielle pour garantir l'efficacité d'un outil, surtout dans des contextes où les utilisateurs doivent réagir vite et avec précision car il y'a des vies entre leurs mains. Concevoir une IHM n'est pas qu'une affaire de design, c'est avant tout comprendre comment les utilisateurs pensent et agissent. Je considère cette compétence comme stratégique, car une bonne interface permet de réduire les erreurs, fluidifier les processus et rendre les outils plus durables dans le temps. Travailler sur l'ergonomie m'a également sensibilisé à l'importance du dialogue avec les utilisateurs finaux et à la prise en compte de leur environnement réel.",
      relatedProjects: ["projet-6-magellan-meteor"]
    },
    {
      id: "conception-reseau",
      icon: <Network className="h-5 w-5" />,
      title: "Conception réseau",
      type: "technique",
      definition: "La conception réseau consiste à planifier et structurer l'architecture d'un réseau informatique, en définissant les équipements, les protocoles, les sous-réseaux (VLAN) et les règles de sécurité. L'objectif est de créer un réseau performant, sécurisé, évolutif et adapté aux besoins fonctionnels de l'entreprise.",
      application: "Cette compétence a été mobilisée dans le cadre du projet de standardisation du parc d'impression, où il a été nécessaire d'intégrer une flotte d'imprimantes RICOH à l'infrastructure existante tout en assurant une bonne gestion du réseau. J'ai été amené à intégrer dans des VLAN dédiés aux imprimantes pour segmenter les flux et sécuriser les communications entre les équipements. Planifier l'adressage IP des nouvelles machines, en tenant compte de l'échelle du parc et de la supervision centralisée (Streamline NX) ; assurer l'interopérabilité avec les outils de supervision et d'authentification par badge en garantissant une connectivité stable et contrôlée. Cette compétence a été essentielle pour assurer la fiabilité du service d'impression, éviter les collisions réseau, et simplifier la maintenance via une architecture claire et modulaire.",
      assessment: "La conception réseau demande une vision globale et prévoyante. Il ne s'agit pas uniquement de faire fonctionner les équipements entre eux, mais de prévoir leur sécurité, évolutivité et facilité de gestion. Une bonne architecture réseau, bien pensée dès le départ, limite les incidents, facilite le support technique et permet d'anticiper les futurs besoins. J'ai compris à travers ce projet que même des éléments considérés comme simples (imprimantes) peuvent poser des défis réseau s'ils ne sont pas intégrés intelligemment.",
      relatedProjects: ["projet-1-standardisation-parc"]
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
                    <CardTitle className="text-xl">Définition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{skill.definition}</p>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Mise en application</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{skill.application}</p>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Mon point de vue sur la compétence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{skill.assessment}</p>
                  </CardContent>
                </Card>
                
                {skill.relatedProjects.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Projets associés à cette compétence</h3>
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
