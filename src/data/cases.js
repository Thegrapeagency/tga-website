// ============================================================
// THE GRAPE AGENCY — cases (bilingual EN/NL)
// Translatable fields use { en, nl }. Neutral fields (brand,
// client, year, images, video, headline.value, results[].value)
// are shared. Use pick(field, lang) from ../i18n to render.
//
// verified:false -> concept copy, figures still to confirm ([check]).
// ============================================================

export const cases = [
  {
    slug: "mirabeau",
    brand: "Mirabeau",
    client: "Maison Mirabeau",
    tag: { en: "Festival activation · ID&T", nl: "Festivalactivatie · ID&T" },
    where: { en: "Milkshake · Mysteryland", nl: "Milkshake · Mysteryland" },
    services: {
      en: ["Festival activation", "Terrace & pergola (built in-house)", "Concept & styling", "Content"],
      nl: ["Festivalactivatie", "Terras & pergola (eigen bouw)", "Concept & styling", "Content"],
    },
    images: ["/images/mirabeau/1.jpg", "/images/mirabeau/2.jpg", "/images/mirabeau/3.jpg", "/images/mirabeau/4.jpg", "/images/mirabeau/5.jpg", "/images/mirabeau/6.jpg", "/images/mirabeau/7.jpg", "/images/mirabeau/8.jpg", "/images/mirabeau/9.jpg", "/images/mirabeau/10.jpg"],
    headline: { value: "145K", label: { en: "Combined festival reach", nl: "Festivalbereik samen" } },
    verified: true,
    oneliner: {
      en: "Provence rosé at a dance festival, on a terrace we designed and built ourselves.",
      nl: "Provence-rosé op een dancefestival, op een terras dat we zelf ontwikkelden en bouwden.",
    },
    intro: {
      en: "Mirabeau makes rosé from Provence. ID&T festivals run on beats and energy. We placed the one inside the other with a terrace that looked like it had always been there.",
      nl: "Mirabeau maakt rosé uit de Provence. ID&T-festivals draaien op beats en energie. Wij plaatsten het ene midden in het andere met een terras dat eruitzag alsof het er altijd al stond.",
    },
    challenge: {
      en: "Rosé is associated with a sunny terrace, not a festival site. The task: land Mirabeau with a young festival crowd that isn't thinking about wine, without diluting the brand's Provence feel.",
      nl: "Rosé wordt geassocieerd met een terras in de zon, niet met een festivalterrein. De opdracht: Mirabeau laten landen bij een jong festivalpubliek dat wijn niet op de radar heeft, zonder de Provence-uitstraling te verwateren.",
    },
    approach: {
      en: [
        "We designed and built a complete Mirabeau terrace with its own pergola: boho meets Provence. Artificial flowers, rattan mats, linen curtains and a lot of lavender. A place where people sat down instead of walking past.",
        "At Milkshake and Mysteryland, two very different worlds within ID&T, the sommelier team poured chilled rosé at festival pace: cheerful and without a lecture on terroir. The styling did the work the story usually has to do.",
      ],
      nl: [
        "We ontwikkelden en bouwden een compleet Mirabeau-terras met een eigen pergola: boho meets Provence. Kunstbloemen, rieten matten, linnen gordijnen en heel veel lavendel. Een plek waar mensen gingen zitten in plaats van langsliepen.",
        "Op Milkshake en Mysteryland, twee totaal verschillende werelden binnen ID&T, schonk het sommelierteam gekoelde rosé op het tempo van een festival: vrolijk en zonder college over terroir. De styling deed het werk dat het verhaal anders moet doen.",
      ],
    },
    result: {
      en: "Mirabeau stood at Milkshake and Mysteryland with its own terrace that brought the brand fully to life, in front of a combined festival crowd of 145,000.",
      nl: "Mirabeau stond op Milkshake en Mysteryland met een eigen terras dat het merk volledig tot leven bracht, voor een gecombineerd festivalpubliek van 145.000 bezoekers.",
    },
    results: [
      { value: "145.000", label: { en: "Combined festival visitors", nl: "Festivalbezoekers samen" } },
      { value: "2", label: { en: "ID&T festivals: Milkshake & Mysteryland", nl: "ID&T-festivals: Milkshake & Mysteryland" } },
      { value: "1", label: { en: "Bespoke pergola terrace, built in-house", nl: "Eigen pergola-terras, zelf gebouwd" } },
    ],
  },

  {
    slug: "vacuvin",
    brand: "Vacu Vin",
    client: "Vacu Vin",
    tag: { en: "Influencer & video campaign · Swirling Carafe", nl: "Influencer- & videocampagne · Swirling Carafe" },
    where: { en: "TikTok & Instagram", nl: "TikTok & Instagram" },
    services: {
      en: ["Influencer marketing", "Video campaign (commercials & reels)", "AI-driven creator selection", "Conversion tracking"],
      nl: ["Influencermarketing", "Videocampagne (commercials & reels)", "Creatorselectie via AI", "Conversiemeting"],
    },
    images: ["/images/vacuvin/1.jpg", "/images/vacuvin/2.jpg", "/images/vacuvin/3.jpg", "/images/vacuvin/4.jpg", "/images/vacuvin/5.jpg"],
    videos: [
      "/videos/vacuvin.mp4",
      "/videos/vacuvin-commercial2.mp4",
      "/videos/vacuvin-reel2.mp4",
      "/videos/vacuvin-amije.mp4",
      "/videos/vacuvin-story2.mp4",
      "/videos/vacuvin-story-extra.mp4",
    ],
    headline: { value: "179K", label: { en: "Views across six creators", nl: "Views over zes creators" } },
    verified: true,
    oneliner: {
      en: "Making a wine accessory desirable for a generation that finds wine knowledge optional, but style non-negotiable.",
      nl: "Een wijnaccessoire begeerlijk maken voor een generatie die wijnkennis optioneel vindt, maar stijl niet.",
    },
    intro: {
      en: "For Vacu Vin we ran more than an influencer campaign; we also made a full video campaign. For the launch of the webshop we put the Swirling Carafe in front of a younger generation. No dusty cellars or raised eyebrows, just style. Enjoying in style shouldn't require a PhD in grape varieties.",
      nl: "Voor Vacu Vin draaiden we niet alleen een influencercampagne; we maakten ook een complete videocampagne. Voor de webshoplancering zetten we de Swirling Carafe neer bij een jongere generatie. Geen stoffige wijnkelders en opgetrokken wenkbrauwen, wel stijl. Stijlvol genieten hoeft geen PhD in druivenrassen te vereisen.",
    },
    challenge: {
      en: "An accessory doesn't sell itself on social. It has to spark something. The brief was to make the Swirling Carafe desirable for 25-to-40-year-old city dwellers who drink wine but aren't looking for a gadget, tied to the webshop launch.",
      nl: "Een accessoire verkoopt zichzelf niet op social. Het moet iets oproepen. De vraag was om de Swirling Carafe begeerlijk te maken bij 25- tot 40-jarige stadsbewoners die wijn drinken, maar geen gadget zoeken, gekoppeld aan de lancering van de webshop.",
    },
    approach: {
      en: [
        "We selected creators with AI tooling (Influencity, SparkToro and our own filters on real engagement and authenticity) instead of by follower count. We looked for the right vibe within lifestyle/interior or food & drinks, with humour and an edge. No walking hashtags.",
        "The concept 'Swirl it 'till you make it & Swirl with Style' gave every creator the same starting point but the freedom to translate it their own way. Six creators across TikTok and Instagram, each with their own discount code so we could measure sales directly.",
        "Alongside the creators we produced a full video campaign: commercials and reels that gave the Swirling Carafe its own polished, scroll-stopping look, beyond a product demo.",
      ],
      nl: [
        "We selecteerden creators met AI-tooling (Influencity, SparkToro en eigen filters op echte engagement en authenticiteit) in plaats van op volgersaantal. We zochten mensen met de juiste vibe binnen lifestyle/interieur of food&drinks, met humor en een edgy randje. Geen wandelende hashtags.",
        "Het concept 'Swirl it 'till you make it & Swirl with Style' gaf elke creator hetzelfde uitgangspunt, maar de vrijheid om het in eigen stijl te vertalen. Zes creators op TikTok en Instagram, elk met een eigen kortingscode zodat we verkoop direct konden meten.",
        "Naast de creators maakten we een complete videocampagne: commercials en reels die de Swirling Carafe een eigen, gelikte look gaven die opvalt in de feed, voorbij een productdemo.",
      ],
    },
    result: {
      en: "The videos consistently ranked among the creators' best-viewed content. The big lesson: authenticity sells. Where the commercial message was pushed too hard, engagement dropped immediately. TikTok delivered 75% of the results on 65% of the budget. A strong foundation for accessible premium wine products with a younger audience.",
      nl: "De video's behoorden consequent tot de best bekeken content van de creators. De grootste les: authenticiteit verkoopt. Waar de commerciële boodschap te hard vooraan stond, daalde de engagement direct. TikTok leverde met 65% van het budget 75% van de resultaten. Een sterk fundament voor toegankelijke premium wijnproducten bij een jonger publiek.",
    },
    results: [
      { value: "179.219", label: { en: "Views across six creators", nl: "Views over zes creators" } },
      { value: "44", label: { en: "Direct sales via personal codes", nl: "Directe verkopen via persoonlijke codes" } },
      { value: "2,07%", label: { en: "Average engagement rate", nl: "Gemiddelde engagement rate" } },
    ],
  },

  {
    slug: "19-crimes",
    brand: "19 Crimes",
    client: "19 Crimes",
    tag: { en: "Speakeasy · Nacht van de Wijn", nl: "Speakeasy · Nacht van de Wijn" },
    where: { en: "Nacht van de Wijn, Utrecht", nl: "Nacht van de Wijn, Utrecht" },
    services: {
      en: ["Concept", "Speakeasy build", "Brand experience", "Staffing"],
      nl: ["Concept", "Speakeasy-bouw", "Brand experience", "Bemensing"],
    },
    images: ["/images/19-crimes/1.jpg", "/images/19-crimes/2.jpg", "/images/19-crimes/3.jpg", "/images/19-crimes/4.jpg", "/images/19-crimes/5.jpg"],
    video: "/videos/19-crimes.mp4",
    headline: { value: "#1", label: { en: "Best-selling bar of 20, in one night", nl: "Best verkopende bar van 20, op één avond" } },
    verified: true,
    oneliner: {
      en: "A brand about breaking the rules doesn't belong behind a neat tasting stand, but behind a hidden door.",
      nl: "Een merk over regels overtreden hoort niet achter een nette proefstand, maar achter een verborgen deur.",
    },
    intro: {
      en: "19 Crimes comes from South Australia. The people on the labels are rebels, poets and writers, banished to Australia for one of the 19 crimes in England. The wines are sold at Albert Heijn. To grow awareness in the Netherlands, 19 Crimes asked us for an activation.",
      nl: "19 Crimes komt uit Zuid-Australië. De mensen op de etiketten zijn rebellen, dichters en schrijvers, verbannen naar Australië voor een van de 19 misdaden in Engeland. De wijnen liggen bij Albert Heijn. Om bekender te worden in Nederland vroeg 19 Crimes ons om een activatie.",
    },
    challenge: {
      en: "19 Crimes wants nothing to do with old, dusty wine culture. And at a wine festival every brand stands in the same setup: a stand, a bottle, a taste. The task was to make the brand felt, not just tasted.",
      nl: "19 Crimes wil niets te maken hebben met de oude, stoffige wijncultuur. En op een wijnfestival staat elk merk in dezelfde opstelling: een stand, een fles, een proefje. De opdracht was om het merk te laten voelen, niet alleen proeven.",
    },
    approach: {
      en: [
        "At Nacht van de Wijn we built a secret speakeasy. In the crowd, visitors were handed a small card by a girl in the audience, with a hint to find the hidden bar. Behind big doors sat the vintage speakeasy.",
        "The bar team wore oversized 19 Crimes hoodies and flat caps from the roaring twenties: fitting the theme and the winery's bold look. Visitors ordered their favourite 19 Crimes wines and the special 19 Crimes sangria.",
      ],
      nl: [
        "Op Nacht van de Wijn bouwden we een geheime speakeasy. In de zaal kregen bezoekers een klein kaartje van een meisje in het publiek, met een hint om de verborgen bar te vinden. Achter grote deuren zat de vintage speakeasy.",
        "Het barteam droeg oversized 19 Crimes-hoodies en flat caps uit de roaring twenties: passend bij het thema én bij de stoere uitstraling van het wijnhuis. Bezoekers bestelden hun favoriete 19 Crimes-wijnen en de speciale 19 Crimes-sangria.",
      ],
    },
    result: {
      en: "Two busy days where a lot of people got introduced to the 19 Crimes lifestyle. On one of the two nights, the 19 Crimes bar was the best-selling of all twenty bars. Best-selling drink: the sangria. Favourite wine: the Uprising. A nice detail: in the main hall consumption was 80% white and 20% red, but the moment people stepped into the speakeasy it flipped to 80% red and 20% white. The setting changed behaviour.",
      nl: "Twee drukke dagen waarop veel mensen kennismaakten met de 19 Crimes-lifestyle. Op een van de twee avonden was de 19 Crimes-bar de best verkopende van alle twintig bars. Best verkochte drankje: de sangria. Favoriete wijn: de Uprising. Mooi detail: in de hoofdzaal werd 80% wit en 20% rood gedronken, maar zodra mensen de speakeasy binnenstapten, draaide dat om naar 80% rood en 20% wit. De plek veranderde het gedrag.",
    },
    results: [
      { value: "#1", label: { en: "Best-selling bar of 20 (one night)", nl: "Best verkopende bar van 20 (één avond)" } },
      { value: "80/20", label: { en: "White to red: behaviour flipped in the speakeasy", nl: "Wit naar rood: gedrag draaide om in de speakeasy" } },
      { value: "2", label: { en: "Busy festival days", nl: "Drukke festivaldagen" } },
    ],
  },

  {
    slug: "mouton-cadet",
    brand: "Mouton Cadet",
    client: "Mouton Cadet",
    tag: { en: "Trade-fair activation · Vakantiebeurs", nl: "Beursactivatie · Vakantiebeurs" },
    where: { en: "Jaarbeurs Utrecht", nl: "Jaarbeurs Utrecht" },
    services: {
      en: ["Trade-fair activation", "French terrace", "Tasting", "Sales"],
      nl: ["Beursactivatie", "Frans terras", "Proeverij", "Verkoop"],
    },
    images: ["/images/mouton-cadet/1.jpg", "/images/mouton-cadet/2.jpg", "/images/mouton-cadet/3.jpg", "/images/mouton-cadet/4.jpg", "/images/mouton-cadet/5.jpg", "/images/mouton-cadet/6.jpg", "/images/mouton-cadet/7.jpg", "/images/mouton-cadet/8.jpg", "/images/mouton-cadet/9.jpg"],
    videos: ["/videos/mouton-cadet.mp4"],
    headline: { value: "218", label: { en: "Tastings ten metres up", nl: "Proeverijen op tien meter hoogte" } },
    verified: true,
    oneliner: {
      en: "Tasting Bordeaux from a Ferris wheel, at a fair about holidays.",
      nl: "Bordeaux proeven vanuit een reuzenrad, op een beurs over vakantie.",
    },
    intro: {
      en: "At the Vakantiebeurs in the Jaarbeurs we built the Petit Paris terrace for Mouton Cadet, with a Ferris wheel as the tasting room. 'Tasting on heights': visitors tasted Bordeaux ten metres up, overlooking the country's busiest consumer fair.",
      nl: "Op de Vakantiebeurs in de Jaarbeurs bouwden we voor Mouton Cadet het Petit Paris-terras met een reuzenrad als proeflokaal. 'Tasting on heights': bezoekers proefden Bordeaux op tien meter hoogte, met uitzicht over de drukste consumentenbeurs van het land.",
    },
    challenge: {
      en: "A fair about holidays is a loud, crowded place where hundreds of brands compete for attention. Mouton Cadet had to stand out and sell at the same time, not just set a mood.",
      nl: "Een beurs over vakanties is een drukke, lawaaiige omgeving waar honderden merken om aandacht vechten. Mouton Cadet moest eruit springen en tegelijk verkopen, niet alleen sfeer maken.",
    },
    approach: {
      en: [
        "The Petit Paris terrace stood in hall 7 for four days: French bistro sets, photo backdrops, cheese and quiche, and live French music from an accordionist and singer. The perfect spot to drop down after a day of walking the fair.",
        "In the Ferris wheel each couple got a guided tasting. A Bordeaux blanc with matured goat cheese and a story on the way up, then an elegant Bordeaux rouge with cheese after the first round. On landing they could taste more at the bar and buy by the glass or bottle for the terrace.",
        "The organic wines took centre stage. They stood out for their modern label and a price surprise: almost everyone assumed organic would be more expensive. The Mouton Cadet Blanc x Nathan was by far the favourite, especially once we framed its freshness as 'lively' rather than 'sour'.",
      ],
      nl: [
        "Het Petit Paris-terras stond vier dagen in hal 7: Franse bistrosets, fotobackdrops, kaas en quiche, en live Franse muziek van een accordeonist en zangeres. De perfecte plek om neer te ploffen na een dag beurs lopen.",
        "In het reuzenrad kreeg elk koppel een begeleide proeverij. Bij vertrek een Bordeaux blanc met belegen geitenkaas en uitleg, na het eerste rondje een elegante Bordeaux rouge met kaas. Bij de landing konden ze aan de bar verder proeven en per glas of fles kopen voor op het terras.",
        "Centraal stonden de biologische wijnen. Die vielen op door hun moderne etiket en door de prijsverrassing: bijna iedereen ging ervan uit dat biologisch duurder zou zijn. De Mouton Cadet Blanc x Nathan was veruit favoriet, vooral toen we de frisheid als 'levendig' brachten in plaats van als zuur.",
      ],
    },
    result: {
      en: "Bordeaux in a place you wouldn't expect it, with tasting, sales and experience in one setup, at a fair drawing 32,000 visitors. The atmosphere of music, cheese and the Ferris wheel made visitors measurably more open and positive about the wines.",
      nl: "Bordeaux op een plek waar je het niet verwacht, met proeverij, verkoop en beleving in één opstelling, op een beurs die 32.000 bezoekers trok. De sfeer met muziek, kaas en het reuzenrad maakte bezoekers aantoonbaar opener en positiever over de wijnen.",
    },
    results: [
      { value: "218", label: { en: "Tastings in the Ferris wheel", nl: "Proeverijen in het reuzenrad" } },
      { value: "32.000", label: { en: "Fair visitors", nl: "Bezoekers op de beurs" } },
      { value: "7", label: { en: "Mouton Cadet wines on the menu", nl: "Mouton Cadet-wijnen op de kaart" } },
    ],
  },

  {
    slug: "rotari-premiere",
    brand: "Rotari",
    client: "Rotari",
    tag: { en: "Film premiere · Pathé Tuschinski", nl: "Filmpremière · Pathé Tuschinski" },
    where: { en: "The Devil Wears Prada 2 · Tuschinski, Amsterdam", nl: "The Devil Wears Prada 2 · Tuschinski, Amsterdam" },
    services: {
      en: ["Premiere activation", "Rotari trolley", "Styling", "Hosting"],
      nl: ["Premièreactivatie", "Rotari-trolley", "Styling", "Hosting"],
    },
    images: ["/images/rotari-premiere/1.jpg", "/images/rotari-premiere/2.jpg", "/images/rotari-premiere/3.jpg", "/images/rotari-premiere/4.jpg", "/images/rotari-premiere/5.jpg"],
    headline: { value: "600", label: { en: "Guests at the premiere", nl: "Gasten op de première" } },
    verified: true,
    oneliner: {
      en: "Italian Trentodoc on the red carpet of Tuschinski, for a film all about style.",
      nl: "Italiaanse Trentodoc op de rode loper van Tuschinski, voor een film die om stijl draait.",
    },
    intro: {
      en: "Rotari makes Italian Trentodoc, sparkling wine from Trentino. At the premiere of The Devil Wears Prada 2 in Pathé Tuschinski we served it in the one place where glamour and bubbles naturally meet: the red carpet.",
      nl: "Rotari maakt Italiaanse Trentodoc, mousserende wijn uit Trentino. Bij de première van The Devil Wears Prada 2 in Pathé Tuschinski schonken we die op de enige plek waar glamour en bubbels vanzelfsprekend samenvallen: de rode loper.",
    },
    challenge: {
      en: "A film premiere is a busy night full of brands chasing visibility. Rotari had to do more than be present; it had to belong to the moment.",
      nl: "Een filmpremière is een drukke avond vol merken die zichtbaarheid willen. Rotari moest niet alleen aanwezig zijn, maar onlosmakelijk bij het moment horen.",
    },
    approach: {
      en: [
        "We brought Rotari through the Tuschinski theatre on its own trolley: Italian, stylish and photogenic, matching the art-deco grandeur of the room. Guests got a glass of Trentodoc in hand the moment the cameras rolled.",
        "Styling and hosting were tuned to the world of the film, so the brand rode along naturally in every photo and story.",
      ],
      nl: [
        "We brachten Rotari met een eigen trolley door het Tuschinski-theater: Italiaans, stijlvol en fotogeniek, passend bij de art-decograndeur van de zaal. Gasten kregen een glas Trentodoc in de hand op het moment dat de camera's draaiden.",
        "De styling en hosting waren afgestemd op de wereld van de film, zodat het merk in elke foto en story vanzelf meeliftte.",
      ],
    },
    result: {
      en: "Rotari tied itself to a night that was entirely about style, for 600 guests at one of the most beautiful film locations in the country. Every photo of the evening had a glass of Trentodoc in it.",
      nl: "Rotari koppelde zich aan een avond die volledig over stijl ging, voor 600 gasten op een van de mooiste filmlocaties van het land. In elke foto van de avond stond vanzelf een glas Trentodoc.",
    },
    results: [
      { value: "600", label: { en: "Guests at the premiere", nl: "Gasten op de première" } },
      { value: "Tuschinski", label: { en: "Iconic art-deco premiere venue", nl: "Iconische art-deco premièrelocatie" } },
      { value: "Trentodoc", label: { en: "Italian bubbles from Rotari", nl: "Italiaanse bubbels van Rotari" } },
    ],
  },

  {
    slug: "rebels-abstinence",
    brand: "Rebels 0,0 & Abstinence",
    client: "Delta Wines",
    tag: { en: "Alcohol-free · The Best Social Awards", nl: "Alcoholvrij · The Best Social Awards" },
    where: { en: "The Best Social Awards · Theater Amsterdam", nl: "The Best Social Awards · Theater Amsterdam" },
    services: {
      en: ["Alcohol-free cocktail bar", "Interactive concept", "Styling", "Staffing"],
      nl: ["Alcoholvrije cocktailbar", "Interactief concept", "Styling", "Bemensing"],
    },
    images: ["/images/rebels-abstinence/1.jpg", "/images/rebels-abstinence/2.jpg", "/images/rebels-abstinence/3.jpg", "/images/rebels-abstinence/4.jpg", "/images/rebels-abstinence/5.jpg", "/images/rebels-abstinence/6.jpg", "/images/rebels-abstinence/7.jpg"],
    headline: { value: "935", label: { en: "Guests: influencers, creators and agencies", nl: "Gasten: influencers, creators en agencies" } },
    verified: true,
    oneliner: {
      en: "Serving alcohol-free at an evening full of people who work with drinks and experiences for a living, and making it win.",
      nl: "Alcoholvrij serveren op een avond vol mensen die professioneel met drank en beleving bezig zijn, en het laten winnen.",
    },
    intro: {
      en: "Delta Wines brought Rebels 0,0 and Abstinence to The Best Social Awards in Theater Amsterdam, an evening with 935 guests from the social and creator world. We positioned alcohol-free as a full choice, not the compromise in the corner.",
      nl: "Delta Wines bracht Rebels 0,0 en Abstinence naar The Best Social Awards in Theater Amsterdam, een avond met 935 gasten uit de social- en creatorwereld. Wij zetten alcoholvrij neer als volwaardige keuze, niet als het compromis op een hoek.",
    },
    challenge: {
      en: "At an awards show for the social world, drinking is a social act. Alcohol-free shouldn't be a side note; it should be something people choose on their own. The brief: a non-alcoholic bar as attractive as any other in the room.",
      nl: "Op een awardshow voor de socialwereld is drinken sociaal gedrag. Alcoholvrij moet daar niet als bijzaak staan, maar als iets dat mensen uit zichzelf kiezen. De opdracht: een alcoholvrije bar die net zo aantrekkelijk is als elke andere in de zaal.",
    },
    approach: {
      en: [
        "Abstinence drew guests in on presentation: spritz glasses, protea decoration and brand-matching styling made a coherent bar. The Blood Orange Spritz and Cape Citrus Soda landed as fresh, accessible drinks. The organisers themselves singled out our team's brand-matching outfits as a standout detail.",
        "Rebels 0,0 ran on an interactive 'Shake Your Own': guests shook their own cocktail. Anyone initially sceptical about alcohol-free was won over after joining in. The Amaretto Sour, with a layer of fresh egg-white foam, was the winner of the evening. Guests came back for a second.",
      ],
      nl: [
        "Abstinence trok gasten binnen op presentatie: spritzglazen, protea-decoratie en brand-matching styling maakten een samenhangende bar. De Blood Orange Spritz en Cape Citrus Soda vielen in de smaak als frisse, toegankelijke drankjes. De organisatie noemde de brand-matching outfits van ons team zelf als standout-detail.",
        "Rebels 0,0 draaide op een interactief 'Shake Your Own': gasten schudden hun eigen cocktail. Wie eerst sceptisch was over alcoholvrij, was na het meedoen om. De Amaretto Sour, met een laag verse eiwitschuim, was de winnaar van de avond. Gasten kwamen terug voor een tweede.",
      ],
    },
    result: {
      en: "The biggest observation of the night: many guests couldn't taste the difference from the alcoholic version. Mentioned spontaneously and repeatedly. The taste barrier people expect from alcohol-free turned out to be far smaller in practice. A strong signal for both brands.",
      nl: "De grootste observatie van de avond: veel gasten proefden geen verschil met de alcoholische versie. Spontaan en herhaaldelijk genoemd. De smaakdrempel die mensen bij alcoholvrij verwachten, bleek in de praktijk veel kleiner. Een sterk signaal voor beide merken.",
    },
    results: [
      { value: "935", label: { en: "Guests at The Best Social Awards", nl: "Gasten op The Best Social Awards" } },
      { value: "2M+", label: { en: "Combined creator follower reach (selection)", nl: "Gecombineerd volgersbereik via creators (selectie)" } },
      { value: "#1", label: { en: "Amaretto Sour: most-requested drink of the night", nl: "Amaretto Sour: drukst gevraagde drankje van de avond" } },
    ],
  },

  {
    slug: "casa-rojo",
    brand: "Casa Rojo",
    client: { en: "Cordier (importer) · Casa Rojo", nl: "Cordier (importeur) · Casa Rojo" },
    tag: { en: "Pop-up restaurant · Werkspoorfestival", nl: "Pop-up restaurant · Werkspoorfestival" },
    where: { en: "Werkspoorkathedraal, Utrecht", nl: "Werkspoorkathedraal, Utrecht" },
    services: {
      en: ["Restaurant concept & production", "Food & wine pairing", "Design (Machoman) & menu cards", "Marketing & ticket sales"],
      nl: ["Restaurantconcept & productie", "Food & wine pairing", "Design (Machoman) & menukaarten", "Marketing & ticketverkoop"],
    },
    images: ["/images/casa-rojo/1.jpg", "/images/casa-rojo/2.jpg", "/images/casa-rojo/3.jpg", "/images/casa-rojo/4.jpg", "/images/casa-rojo/5.jpg", "/images/casa-rojo/6.jpg", "/images/casa-rojo/7.jpg", "/images/casa-rojo/8.jpg", "/images/casa-rojo/9.jpg", "/images/casa-rojo/10.jpg", "/images/casa-rojo/11.jpg", "/images/casa-rojo/12.jpg", "/images/casa-rojo/13.jpg"],
    headline: { value: "3", label: { en: "Courses, built up from the wine", nl: "Gangen, opgebouwd vanuit de wijn" } },
    verified: true,
    oneliner: {
      en: "Not a tasting stand but a full pop-up restaurant, where the food existed because of the wine.",
      nl: "Geen proefstand maar een compleet pop-up restaurant, waar het eten bestond dankzij de wijn.",
    },
    intro: {
      en: "Cordier brought Casa Rojo to Werkspoorfestival in the format that shows the wines best: a pop-up restaurant in the Werkspoorkathedraal, together with restaurant Sevilla. A three-course menu at 39 euro, fully designed around three Casa Rojo wines.",
      nl: "Cordier bracht Casa Rojo naar het Werkspoorfestival in het format dat de wijnen het meest laat zien: een pop-up restaurant in de Werkspoorkathedraal, samen met restaurant Sevilla. Een driegangenmenu van 39 euro, volledig ontworpen rond drie Casa Rojo-wijnen.",
    },
    challenge: {
      en: "Not a wine bar with snacks, and not a restaurant with a wine list on the side. The brief was sharp: a restaurant where the food exists because of the wine. Every dish had to show what La Gabacha, El Gordo del Circo and Machoman actually do on the plate.",
      nl: "Geen wijnbar met hapjes, en geen restaurant met een wijnkaart erbij. De opdracht was scherp: een restaurant waar het eten bestaat dankzij de wijn. Elk gerecht moest laten zien wat La Gabacha, El Gordo del Circo en Machoman écht op het bord doen.",
    },
    approach: {
      en: [
        "Sevilla's chef built the menu up from the wines. Starter: sea bream with basil, pistachio and courgette with La Gabacha Sauvignon Blanc. Middle: salmorejo with asparagus, manchego and chive oil with El Gordo del Circo Verdejo. Main: Iberico cheek with sweet potato, hazelnut and Jamón Serrano with Machoman Monastrell. Plus a chocolate cheesecake for dessert.",
        "Across the Easter weekend we ran three services for 160 dinner guests: two dinners and a lunch. Alongside the restaurant, one of our sommelières gave an hour-long Casa Rojo masterclass for twenty guests, going deeper into the producer and the three wines than the service allowed.",
        "The restaurant was the centrepiece, but it sat inside a wider campaign. Two newsletters from Meisjes van de Wijn (5,000 subscribers) and one from Sevilla (9,000 subscribers) brought 19,000 newsletter impressions, each with the full menu and pairings. On top of that, organic social ran across three channels (Sevilla 16K, Werkspoorfestival 7.5K, Meisjes van de Wijn 3.5K) for 27,000 reach, plus a Machoman-inspired poster, a dedicated blog and full on-site branding.",
        "From production to design, we ran all of it. We searched for the right restaurant partner, tasted the wines with the chef to compose the menu, and handled the full production: styling and design based on the Machoman label, the menu cards, the sommelier team, the marketing and the online ticket sales, with ad campaigns driving the bookings.",
      ],
      nl: [
        "De chef van Sevilla bouwde het menu op vanuit de wijnen. Voor: dorade met basilicum, pistache en courgette bij La Gabacha Sauvignon Blanc. Tussen: salmorejo met asperge, manchego en bieslookolie bij El Gordo del Circo Verdejo. Hoofd: ibericowang met zoete aardappel, hazelnoot en Jamon Serrano bij Machoman Monastrell. Plus een chocolade-cheesecake als dessert.",
        "Over het paasweekend draaiden we drie services voor 160 dinergasten: twee diners en een lunch. Naast het restaurant gaf een van onze sommelières een Casa Rojo-masterclass van een uur voor twintig gasten, die dieper op de producent en de drie wijnen inging dan tijdens de service kon.",
        "Het restaurant was het middelpunt, maar zat in een bredere campagne. Twee nieuwsbrieven van Meisjes van de Wijn (5.000 abonnees) en een van Sevilla (9.000 abonnees) brachten 19.000 newsletter-impressies, elk met het volledige menu en de pairings. Daarnaast liep organische social over drie kanalen (Sevilla 16K, Werkspoorfestival 7.5K, Meisjes van de Wijn 3.5K), goed voor 27.000 bereik, plus een Machoman-geïnspireerde poster, een eigen blog en volledige on-site branding.",
        "Van productie tot vormgeving deden we alles. We zochten de juiste restaurantpartner, proefden de wijnen met de chef om het menu samen te stellen, en verzorgden de volledige productie: aankleding en design op basis van het Machoman-etiket, de menukaarten, het sommelierteam, de marketing en de online ticketverkoop, met advertentiecampagnes die de boekingen aanjoegen.",
      ],
    },
    result: {
      en: "Casa Rojo from bold label to experience at the table, at a festival drawing around 20,000 visitors over the long weekend. Each course was built around one wine: La Gabacha Sauvignon Blanc with the sea bream, El Gordo del Circo Verdejo with the salmorejo, Machoman Monastrell with the Iberico cheek. The food proved the wine, instead of the other way around.",
      nl: "Casa Rojo van uitgesproken etiket naar ervaring aan tafel, op een festival dat over het lange weekend rond de 20.000 bezoekers trekt. Elke gang was rond één wijn gebouwd: La Gabacha Sauvignon Blanc bij de dorade, El Gordo del Circo Verdejo bij de salmorejo, Machoman Monastrell bij de ibericowang. Het eten bewees de wijn, in plaats van andersom.",
    },
    results: [
      { value: "160", label: { en: "Dinner guests across three services", nl: "Dinergasten over drie services" } },
      { value: "27.000", label: { en: "Social reach across three channels", nl: "Social bereik over drie kanalen" } },
      { value: "19.000", label: { en: "Newsletter impressions beforehand", nl: "Newsletter-impressies vooraf" } },
    ],
  },

  {
    slug: "schlumberger",
    brand: "Schlumberger",
    client: { en: "Schlumberger Sekt & Walraven Sax", nl: "Schlumberger Sekt & Walraven Sax" },
    tag: { en: "Bubble Bar · Werkspoorfestival", nl: "Bubble Bar · Werkspoorfestival" },
    where: { en: "Werkspoorkathedraal, Utrecht", nl: "Werkspoorkathedraal, Utrecht" },
    services: {
      en: ["Brand activation", "Bubble Bar", "Easter brunch", "Media strategy", "Artwork"],
      nl: ["Brand activation", "Bubble Bar", "Paasbrunch", "Mediastrategie", "Artwork"],
    },
    images: ["/images/schlumberger/1.jpg", "/images/schlumberger/2.jpg", "/images/schlumberger/3.jpg", "/images/schlumberger/4.jpg", "/images/schlumberger/5.jpg", "/images/schlumberger/6.jpg", "/images/schlumberger/7.jpg", "/images/schlumberger/8.jpg", "/images/schlumberger/9.jpg", "/images/schlumberger/10.jpg", "/images/schlumberger/11.jpg"],
    headline: { value: "342", label: { en: "Bottles of bubbles popped", nl: "Flessen bubbels ontkurkt" } },
    verified: true,
    oneliner: {
      en: "A whole bar turned into the Schlumberger Bubble Bar, with a royal Easter brunch in an empty 5,000 m² hall.",
      nl: "Een hele bar omgebouwd tot Schlumberger Bubble Bar, met een koninklijke paasbrunch in een lege hal van 5000 m².",
    },
    intro: {
      en: "Schlumberger from Austria makes only sparkling wine, at the highest level. At Werkspoorfestival, during Easter, we turned a complete bar into the Schlumberger Bubble Bar.",
      nl: "Schlumberger uit Oostenrijk maakt uitsluitend mousserende wijn, op het hoogste niveau. Op het Werkspoorfestival, tijdens Pasen, bouwden we een complete bar om tot de Schlumberger Bubble Bar.",
    },
    challenge: {
      en: "Schlumberger had to stand out at a busy festival and tell a premium story that went beyond a glass in hand. The activation had to deliver both visibility and depth.",
      nl: "Schlumberger moest opvallen op een druk festival én een premium verhaal vertellen dat verder ging dan een glas bubbels in de hand. De activatie moest zowel zichtbaarheid als verdieping leveren.",
    },
    approach: {
      en: [
        "We built a bar fully in Schlumberger style, serving five different bubbles in varied styles, all from the Schlumberger cellars. We designed all the artwork for the activation and used rolling pupitres to sell wine from.",
        "On the first and second day of Easter we ran a large Easter brunch. Guests arrived an hour before opening in an empty 5,000 m² hall, fully built and ready for thousands. With buttery croissants and fresh fruit we poured all five wines and told the story behind each bottle.",
        "Besides paying guests we invited food and lifestyle influencers. They posted in advance and reported live on what landed on their plates and in their glasses. For extra reach we worked with DPG Media and ran an editorial article on Utrecht's most popular local news platform, Indebuurt.",
      ],
      nl: [
        "We bouwden een bar volledig in Schlumberger-stijl, waar we vijf verschillende bubbels in uiteenlopende stijlen schonken, allemaal uit de kelders van Schlumberger. Daarnaast ontwierpen we alle artwork voor de activatie en zetten we rollende pupitres in om wijn vanaf te verkopen.",
        "Op eerste en tweede paasdag organiseerden we een grote paasbrunch. Gasten kwamen een uur voor opening binnen in een lege hal van 5000 m², volledig opgebouwd en klaar voor duizenden bezoekers. Met boterzachte croissants en vers fruit schonken we alle vijf de wijnen en vertelden we het verhaal achter elke fles.",
        "Naast betalende gasten nodigden we food- en lifestyle-influencers uit. Zij postten vooraf en deden live verslag van wat er op hun bord en in hun glas kwam. Voor extra bereik werkten we samen met DPG Media en plaatsten we een redactioneel artikel op het populairste lokale nieuwsplatform van Utrecht, Indebuurt.",
      ],
    },
    result: {
      en: "A premium brand that earned both visibility and depth at a busy festival. We served locally produced jam, made from fruit rejected by supermarkets, by two Utrecht chefs.",
      nl: "Een premium merk dat op een druk festival zowel zichtbaarheid als diepgang kreeg. We serveerden lokaal geproduceerde jam, gemaakt van fruit dat supermarkten afkeurden, door twee Utrechtse chefs.",
    },
    results: [
      { value: "25.000", label: { en: "Festival visitors", nl: "Festivalbezoekers" } },
      { value: "200.000+", label: { en: "Social reach (Instagram & TikTok)", nl: "Social bereik (Instagram & TikTok)" } },
      { value: "342", label: { en: "Bottles popped", nl: "Flessen ontkurkt" } },
    ],
  },

  {
    slug: "rotari-italie",
    brand: "Rotari",
    client: "Rotari",
    tag: { en: "Italy event", nl: "Italië-evenement" },
    where: { en: "Kasteel de Haar, Utrecht", nl: "Kasteel de Haar, Utrecht" },
    services: {
      en: ["Wine bar", "Interactive tasting", "In-store activation", "Campaign photoshoot", "Content"],
      nl: ["Wijnbar", "Interactieve proeverij", "Instore-activatie", "Campagnefotoshoot", "Content"],
    },
    images: ["/images/rotari-italie/1.jpg", "/images/rotari-italie/2.jpg", "/images/rotari-italie/3.jpg", "/images/rotari-italie/4.jpg", "/images/rotari-italie/5.jpg", "/images/rotari-italie/6.jpg"],
    headline: { value: "38.000", label: { en: "Visitors over the weekend", nl: "Bezoekers in het weekend" } },
    verified: true,
    oneliner: {
      en: "An Italian wine bar at an Italy event in a castle, with in-store promotion driving visitors to it.",
      nl: "Een Italiaanse wijnbar op een Italië-evenement in een kasteel, met instore-promotie die er bezoekers naartoe trok.",
    },
    intro: {
      en: "Rotari makes sunny Italian sparkling wine. At the Italy event at Kasteel de Haar we built a wine bar that stood out among the other brands and tied an in-store campaign to it.",
      nl: "Rotari maakt zonnige Italiaanse mousserende wijn. Op het Italië-evenement bij Kasteel de Haar bouwden we een wijnbar die er tussen de andere merken uitsprong en koppelden we daar een instore-campagne aan vast.",
    },
    challenge: {
      en: "Rotari had to stand out in the wine section of a large event and at the same time drive wine sales at local shops. So the activation had to work on location and before and after it.",
      nl: "Rotari moest opvallen in de wijnsectie van een groot evenement én tegelijk de wijnverkoop bij lokale winkels aanjagen. De activatie moest dus zowel op locatie als ervoor en erna werken.",
    },
    approach: {
      en: [
        "The Rotari stand stood in the wine section and stood out with rich decoration that followed the Italian theme and the brand guidelines: the same flowers from the brand book, hanging plants and real Italian food like pasta, basil and tomatoes.",
        "The sommeliers of Meisjes van de Wijn gave an interactive tasting of four Rotari wines, with notes on the flavours, tasting technique and the option to buy on the spot.",
        "For extra visibility we set up a promotion at two local wine shops in Utrecht: two tickets to the Italy event with the purchase of three bottles of Rotari. We designed display materials and made social posts the shops shared on their own channels.",
      ],
      nl: [
        "De Rotari-stand stond in de wijnsectie en viel op door een rijke aankleding die het Italiaanse thema en de merkrichtlijnen volgde: dezelfde bloemen uit het brandbook, hangende planten en echt Italiaans eten als pasta, basilicum en tomaten.",
        "De sommeliers van Meisjes van de Wijn gaven een interactieve proeverij van vier verschillende Rotari-wijnen, met uitleg over de smaken, proeftechniek en de mogelijkheid om direct te kopen.",
        "Voor extra zichtbaarheid zetten we een promotie op bij twee lokale wijnwinkels in Utrecht: twee tickets voor het Italië-evenement bij aankoop van drie flessen Rotari. We ontwierpen displaymateriaal en maakten socialposts die de winkels op hun eigen kanalen deelden.",
      ],
    },
    result: {
      en: "Coherent brand awareness before, during and after the event, across three channels, plus a complete set of multipurpose images.",
      nl: "Samenhangende merkbekendheid voor, tijdens en na het evenement, over drie kanalen heen, plus een complete set multifunctionele beelden.",
    },
    results: [
      { value: "38.000", label: { en: "Visitors over the weekend", nl: "Bezoekers in het weekend" } },
      { value: "2.000+", label: { en: "Guests at the sold-out Italian Wine Night", nl: "Bezoekers uitverkochte Italian Wine Night" } },
      { value: "3", label: { en: "Channels: in-store, event, social", nl: "Kanalen: instore, event, social" } },
    ],
  },

  {
    slug: "jean-leon",
    brand: "Jean Leon",
    client: { en: "Torres / Walraven Sax", nl: "Torres / Walraven Sax" },
    tag: { en: "Entrance activation · Nacht van de Wijn", nl: "Entree-activatie · Nacht van de Wijn" },
    where: { en: "Nacht van de Wijn, Utrecht", nl: "Nacht van de Wijn, Utrecht" },
    services: {
      en: ["Concept & storytelling", "Entrance activation", "Welcome tasting", "Sommeliers in character"],
      nl: ["Concept & storytelling", "Entree-activatie", "Welkomstproeverij", "Sommeliers in rol"],
    },
    images: ["/images/jean-leon/1.jpg", "/images/jean-leon/2.jpg", "/images/jean-leon/3.jpg"],
    video: "/videos/jean-leon.mp4",
    headline: { value: "100%", label: { en: "Visitors welcomed with a glass and a story", nl: "Bezoekers ontvangen met glas én verhaal" } },
    verified: true,
    oneliner: {
      en: "From stowaway to winemaker for Hollywood. We brought that story to the entrance, complete with a taxi.",
      nl: "Van verstekeling tot wijnmaker voor Hollywood. Wij brachten dat verhaal naar de entree, compleet met taxi.",
    },
    intro: {
      en: "Jean Leon may have the finest story in the wine world. From a Spanish stowaway and taxi driver in New York, to owner of La Scala, the restaurant of Sinatra and Monroe's Hollywood, to winemaker in the Penedès with Spain's first Cabernet Sauvignon. That story deserves more than a bottle on a table.",
      nl: "Jean Leon heeft misschien wel het mooiste verhaal in de wijnwereld. Van Spaanse verstekeling en taxichauffeur in New York, tot eigenaar van La Scala, het restaurant van het Hollywood van Sinatra en Monroe, tot wijnmaker in de Penedès met de eerste Cabernet Sauvignon van Spanje. Dat verhaal verdient meer dan een fles op een tafel.",
    },
    challenge: {
      en: "A brand with a story like that loses out at a busy festival if you leave it at a taste. The task: make Jean Leon's story felt at the moment it sticks most.",
      nl: "Een merk met zo'n verhaal verliest het op een druk festival als je het bij een proefje laat. De opdracht: het verhaal van Jean Leon voelbaar maken op het moment dat het het meeste blijft hangen.",
    },
    approach: {
      en: [
        "We caught visitors where attention is highest: on arrival. At the entrance of Nacht van de Wijn stood the famous taxi, with a Jean Leon sign we had made specially for it. A stowaway became a taxi driver became a restaurateur, and there stood the car.",
        "Our sommeliers were dressed as the waiters of La Scala. Every visitor was handed a glass and the story of Jean Leon on arrival: from taxi driver to the most prestigious restaurant in Beverly Hills. So everyone's evening began with the brand, before the festival had even started.",
      ],
      nl: [
        "We pakten de bezoekers waar de aandacht het grootst is: bij binnenkomst. Bij de entree van Nacht van de Wijn stond de bekende taxi, met een Jean Leon-bord dat we er speciaal voor lieten maken. Een verstekeling werd taxichauffeur werd restauranthouder, en daar stond de auto.",
        "Onze sommeliers stonden aangekleed als de obers van La Scala. Iedere bezoeker kreeg bij binnenkomst een glas en het verhaal van Jean Leon mee: van taxichauffeur tot het meest prestigieuze restaurant van Beverly Hills. Zo begon ieders avond al met het merk, nog voor het festival echt was begonnen.",
      ],
    },
    result: {
      en: "Not a stand you could skip, but a welcome no one missed. Every visitor walked into the festival with a glass of Jean Leon and the story behind it.",
      nl: "Geen stand die je kon overslaan, maar een ontvangst die niemand miste. Elke bezoeker ging het festival in met een glas Jean Leon en het verhaal erachter.",
    },
    results: [
      { value: "100%", label: { en: "Visitors welcomed at the entrance", nl: "Bezoekers ontvangen bij de entree" } },
      { value: "1", label: { en: "Original taxi with its own Jean Leon sign", nl: "Originele taxi met eigen Jean Leon-bord" } },
      { value: "2.500", label: { en: "Visitors that edition", nl: "Bezoekers die editie" } },
    ],
  },

  {
    slug: "castel-mimi",
    brand: "Castel Mimi",
    client: "Castel Mimi",
    tag: { en: "Michelin lunch · Nacht van de Wijn", nl: "Sterrenlunch · Nacht van de Wijn" },
    where: { en: "Nacht van de Wijn, Utrecht", nl: "Nacht van de Wijn, Utrecht" },
    services: {
      en: ["Concept & experience", "Michelin lunch", "Live link to Moldova", "Festival bar"],
      nl: ["Concept & experience", "Sterrenlunch", "Live link Moldavië", "Festivalbar"],
    },
    images: ["/images/castel-mimi/1.jpg", "/images/castel-mimi/2.jpg", "/images/castel-mimi/3.jpg", "/images/castel-mimi/4.jpg", "/images/castel-mimi/5.jpg", "/images/castel-mimi/6.jpg", "/images/castel-mimi/7.jpg", "/images/castel-mimi/8.jpg", "/images/castel-mimi/9.jpg", "/images/castel-mimi/10.jpg", "/images/castel-mimi/11.jpg", "/images/castel-mimi/12.jpg", "/images/castel-mimi/13.jpg"],
    video: "/videos/castel-mimi.mp4",
    headline: { value: "1", label: { en: "Michelin lunch at one long table", nl: "Sterrenlunch aan één lange tafel" } },
    verified: true,
    oneliner: {
      en: "A Michelin lunch at one long table, with a live link to the winemaker in Moldova.",
      nl: "Een sterrenlunch aan één lange tafel, met een live verbinding naar de wijnmaker in Moldavië.",
    },
    intro: {
      en: "Castel Mimi is one of the most beautiful wine castles in Moldova. Around their top wines we had Michelin chef Tommy Janssen of restaurant Maeve create a three-course lunch, at one long table in the middle of Nacht van de Wijn, before the doors opened to the public.",
      nl: "Castel Mimi is een van de mooiste wijnkastelen van Moldavië. Rond hun topwijnen lieten we sterrenchef Tommy Janssen van restaurant Maeve een driegangenlunch maken, aan één lange tafel midden op Nacht van de Wijn, nog voordat de deuren voor het publiek opengingen.",
    },
    challenge: {
      en: "A wine castle from Moldova means little to a Dutch audience. The task was not to explain Castel Mimi, but to let people experience it in a way they won't forget.",
      nl: "Een wijnkasteel uit Moldavië zegt het Nederlandse publiek weinig. De opdracht was om Castel Mimi niet uit te leggen, maar te laten beleven, op een manier die je niet meer vergeet.",
    },
    approach: {
      en: [
        "Guests came in with a glass of Mimi Sauvignon Blanc and were given headphones. Over them, one of our sommeliers told the short story of the castle, after which everyone took their seat at the long table for the first course.",
        "Headphones back on: a live link to Moldova appeared on big screens, where the winemaker welcomed the guests and explained the wines with the dishes. Tommy came out of the kitchen to talk through his courses. Every dish was based on Castel Mimi's top wines.",
        "To close, guests enjoyed Mimi's ultimate ice wine with macarons Tommy made specially for it. For the other 2,500 festival visitors there was also a Castel Mimi bar at Nacht van de Wijn.",
      ],
      nl: [
        "Gasten kwamen binnen met een glas Mimi Sauvignon Blanc en kregen een koptelefoon op. Daarover vertelde een van onze sommeliers kort het verhaal van het kasteel, waarna iedereen aanschoof aan de lange tafel voor de eerste gang.",
        "Koptelefoon weer op: op grote schermen verscheen een live verbinding met Moldavië, waar de wijnmaker de gasten welkom heette en de wijnen bij de gerechten toelichtte. Tommy kwam de keuken uit om zijn gerechten te duiden. Elk gerecht was gebaseerd op de topwijnen van Castel Mimi.",
        "Als afsluiter genoten de gasten van de ultieme ijswijn van Mimi met macarons die Tommy er speciaal bij maakte. Voor de overige 2.500 festivalbezoekers stond er daarnaast een Castel Mimi-bar op Nacht van de Wijn.",
      ],
    },
    result: {
      en: "A Moldovan wine castle that wasn't explained but experienced: from a story on the headphones and a live link to the winemaker, to an ice wine with macarons. And through the festival bar we reached another 2,500 visitors.",
      nl: "Een Moldavisch wijnkasteel dat niet werd uitgelegd maar beleefd: van een verhaal op de koptelefoon en een live verbinding met de wijnmaker tot een ijswijn met macarons. En via de festivalbar bereikten we daarnaast nog eens 2.500 bezoekers.",
    },
    results: [
      { value: "Moldova", label: { en: "Live link with the winemaker", nl: "Live verbinding met de wijnmaker" } },
      { value: "2.500", label: { en: "Visitors at the Castel Mimi bar", nl: "Bezoekers aan de Castel Mimi-bar" } },
      { value: "Maeve", label: { en: "Michelin lunch by chef Tommy Janssen", nl: "Sterrenlunch door chef Tommy Janssen" } },
    ],
  },

  {
    slug: "bemberg",
    brand: "Bemberg",
    client: "Bemberg",
    tag: { en: "Michelin lunch · press & tickets", nl: "Sterrenlunch · pers & tickets" },
    where: { en: "The Green Room · De Hallen Studio's, Amsterdam", nl: "The Green Room · De Hallen Studio's, Amsterdam" },
    services: {
      en: ["Concept & production", "Michelin-level lunch", "Service & wine QC", "Press & ticket sales"],
      nl: ["Concept & productie", "Sterrenlunch", "Bediening & wijncontrole", "Pers & ticketverkoop"],
    },
    images: [
      "/images/bemberg/1.jpg", "/images/bemberg/2.jpg", "/images/bemberg/3.jpg", "/images/bemberg/4.jpg",
      "/images/bemberg/5.jpg", "/images/bemberg/6.jpg", "/images/bemberg/7.jpg", "/images/bemberg/8.jpg",
      "/images/bemberg/9.jpg", "/images/bemberg/10.jpg", "/images/bemberg/11.jpg",
    ],
    headline: { value: "Onno", label: { en: "Lunch by two-Michelin-star chef Onno Kokmeijer", nl: "Sterrenlunch door tweesterrenchef Onno Kokmeijer" } },
    verified: true,
    oneliner: {
      en: "A very special wine house, brought to the table by a two-Michelin-star chef.",
      nl: "Een heel bijzonder wijnhuis, aan tafel gebracht door een tweesterrenchef.",
    },
    intro: {
      en: "Bemberg is a very special wine house. Around its top wines we built an exceptional lunch with chef Onno Kokmeijer, who cooked two Michelin stars at Ciel Bleu and ranked number 2 in the LEKKER500.",
      nl: "Bemberg is een heel bijzonder wijnhuis. Rond hun topwijnen bouwden we een bijzondere lunch met chef Onno Kokmeijer, die bij Ciel Bleu twee Michelinsterren kookte en op nummer 2 stond in de LEKKER500.",
    },
    challenge: {
      en: "A wine house few people know deserves more than a tasting. The task was to make Bemberg unforgettable and earn it attention from both press and a paying public.",
      nl: "Een wijnhuis dat weinig mensen kennen verdient meer dan een proeverij. De opdracht was om Bemberg onvergetelijk te maken en aandacht te verdienen, zowel van pers als van een betalend publiek.",
    },
    approach: {
      en: [
        "We paired Bemberg's top wines with a lunch by Onno Kokmeijer. A chef of his level (two Michelin stars at Ciel Bleu, number 2 in the LEKKER500) turns the wines into a reason to come, not a detail on the side.",
        "We ran it over two days: one day to receive press, one day with tickets for the public, so the lunch built both credibility and reach.",
        "And we didn't just design it, we produced it end to end. We tasted the wines with Onno and Bemberg's brand manager to build the menu, arranged Onno's sous-chefs and rented the kitchen, set up top-level service, pre-tasted every bottle for cork taint, laid the tables, and ran the online ticket sales with ad campaigns for the public lunch.",
      ],
      nl: [
        "We koppelden de topwijnen van Bemberg aan een lunch van Onno Kokmeijer. Een chef van zijn niveau (twee Michelinsterren bij Ciel Bleu, nummer 2 in de LEKKER500) maakt van de wijnen een reden om te komen, niet een detail erbij.",
        "We deden het over twee dagen: een dag pers ontvangen, een dag met tickets voor het publiek, zodat de lunch zowel geloofwaardigheid als bereik opbouwde.",
        "En we bedachten het niet alleen, we produceerden het van begin tot eind. We proefden de wijnen met Onno en de brand manager van Bemberg om het menu te bepalen, regelden Onno's hulpkoks en huurden de keuken, zetten bediening van topniveau neer, proefden elke fles voor op kurk, dekten de tafels en verzorgden de online ticketverkoop met advertentiecampagnes voor de publiekslunch.",
      ],
    },
    result: {
      en: "A wine house few knew, put on the map through a chef people do know, with one day for press and one for the public, around 50 guests per shift.",
      nl: "Een wijnhuis dat weinig mensen kenden, op de kaart gezet via een chef die mensen wel kennen, met een dag pers en een dag publiek, zo'n 50 gasten per shift.",
    },
    results: [
      { value: "2 sterren", label: { en: "Michelin stars chef Onno earned at Ciel Bleu", nl: "Michelinsterren van chef Onno bij Ciel Bleu" } },
      { value: "#2", label: { en: "LEKKER500 ranking", nl: "LEKKER500-notering" } },
      { value: "50", label: { en: "Guests per shift (press + ticket day)", nl: "Gasten per shift (pers- + ticketdag)" } },
    ],
  },

  {
    slug: "pour-culture",
    brand: "Pour Culture",
    client: { en: "Meisjes van de Wijn (own brand)", nl: "Meisjes van de Wijn (eigen merk)" },
    tag: { en: "Concept · identity · event", nl: "Concept · identiteit · event" },
    where: { en: "Club Wine · Werkspoorkathedraal, Utrecht", nl: "Club Wine · Werkspoorkathedraal, Utrecht" },
    services: {
      en: ["Concept & brand identity", "Invitations & email campaign", "On-site posters & signage", "Speech & aftercare"],
      nl: ["Concept & brand identity", "Uitnodiging & mailcampagne", "Posters & signage on-site", "Speech & aftercare"],
    },
    images: [
      "/images/pour-culture/1.jpg", "/images/pour-culture/2.jpg", "/images/pour-culture/3.jpg",
      "/images/pour-culture/4.jpg", "/images/pour-culture/5.jpg", "/images/pour-culture/6.jpg",
      "/images/pour-culture/7.jpg", "/images/pour-culture/8.jpg", "/images/pour-culture/9.jpg",
      "/images/pour-culture/10.jpg", "/images/pour-culture/11.jpg", "/images/pour-culture/12.jpg",
    ],
    imagesContain: true,
    link: { url: "https://www.meisjesvandewijn.nl/pour-culture", label: { en: "Visit the live site", nl: "Bekijk de live site" } },
    headline: { value: "0", label: { en: "Photos taken. That was the point.", nl: "Foto's gemaakt. Dat was de bedoeling." } },
    verified: true,
    oneliner: {
      en: "Ten years of running other people's parties. On 23 May, our own.",
      nl: "Tien jaar andermans feesten. Op 23 mei ons eigen.",
    },
    intro: {
      en: "Pour Culture wasn't a jubilee with canapés. It was a statement: a wine company that spends ten years running other people's parties, throwing its own for the first time. The Grape Agency built the whole thing, from concept and identity to invitations, email campaign, on-site posters, the welcome speech and the aftercare. Nothing standalone, everything in one carried-through tone.",
      nl: "Pour Culture was geen jubileumavond met canapés. Het was een statement: een wijnbedrijf dat tien jaar lang andermans feesten organiseert, vierde voor het eerst zijn eigen. The Grape Agency bouwde het volledige traject, van concept en huisstijl tot uitnodigingen, mailcampagne, posters in het venue, welkomstwoord en aftercare. Geen onderdeel los, alles in één doorgetrokken toon.",
    },
    challenge: {
      en: "Meisjes van de Wijn turned ten. The brief they wrote themselves: make a party that feels like ours. No formal jubilee, no networking drinks with canapés. We run other people's parties all year. Tonight, our own. The harder task: hold one tone from the first email to the last poster, and use it to set the rules of the night.",
      nl: "Meisjes van de Wijn werd tien. De brief die ze aan zichzelf schreven: maak een feest dat aanvoelt als ons feest. Geen formele jubileumavond, geen netwerkborrel met canapés. We organiseren het hele jaar andermans feesten. Vanavond ons eigen. De lastigere opgave: houd één toon vast van de eerste mail tot de laatste poster, en gebruik die om de regels van de avond te zetten.",
    },
    approach: {
      en: [
        "Guests tonight, not hosts. The whole concept is an inversion. The sommeliers don't work, they party along. Self-service at the bar, no formal service. Carried through every piece, from the invitation to the aftercare mail.",
        "Identity as behaviour. Every poster, every mail, every visual repeats the same message: this is not a regular wine-service night. So guests walk in differently, looser, ready to dance, not waiting for a sommelier to help them choose.",
        "Deliberate scarcity of documentation. House rule #2: no photographer. A statement, not an oversight. What happens here happens for the people who were there. The aftercare mail didn't hide the choice, it made a joke of it: there simply aren't any.",
        "The 'Confessions of a Wine Team' universe. A sub-brand of self-deprecating posters that tell the MvdW story. 'Ten years on and we still don't know how many glasses break per event.' Not ironic, not defensive. Honest, dry, with love for the craft.",
      ],
      nl: [
        "Vanavond gasten, geen gastheren. Het hele concept draait om een omkering. De sommeliers werken niet, ze feesten mee. Self-service aan de bar, geen formele service. Consistent doorgevoerd in elke uiting, van de uitnodiging tot de aftercare-mail.",
        "Identiteit als gedragsmaker. Elke poster, elke mail, elk visueel element herhaalt dezelfde boodschap: dit is geen reguliere wijnservice-avond. Daardoor komen gasten zelf ook anders binnen, losser, klaar om te dansen, niet wachtend op een sommelier die hen helpt kiezen.",
        "Bewuste schaarste aan documentatie. Huisregel #2: geen fotograaf. Een statement, geen vergetelheid. Wat hier gebeurt, gebeurt voor de mensen die er waren. De aftercare-mail draaide die keuze niet weg maar maakte er een grap van: die zijn er namelijk niet gemaakt.",
        "Het 'Confessions of a Wine Team'-universum. Een eigen sub-merk van zelfspot-posters die het verhaal van MvdW vertellen. '10 jaar later weten we nog steeds niet hoeveel glazen er per event sneuvelen.' Niet ironisch, niet defensief. Eerlijk, droog, met liefde voor het vak.",
      ],
    },
    timeline: [
      {
        date: { en: "April", nl: "April" },
        title: { en: "Concept & brand identity", nl: "Concept & brand identity" },
        body: {
          en: "Pour Culture as the name. A visual language of brutalist meets editorial: black, copper, wine-red, off-white. Typography in Unbounded 900, Instrument Serif and JetBrains Mono.",
          nl: "Pour Culture als naam. Een visuele taal van brutalist meets editorial: zwart, copper, wine-red, off-white. Typografie in Unbounded 900, Instrument Serif en JetBrains Mono.",
        },
      },
      {
        date: { en: "12 May", nl: "12 mei" },
        title: { en: "Save the date + RSVP", nl: "Save the date + RSVP" },
        body: {
          en: "A brutalist site at pour-culture.nl, with guest-list management and matching.",
          nl: "Een brutalist-site op pour-culture.nl, met guestlist-management en matching.",
        },
      },
      {
        date: { en: "20 May · T-3", nl: "20 mei · T-3" },
        title: { en: "Hype mail", nl: "Hype mail" },
        body: {
          en: "Subject: 'Ten years of other people's parties. Saturday, ours.' The POUR CULTURE hero banner and the timetable reveal with eight acts.",
          nl: "Subject: 'Tien jaar andermans feesten. Zaterdag ons feest.' De POUR CULTURE hero banner en de timetable-reveal met acht acts.",
        },
      },
      {
        date: { en: "22 May · T-1", nl: "22 mei · T-1" },
        title: { en: "Info mail", nl: "Info mail" },
        body: {
          en: "Subject: 'Saturday. Inside before 20:30.' Walking route, the wine line-up visual ('Beyoncé acapella in your glass') and practical info, code-red-weather joke included.",
          nl: "Subject: 'Zaterdag. Binnen vóór 20:30.' Looproute, de wine line-up visual ('Beyoncé acapella in je glas') en praktische info, inclusief code-rood-weer-grap.",
        },
      },
      {
        date: { en: "23 May", nl: "23 mei" },
        title: { en: "The party", nl: "Het feest" },
        body: {
          en: "Seven posters through the venue, an eight-minute welcome speech off an A6 cue card, a self-service wine bar and seven DJ sets from 19:45 to 01:00.",
          nl: "Zeven posters door het venue, een welkomstwoord van acht minuten vanaf een A6-spiekbriefje, een zelf-service wijnbar en zeven DJ-sets van 19:45 tot 01:00.",
        },
      },
      {
        date: { en: "26 May · T+3", nl: "26 mei · T+3" },
        title: { en: "Thank-you mail", nl: "Bedankmail" },
        body: {
          en: "Subject: 'Three days later. Still thirsty.' A recap-stats visual (130 / 7 / 167 / 0 / ∞), a Spotify playlist with the tracks, and a wink: sign up for Pour Culture 2, fifteen years of MvdW. With a callback to the bottle from the speech.",
          nl: "Subject: 'Drie dagen later. Nog steeds dorst.' Een recap-stats visual (130 / 7 / 167 / 0 / ∞), een Spotify-playlist met de tracks, en een knipoog: aanmelden voor Pour Culture 2, vijftien jaar MvdW. Met een callback naar de fles uit de speech.",
        },
      },
    ],
    quote: {
      en: "This is the bottle we kept for ten years. Tonight we open it.",
      nl: "Dit is de fles die we tien jaar hebben bewaard. Vanavond trekken we 'm open.",
      by: { en: "From Milan Gennissen's welcome speech", nl: "Uit het welkomstwoord van Milan Gennissen" },
    },
    result: {
      en: "One night, six weeks of work, one tone, carried through every piece. 130 guests on the floor, 167 bottles opened, zero beers poured, unlimited refills, and not a single photo. Proof that brand identity can be more than a logo on an invitation.",
      nl: "Eén avond, zes weken werk, één toon, doorgevoerd in elke uiting. 130 gasten op de vloer, 167 flessen open, nul biertjes, oneindig refills, en geen enkele foto. Bewijs dat brand identity meer kan zijn dan een logo op een uitnodiging.",
    },
    results: [
      { value: "130", label: { en: "Guests on the floor", nl: "Gasten op de vloer" } },
      { value: "7", label: { en: "Acts & DJ sets", nl: "Acts & DJ-sets" } },
      { value: "167", label: { en: "Bottles opened", nl: "Flessen ontkurkt" } },
      { value: "0", label: { en: "Beers poured", nl: "Biertjes geschonken" } },
      { value: "∞", label: { en: "Refills (no limit)", nl: "Refills (geen limiet)" } },
    ],
  },
];

export const getCase = (slug) => cases.find((c) => c.slug === slug);
