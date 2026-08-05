import type React from "react";

interface DetailProps {
  title: string;
  children: React.ReactNode;
}

const EarthDetail = ({ title, children }: DetailProps) => {
  return (
    <div className="">
      <h3 className="text-3xl text-zinc-50 tracking-wide leading-none mb-2">
        {title}
      </h3>
      <p className="text-xl text-blue-400">{children}</p>
    </div>
  );
};

export default EarthDetail;
