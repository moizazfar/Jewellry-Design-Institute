import React, { useRef, useEffect } from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function HeroSection() {
  const containerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const decorativeRingsRef = useRef();

  useEffect(() => {
    // Create decorative rings
    const rings = [];
    for (let i = 0; i < 20; i++) {
      const ring = document.createElement('div');
      ring.className = 'decorative-ring';
      ring.style.cssText = `
        position: absolute;
        border: 2px solid rgba(139, 94, 52, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
      `;
      decorativeRingsRef.current.appendChild(ring);
      rings.push(ring);
    }

    // Animate rings
    rings.forEach((ring, i) => {
      const size = Math.random() * 200 + 50;
      gsap.set(ring, {
        width: size,
        height: size,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360
      });

      gsap.to(ring, {
        x: '+=100',
        y: '+=100',
        rotation: '+=360',
        duration: Math.random() * 10 + 10,
        repeat: -1,
        ease: 'none'
      });
    });

    // Main content animation
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        scale: 0.9,
        y: 50 
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }
    )
    .fromTo(
      subtitleRef.current,
      { 
        opacity: 0,
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      },
      "-=1"
    )
    .fromTo(
      buttonRef.current,
      { 
        opacity: 0,
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.8"
    );

    // Mouse movement effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(decorativeRingsRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: "80px"
      }}
    >
      {/* Decorative Background */}
      <Box
        ref={decorativeRingsRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.95) 70%)",
          zIndex: 2
        }}
      />

      {/* Content */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: "relative",
          zIndex: 3,
          textAlign: "center"
        }}
      >
        <Typography
          ref={titleRef}
          variant="h1"
          sx={{
            fontWeight: 800,
            color: "#8B5E34",
            textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            background: "linear-gradient(45deg, #8B5E34 30%, #B87333 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Craft Your Dreams<br />in Precious Metal
        </Typography>

        <Typography
          ref={subtitleRef}
          variant="h4"
          sx={{
            color: "#8B5E34",
            opacity: 0.9,
            mb: 6,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            fontWeight: 400
          }}
        >
          Transform Your Passion for Jewelry into Professional Mastery
        </Typography>

        <Button
          ref={buttonRef}
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#8B5E34",
            color: "#8B5E34",
            borderWidth: 2,
            px: 6,
            py: 2,
            fontSize: "1.2rem",
            fontWeight: "bold",
            "&:hover": {
              borderWidth: 2,
              backgroundColor: "#8B5E34",
              borderColor: "#8B5E34",
              color: "white",
              transform: "translateY(-5px)",
              boxShadow: "0 10px 20px rgba(139, 94, 52, 0.2)"
            },
            transition: "all 0.3s ease"
          }}
          onClick={() => {
            document.getElementById('courses').scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          Begin Your Journey
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
