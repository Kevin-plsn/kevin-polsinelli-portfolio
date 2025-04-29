
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* APRR Block */}
              <Card className="border-l-4 border-l-primary overflow-hidden animate-fade-in">
                <CardHeader className="bg-black text-white p-6">
                  <CardTitle className="text-2xl">APRR – Autoroutes Paris-Rhin-Rhône</CardTitle>
                  <CardDescription className="text-gray-300">Mon entreprise d'alternance</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/lovable-uploads/bfa81c47-4311-4559-aecf-d8fb211021c0.png" 
                      alt="Logo APRR" 
                      className="h-32 object-contain"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    APRR (Autoroutes Paris-Rhin-Rhône) est un acteur majeur du secteur autoroutier en France et en Europe. 
                    Filiale du groupe Eiffage, APRR est spécialisée dans la construction, l'exploitation et la maintenance 
                    d'un réseau autoroutier de plus de 2 300 kilomètres, couvrant un vaste territoire allant de Paris à la 
                    frontière suisse.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Engagée dans une démarche d'innovation et de transition énergétique, l'entreprise investit dans les 
                    solutions numériques, la mobilité durable et la sécurité routière, tout en mettant en œuvre des projets 
                    technologiques d'envergure pour moderniser son infrastructure et améliorer l'expérience des usagers.
                  </p>
                </CardContent>
              </Card>
              
              {/* AFIP Block */}
              <Card className="border-l-4 border-l-primary overflow-hidden animate-fade-in">
                <CardHeader className="bg-black text-white p-6">
                  <CardTitle className="text-2xl">AFIP Formations – Villeurbanne</CardTitle>
                  <CardDescription className="text-gray-300">Mon établissement de formation</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="https://www.afip-formations.com/wp-content/themes/afip/images/logo.svg" 
                      alt="Logo AFIP Formations" 
                      className="h-32 object-contain"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    L'AFIP Formations est un établissement d'enseignement supérieur situé à Villeurbanne, spécialisé dans 
                    les formations en informatique, numérique et management. L'école propose des cursus du BAC+2 au BAC+5, 
                    en formation initiale et en alternance.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    J'y prépare actuellement un Mastère 2 Expert en Ingénierie Informatique, formation que je réalise en 
                    alternance chez APRR. Ce programme me permet d'acquérir des compétences avancées en développement, 
                    architecture des systèmes d'information, gestion de projet IT et cybersécurité, tout en les mettant 
                    en pratique dans un contexte professionnel.
                  </p>
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
