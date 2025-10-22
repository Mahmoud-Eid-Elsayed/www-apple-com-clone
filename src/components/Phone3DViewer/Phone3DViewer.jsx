import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Loader, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Model } from "./3D-iphone-16-scene.jsx"; // استيراد صحيح
import "./Phone3DViewer.css";

// شاشة التحميل
function LoadingScreen() {
  return (
    <Html center>
      <div className="loader-overlay">
        <div className="loader-blur" />
        <div className="loader-content">
          <div className="loader-spinner" />
          <span className="loader-headline-text">
            Click and turn to explore iPhone.
          </span>
        </div>
      </div>
    </Html>
  );
}

export default function Phone3DViewer() {
  return (
    <section className="phone-section">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 10], fov: 36 }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {/* الموديل */}
          <Model scale={3} position={[0, -1, 0]} />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={6}
            maxDistance={16}
            autoRotate
            autoRotateSpeed={0.8}
          />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
            <planeGeometry args={[25, 25]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
          </mesh>

          <Environment preset="night" />
          <EffectComposer>
            <Bloom intensity={0.5} luminanceThreshold={0.8} />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <Loader
        containerStyles={{ background: "#000" }}
        innerStyles={{ background: "#111" }}
        barStyles={{ background: "#fff" }}
        dataStyles={{ color: "#fff" }}
        dataInterpolation={(p) => `${p.toFixed(0)}%`}
      />
    </section>
  );
}