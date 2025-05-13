
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profile" className="min-h-[90vh] flex items-center py-12 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile Image - Larger */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-xl shadow-2xl border-4 border-primary/20">
              <img 
                src="/lovable-uploads/62cb6dd7-56dd-4416-9a23-a61bd7f8b7e0.png" 
                alt="Kevin POLSINELLI" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="md:col-span-7 space-y-6 animate-fade-in text-center md:text-left">
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
