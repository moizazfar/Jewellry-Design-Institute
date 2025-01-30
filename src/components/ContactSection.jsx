import React from "react";
import { Button, Container, Typography, Box, Paper } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

const styles = {
  section: {
    backgroundColor: "transparent",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    py: 10
  },
  title: {
    color: "#8B5E34",
    textAlign: "center",
    mb: 3,
    textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
    fontWeight: "bold"
  },
  subtitle: {
    marginBottom: 4,
    textAlign: "center",
    color: "#8B5E34",
    opacity: 0.9
  },
  paper: {
    padding: 6,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 3,
    textAlign: "center",
    border: "1px solid rgba(139, 94, 52, 0.2)",
    backdropFilter: "blur(5px)"
  },
  address: {
    marginBottom: 4,
    color: "#8B5E34",
    fontWeight: "medium"
  },
  contactButtons: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    mb: 5
  },
  contactButton: {
    borderColor: "#8B5E34",
    color: "#8B5E34",
    px: 4,
    py: 1.5,
    "&:hover": {
      backgroundColor: "#8B5E34",
      color: "white",
      borderColor: "#8B5E34",
    },
    transition: "all 0.3s ease"
  },
  enrollButton: {
    backgroundColor: "#8B5E34",
    color: "white",
    px: 6,
    py: 2,
    fontSize: "1.1rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#8B5E34",
      transform: "scale(1.05)",
    },
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(139, 94, 52, 0.3)"
  }
};

const ContactButton = ({ icon, text, onClick }) => (
  <Button
    variant="outlined"
    startIcon={icon}
    sx={styles.contactButton}
    onClick={onClick}
  >
    {text}
  </Button>
);

const ContactSection = () => {
  const handleContact = (type) => {
    const contacts = {
      phone: "tel:03009271758",
      email: "mailto:eleganceilyas@gmail.com"
    };
    window.open(contacts[type]);
  };

  const handleEnroll = () => {
    alert("Enroll Now Clicked!");
  };

  return (
    <Box id="contact" sx={styles.section}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={styles.title}>
          Contact Us
        </Typography>

        <Typography variant="h6" gutterBottom sx={styles.subtitle}>
          Ready to start your journey in jewelry design?
        </Typography>

        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h6" sx={styles.address}>
            Raja Ghaznafar Ali Road, Fatima Manzil,
            <br />2nd Floor, Sadar, Karachi
          </Typography>

          <Box sx={styles.contactButtons}>
            <ContactButton
              icon={<Phone />}
              text="03009271758"
              onClick={() => handleContact('phone')}
            />
            <ContactButton
              icon={<Email />}
              text="eleganceilyas@gmail.com"
              onClick={() => handleContact('email')}
            />
          </Box>

          <Button
            variant="contained"
            size="large"
            sx={styles.enrollButton}
            onClick={handleEnroll}
          >
            Enroll Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection;
