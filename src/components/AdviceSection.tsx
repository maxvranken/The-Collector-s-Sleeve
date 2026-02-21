import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { adviceArticles } from "@/data/advice";

const AdviceSection = () => {
  return (
    <section id="advice" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hoe bescherm je je strips?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vergeling is één van de grootste vijanden van elke stripverzamelaar. Het is een onomkeerbaar proces waarbij papier donkerder wordt door oxidatie en UV‑licht. Gelukkig kun je het sterk vertragen — op voorwaarde dat je de juiste materialen en bewaartechnieken gebruikt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {adviceArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to={`/advies/${article.slug}`}
                className="group block p-6 bg-card rounded-xl border border-border hover:border-accent/40 hover:shadow-premium transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.intro}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent gap-1 group-hover:gap-2 transition-all">
                  Lees meer <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
