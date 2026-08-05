import React from "react";
import Btn from "./Btn";

const Intro = () => {
  return (
    <div className="h-screen">
      <div className=" flex h-[55vh] flex-col items-center justify-end">
        <p className="text-3xl mb-5 font-light text-neutral-300">
          Our Home in the Cosmos
        </p>
        <h1 className="text-[152px] font-libre font-medium text-zinc-50 tracking-wide leading-none">
          EARTH
        </h1>
        <p className="text-neutral-400 font-light w-175 text-center mt-10 mb-15">
          Earth is our planet, the only known home for humans and countless
          forms of life. It is a world full of oceans, forests, mountains, and
          animals, that has supported life in many forms for billions of years.
        </p>
        <Btn>GET STARTED</Btn>
      </div>
    </div>
  );
};

export default Intro;
