import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Testimonial {
  headline: string;
  content: string;
  personName: string;
  designation: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    headline: "Transformed Our Operations",
    content: "Lagoon Technologies has completely transformed how we manage our business operations. Their coreX ERP system streamlined our processes and gave us real-time insights we never had before. The team's expertise and dedication are unmatched.",
    personName: "Ahmed Al Mansoori",
    designation: "CEO",
    company: "Tech Solutions UAE"
  },
  {
    headline: "Outstanding Support & Innovation",
    content: "Working with Lagoon has been a game-changer. Their Time Tick attendance system eliminated all our workforce management challenges. The GPS tracking and mobile-first approach made it seamless for our field teams. Highly recommend!",
    personName: "Sarah Johnson",
    designation: "Operations Director",
    company: "First Class Fleet"
  },
  {
    headline: "Exceeded All Expectations",
    content: "The safeX365 safety management system has been instrumental in ensuring our workplace compliance. Lagoon's attention to detail and commitment to safety standards is impressive. Our incident rates have dropped significantly since implementation.",
    personName: "Mohammed Hassan",
    designation: "Safety Manager",
    company: "Enyard Construction"
  },
  {
    headline: "Best Technology Partner",
    content: "Lagoon Technologies doesn't just deliver software - they deliver solutions. Their team understands our business needs and creates custom solutions that actually work. The ROI has been exceptional, and the ongoing support is top-notch.",
    personName: "Fatima Al Zaabi",
    designation: "CTO",
    company: "BoobaZhop"
  },
  {
    headline: "Reliable & Scalable Solutions",
    content: "As our business grew, we needed a partner who could scale with us. Lagoon has been that partner. Their enterprise-grade infrastructure and intelligent automation have allowed us to grow without worrying about technical limitations.",
    personName: "David Thompson",
    designation: "Founder",
    company: "UAE Chauffeur"
  },
  {
    headline: "Innovation at Its Finest",
    content: "Lagoon's future-ready applications have positioned us ahead of our competitors. Their platform learns and adapts to our needs, making our operations more efficient every day. This is the kind of innovation that drives real business value.",
    personName: "Layla Al Maktoum",
    designation: "VP of Technology",
    company: "Digital Ventures Group"
  }
];

const ClientReviews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="floating-blob w-80 h-80 bg-gradient-to-r from-lime-400 to-emerald-300 top-20 right-10" />
        <div className="floating-blob w-64 h-64 bg-gradient-to-r from-lime-300 to-emerald-300 bottom-20 left-20" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative px-4 md:px-8 lg:px-16 py-12 overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-6">
                    <Card 
                      className={`border border-black/10 bg-white transition-all duration-500 relative ${
                        current === index
                          ? "scale-105 opacity-100 shadow-xl z-10"
                          : "scale-95 opacity-50"
                      }`}
                    >
                      <CardContent className="p-6">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <Quote className="w-8 h-8 text-primary/30" />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Headline */}
                        <h3 className="text-lg font-bold text-foreground mb-3">
                          {testimonial.headline}
                        </h3>

                        {/* Content */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          "{testimonial.content}"
                        </p>

                        {/* Author Info */}
                        <div className="border-t border-black/10 pt-4">
                          <p className="font-semibold text-foreground">
                            {testimonial.personName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.designation}
                          </p>
                          <p className="text-sm text-primary font-medium mt-1">
                            {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-foreground w-8"
                    : "bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="rounded-lg border-black/20 text-black hover:bg-black/5"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="rounded-lg border-black/20 text-black hover:bg-black/5"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;

