
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, CheckCircle2, Compass, Target, Wrench } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes projets</h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              Découvrez les différents projets sur lesquels j'ai travaillé dans le cadre de mes expériences 
              professionnelles et académiques.
            </p>
          </div>
          
          <section className="py-8">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-primary">Projet MAGELLAN</h2>
              
              <Card className="mb-8 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Contexte du projet</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 prose max-w-none text-gray-700">
                  <p>
                    Le projet MAGELLAN s'inscrit dans une démarche globale de modernisation des systèmes d'information chez APRR. Face à des infrastructures vieillissantes, une complexité croissante des processus métiers et un besoin de fiabilité renforcée, APRR a initié ce projet pour refondre et optimiser ses outils internes.
                  </p>
                  <p>
                    MAGELLAN vise à proposer une solution intégrée, évolutive et sécurisée, capable de répondre aux nouveaux enjeux opérationnels et stratégiques de l'entreprise, tout en accompagnant les équipes dans une transformation numérique progressive.
                  </p>
                  <p>
                    Le projet réunit plusieurs expertises techniques (architecture logicielle, infrastructure, sécurité, data…) et implique différents départements métier, illustrant l'importance de la collaboration entre l'IT et les directions fonctionnelles.
                  </p>
                  <p>
                    Dans ce cadre, Intégré à cette équipe, mon rôle consiste à contribuer activement au paramétrage du système MAGELLAN, à participer à l'analyse des besoins métiers, et à accompagner les utilisateurs dans l'appropriation de l'outil.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="mb-8 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Objectifs</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Paramétrer et adapter le système aux spécificités des métiers d'APRR, en garantissant sa cohérence avec les besoins fonctionnels.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Améliorer l'ergonomie et l'expérience utilisateur pour les collaborateurs internes.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Accompagner le changement, à travers un travail de configuration, de documentation et de support fonctionnel aux utilisateurs.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-8 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Réalisations</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-6">
                  <div className="border-l-4 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-lg">Paramétrage fonctionnel du système</h4>
                    <p className="text-gray-700 mt-1">
                      J'ai configuré le système MAGELLAN selon les règles de gestion internes spécifiques à APRR, en travaillant étroitement avec les référents métiers. Ce paramétrage a nécessité une compréhension approfondie des processus d'affaires et des exigences opérationnelles de l'entreprise. J'ai adapté les fonctionnalités du système pour qu'elles répondent précisément aux besoins des différents départements tout en maintenant la cohérence globale de l'outil.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-lg">Adaptation de l'outil aux cas d'usage spécifiques</h4>
                    <p className="text-gray-700 mt-1">
                      J'ai personnalisé MAGELLAN pour répondre aux cas d'usage particuliers identifiés par les équipes opérationnelles d'APRR. Cette adaptation a impliqué la création de workflows personnalisés, la configuration de règles métier complexes et la mise en place de formulaires spécifiques. Tout ce travail a été réalisé en veillant constamment à la cohérence globale de la solution et à sa conformité avec les processus établis au sein de l'entreprise.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-lg">Amélioration de l'ergonomie de l'interface utilisateur</h4>
                    <p className="text-gray-700 mt-1">
                      J'ai contribué à optimiser l'expérience utilisateur en proposant et en implémentant des ajustements dans l'interface de MAGELLAN. Ces modifications ont simplifié la navigation dans l'application, clarifié l'organisation des écrans et facilité la compréhension des fonctionnalités par les utilisateurs finaux. Les améliorations ergonomiques ont été basées sur les retours directs des utilisateurs et sur l'observation de leurs interactions avec le système.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-lg">Création et mise à jour de la documentation fonctionnelle</h4>
                    <p className="text-gray-700 mt-1">
                      J'ai développé une documentation complète et accessible pour faciliter l'utilisation de MAGELLAN. Cette documentation comprend des guides d'utilisation, des manuels de procédures, des tutoriels vidéo et des FAQ détaillées. L'objectif était de fournir aux utilisateurs des ressources claires et pratiques pour les aider à s'approprier l'outil efficacement et à résoudre leurs problèmes courants de manière autonome.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-lg">Support fonctionnel</h4>
                    <p className="text-gray-700 mt-1">
                      J'ai assuré un accompagnement personnalisé des utilisateurs durant les phases critiques du déploiement de MAGELLAN. Ce support comprenait des sessions de formation individuelles et en groupe, une assistance en temps réel pour résoudre les problèmes rencontrés et un suivi régulier pour recueillir les retours d'expérience. Cette présence constante auprès des équipes a contribué à fluidifier l'adoption de l'outil et à limiter les résistances au changement.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-lg">Contribution à l'accompagnement au changement</h4>
                    <p className="text-gray-700 mt-1">
                      J'ai joué un rôle d'interface entre les utilisateurs métiers et les équipes techniques du projet, facilitant la communication et la compréhension mutuelle des enjeux. Cette position de relais m'a permis de traduire les besoins fonctionnels en spécifications techniques et, inversement, d'expliquer les contraintes techniques aux utilisateurs de manière accessible. Cette médiation a été essentielle pour aligner les attentes des différentes parties prenantes et favoriser l'acceptation du nouvel outil.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-primary/5">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bookmark className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Compétences mobilisées</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Aptitudes intellectuelles et comportementales</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Esprit d'analyse</h5>
                        <p className="text-sm text-gray-600">Compréhension des besoins métiers et traduction en paramétrage fonctionnel adapté.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Autonomie</h5>
                        <p className="text-sm text-gray-600">Prise en charge de tâches de configuration et de support avec peu de supervision directe.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Rigueur</h5>
                        <p className="text-sm text-gray-600">Respect des processus de validation, des règles de gestion et des contraintes liées aux données métiers.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Pédagogie</h5>
                        <p className="text-sm text-gray-600">Capacité à expliquer des éléments techniques à des interlocuteurs non techniques lors de l'accompagnement au changement.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Savoir-faire généraux</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Communication écrite et orale</h5>
                        <p className="text-sm text-gray-600">Rédaction de documentation fonctionnelle, participation aux réunions d'équipe et échanges réguliers avec les utilisateurs métiers.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Organisation personnelle</h5>
                        <p className="text-sm text-gray-600">Planification des tâches de paramétrage, gestion des demandes utilisateurs et suivi des retours dans les délais impartis.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Travail en équipe</h5>
                        <p className="text-sm text-gray-600">Collaboration quotidienne avec les membres de l'équipe d'administration fonctionnelle, les référents métiers et les équipes techniques.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-1">Support utilisateur</h5>
                        <p className="text-sm text-gray-600">Prise en charge des demandes et incidents fonctionnels, aide à la résolution de problèmes, accompagnement post-déploiement.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Savoir-faire techniques</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-medium mb-3 text-primary/80">Systèmes d'information</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Compréhension des processus métiers et de leur transcription dans un outil SI intégré.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Gestion des droits et des habilitations utilisateurs.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Paramétrage de modules fonctionnels (workflow, formulaires, règles de gestion).</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Contribution à la cohérence globale du système dans une logique d'intégration.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-medium mb-3 text-primary/80">Méthodologie et gestion de projet</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Participation aux phases de recette et de validation des évolutions fonctionnelles.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Collaboration avec les équipes techniques et métiers en méthode agile ou cycle en V.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Rédaction de livrables fonctionnels (guides, procédures, manuels utilisateurs).</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-3 text-primary/80">Outils utilisés</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">MAGELLAN :</span> Système d'information interne déployé par APRR, incluant le paramétrage, la configuration et le suivi des performances de l'outil.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">ORUS :</span> Outil de gestion des tickets, documentation et suivi des évolutions, permettant la traçabilité des interventions et la gestion des demandes utilisateurs.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Pack Office / Google Workspace :</span> Utilisation avancée pour la rédaction de documentation technique, la création de reportings détaillés et l'élaboration de supports de formation adaptés.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Supervision :</span> Surveillance des performances système, analyse des métriques et détection proactive des anomalies pour garantir la disponibilité de l'outil.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Support :</span> Utilisation d'outils de ticketing, de gestion des connaissances et de partage d'écran pour l'assistance aux utilisateurs.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Outils de recette / test :</span> Utilisation avancée des plateformes internes pour la validation rigoureuse des paramétrages, incluant la création de scénarios de test et l'analyse des résultats.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Conclusion du projet</h4>
                    <p className="text-gray-700">
                      Ma contribution au projet MAGELLAN m'a permis de développer une expertise pointue dans le paramétrage et l'adaptation de systèmes d'information complexes. J'ai acquis des compétences solides en analyse fonctionnelle, en support utilisateur et en gestion du changement, tout en renforçant mes capacités de communication et de pédagogie.
                    </p>
                    <p className="text-gray-700 mt-3">
                      L'environnement exigeant d'APRR m'a appris à travailler avec rigueur et méthode, en respectant des processus stricts tout en faisant preuve de créativité pour résoudre des problèmes techniques complexes. J'ai particulièrement apprécié le travail d'interface entre les équipes techniques et les utilisateurs métiers, qui m'a permis de développer une vision globale des enjeux SI dans une grande entreprise.
                    </p>
                    <p className="text-gray-700 mt-3">
                      Ce projet a renforcé ma passion pour l'amélioration continue des systèmes d'information et m'a conforté dans mon souhait de poursuivre ma carrière dans ce domaine, à l'intersection entre la technique et les besoins métiers des organisations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
