import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2, Building2, Globe2 } from "lucide-react";

const productOptions = [
  "Opex HRMS",
  "Time Tick Attendance",
  "Vendor Management",
  "SafeX365 HSE Solution",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    companySize: "50-200 employees",
    message: "",
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["Opex HRMS"]);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleProduct = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product) ? prev.filter((item) => item !== product) : [...prev, product],
    );
  };

  const sendViaWhatsApp = () => {
    const name = `${formData.firstName} ${formData.lastName}`.trim() || "there";
    const products = selectedProducts.length ? selectedProducts.join(", ") : "Not selected";
    const message =
      `Hi Lagoon team,%0A` +
      `Name: ${name}%0A` +
      `Work Email: ${formData.email || "Not provided"}%0A` +
      `Company: ${formData.company || "Not provided"}%0A` +
      `Phone: ${formData.phone || "Not provided"}%0A` +
      `Company Size: ${formData.companySize}%0A` +
      `Interested Products: ${products}%0A` +
      `Message: ${formData.message || "Not provided"}%0A` +
      `Source: Contact Form`;

    window.open(`https://wa.me/918428807007?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-14 bg-gradient-to-b from-[#f7faef] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              <MessageCircle className="h-3.5 w-3.5" />
              Contact Lagoon
            </div>
            <h1 className="text-h1 font-bold text-foreground mb-5">
              Let’s Build Your
              <br />
              <span className="hero-gradient">Enterprise Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your requirements and our solution team will help you map the
              right combination of Opex HRMS, Time Tick Attendance, Vendor Management,
              and SafeX365 HSE.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-float">
              <h2 className="text-3xl font-bold mb-2">Send a Project Brief</h2>
              <p className="text-muted-foreground mb-7">
                We usually respond within one business day.
              </p>
              <a
                href="https://wa.me/918428807007?text=Hi%20Lagoon%20team,%20I%20need%20quick%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] text-white p-4 mb-6"
              >
                <MessageCircle className="w-6 h-6" />
                <div>
                  <div className="font-bold text-lg leading-none">Chat on WhatsApp</div>
                  <div className="text-sm text-white/90">+91 84288 07007 - Quick response guaranteed</div>
                </div>
              </a>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendViaWhatsApp();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <Input
                      placeholder="Rajesh"
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <Input
                      placeholder="Kumar"
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Work Email</label>
                  <Input
                    type="email"
                    placeholder="rajesh@company.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <Input
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input
                      placeholder="+91 / +971"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Size</label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={formData.companySize}
                      onChange={(e) => updateField("companySize", e.target.value)}
                    >
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>50-200 employees</option>
                      <option>200-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Choose Products (Multiple)</label>
                  <div className="flex flex-wrap gap-2">
                    {productOptions.map((product) => {
                      const active = selectedProducts.includes(product);
                      return (
                        <button
                          type="button"
                          key={product}
                          onClick={() => toggleProduct(product)}
                          className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                            active
                              ? "bg-primary text-white border-primary"
                              : "bg-white border-black/15 text-foreground hover:border-primary/50"
                          }`}
                        >
                          {product}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your requirements, team size, or any questions..."
                    className="min-h-36"
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full rounded-xl">
                  Send Message →
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-black/10 bg-[#12356f] p-7 text-white shadow-float">
                <h3 className="text-2xl font-bold mb-4">Fast-Track Channels</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-xl bg-white/10 border border-white/10 p-3">
                    <span>WhatsApp Response</span>
                    <span className="font-semibold text-primary">~ 15 mins</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/10 border border-white/10 p-3">
                    <span>Email</span>
                    <span className="font-semibold text-primary">~ 1 hr</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/10 border border-white/10 p-3">
                    <span>Call</span>
                    <span className="font-semibold text-primary">~ 5 min</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/10 border border-white/10 p-3">
                    <span>Proposal Turnaround</span>
                    <span className="font-semibold text-primary">~ 6 hrs</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-card space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">Info@lagoontechnologies.com</p>
                    <p className="text-muted-foreground">Sales@lagoontechnologies.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 84288 07007</p>
                    <p className="text-muted-foreground">+971 56 454 9360</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Global delivery from India, UAE, USA,
                      Oman, and Papua New Guinea.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday, Sunday: Off
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    We support end-to-end implementation
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-black/10 bg-white p-3">
                      <div className="inline-flex items-center gap-2 font-semibold">
                        <Building2 className="w-4 h-4 text-primary" />
                        Multi-Entity Setup
                      </div>
                    </div>
                    <div className="rounded-xl border border-black/10 bg-white p-3">
                      <div className="inline-flex items-center gap-2 font-semibold">
                        <Globe2 className="w-4 h-4 text-primary" />
                        Global Compliance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;