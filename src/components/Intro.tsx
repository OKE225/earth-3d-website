import Btn from "./Btn";

const Intro = () => {
  return (
    <section className="min-h-[150vh] px-4 py-12 sm:py-16 md:py-20">
      <div className="relative h-[55vh] flex flex-col items-center justify-end px-4">
        <div className="flex flex-col items-center justify-end text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-light text-neutral-300">
            Our Home in the Cosmos
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-libre font-medium text-zinc-50 tracking-wide leading-none mb-6 sm:mb-8 md:mb-10">
            EARTH
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-light max-w-200 mx-auto px-4 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Earth is our planet, the only known home for humans and countless
            forms of life. It is a world full of oceans, forests, mountains, and
            animals, that has supported life in many forms for billions of
            years.
          </p>

          <Btn>GET STARTED</Btn>
        </div>
      </div>
    </section>
  );
};

export default Intro;
