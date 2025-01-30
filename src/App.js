import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import DecorativeElements from "./components/DecorativeElements";
import HeroSection from "./components/HeroSection";
import DesignSection from "./components/DesignSection";
// import JourneySection from "./components/JourneySection";
// import DesignShowcase from "./components/DesignShowcase";
import ContactSection from './components/ContactSection';
import GallerySection from './components/GallerySection';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import ModelSection from "./components/ModelSection";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
// import DesignShowcaseSection from './components/DesignShowcaseSection';

gsap.registerPlugin(ScrollTrigger);

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  useEffect(() => {
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach((section, i) => {
      gsap.fromTo(section,
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effect for decorative elements
    gsap.utils.toArray('.decorative-elements .shape').forEach((shape) => {
      gsap.to(shape, {
        y: -50,
        scrollTrigger: {
          trigger: shape,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });
  }, []);

  return (
    <PageTransition>
      <div>
        <NavBar />
        <DecorativeElements />

        <section id="home">
          <HeroSection />
          {/* Add other home content components here */}
        </section>

        <section id="design">
          <DesignSection />
        </section>

        //<section id="journey">
          //<JourneySection />
       // </section>

{/* 
        <section id="design-showcase">
          <DesignShowcaseSection />
        </section> */}

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="models">
          <ModelSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="courses">
          <CoursesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </PageTransition>
  );
}

export default App;
