
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import AboutSection from '@/components/home/AboutSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollRunner from '@/components/animations/ScrollRunner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sage-50 to-white">
      <ScrollRunner />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <FeaturedPosts />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
