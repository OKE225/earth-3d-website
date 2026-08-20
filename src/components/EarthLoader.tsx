import { Html, useProgress } from "@react-three/drei";

const EarthLoader = () => {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <section className="pointer-events-none absolute bottom-25 left-1/2 w-fit -translate-x-1/2 sm:bottom-30 animate-bounce">
        <div className="relative min-w-72 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 px-6 py-5 text-white shadow-lg shadow-blue-950/30 backdrop-blur-sm sm:min-w-80 sm:px-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center justify-between gap-5">
              <p className="text-xl font-semibold text-zinc-50">
                Earth Loading
              </p>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-lg shadow-inner shadow-blue-500/10">
                🌍
              </div>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full border border-slate-700/50 bg-slate-950/40">
              <div
                className="h-full rounded-full bg-linear-to-r from-blue-600 via-blue-400 to-cyan-300 shadow-[0_0_12px_rgba(96,165,250,0.7)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-neutral-300">Preparing the 3D model</p>

              <p className="text-sm font-semibold text-blue-400">
                {Math.round(progress)}%
              </p>
            </div>
          </div>
        </div>
      </section>
    </Html>
  );
};

export default EarthLoader;
