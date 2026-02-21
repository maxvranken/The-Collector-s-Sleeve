import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { adviceArticles } from "@/data/advice";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const AdviceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = adviceArticles.find(a => a.slug === slug);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <>
        <SiteHeader />
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Artikel niet gevonden</h1>
          <Link to="/" className="text-accent hover:underline">Terug naar home</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Advies", href: "/" },
            { label: article.title }
          ]} />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mt-6"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">{article.title}</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>{article.intro}</p>
              <p>{article.content}</p>
            </div>

            {/* Internal links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Gerelateerd advies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {adviceArticles.filter(a => a.slug !== slug).slice(0, 4).map(a => (
                  <Link
                    key={a.slug}
                    to={`/advies/${a.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link to products */}
            <div className="mt-8 p-6 bg-secondary rounded-xl text-center">
              <p className="text-muted-foreground mb-3">Op zoek naar de juiste bescherming?</p>
              <Link
                to="/striphoezen"
                className="inline-flex items-center px-6 py-3 bg-gradient-gold text-accent-foreground font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity"
              >
                Bekijk onze striphoezen
              </Link>
            </div>
          </motion.article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default AdviceDetailPage;
