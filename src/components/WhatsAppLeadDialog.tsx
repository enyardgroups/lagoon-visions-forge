import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PRODUCT_OPTIONS = [
  "Opex HRMS",
  "Time Tick Attendance",
  "Vendor Management",
  "SafeX365 HSE Solution",
];

interface WhatsAppLeadDialogProps {
  trigger: ReactNode;
  source: string;
  defaultProduct?: string;
}

const WhatsAppLeadDialog = ({ trigger, source, defaultProduct = PRODUCT_OPTIONS[0] }: WhatsAppLeadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(defaultProduct);

  const sendToWhatsApp = () => {
    const safeName = name.trim() || "there";
    const message =
      `Hi Lagoon team,%0A` +
      `I'm ${safeName}.%0A` +
      `Company: ${company || "Not provided"}%0A` +
      `Email: ${email || "Not provided"}%0A` +
      `Interested Product: ${product}%0A` +
      `Source: ${source}%0A` +
      `Please contact me.`;

    window.open(`https://wa.me/918428807007?text=${message}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Start Your Project</DialogTitle>
          <DialogDescription>
            Share your details and we will continue on WhatsApp instantly.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold mb-2 block">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block">Company</label>
            <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company" />
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block">Product of Interest</label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              {PRODUCT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={sendToWhatsApp} className="w-full rounded-xl">
            Send Now via WhatsApp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppLeadDialog;
