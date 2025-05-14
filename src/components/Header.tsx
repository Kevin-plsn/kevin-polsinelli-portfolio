
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-white shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-semibold text-lg md:text-xl text-primary">
            POLSINELLI Kevin
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center justify-center gap-8 mx-auto">
            <Link to="/" className="text-sm font-medium text-gray-200 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/experiences" className="text-sm font-medium text-gray-200 hover:text-primary transition-colors">
              Mes expériences
            </Link>
            <Link to="/projects" className="text-sm font-medium text-gray-200 hover:text-primary transition-colors">
              Mes projets
            </Link>
            <Link to="/skills" className="text-sm font-medium text-gray-200 hover:text-primary transition-colors">
              Mes compétences
            </Link>
            <Link to="/entreprise" className="text-sm font-medium text-gray-200 hover:text-primary transition-colors">
              Entreprise & École
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-200 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-gray-900"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container flex flex-col space-y-4 py-4 bg-secondary">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/experiences" 
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mes expériences
            </Link>
            <Link 
              to="/projects" 
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mes projets
            </Link>
            <Link 
              to="/skills" 
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mes compétences
            </Link>
            <Link 
              to="/entreprise" 
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Entreprise & École
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
