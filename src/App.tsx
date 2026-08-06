import { Canvas } from "@react-three/fiber";
import Stars from "./components/Stars";
import Intro from "./components/Intro.js";
import EarthImages from "./components/EarthImages.js";
import EarthInformation from "./components/EarthInformation.js";
import EarthStats from "./components/EarthStats.js";
import Scene from "./components/Scene.js";

const App = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <Stars />
        <div className="h-full w-full">
          <Canvas>
            <Scene />
          </Canvas>
        </div>
      </div>

      <main className="max-w-375 mx-auto relative z-10">
        <Intro />
        <EarthImages />
        <EarthInformation />
        <EarthStats />
      </main>
    </div>
  );
};

export default App;
