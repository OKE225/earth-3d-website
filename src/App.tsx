import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Earth from "./components/Earth.jsx";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "./components/Stars";
import Intro from "./components/Intro.js";
import EarthImages from "./components/EarthImages.js";
import EarthInformation from "./components/EarthInformation.js";
import EarthStats from "./components/EarthStats.js";

const App = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <Stars />
        <div className="h-full w-full">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              position={[0, 0.8, 1.5]}
              fov={45}
              near={0.1}
              far={1000}
            />
            <ambientLight intensity={2.25} />
            <OrbitControls
              enableDamping={false}
              enablePan={false}
              enableRotate={false}
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              target={[0, 1.25, 0]}
            />
            <Suspense fallback={null}>{/* <Earth /> */}</Suspense>
          </Canvas>
        </div>
      </div>

      <main className="max-w-[1500px] mx-auto">
        <Intro />

        <EarthImages />

        <EarthInformation />

        <EarthStats />
      </main>
    </div>
  );
};

export default App;
