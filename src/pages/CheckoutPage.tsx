import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useCart, parsePrice } from "@/contexts/CartContext";
import { CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_FORM_ID = "xkovvlwb";

const schema = z.object({
  voornaam: z.string().min(2, "Vul je voornaam in"),
  achternaam: z.string().min(2, "Vul je achternaam in"),
  email: z.string().email("Ongeldig e-mailadres"),
  telefoonnummer: z.string().optional(),
  straat: z.string().min(2, "Vul je straat en huisnummer in"),
  bus: z.string().optional(),
  postcode: z.string().min(4, "Vul je postcode in"),
  gemeente: z.string().min(2, "Vul je gemeente in"),
  land: z.enum(["België", "Nederland"], { message: "Kies je land" }),
  verzendwijze: z.enum(["afhaalpunt", "adres"], { message: "Kies een verzendwijze" }),
  afhaalpunt_naam_adres: z.string().optional(),
  striphoes_small_qty: z.coerce.number().min(0, "Aantal moet 0 of hoger zijn"),
  striphoes_medium_qty: z.coerce.number().min(0, "Aantal moet 0 of hoger zijn"),
  striphoes_large_qty: z.coerce.number().min(0, "Aantal moet 0 of hoger zijn"),
  striphoes_testpakket_qty: z.coerce.number().min(0, "Aantal moet 0 of hoger zijn"),
  opmerkingen: z.string().optional(),
  terms_accepted: z.boolean().refine(val => val === true, {
    message: "Je moet akkoord gaan met de algemene voorwaarden en het privacybeleid"
  }),
  payment_method_understood: z.boolean().refine(val => val === true, {
    message: "Je moet begrijpen dat betaling via overschrijving gebeurt"
  }),
}).superRefine((data, ctx) => {
  if (data.verzendwijze === "afhaalpunt" && (!data.afhaalpunt_naam_adres || data.afhaalpunt_naam_adres.trim().length < 5)) {
    ctx.addIssue({
      code: "custom",
      path: ["afhaalpunt_naam_adres"],
      message: "Vul de naam en het adres van je afhaalpunt in",
    });
  }
});

type FormValues = z.infer<typeof schema>;

const formatPrice = (value: number) =>
  "€" + value.toFixed(2).replace(".", ",");

// Shipping calculation parameters
const SHIPPING_PARAMS = {
  pricePerSet: 18.95,
  weightSmall: 0.41,
  weightMedium: 0.49,
  weightLarge: 0.5,
  packaging: 0.15,
  // Belgium shipping costs
  be5kgPickup: 7.20,
  be10kgPickup: 7.70,
  be20kgPickup: 10.60,
  be5kgAddress: 9.95,
  be10kgAddress: 10.95,
  be20kgAddress: 13.85,
  // Netherlands shipping costs
  nlPickup: 10.75,
  nlAddress: 11.05,
};

const calculateWeight = (smallQty: number, mediumQty: number, largeQty: number): number => {
  return Math.round(
    (smallQty * SHIPPING_PARAMS.weightSmall +
      mediumQty * SHIPPING_PARAMS.weightMedium +
      largeQty * SHIPPING_PARAMS.weightLarge +
      SHIPPING_PARAMS.packaging) * 100
  ) / 100;
};

const calculateShippingCost = (
  weight: number,
  country: string,
  deliveryMethod: string
): number => {
  if (country === "Nederland") {
    if (deliveryMethod === "afhaalpunt") {
      return weight < 23 ? SHIPPING_PARAMS.nlPickup : 0;
    } else {
      return weight < 23 ? SHIPPING_PARAMS.nlAddress : 0;
    }
  }

  if (country === "België") {
    if (deliveryMethod === "afhaalpunt") {
      if (weight <= 5) return SHIPPING_PARAMS.be5kgPickup;
      if (weight <= 10) return SHIPPING_PARAMS.be10kgPickup;
      return SHIPPING_PARAMS.be20kgPickup;
    } else {
      if (weight <= 5) return SHIPPING_PARAMS.be5kgAddress;
      if (weight <= 10) return SHIPPING_PARAMS.be10kgAddress;
      return SHIPPING_PARAMS.be20kgAddress;
    }
  }

  return 0;
};

const CheckoutPage = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Calculate quantities from cart items
  const cartQuantities = {
    small: 0,
    medium: 0,
    large: 0,
    testpakket: 0,
  };

  items.forEach(({ product, quantity }) => {
    if (product.slug.includes("testpakket")) {
      cartQuantities.testpakket = quantity;
    } else if (product.slug.includes("small")) {
      cartQuantities.small = quantity;
    } else if (product.slug.includes("medium")) {
      cartQuantities.medium = quantity;
    } else if (product.slug.includes("large")) {
      cartQuantities.large = quantity;
    }
  });

  useEffect(() => {
    if (items.length === 0 && !submitted) {
      navigate("/winkelmandje");
    }
  }, [items, submitted, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      land: "België",
      verzendwijze: "afhaalpunt",
      striphoes_small_qty: cartQuantities.small,
      striphoes_medium_qty: cartQuantities.medium,
      striphoes_large_qty: cartQuantities.large,
      striphoes_testpakket_qty: cartQuantities.testpakket,
    },
  });

  // Watch quantity fields and delivery options to calculate totals
  const smallQty = watch("striphoes_small_qty");
  const mediumQty = watch("striphoes_medium_qty");
  const largeQty = watch("striphoes_large_qty");
  const testpakketQty = watch("striphoes_testpakket_qty");
  const country = watch("land");
  const deliveryMethod = watch("verzendwijze");

  const PRICE_PER_10 = 18.95;
  const smallTotal = smallQty * PRICE_PER_10;
  const mediumTotal = mediumQty * PRICE_PER_10;
  const largeTotal = largeQty * PRICE_PER_10;
  const testpakketTotal = testpakketQty * PRICE_PER_10;
  const orderSubtotal = smallTotal + mediumTotal + largeTotal + testpakketTotal;

  // Calculate weight and shipping — testpakket uses large weight parameter
  const totalWeight = calculateWeight(smallQty, mediumQty, largeQty + testpakketQty);
  const shippingCost = calculateShippingCost(totalWeight, country, deliveryMethod);
  const orderTotal = orderSubtotal + shippingCost;

  const buildOrderText = (data: FormValues) => {
    const weight = calculateWeight(data.striphoes_small_qty, data.striphoes_medium_qty, data.striphoes_large_qty + data.striphoes_testpakket_qty);
    const shipping = calculateShippingCost(weight, data.land, data.verzendwijze);
    const total = (data.striphoes_small_qty + data.striphoes_medium_qty + data.striphoes_large_qty + data.striphoes_testpakket_qty) * SHIPPING_PARAMS.pricePerSet + shipping;

    const lines = [];
    lines.push(`KLANTGEGEVENS`);
    lines.push(`Naam: ${data.voornaam} ${data.achternaam}`);
    lines.push(`E-mail: ${data.email}`);
    if (data.telefoonnummer) {
      lines.push(`Telefoon: ${data.telefoonnummer}`);
    }
    lines.push("");
    lines.push(`ADRES`);
    lines.push(`${data.straat}${data.bus ? ` bus ${data.bus}` : ""}`);
    lines.push(`${data.postcode} ${data.gemeente}`);
    lines.push(`${data.land}`);
    lines.push("");
    lines.push(`BESTELLING`);
    if (data.striphoes_small_qty > 0) {
      lines.push(`${data.striphoes_small_qty}× Striphoes Small (€${SHIPPING_PARAMS.pricePerSet}) = €${formatPrice(data.striphoes_small_qty * SHIPPING_PARAMS.pricePerSet)}`);
    }
    if (data.striphoes_medium_qty > 0) {
      lines.push(`${data.striphoes_medium_qty}× Striphoes Medium (€${SHIPPING_PARAMS.pricePerSet}) = €${formatPrice(data.striphoes_medium_qty * SHIPPING_PARAMS.pricePerSet)}`);
    }
    if (data.striphoes_large_qty > 0) {
      lines.push(`${data.striphoes_large_qty}× Striphoes Large (€${SHIPPING_PARAMS.pricePerSet}) = €${formatPrice(data.striphoes_large_qty * SHIPPING_PARAMS.pricePerSet)}`);
    }
    if (data.striphoes_testpakket_qty > 0) {
      lines.push(`${data.striphoes_testpakket_qty}× Testpakket Small-Medium-Large (€${SHIPPING_PARAMS.pricePerSet}) = €${formatPrice(data.striphoes_testpakket_qty * SHIPPING_PARAMS.pricePerSet)}`);
    }
    lines.push("");
    lines.push(`VERZENDING`);
    lines.push(`Verzendwijze: ${data.verzendwijze === "afhaalpunt" ? "Afhaalpunt" : "Thuis bezorgd"}`);
    if (data.verzendwijze === "afhaalpunt" && data.afhaalpunt_naam_adres) {
      lines.push(`Afhaalpunt: ${data.afhaalpunt_naam_adres}`);
    }
    lines.push(`Gewicht: ${weight} kg`);
    lines.push(`Verzendkosten: €${formatPrice(shipping)}`);
    lines.push("");
    lines.push(`─`.repeat(40));
    lines.push(`Subtotaal producten: €${formatPrice((data.striphoes_small_qty + data.striphoes_medium_qty + data.striphoes_large_qty + data.striphoes_testpakket_qty) * SHIPPING_PARAMS.pricePerSet)}`);
    lines.push(`Verzendkosten: €${formatPrice(shipping)}`);
    lines.push(`Totaal: €${formatPrice(total)}`);
    lines.push("");
    if (data.opmerkingen) {
      lines.push(`OPMERKINGEN`);
      lines.push(data.opmerkingen);
      lines.push("");
    }
    return lines.join("\n");
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setSubmitError(null);

    const payload = {
      voornaam: data.voornaam,
      achternaam: data.achternaam,
      email: data.email,
      telefoonnummer: data.telefoonnummer || "–",
      adres: `${data.straat}${data.bus ? ` bus ${data.bus}` : ""}, ${data.postcode} ${data.gemeente}, ${data.land}`,
      bestelling: buildOrderText(data),
      _subject: "Nieuwe bestelling via Striphœzen Bestelformulier",
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
              Bedankt voor je bestelling. Je ontvangt binnen 24 uur een bevestigingsmail met het totaalbedrag, verzendkosten en betaalinstructies.
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
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Bestelformulier" }
          ]} />

          <div className="max-w-3xl mx-auto mt-6">
            {/* Header */}
            <div className="mb-10">
              <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Bestelformulier</h1>
              <p className="text-lg text-muted-foreground mb-4">Bestel je premium striphoezen zonder online betaling</p>
              <p className="text-muted-foreground">
                Wil je bestellen zonder online betaling? Vul hieronder je gegevens in. Na ontvangst van je bestelling sturen we je een bevestiging met het totaalbedrag en de betaalinstructies. Je bestelling wordt pas verzonden nadat de betaling is ontvangen.
              </p>
            </div>

            {/* Pricing & Shipping Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Prijzen & Verzendkosten</h2>

              {/* Price Table */}
              <div className="bg-secondary rounded-lg border border-border p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">Prijzen per 10 stuks</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Striphoes Small (10 stuks)</span>
                    <span className="font-semibold text-foreground">€18,95</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Striphoes Medium (10 stuks)</span>
                    <span className="font-semibold text-foreground">€18,95</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Striphoes Large (10 stuks)</span>
                    <span className="font-semibold text-foreground">€18,95</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Testpakket Small-Medium-Large (10 stuks)</span>
                    <span className="font-semibold text-foreground">€18,95</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-secondary rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Verzendkosten</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  De verzendkosten worden berekend op basis van:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mb-4">
                  <li>het land van bestemming</li>
                  <li>de gekozen verzendmethode</li>
                  <li>het totaal gewicht van je bestelling</li>
                </ul>
                <p className="text-sm font-semibold text-foreground mb-3">Indicatieve tarieven naar afhaalpunt:</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>België:</span>
                    <span>vanaf €7,20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nederland:</span>
                    <span>vanaf €10,75</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Form Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Bestelformulier</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
                {/* Klantgegevens */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">Klantgegevens</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Voornaam */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        autoComplete="given-name"
                        {...register("voornaam")}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Jan"
                      />
                      {errors.voornaam && (
                        <p className="text-destructive text-xs mt-1">{errors.voornaam.message}</p>
                      )}
                    </div>

                    {/* Achternaam */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        autoComplete="family-name"
                        {...register("achternaam")}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Janssen"
                      />
                      {errors.achternaam && (
                        <p className="text-destructive text-xs mt-1">{errors.achternaam.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-1">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="jan@voorbeeld.nl"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Telefoonnummer */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Telefoonnummer (optioneel)
                    </label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      {...register("telefoonnummer")}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                </div>

                {/* Adres */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">Adres</h3>
                  <div className="mb-4">
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Straat + huisnummer
                        </label>
                        <input
                          type="text"
                          autoComplete="street-address"
                          {...register("straat")}
                          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Straatnaam 123"
                        />
                        {errors.straat && (
                          <p className="text-destructive text-xs mt-1">{errors.straat.message}</p>
                        )}
                      </div>
                      {deliveryMethod === "adres" && (
                        <div className="w-28">
                          <label className="block text-sm font-medium text-foreground mb-1">
                            Bus
                          </label>
                          <input
                            type="text"
                            {...register("bus")}
                            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="bv. 2A"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Postcode */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Postcode
                      </label>
                      <input
                        type="text"
                        autoComplete="postal-code"
                        {...register("postcode")}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="1234 AB"
                      />
                      {errors.postcode && (
                        <p className="text-destructive text-xs mt-1">{errors.postcode.message}</p>
                      )}
                    </div>

                    {/* Gemeente */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Gemeente
                      </label>
                      <input
                        type="text"
                        autoComplete="address-level2"
                        {...register("gemeente")}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Amsterdam"
                      />
                      {errors.gemeente && (
                        <p className="text-destructive text-xs mt-1">{errors.gemeente.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Land */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Land
                    </label>
                    <select
                      {...register("land")}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="België">België</option>
                      <option value="Nederland">Nederland</option>
                    </select>
                    {errors.land && (
                      <p className="text-destructive text-xs mt-1">{errors.land.message}</p>
                    )}
                  </div>

                  {/* Verzendwijze */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Verzendwijze
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="afhaalpunt"
                          {...register("verzendwijze")}
                          className="w-4 h-4 rounded-full border border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
                        />
                        <span className="text-sm text-foreground">Afhaalpunt</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="adres"
                          {...register("verzendwijze")}
                          className="w-4 h-4 rounded-full border border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
                        />
                        <span className="text-sm text-foreground">Thuis bezorgd</span>
                      </label>
                    </div>
                    {errors.verzendwijze && (
                      <p className="text-destructive text-xs mt-1">{errors.verzendwijze.message}</p>
                    )}
                    {deliveryMethod === "afhaalpunt" && (
                      <div className="mt-3">
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Naam & adres afhaalpunt
                        </label>
                        <input
                          type="text"
                          {...register("afhaalpunt_naam_adres")}
                          placeholder="bv. Bpost – Kerkstraat 12, 2000 Antwerpen"
                          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        {errors.afhaalpunt_naam_adres && (
                          <p className="text-destructive text-xs mt-1">{errors.afhaalpunt_naam_adres.message}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bestelling */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">Bestelling</h3>
                  <div className="space-y-4">
                    {/* Small */}
                    <div className="flex items-end justify-between p-4 bg-secondary rounded-lg border border-border">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Striphoes Small – per 10 stuks (€18,95)
                        </label>
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-muted-foreground">Aantal sets:</label>
                          <input
                            type="number"
                            min="0"
                            {...register("striphoes_small_qty", { valueAsNumber: true })}
                            className="w-20 rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                      {smallQty > 0 && (
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Subtotaal</p>
                          <p className="font-semibold text-foreground">{formatPrice(smallTotal)}</p>
                        </div>
                      )}
                    </div>

                    {/* Medium */}
                    <div className="flex items-end justify-between p-4 bg-secondary rounded-lg border border-border">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Striphoes Medium – per 10 stuks (€18,95)
                        </label>
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-muted-foreground">Aantal sets:</label>
                          <input
                            type="number"
                            min="0"
                            {...register("striphoes_medium_qty", { valueAsNumber: true })}
                            className="w-20 rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                      {mediumQty > 0 && (
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Subtotaal</p>
                          <p className="font-semibold text-foreground">{formatPrice(mediumTotal)}</p>
                        </div>
                      )}
                    </div>

                    {/* Large */}
                    <div className="flex items-end justify-between p-4 bg-secondary rounded-lg border border-border">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Striphoes Large – per 10 stuks (€18,95)
                        </label>
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-muted-foreground">Aantal sets:</label>
                          <input
                            type="number"
                            min="0"
                            {...register("striphoes_large_qty", { valueAsNumber: true })}
                            className="w-20 rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                      {largeQty > 0 && (
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Subtotaal</p>
                          <p className="font-semibold text-foreground">{formatPrice(largeTotal)}</p>
                        </div>
                      )}
                    </div>

                    {/* Testpakket */}
                    <div className="flex items-end justify-between p-4 bg-secondary rounded-lg border border-border">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Testpakket Small-Medium-Large – per 10 stuks (€18,95)
                        </label>
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-muted-foreground">Aantal sets:</label>
                          <input
                            type="number"
                            min="0"
                            {...register("striphoes_testpakket_qty", { valueAsNumber: true })}
                            className="w-20 rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                      {testpakketQty > 0 && (
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Subtotaal</p>
                          <p className="font-semibold text-foreground">{formatPrice(testpakketTotal)}</p>
                        </div>
                      )}
                    </div>

                    {/* Order Totals */}
                    {orderSubtotal > 0 && (
                      <div className="p-4 bg-background border border-border rounded-lg space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Producten</span>
                          <span className="text-foreground">{formatPrice(orderSubtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Verzend en verpakkingskosten</span>
                          <span className="text-foreground">{formatPrice(shippingCost)}</span>
                        </div>
                        <div className="border-t border-border pt-2 flex justify-between">
                          <span className="font-semibold text-foreground">Totaal</span>
                          <span className="font-semibold text-foreground text-lg">{formatPrice(orderTotal)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Opmerkingen */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">Opmerkingen</h3>
                  <textarea
                    {...register("opmerkingen")}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Vul hier eventuele opmerkingen in..."
                    rows={4}
                  />
                </div>

                {/* Bevestiging */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">Bevestiging</h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("terms_accepted")}
                        className="mt-1 w-5 h-5 rounded border border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-muted-foreground">
                        Ik ga akkoord met de{" "}
                        <Link to="/algemene-voorwaarden" className="text-accent hover:underline">
                          algemene voorwaarden
                        </Link>
                        {" "}en het{" "}
                        <Link to="/privacybeleid" className="text-accent hover:underline">
                          privacybeleid
                        </Link>.
                      </span>
                    </label>
                    {errors.terms_accepted && (
                      <p className="text-destructive text-xs">{errors.terms_accepted.message}</p>
                    )}

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("payment_method_understood")}
                        className="mt-1 w-5 h-5 rounded border border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-muted-foreground">
                        Ik begrijp dat de betaling gebeurt via overschrijving en dat mijn bestelling pas verzonden wordt na ontvangst van de betaling.
                      </span>
                    </label>
                    {errors.payment_method_understood && (
                      <p className="text-destructive text-xs">{errors.payment_method_understood.message}</p>
                    )}
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="p-4 bg-destructive/10 border border-destructive text-destructive rounded-lg text-sm">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  Bestelling verzenden
                </button>
              </form>
            </div>

            {/* Info Sections */}
            <div className="space-y-12 pb-12">
              {/* What Happens After */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Wat gebeurt er na je bestelling?</h2>
                <div className="bg-secondary rounded-lg border border-border p-6">
                  <p className="text-muted-foreground mb-4">
                    Na het verzenden van het formulier ontvang je binnen 24 uur een bevestiging per e-mail met:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>het totaalbedrag van je bestelling</li>
                    <li>de verzendkosten, berekend op basis van land, verzendmethode en totaal gewicht</li>
                    <li>onze betaalgegevens (IBAN + mededeling)</li>
                    <li>wij controleren jouw gekozen postpunt</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Je bestelling wordt verzonden zodra de betaling is ontvangen.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Vragen?</h2>
                <div className="bg-secondary rounded-lg border border-border p-6">
                  <p className="text-muted-foreground">
                    Heb je een vraag over je bestelling of over onze striphoezen? Mail ons gerust — we helpen je graag verder.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong className="text-foreground">E-mail:</strong>{" "}
                    <a href="mailto:info@lemius.be" className="text-accent hover:underline">
                      info@lemius.be
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default CheckoutPage;
