import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Earth from "./components/Earth";
import Stars from "./components/Stars";

const App = () => {
  return (
    <>
      <Stars />

      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={1} />
        <OrbitControls autoRotate autoRotateSpeed={1} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
