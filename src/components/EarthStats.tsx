import StatCard from "./StatCard";

const EarthStats = () => {
  return (
    <section className="min-h-[150vh] flex justify-center items-center px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard title="Liquid Water">
            About 71% of Earth's surface is covered by water, mostly in oceans;
            this is essential for life as we know it
          </StatCard>
          <StatCard title="Environment">
            Earth has oceans, forests, mountains, rivers, deserts, and other
            ecosystems, providing countless places for different species to live
            and adapt
          </StatCard>
          <StatCard title="Orbit & Rotation">
            Earth has a nearly circular orbit and a stable rotation on its axis,
            giving regular day-night cycles and a steady supply of light and
            heat
          </StatCard>
        </div>
      </div>
    </section>
  );
};

export default EarthStats;
