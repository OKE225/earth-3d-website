import EarthDetail from "./EarthDetail";

const EarthInformation = () => {
  return (
    <section className="min-h-[150vh] flex flex-col justify-center w-full px-4 py-12 sm:py-16 md:py-20">
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-libre font-medium text-zinc-50 tracking-wide leading-none mb-6 sm:mb-8">
        EARTH
      </h2>

      <div className="text-neutral-400 font-light text-sm sm:text-base md:text-lg space-y-4 sm:space-y-6 max-w-2xl leading-relaxed">
        <p>
          The Earth is the planet where we live. It is the third planet from the
          Sun and the fifth largest planet in our solar system. It is about 4.5
          billion years old. The Earth is the only known planet with life
          because it has water, air, and the right temperature for living
          things.
        </p>
        <p>
          About 71% of the Earth's surface is covered by water, and the other
          29% is land. There are seven continents and five oceans. The
          continents are home to many countries, cities, forests, mountains,
          deserts, and rivers.
        </p>
        <p>
          The Earth has many different climates. Some places are very hot, while
          others are very cold. There are also many kinds of weather, such as
          rain, snow, wind, and sunshine. Because of these different conditions,
          many kinds of plants and animals can live on Earth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12 sm:mt-16 md:mt-20 w-full max-w-200">
        <EarthDetail title="People">8 300 000 000</EarthDetail>
        <EarthDetail title="Diameter">12 742 km</EarthDetail>
        <EarthDetail title="Temperature">
          -89.2 °C<span className="text-neutral-500 mx-1">/</span>56.7 °C
          <span className="text-neutral-500 mx-1">/</span>14.76 °C
        </EarthDetail>
        <EarthDetail title="Pressure">101.325 kPa</EarthDetail>
      </div>
    </section>
  );
};

export default EarthInformation;
