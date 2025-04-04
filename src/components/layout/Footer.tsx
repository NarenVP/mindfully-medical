
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-sage-50 border-t border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3c293aba-9f50-4e50-b3aa-cecb453d612c.png" 
                alt="Mindfully Medical Logo" 
                className="h-10 mr-3" 
              />
              <span className="text-2xl font-serif font-bold text-wellness-700">Mindfully Medical</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Empowering you with evidence-based health information and wellness tips for a balanced and mindful life.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-wellness-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-600 hover:text-wellness-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-600 hover:text-wellness-600">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-wellness-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wellness-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wellness-600">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@mindfullymedical.com" className="text-gray-500 hover:text-wellness-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-base text-gray-500">
            &copy; {currentYear} Mindfully Medical. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-wellness-600 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-wellness-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
