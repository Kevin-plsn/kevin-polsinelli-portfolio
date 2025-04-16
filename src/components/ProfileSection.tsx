
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section id="profile" className="py-12 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center md:items-end">
            <div className="w-48 h-48 md:w-56 md:h-56">
              <Avatar className="w-full h-full border-4 border-primary/20">
                <AvatarImage src="/photo1.jpg" alt="Kevin POLSINELLI" className="object-cover" />
                <AvatarFallback>KP</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary">POLSINELLI Kevin</h1>
            <div className="space-y-4 text-lg">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Je suis actuellement en dernière année de Master Expert en Ingénierie Informatique à l'AFIP FORMATIONS, que je réalise en alternance chez APRR en tant que Technicien de domaine SI Trafic.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Mon parcours dans le domaine de l'informatique a débuté en 2019 avec un BAC STMG option SIG (Science de l'Information et de la Gestion), que j'ai effectué au lycée Charlie Chaplin. Cette première expérience m'a permis de développer des compétences sur le domaine informatique.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Souhaitant élargir mes compétences, j'ai intégré en 2020 un Bachelor en Administration des Infrastructures Sécurisées et Réseaux, à AFIP Formation, une première expérience en initiale avec un stage de 3 mois dans l'entreprise SYTRAL. J'ai découvert le fonctionnement d'un service informatique, avec ces différentes missions et comme mission du référencesement de baies informatiques suite à des travaux en cours dans le batiment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    En 2021, j'ai entamé par deux années d'alternances, chez Skyepharma Production SAS, sous-traitant pharmaceutique en tant que technicien puis administrateur Systèmes et Réseaux, où j'interviens sur des projets, Gestion du parc informatique, Renouvellement Infrastructure, etc...
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    APRR (Autoroutes Paris-Rhin-Rhône) est un acteur majeur du secteur autoroutier en France et en Europe. Filiale du groupe Eiffage, APRR est spécialisée dans la construction, l'exploitation et la maintenance d'un réseau autoroutier de plus de 2 300 kilomètres, couvrant un vaste territoire allant de Paris à la frontière suisse.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Engagée dans une démarche d'innovation et de transition énergétique, l'entreprise investit dans les solutions numériques, la mobilité durable et la sécurité routière, tout en mettant en œuvre des projets technologiques d'envergure pour moderniser son infrastructure et améliorer l'expérience des usagers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
