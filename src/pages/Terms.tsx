import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-12 bg-gradient-to-b from-[#f7faef] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-5">
            <FileText className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-h1 font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: April 2026</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-card space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using Lagoon services, you agree to these terms and any applicable
                service-specific agreements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">2. Services</h2>
              <p className="text-muted-foreground">
                Lagoon provides enterprise software modules including Opex HRMS, Time Tick Attendance,
                Vendor Management, and SafeX365 HSE as per the subscribed scope.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">3. Customer Responsibilities</h2>
              <p className="text-muted-foreground">
                Customers are responsible for lawful usage, data accuracy, account credential safety,
                and internal governance of user access.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">4. Payment and Renewal</h2>
              <p className="text-muted-foreground">
                Commercial terms, billing cycles, and renewal terms are governed by your signed proposal
                or master service agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                Lagoon retains rights to platform software, trademarks, and related assets. Customer data
                remains customer-owned subject to service agreements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the extent permitted by law, Lagoon is not liable for indirect or consequential losses.
                Specific liability limits are defined in signed agreements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">7. Contact</h2>
              <p className="text-muted-foreground">
                For legal queries, email
                <a href="mailto:Info@lagoontechnologies.com" className="text-primary font-semibold"> Info@lagoontechnologies.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
