import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingContactButtons = () => {
  const [open, setOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const [visitorName, setVisitorName] = useState("");

  const startWhatsAppChat = () => {
    const cleanName = visitorName.trim() || "there";
    const message = `Hi Lagoon team, I'm ${cleanName}. I would like to start a chat and know more about your products.`;
    const url = `https://wa.me/918428807007?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="floating-wa-wrap">
        {waOpen && (
          <div className="floating-wa-panel">
            <div className="floating-chat-title">Start WhatsApp Chat</div>
            <p>Enter your name and we will prefill your message.</p>
            <input
              type="text"
              value={visitorName}
              onChange={(event) => setVisitorName(event.target.value)}
              className="floating-wa-input"
              placeholder="Your name"
            />
            <button type="button" onClick={startWhatsAppChat} className="floating-wa-action">
              Initiate chat with Lagoon
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => setWaOpen((prev) => !prev)}
          aria-label="Open WhatsApp chat dialog"
          className="floating-whatsapp"
        >
          {waOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </button>
      </div>

      <div className="floating-chat-wrap">
        {open && (
          <div className="floating-chat-panel">
            <div className="floating-chat-title">Lagoon Assistant</div>
            <p>Hi! Need help with Opex HRMS, Time Tick, Vendor, or SafeX365?</p>
            <a href="/contact">Contact our team</a>
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="floating-chat-btn"
          aria-label="Open chatbot"
        >
          {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </button>
      </div>
    </>
  );
};

export default FloatingContactButtons;
