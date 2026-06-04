import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "en", setLang: () => {}, t: {} });

// Pick a localized value. Accepts {en, nl} objects (incl. arrays inside),
// or returns the value as-is if it is not localized.
export function pick(v, lang) {
  if (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "nl" in v)) {
    return v[lang] ?? v.en;
  }
  return v;
}

export const dict = {
  en: {
    langLabel: "NL",
    nav: { home: "Home", work: "Work", services: "Services", about: "About", contact: "Contact" },
    hero: {
      l1: "Campaigns, events",
      l2: "and activations.",
      l3: "All for the love of wine.",
      lede:
        "The Grape Agency is a Dutch team of result-driven, wine-loving creatives. We're here to make awareness grow and deliver memories.",
      cta1: "See the work",
      cta2: "Start a project",
    },
    home: {
      featured: "Selected work",
      all: "All cases →",
      statement: "We make awareness grow and deliver memories.",
      servicesCta: "Our services",
      clients: "Brands we work with",
    },
    work: {
      eyebrow: "The work",
      title: "Selected work",
      lead:
        "Tap a case and it slides open. Real campaigns, events and activations for wine brands and importers.",
      challenge: "The challenge",
      approach: "The approach",
      result: "The result",
      numbers: "In numbers",
      timeline: "The timeline",
      back: "← Back to the work",
      draft: "Concept · figures to be confirmed",
      close: "Close",
      client: "Client",
      where: "Where",
      services: "Services",
    },
    services: {
      eyebrow: "Services",
      title: "We don't just think it up.\nWe build it and stand behind it.",
      lead:
        "The Grape Agency grew out of events company Meisjes van de Wijn and wine festival Nacht van de Wijn. We know the wine world and we know where your audience really is.",
      statement: "Ready to grow awareness and deliver memories?",
      cta: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "A Dutch team of result-driven,\nwine-loving creatives.",
      p1:
        "The Grape Agency builds campaigns, organizes events and realizes activations. We're here to make awareness grow and deliver memories.",
      p2:
        "We help startups find their footing and strengthen long-standing, powerful brands in a creative way. We grew out of events company Meisjes van de Wijn and wine festival Nacht van de Wijn, so we know the wine world from the inside.",
      p3:
        "We don't just come up with the concept. We build the bar, bring the sommelier team, design the artwork and arrange the media around it. One partner, from idea to the last glass poured. All for the love of wine. Cheers!",
      f1k: "Grew out of",
      f1v: "Meisjes van de Wijn & Nacht van de Wijn",
      f2k: "Worked for",
      f2v: "Mirabeau, 19 Crimes, Mouton Cadet, Schlumberger, Rotari, Casa Rojo, Castel Mimi, Torres, Domaine Ott, Jacquart",
      f3k: "Based in",
      f3v: "Daltonlaan 200, 3584 BJ Utrecht",
      f4k: "Chamber of Commerce",
      f4v: "89631773 — trade name of MvdW BV",
      statement: "All for the love of wine. Cheers!",
      cta: "See how we do it",
    },
    contact: {
      eyebrow: "Contact",
      title: "A brand that needs to land somewhere?\nLet's talk.",
      lead:
        "Tell us briefly what your brand is and where you want to take it. We reply fast and think along, even if you don't have a finished plan yet.",
      name: "Name",
      brand: "Brand / company",
      email: "Email",
      message: "What do you want to achieve?",
      send: "Send",
    },
    footer: {
      tagline: "Campaigns, events and activations. All for the love of wine.",
      menu: "Menu",
      sister: "Sister brands",
      follow: "Follow",
      contact: "Contact",
    },
  },

  nl: {
    langLabel: "EN",
    nav: { home: "Home", work: "Werk", services: "Diensten", about: "Over", contact: "Contact" },
    hero: {
      l1: "Campagnes, events",
      l2: "en activaties.",
      l3: "Alles uit liefde voor wijn.",
      lede:
        "The Grape Agency is een Nederlands team van resultaatgerichte, wijnminnende creatives. Wij laten awareness groeien en leveren herinneringen.",
      cta1: "Bekijk het werk",
      cta2: "Start een project",
    },
    home: {
      featured: "Uitgelicht werk",
      all: "Alle cases →",
      statement: "Wij laten awareness groeien en leveren herinneringen.",
      servicesCta: "Onze diensten",
      clients: "Merken waar we voor werken",
    },
    work: {
      eyebrow: "Het werk",
      title: "Uitgelicht werk",
      lead:
        "Tik op een case en hij schuift open. Echte campagnes, events en activaties voor wijnmerken en importeurs.",
      challenge: "De uitdaging",
      approach: "De aanpak",
      result: "Het resultaat",
      numbers: "In cijfers",
      timeline: "De tijdlijn",
      back: "← Terug naar het werk",
      draft: "Concept · cijfers nog te verifiëren",
      close: "Sluiten",
      client: "Klant",
      where: "Waar",
      services: "Diensten",
    },
    services: {
      eyebrow: "Diensten",
      title: "We bedenken het niet alleen.\nWe bouwen het en staan erachter.",
      lead:
        "The Grape Agency is voortgekomen uit eventbureau Meisjes van de Wijn en wijnfestival Nacht van de Wijn. We kennen de wijnwereld én de plek waar je doelgroep echt is.",
      statement: "Klaar om awareness te laten groeien en herinneringen te leveren?",
      cta: "Neem contact op",
    },
    about: {
      eyebrow: "Over ons",
      title: "Een Nederlands team van resultaatgerichte,\nwijnminnende creatives.",
      p1:
        "The Grape Agency bouwt campagnes, organiseert events en realiseert activaties. Wij laten awareness groeien en leveren herinneringen.",
      p2:
        "We helpen startups op weg en versterken gevestigde, sterke merken op een creatieve manier. We zijn voortgekomen uit eventbureau Meisjes van de Wijn en wijnfestival Nacht van de Wijn, dus we kennen de wijnwereld van binnenuit.",
      p3:
        "We bedenken niet alleen het concept. We bouwen de bar, leveren het sommelierteam, maken het artwork en regelen de media eromheen. Eén partij, van idee tot het laatste glas dat geschonken wordt. Alles uit liefde voor wijn. Cheers!",
      f1k: "Voortgekomen uit",
      f1v: "Meisjes van de Wijn & Nacht van de Wijn",
      f2k: "Eerder gewerkt voor",
      f2v: "Mirabeau, 19 Crimes, Mouton Cadet, Schlumberger, Rotari, Casa Rojo, Castel Mimi, Torres, Domaine Ott, Jacquart",
      f3k: "Gevestigd",
      f3v: "Daltonlaan 200, 3584 BJ Utrecht",
      f4k: "KvK",
      f4v: "89631773 — handelsnaam van MvdW BV",
      statement: "Alles uit liefde voor wijn. Cheers!",
      cta: "Zie hoe we dat doen",
    },
    contact: {
      eyebrow: "Contact",
      title: "Een merk dat ergens moet landen?\nLaten we praten.",
      lead:
        "Vertel kort wat je merk is en waar je het wilt neerzetten. We reageren snel en denken meteen mee, ook als je nog geen uitgewerkt plan hebt.",
      name: "Naam",
      brand: "Merk / bedrijf",
      email: "E-mail",
      message: "Wat wil je bereiken?",
      send: "Verstuur",
    },
    footer: {
      tagline: "Campagnes, events en activaties. Alles uit liefde voor wijn.",
      menu: "Menu",
      sister: "Zustermerken",
      follow: "Volg",
      contact: "Contact",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("tga-lang") || "en";
    } catch {
      return "en";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("tga-lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);
  const value = { lang, setLang, t: dict[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
