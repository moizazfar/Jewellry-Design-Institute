import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref, options = {}) => {
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 50,
          ...options.from
        },
        {
          opacity: 1,
          y: 0,
          ...options.to,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            ...options.scrollTrigger
          }
        }
      );
    }
  }, [ref, options]);
}; 