
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SkeletonViewer from '@/components/anatomy/SkeletonViewer';
import { bone } from 'lucide-react';

const Anatomy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <bone className="h-8 w-8 text-wellness-600 mr-2" />
              <h1 className="text-3xl font-bold text-gray-900">Human Anatomy Explorer</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the human skeletal system. Click on different parts of the skeleton to learn about bones and joints.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <SkeletonViewer />
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Understanding Anatomy Matters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Knowledge of human anatomy helps us understand how our bodies function, move, and respond to treatment.
              This awareness allows for better self-care, injury prevention, and informed health decisions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Anatomy;
