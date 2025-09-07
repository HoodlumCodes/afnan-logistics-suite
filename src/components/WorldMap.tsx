import { useEffect, useRef } from "react";
import { Plane, MapPin } from "lucide-react";

interface MapPin {
  id: string;
  x: number;
  y: number;
  city: string;
  country: string;
  active: boolean;
}

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  const mapPins: MapPin[] = [
    { id: "dubai", x: 70, y: 45, city: "Dubai", country: "UAE", active: true },
    { id: "london", x: 50, y: 25, city: "London", country: "UK", active: true },
    { id: "newyork", x: 20, y: 35, city: "New York", country: "USA", active: true },
    { id: "tokyo", x: 85, y: 30, city: "Tokyo", country: "Japan", active: false },
    { id: "singapore", x: 78, y: 60, city: "Singapore", country: "SG", active: true },
    { id: "frankfurt", x: 52, y: 28, city: "Frankfurt", country: "Germany", active: false },
  ];

  useEffect(() => {
    // Animate shipping routes
    const animateRoutes = () => {
      const routes = [
        { from: mapPins[0], to: mapPins[1] }, // Dubai to London
        { from: mapPins[2], to: mapPins[3] }, // New York to Tokyo
        { from: mapPins[0], to: mapPins[4] }, // Dubai to Singapore
      ];

      routes.forEach((route, index) => {
        setTimeout(() => {
          if (mapRef.current) {
            const routeLine = document.getElementById(`route-${index}`);
            if (routeLine) {
              routeLine.style.strokeDasharray = "1000";
              routeLine.style.strokeDashoffset = "1000";
              routeLine.style.animation = "drawLine 3s ease-in-out forwards";
            }
          }
        }, index * 1000);
      });
    };

    const timer = setTimeout(animateRoutes, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 luxury-gradient text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Network</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Watch live shipments move across our worldwide logistics network in real-time
          </p>
        </div>

        <div ref={mapRef} className="relative w-full h-96 md:h-[500px] bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm">
          {/* World Map SVG */}
          <svg 
            viewBox="0 0 100 60" 
            className="w-full h-full opacity-30"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
          >
            {/* Simplified world map paths */}
            <path
              d="M15,20 L25,18 L35,22 L45,20 L50,18 L55,20 L65,18 L75,22 L85,20 L90,25 L85,30 L75,35 L65,38 L55,35 L45,38 L35,35 L25,38 L15,35 Z"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.2"
            />
            
            {/* Animated shipping routes */}
            <line 
              id="route-0"
              x1={mapPins[0].x} 
              y1={mapPins[0].y} 
              x2={mapPins[1].x} 
              y2={mapPins[1].y} 
              stroke="rgba(255,215,0,0.8)" 
              strokeWidth="0.3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
            <line 
              id="route-1"
              x1={mapPins[2].x} 
              y1={mapPins[2].y} 
              x2={mapPins[3].x} 
              y2={mapPins[3].y} 
              stroke="rgba(255,215,0,0.8)" 
              strokeWidth="0.3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
            <line 
              id="route-2"
              x1={mapPins[0].x} 
              y1={mapPins[0].y} 
              x2={mapPins[4].x} 
              y2={mapPins[4].y} 
              stroke="rgba(255,215,0,0.8)" 
              strokeWidth="0.3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          {/* Map Pins */}
          {mapPins.map((pin, index) => (
            <div
              key={pin.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-scale-in"
              style={{ 
                left: `${pin.x}%`, 
                top: `${pin.y}%`,
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className={`relative group cursor-pointer ${pin.active ? 'animate-pulse-glow' : ''}`}>
                <MapPin 
                  className={`h-6 w-6 ${
                    pin.active 
                      ? 'text-secondary glow-shadow' 
                      : 'text-white/60'
                  }`} 
                />
                {pin.active && (
                  <div className="absolute inset-0 bg-secondary rounded-full opacity-30 animate-ping"></div>
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-card text-card-foreground px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
                    <div className="font-semibold">{pin.city}</div>
                    <div className="text-xs text-muted-foreground">{pin.country}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Flying Planes */}
          <div className="absolute animate-tracking-move" style={{ top: '20%', animationDuration: '8s', animationDelay: '2s' }}>
            <Plane className="h-4 w-4 text-secondary rotate-45" />
          </div>
          <div className="absolute animate-tracking-move" style={{ top: '60%', animationDuration: '12s', animationDelay: '4s' }}>
            <Plane className="h-4 w-4 text-secondary rotate-12" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">150+</div>
            <div className="text-sm opacity-90">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm opacity-90">Live Tracking</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-sm opacity-90">Delivery Success</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">2M+</div>
            <div className="text-sm opacity-90">Shipments Yearly</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WorldMap;