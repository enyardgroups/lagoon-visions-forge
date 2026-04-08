import { CheckCircle2, Shield, Sparkles, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppLeadDialog from "@/components/WhatsAppLeadDialog";

const highlights = [
  { icon: Sparkles, title: "AI-Augmented", desc: "Smart workflows across Opex HRMS and Time Tick" },
  { icon: Shield, title: "Enterprise Secure", desc: "SafeX365-ready controls and compliance posture" },
  { icon: Gauge, title: "Built for Scale", desc: "Vendor and workforce operations on one stack" },
];

const FeaturesCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-h2 font-bold">
              Build smarter with Lagoon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Unified data, secure foundations, and elegant experiences. Launch faster with
              a platform designed to turn complexity into clarity.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="p-4 rounded-xl border border-border bg-white">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{h.title}</div>
                        <div className="text-sm text-muted-foreground">{h.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <WhatsAppLeadDialog
                source="Features CTA - Start your project"
                trigger={
                  <Button size="lg" className="rounded-xl">
                    Start your project
                    <CheckCircle2 className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
              <WhatsAppLeadDialog
                source="Features CTA - Talk to an expert"
                trigger={
                  <Button variant="outline" size="lg" className="rounded-xl">
                    Talk to an expert
                  </Button>
                }
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#12356f] p-6 float-card text-white overflow-hidden cta-right-animated">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-2xl bg-primary p-4 cta-float-a">
                  <div className="text-4xl font-black text-[#0f172a] leading-none">500+</div>
                  <div className="text-sm text-[#0f172a]/80 mt-1">Enterprise clients worldwide</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 border border-white/10 cta-float-b">
                  <div className="text-4xl font-black text-white leading-none">1.2M</div>
                  <div className="text-sm text-white/80 mt-1">Employee records daily</div>
                </div>
                <div className="rounded-2xl bg-white p-4 cta-float-c">
                  <div className="text-4xl font-black text-[#12356f] leading-none">99.9%</div>
                  <div className="text-sm text-slate-600 mt-1">Guaranteed uptime SLA</div>
                </div>
                <div className="rounded-2xl bg-white p-4 cta-float-d">
                  <div className="text-4xl font-black text-[#12356f] leading-none">4wk</div>
                  <div className="text-sm text-slate-600 mt-1">Average go-live time</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs tracking-[0.18em] uppercase text-white/70 mb-3">
                  Safex365 Safety Dashboard
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    ["247", "Safe Days"],
                    ["97.3%", "Compliance"],
                    ["3", "Open Risks"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl bg-white/10 p-3 border border-white/10">
                      <div className="text-xl font-bold text-primary">{value}</div>
                      <div className="text-[10px] uppercase text-white/70">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/90">Permit Compliance</span>
                      <span className="text-primary font-semibold">97.3%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                      <div className="h-full w-[97%] bg-primary rounded-full cta-bar-anim" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/90">Audits Completed</span>
                      <span className="text-primary font-semibold">84/99</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                      <div className="h-full w-[85%] bg-primary rounded-full cta-bar-anim delay" />
                    </div>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/10 text-primary px-3 py-2 font-semibold">
                    ✓ ISO 45001 Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;




