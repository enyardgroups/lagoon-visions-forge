import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import iso27001Logo from "@/assets/ISO-27001-Certification-Novolyze.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [dnbLogoError, setDnbLogoError] = useState(false);

  const offices = [
    {
      country: "India",
      email: "Info@lagoontechnologies.com",
      phones: ["+91 84288 07007", "04652451814"]
    },
    {
      country: "UAE",
      email: "Info@lagoontechnologies.com",
      phones: ["+971564549360", "+971 50 298 2413"]
    },
    {
      country: "USA",
      email: "Info@lagoontechnologies.com",
      phones: ["+1 913 735 4276"]
    },
    {
      country: "Oman",
      email: "Info@lagoontechnologies.com",
      phones: ["+971564549360"]
    },
    {
      country: "Papua New Guinea",
      email: "Info@lagoontechnologies.com",
      phones: ["+675 77342791"]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Lagoon" className="h-8 w-auto" />
            </div>
            <p className="text-white/80 leading-relaxed">
              Leading software development company in UAE, building innovative 
              enterprise solutions that transform businesses across the Middle East.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Products</h3>
            <div className="space-y-2">
              <Link to="/products/corex" className="block text-white/80 hover:text-primary transition-colors">
                coreX ERP
              </Link>
              <Link to="/products/timetick" className="block text-white/80 hover:text-primary transition-colors">
                Time Tick
              </Link>
              <Link to="/products/safex365" className="block text-white/80 hover:text-primary transition-colors">
                safeX365
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-white/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/career" className="block text-white/80 hover:text-primary transition-colors">
                Career
              </Link>
              <Link to="/blog" className="block text-white/80 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/documentation" className="block text-white/80 hover:text-primary transition-colors">
                Documentation
              </Link>
            </div>
          </div>

          {/* Accreditations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Accreditations</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src={iso27001Logo} 
                  alt="ISO 27001 Certified" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <a 
                href="https://profiles.dunsregistered.com/TPIN-BAS-004.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                {dnbLogoError ? (
                  <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center">
                    <span className="text-white/80 text-sm font-semibold">DUN & Bradstreet</span>
                  </div>
                ) : (
                  <img 
                    src="/accreditations/dun-bradstreet.png" 
                    alt="DUN & Bradstreet Registered" 
                    className="h-12 w-auto object-contain"
                    onError={() => setDnbLogoError(true)}
                  />
                )}
              </a>
            </div>
          </div>
        </div>

        {/* Global Offices Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h3 className="font-semibold text-lg mb-6">Our Global Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-primary">{office.country}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-white/80 hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="space-y-1">
                    {office.phones.map((phone, phoneIndex) => (
                      <div key={phoneIndex} className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-primary transition-colors">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Lagoon Technologies. All rights reserved. Developed by Enyard
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;