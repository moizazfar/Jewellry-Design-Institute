import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

function HeroSection() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        {/* Add your 3D model here */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>
      </Canvas>
      <Box>
        <Typography
          variant="h2"
          className="hero-text"
          sx={{
            fontSize: "3rem",
            color: "primary.main",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Captivating 3D Jewelry Designs
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: "30px",
            px: 4,
            py: 1,
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
