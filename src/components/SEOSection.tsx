import { motion } from "framer-motion";

const SEOSection = () => {
  return (
    <section id="waarom-premium" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Alles over striphoezen & comic sleeves
          </h2>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              Wie een <strong>stripverzameling</strong> opbouwt, weet dat bescherming essentieel is. Of het nu gaat om Belgische klassiekers, Europese graphic novels of Amerikaanse comics – elke strip verdient de juiste <strong>striphoezen</strong> om in topconditie te blijven. <strong>Comic sleeves</strong> en <strong>comic bags</strong> zijn dé basis voor elke serieuze verzamelaar die zijn collectie wil beschermen tegen de tand des tijds.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground !mt-10">
              Wat zijn striphoezen en waarom zijn ze belangrijk?
            </h3>
            <p>
              <strong>Striphoezen</strong> (ook wel <strong>strip hoesjes</strong>, <strong>comic bags</strong> of <strong>comic book sleeves</strong> genoemd) zijn transparante beschermhoezen die om individuele strips worden geschoven. Ze bieden bescherming tegen stof, vocht, vingerafdrukken, kreuken en – cruciaal – tegen vergeling. Voor het langdurig bewaren van een <strong>stripverzameling</strong> is het gebruik van <strong>zuurvrije striphoezen</strong> van <strong>archiefkwaliteit</strong> onmisbaar.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground !mt-10">
              Hoe ontstaat vergeling en hoe voorkom je het?
            </h3>
            <p>
              Vergeling van papier is een chemisch proces dat wordt veroorzaakt door lignine – een natuurlijke stof in papier die reageert met zuurstof en UV-licht. Dit proces versnelt bij hoge luchtvochtigheid, warmte en contact met zure materialen. Eenmaal vergeeld is het proces onomkeerbaar. <strong>Zuurvrije striphoezen</strong> van premium polypropyleen voorkomen dit door een chemisch neutrale barrière te vormen. Zo beschermt u uw strips effectief tegen <strong>vergeling</strong> en behouden ze hun oorspronkelijke uitstraling.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground !mt-10">
              Het verschil tussen poly en mylar sleeves
            </h3>
            <p>
              Bij <strong>comic sleeves</strong> zijn er twee hoofdtypen materiaal: polypropyleen (poly) en mylar (polyester). Polypropyleen is het populairst dankzij de uitstekende prijs-kwaliteitverhouding. Het is helder, stevig en <strong>zuurvrij</strong>, en gaat bij juiste opslag 15 tot 25 jaar mee. <strong>Comic sleeves 50 micron</strong> in polypropyleen bieden een robuuste bescherming die geschikt is voor de meeste verzamelaars.
            </p>
            <p>
              Mylar sleeves (officieel polyethyleentereftalaat of PET) zijn het premium alternatief. Ze zijn volkomen chemisch inert, gaan meer dan 50 jaar mee en worden gebruikt door musea en professionele archivisten. De prijs ligt echter twee tot drie keer hoger. Voor waardevolle key issues en sleutelnummers kan mylar een verstandige investering zijn, maar voor het gros van een collectie bieden onze premium <strong>comic sleeves 50 micron</strong> polypropyleen de ideale oplossing.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground !mt-10">
              Welk formaat kiest u?
            </h3>
            <p>
              <strong>Comic bags</strong> zijn beschikbaar in verschillende maten, afgestemd op de drie grote categorieën: <strong>Modern Age</strong>, <strong>Silver Age</strong> en <strong>Golden Age</strong> comics. Belgische en Europese strips hebben vaak een eigen, kleiner formaat. Onze collectie biedt drie zorgvuldig afgestemde maten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Small (285×210mm)</strong> – Perfect voor Belgische en Europese stripformaten</li>
              <li><strong>Medium (300×220mm)</strong> – Ideaal voor <strong>comic bags modern</strong> age comics</li>
              <li><strong>Large (306×232mm)</strong> – Ontworpen voor <strong>comic bags silver age</strong> en <strong>golden age</strong> formaten</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-foreground !mt-10">
              Investering in waardebehoud
            </h3>
            <p>
              Het beschermen van uw strips is meer dan een hobby – het is een investering. De waarde van goed bewaarde comics stijgt gestaag, terwijl onbeschermde exemplaren hun waarde snel verliezen. <strong>Comic protectors</strong> en <strong>comic storage supplies</strong> zijn relatief goedkoop vergeleken met de waarde die ze beschermen. Een set <strong>premium comic sleeves</strong> kost slechts een fractie van de waarde van de strips die erin worden bewaard.
            </p>
            <p>
              Of u nu op zoek bent naar <strong>striphoezen kopen online</strong>, de <strong>beste striphoezen voor verzamelaars</strong> wilt vergelijken, of specifiek zoekt naar <strong>comic bags met boards</strong> – kwaliteit moet altijd voorop staan. Kies voor <strong>archiefkwaliteit comic sleeves</strong> en weet dat uw verzameling veilig is voor de komende decennia.
            </p>
            <p>
              In onze <strong>striphoezen webshop</strong> vindt u alles wat u nodig heeft om uw collectie professioneel te beschermen. Van losse <strong>comic sleeves bestellen</strong> tot complete <strong>comic supplies kopen</strong> – wij bieden de kwaliteit die uw verzameling verdient, met snelle levering in heel België en Nederland.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOSection;
