
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const ContactPreviewSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted to-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full border-2 border-primary shadow-lg">
              <img 
                src="/lovable-uploads/b7ea56a5-46c6-4306-81b8-89970e8d4c89.png" 
                alt="Kevin POLSINELLI" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Kevin POLSINELLI</h3>
              <p className="text-sm text-muted-foreground">Prenons contact</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Me contacter
              </Link>
            </Button>
            
            <div className="flex gap-2">
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kevin-polsinelli-a69198218/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
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

export default ContactPreviewSection;
