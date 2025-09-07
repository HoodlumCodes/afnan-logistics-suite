import { ArrowRight, Shield, Clock, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import TrackingSection from "@/components/TrackingSection";
import WorldMap from "@/components/WorldMap";
import Footer from "@/components/Footer";
import worldMapImage from "@/assets/world-map-luxury.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.8)), url(${worldMapImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Tracking Your World,
              <br />
              <span className="text-secondary">In Real Time</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Experience luxury-grade logistics with our sophisticated global network. 
              Every shipment tracked with precision and delivered with excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="accent-gradient text-foreground font-semibold tracking-wide px-8 py-4 h-auto glow-shadow">
                START TRACKING
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-secondary hover:text-foreground hover:border-secondary transition-all duration-300 px-8 py-4 h-auto">
                LEARN MORE
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 card-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Secure Delivery</h3>
                  <p className="text-sm opacity-80">End-to-end protection with premium insurance coverage</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 card-shadow">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-sm opacity-80">Live tracking with instant notifications every step</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 card-shadow">
                <CardContent className="p-6 text-center">
                  <Globe2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                  <p className="text-sm opacity-80">Worldwide coverage with local expertise in 150+ countries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <TrackingSection />
      <WorldMap />
      <Footer />
    </div>
  );
};

export default Index;