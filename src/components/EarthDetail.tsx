import type React from "react";

interface DetailProps {
  title: string;
  children: React.ReactNode;
}

const EarthDetail = ({ title, children }: DetailProps) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-zinc-50 tracking-wide leading-none mb-3 sm:mb-4">
        {title}
      </h3>
      <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-light">
        {children}
      </p>
    </div>
  );
};

export default EarthDetail;
