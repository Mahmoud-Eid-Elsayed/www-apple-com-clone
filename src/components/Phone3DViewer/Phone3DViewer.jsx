import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "./3D-iphone-16-scene.jsx";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      zIndex: 10
    }}>
      <p style={{
        margin: "0 0 20px 0",
        fontSize: "18px",
        fontWeight: 500,
        color: "#fff",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        Click and turn to explore iPhone.
      </p>
      <div style={{
        width: "200px",
        height: "4px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "2px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: "2px",
          transition: "width 0.3s ease"
        }} />
      </div>
    </div>
  );
}

export default function Phone3DViewer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      backgroundColor: "#000"
    }}>
      {isLoading && <LoadingScreen />}

      <Canvas
        camera={{ position: [2, 0, 1.5], fov: 20 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />

          <Model scale={2.8} position={[0, 0, 0]} />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            rotateSpeed={0.5}
          />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}