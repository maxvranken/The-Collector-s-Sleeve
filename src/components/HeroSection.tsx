import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium striphoezen collectie" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-6"
          >
            Archiefkwaliteit voor verzamelaars
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6"
          >
            Premium striphoezen & comic sleeves voor verzamelaars
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif text-gold-light mb-4"
          >
            Zuurvrij. Kristalhelder. Archiefkwaliteit.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/80 mb-10 max-w-xl leading-relaxed"
          >
            Bescherm vandaag wat morgen waardevol blijft. Onze premium striphoezen bieden maximale bescherming tegen stof, vocht, kreuken en vergeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/striphoezen"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-accent-foreground font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity text-lg"
            >
              Ontdek het assortiment
            </Link>
            <a
              href="#waarom-premium"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              Waarom premium bescherming?
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
