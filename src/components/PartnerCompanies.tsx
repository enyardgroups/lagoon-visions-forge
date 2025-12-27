import { useEffect, useRef, useState } from "react";

const partners = [
  { 
    name: "BoobaZhop", 
    logo: "/logos/boobazhop.png", // Placeholder path - replace with actual logo
    alt: "BoobaZhop Logo"
  },
  { 
    name: "UAE Chauffeur", 
    logo: "/logos/uae-chauffeur.png", // Placeholder path - replace with actual logo
    alt: "UAE Chauffeur Logo"
  },
  { 
    name: "First Class Fleet", 
    logo: "/logos/first-class-fleet.png", // Placeholder path - replace with actual logo
    alt: "First Class Fleet Logo"
  },
  { 
    name: "Enyard", 
    logo: "/logos/enyard.png", // Placeholder path - replace with actual logo
    alt: "Enyard Logo"
  },
];

const PartnerCompanies = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let offset = 0;
    let raf = 0;
    const step = () => {
      offset -= 0.5; // speed
      track.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) > track.scrollWidth / 2) {
        offset = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Associate Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading companies to deliver exceptional solutions
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 will-change-transform" ref={trackRef}>
            {[...partners, ...partners].map((partner, idx) => {
              const logoKey = `${partner.name}-${idx}`;
              const hasFailed = failedLogos.has(logoKey);
              
              return (
                <div
                  key={logoKey}
                  className="shrink-0 h-24 w-48 rounded-xl border border-black/10 bg-white flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  {hasFailed ? (
                    <div className="text-black/70 font-semibold text-sm text-center">
                      {partner.name}
                    </div>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="max-h-full max-w-full object-contain"
                      onError={() => {
                        setFailedLogos(prev => new Set(prev).add(logoKey));
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanies;

