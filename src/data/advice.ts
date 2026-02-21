export interface AdviceArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  content: string;
}

export const adviceArticles: AdviceArticle[] = [
  {
    slug: "hoe-strips-beschermen",
    title: "Hoe strips beschermen?",
    metaTitle: "Hoe strips beschermen? | Gids voor stripverzamelaars",
    metaDescription: "Leer hoe u uw stripverzameling het beste kunt beschermen. Tips over striphoezen, opbergen, temperatuur en meer.",
    intro: "Uw stripverzameling verdient de beste bescherming. Of u nu een beginnende verzamelaar bent of een ervaren collector met honderden exemplaren: de juiste bescherming maakt het verschil tussen een collectie die decennia meegaat en strips die langzaam degraderen. In dit artikel leggen we uit hoe u uw strips optimaal beschermt met zuurvrije hoezen, backing boards en de juiste opslagomstandigheden.",
    content: "De basis van stripbescherming begint bij individuele hoezen. Elke strip hoort in een zuurvrije hoes van minimaal 50 micron dikte. Dit beschermt tegen stof, vocht, vingerafdrukken en vergeling. Combineer dit met acid-free backing boards voor extra stevigheid."
  },
  {
    slug: "vergeling-strips-voorkomen",
    title: "Hoe voorkom je vergeling van strips?",
    metaTitle: "Vergeling van strips voorkomen | Preventietips",
    metaDescription: "Leer hoe u vergeling van uw strips kunt voorkomen. Tips over UV-bescherming, zuurvrije materialen en opslag.",
    intro: "Vergeling is de grootste vijand van elke stripverzamelaar. Het ontstaat door een chemisch proces waarbij lignine in het papier reageert met zuurstof en UV-licht. Eenmaal vergeeld is het proces onomkeerbaar. Het goede nieuws: met de juiste preventieve maatregelen kunt u vergeling effectief voorkomen en de originele staat van uw strips behouden.",
    content: "Voorkom vergeling door strips uit direct zonlicht te houden, zuurvrije hoezen te gebruiken en de luchtvochtigheid laag te houden. UV-beschermende hoezen bieden extra veiligheid."
  },
  {
    slug: "verschil-poly-mylar-sleeves",
    title: "Verschil tussen poly en mylar sleeves",
    metaTitle: "Verschil poly vs mylar sleeves | Vergelijking",
    metaDescription: "Wat is het verschil tussen poly en mylar comic sleeves? Vergelijk prijs, kwaliteit en levensduur in ons overzicht.",
    intro: "Poly of mylar – het is het eeuwige debat onder stripverzamelaars. Beide materialen hebben hun voor- en nadelen, en de juiste keuze hangt af van uw budget, de waarde van uw collectie en uw langetermijndoelen. Wij zetten de feiten op een rij zodat u een weloverwogen keuze kunt maken.",
    content: "Polypropyleen is betaalbaar, helder en gaat 15-25 jaar mee. Mylar (polyester) is duurder maar gaat 50+ jaar mee en is volledig chemisch inert. Voor waardevolle key issues is mylar de beste keuze."
  }
];
