import StatCard from "./StatCard";

const EarthStats = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2">
      <StatCard title="Liquid Water">
        About 71% of Earth's surface is covered by water, mostly in oceans; this
        is essential for life as we know it
      </StatCard>
      <StatCard title="Environment">
        Earth has oceans, forests, mountains, rivers, deserts, and other
        ecosystems, providing countless places for different species to live and
        adapt
      </StatCard>
      <StatCard title="Orbit & Rotation">
        Earth has a nearly circular orbit and a stable rotation on its axis,
        giving regular day-night cycles and a steady supply of light and heat
      </StatCard>
    </div>
  );
};

export default EarthStats;
