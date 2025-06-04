
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ExperiencesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes expériences</h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              Parcourez les entreprises au sein desquelles j'ai évolué tout au long de mes années d'alternance. 
              Chacune de ces expériences a enrichi mon parcours, en me confrontant à des environnements variés, 
              des projets ambitieux et des défis concrets, contribuant ainsi à renforcer mon expertise dans le 
              domaine de l'informatique et de la gestion de projets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* APRR Card */}
            <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
              <CardHeader className="flex items-center">
                <div className="w-full h-40 flex justify-center items-center p-4">
                  <img 
                    src="/lovable-uploads/6b74c682-7373-473f-848e-d9f7a006594d.png" 
                    alt="APRR Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-center mt-4">APRR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">
                  Autoroutes Paris-Rhin-Rhône
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="group">
                  <Link to="/aprr">
                    Voir détails
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Skyepharma Card */}
            <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
              <CardHeader className="flex items-center">
                <div className="w-full h-40 flex justify-center items-center p-4">
                  <img 
                    src="/lovable-uploads/893ea8e3-6378-426c-8b04-c9a14d103aa5.png" 
                    alt="Skyepharma Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-center mt-4">SKYEPHARMA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">
                  Solutions pharmaceutiques innovantes
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="group">
                  <Link to="/skyepharma">
                    Voir détails
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* SYTRAL Card */}
            <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
              <CardHeader className="flex items-center">
                <div className="w-full h-40 flex justify-center items-center p-4">
                  <img 
                    src="/lovable-uploads/f31ad815-1bc1-4748-9e3c-d5659c190765.png" 
                    alt="SYTRAL Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-center mt-4">SYTRAL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">
                  Syndicat mixte des transports pour le Rhône et l'agglomération lyonnaise
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="group">
                  <Link to="/sytral">
                    Voir détails
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencesPage;
