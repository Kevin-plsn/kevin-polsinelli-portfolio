
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; 2024 POLSINELLI Kevin</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:contact@example.com" 
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-gray-700" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-700" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
