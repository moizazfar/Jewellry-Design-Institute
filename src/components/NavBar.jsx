import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Image, Transformation } from 'cloudinary-react';

const navItems = [
  { id: "home", label: "Home" },
  { id: "design", label: "Design" },
  { id: "gallery", label: "Gallery" },
  { id: "courses", label: "Courses" },
  { id: "contact", label: "Contact Us" },
  // { title: "Designs", path: "designs" },
];

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Image
          cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
          publicId="logo_uldw2n"
          alt="Logo"
          loading="lazy"
          style={{
            height: 80,
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('home')}
        >
          <Transformation
            height="80"
            quality="auto"
            fetchFormat="auto"
            crop="scale"
          />
        </Image>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 2
        }}
      >
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            variant="outlined"
            sx={{
              borderColor: "#8B5E34",
              color: "#8B5E34",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#8B5E34",
                color: "white",
                transform: "translateY(-2px)",
              },
              "&:active": {
                transform: "translateY(0)",
              }
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
}

export default NavBar;
