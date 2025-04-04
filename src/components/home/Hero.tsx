
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-sage-50 to-healing-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <img 
                      src="/lovable-uploads/3c293aba-9f50-4e50-b3aa-cecb453d612c.png" 
                      alt="Mindfully Medical Logo" 
                      className="h-16 brain-logo" 
                    />
                  </div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                    <span className="block">Health & Wellness</span>
                    <span className="block text-wellness-600">From A Doctor's Perspective</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Evidence-based information to help you make informed health decisions and live your best life. Written by a medical professional who cares.
                  </p>
                  <div className="mt-8 sm:mt-12">
                    <div className="sm:flex justify-start">
                      <div className="rounded-md shadow">
                        <Link to="/blog">
                          <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-wellness-600 hover:bg-wellness-700 md:py-6 md:text-lg md:px-10">
                            Read Latest Articles
                          </Button>
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to="/about">
                          <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-wellness-600 text-wellness-600 hover:bg-wellness-50 md:py-6 md:text-lg md:px-10">
                            About Me
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
