import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const TermsPage = () => {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Algemene voorwaarden" }
          ]} />

          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Algemene Voorwaarden</h1>
            <p className="text-sm text-muted-foreground mb-8">Laatste update: 19/2/2026</p>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Welkom bij The Collector's Sleeve. Deze algemene voorwaarden zijn van toepassing op alle bestellingen die worden geplaatst via onze webshop. Door een bestelling te plaatsen, gaat u akkoord met deze voorwaarden.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">1. Identiteit van de onderneming</h2>
                <p>
                  Lemius bv, Londerzeel, België<br />
                  Ondernemingsnummer 1034195093/ BTW‑nummer: BE1034195093<br />
                  E‑mail: info@lemius.be
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">2. Toepasselijkheid</h2>
                <p>
                  Deze voorwaarden gelden voor alle aanbiedingen, bestellingen, leveringen en overeenkomsten via de The Collector's Sleeve‑webshop. Afwijkingen zijn enkel geldig indien schriftelijk bevestigd door The Collector's Sleeve.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">3. Productinformatie</h2>
                <p>Wij streven naar correcte en volledige productinformatie.</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Afmetingen kunnen licht variëren door productie‑toleranties.</li>
                  <li>Kleuren kunnen afwijken door scherminstellingen.</li>
                  <li>"Archiefkwaliteit" verwijst naar zuurvrije, pH‑neutrale materialen zonder weekmakers, geschikt voor langdurige bewaring.</li>
                </ul>
                <p className="mt-3">Fouten of onvolledigheden geven geen recht op schadevergoeding.</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">4. Prijzen</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Alle prijzen worden weergegeven in euro.</li>
                  <li>Belgische en Nederlandse klanten betalen btw volgens hun land; Franse klanten volgens EU‑regels.</li>
                  <li>Verzendkosten worden apart vermeld tijdens het bestelproces.</li>
                  <li>The Collector's Sleeve behoudt zich het recht voor prijzen te wijzigen, maar de prijs op het moment van bestelling blijft van toepassing.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">5. Bestellen en Betalen</h2>
                <p>
                  Een bestelling is definitief zodra de betaling is voltooid. Wij ondersteunen o.a.:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>Betaalmethoden zoals vermeld op de website</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">6. Levering</h2>
                <p>
                  The Collector's Sleeve levert in België, Nederland en Frankrijk.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Bestellingen worden verzonden via onze logistieke partners.</li>
                  <li>Levertijden zijn indicatief en niet bindend.</li>
                  <li>Het risico gaat over op de klant zodra het pakket fysiek is geleverd.</li>
                </ul>
                <p className="mt-3">Indien een product niet leverbaar blijkt, wordt het aankoopbedrag terugbetaald.</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">7. Herroepingsrecht (14 dagen – EU‑regelgeving)</h2>
                <p className="mb-3">
                  U heeft het recht uw bestelling binnen 14 dagen na ontvangst te herroepen.
                </p>

                <h3 className="font-semibold text-foreground mb-2">Uitzonderingen</h3>
                <p className="mb-3">
                  Om hygiënische redenen kunnen geopende of gebruikte hoezen niet worden geretourneerd.
                </p>

                <h3 className="font-semibold text-foreground mb-2">Retourprocedure</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Meld uw retour via e‑mail.</li>
                  <li>Stuur de producten binnen 14 dagen terug in originele staat.</li>
                  <li>Retourkosten zijn voor rekening van de klant.</li>
                  <li>Na ontvangst betalen wij het aankoopbedrag terug binnen 14 dagen.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">8. Garantie</h2>
                <p className="mb-3">
                  U heeft recht op de wettelijke garantie conform EU‑richtlijnen. Niet gedekt zijn:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>schade door verkeerd gebruik</li>
                  <li>normale slijtage</li>
                  <li>schade door licht, vocht of onjuiste opslag</li>
                </ul>
                <p className="mt-3">Bij defecten dient u ons binnen een redelijke termijn te contacteren.</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">9. Aansprakelijkheid</h2>
                <p className="mb-3">
                  The Collector's Sleeve is niet aansprakelijk voor:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>indirecte schade (zoals gevolgschade of winstverlies)</li>
                  <li>schade door verkeerd gebruik van producten</li>
                  <li>verkleuring of veroudering van strips door licht, vocht of opslagomstandigheden</li>
                </ul>
                <p className="mt-3">Onze totale aansprakelijkheid blijft beperkt tot het bedrag van de bestelling.</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">10. Privacy & Cookies</h2>
                <p>
                  Wij verwerken persoonsgegevens volgens de GDPR‑wetgeving. Raadpleeg ons Privacybeleid voor informatie over:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>welke gegevens worden verzameld</li>
                  <li>hoe ze worden gebruikt</li>
                  <li>bewaartermijnen</li>
                  <li>cookiegebruik</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">11. Intellectuele eigendom</h2>
                <p>
                  Alle teksten, foto's, logo's en ontwerpen op deze website zijn eigendom van The Collector's Sleeve. Kopiëren, verspreiden of gebruiken zonder schriftelijke toestemming is verboden.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">12. Klachtenprocedure</h2>
                <p className="mb-3">
                  Klachten kunnen worden ingediend via e‑mail. Wij streven naar een antwoord binnen 5 werkdagen.
                </p>
                <p className="mb-3">
                  Indien u niet tevreden bent met de afhandeling, kunt u terecht bij:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>België: Consumentenombudsdienst</li>
                  <li>Nederland: Geschillencommissie</li>
                  <li>Frankrijk: Médiateur de la consommation</li>
                  <li>EU: Online Dispute Resolution (ODR) platform</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">13. Toepasselijk recht</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Belgische klanten: Belgisch recht</li>
                  <li>Nederlandse klanten: Nederlands recht</li>
                  <li>Franse klanten: Frans recht</li>
                </ul>
                <p className="mt-3">
                  Geschillen worden voorgelegd aan de bevoegde rechtbank van de woonplaats van de consument of van de zetel van The Collector's Sleeve.
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

export default TermsPage;
