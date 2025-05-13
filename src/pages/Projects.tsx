import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, MessageSquare, Monitor, Shield, Briefcase, Layers, Target, AlertTriangle, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();
  
  // Handle anchor links for direct navigation to specific skill sections
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      if (hash === "gestion-projet-sae") setActiveTab("gestion-projet-sae");
      else if (hash === "support-technique") setActiveTab("support-technique");
      else if (hash === "automatisation-securisation") setActiveTab("automatisation-securisation");
      else if (hash === "administration-securite") setActiveTab("administration-securite");
      else if (hash === "supervision-infrastructure") setActiveTab("supervision-infrastructure");
      else if (hash === "communication-accompagnement") setActiveTab("communication-accompagnement");
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes projets</h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground">
              Cette page présente les projets majeurs que j'ai réalisés durant mes années d'alternance. 
              Chaque projet est associé à une compétence développée dans un contexte réel, et témoigne 
              de ma capacité à répondre à des besoins concrets dans différents environnements professionnels.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Explorer par compétence :</h2>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <TabsTrigger 
                  value="gestion-projet-sae" 
                  className="w-full px-4 py-3 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <Monitor className="h-5 w-5 text-primary" />
                  <span>Gestion de projet SAE</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="support-technique" 
                  className="w-full px-4 py-3 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <Code className="h-5 w-5 text-primary" />
                  <span>Support technique</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="automatisation-securisation" 
                  className="w-full px-4 py-3 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Automatisation & Sécurisation</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="administration-securite" 
                  className="w-full px-4 py-3 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <Database className="h-5 w-5 text-primary" />
                  <span>Administration SI</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="supervision-infrastructure" 
                  className="w-full px-4 py-3 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <Monitor className="h-5 w-5 text-primary" />
                  <span>Supervision Infrastructure</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="communication-accompagnement" 
                  className="w-full px-4 py-3 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Communication & Accompagnement</span>
                </TabsTrigger>
              </TabsList>
            
              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectCard 
                    title="METEOR – APRR"
                    icon={<Monitor className="h-12 w-12 text-primary" />}
                    category="Gestion de projet SAE"
                    context="Projet national déjà déployé avant mon arrivée. J'ai été intégré à l'équipe fonctionnelle pour contribuer à son évolution."
                    objectives={["Améliorer l'affichage des données météo et trafic par zones dans les Postes de Commandement."]}
                    actions={["Paramétrage des contextes visuels selon les régions (Nord, Sud, Est, Ouest)", "Tests", "Documentation", "Accompagnement des utilisateurs"]}
                    results={["Meilleure réactivité des opérateurs", "Affichage plus lisible", "Adoption rapide par les équipes"]}
                    competenceLink="Coordination fonctionnelle, adaptation aux besoins terrain, conduite du changement."
                  />
                  
                  <ProjectCard 
                    title="Informatique industrielle – Skyepharma"
                    icon={<Code className="h-12 w-12 text-primary" />}
                    category="Support technique & informatique industrielle"
                    context="Départ de l'informaticien industriel sans passation."
                    objectives={["Assurer la continuité du support", "Maintenir les équipements de production", "Garantir la réactivité en atelier"]}
                    actions={["Support N1/N2", "Gestion des incidents", "Maintenance des postes industriels", "Mise à jour de l'AD (intérimaires)"]}
                    results={["Réduction des temps d'intervention", "Continuité assurée sans rupture de production", "Confiance des utilisateurs"]}
                    competenceLink="Intervention sur le terrain, autonomie, lien direct avec la production."
                  />
                  
                  <ProjectCard 
                    title="GHABIL – APRR"
                    icon={<Shield className="h-12 w-12 text-primary" />}
                    category="Automatisation et sécurisation des environnements IT"
                    context="Besoin d'optimiser la gestion des comptes utilisateurs."
                    objectives={["Automatiser la création des comptes utilisateurs dans l'Active Directory"]}
                    actions={["Paramétrage fonctionnel", "Validation des règles", "Simplification du processus RH-DSI"]}
                    results={["Processus standardisé", "Réduction des erreurs", "Gain de temps pour les équipes IT"]}
                    competenceLink="Automatisation, standardisation, optimisation des processus IT."
                  />
                  
                  <ProjectCard 
                    title="BitLocker & BIOS – Skyepharma"
                    icon={<Shield className="h-12 w-12 text-primary" />}
                    category="Automatisation et sécurisation des environnements IT"
                    context="Renforcement nécessaire suite à un audit de sécurité."
                    objectives={["Renforcer la sécurité post-audit Pentest"]}
                    actions={["Déploiement BitLocker via GPO", "Ajout de mot de passe BIOS", "Rédaction de procédure"]}
                    results={["Protection des données sensibles", "Conformité aux recommandations d'audit", "Réduction des risques de fuite"]}
                    competenceLink="Sécurisation, conformité, protection des données."
                  />
                  
                  <ProjectCard 
                    title="MDM – Skyepharma"
                    icon={<Shield className="h-12 w-12 text-primary" />}
                    category="Automatisation et sécurisation des environnements IT"
                    context="Déploiement d'une nouvelle flotte de smartphones professionnels."
                    objectives={["Gérer une nouvelle flotte de 15 smartphones professionnels"]}
                    actions={["Mise en place de l'outil MDM", "Configuration", "Sécurité", "Gestion à distance"]}
                    results={["Contrôle centralisé des appareils", "Sécurisation des données d'entreprise", "Facilité de déploiement d'applications"]}
                    competenceLink="Gestion de flotte mobile, sécurité des terminaux, centralisation."
                  />
                  
                  <ProjectCard 
                    title="Active Directory – Skyepharma"
                    icon={<Database className="h-12 w-12 text-primary" />}
                    category="Administration et sécurité des systèmes d'information"
                    context="Gestion d'un environnement Active Directory en entreprise pharmaceutique."
                    objectives={["Maintenir un annuaire utilisateur propre et sécurisé"]}
                    actions={["Création/suppression de comptes", "Gestion des groupes", "Affectation de droits"]}
                    results={["Structure organisationnelle claire", "Contrôle d'accès efficace", "Réduction des risques de sécurité"]}
                    competenceLink="Gestion des identités, contrôle d'accès, sécurisation des ressources."
                  />
                  
                  <ProjectCard 
                    title="Sécurisation des postes – Skyepharma"
                    icon={<Database className="h-12 w-12 text-primary" />}
                    category="Administration et sécurité des systèmes d'information"
                    context="Besoins de renforcement de la sécurité physique et logique des postes de travail."
                    objectives={["Limiter les risques liés aux accès physiques et aux données sensibles"]}
                    actions={["Déploiement BitLocker", "Politique GPO", "Protection BIOS"]}
                    results={["Protection contre les accès non autorisés", "Conformité aux standards de sécurité", "Protection en cas de vol de matériel"]}
                    competenceLink="Défense en profondeur, protection des endpoints, conformité."
                  />
                  
                  <ProjectCard 
                    title="Centreon – Skyepharma"
                    icon={<Monitor className="h-12 w-12 text-primary" />}
                    category="Supervision et gestion d'infrastructure"
                    context="Besoin de monitoring proactif des équipements critiques."
                    objectives={["Surveiller les équipements critiques et anticiper les incidents"]}
                    actions={["Déploiement de Centreon", "Ajout de capteurs", "Paramétrage des alertes", "Création de tableaux de bord"]}
                    results={["Détection précoce des anomalies", "Réduction des temps d'indisponibilité", "Vue consolidée de l'infrastructure"]}
                    competenceLink="Monitoring, détection proactive, tableaux de bord."
                  />
                  
                  <ProjectCard 
                    title="METEOR (supervision visuelle) – APRR"
                    icon={<Monitor className="h-12 w-12 text-primary" />}
                    category="Supervision et gestion d'infrastructure"
                    context="Optimisation de la visualisation du trafic et des conditions météo."
                    objectives={["Améliorer la lisibilité en temps réel des conditions d'exploitation"]}
                    actions={["Paramétrage des vues", "Filtres", "Tests d'affichage en conditions réelles"]}
                    results={["Meilleure lisibilité", "Prise de décision facilitée", "Supervision optimisée par zone"]}
                    competenceLink="Visualisation de données, ergonomie, adaptation aux besoins opérationnels."
                  />
                  
                  <ProjectCard 
                    title="Téléphonie IP – Skyepharma"
                    icon={<MessageSquare className="h-12 w-12 text-primary" />}
                    category="Communication et accompagnement des utilisateurs"
                    context="Migration vers un nouveau système de téléphonie IP."
                    objectives={["Faciliter la transition vers une nouvelle infrastructure télécom"]}
                    actions={["Rédaction de procédures claires", "Accompagnement des utilisateurs", "Gestion des demandes"]}
                    results={["Adoption réussie par les utilisateurs", "Réduction des demandes d'assistance", "Autonomie dans l'utilisation"]}
                    competenceLink="Documentation utilisateur, pédagogie, accompagnement au changement."
                  />
                  
                  <ProjectCard 
                    title="Formation METEOR – APRR"
                    icon={<MessageSquare className="h-12 w-12 text-primary" />}
                    category="Communication et accompagnement des utilisateurs"
                    context="Déploiement de nouveaux contextes de visualisation pour les opérateurs."
                    objectives={["Assurer la prise en main rapide de l'outil"]}
                    actions={["Présentation des nouveaux contextes aux opérateurs", "Réponses aux questions terrain", "Documentation synthétique"]}
                    results={["Adoption rapide des nouvelles fonctionnalités", "Autonomie des opérateurs", "Réduction des erreurs d'utilisation"]}
                    competenceLink="Formation utilisateur, assistance de proximité, documentation adaptée."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="gestion-projet-sae" className="space-y-6">
                <ProjectCard 
                  title="METEOR – APRR"
                  icon={<Monitor className="h-12 w-12 text-primary" />}
                  category="Gestion de projet SAE"
                  context="Projet national déjà déployé avant mon arrivée. J'ai été intégré à l'équipe fonctionnelle pour contribuer à son évolution."
                  objectives={["Améliorer l'affichage des données météo et trafic par zones dans les Postes de Commandement."]}
                  actions={["Paramétrage des contextes visuels selon les régions (Nord, Sud, Est, Ouest)", "Tests", "Documentation", "Accompagnement des utilisateurs"]}
                  results={["Meilleure réactivité des opérateurs", "Affichage plus lisible", "Adoption rapide par les équipes"]}
                  competenceLink="Coordination fonctionnelle, adaptation aux besoins terrain, conduite du changement."
                />
              </TabsContent>
              
              <TabsContent value="support-technique" className="space-y-6">
                <ProjectCard 
                  title="Informatique industrielle – Skyepharma"
                  icon={<Code className="h-12 w-12 text-primary" />}
                  category="Support technique & informatique industrielle"
                  context="Départ de l'informaticien industriel sans passation."
                  objectives={["Assurer la continuité du support", "Maintenir les équipements de production", "Garantir la réactivité en atelier"]}
                  actions={["Support N1/N2", "Gestion des incidents", "Maintenance des postes industriels", "Mise à jour de l'AD (intérimaires)"]}
                  results={["Réduction des temps d'intervention", "Continuité assurée sans rupture de production", "Confiance des utilisateurs"]}
                  competenceLink="Intervention sur le terrain, autonomie, lien direct avec la production."
                />
              </TabsContent>
              
              <TabsContent value="automatisation-securisation" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectCard 
                    title="GHABIL – APRR"
                    icon={<Shield className="h-12 w-12 text-primary" />}
                    category="Automatisation et sécurisation des environnements IT"
                    context="Besoin d'optimiser la gestion des comptes utilisateurs."
                    objectives={["Automatiser la création des comptes utilisateurs dans l'Active Directory"]}
                    actions={["Paramétrage fonctionnel", "Validation des règles", "Simplification du processus RH-DSI"]}
                    results={["Processus standardisé", "Réduction des erreurs", "Gain de temps pour les équipes IT"]}
                    competenceLink="Automatisation, standardisation, optimisation des processus IT."
                  />
                  
                  <ProjectCard 
                    title="BitLocker & BIOS – Skyepharma"
                    icon={<Shield className="h-12 w-12 text-primary" />}
                    category="Automatisation et sécurisation des environnements IT"
                    context="Renforcement nécessaire suite à un audit de sécurité."
                    objectives={["Renforcer la sécurité post-audit Pentest"]}
                    actions={["Déploiement BitLocker via GPO", "Ajout de mot de passe BIOS", "Rédaction de procédure"]}
                    results={["Protection des données sensibles", "Conformité aux recommandations d'audit", "Réduction des risques de fuite"]}
                    competenceLink="Sécurisation, conformité, protection des données."
                  />
                  
                  <ProjectCard 
                    title="MDM – Skyepharma"
                    icon={<Shield className="h-12 w-12 text-primary" />}
                    category="Automatisation et sécurisation des environnements IT"
                    context="Déploiement d'une nouvelle flotte de smartphones professionnels."
                    objectives={["Gérer une nouvelle flotte de 15 smartphones professionnels"]}
                    actions={["Mise en place de l'outil MDM", "Configuration", "Sécurité", "Gestion à distance"]}
                    results={["Contrôle centralisé des appareils", "Sécurisation des données d'entreprise", "Facilité de déploiement d'applications"]}
                    competenceLink="Gestion de flotte mobile, sécurité des terminaux, centralisation."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="administration-securite" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectCard 
                    title="Active Directory – Skyepharma"
                    icon={<Database className="h-12 w-12 text-primary" />}
                    category="Administration et sécurité des systèmes d'information"
                    context="Gestion d'un environnement Active Directory en entreprise pharmaceutique."
                    objectives={["Maintenir un annuaire utilisateur propre et sécurisé"]}
                    actions={["Création/suppression de comptes", "Gestion des groupes", "Affectation de droits"]}
                    results={["Structure organisationnelle claire", "Contrôle d'accès efficace", "Réduction des risques de sécurité"]}
                    competenceLink="Gestion des identités, contrôle d'accès, sécurisation des ressources."
                  />
                  
                  <ProjectCard 
                    title="Sécurisation des postes – Skyepharma"
                    icon={<Database className="h-12 w-12 text-primary" />}
                    category="Administration et sécurité des systèmes d'information"
                    context="Besoins de renforcement de la sécurité physique et logique des postes de travail."
                    objectives={["Limiter les risques liés aux accès physiques et aux données sensibles"]}
                    actions={["Déploiement BitLocker", "Politique GPO", "Protection BIOS"]}
                    results={["Protection contre les accès non autorisés", "Conformité aux standards de sécurité", "Protection en cas de vol de matériel"]}
                    competenceLink="Défense en profondeur, protection des endpoints, conformité."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="supervision-infrastructure" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectCard 
                    title="Centreon – Skyepharma"
                    icon={<Monitor className="h-12 w-12 text-primary" />}
                    category="Supervision et gestion d'infrastructure"
                    context="Besoin de monitoring proactif des équipements critiques."
                    objectives={["Surveiller les équipements critiques et anticiper les incidents"]}
                    actions={["Déploiement de Centreon", "Ajout de capteurs", "Paramétrage des alertes", "Création de tableaux de bord"]}
                    results={["Détection précoce des anomalies", "Réduction des temps d'indisponibilité", "Vue consolidée de l'infrastructure"]}
                    competenceLink="Monitoring, détection proactive, tableaux de bord."
                  />
                  
                  <ProjectCard 
                    title="METEOR (supervision visuelle) – APRR"
                    icon={<Monitor className="h-12 w-12 text-primary" />}
                    category="Supervision et gestion d'infrastructure"
                    context="Optimisation de la visualisation du trafic et des conditions météo."
                    objectives={["Améliorer la lisibilité en temps réel des conditions d'exploitation"]}
                    actions={["Paramétrage des vues", "Filtres", "Tests d'affichage en conditions réelles"]}
                    results={["Meilleure lisibilité", "Prise de décision facilitée", "Supervision optimisée par zone"]}
                    competenceLink="Visualisation de données, ergonomie, adaptation aux besoins opérationnels."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="communication-accompagnement" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectCard 
                    title="Téléphonie IP – Skyepharma"
                    icon={<MessageSquare className="h-12 w-12 text-primary" />}
                    category="Communication et accompagnement des utilisateurs"
                    context="Migration vers un nouveau système de téléphonie IP."
                    objectives={["Faciliter la transition vers une nouvelle infrastructure télécom"]}
                    actions={["Rédaction de procédures claires", "Accompagnement des utilisateurs", "Gestion des demandes"]}
                    results={["Adoption réussie par les utilisateurs", "Réduction des demandes d'assistance", "Autonomie dans l'utilisation"]}
                    competenceLink="Documentation utilisateur, pédagogie, accompagnement au changement."
                  />
                  
                  <ProjectCard 
                    title="Formation METEOR – APRR"
                    icon={<MessageSquare className="h-12 w-12 text-primary" />}
                    category="Communication et accompagnement des utilisateurs"
                    context="Déploiement de nouveaux contextes de visualisation pour les opérateurs."
                    objectives={["Assurer la prise en main rapide de l'outil"]}
                    actions={["Présentation des nouveaux contextes aux opérateurs", "Réponses aux questions terrain", "Documentation synthétique"]}
                    results={["Adoption rapide des nouvelles fonctionnalités", "Autonomie des opérateurs", "Réduction des erreurs d'utilisation"]}
                    competenceLink="Formation utilisateur, assistance de proximité, documentation adaptée."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  icon: React.ReactNode;
  category: string;
  context: string;
  objectives: string[];
  actions: string[];
  results: string[];
  competenceLink: string;
}

const ProjectCard = ({ 
  title, 
  icon, 
  category, 
  context, 
  objectives, 
  actions, 
  results, 
  competenceLink 
}: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col shadow-sm hover:shadow-md transition-shadow border border-primary/20">
      <CardHeader className="flex flex-row items-start gap-4 pb-2 bg-primary/5">
        <div className="bg-primary/10 p-2 rounded-full mt-1">
          {icon}
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">{category}</div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-semibold text-primary/80 mb-1">Contexte</h3>
          <p className="text-sm text-muted-foreground">{context}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-primary/80 mb-1">Objectifs</h3>
          <ul className="list-disc text-sm text-muted-foreground pl-5 space-y-1">
            {objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-primary/80 mb-1">Actions menées</h3>
          <ul className="list-disc text-sm text-muted-foreground pl-5 space-y-1">
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-primary/80 mb-1">Résultats</h3>
          <ul className="list-disc text-sm text-muted-foreground pl-5 space-y-1">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-2 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-primary/80 mb-1">Lien avec la compétence</h3>
          <p className="text-sm italic text-muted-foreground">{competenceLink}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsPage;
