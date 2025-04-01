
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
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Mindfully Medical
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  Welcome to Mindfully Medical, a health and wellness blog dedicated to providing 
                  evidence-based information that empowers you to make informed decisions about your health.
                </p>
                
                <div className="mt-8 text-lg">
                  <h3 className="text-xl font-semibold text-gray-900">My Mission</h3>
                  <p className="mt-2 text-gray-500">
                    As a medical professional, I believe in bridging the gap between conventional medicine and 
                    natural remedies. My goal is to provide clear, accessible health information that helps you 
                    make personalized healthcare choices.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">My Approach</h3>
                  <p className="mt-2 text-gray-500">
                    I understand that healthcare is not one-size-fits-all. What works for one person may not be 
                    ideal for another. Every article on this site is thoroughly researched and presents multiple 
                    perspectives on treatment options, allowing you to find what might work best for your unique situation.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Topics I Cover</h3>
                  <ul className="mt-2 text-gray-500 list-disc pl-5 space-y-2">
                    <li>Preventive health and wellness</li>
                    <li>Natural remedies with scientific backing</li>
                    <li>Integrative approaches to common health conditions</li>
                    <li>Nutrition and physical activity</li>
                    <li>Mental health and stress management</li>
                    <li>Medical myths and misconceptions</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 lg:mt-0 lg:relative">
                <div className="relative mx-auto border-gray-200 bg-white rounded-lg shadow-md max-w-md lg:max-w-none">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">About Dr. Jayanth V P</h3>
                    <div className="mt-4 flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                          alt="Dr. Jayanth V P"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Medical Professional</p>
                        <p className="text-sm text-gray-500">25 years old</p>
                      </div>
                    </div>
                    <div className="mt-4 text-gray-500">
                      <p>
                        I'm Dr. Jayanth V P, a student of medicine with a particular interest in natural 
                        remedies and their integration into medical science. With two years of experience in 
                        the field, I'm passionate about exploring the vast landscape of healthcare and 
                        complementary medicine.
                      </p>
                      <p className="mt-3">
                        My philosophy is simple: there is no universal "right medication" that works for everyone. 
                        Each person's body responds differently to treatments, and what provides relief for one 
                        patient might not be the optimal solution for another. This understanding guides my approach 
                        to health education.
                      </p>
                      <p className="mt-3">
                        Through this blog, I aim to share balanced, evidence-based information that considers both 
                        conventional medicine and alternative approaches, helping you make informed decisions about 
                        your health journey.
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-900">Background:</p>
                      <ul className="mt-2 text-sm text-gray-500 list-disc pl-5 space-y-1">
                        <li>Medical education with focus on integrative approaches</li>
                        <li>2 years of experience in healthcare</li>
                        <li>Specialization in natural remedies and their scientific basis</li>
                        <li>Committed to personalized healthcare education</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative mx-auto border-gray-200 bg-white rounded-lg shadow-md mt-6 max-w-md lg:max-w-none">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Contact Me</h3>
                    <p className="mt-2 text-gray-500">
                      Have a question or suggestion for a topic? I'd love to hear from you!
                    </p>
                    <div className="mt-4">
                      <Button className="w-full bg-wellness-600 hover:bg-wellness-700">
                        Send a Message
                      </Button>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                      Please note: I cannot provide personalized medical advice through this website. 
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
