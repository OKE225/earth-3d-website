import React from "react";

interface BtnProps {
  children: React.ReactNode;
}

const Btn = ({ children }: BtnProps) => {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-zinc-50 
                 hover:bg-slate-700/70 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 
                 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent">
      {children}
    </a>
  );
};

export default Btn;
