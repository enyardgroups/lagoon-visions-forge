import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsMarquee from "@/components/ClientsMarquee";
import PartnerCompanies from "@/components/PartnerCompanies";
import ProductShowcase from "@/components/ProductShowcase";
import ClientReviews from "@/components/ClientReviews";
import SuccessStories from "@/components/SuccessStories";
import FeaturesCTA from "@/components/FeaturesCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ClientsMarquee />
      <WhyChooseUs />
      <PartnerCompanies />
      <ProductShowcase />
      <ClientReviews />
      <SuccessStories />
      <FeaturesCTA />
      <Footer />
    </div>
  );
};

export default Index;
