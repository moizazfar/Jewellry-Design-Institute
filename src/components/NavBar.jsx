import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Image, Transformation } from 'cloudinary-react';

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "design", label: "Design" },
  { id: "gallery", label: "Gallery" },
  { id: "courses", label: "Courses" },
  { id: "contact", label: "Contact Us" },
];

const styles = {
  appBar: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(5px)',
  },
  toolbar: {
    justifyContent: "center",
    gap: 2
  },
  logo: {
    height: 80,
    cursor: 'pointer'
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
    mb: 2
  },
  navButton: {
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
  }
};

const Logo = ({ onClick }) => (
  <Image
    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
    publicId="logo_uldw2n"
    alt="Logo"
    loading="lazy"
    style={styles.logo}
    onClick={onClick}
  >
    <Transformation
      height="80"
      quality="auto"
      fetchFormat="auto"
      crop="scale"
    />
  </Image>
);

const NavButton = ({ item, onClick }) => (
  <Button
    key={item.id}
    onClick={onClick}
    variant="outlined"
    sx={styles.navButton}
  >
    {item.label}
  </Button>
);

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Logo onClick={() => scrollToSection('home')} />
      </Toolbar>
      <Box sx={styles.navContainer}>
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </Box>
    </AppBar>
  );
}

export default NavBar;
