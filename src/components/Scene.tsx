import { PerspectiveCamera } from "@react-three/drei";
import Earth from "./Earth.jsx";
import { Suspense } from "react";

const Scene = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 1.25, 2]}
        fov={45}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={2.25} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </>
  );
};

export default Scene;
