import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productFront from "@/assets/product-front.jpg";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-card rounded-xl border border-border overflow-hidden shadow-premium hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-square bg-secondary overflow-hidden">
        <img
          src={productFront}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{product.name}</h3>
        <div className="space-y-1 text-sm text-muted-foreground mb-4">
          <p>Afmetingen: {product.dimensions}</p>
          <p>Geschikt voor: {product.suitableFor}</p>
          <p>Dikte: {product.thickness}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">{product.price}<span className="text-sm font-normal text-muted-foreground"> / 10 st.</span></span>
          <Link
            to={`/striphoezen/${product.slug}`}
            className="inline-flex items-center px-5 py-2.5 bg-gradient-gold text-accent-foreground font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity text-sm"
          >
            Bekijk product
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
