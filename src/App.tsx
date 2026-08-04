import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Earth from "./components/Earth.jsx";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "./components/Stars";

const App = () => {
  return (
    <div className="relative min-h-screen">
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
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="relative z-10 flex h-[50vh] flex-col items-center justify-end">
        <p className="text-3xl mb-8 font-light text-neutral-400">
          Our Home in the Cosmos
        </p>
        <h1 className="text-[152px] font-libre font-medium text-zinc-50 tracking-wide leading-none">
          EARTH
        </h1>
      </div>
    </div>
  );
};

export default App;
