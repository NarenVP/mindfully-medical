
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-offwhite overflow-hidden py-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto px-4 sm:px-6">
              <div className="mx-auto sm:text-center lg:text-left">
                <div className="lg:py-24 max-w-xl">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                    <span className="block text-navy">Health & Wellness</span>
                    <span className="block text-blue">From A Doctor's Perspective</span>
                  </h1>
                  <p className="mt-3 text-base text-navy-light sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Evidence-based information to help you make informed health decisions and live your best life. Written by a medical professional who cares.
                  </p>
                  <div className="mt-8 sm:mt-12">
                    <div className="sm:flex sm:justify-start">
                      <div className="rounded-md shadow">
                        <Link to="/blog">
                          <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-navy text-white hover:bg-navy-light md:py-4 md:text-lg md:px-10">
                            Read Latest Articles
                          </Button>
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to="/about">
                          <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-blue text-blue hover:bg-blue/5 md:py-4 md:text-lg md:px-10">
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
      <div className="absolute right-0 top-12 -z-10 transform translate-x-1/3 sm:translate-x-1/4 md:translate-x-0">
        <div className="h-64 w-64 rounded-full bg-blue opacity-10 sm:h-72 sm:w-72 md:h-80 md:w-80"></div>
      </div>
    </div>
  );
};

export default Hero;
