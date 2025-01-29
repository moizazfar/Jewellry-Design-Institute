import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import { Diamond, School, Brush } from "@mui/icons-material";
// import { FaGraduationCap, FaPencilAlt } from "react-icons/fa";
import { gsap } from "gsap";

const features = [
  {
    icon: Diamond,
    title: "Professional Training",
    description:
      "Master industry-standard CAD/CAM software for cutting-edge jewelry design.",
  },
  {
    icon: School,
    title: "Certified Courses",
    description:
      "Earn government-recognized certifications to boost your career prospects.",
  },
  {
    icon: Brush,
    title: "Hands-on Practice",
    description:
      "Build an impressive portfolio with real-world design projects.",
  },
];

function FeaturesSection() {
  useEffect(() => {
    gsap.fromTo(
      ".feature-card",
      {
        opacity: 0,
        y: 50,
        rotateY: 45
      },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        position: "relative"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 8,
            fontWeight: "bold",
            color: "#8B5E34",
            textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
          }}
        >
          Why Choose Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            flexWrap: { xs: "wrap", md: "nowrap" },
            px: { xs: 2, md: 4 },
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card"
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: "300px", md: "30%" },
                maxWidth: { xs: "100%", sm: "350px", md: "33%" },
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                border: "1px solid rgba(139, 94, 52, 0.1)",
                overflow: "hidden",
                transition: "all 0.4s ease",
                transform: "translateY(0)",
                "&:hover": {
                  transform: "translateY(-15px)",
                  boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)",
                  "& .icon-container": {
                    transform: "scale(1.1) rotate(5deg)",
                    backgroundColor: "#8B5E34",
                  }
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  className="icon-container"
                  sx={{
                    width: 90,
                    height: 90,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgba(139, 94, 52, 0.9)",
                    boxShadow: "0px 8px 20px rgba(139, 94, 52, 0.2)",
                    mb: 4,
                    transition: "all 0.4s ease",
                  }}
                >
                  {React.createElement(feature.icon, {
                    style: {
                      fontSize: 45,
                      color: "#fff"
                    },
                  })}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#8B5E34",
                    mb: 2,
                    letterSpacing: 0.5,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(139, 94, 52, 0.8)",
                    lineHeight: 1.7,
                    fontSize: "1.1rem"
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
