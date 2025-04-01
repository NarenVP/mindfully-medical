
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import AboutSection from '@/components/home/AboutSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sage-50 to-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedPosts />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
