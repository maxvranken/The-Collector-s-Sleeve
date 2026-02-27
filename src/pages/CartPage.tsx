import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useCart, parsePrice } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import LemiusIcon from "@/components/LemiusIcon";

const CartPage = () => {
  const { items, totalPrice, removeFromCart, updateQuantity } = useCart();

  const formatPrice = (value: number) =>
    "€" + value.toFixed(2).replace(".", ",");

  if (items.length === 0) {
    return (
      <>
        <SiteHeader />
        <main className="bg-background min-h-[60vh]">
          <div className="container py-20 text-center">
            <LemiusIcon className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Je winkelmandje is leeg
            </h1>
            <p className="text-muted-foreground mb-8">
              Voeg striphoezen toe om door te gaan.
            </p>
            <Link
              to="/striphoezen"
              className="inline-flex items-center px-6 py-3 bg-gradient-gold text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Bekijk producten
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-background min-h-[60vh]">
        <div className="container py-10 max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-8">
            Winkelmandje
          </h1>

          <div className="space-y-4 mb-8">
            {items.map(({ product, quantity }) => {
              const lineTotal = parsePrice(product.price) * quantity;
              return (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-secondary rounded-xl p-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground leading-tight">{product.name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {product.price} / 10 st.
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      disabled={quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors disabled:opacity-40"
                      aria-label="Minder"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-semibold text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors"
                      aria-label="Meer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line total */}
                  <div className="w-20 text-right shrink-0">
                    <span className="font-semibold text-foreground">
                      {formatPrice(lineTotal)}
                    </span>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                    aria-label="Verwijder"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Total + CTA */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-muted-foreground text-sm">Totaal (excl. verzending)</p>
              <p className="text-2xl font-bold text-foreground font-serif">
                {formatPrice(totalPrice)}
              </p>
            </div>
            <Link
              to="/bestellen"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-gold text-accent-foreground font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity text-base"
            >
              Doorgaan naar bestellen →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default CartPage;
