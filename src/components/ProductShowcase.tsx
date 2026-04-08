import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: "01",
    label: "HRMS & Payroll",
    title: "Opex HRMS",
    subtitle: "Management",
    description:
      "Automate payroll, statutory compliance, employee lifecycle, and HR analytics - multi-entity and multi-currency ready.",
    tags: ["Payroll", "Compliance", "Self-Service", "Analytics", "Lifecycle"],
    icon: BriefcaseBusiness,
    surface: "bg-white",
  },
  {
    id: "02",
    label: "Attendance & Time",
    title: "Time Tick Attendance",
    subtitle: "Management",
    description:
      "Real-time workforce tracking with biometrics, geo-fencing, shift scheduling, and leave management in one dashboard.",
    tags: ["Biometric", "Geo-Fence", "Shifts", "Live Tracking", "Leave"],
    icon: Clock3,
    surface: "bg-[#f3fbff]",
  },
  {
    id: "03",
    label: "Vendor & Procurement",
    title: "Vendor Management",
    subtitle: "System",
    description:
      "Streamline vendor onboarding, PO automation, contract lifecycle, and AI-driven performance scorecards.",
    tags: ["KYC", "PO Automation", "Scorecards", "Contracts", "SLA"],
    icon: Handshake,
    surface: "bg-white",
  },
  {
    id: "04",
    label: "HSE & Safety",
    title: "SafeX365",
    subtitle: "HSE Solution",
    description:
      "ISO 45001-ready Health, Safety & Environment platform for incidents, permits, audits, and risk management.",
    tags: ["Incidents", "Permit-to-Work", "ISO 45001", "Audits", "Risk Matrix"],
    icon: ShieldCheck,
    surface: "bg-[#12356f] text-white",
  },
];

const ProductShowcase = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTick((prev) => prev + 1);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-blob parallax-mid w-72 h-72 bg-gradient-to-r from-lime-300 to-emerald-300 top-8 right-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-block text-sm font-medium text-primary mb-4">Product Suite</div>
            <h2 className="text-h2 font-bold text-foreground leading-tight">
              Four Modules.
              <span className="block hero-gradient">One Platform.</span>
            </h2>
          </div>
          <div className="max-w-md text-muted-foreground">
            Deploy each module independently or as a fully integrated suite. Built
            for scale, designed for simplicity.
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary text-white px-5 py-3 font-semibold">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl border border-black/10 bg-white">
          {products.map((product, idx) => {
            const Icon = product.icon;
            const dark = product.surface.includes("text-white");
            const borderClasses = idx < 2 ? "border-b md:border-b-0 md:border-r" : "md:border-r";

            return (
              <div
                key={product.id}
                className={`relative min-h-[295px] p-8 ${borderClasses} last:border-r-0 border-black/10 ${product.surface} transition-all duration-500 hover:translate-y-[-2px]`}
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[44px] border-l-transparent border-t-[44px] border-t-black/5" />
                <div className={`text-xs uppercase tracking-[0.18em] font-semibold mb-5 ${dark ? "text-white/70" : "text-slate-500"}`}>
                  {product.id} - {product.label}
                </div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${dark ? "bg-white/10" : "bg-primary/10"}`}>
                  <Icon className={`w-5 h-5 ${dark ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className={`text-4xl leading-[0.95] font-black mb-3 ${dark ? "text-white" : "text-foreground"}`}>
                  {product.title}
                  <span className="block">{product.subtitle}</span>
                </h3>
                <p className={`text-base leading-relaxed mb-5 ${dark ? "text-white/80" : "text-muted-foreground"}`}>
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[0, 1, 2]
                    .map((offset) => product.tags[((tick + idx + offset) % product.tags.length + product.tags.length) % product.tags.length])
                    .map((tag, tagIdx) => (
                    <span
                      key={`${product.id}-${tag}`}
                      className={`rounded-md px-3 py-1 text-xs border transition-all duration-500 ${
                        dark
                          ? `border-white/25 ${tagIdx === 0 ? "bg-primary/30 text-white scale-105" : "bg-white/10 text-white"}`
                          : `border-black/10 ${tagIdx === 0 ? "bg-primary text-white scale-105" : "bg-primary/10 text-slate-700"}`
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-primary" : "text-primary/80"}`}>
                  <ArrowRight className="w-4 h-4" />
                  Explore module
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
