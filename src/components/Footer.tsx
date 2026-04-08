import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import iso27001Logo from "@/assets/ISO-27001-Certification-Novolyze.png";
import dnbWordmarkLogo from "@/assets/DnB_WORDMARK_RGB_Full-Color.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      phones: ["+1 913 735 4276", "+91 84288 07007"]
    },
    {
      country: "Oman",
      email: "Info@lagoontechnologies.com",
      phones: ["+971564549360", "+91 84288 07007"]
    },
    {
      country: "Papua New Guinea",
      email: "Info@lagoontechnologies.com",
      phones: ["+675 77342791", "+91 84288 07007"]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Lagoon" className="h-8 w-auto" />
            </div>
            <p className="text-white/80 leading-relaxed">
              Lagoon delivers enterprise-ready operational platforms for HR, attendance,
              vendor workflows, and HSE compliance across global teams.
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
              <Link to="/products/opex-hrms" className="block text-white/80 hover:text-primary transition-colors">
                Opex HRMS
              </Link>
              <Link to="/products/timetick-attendance" className="block text-white/80 hover:text-primary transition-colors">
                Time Tick Attendance
              </Link>
              <Link to="/products/vendor-management" className="block text-white/80 hover:text-primary transition-colors">
                Vendor Management
              </Link>
              <Link to="/products/safex365-hse" className="block text-white/80 hover:text-primary transition-colors">
                SafeX365 HSE Solution
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
                Careers
              </Link>
              <Link to="/partners" className="block text-white/80 hover:text-primary transition-colors">
                Partners
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2">
              <Link to="/documentation" className="block text-white/80 hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link to="/api-reference" className="block text-white/80 hover:text-primary transition-colors">
                API Reference
              </Link>
              <Link to="/case-studies" className="block text-white/80 hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link to="/status" className="block text-white/80 hover:text-primary transition-colors">
                Status Page
              </Link>
            </div>
          </div>

          {/* Accreditations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Accreditations</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src={iso27001Logo} 
                  alt="ISO 27001 Certified" 
                  className="h-14 w-auto object-contain bg-white rounded-lg p-1"
                />
                <img
                  src={dnbWordmarkLogo}
                  alt="Dun and Bradstreet"
                  className="h-14 w-auto object-contain bg-white rounded-lg p-2"
                />
              </div>
              <a
                href="https://profiles.dunsregistered.com/TPIN-BAS-004.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-primary transition-colors"
              >
                Verify D-U-N-S registration
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