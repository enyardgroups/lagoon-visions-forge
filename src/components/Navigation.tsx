import { type ComponentType, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Clock3,
  FileText,
  Handshake,
  LifeBuoy,
  Menu,
  MonitorCog,
  Shield,
  Users,
  X,
} from "lucide-react";
import logo from "@/assets/logo.png";

type MenuItem = {
  label: string;
  description: string;
  to: string;
  icon: ComponentType<{ className?: string }>;
};

type MenuColumn = {
  heading: string;
  items: MenuItem[];
};

const desktopMenus: Record<"products" | "company" | "resources", MenuColumn[]> = {
  products: [
    {
      heading: "Business Solutions",
      items: [
        { label: "Opex HRMS", description: "Enterprise HR and payroll suite", to: "/products/opex-hrms", icon: BriefcaseBusiness },
        { label: "Time Tick Attendance", description: "Biometric and location-based tracking", to: "/products/timetick-attendance", icon: Clock3 },
      ],
    },
    {
      heading: "Specialized Solutions",
      items: [
        { label: "Vendor Management", description: "Supplier lifecycle and procurement", to: "/products/vendor-management", icon: Handshake },
        { label: "SafeX365 HSE", description: "Compliance, incidents, and audits", to: "/products/safex365-hse", icon: Shield },
      ],
    },
    {
      heading: "Plug-In Solutions",
      items: [
        { label: "API & Integrations", description: "Connect with your current stack", to: "/api-reference", icon: MonitorCog },
        { label: "Support Tools", description: "Monitoring and guided onboarding", to: "/documentation", icon: LifeBuoy },
      ],
    },
  ],
  company: [
    {
      heading: "Company",
      items: [
        { label: "About Us", description: "Our story and leadership", to: "/about", icon: Building2 },
        { label: "Careers", description: "Build with our product teams", to: "/career", icon: Users },
      ],
    },
    {
      heading: "Growth",
      items: [
        { label: "Partners", description: "Alliance and ecosystem programs", to: "/partners", icon: Handshake },
        { label: "Contact", description: "Talk with our experts", to: "/contact", icon: FileText },
      ],
    },
    {
      heading: "Trust",
      items: [
        { label: "Case Studies", description: "Verified enterprise outcomes", to: "/case-studies", icon: BookOpenText },
        { label: "Status Page", description: "Platform uptime and incidents", to: "/status", icon: MonitorCog },
      ],
    },
  ],
  resources: [
    {
      heading: "Resources",
      items: [
        { label: "Documentation", description: "Implementation guides", to: "/documentation", icon: BookOpenText },
        { label: "API Reference", description: "Developer docs and examples", to: "/api-reference", icon: FileText },
      ],
    },
    {
      heading: "Learn",
      items: [
        { label: "Case Studies", description: "ROI and transformation stories", to: "/case-studies", icon: BriefcaseBusiness },
        { label: "Blog", description: "Product insights and updates", to: "/blog", icon: BookOpenText },
      ],
    },
    {
      heading: "Support",
      items: [
        { label: "Help Center", description: "Troubleshooting and FAQs", to: "/support", icon: LifeBuoy },
        { label: "Status Page", description: "Live service health", to: "/status", icon: MonitorCog },
      ],
    },
  ],
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<keyof typeof desktopMenus | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo image only */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Lagoon Technologies"
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>

            {(["products", "company", "resources"] as const).map((menuKey) => (
              <div
                key={menuKey}
                className="relative"
                onMouseEnter={() => setOpenMenu(menuKey)}
                onMouseLeave={() => setOpenMenu((prev) => (prev === menuKey ? null : prev))}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  <span className="capitalize">{menuKey}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openMenu === menuKey && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[860px]">
                    <div className="rounded-2xl border border-black/10 bg-white/95 backdrop-blur-xl p-6 shadow-float">
                      <div className="grid grid-cols-3 gap-6">
                        {desktopMenus[menuKey].map((column) => (
                          <div key={column.heading}>
                            <div className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500 mb-3">
                              {column.heading}
                            </div>
                            <div className="space-y-2">
                              {column.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.label}
                                    to={item.to}
                                    className="group flex items-start gap-3 rounded-xl p-3 hover:bg-primary/5 transition-colors"
                                  >
                                    <div className="h-10 w-10 rounded-full bg-slate-100 group-hover:bg-primary/15 flex items-center justify-center">
                                      <Icon className="w-5 h-5 text-slate-700 group-hover:text-primary" />
                                    </div>
                                    <div>
                                      <div className="font-semibold text-foreground group-hover:text-primary">{item.label}</div>
                                      <div className="text-sm text-muted-foreground">{item.description}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/partners"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Partners
            </Link>

            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="text-muted-foreground text-sm font-medium mb-2">Company</div>
              <Link
                to="/about"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/career"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/partners"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
            </div>
            <div className="px-3 py-2">
              <div className="text-muted-foreground text-sm font-medium mb-2">Products</div>
              <Link
                to="/products/opex-hrms"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Opex HRMS
              </Link>
              <Link
                to="/products/timetick-attendance"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Time Tick Attendance
              </Link>
              <Link
                to="/products/vendor-management"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Vendor Management
              </Link>
              <Link
                to="/products/safex365-hse"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                SafeX365 HSE Solution
              </Link>
            </div>
            <div className="px-3 py-2">
              <div className="text-muted-foreground text-sm font-medium mb-2">Resources</div>
              <Link
                to="/blog"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/documentation"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <Link
                to="/api-reference"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                API Reference
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
            </div>
            <Link
              to="/partners"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;