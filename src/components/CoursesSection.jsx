import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  CardActions,
  Grid,
  Box,
  Container,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const courseData = [
  {
    level: "Basic",
    duration: "3 Months",
    topics: [
      "Introduction to CAD CAM",
      "Manual sketching",
      "Jewelry design fundamentals",
      "Hands-on CAD projects",
    ],
  },
  {
    level: "Intermediate",
    duration: "6 Months",
    topics: [
      "Advanced CAD tools",
      "Manufacturing preparation",
      "Design validation",
      "Detailed manual drawings",
    ],
  },
  {
    level: "Advanced",
    duration: "1 Year",
    topics: [
      "Complex assembly design",
      "Perspective drawings",
      "Additive manufacturing",
      "Mass customization strategies",
    ],
  },
];

const CardAnimation = ({ children }) => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleMove);
    };
  }, []);

  return <div ref={cardRef}>{children}</div>;
};

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelector(".section-title"),
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      cardRefs.current,
      {
        opacity: 0,
        y: 100,
        rotateX: 45
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3
      }
    );
  }, []);

  return (
    <Box
      id="courses"
      ref={sectionRef}
      sx={{
        minHeight: "100vh",
        py: 10,
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          className="section-title"
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 8,
            fontWeight: "bold",
            color: "#8B5E34",
            textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
          }}
        >
          Our Courses
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {courseData.map((course, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                ref={(el) => (cardRefs.current[index] = el)}
                sx={{
                  height: "100%",
                  transform: "translateY(0)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-15px)",
                  },
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(139, 94, 52, 0.1)",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(139, 94, 52, 0.1)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)",
                    },
                  }}
                >
                  <CardHeader
                    sx={{
                      backgroundColor: "#8B5E34",
                      color: "#fff",
                      p: 3,
                      textAlign: "center",
                    }}
                    title={
                      <Typography variant="h5" fontWeight="bold" mb={1}>
                        {course.level} Level
                      </Typography>
                    }
                    subheader={
                      <Typography
                        variant="h6"
                        sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                      >
                        {course.duration}
                      </Typography>
                    }
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      component="ul"
                      sx={{
                        listStyle: "none",
                        pl: 0,
                        mb: 4,
                        "& li": {
                          display: "flex",
                          alignItems: "center",
                          color: "rgba(139, 94, 52, 0.8)",
                          mb: 2,
                          fontSize: "1.1rem",
                        },
                      }}
                    >
                      {course.topics.map((topic, i) => (
                        <li key={i}>
                          <StarIcon
                            sx={{
                              color: "#8B5E34",
                              fontSize: 24,
                              mr: 2,
                              opacity: 0.8
                            }}
                          />
                          {topic}
                        </li>
                      ))}
                    </Box>
                    <CardActions sx={{ padding: 0 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: "#8B5E34",
                          color: "#8B5E34",
                          py: 1.5,
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          "&:hover": {
                            backgroundColor: "#8B5E34",
                            borderColor: "#8B5E34",
                            color: "white",
                          },
                          transition: "all 0.3s ease",
                        }}
                        endIcon={<ChevronRightIcon />}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesSection;
