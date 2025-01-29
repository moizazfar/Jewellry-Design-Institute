import React from "react";
import { Box } from "@mui/material";

const InteractiveSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="/assets/render with details v2.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
          }}
        >
          Discover the Art of Jewelry Making
        </h1>
      </Box>
    </Box>
  );
};

export default InteractiveSection;
