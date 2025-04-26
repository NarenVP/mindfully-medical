
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Our Health Blog
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  Welcome to our health and wellness blog dedicated to providing 
                  evidence-based information that empowers you to make informed decisions about your health.
                </p>
                
                <div className="mt-8 text-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-gray-500">
                    As medical professionals, we believe in bridging the gap between conventional medicine and 
                    natural remedies. Our goal is to provide clear, accessible health information that helps you 
                    make personalized healthcare choices.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Our Approach</h3>
                  <p className="mt-2 text-gray-500">
                    We understand that healthcare is not one-size-fits-all. What works for one person may not be 
                    ideal for another. Every article on this site is thoroughly researched and presents multiple 
                    perspectives on treatment options, allowing you to find what might work best for your unique situation.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Topics We Cover</h3>
                  <ul className="mt-2 text-gray-500 list-disc pl-5 space-y-2">
                    <li>Preventive health and wellness</li>
                    <li>Natural remedies with scientific backing</li>
                    <li>Integrative approaches to common health conditions</li>
                    <li>Nutrition and physical activity</li>
                    <li>Mental health and stress management</li>
                    <li>Medical myths and misconceptions</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="relative mx-auto border-gray-200 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
                    <p className="mt-2 text-gray-500">
                      Have a question or suggestion for a topic? We'd love to hear from you!
                    </p>
                    <div className="mt-4">
                      <Button className="w-full bg-wellness-600 hover:bg-wellness-700">
                        Send a Message
                      </Button>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                      Please note: We cannot provide personalized medical advice through this website. 
                      For specific health concerns, please consult with your healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
