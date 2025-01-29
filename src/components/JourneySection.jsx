import React, { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    year: "2010",
    title: "Our Beginning",
    description: "Started with a vision to transform jewelry education in India",
    icon: SchoolIcon,
    achievement: "Established first design studio"
  },
  {
    year: "2015",
    title: "Innovation in Education",
    description: "Introduced advanced CAD training programs",
    icon: BrushIcon,
    achievement: "500+ students trained"
  },
  {
    year: "2018",
    title: "Industry Integration",
    description: "Partnered with leading jewelry brands",
    icon: DiamondIcon,
    achievement: "90% placement rate"
  },
  {
    year: "2020",
    title: "Excellence Recognition",
    description: "Received national award for design education",
    icon: WorkspacePremiumIcon,
    achievement: "Best Design Institute Award"
  },
  {
    year: "2023",
    title: "Growing Community",
    description: "Building the future of jewelry design",
    icon: PeopleIcon,
    achievement: "1000+ success stories"
  }
];

function JourneySection() {
  const timelineRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 70% 30%, rgba(139, 94, 52, 0.05) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <Container maxWidth="lg">
        <Box ref={textRef}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: "bold",
              color: "#8B5E34",
              textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)"
            }}
          >
            Our Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "rgba(139, 94, 52, 0.8)",
              maxWidth: "800px",
              mx: "auto"
            }}
          >
            From humble beginnings to becoming a leading jewelry design institute,
            our journey has been marked by passion, innovation, and excellence.
          </Typography>
        </Box>

        <Box ref={timelineRef}>
          <Timeline position="alternate">
            {journeySteps.map((step, index) => (
              <TimelineItem key={index} className="timeline-item">
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: "#8B5E34",
                      p: 2
                    }}
                  >
                    <step.icon sx={{ color: "white" }} />
                  </TimelineDot>
                  {index < journeySteps.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: "#8B5E34" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 4,
                      border: "1px solid rgba(139, 94, 52, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)"
                      }
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#8B5E34",
                          fontWeight: "bold",
                          mb: 1
                        }}
                      >
                        {step.year} - {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(139, 94, 52, 0.8)",
                          mb: 2
                        }}
                      >
                        {step.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#8B5E34",
                          fontWeight: "bold"
                        }}
                      >
                        Achievement: {step.achievement}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
}

export default JourneySection; 