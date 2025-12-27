import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SuccessStory {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  results: string[];
  icon: typeof CheckCircle2;
  metric: string;
  metricLabel: string;
}

const successStories: SuccessStory[] = [
  {
    title: "Streamlined Operations with coreX ERP",
    company: "Tech Solutions UAE",
    challenge: "Managing multiple business processes across departments with disconnected systems led to inefficiencies and data silos.",
    solution: "Implemented coreX ERP to integrate financial management, supply chain, and HR operations into a unified platform.",
    results: [
      "40% reduction in operational costs",
      "60% faster reporting and analytics",
      "Real-time visibility across all departments",
      "Improved decision-making with data-driven insights"
    ],
    icon: TrendingUp,
    metric: "40%",
    metricLabel: "Cost Reduction"
  },
  {
    title: "Revolutionized Workforce Management",
    company: "First Class Fleet",
    challenge: "Tracking attendance and managing field teams across multiple locations was time-consuming and error-prone.",
    solution: "Deployed Time Tick GPS-enabled attendance system with mobile-first approach for seamless field operations.",
    results: [
      "95% accuracy in attendance tracking",
      "50% reduction in administrative time",
      "Real-time GPS tracking for field teams",
      "Automated payroll processing"
    ],
    icon: Users,
    metric: "95%",
    metricLabel: "Accuracy"
  },
  {
    title: "Enhanced Safety Compliance",
    company: "Enyard Construction",
    challenge: "Ensuring workplace safety compliance and tracking incidents across multiple construction sites was challenging.",
    solution: "Implemented safeX365 comprehensive safety management system with incident tracking and risk assessment capabilities.",
    results: [
      "70% reduction in workplace incidents",
      "100% compliance with safety regulations",
      "Faster incident response times",
      "Comprehensive safety reporting and analytics"
    ],
    icon: Award,
    metric: "70%",
    metricLabel: "Incident Reduction"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="floating-blob w-96 h-96 bg-gradient-to-r from-lime-400 to-emerald-400 top-10 right-0" style={{ animationDelay: '1s' }} />
        <div className="floating-blob w-72 h-72 bg-gradient-to-r from-lime-300 to-emerald-300 bottom-0 left-10" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our solutions have transformed businesses and delivered measurable impact
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {successStories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card 
                key={index}
                className="border border-black/10 bg-white hover:shadow-float transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-6">
                  {/* Icon and Metric */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        {story.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {story.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {story.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {story.company}
                  </p>

                  {/* Challenge */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Challenge:
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Solution:
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {story.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Results:
                    </p>
                    <ul className="space-y-2">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to write your own success story?
          </p>
          <Button 
            size="lg" 
            className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 rounded-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

