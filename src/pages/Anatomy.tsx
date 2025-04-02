
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SkeletonViewer from '@/components/anatomy/SkeletonViewer';
import { Bone, Info } from 'lucide-react';

const Anatomy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Bone className="h-8 w-8 text-wellness-600 mr-2" />
              <h1 className="text-3xl font-bold text-gray-900">Human Anatomy Explorer</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the human skeletal system. The adult human skeleton consists of 206 bones that provide the structural framework for the body.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <SkeletonViewer />
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-wellness-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Functions of the Skeletal System</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><span className="font-medium">Support:</span> Provides the framework that supports the body and maintains its shape</li>
                <li><span className="font-medium">Protection:</span> Shields vital internal organs from injury</li>
                <li><span className="font-medium">Movement:</span> Works with muscles, tendons, and joints to create movement</li>
                <li><span className="font-medium">Blood cell production:</span> Red and white blood cells are produced in bone marrow</li>
                <li><span className="font-medium">Storage:</span> Stores minerals like calcium and phosphorus</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-wellness-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Types of Bones</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><span className="font-medium">Long bones:</span> Found in limbs (e.g., femur, humerus)</li>
                <li><span className="font-medium">Short bones:</span> Roughly cube-shaped (e.g., wrist and ankle bones)</li>
                <li><span className="font-medium">Flat bones:</span> Thin and curved (e.g., skull bones, ribs, sternum)</li>
                <li><span className="font-medium">Irregular bones:</span> Complex shapes (e.g., vertebrae, hip bones)</li>
                <li><span className="font-medium">Sesamoid bones:</span> Embedded in tendons (e.g., patella)</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Understanding Anatomy Matters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Knowledge of human anatomy helps us understand how our bodies function, move, and respond to treatment.
              This awareness allows for better self-care, injury prevention, and informed health decisions.
              The skeletal system works in harmony with muscles, nerves, and other organ systems to maintain homeostasis
              and enable us to interact with our environment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Anatomy;
