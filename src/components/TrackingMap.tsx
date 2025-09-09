import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const TrackingMap = () => {
  const fixedProgress = 0.25; // always 25%

  const dubai = { x: 150, y: 300 };
  const london = { x: 650, y: 100 };

  const pathRef = useRef<SVGPathElement | null>(null);
  const [pos, setPos] = useState({ x: dubai.x, y: dubai.y });

  useEffect(() => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(totalLength * fixedProgress);
      setPos({ x: point.x, y: point.y });
    }
  }, []);

  return (
    <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden p-6">
      <h4 className="text-lg font-semibold mb-4 text-primary">
        Route: Dubai, UAE → Grays, UK
      </h4>

      <svg viewBox="0 0 800 400" className="w-full h-72 sm:h-64 md:h-56">
        {/* Background */}
        <rect width="800" height="400" fill="url(#bgGradient)" rx="12" />

        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5f5f7" />
            <stop offset="100%" stopColor="#e6e9f0" />
          </linearGradient>
          <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b993d6" />
            <stop offset="100%" stopColor="#8ca6db" />
          </linearGradient>
        </defs>

        {/* Route line */}
        <path
          ref={pathRef}
          d={`M${dubai.x},${dubai.y} Q400,50 ${london.x},${london.y}`}
          stroke="url(#routeGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6 6"
        />

        {/* Dubai marker */}
        <circle cx={dubai.x} cy={dubai.y} r="8" fill="#7b4397" />
        <text
          x={dubai.x + 12}
          y={dubai.y + 5}
          className="text-xs font-medium fill-foreground"
        >
          Dubai
        </text>

        {/* London marker */}
        <circle cx={london.x} cy={london.y} r="8" fill="#1f4037" />
        <text
          x={london.x + 12}
          y={london.y + 5}
          className="text-xs font-medium fill-foreground"
        >
          Grays
        </text>

        {/* Blinking tracking dot */}
        <motion.circle
          cx={pos.x}
          cy={pos.y}
          r="14"
          fill="#ff4b2b"
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Glow around the dot */}
        <circle cx={pos.x} cy={pos.y} r="28" fill="rgba(255, 75, 43, 0.2)" />

        {/* Label for 25% point */}
        <text
          x={pos.x + 20}
          y={pos.y + 6}
          className="text-xs font-medium fill-foreground"
        >
          Diyala, Iraq
        </text>
      </svg>
    </div>
  );
};

export default TrackingMap;
