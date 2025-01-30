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
import { Star as StarIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";

const COURSE_DATA = [
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

const styles = {
  section: {
    minHeight: "100vh",
    py: 10,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    mb: 8,
    fontWeight: "bold",
    color: "#8B5E34",
    textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
  },
  cardWrapper: {
    height: "100%",
    transform: "translateY(0)",
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "translateY(-15px)",
    },
  },
  card: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    border: "1px solid rgba(139, 94, 52, 0.1)",
    boxShadow: "0 10px 30px rgba(139, 94, 52, 0.1)",
    transition: "all 0.4s ease",
    "&:hover": {
      boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)",
    },
  },
  cardHeader: {
    backgroundColor: "#8B5E34",
    color: "#fff",
    p: 3,
    textAlign: "center",
  },
  topicsList: {
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
  },
  learnMoreButton: {
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
  }
};

const CourseCard = ({ course, cardRef }) => (
  <Box ref={cardRef} sx={styles.cardWrapper}>
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardHeader}
        title={
          <Typography variant="h5" fontWeight="bold" mb={1}>
            {course.level} Level
          </Typography>
        }
        subheader={
          <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
            {course.duration}
          </Typography>
        }
      />
      <CardContent sx={{ p: 4 }}>
        <Box component="ul" sx={styles.topicsList}>
          {course.topics.map((topic, i) => (
            <li key={i}>
              <StarIcon sx={{ color: "#8B5E34", fontSize: 24, mr: 2, opacity: 0.8 }} />
              {topic}
            </li>
          ))}
        </Box>
        <CardActions sx={{ padding: 0 }}>
          <Button
            fullWidth
            variant="outlined"
            sx={styles.learnMoreButton}
            endIcon={<ChevronRightIcon />}
          >
            Learn More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </Box>
);

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const animations = {
      title: {
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      },
      cards: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
      }
    };

    gsap.fromTo(
      sectionRef.current.querySelector(".section-title"),
      animations.title.from,
      animations.title.to
    );

    gsap.fromTo(cardRefs.current, animations.cards.from, animations.cards.to);
  }, []);

  return (
    <Box id="courses" ref={sectionRef} sx={styles.section}>
      <Container maxWidth="lg">
        <Typography className="section-title" variant="h3" sx={styles.title}>
          Our Courses
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {COURSE_DATA.map((course, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CourseCard
                course={course}
                cardRef={(el) => (cardRefs.current[index] = el)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesSection;
