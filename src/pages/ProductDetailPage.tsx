import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/data/products";
import productFront from "@/assets/product-front.jpg";
import productBack from "@/assets/product-back.jpg";
import productDetail1 from "@/assets/product-detail-1.jpg";
import productDetail2 from "@/assets/product-detail-2.jpg";
import productDetail3 from "@/assets/product-detail-3.jpg";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <SiteHeader />
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Product niet gevonden</h1>
          <Link to="/striphoezen" className="text-accent hover:underline">Terug naar striphoezen</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": productFront,
    "offers": {
      "@type": "Offer",
      "price": product.price.replace("€", "").replace(",", "."),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity}× ${product.shortName} toegevoegd aan winkelmandje`, {
      action: {
        label: "Bekijk mandje",
        onClick: () => window.location.href = "/winkelmandje",
      },
    });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Striphoezen", href: "/striphoezen" },
            { label: product.shortName }
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <div className="bg-secondary rounded-xl overflow-hidden aspect-[3/4]">
                <img src={productFront} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[productBack, productDetail1, productDetail2, productDetail3].map((img, i) => (
                  <div key={i} className="bg-secondary rounded-lg overflow-hidden aspect-square">
                    <img src={img} alt={`${product.name} detail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              <div className="space-y-2 text-muted-foreground mb-6">
                <p><strong className="text-foreground">Afmetingen:</strong> {product.dimensions}</p>
                <p><strong className="text-foreground">Geschikt voor:</strong> {product.suitableFor}</p>
                <p><strong className="text-foreground">Materiaal:</strong> Zuurvrij polypropyleen</p>
                <p><strong className="text-foreground">Dikte:</strong> {product.thickness}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{product.longDescription}</p>

              <div className="bg-secondary rounded-xl p-6 mb-6">
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-3xl font-bold text-foreground">{product.price}</span>
                  <span className="text-muted-foreground mb-1">per 10 stuks</span>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-foreground">Aantal:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors disabled:opacity-40"
                      aria-label="Minder"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-semibold text-foreground">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors"
                      aria-label="Meer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    = {quantity * 10} hoezen
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-accent-foreground font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Voeg toe aan winkelmandje
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif font-semibold text-foreground">Voordelen</h3>
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-16 mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Veelgestelde vragen
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {product.faq.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-medium text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Cross-sell */}
          <div className="border-t border-border pt-12 pb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Bekijk ook</h3>
            <div className="flex flex-wrap gap-3">
              {products.filter(p => p.id !== product.id).map(p => (
                <Link
                  key={p.id}
                  to={`/striphoezen/${p.slug}`}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                >
                  {p.name}
                </Link>
              ))}
              <Link
                to="/advies/welke-comic-sleeves-kiezen"
                className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
              >
                Welke sleeve kiezen? →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ProductDetailPage;
