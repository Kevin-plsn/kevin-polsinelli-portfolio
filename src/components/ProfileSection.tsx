
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profile" className="min-h-[90vh] flex items-center py-12 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="/lovable-uploads/91cb1a3d-669d-42c3-9680-fde64dd31fe1.png" 
                alt="Kevin Polsinelli" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="space-y-6 animate-fade-in text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              POLSINELLI Kevin
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              Expert en Ingénierie Informatique
            </p>
            
            <div className="pt-6">
              <a 
                href="https://www.linkedin.com/in/kevin-polsinelli-a69198218/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary/80 transition-colors text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
