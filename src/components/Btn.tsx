import React from "react";

interface BtnProps {
  children: React.ReactNode;
}

const Btn = ({ children }: BtnProps) => {
  return (
    <a
      href=""
      className="bg-blue-700 px-8 py-4 text-lg rounded-full font-semibold">
      {children}
    </a>
  );
};

export default Btn;
