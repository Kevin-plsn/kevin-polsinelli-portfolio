
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EntreprisePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container">
            <h1 className="text-center mb-12 text-4xl font-bold text-primary">
              Mon environnement professionnel et académique
            </h1>
            
            <div className="space-y-16">
              {/* APRR Block */}
              <Card className="border-l-4 border-l-primary overflow-hidden animate-fade-in">
                <CardHeader className="bg-black text-white p-6">
                  <CardTitle className="text-2xl">APRR – Autoroutes Paris-Rhin-Rhône</CardTitle>
                  <CardDescription className="text-gray-300">Mon entreprise d'alternance</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/lovable-uploads/fe77bceb-9e1b-41f1-a020-597872f86c30.png" 
                      alt="Logo APRR" 
                      className="h-32 object-contain"
                    />
                  </div>
                  
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      J'ai rejoint le Groupe APRR en novembre 2023 dans le cadre de mon Mastère, avec l'ambition d'évoluer 
                      dans une entreprise de grande envergure, structurée et porteuse de projets stratégiques à l'échelle nationale. 
                      Après mon expérience dans une PME, je souhaitais intégrer un environnement où les processus sont rigoureux, 
                      les équipes multidisciplinaires, et les enjeux métiers bien définis.
                    </p>
                    
                    <p>
                      Mon choix s'est naturellement tourné vers APRR – Autoroutes Paris-Rhin-Rhône, acteur majeur de la mobilité 
                      en France et gestionnaire de plus de 2 300 km d'autoroutes. Intégrer ce groupe m'a permis de m'impliquer 
                      dans un projet ambitieux de transformation numérique interne : MAGELLAN, un système d'information unifié 
                      visant à moderniser et centraliser les outils métiers de l'entreprise.
                    </p>
                    
                    <p>
                      Au sein de l'équipe d'administration fonctionnelle, j'ai participé activement au paramétrage du système, 
                      en veillant à son adéquation avec les besoins métier, tout en contribuant à l'amélioration de l'expérience 
                      utilisateur. J'ai également été impliqué dans l'accompagnement au changement, à travers la rédaction de 
                      documentation, le support fonctionnel et l'assistance aux utilisateurs.
                    </p>
                    
                    <p>
                      Aujourd'hui, cette expérience au sein d'APRR m'a permis de développer des compétences à la fois fonctionnelles 
                      et transversales, tout en évoluant dans un environnement stimulant, exigeant et structuré. Elle représente 
                      un réel tremplin pour ma carrière dans la gestion de projets et l'ingénierie des systèmes d'information.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Réseau APRR-AREA</h3>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/9de0a077-4a3c-4fa0-ac7e-10e08bb2c465.png" 
                        alt="Réseau APRR-AREA" 
                        className="max-w-full h-auto shadow-lg rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* AFIP Block */}
              <Card className="border-l-4 border-l-primary overflow-hidden animate-fade-in">
                <CardHeader className="bg-black text-white p-6">
                  <CardTitle className="text-2xl">AFIP Formations – Villeurbanne</CardTitle>
                  <CardDescription className="text-gray-300">Mon établissement de formation</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/lovable-uploads/d631c07d-942c-41bb-8630-1359b8680576.png" 
                      alt="AFIP Formations" 
                      className="max-w-full h-auto max-h-60 shadow-lg rounded-lg"
                    />
                  </div>
                  
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      J'ai intégré AFIP Formations en septembre 2020 pour débuter un Bachelor Administrateur d'Infrastructures 
                      Sécurisées (AIS). Durant ces trois premières années, j'ai acquis une solide base technique en systèmes 
                      d'information, tout en développant mes compétences en gestion de systèmes complexes et en sécurité informatique, 
                      des enjeux devenus essentiels pour les entreprises d'aujourd'hui.
                    </p>
                    
                    <p>
                      Ce cursus m'a permis d'approfondir mes connaissances en réseaux, en infrastructure et en méthodologies de 
                      sécurisation des systèmes informatiques, dans un cadre pédagogique à la fois concret et exigeant.
                    </p>
                    
                    <p>
                      Aujourd'hui, je poursuis mon parcours avec le Mastère Expert en Ingénierie Informatique (EII), une formation 
                      de niveau Bac+5 orientée vers la gestion de projets, l'analyse fonctionnelle et l'ingénierie des systèmes 
                      d'information. Ce Mastère s'inscrit pleinement dans mon ambition d'évoluer vers un poste à responsabilités, 
                      mêlant vision managériale et expertise technique.
                    </p>
                    
                    <p>
                      L'environnement stimulant proposé par AFIP Formations, combiné à des enseignements de qualité et une forte 
                      proximité avec le monde professionnel, m'a permis de construire un parcours cohérent, aligné avec les enjeux 
                      actuels du secteur IT et mes objectifs de carrière.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EntreprisePage;
