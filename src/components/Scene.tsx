"use client";

import { Environment, Grid, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  url: string;
};

export default function Scene(props: Props) {
  return (
    <Canvas>
      <Model {...props} />
      <OrbitControls />
      <Environment preset="apartment" background blur={0.9} />
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1.5}
        cellColor={"white"}
        sectionColor={"turquoise"}
        fadeDistance={30}
      />
    </Canvas>
  );
}

function Model({ url }: Props) {
  const { scene, animations } = useGLTF(url);

  const mixer = new THREE.AnimationMixer(scene);
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  return (
    <>
      <primitive object={scene} scale={0.4} />
    </>
  );
}
