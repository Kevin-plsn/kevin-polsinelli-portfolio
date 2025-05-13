
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">2025 par POLSINELLI Kevin</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/kevin-polsinelli-a69198218/" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary/80 hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
