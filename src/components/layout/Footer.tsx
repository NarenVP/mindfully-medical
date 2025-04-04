
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              Mindfully Medical
            </Link>
            <p className="mt-2 text-sm text-blue-light max-w-md">
              Empowering you with evidence-based health information and wellness tips for a balanced and mindful life.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-offwhite tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-base text-blue-light hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-blue-light hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-blue-light hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-offwhite tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-blue-light hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-light hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-light hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@mindfullymedical.com" className="text-blue-light hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-navy-light pt-8 md:flex md:items-center md:justify-between">
          <div className="text-sm text-blue-light">
            &copy; {currentYear} Mindfully Medical. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-xs text-blue-light hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-blue-light hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
