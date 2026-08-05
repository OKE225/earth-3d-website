interface StatCardProps {
  title: string;
  children: React.ReactNode;
}

const StatCard = ({ title, children }: StatCardProps) => {
  return (
    <div className="w-100 bg-cyan-800 px-6 py-8 rounded-xl">
      <h3 className="text-4xl text-zinc-50 tracking-wide leading-none mb-8">
        {title}
      </h3>
      <p className="text-xl text-neutral-300 h-50">{children}</p>
    </div>
  );
};

export default StatCard;
