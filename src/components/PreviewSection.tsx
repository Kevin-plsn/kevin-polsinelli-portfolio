
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PreviewSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Mon parcours</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Expériences Pro Card */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Mes expériences</CardTitle>
              <CardDescription>Découvrez mon parcours professionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                J'ai travaillé dans plusieurs entreprises, notamment APRR, Skyepharma et SYTRAL, où j'ai développé des compétences variées en informatique et gestion de projets.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/experiences">
                  Voir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Entreprise & École Card */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Entreprise & École</CardTitle>
              <CardDescription>Mon environnement professionnel et académique</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mon parcours chez APRR et à l'AFIP Formations à Villeurbanne, où je prépare un Mastère 2 Expert Ingénierie Informatique.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/entreprise">
                  Voir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Projets Card */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Mes projets</CardTitle>
              <CardDescription>Projets personnels et professionnels</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Découvrez les différents projets sur lesquels j'ai travaillé, des applications web aux solutions informatiques innovantes.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/projects">
                  Voir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Compétences Card */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Mes compétences</CardTitle>
              <CardDescription>Savoir-faire technique et humain</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explorez mes compétences techniques, linguistiques et mes soft skills développées au fil de mes expériences professionnelles.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/skills">
                  Voir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
