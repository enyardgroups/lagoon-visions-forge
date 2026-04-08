import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-12 bg-gradient-to-b from-[#f7faef] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-h1 font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 2026</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-card space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect contact information you submit (name, email, phone, company), account or product
                usage data, and technical data required for service reliability and security.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">2. How We Use Information</h2>
              <p className="text-muted-foreground">
                Information is used to deliver services, provide support, improve platform performance,
                send operational updates, and comply with legal obligations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">3. Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell personal data. We may share information with trusted processors and partners
                only for service delivery, compliance, and operational support.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">4. Security</h2>
              <p className="text-muted-foreground">
                Lagoon applies security controls aligned with enterprise standards, including access controls,
                encrypted transport, and compliance practices such as ISO 27001 and SOC-aligned processes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You can request access, correction, or deletion of applicable personal data by contacting
                <a href="mailto:Info@lagoontechnologies.com" className="text-primary font-semibold"> Info@lagoontechnologies.com</a>.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">6. Contact</h2>
              <p className="text-muted-foreground">
                For privacy-related requests, contact Lagoon Technologies at +91 84288 07007 or the email above.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
