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
            "Eindelijk hoezen die écht archiefkwaliteit zijn. Mijn verzameling is veilig voor de toekomst."
          </p>
          <p className="text-sm text-primary-foreground/60">— Jan V., verzamelaar sinds 1992</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <span className="font-serif text-lg font-bold">StripShield</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium striphoezen en comic sleeves voor serieuze verzamelaars in België en Nederland.
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
              <Link to="/advies/hoe-strips-beschermen" className="block hover:text-primary-foreground transition-colors">Hoe strips beschermen</Link>
              <Link to="/advies/hoe-comics-bewaren" className="block hover:text-primary-foreground transition-colors">Hoe comics bewaren</Link>
              <Link to="/advies/verschil-poly-mylar-sleeves" className="block hover:text-primary-foreground transition-colors">Poly vs Mylar</Link>
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
          © {new Date().getFullYear()} StripShield. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
