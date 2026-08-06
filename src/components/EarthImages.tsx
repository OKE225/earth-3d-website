import Image from "./Image";
import ocean from "../assets/ocean.jpg";
import forest from "../assets/forest.jpg";
import dubaj from "../assets/dubaj.png";
import northernLights from "../assets/northern_lights.png";
import airport from "../assets/airport.jpg";
import desert from "../assets/desert.jpg";

const EarthImages = () => {
  return (
    <section className="min-h-[150vh] flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Image src={ocean} />
          <Image src={forest} />
          <Image src={dubaj} />
          <Image src={northernLights} />
          <Image src={airport} />
          <Image src={desert} />
        </div>
      </div>
    </section>
  );
};

export default EarthImages;
