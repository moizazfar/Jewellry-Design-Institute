import React, { useState } from "react";
import { Box, Grid, Card, CardContent, Modal, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Model({ url }) {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#D4AF37" />
    </mesh>
  );
}

function ModelSection() {
  const [open, setOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    { id: 1, name: "Model 1", url: "/model1.glb" },
    { id: 2, name: "Model 2", url: "/model2.glb" },
    // Add more models
  ];

  return (
    <Grid container spacing={4} sx={{ padding: "40px" }}>
      {models.map((model) => (
        <Grid item xs={12} sm={6} md={4} key={model.id}>
          <Card
            sx={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            onClick={() => {
              setSelectedModel(model.url);
              setOpen(true);
            }}
          >
            <CardContent>
              <Typography variant="h6" color="primary">
                {model.name}
              </Typography>
              <Canvas>
                <OrbitControls enableZoom={false} />
                <Model url={model.url} />
              </Canvas>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: "80%", height: "80%", margin: "50px auto" }}>
          <Canvas>
            <OrbitControls />
            <Model url={selectedModel} />
          </Canvas>
        </Box>
      </Modal>
    </Grid>
  );
}

export default ModelSection;
