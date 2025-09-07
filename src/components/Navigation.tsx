import { Globe, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Globe className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.2em] text-primary">AFNAN</span>
              <span className="text-xs tracking-[0.3em] text-luxury-muted -mt-1">LOGISTICS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm tracking-wide font-medium hover:text-primary transition-colors duration-300 relative group">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 accent-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm tracking-wide font-medium hover:text-primary transition-colors duration-300 relative group">
              TRACKING
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 accent-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm tracking-wide font-medium hover:text-primary transition-colors duration-300 relative group">
              SERVICES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 accent-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm tracking-wide font-medium hover:text-primary transition-colors duration-300 relative group">
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 accent-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm tracking-wide font-medium hover:text-primary transition-colors duration-300 relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 accent-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button className="hidden md:flex accent-gradient text-foreground font-medium tracking-wide glow-shadow">
              TRACK NOW
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;