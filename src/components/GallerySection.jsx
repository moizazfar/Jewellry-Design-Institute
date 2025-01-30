import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { Image, Transformation } from 'cloudinary-react';
import { Close as CloseIcon } from "@mui/icons-material";

const GALLERY_IMAGES = [
  {
    imageId: "student_working_j6o5f5",
    alt: "Student Working",
    category: "Training",
  },
  {
    imageId: "field_trip_ezoeov",
    alt: "Field Trip",
    category: "Experience",
  },
  {
    imageId: "bracelet_o60gbb",
    alt: "Bracelet Design",
    category: "Student Work",
  },
  {
    imageId: "certificate_ceremony_k3ecte",
    alt: "Certificate Distribution",
    category: "Ceremony",
  },
  {
    imageId: "CAD_gopz5j",
    alt: "CAD Design",
    category: "Technology",
  },
];

const styles = {
  section: {
    minHeight: "100vh",
    py: 10,
    backgroundColor: "transparent",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    mb: 6,
    color: "#8B5E34",
    textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
  },
  imageContainer: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: 4,
    aspectRatio: "1/1",
    boxShadow: "0px 4px 20px rgba(139, 94, 52, 0.15)",
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0px 8px 25px rgba(139, 94, 52, 0.25)",
      "& .overlay": { opacity: 1 },
      "& .cloudinary-image": { transform: "scale(1.1)" },
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(139, 94, 52, 0.75)",
    opacity: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.4s ease",
    padding: 3,
  },
  dialog: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(139, 94, 52, 0.2)",
  },
  closeButton: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "#8B5E34",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    "&:hover": {
      backgroundColor: "#8B5E34",
      color: "white",
    },
  },
};

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderGalleryImage = (image, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Box onClick={() => setSelectedImage(image)} sx={styles.imageContainer}>
        <Image
          cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
          publicId={image.imageId}
          className="cloudinary-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
          }}
        >
          <Transformation width="400" height="400" crop="fill" quality="auto" />
        </Image>
        <Box className="overlay" sx={styles.overlay}>
          <Typography variant="h5" color="white" fontWeight="bold" sx={{ mb: 1 }}>
            {image.category}
          </Typography>
          <Typography variant="body1" color="white" textAlign="center">
            {image.alt}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );

  const renderDialog = () => (
    <Dialog
      open={Boolean(selectedImage)}
      onClose={() => setSelectedImage(null)}
      maxWidth="lg"
      PaperProps={{ sx: styles.dialog }}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={() => setSelectedImage(null)}
          sx={styles.closeButton}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 4 }}>
          {selectedImage && (
            <Box sx={{ textAlign: "center" }}>
              <Image
                cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                publicId={selectedImage.imageId}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: 8,
                }}
              >
                <Transformation width="1200" crop="scale" quality="auto" />
              </Image>
              <Typography variant="h5" sx={{ mt: 3, color: "#8B5E34", fontWeight: "bold" }}>
                {selectedImage.category}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "#8B5E34", opacity: 0.9 }}>
                {selectedImage.alt}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Box>
    </Dialog>
  );

  return (
    <Box id="gallery" sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={styles.title}>
          Our Gallery
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {GALLERY_IMAGES.map(renderGalleryImage)}
        </Grid>
      </Container>
      {renderDialog()}
    </Box>
  );
}

export default GallerySection;
