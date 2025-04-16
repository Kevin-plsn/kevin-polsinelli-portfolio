
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Mon Parcours</h2>
        
        <div className="space-y-6">
          {/* APRR */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">Technicien SI Trafic</CardTitle>
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" /> 2023 - Présent
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">APRR</span>
                <span>-</span>
                <span>Paris-Rhin-Rhône, Alternance</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Gestion du système d'information trafic pour les autoroutes</li>
                <li>Travail sur le projet MAGELLAN de modernisation des SI</li>
                <li>Support fonctionnel aux utilisateurs</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Skyepharma */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">Administrateur Systèmes et Réseaux</CardTitle>
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" /> 2021 - 2023
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">Skyepharma Production SAS</span>
                <span>-</span>
                <span>Alternance</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Gestion du parc informatique</li>
                <li>Renouvellement d'infrastructure</li>
                <li>Support technique aux utilisateurs</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* SYTRAL */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">Stage - Service Informatique</CardTitle>
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" /> 2020
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">SYTRAL</span>
                <span>-</span>
                <span>Stage de 3 mois</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Découverte du fonctionnement d'un service informatique</li>
                <li>Référencement des baies informatiques</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Education */}
          <h3 className="text-2xl font-bold mt-12 mb-6 text-primary">Formation</h3>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">Master Expert en Ingénierie Informatique</CardTitle>
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" /> 2023 - Présent
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">AFIP FORMATIONS</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">Bachelor en Administration des Infrastructures Sécurisées et Réseaux</CardTitle>
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" /> 2020 - 2023
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">AFIP FORMATION</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">BAC STMG option SIG</CardTitle>
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" /> 2019
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">Lycée Charlie Chaplin</span>
              </div>
              <p className="mt-2 text-gray-600">Science de l'Information et de la Gestion</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
