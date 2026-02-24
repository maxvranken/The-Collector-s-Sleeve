import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="producten" className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ons assortiment striphoezen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drie formaten en een testpakket — één kwaliteitsnorm: archiefkwaliteit bescherming voor elke strip in uw collectie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
