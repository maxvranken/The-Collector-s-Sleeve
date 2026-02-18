import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/data/products";

const StripHoezenPage = () => {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Striphoezen" }
          ]} />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Striphoezen</h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Ontdek onze premium zuurvrije striphoezen in drie formaten. Archiefkwaliteit bescherming voor elke strip in uw collectie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default StripHoezenPage;
