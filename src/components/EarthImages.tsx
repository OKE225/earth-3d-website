import Image from "./Image";
import ocean from "../assets/ocean.jpg";
import forest from "../assets/forest.jpg";
import dubaj from "../assets/dubaj.png";
import northernLights from "../assets/northern_lights.png";
import airport from "../assets/airport.jpg";
import desert from "../assets/desert.jpg";

const EarthImages = () => {
  return (
    <div className="bg-orange-500/40 h-screen flex items-end">
      <div className=" grid grid-cols-3 gap-2">
        <Image src={ocean} />
        <Image src={forest} />
        <Image src={dubaj} />
        <Image src={northernLights} />
        <Image src={airport} />
        <Image src={desert} />
      </div>
    </div>
  );
};

export default EarthImages;
