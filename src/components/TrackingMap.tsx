import { useRef, useEffect, useState } from "react";

interface TrackingMapProps {
  progress?: number; // 0 → start at Dubai, 1 → arrived in London
}

const TrackingMap = ({ progress = 0.05 }: TrackingMapProps) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [trackerPos, setTrackerPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(pathLength * progress);

      setTrackerPos({ x: point.x, y: point.y });
    }
  }, [progress]);

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm">
      <svg viewBox="0 0 100 60" className="w-full h-full opacity-80">
        {/* World background (simplified) */}
        <path
          d="M15,20 L25,18 L35,22 L45,20 L50,18 L55,20 L65,18 L75,22 L85,20 L90,25 L85,30 L75,35 L65,38 L55,35 L45,38 L35,35 L25,38 L15,35 Z"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.2"
        />

        {/* Dubai → London curved route */}
        <path
          ref={pathRef}
          d="M70,45 Q60,20 50,25" // 👈 Dubai (70,45) → London (50,25) with curve
          stroke="gold"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Tracker circle (blinking) */}
        <circle
          cx={trackerPos.x}
          cy={trackerPos.y}
          r="1.5"
          fill="gold"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};

export default TrackingMap;