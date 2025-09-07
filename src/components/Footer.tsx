import { Globe, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-8 w-8 text-secondary" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.2em]">AFNAN</span>
                <span className="text-sm tracking-[0.3em] text-primary-foreground/80 -mt-1">LOGISTICS</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Delivering excellence across the globe with luxury-grade logistics solutions. 
              Your trusted partner for worldwide shipping and real-time tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Express Delivery</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">International Shipping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Freight Solutions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Customs Clearance</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Supply Chain</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Business Bay</div>
                  <div>Dubai, UAE</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+971 4 555 0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">hello@afnanlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Afnan Logistics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">Support Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;