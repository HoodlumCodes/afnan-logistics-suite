import { useState } from "react";
import { Search, Package, Truck, Plane, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import TrackingMap from "@/components/TrackingMap"; // 👈 use the new map

interface TrackingStatus {
  status: string;
  location: string;
  timestamp: string;
  description: string;
  icon: React.ComponentType<any>;
  completed: boolean;
}

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [currentTracking, setCurrentTracking] = useState<TrackingStatus[] | null>(null);

  const mockTrackingData: { [key: string]: TrackingStatus[] } = {
    "AFN22385": [
      { status: "Package Received", location: "Dubai, UAE", timestamp: "Sept 8, 2025 10:21", description: "Your package has been received at our Dubai facility", icon: Package, completed: true },
      { status: "In Transit", location: "Dubai → Grays, UK", timestamp: "Sept 8, 2025 14:03", description: "Package is on route to Grays via Clipper Courier Services", icon: Plane, completed: true },
      { status: "In Transit", location: "Dubai → Grays, UK", timestamp: "Sept 8, 2025 18:49", description: "Package is on route to Grays via Clipper Courier Services", icon: Plane, completed: true },
    ],
  };

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;

    setIsTracking(true);

    setTimeout(() => {
      const trackingData = mockTrackingData[trackingNumber.toUpperCase()];
      setCurrentTracking(trackingData || null);

      setIsTracking(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };

  return (
    <section className="py-20 px-6 bg-luxury-light">
      <div className="container mx-auto max-w-4xl">
        {/* Tracking Input */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Track Your Shipment</h2>
          <p className="text-luxury-muted mb-8 max-w-2xl mx-auto">
            Enter your tracking number to get real-time updates on your package's journey around the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="relative flex-1">
              <Input
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-12 pl-4 pr-12 text-lg card-shadow border-0 bg-card"
                disabled={isTracking}
              />
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-luxury-muted" />
            </div>
            <Button 
              onClick={handleTrack}
              disabled={isTracking || !trackingNumber.trim()}
              className="h-12 px-8 luxury-gradient text-primary-foreground font-semibold tracking-wide glow-shadow"
            >
              {isTracking ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  TRACKING...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  TRACK
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Live Map */}
        {currentTracking && (
          <div className="mb-12">
            <TrackingMap progress={0.05} /> {/* 👈 Dubai → London at 5% */}
          </div>
        )}

        {/* Tracking Results */}
        {currentTracking && (
          <Card className="card-shadow border-0 card-gradient animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">Tracking: {trackingNumber.toUpperCase()}</h3>
                <div className="flex items-center gap-2 text-sm text-luxury-muted">
                  <MapPin className="h-4 w-4" />
                  Live Tracking
                </div>
              </div>
              
              <div className="space-y-6">
                {currentTracking.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 relative">
                      {index < currentTracking.length - 1 && (
                        <div className="absolute left-6 top-12 w-px h-16 bg-border"></div>
                      )}
                      <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${
                        step.completed 
                          ? "luxury-gradient text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-semibold ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.status}
                          </h4>
                          <span className="text-sm text-luxury-muted">{step.timestamp}</span>
                        </div>
                        <p className="text-sm text-luxury-muted mb-1">{step.location}</p>
                        <p className="text-sm text-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {currentTracking === null && trackingNumber && !isTracking && (
          <Card className="card-shadow border-0 card-gradient animate-fade-in">
            <CardContent className="p-8 text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Tracking Number Not Found</h3>
              <p className="text-luxury-muted">Please check your tracking number and try again.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
