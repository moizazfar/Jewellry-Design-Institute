import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Button,
  Modal,
  Fade
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import BrushIcon from '@mui/icons-material/Brush';
import Computer3dIcon from '@mui/icons-material/Computer';
import DiamondIcon from '@mui/icons-material/Diamond';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignShowcase from './DesignShowcase';
import CloseIcon from '@mui/icons-material/Close';
import { Video } from 'cloudinary-react';

gsap.registerPlugin(ScrollTrigger);

const designSteps = [
  {
    title: "Sketching",
    description: "Master traditional jewelry sketching techniques with professional guidance",
    icon: BrushIcon,
  },
  {
    title: "CAD Design",
    description: "Learn industry-standard CAD software for precise 3D modeling",
    icon: Computer3dIcon,
  },
  {
    title: "Rendering",
    description: "Create photorealistic renders of your jewelry designs",
    icon: DiamondIcon,
  },
  {
    title: "Production",
    description: "Understand manufacturing processes and production techniques",
    icon: BuildIcon,
  }
];

function DesignSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [showDesigns, setShowDesigns] = useState(false);

  useEffect(() => {
    // Parallax effect for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 100,
          rotation: 5
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Video reveal animation
    gsap.fromTo(videoContainerRef.current,
      {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0
      },
      {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Box
      ref={sectionRef}
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
          background: "radial-gradient(circle at 30% 30%, rgba(139, 94, 52, 0.05) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 8,
            fontWeight: "bold",
            color: "#8B5E34",
            textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)"
          }}
        >
          Our Design Process
        </Typography>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {designSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                ref={el => cardsRef.current[index] = el}
                sx={{
                  height: '100%',
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
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <step.icon
                    sx={{
                      fontSize: 50,
                      color: "#8B5E34",
                      mb: 2
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#8B5E34",
                      mb: 2
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(139, 94, 52, 0.8)",
                      lineHeight: 1.7
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Add this button section before the video */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 8
          }}
        >
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setShowDesigns(true)}
            sx={{
              borderColor: "#8B5E34",
              color: "#8B5E34",
              borderWidth: 2,
              px: 6,
              py: 2,
              fontSize: "1.1rem",
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
          >
            Explore Our Designs
          </Button>
        </Box>

        {/* Video Section */}
        <Box
          ref={videoContainerRef}
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)",
            aspectRatio: "16/9",
          }}
        >
          <Video
            cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
            publicId="render_with_details_v2_riwu1h"
            controls
            innerRef={videoRef}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
          </Video>

          <IconButton
            onClick={toggleVideo}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(139, 94, 52, 0.9)",
              "&:hover": {
                backgroundColor: "#8B5E34",
              },
              width: 80,
              height: 80,
              "& svg": {
                fontSize: 40,
                color: "white"
              },
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
                backgroundColor: "#8B5E34",
              }
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Box>

        {/* Add the Designs Modal */}
        <Modal
          open={showDesigns}
          onClose={() => setShowDesigns(false)}
          closeAfterTransition
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Fade in={showDesigns}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                bgcolor: 'background.paper',
                overflow: 'auto'
              }}
            >
              <IconButton
                onClick={() => setShowDesigns(false)}
                sx={{
                  position: 'fixed',
                  right: 20,
                  top: 20,
                  zIndex: 2000,
                  bgcolor: 'rgba(139, 94, 52, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(139, 94, 52, 0.2)'
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
              <DesignShowcase />
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
}

export default DesignSection;
