import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_FORM_ID = "mykdogvl";

const schema = z.object({
  voornaam: z.string().min(2, "Vul je voornaam in"),
  achternaam: z.string().min(2, "Vul je achternaam in"),
  email: z.string().email("Ongeldig e-mailadres"),
  telefoonnummer: z.string().optional(),
  onderwerp: z.string().min(5, "Vul een onderwerp in (minimaal 5 karakters)"),
  bericht: z.string().min(10, "Vul je bericht in (minimaal 10 karakters)"),
});

type FormValues = z.infer<typeof schema>;

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      voornaam: "",
      achternaam: "",
      email: "",
      telefoonnummer: "",
      onderwerp: "",
      bericht: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setSubmitError(null);

    const payload = {
      voornaam: data.voornaam,
      achternaam: data.achternaam,
      email: data.email,
      telefoonnummer: data.telefoonnummer || "–",
      onderwerp: data.onderwerp,
      bericht: data.bericht,
      _subject: `Nieuw contactformulier - ${data.onderwerp}`,
      _replyto: data.email,
    };

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
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
              Bericht verzonden!
            </h1>
            <p className="text-muted-foreground mb-2">
              Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
            </p>
            <p className="text-muted-foreground mb-8">
              Controleer ook je spam-folder als je geen antwoord ontvangt.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center px-6 py-3 bg-gradient-gold text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Nieuw bericht versturen
            </button>
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
            { label: "Contact" }
          ]} />

          <div className="max-w-3xl mx-auto mt-6">
            {/* Header */}
            <div className="mb-10">
              <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Contact</h1>
              <p className="text-lg text-muted-foreground mb-4">Neem contact met ons op</p>
              <p className="text-muted-foreground">
                Heb je vragen over onze striphoezen of wil je meer informatie? Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {submitError}
                </div>
              )}

              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Voornaam *
                  </label>
                  <input
                    {...register("voornaam")}
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Je voornaam"
                  />
                  {errors.voornaam && (
                    <p className="mt-1 text-sm text-red-500">{errors.voornaam.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Achternaam *
                  </label>
                  <input
                    {...register("achternaam")}
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Je achternaam"
                  />
                  {errors.achternaam && (
                    <p className="mt-1 text-sm text-red-500">{errors.achternaam.message}</p>
                  )}
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    E-mailadres *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="je@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    {...register("telefoonnummer")}
                    type="tel"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="+32 (0)1 23 45 67 89"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Onderwerp *
                </label>
                <input
                  {...register("onderwerp")}
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Waarvoor neem je contact op?"
                />
                {errors.onderwerp && (
                  <p className="mt-1 text-sm text-red-500">{errors.onderwerp.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Bericht *
                </label>
                <textarea
                  {...register("bericht")}
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Schrijf je bericht hier..."
                />
                {errors.bericht && (
                  <p className="mt-1 text-sm text-red-500">{errors.bericht.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gradient-gold text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Bezig met verzenden...
                    </>
                  ) : (
                    "Bericht versturen"
                  )}
                </button>
              </div>

              <p className="text-xs text-muted-foreground">
                * Vereist veld
              </p>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
