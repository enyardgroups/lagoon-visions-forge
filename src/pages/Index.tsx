import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsMarquee from "@/components/ClientsMarquee";
import PartnerCompanies from "@/components/PartnerCompanies";
import ProductShowcase from "@/components/ProductShowcase";
import ImplementationSteps from "@/components/ImplementationSteps";
import ClientReviews from "@/components/ClientReviews";
import SuccessStories from "@/components/SuccessStories";
import FeaturesCTA from "@/components/FeaturesCTA";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AnimatedSection delayMs={0}>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delayMs={40}>
        <ClientsMarquee />
      </AnimatedSection>
      <AnimatedSection delayMs={70}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection delayMs={80}>
        <ImplementationSteps />
      </AnimatedSection>
      <AnimatedSection delayMs={90}>
        <PartnerCompanies />
      </AnimatedSection>
      <AnimatedSection delayMs={110}>
        <ProductShowcase />
      </AnimatedSection>
      <AnimatedSection delayMs={130}>
        <ClientReviews />
      </AnimatedSection>
      <AnimatedSection delayMs={150}>
        <SuccessStories />
      </AnimatedSection>
      <AnimatedSection delayMs={170}>
        <FeaturesCTA />
      </AnimatedSection>
      <AnimatedSection delayMs={190}>
        <Footer />
      </AnimatedSection>
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
