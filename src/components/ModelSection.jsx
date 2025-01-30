import React, { useState, Suspense, useMemo } from "react";
import { Box, Container, Typography, Tabs, Tab, CircularProgress } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODELS = [
  {
    id: "model1",
    label: "Gold Ring",
    url: "v1738146844/an_old_ring_kjqb5w.glb"
  },
  {
    id: "model2",
    label: "Bracelet",
    url: "v1738146815/bracelet_DRACO_a2tngw.glb"
  },
  {
    id: "model3",
    label: "Ring",
    url: "v1738146907/1_i1p9ys.glb"
  },
];

const styles = {
  section: {
    minHeight: "100vh",
    py: 10,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    position: "relative"
  },
  title: {
    textAlign: "center",
    mb: 6,
    fontWeight: "bold",
    color: "#8B5E34",
    textShadow: "2px 2px 4px rgba(139, 94, 52, 0.2)",
  },
  tabs: {
    mb: 6,
    "& .MuiTabs-indicator": {
      backgroundColor: "#8B5E34",
    },
    "& .MuiTab-root": {
      textTransform: "none",
      fontSize: "1.1rem",
      fontWeight: "medium",
      paddingX: 3,
    },
    "& .Mui-selected": {
      color: "#8B5E34 !important",
      fontWeight: "bold",
    },
  },
  modelContainer: {
    height: "600px",
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(139, 94, 52, 0.1)",
    boxShadow: "0 20px 40px rgba(139, 94, 52, 0.15)",
    overflow: "hidden",
    position: "relative",
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

const Model = ({ url }) => {
  const cloudinaryUrl = `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${url}`;
  const { scene } = useGLTF(cloudinaryUrl);

  const memoizedScene = useMemo(() => {
    const clonedScene = scene.clone();
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        Object.assign(child.material, {
          metalness: 1,
          roughness: 0.3,
          emissive: new THREE.Color(0x222222),
          color: new THREE.Color("#D4AF37"),
          emissiveIntensity: 0.5
        });
      }
    });
    return clonedScene;
  }, [scene]);

  return <primitive object={memoizedScene} />;
};

const LoadingSpinner = () => (
  <Box sx={styles.spinner}>
    <CircularProgress sx={{ color: '#8B5E34' }} />
  </Box>
);

const ModelViewer = ({ activeModelUrl }) => (
  <Canvas
    frameloop="demand"
    shadows
    gl={{
      toneMapping: THREE.ACESFilmicToneMapping,
      antialias: true,
    }}
    camera={{
      position: [0, 2, 5],
      fov: 40,
      near: 0.1,
      far: 1000
    }}
  >
    <ambientLight intensity={0.7} />
    <directionalLight
      position={[10, 10, 5]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
    <spotLight
      position={[-10, 10, -5]}
      intensity={0.5}
      angle={0.3}
      penumbra={1}
    />
    <Environment preset="studio" />
    <OrbitControls
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
    <Model url={activeModelUrl} />
  </Canvas>
);

function ModelSection() {
  const [activeModel, setActiveModel] = useState(MODELS[0].id);
  const activeModelUrl = MODELS.find(m => m.id === activeModel).url;

  return (
    <Box id="models" sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={styles.title}>
          Explore Our 3D Jewelry Models
        </Typography>

        <Tabs
          value={activeModel}
          onChange={(e, value) => setActiveModel(value)}
          centered
          sx={styles.tabs}
        >
          {MODELS.map(model => (
            <Tab
              key={model.id}
              value={model.id}
              label={model.label}
              sx={{ "&:hover": { color: "#B8860B" } }}
            />
          ))}
        </Tabs>

        <Box sx={styles.modelContainer}>
          <Suspense fallback={<LoadingSpinner />}>
            <ModelViewer activeModelUrl={activeModelUrl} />
          </Suspense>
        </Box>
      </Container>
    </Box>
  );
}

export default ModelSection;
