
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
              Découvrez les entreprises dans lesquelles j'ai évolué au cours de mes années d'alternance. 
              Chaque expérience m'a permis d'acquérir de nouvelles compétences, de relever des défis 
              et d'affiner mon expertise dans le domaine de l'IT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* APRR Card */}
            <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
              <CardHeader className="flex items-center">
                <div className="w-full h-40 flex justify-center items-center p-4">
                  <img 
                    src="/lovable-uploads/dc42d57c-c697-4a46-a922-1969a273854a.png" 
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
                    src="/lovable-uploads/6b020a7d-495f-49ee-b8f4-e1be02e2d69b.png" 
                    alt="Skyepharma Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-center mt-4">Skyepharma</CardTitle>
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
