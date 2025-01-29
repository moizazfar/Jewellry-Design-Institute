import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Modal,
  Fade,
} from "@mui/material";
import { Image, Transformation } from 'cloudinary-react';
import { gsap } from "gsap";

const designCategories = {
  studentWork: [
    {
      id: 1,
      title: "Diamond Ring Design",
      designer: "Sarah Johnson",
      imageId: "bracelet2_lv5lmu",
      description: "CAD design of an intricate diamond engagement ring",
      software: "Matrix",
      year: "2023"
    },
    {
      id: 2,
      title: "Diamond Ring Design",
      designer: "Sarah Johnson",
      imageId: "ring6_cw5glm",
      description: "CAD design of an intricate diamond engagement ring",
      software: "Matrix",
      year: "2023"
    },
    {
      id: 3,
      title: "Diamond Ring Design",
      designer: "Sarah Johnson",
      imageId: "earrings1_xaobk9",
      description: "CAD design of an intricate diamond engagement ring",
      software: "Matrix",
      year: "2023"
    },
    {
      id: 4,
      title: "Diamond Ring Design",
      designer: "Sarah Johnson",
      imageId: "necklace1_d9awvt",
      description: "CAD design of an intricate diamond engagement ring",
      software: "Matrix",
      year: "2023"
    },
    {
      id: 5,
      title: "Diamond Ring Design",
      designer: "Sarah Johnson",
      imageId: "ring1_n7xruk",
      description: "CAD design of an intricate diamond engagement ring",
      software: "Matrix",
      year: "2023"
    },
    {
      id: 6,
      title: "Diamond Ring Design",
      designer: "Sarah Johnson",
      imageId: "necklace_jcxphg",
      description: "CAD design of an intricate diamond engagement ring",
      software: "Matrix",
      year: "2023"
    },
    // Add more student works
  ],
  cad: [
    {
      id: 1,
      title: "Vintage Inspired Ring",
      imageId: "designs/ring1",
      description: "3D CAD model with detailed filigree work",
      software: "Matrix"
    },
    // Add more CAD designs
  ],
  renders: [
    {
      id: 1,
      title: "Sapphire Pendant",
      imageId: "designs/render1",
      description: "Photorealistic render of sapphire and diamond pendant",
      software: "Keyshot"
    },
    // Add more renders
  ],
  sketches: [
    {
      id: 1,
      title: "Bracelet Concept",
      imageId: "designs/sketch1",
      description: "Hand-drawn concept for modern bracelet design",
      medium: "Pencil on paper"
    },
    // Add more sketches
  ]
};

function DesignShowcase() {
  const [category, setCategory] = useState("studentWork");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }
    );
  }, [category]);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: "bold",
            color: "#8B5E34",
            textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)"
          }}
        >
          Design Gallery
        </Typography>

        <Tabs
          value={category}
          onChange={(e, newValue) => setCategory(newValue)}
          centered
          sx={{
            mb: 6,
            "& .MuiTabs-indicator": {
              backgroundColor: "#8B5E34",
            },
            "& .MuiTab-root": {
              color: "rgba(139, 94, 52, 0.7)",
              fontSize: "1.1rem",
              textTransform: "none",
              minWidth: 120,
              "&.Mui-selected": {
                color: "#8B5E34",
                fontWeight: "bold"
              }
            }
          }}
        >
          <Tab value="studentWork" label="Student Work" />
          <Tab value="cad" label="CAD Models" />
          <Tab value="renders" label="Renders" />
          <Tab value="sketches" label="Sketches" />
        </Tabs>

        <Grid container spacing={4}>
          {designCategories[category].map((design, index) => (
            <Grid item xs={12} sm={6} md={4} key={design.id}>
              <Card
                ref={el => cardsRef.current[index] = el}
                onClick={() => setSelectedDesign(design)}
                sx={{
                  cursor: "pointer",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)",
                    "& .cloudinary-image": {
                      transform: "scale(1.1)"
                    }
                  }
                }}
              >
                <Box sx={{ overflow: "hidden", height: 300 }}>
                  <Image
                    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                    publicId={design.imageId}
                    className="cloudinary-image"
                    loading="lazy"
                    width="auto"
                    crop="fill"
                    gravity="center"
                    height="300"
                    quality="auto"
                    fetchFormat="auto"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: "transform 0.3s ease"
                    }}
                  >
                    <Transformation quality="auto" fetchFormat="auto" />
                  </Image>
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#8B5E34",
                      mb: 1
                    }}
                  >
                    {design.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(139, 94, 52, 0.8)"
                    }}
                  >
                    {design.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Design Detail Modal */}
        <Modal
          open={Boolean(selectedDesign)}
          onClose={() => setSelectedDesign(null)}
          closeAfterTransition
        >
          <Fade in={Boolean(selectedDesign)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', sm: '80%', md: '70%' },
                maxHeight: '90vh',
                bgcolor: 'background.paper',
                borderRadius: 4,
                boxShadow: 24,
                p: 4,
                overflow: 'auto'
              }}
            >
              {selectedDesign && (
                <>
                  <Image
                    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                    publicId={selectedDesign.imageId}
                    width="auto"
                    quality="auto"
                    fetchFormat="auto"
                    style={{
                      width: '100%',
                      maxHeight: '60vh',
                      objectFit: 'contain',
                      marginBottom: '24px',
                      borderRadius: '8px'
                    }}
                  >
                    <Transformation quality="auto" fetchFormat="auto" />
                  </Image>
                  <Typography variant="h4" sx={{ color: '#8B5E34', mb: 2 }}>
                    {selectedDesign.title}
                  </Typography>
                  {selectedDesign.designer && (
                    <Typography variant="h6" sx={{ color: '#8B5E34', mb: 1 }}>
                      Designer: {selectedDesign.designer}
                    </Typography>
                  )}
                  <Typography variant="body1" sx={{ color: 'rgba(139, 94, 52, 0.8)' }}>
                    {selectedDesign.description}
                  </Typography>
                  {selectedDesign.software && (
                    <Typography variant="body2" sx={{ mt: 2, color: 'rgba(139, 94, 52, 0.7)' }}>
                      Software used: {selectedDesign.software}
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
}

export default DesignShowcase; 