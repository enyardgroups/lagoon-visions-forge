import { BadgeCheck, Globe2, Lock, Rocket, Search, Settings, GraduationCap } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "Understand your workflows, compliance needs, and existing systems.",
    icon: Search,
    active: false,
  },
  {
    title: "Configure",
    desc: "Set up modules to match your policies, devices, and ERP integrations.",
    icon: Settings,
    active: false,
  },
  {
    title: "Train",
    desc: "Role-based onboarding for admins, managers, and end users.",
    icon: GraduationCap,
    active: false,
  },
  {
    title: "Go Live",
    desc: "Launch with our team and start operations in 2-4 weeks.",
    icon: Rocket,
    active: true,
  },
];

const trustPoints = [
  {
    title: "2-4 Week Go-live",
    desc: "Fast deployment in the enterprise SaaS category",
    icon: Rocket,
  },
  {
    title: "SOC 2 + ISO 27001",
    desc: "Bank-grade security and compliance from day one",
    icon: Lock,
  },
  {
    title: "5 Offices - 18 Countries",
    desc: "Local compliance expertise in every market we serve",
    icon: Globe2,
  },
];

const ImplementationSteps = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f7faef] to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-blob w-72 h-72 bg-gradient-to-r from-lime-300 to-emerald-300 top-14 left-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            How It Works
          </div>
          <h2 className="text-h2 font-bold text-foreground leading-tight mb-4">
            Enterprise-Ready in
            <br />
            <span className="hero-gradient">Four Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our implementation team handles everything - from scoping to go-live -
            with zero disruption to your current operations.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-2 right-2 top-[86px] h-[2px] bg-primary/20 pointer-events-none z-0" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative z-10 rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                    step.active
                      ? "bg-primary text-[#0f172a] border-primary shadow-float"
                      : "bg-white border-black/10 shadow-card"
                  }`}
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${
                      step.active ? "bg-foreground text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`text-xl font-bold mb-2 ${step.active ? "text-[#0f172a]" : "text-foreground"}`}>
                    {step.title}
                  </div>
                  <p className={`text-sm leading-relaxed ${step.active ? "text-[#0f172a]/80" : "text-muted-foreground"}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-xl border border-black/10 bg-white p-5 flex items-start gap-3 hover:shadow-float transition-all duration-300"
              >
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{point.title}</div>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary font-semibold">
          <BadgeCheck className="w-4 h-4" />
          Proven onboarding framework for enterprise rollouts
        </div>
      </div>
    </section>
  );
};

export default ImplementationSteps;
