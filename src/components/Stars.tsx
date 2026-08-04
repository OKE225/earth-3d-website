import { useMemo, useEffect, useState } from "react";

function generateStars(count: number) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() * 100).toFixed(2);
    const y = (Math.random() * 100).toFixed(2);
    shadows.push(`${x}vw ${y}vh #fafafa`);
  }
  return shadows.join(", ");
}

const Stars = () => {
  const [mounted, setMounted] = useState(false);

  const stars1 = useMemo(() => generateStars(700), []);
  const stars2 = useMemo(() => generateStars(200), []);
  const stars3 = useMemo(() => generateStars(100), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-radial-[at_50%_100%] from-slate-900 to-zinc-950 to-75%">
      <div
        className="stars-layer w-[1px] h-[1px] rounded-full"
        style={{ boxShadow: stars1 }}
      />
      <div
        className="stars-layer2 w-[1.5px] h-[1.5px] rounded-full"
        style={{ boxShadow: stars2 }}
      />
      <div
        className="stars-layer3 w-[2px] h-[2px] rounded-full"
        style={{ boxShadow: stars3 }}
      />

      <style>
        {`
        .stars-layer, .stars-layer2, .stars-layer3 {
          position: absolute;
          background: transparent;
        }
        .stars-layer { animation: animStar 50s linear infinite; }
        .stars-layer2 { animation: animStar 100s linear infinite; }
        .stars-layer3 { animation: animStar 150s linear infinite; }

        .stars-layer::after,
        .stars-layer2::after,
        .stars-layer3::after {
          content: " ";
          position: absolute;
          top: 100vh;
          left: 0;
          width: inherit;
          height: inherit;
          background: transparent;
          box-shadow: inherit;
        }

        @keyframes animStar {
          from { transform: translateY(0); }
          to { transform: translateY(-100vh); }
        }
        `}
      </style>
    </div>
  );
};

export default Stars;
