
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    // Scroll to top of the page
    window.scrollTo(0, 0);
  };

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
            <button 
              onClick={() => handleNavigation('/')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavigation('/experiences')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer"
            >
              Mes expériences
            </button>
            <button 
              onClick={() => handleNavigation('/projects')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer"
            >
              Mes projets
            </button>
            <button 
              onClick={() => handleNavigation('/skills')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer"
            >
              Mes compétences
            </button>
            <button 
              onClick={() => handleNavigation('/entreprise')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer"
            >
              Entreprise & École
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
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
            <button 
              onClick={() => handleNavigation('/')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors text-left"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavigation('/experiences')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors text-left"
            >
              Mes expériences
            </button>
            <button 
              onClick={() => handleNavigation('/projects')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors text-left"
            >
              Mes projets
            </button>
            <button 
              onClick={() => handleNavigation('/skills')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors text-left"
            >
              Mes compétences
            </button>
            <button 
              onClick={() => handleNavigation('/entreprise')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors text-left"
            >
              Entreprise & École
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-sm font-medium text-gray-200 hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
