export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  dimensions: string;
  suitableFor: string;
  thickness: string;
  price: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  longDescription: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: "small",
    slug: "small",
    name: "Premium Hoes Small – Zuurvrij",
    shortName: "Small",
    dimensions: "285 × 210 mm",
    suitableFor: "Belgische en Europese strips",
    thickness: "100 micron",
    price: "€8,95",
    description: "De ideale bescherming voor Belgische en Europese stripformaten. Zuurvrij polypropyleen van 100 micron voor kristalheldere bescherming.",
    metaTitle: "Premium Striphoezen Small – Zuurvrij | 285×210mm",
    metaDescription: "Koop premium zuurvrije striphoezen small (285×210mm) voor Belgische en Europese strips. 100 micron, kristalhelder, archiefkwaliteit. Snelle levering in BE & NL.",
    longDescription: "Onze Premium Hoes Small is speciaal ontworpen voor het beschermen van Belgische en Europese stripformaten. Met afmetingen van 285 × 210 mm past deze hoes perfect om populaire reeksen zoals Suske en Wiske, Asterix, Kuifje en Lucky Luke. Het zuurvrije polypropyleen van 100 micron dikte biedt kristalheldere zichtbaarheid terwijl het uw strips beschermt tegen stof, vocht, vingerafdrukken en vergeling. Deze hoezen zijn ontworpen voor langdurig gebruik en behouden hun helderheid jarenlang.",
    benefits: [
      "Perfect passend voor Belgische en Europese stripformaten",
      "100 micron zuurvrij polypropyleen",
      "Kristalhelder – uw covers blijven zichtbaar",
      "Beschermt tegen stof, vocht en vergeling",
      "Scheurvast en duurzaam materiaal",
      "Archiefkwaliteit voor langetermijnopslag"
    ],
    faq: [
      {
        question: "Voor welke strips zijn deze hoezen geschikt?",
        answer: "De Small hoezen (285×210mm) zijn ideaal voor standaard Belgische en Europese strips zoals Suske en Wiske, Asterix, Lucky Luke, en vergelijkbare formaten."
      },
      {
        question: "Wat betekent 'zuurvrij' precies?",
        answer: "Zuurvrij betekent dat het materiaal geen zuren bevat die het papier van uw strips kunnen aantasten. Dit voorkomt vergeling en broosheid op lange termijn, essentieel voor het behoud van waarde."
      },
      {
        question: "Hoeveel hoezen zitten er in een verpakking?",
        answer: "De prijs is per 10 stuks. Grotere hoeveelheden zijn beschikbaar met volumekorting."
      },
      {
        question: "Hoe lang gaan deze hoezen mee?",
        answer: "Bij normaal gebruik en opslag gaan onze polypropyleen hoezen tientallen jaren mee zonder te vergelen of bros te worden."
      }
    ]
  },
  {
    id: "medium",
    slug: "medium",
    name: "Premium Hoes Medium – Zuurvrij",
    shortName: "Medium",
    dimensions: "300 × 220 mm",
    suitableFor: "Modern Age comics",
    thickness: "100 micron",
    price: "€9,95",
    description: "Ontworpen voor Modern Age comics. Zuurvrij polypropyleen van 100 micron voor optimale bescherming van uw moderne collectie.",
    metaTitle: "Premium Striphoezen Medium – Zuurvrij | 300×220mm",
    metaDescription: "Premium zuurvrije striphoezen medium (300×220mm) voor Modern Age comics. 100 micron polypropyleen, archiefkwaliteit. Bestel online met snelle levering.",
    longDescription: "De Premium Hoes Medium is de perfecte keuze voor het beschermen van Modern Age comics. Met afmetingen van 300 × 220 mm biedt deze hoes ruimte voor de standaard formaten van hedendaagse comics. Het hoogwaardige zuurvrije polypropyleen van 100 micron zorgt voor kristalheldere bescherming zonder dat de covers verborgen worden. Ideaal voor zowel het opbergen als het presenteren van uw collectie.",
    benefits: [
      "Ideaal formaat voor Modern Age comics",
      "100 micron zuurvrij polypropyleen",
      "Perfecte pasvorm zonder overtollige ruimte",
      "UV-bestendig materiaal",
      "Gemakkelijk in te schuiven dankzij gladde afwerking",
      "Professionele archiefkwaliteit"
    ],
    faq: [
      {
        question: "Wat zijn Modern Age comics?",
        answer: "Modern Age comics zijn strips uitgegeven vanaf circa 1985 tot heden. Ze hebben doorgaans een standaard formaat dat perfect past in onze Medium hoezen."
      },
      {
        question: "Kan ik deze hoezen ook gebruiken met boards?",
        answer: "Ja, onze Medium hoezen zijn ruim genoeg om samen met een backing board gebruikt te worden voor extra stevigheid en bescherming."
      },
      {
        question: "Wat is het verschil met de Small hoezen?",
        answer: "De Medium hoezen zijn iets groter (300×220mm vs 285×210mm) en zijn specifiek ontworpen voor het standaard formaat van Modern Age comics, terwijl de Small hoezen beter passen bij Europese stripformaten."
      },
      {
        question: "Zijn deze hoezen herbruikbaar?",
        answer: "Ja, de hoezen kunnen meerdere keren gebruikt worden. Ze zijn stevig genoeg om strips uit te nemen en opnieuw in te schuiven zonder beschadiging."
      }
    ]
  },
  {
    id: "large",
    slug: "large",
    name: "Premium Hoes Large – Zuurvrij",
    shortName: "Large",
    dimensions: "306 × 232 mm",
    suitableFor: "Silver & Golden Age comics",
    thickness: "100 micron",
    price: "€10,95",
    description: "Speciaal voor waardevolle Silver & Golden Age comics. Zuurvrij polypropyleen van 100 micron voor maximale bescherming van uw kostbare exemplaren.",
    metaTitle: "Premium Striphoezen Large – Zuurvrij | 306×232mm",
    metaDescription: "Premium zuurvrije striphoezen large (306×232mm) voor Silver & Golden Age comics. 100 micron, archiefkwaliteit bescherming. Bestel nu online.",
    longDescription: "De Premium Hoes Large is speciaal ontworpen voor het beschermen van grotere en vaak waardevolle Silver Age en Golden Age comics. Met afmetingen van 306 × 232 mm past deze hoes perfect om de iets grotere formaten uit de jaren '40 tot '70. Juist voor deze waardevolle exemplaren is optimale bescherming essentieel. Ons 100 micron zuurvrij polypropyleen biedt de hoogste graad van bescherming tegen alle vormen van degradatie.",
    benefits: [
      "Speciaal ontworpen voor Silver & Golden Age formaten",
      "100 micron premium zuurvrij polypropyleen",
      "Maximale bescherming voor waardevolle exemplaren",
      "Voorkomt vergeling en broosheid",
      "Kristalhelder voor optimale presentatie",
      "Museumkwaliteit archivering"
    ],
    faq: [
      {
        question: "Waarom zijn Silver & Golden Age comics groter?",
        answer: "Comics uit de Golden Age (1938-1956) en Silver Age (1956-1970) werden op een groter formaat gedrukt dan moderne comics. Onze Large hoezen zijn specifiek afgestemd op deze afmetingen."
      },
      {
        question: "Zijn deze hoezen geschikt voor waardevolle sleutelnummers?",
        answer: "Absoluut. Onze Large hoezen bieden archiefkwaliteit bescherming die ideaal is voor waardevolle key issues. Het zuurvrije materiaal voorkomt degradatie en helpt de waarde van uw comics te behouden."
      },
      {
        question: "Wat is het verschil tussen poly en mylar?",
        answer: "Polypropyleen (poly) biedt uitstekende bescherming tegen een zeer scherpe prijs. Mylar (polyester) is nog duurzamer maar aanzienlijk duurder. Voor de meeste verzamelaars biedt onze 100 micron poly de ideale balans tussen kwaliteit en prijs."
      },
      {
        question: "Hoe bewaar ik mijn comics het beste?",
        answer: "Bewaar uw comics rechtop in een stevige doos, in onze zuurvrije hoezen, bij een stabiele temperatuur en lage luchtvochtigheid. Vermijd direct zonlicht en extreme temperatuurschommelingen."
      }
    ]
  }
];
