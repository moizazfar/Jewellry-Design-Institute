import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Simple form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    // Send the data to API or backend
    alert("Message Sent!");
  };

  return (
    <Box sx={{ padding: "40px", backgroundColor: "background.default" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        Contact Us
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100%", marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Send Message
      </Button>
    </Box>
  );
}

export default ContactForm;
