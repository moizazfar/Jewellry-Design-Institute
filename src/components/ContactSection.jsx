import React from "react";
import { Button, Container, Typography, Box, Paper } from "@mui/material";

const ContactSection = () => {
  return (
    <Box 
      id="contact" 
      py={10} 
      sx={{ 
        backgroundColor: "transparent",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative"
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ 
            color: "#8B5E34",
            textAlign: "center",
            mb: 3,
            textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)"
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ 
            marginBottom: 4, 
            textAlign: "center",
            color: "#8B5E34",
            opacity: 0.9
          }}
        >
          Ready to start your journey in jewelry design?
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: 6,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: 3,
            textAlign: "center",
            border: "1px solid rgba(139, 94, 52, 0.2)",
            backdropFilter: "blur(5px)"
          }}
        >
          <Typography
            variant="h6"
            sx={{ 
              marginBottom: 4,
              color: "#8B5E34",
              fontWeight: "medium"
            }}
          >
            Raja Ghaznafar Ali Road, Fatima Manzil,
            <br />2nd Floor, Sadar, Karachi
          </Typography>
          
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={3}
            mb={5}
          >
            {/* Phone Button */}
            <Button
              variant="outlined"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  style={{ height: 20, width: 20 }}
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              }
              sx={{
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
              }}
              onClick={() => window.open("tel:03009271758")}
            >
              03009271758
            </Button>

            {/* Email Button */}
            <Button
              variant="outlined"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  style={{ height: 20, width: 20 }}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
              sx={{
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
              }}
              onClick={() => window.open("mailto:eleganceilyas@gmail.com")}
            >
              eleganceilyas@gmail.com
            </Button>
          </Box>

          {/* Enroll Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
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
            }}
            onClick={() => alert("Enroll Now Clicked!")}
          >
            Enroll Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection;
