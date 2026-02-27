import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import LemiusIcon from "@/components/LemiusIcon";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <LemiusIcon className="w-6 h-6 text-accent" />
          <span className="font-serif text-xl font-bold text-foreground">The Collector's Sleeve</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/striphoezen" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Striphoezen
          </Link>
          <a href="/#advice" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Advies
          </a>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link
            to="/striphoezen"
            className="inline-flex items-center px-5 py-2 bg-gradient-gold text-accent-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Bestel nu
          </Link>
          {/* Cart icon */}
          <Link to="/winkelmandje" className="relative text-muted-foreground hover:text-foreground transition-colors" aria-label="Winkelmandje">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-accent text-accent-foreground text-[10px] font-bold rounded-full">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile cart icon */}
          <Link to="/winkelmandje" className="relative text-foreground" aria-label="Winkelmandje">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-accent text-accent-foreground text-[10px] font-bold rounded-full">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-4">
          <Link to="/striphoezen" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Striphoezen
          </Link>
          <a href="/#advice" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Advies
          </a>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground">
            Contact
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
