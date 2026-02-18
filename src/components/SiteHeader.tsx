import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-accent" />
          <span className="font-serif text-xl font-bold text-foreground">StripShield</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/striphoezen" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Striphoezen
          </Link>
          <Link to="/advies/hoe-strips-beschermen" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Advies
          </Link>
          <a href="#producten" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Producten
          </a>
          <Link
            to="/striphoezen"
            className="inline-flex items-center px-5 py-2 bg-gradient-gold text-accent-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Bestel nu
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-4">
          <Link to="/striphoezen" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Striphoezen
          </Link>
          <Link to="/advies/hoe-strips-beschermen" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Advies
          </Link>
          <Link
            to="/striphoezen"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 bg-gradient-gold text-accent-foreground font-semibold rounded-lg text-sm"
          >
            Bestel nu
          </Link>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
