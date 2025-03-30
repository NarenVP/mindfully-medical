
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
                    As a medical professional, I've seen firsthand how confusing health information can be. 
                    My goal is to bridge the gap between medical research and everyday understanding, providing
                    you with clear, accurate, and practical health information.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">My Approach</h3>
                  <p className="mt-2 text-gray-500">
                    Every article on this site is thoroughly researched and based on current medical evidence. 
                    I strive to present complex information in an accessible way, without oversimplifying or 
                    sensationalizing health topics.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Topics I Cover</h3>
                  <ul className="mt-2 text-gray-500 list-disc pl-5 space-y-2">
                    <li>Preventive health and wellness</li>
                    <li>Nutrition and physical activity</li>
                    <li>Mental health and stress management</li>
                    <li>Sleep health</li>
                    <li>Common health conditions</li>
                    <li>Medical myths and misconceptions</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 lg:mt-0 lg:relative">
                <div className="relative mx-auto border-gray-200 bg-white rounded-lg shadow-md max-w-md lg:max-w-none">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">About Dr. Sarah Johnson</h3>
                    <div className="mt-4 flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                          alt="Dr. Sarah Johnson"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Board-Certified Physician</p>
                        <p className="text-sm text-gray-500">MD, MPH</p>
                      </div>
                    </div>
                    <div className="mt-4 text-gray-500">
                      <p>
                        I've been practicing medicine for over 10 years, specializing in preventive care 
                        and health education. My passion is helping people understand their health and 
                        make informed choices that lead to better outcomes.
                      </p>
                      <p className="mt-3">
                        In addition to my medical practice, I have a Master's degree in Public Health 
                        with a focus on health communication and education.
                      </p>
                      <p className="mt-3">
                        When I'm not seeing patients or writing, you might find me hiking with my dog, 
                        practicing yoga, or experimenting with new healthy recipes in my kitchen.
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-900">Credentials:</p>
                      <ul className="mt-2 text-sm text-gray-500 list-disc pl-5 space-y-1">
                        <li>Doctor of Medicine (MD)</li>
                        <li>Master of Public Health (MPH)</li>
                        <li>Board Certification in Internal Medicine</li>
                        <li>Fellow of the American College of Physicians</li>
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
