import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import SEOSection from "@/components/SEOSection";
import ProductsSection from "@/components/ProductsSection";
import AdviceSection from "@/components/AdviceSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <USPSection />
        <ProductsSection />
        <SEOSection />
        <AdviceSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
