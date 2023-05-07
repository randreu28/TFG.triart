"use client";

import { ShareIcon } from "@heroicons/react/24/outline";
import { Environment, Grid, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useEffect, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import * as THREE from "three";

type Props = {
  url: string;
};

type EnviromentType = React.ComponentProps<typeof Environment>["preset"];

export default function Scene(props: Props) {
  const backgroundProps = useControls("Enviroment", {
    preset: {
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ] satisfies EnviromentType[],
    },
    blur: { value: 0.5, min: 0, max: 1 },
    background: false,
  });

  const gridProps = useControls("Grid", {
    cellColor: "#6f6f6f",
    sectionColor: "#168080",
    visible: false,
  });

  function handleShareButton() {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  }

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#222",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "rgb(0, 184, 166)",
              secondary: "#222",
            },
          },
        }}
      />
      <div className="absolute top-24 left-5 z-20">
        <Leva fill />
      </div>

      <button
        onClick={handleShareButton}
        className="absolute bottom-5 right-5 z-20 flex gap-5 items-center bg-black/50 rounded p-2 hover:bg-teal-900 transition-colors transition-300"
      >
        <ShareIcon className="h-5 w-5" />
        Share
      </button>

      <Canvas color="red">
        <Model {...props} />
        <OrbitControls />
        <Environment {...backgroundProps} />
        <Grid
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          fadeDistance={30}
          {...gridProps}
        />
      </Canvas>
    </>
  );
}

function Model({ url }: Props) {
  const { scene, animations } = useGLTF(url);

  /* Animations controls */
  const { animationClips, defaultAnimationsControls, mixer } = useMemo(() => {
    const mixer = new THREE.AnimationMixer(scene);
    const animationClips: any = [];
    let defaultAnimationsControls: any = {};

    for (let a of animations) {
      let action = mixer.clipAction(a);
      animationClips[a.name] = action;
      defaultAnimationsControls[a.name] = false;
    }

    return { defaultAnimationsControls, animationClips, mixer };
  }, [animations, scene]);

  const [animationsControls, setAnimationsControls] = useControls(
    "Animations",
    () => defaultAnimationsControls
  );

  useEffect(() => {
    for (let clipName in animationClips) {
      if (animationsControls[clipName]) {
        animationClips[clipName].play();
      } else {
        animationClips[clipName].stop();
      }
    }
  }, [animationClips, animationsControls, scene]);

  useEffect(() => {
    if (animations.length) {
      defaultAnimationsControls[animations[0].name] = true;
    }
    setAnimationsControls(defaultAnimationsControls);
  }, [animations, defaultAnimationsControls, setAnimationsControls]);

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  /* Normalize size */
  useEffect(() => {
    const sceneSize = new THREE.Box3()
      .setFromObject(scene)
      .getSize(new THREE.Vector3());
    const maxExtent = Math.max(sceneSize.x, sceneSize.y, sceneSize.z);
    const scale = (1 / maxExtent) * 5;
    scene.scale.set(scale, scale, scale);
  }, [scene]);

  return <primitive object={scene} />;
}
