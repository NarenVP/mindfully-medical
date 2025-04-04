
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SkeletonViewer from '@/components/anatomy/SkeletonViewer';
import { Bone, Info } from 'lucide-react';

const Anatomy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Bone className="h-8 w-8 text-blue mr-2" />
              <h1 className="text-3xl font-bold text-navy">Human Anatomy Explorer</h1>
            </div>
            <p className="text-lg text-navy-light max-w-2xl mx-auto">
              Explore the human skeletal system. The adult human skeleton consists of 206 bones that provide the structural framework for the body.
              Click on the circular markers to learn more about each part.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="p-6">
              <SkeletonViewer />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-light/20">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-blue mr-2" />
                <h2 className="text-xl font-bold text-navy">Functions of the Skeletal System</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-navy-light">
                <li><span className="font-medium text-navy">Support:</span> Provides the framework that supports the body and maintains its shape</li>
                <li><span className="font-medium text-navy">Protection:</span> Shields vital internal organs from injury</li>
                <li><span className="font-medium text-navy">Movement:</span> Works with muscles, tendons, and joints to create movement</li>
                <li><span className="font-medium text-navy">Blood cell production:</span> Red and white blood cells are produced in bone marrow</li>
                <li><span className="font-medium text-navy">Storage:</span> Stores minerals like calcium and phosphorus</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-light/20">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-blue mr-2" />
                <h2 className="text-xl font-bold text-navy">Types of Bones</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-navy-light">
                <li><span className="font-medium text-navy">Long bones:</span> Found in limbs (e.g., femur, humerus)</li>
                <li><span className="font-medium text-navy">Short bones:</span> Roughly cube-shaped (e.g., wrist and ankle bones)</li>
                <li><span className="font-medium text-navy">Flat bones:</span> Thin and curved (e.g., skull bones, ribs, sternum)</li>
                <li><span className="font-medium text-navy">Irregular bones:</span> Complex shapes (e.g., vertebrae, hip bones)</li>
                <li><span className="font-medium text-navy">Sesamoid bones:</span> Embedded in tendons (e.g., patella)</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Why Understanding Anatomy Matters</h2>
            <p className="text-navy-light max-w-3xl mx-auto">
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
