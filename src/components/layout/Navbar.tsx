
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif font-bold text-navy">
                Mindfully Medical
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-navy-light hover:text-blue px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-navy-light hover:text-blue px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link to="/anatomy" className="text-navy-light hover:text-blue px-3 py-2 text-sm font-medium">
              Anatomy
            </Link>
            <Link to="/about" className="text-navy-light hover:text-blue px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Button variant="outline" className="border-blue text-blue hover:bg-blue-light/10">
              Subscribe
            </Button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-light hover:text-blue hover:bg-offwhite"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-light hover:text-blue hover:bg-offwhite"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-light hover:text-blue hover:bg-offwhite"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/anatomy" 
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-light hover:text-blue hover:bg-offwhite"
              onClick={() => setIsMenuOpen(false)}
            >
              Anatomy
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-light hover:text-blue hover:bg-offwhite"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <Button 
                variant="outline" 
                className="w-full border-blue text-blue hover:bg-blue-light/10"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
