import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const PrivacyPage = () => {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <div className="container py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Privacybeleid" }
          ]} />

          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Privacybeleid – The Collector's Sleeve</h1>
            <p className="text-sm text-muted-foreground mb-8">Laatste update: 19/2/2026</p>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Bij The Collector's Sleeve hechten we veel belang aan uw privacy. In dit privacybeleid leggen we uit welke gegevens we verzamelen, waarom we dat doen en hoe we uw gegevens beschermen. Dit beleid is van toepassing op alle bezoekers en klanten uit België, Nederland en Frankrijk.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">1. Wie is verantwoordelijk voor uw gegevens?</h2>
                <p>
                  Lemius bv, Londerzeel, België<br />
                  Ondernemingsnummer 1034195093/ BTW‑nummer: BE1034195093<br />
                  E‑mail: info@lemius.be
                </p>
                <p className="mt-3">
                  The Collector's Sleeve is de verwerkingsverantwoordelijke voor alle persoonsgegevens die via onze webshop worden verzameld.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">2. Welke gegevens verzamelen we?</h2>

                <h3 className="font-semibold text-foreground mb-2">2.1 Gegevens die u zelf verstrekt</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Naam</li>
                  <li>Adres- en leveringsgegevens</li>
                  <li>E‑mailadres</li>
                  <li>Betaalgegevens (via beveiligde betaalproviders)</li>
                  <li>Bestelgeschiedenis</li>
                  <li>Berichten via e‑mail of contactformulier</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">2.2 Automatisch verzamelde gegevens</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>IP‑adres</li>
                  <li>Browser- en apparaatgegevens</li>
                  <li>Bezochte pagina's</li>
                  <li>Cookies (zie sectie 7)</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">2.3 Gegevens via betaalpartners</h3>
                <p>
                  Wij ontvangen nooit uw volledige betaalkaartgegevens. Betalingen verlopen via externe, beveiligde providers.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">3. Waarom verzamelen we deze gegevens?</h2>

                <h3 className="font-semibold text-foreground mb-2">3.1 Om uw bestelling te verwerken</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Betaling afhandelen</li>
                  <li>Producten verzenden</li>
                  <li>Klantenservice bieden</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">3.2 Voor communicatie</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bevestiging van uw bestelling</li>
                  <li>Updates over levering</li>
                  <li>Antwoord op vragen of klachten</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">3.3 Voor verbetering van onze webshop</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Analyse van bezoekersgedrag</li>
                  <li>Optimalisatie van gebruikservaring</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">3.4 Wettelijke verplichtingen</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Boekhouding</li>
                  <li>Fiscale verplichtingen</li>
                  <li>Bewaarplicht voor transacties</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">4. Rechtsgrond van de verwerking</h2>
                <p>Wij verwerken uw gegevens op basis van:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Contractuele noodzaak (uitvoering van uw bestelling)</li>
                  <li>Wettelijke verplichting</li>
                  <li>Gerechtvaardigd belang (optimalisatie van de webshop)</li>
                  <li>Toestemming (bijv. marketingcookies of nieuwsbrief)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">5. Met wie delen we uw gegevens?</h2>

                <h3 className="font-semibold text-foreground mb-2">5.1 Logistieke partners</h3>
                <p>Voor de levering van uw bestelling.</p>

                <h3 className="font-semibold text-foreground mb-2 mt-4">5.2 Betaalproviders</h3>
                <p>Voor veilige verwerking van betalingen.</p>

                <h3 className="font-semibold text-foreground mb-2 mt-4">5.3 IT‑ en hostingpartners</h3>
                <p>Voor het functioneren van de webshop.</p>

                <h3 className="font-semibold text-foreground mb-2 mt-4">5.4 Wettelijke instanties</h3>
                <p>Indien verplicht door wetgeving.</p>

                <p className="mt-3 font-semibold text-foreground">
                  Wij verkopen nooit persoonsgegevens aan derden.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">6. Hoe lang bewaren we uw gegevens?</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bestelgegevens: 7 jaar (wettelijke verplichting)</li>
                  <li>Klantcommunicatie: maximaal 2 jaar</li>
                  <li>Cookies: volgens de geldigheidsduur van de cookie (zie sectie 7)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">7. Cookies</h2>
                <p className="mb-3">
                  The Collector's Sleeve gebruikt cookies om:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>de webshop correct te laten functioneren</li>
                  <li>uw winkelmandje te onthouden</li>
                  <li>statistieken te verzamelen</li>
                  <li>voorkeuren op te slaan</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">7.1 Soorten cookies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Noodzakelijke cookies</li>
                  <li>Analytische cookies (geanonimiseerd)</li>
                </ul>
                <p className="mt-3">
                  Bij uw eerste bezoek kunt u uw cookievoorkeuren instellen.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">8. Uw rechten (GDPR)</h2>
                <p className="mb-3">
                  U heeft het recht om:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>inzage te vragen in uw gegevens</li>
                  <li>correctie te vragen van onjuiste gegevens</li>
                  <li>verwijdering te vragen (voor zover wettelijk toegestaan)</li>
                  <li>bezwaar te maken tegen verwerking</li>
                  <li>beperking van verwerking te vragen</li>
                  <li>gegevensoverdraagbaarheid te vragen</li>
                  <li>uw toestemming in te trekken</li>
                </ul>
                <p className="mt-3">
                  U kunt deze rechten uitoefenen via e‑mail.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">9. Beveiliging van uw gegevens</h2>
                <p className="mb-3">
                  Wij nemen passende technische en organisatorische maatregelen, waaronder:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>versleutelde verbindingen (HTTPS)</li>
                  <li>beveiligde betaalverwerking</li>
                  <li>beperkte toegang tot persoonsgegevens</li>
                  <li>regelmatige beveiligingscontroles</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">10. Klachten</h2>
                <p className="mb-3">
                  Indien u een klacht heeft over de verwerking van uw gegevens, kunt u terecht bij:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>België: Gegevensbeschermingsautoriteit</li>
                  <li>Nederland: Autoriteit Persoonsgegevens</li>
                  <li>Frankrijk: CNIL</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">11. Wijzigingen aan dit privacybeleid</h2>
                <p>
                  The Collector's Sleeve kan dit privacybeleid wijzigen. De meest recente versie is altijd beschikbaar op onze website.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">12. Contact</h2>
                <p>
                  Voor vragen over dit privacybeleid kunt u ons contacteren via:<br />
                  E‑mail: info@lemius.be
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

export default PrivacyPage;
