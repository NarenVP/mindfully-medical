
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollTrigger = () => {
  useEffect(() => {
    // Create scroll-based animations
    const scrollTriggers = ScrollTrigger.getAll();
    
    // On component unmount, kill all scroll triggers to prevent memory leaks
    return () => {
      scrollTriggers.forEach(trigger => trigger.kill());
    };
  }, []);
};

export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
