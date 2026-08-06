interface StatCardProps {
  title: string;
  children: React.ReactNode;
}

const StatCard = ({ title, children }: StatCardProps) => {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 px-6 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 rounded-xl sm:rounded-2xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-zinc-50 tracking-wide leading-none mb-6 sm:mb-8">
        {title}
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default StatCard;
