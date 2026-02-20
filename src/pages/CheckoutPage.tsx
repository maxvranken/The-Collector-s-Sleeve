import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useCart, parsePrice } from "@/contexts/CartContext";
import { CheckCircle, Loader2 } from "lucide-react";

// ─── Replace this with your Formspree form ID once you've created the form ───
const FORMSPREE_FORM_ID = "xkovvlwb";
// ─────────────────────────────────────────────────────────────────────────────

const schema = z.object({
  naam: z.string().min(2, "Vul je naam in"),
  email: z.string().email("Ongeldig e-mailadres"),
  straat: z.string().min(2, "Vul je straat en huisnummer in"),
  postcode: z.string().min(4, "Vul je postcode in"),
  stad: z.string().min(2, "Vul je stad in"),
  land: z.string().min(2, "Vul je land in"),
});

type FormValues = z.infer<typeof schema>;

const formatPrice = (value: number) =>
  "€" + value.toFixed(2).replace(".", ",");

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0 && !submitted) {
      navigate("/winkelmandje");
    }
  }, [items, submitted, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { land: "België" },
  });

  const buildOrderText = () => {
    const lines = items.map(({ product, quantity }) => {
      const lineTotal = parsePrice(product.price) * quantity;
      return `${quantity}x ${product.name} (${product.price}/10 st.) = ${formatPrice(lineTotal)}`;
    });
    lines.push("─".repeat(40));
    lines.push(`Totaal: ${formatPrice(totalPrice)}`);
    return lines.join("\n");
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setSubmitError(null);

    const payload = {
      naam: data.naam,
      email: data.email,
      leveringsadres: `${data.straat}, ${data.postcode} ${data.stad}, ${data.land}`,
      bestelling: buildOrderText(),
      _subject: "Nieuwe bestelling – The Collector's Sleeve",
      _replyto: data.email,
    };

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        clearCart();
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setSubmitError(
          json?.error ?? "Er is iets misgegaan. Probeer het later opnieuw."
        );
      }
    } catch {
      setSubmitError("Er is iets misgegaan. Controleer je internetverbinding.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <SiteHeader />
        <main className="bg-background min-h-[60vh]">
          <div className="container py-20 text-center max-w-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Bestelling ontvangen!
            </h1>
            <p className="text-muted-foreground mb-2">
              Bedankt voor je bestelling. We nemen zo snel mogelijk contact met je op via{" "}
              <strong className="text-foreground">lucvranken@lemius.be</strong>.
            </p>
            <p className="text-muted-foreground mb-8">
              Controleer ook je spam-folder als je geen bevestiging ontvangt.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-gold text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Terug naar home
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
          <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Bestellen</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Order summary */}
            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                Overzicht bestelling
              </h2>
              <div className="bg-secondary rounded-xl p-5 space-y-3">
                {items.map(({ product, quantity }) => {
                  const lineTotal = parsePrice(product.price) * quantity;
                  return (
                    <div key={product.id} className="flex justify-between gap-2 text-sm">
                      <span className="text-foreground">
                        {quantity}× {product.shortName}
                      </span>
                      <span className="text-muted-foreground shrink-0">
                        {formatPrice(lineTotal)}
                      </span>
                    </div>
                  );
                })}
                <div className="border-t border-border pt-3 flex justify-between font-semibold text-foreground">
                  <span>Totaal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <p className="text-xs text-muted-foreground">Excl. verzendkosten</p>
              </div>
              <Link
                to="/winkelmandje"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-3 inline-block"
              >
                ← Winkelmandje aanpassen
              </Link>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                Jouw gegevens
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Naam */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="naam">
                    Naam
                  </label>
                  <input
                    id="naam"
                    type="text"
                    autoComplete="name"
                    {...register("naam")}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Jan Janssen"
                  />
                  {errors.naam && (
                    <p className="text-destructive text-xs mt-1">{errors.naam.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="email">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="jan@email.be"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Straat */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="straat">
                    Straat + huisnummer
                  </label>
                  <input
                    id="straat"
                    type="text"
                    autoComplete="street-address"
                    {...register("straat")}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Kerkstraat 12"
                  />
                  {errors.straat && (
                    <p className="text-destructive text-xs mt-1">{errors.straat.message}</p>
                  )}
                </div>

                {/* Postcode + Stad */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="postcode">
                      Postcode
                    </label>
                    <input
                      id="postcode"
                      type="text"
                      autoComplete="postal-code"
                      {...register("postcode")}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="9000"
                    />
                    {errors.postcode && (
                      <p className="text-destructive text-xs mt-1">{errors.postcode.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="stad">
                      Stad
                    </label>
                    <input
                      id="stad"
                      type="text"
                      autoComplete="address-level2"
                      {...register("stad")}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Gent"
                    />
                    {errors.stad && (
                      <p className="text-destructive text-xs mt-1">{errors.stad.message}</p>
                    )}
                  </div>
                </div>

                {/* Land */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="land">
                    Land
                  </label>
                  <input
                    id="land"
                    type="text"
                    autoComplete="country-name"
                    {...register("land")}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {errors.land && (
                    <p className="text-destructive text-xs mt-1">{errors.land.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-destructive text-sm bg-destructive/10 rounded-lg px-3 py-2">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-gold text-accent-foreground font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Versturen…
                    </>
                  ) : (
                    "Bestelling plaatsen"
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Door te bestellen ga je akkoord met onze algemene voorwaarden.
                  We nemen contact op om de betaling en levering te regelen.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default CheckoutPage;
