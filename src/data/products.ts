export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  dimensions: string;
  klep: string;
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
    dimensions: "295 × 230 mm",
    klep: "40 mm",
    suitableFor: "Belgische en Europese strips",
    thickness: "50 micron",
    price: "€18,95",
    description: "De ideale bescherming voor Belgische en Europese stripformaten. Zuurvrij Cast polypropyleen van 50 micron voor kristalheldere bescherming.",
    metaTitle: "Premium Striphoezen Small – Zuurvrij | 295×230mm",
    metaDescription: "Koop premium zuurvrije striphoezen small (295×230mm) voor Belgische en Europese strips. 50 micron Cast polypropyleen, kristalhelder, archiefkwaliteit. Snelle levering in BE & NL.",
    longDescription: "Onze Premium Hoes Small is speciaal ontworpen voor het beschermen van Belgische en Europese stripformaten. Met afmetingen van 295 × 230 mm past deze hoes perfect om populaire reeksen zoals Suske en Wiske, Piet Pienter en Bert Bibber en Kiekeboe. Het zuurvrije polypropyleen van 50 micron dikte biedt kristalheldere zichtbaarheid terwijl het uw strips beschermt tegen stof, vocht, vingerafdrukken en vergeling. Deze hoezen zijn ontworpen voor langdurig gebruik en behouden hun helderheid jarenlang.",
    benefits: [
      "Perfect passend voor Belgische en Europese stripformaten",
      "50 micron zuurvrij polypropyleen",
      "Kristalhelder – uw covers blijven zichtbaar",
      "Beschermt tegen stof, vocht en vergeling",
      "Scheurvast en duurzaam materiaal",
      "Archiefkwaliteit voor langetermijnopslag"
    ],
    faq: [
      {
        question: "Voor welke strips zijn deze hoezen geschikt?",
        answer: "De Small hoezen (295×230mm) zijn ideaal voor standaard Belgische en Europese strips zoals Suske en Wiske, Asterix, Lucky Luke, en vergelijkbare formaten."
      },
      {
        question: "Hoeveel hoezen zitten er in een verpakking?",
        answer: "De prijs is per 10 stuks."
      }
    ]
  },
  {
    id: "medium",
    slug: "medium",
    name: "Premium Hoes Medium – Zuurvrij",
    shortName: "Medium",
    dimensions: "315 × 240 mm",
    klep: "40 mm",
    suitableFor: "Standaard softcovers",
    thickness: "50 micron",
    price: "€18,95",
    description: "Ontworpen voor Standaard albumformaat (Franco-Belgisch). Zuurvrij Cast polypropyleen van 50 micron voor optimale bescherming van uw collectie.",
    metaTitle: "Premium Striphoezen Medium – Zuurvrij | 315×240mm",
    metaDescription: "Premium zuurvrije striphoezen medium (315×240mm) voor Modern Age strips. 50 micron Cast polypropyleen, archiefkwaliteit. Bestel online met snelle levering.",
    longDescription: "De Premium Hoes Medium is de perfecte keuze voor het beschermen van de softcover strips maar ook HC Lombard. Met afmetingen van 315 × 240 mm biedt deze hoes ruimte voor de standaard formaten van oude en nieuwe strips. Het hoogwaardige zuurvrije cast polypropyleen van 50 micron zorgt voor kristalheldere bescherming zonder dat de covers verborgen worden. Ideaal voor zowel het opbergen als het presenteren van uw collectie.",
    benefits: [
      "Ideaal formaat voor softcovers",
      "50 micron zuurvrij polypropyleen",
      "Perfecte pasvorm zonder overtollige ruimte",
      "Gemakkelijk in te schuiven dankzij gladde afwerking",
      "Professionele archiefkwaliteit"
    ],
    faq: [
      {
        question: "Voor welke strips zijn deze hoezen geschikt?",
        answer: "De Medium hoezen (315×240mm) zijn ideaal voor standaard Belgische en Europese softcovers zoals Buck Danny, Lucky Luke, Beverpatroelje, Michel Vaillant, en vergelijkbare formaten."
      },
      {
        question: "Wat is het verschil met de Small hoezen?",
        answer: "De Medium hoezen zijn iets groter (315×240mm vs 295×230mm) en zijn ontworpen voor het standaard formaat van Europese softcovers, terwijl de Small hoezen beter passen voor bijvoorbeeld de oudere Suske en Wiske strips."
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
    dimensions: "330 × 260 mm",
    klep: "40 mm",
    suitableFor: "Hardcover strips van de jaren '40 en '50",
    thickness: "50 micron",
    price: "€18,95",
    description: "Speciaal voor Europese strips. Zuurvrij Cast polypropyleen van 50 micron voor maximale bescherming van uw kostbare exemplaren.",
    metaTitle: "Premium Striphoezen Large – Zuurvrij | 330×258mm",
    metaDescription: "Premium zuurvrije striphoezen large (330×258mm) voor Silver & Golden Age strips. 50 micron Cast polypropyleen, archiefkwaliteit bescherming. Bestel nu online.",
    longDescription: "De Premium Hoes Large is speciaal ontworpen voor het beschermen van grotere en vaak waardevolle hardcover strips zoals HC van Casterman. Met afmetingen van 330 × 260 mm past deze hoes perfect om de iets grotere formaten uit de jaren '40 tot '70. Juist voor deze waardevolle exemplaren is optimale bescherming essentieel. Ons 50 micron zuurvrij polypropyleen biedt de hoogste graad van bescherming tegen alle vormen van degradatie.",
    benefits: [
      "Speciaal ontworpen voor Europese hardcover formaten",
      "50 micron premium zuurvrij polypropyleen",
      "Maximale bescherming voor waardevolle exemplaren",
      "Voorkomt vergeling en broosheid",
      "Kristalhelder voor optimale presentatie",
      "Museumkwaliteit archivering"
    ],
    faq: [
      {
        question: "Zijn deze hoezen geschikt voor waardevolle stripverhalen?",
        answer: "Absoluut. Onze Large hoezen bieden archiefkwaliteit bescherming die ideaal is voor waardevolle stripverhalen. Het zuurvrije materiaal voorkomt degradatie en helpt de waarde van uw strips te behouden."
      },
      {
        question: "Wat is het verschil tussen poly en mylar?",
        answer: "Cast Polypropyleen (CPP) biedt uitstekende bescherming tegen een zeer scherpe prijs. Mylar (polyester) is nog duurzamer maar aanzienlijk duurder. Voor de meeste verzamelaars biedt onze 50 micron CPP de ideale balans tussen kwaliteit en prijs."
      },
      {
        question: "Hoe bewaar ik mijn strips het beste?",
        answer: "Bewaar uw strips rechtop in een stevige doos, in onze zuurvrije hoezen, bij een stabiele temperatuur en lage luchtvochtigheid. Vermijd direct zonlicht en extreme temperatuurschommelingen."
      }
    ]
  },
  {
    id: "testpakket",
    slug: "testpakket",
    name: "Testpakket Small-Medium-Large – Zuurvrij",
    shortName: "Testpakket",
    dimensions: "Assortiment",
    klep: "40 mm",
    suitableFor: "Alle formaten: Belgisch, Europees en hardcover",
    thickness: "50 micron",
    price: "€18,95",
    description: "Test nu onze hoesjes en bestel 3× small, 5× medium en 2× large.",
    metaTitle: "Testpakket Striphoezen Small-Medium-Large – Zuurvrij",
    metaDescription: "Probeer alle drie formaten met ons testpakket: 3× Small, 5× Medium en 2× Large zuurvrije striphoezen. 50 micron Cast polypropyleen. Snelle levering in BE & NL.",
    longDescription: "Het Testpakket is de ideale manier om alle drie formaten uit te proberen. Je ontvangt 3 hoezen Small (295×230mm), 5 hoezen Medium (315×240mm) en 2 hoezen Large (330×260mm). Zo ontdek je welk formaat het beste past bij jouw collectie, zonder meteen een grote hoeveelheid te bestellen.",
    benefits: [
      "Ontdek alle drie formaten in één pakket",
      "3× Small, 5× Medium en 2× Large",
      "Zuurvrij Cast polypropyleen van 50 micron",
      "Ideaal om het juiste formaat te vinden",
    ],
    faq: [],
  }
];
