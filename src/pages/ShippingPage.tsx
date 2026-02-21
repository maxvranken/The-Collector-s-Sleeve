import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const ShippingPage = () => {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Levering & Verzendkosten" }
          ]} />

          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Levering & Verzendkosten (België & Nederland)</h1>
            <p className="text-muted-foreground mb-8">
              Bij The Collector's Sleeve verzenden we elke bestelling met zorg, stevige verpakking en volledige traceerbaarheid. Zo komt jouw collectie altijd veilig aan.
            </p>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              {/* 1. Verzendgebied */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">1. Verzendgebied</h2>
                <p>
                  Op dit moment leveren wij in België en Nederland.
                </p>
              </div>

              {/* 2. Verzendkosten */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">2. Verzendkosten</h2>
                <p className="mb-4">
                  Onze verzendkosten zijn gebaseerd op het gewicht van je bestelling en de gekozen leveringsmethode.
                </p>

                <p className="font-semibold text-foreground mb-3">
                  0–5 kg (tot maximaal 50 stuks, afhankelijk van small/medium/large verhouding)
                </p>

                <p className="font-semibold text-foreground mb-3">
                  5–10 kg (meer dan 50 stuks tot max 200 stuks, afhankelijk van small/medium/large verhouding)
                </p>

                {/* Belgium Tables */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Naar afhaalpunt BE</h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Gewicht</th>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Verzendkost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2 text-muted-foreground">0–5 kg</td>
                          <td className="px-4 py-2 text-muted-foreground">€7,20</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2 text-muted-foreground">5–10 kg</td>
                          <td className="px-4 py-2 text-muted-foreground">€7,70</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Naar adres BE</h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Gewicht</th>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Verzendkost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2 text-muted-foreground">0–5 kg</td>
                          <td className="px-4 py-2 text-muted-foreground">€9,95</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2 text-muted-foreground">5–10 kg</td>
                          <td className="px-4 py-2 text-muted-foreground">€10,95</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Netherlands */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Naar afhaalpunt NL</h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Gewicht</th>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Verzendkost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2 text-muted-foreground">0–23 kg</td>
                          <td className="px-4 py-2 text-muted-foreground">€10,75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Naar adres NL</h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Gewicht</th>
                          <th className="px-4 py-2 text-left font-semibold text-foreground">Verzendkost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2 text-muted-foreground">0–23 kg</td>
                          <td className="px-4 py-2 text-muted-foreground">€11,05</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 3. Levertijd */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">3. Levertijd</h2>
                <p className="mb-3">
                  Voor België bedraagt de gemiddelde levertijd:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                  <li>1–2 werkdagen</li>
                </ul>
                <p className="mb-3">
                  Voor Nederland bedraagt de gemiddelde levertijd:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                  <li>3–4 werkdagen</li>
                </ul>
                <p>
                  Tijdens drukke periodes (zoals feestdagen) kan dit licht afwijken.
                </p>
              </div>

              {/* 4. Verpakking */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">4. Verpakking</h2>
                <p className="mb-3">
                  Alle bestellingen worden verzonden in een stevige bubbelenveloppe, aangevuld met:
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>extra versteviging om plooien te voorkomen</li>
                  <li>vochtwerende bescherming</li>
                </ul>
                <p className="mt-3">
                  Zo komt jouw bestelling altijd in perfecte staat aan.
                </p>
              </div>

              {/* 5. Track & Trace */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">5. Track & Trace</h2>
                <p>
                  Zodra je pakket is verzonden, ontvang je automatisch een Track & Trace-link via e-mail.
                </p>
              </div>

              {/* 6. Niet thuis? */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">6. Niet thuis?</h2>
                <p className="mb-3">
                  Indien je niet thuis bent:
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>wordt het pakket opnieuw aangeboden, of</li>
                  <li>kun je het ophalen in een afhaalpunt van de vervoerder</li>
                </ul>
                <p className="mt-3">
                  De exacte procedure hangt af van de verzendpartner.
                </p>
              </div>

              {/* 7. Problemen met levering */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">7. Problemen met levering</h2>
                <p>
                  Is je pakket vertraagd, beschadigd of niet aangekomen? Contacteer ons via{" "}
                  <a href="mailto:info@lemius.be" className="text-accent hover:underline">
                    info@lemius.be
                  </a>
                  {" "}en we helpen je snel verder.
                </p>
              </div>

              {/* 8. Retourneren */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">8. Retourneren</h2>
                <p className="mb-3">
                  Retourneren kan binnen 14 dagen na ontvangst. Let op: geopende of gebruikte hoezen kunnen om hygiënische redenen niet worden geretourneerd.
                </p>
                <p>
                  Alle details vind je in onze{" "}
                  <Link to="/algemene-voorwaarden" className="text-accent hover:underline">
                    Algemene Voorwaarden
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ShippingPage;
