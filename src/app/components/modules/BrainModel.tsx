import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Brain() {
  const gltf = useGLTF("/models/brain/scene.gltf");
  return <primitive object={gltf.scene} scale={0.009} />;
}

export default function BrainModel() {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      className={`w-[340px] h-[400px] ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
    >
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Brain />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
