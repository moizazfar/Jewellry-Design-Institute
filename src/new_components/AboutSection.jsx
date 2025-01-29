import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";

function AboutSection() {
  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power4.out" }
    );
  }, []);

  return (
    <Box sx={{ padding: "80px 40px", backgroundColor: "background.default" }}>
      <Typography
        variant="h2"
        className="about-title"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
          mb: 4,
        }}
      >
        Our Story
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            className="about-text"
            sx={{ fontSize: "1.2rem", color: "text.primary" }}
          >
            We are a passionate team of designers dedicated to creating
            exquisite jewelry pieces that blend tradition with modern elegance.
            Each piece is meticulously crafted using the finest materials and
            latest techniques.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="/assets/about-image.jpg"
            alt="About Us"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
