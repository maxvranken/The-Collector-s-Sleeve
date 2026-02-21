import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Social proof */}
      <div className="border-b border-primary-foreground/10 py-10">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif text-lg italic text-primary-foreground/90 mb-2">
            "Eindelijk nog eens hoezen van echte archiefkwaliteit. Ik vond ze nergens meer."
          </p>
          <p className="text-sm text-primary-foreground/60">— Yves V.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <span className="font-serif text-lg font-bold">The Collector's Sleeve</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium striphoezen voor serieuze verzamelaars in Belgie, Nederland en Frankrijk.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Producten</h4>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <Link to="/striphoezen/small" className="block hover:text-primary-foreground transition-colors">Hoes Small</Link>
              <Link to="/striphoezen/medium" className="block hover:text-primary-foreground transition-colors">Hoes Medium</Link>
              <Link to="/striphoezen/large" className="block hover:text-primary-foreground transition-colors">Hoes Large</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Advies</h4>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <Link to="/advies/zuurvrije-archiefwaardige-hoezen" className="block hover:text-primary-foreground transition-colors">Zuurvrij</Link>
              <Link to="/advies/bescherm-tegen-uv-licht" className="block hover:text-primary-foreground transition-colors">Bescherm tegen UV-licht</Link>
              <Link to="/advies/beperk-blootstelling-zuurstof" className="block hover:text-primary-foreground transition-colors">Beperk zuurstof</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Informatie</h4>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <span className="block">Levering: België & Nederland</span>
              <span className="block">Privacy</span>
              <span className="block">Algemene voorwaarden</span>
              <span className="block">Contact</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} The Collector's Sleeve. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
