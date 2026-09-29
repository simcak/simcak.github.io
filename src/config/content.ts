import { localize, toLang } from "./i18n";

// Every translatable text is written as { en: "...", cs: "..." }.
// Plain strings (links, names, dates) are shared by both languages.

//////////
// HOME //
//////////
const siteConfig = {
  name: { en: "My Portfolio", cs: "Moje portfolio" },
  title: { en: "Simcak's Portfolio", cs: "Portfolio – Simcak" },
  description: { en: "A showcase of my work and thoughts", cs: "Přehled mé práce a myšlenek" },
  social: {
    github: "https://github.com/simcak",
    linkedin: "https://www.linkedin.com/in/petr-simcak",
    email: "mailto:fjords_headset.7w@icloud.com",
  },
};

const homeContent = {
  title: { en: "Hi, it's Petr", cs: "Ahoj, jsem Petr" },
  description: "",
  buttons: {
    about: {
      text: { en: "View About", cs: "O mně" },
      href: "/about/",
    },
    projects: {
      text: { en: "See Projects", cs: "Projekty" },
      href: "/projects/",
    },
    cv: {
      text: "CV",
      href: "/assets/pdf/cv.pdf",
    },
  },
};

///////////
// ABOUT //
///////////
const aboutContent = {
  meta: {
    title: { en: "About - Simcak", cs: "O mně - Simcak" },
    description: {
      en: "Learn more about my background, skills, and experience",
      cs: "Více o mém zázemí, dovednostech a zkušenostech",
    },
  },
  title: { en: "About", cs: "O mně" },
  technicalSkills: [
    "C",
    "C++",
    "JavaScript",
    // "Swift",
    "Python",
    "Matlab",
    "Shell",
    "Git",
    "Docker",
    "Nginx",
    "LaTeX",
    "Linux",
    "PrusaSlicer",
    { en: "3D printing", cs: "3D tisk" },
  ],
  languages: [
    { en: "🇬🇧 fluent", cs: "🇬🇧 plynně" },
    { en: "🇨🇿 native", cs: "🇨🇿 rodilý mluvčí" },
    "🇩🇪 B1",
  ],
  softSkills: [
    { en: "Creativity", cs: "Kreativita" },
    { en: "Problem Solving", cs: "Řešení problémů" },
    { en: "Team Work", cs: "Týmová práce" },
    { en: "Communication", cs: "Komunikace" },
    { en: "Cross-cultural Collaboration", cs: "Mezikulturní spolupráce" },
    { en: "Adaptability", cs: "Přizpůsobivost" },
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: { en: "Profile", cs: "Profilová fotka" },
  },
  experience: {
    title: { en: "Experience", cs: "Zkušenosti" },
    items: [
      {
        period: { en: "2026 - Present", cs: "2026 - současnost" },
        position: "Tech Lead",
        company: "AI Camp",
        description: {
          en: "Tutoring and supporting adult learners from big companies to use efficiently and creatively LLMs and other AI technologies. Main focus on maintaining and developing the AI Camp education and internal tools.",
          cs: "Lektoruji a podporuji dospělé studenty z velkých firem v efektivním a kreativním využívání LLM a dalších AI technologií. Hlavní náplní je údržba a vývoj vzdělávacího programu a interních nástrojů AI Campu.",
        },
        icon: "ai",
      },
      {
        period: "2013 - 2021",
        position: { en: "Movie Actor", cs: "Filmový herec" },
        company: { en: "Czech, German and US productions", cs: "České, německé a americké produkce" },
        description: {
          en: "Performed in multiple movies and TV shows in multiple languages since the age of 12. The main role was in the movie 'To see the sea' (2014) for which I won the Zlín Film Festival award for the best young actor.",
          cs: "Od 12 let jsem hrál v řadě filmů a seriálů v několika jazycích. Hlavní roli jsem ztvárnil ve filmu „Pojedeme k moři“ (2014), za kterou jsem získal cenu pro nejlepšího mladého herce na Zlín Film Festivalu.",
        },
        icon: "movie",
        link: "https://www.imdb.com/name/nm5791331/",
      },
      {
        period: "2009 - 2015",
        position: { en: "Theatre Actor", cs: "Divadelní herec" },
        company: { en: "Brno City Theatre", cs: "Městské divadlo Brno" },
        description: {
          en: "Performed in 7 different plays (including one of the main roles in Mary Poppins) since the age of 8.",
          cs: "Od 8 let jsem hrál v 7 různých inscenacích (včetně jedné z hlavních rolí v muzikálu Mary Poppins).",
        },
        icon: "theatre",
        link: "https://www.mdb.cz/cs/lide/petr-simcak",
      },
    ],
  },
  aboutMe: {
    title: { en: "About Me", cs: "Kdo jsem" },
    description: {
      en: "I am a developer who enjoys understanding systems in depth and building a clean software with care. I am drawn to challenging problems, practical implementation, and the kind of work that pushes me to think clearly and keep learning. I value thoughtful, nice design, technical depth and user experience. I am also a former movie and theatre actor with over 10 years of experience, which has given me a unique perspective on IT from the humanistic standpoint.",
      cs: "Jsem vývojář, který rád do hloubky rozumí systémům a pečlivě staví čistý software. Lákají mě náročné problémy, praktická implementace a práce, která mě nutí jasně přemýšlet a stále se učit. Záleží mi na promyšleném a hezkém designu, technické hloubce a uživatelském zážitku. Jsem také bývalý filmový a divadelní herec s více než desetiletou praxí, což mi dává jedinečný pohled na IT z humanitní perspektivy.",
    },
  },
  education: {
    title: { en: "Education", cs: "Vzdělání" },
    items: [
      {
        period: "2023 - 2026",
        degree: { en: "Common Core at 42Prague", cs: "Common Core na 42Prague" },
        institution: "École 42",
        description: {
          en: "Specialized in advanced topics in computer science and low level programming.",
          cs: "Zaměření na pokročilá témata informatiky a nízkoúrovňové programování.",
        },
        link: "https://www.42prague.com",
      },
      {
        period: "2020 - 2025",
        degree: { en: "Bachelor of Sport Technology", cs: "Bakalář – Sportovní technologie" },
        institution: { en: "Brno University of Technology", cs: "Vysoké učení technické v Brně" },
        description: {
          en: "Focused on signal processing and analysis with applications in sports and health.",
          cs: "Zaměření na zpracování a analýzu signálů s využitím ve sportu a zdravotnictví.",
        },
        link: "https://www.vut.cz/en/students/programmes/programme/6264",
      },
    ],
  },
};

//////////////
// PROJECTS //
//////////////
const projectsContent = {
  meta: {
    title: { en: "Projects - Simcak", cs: "Projekty - Simcak" },
    description: { en: "Showcase of my best work and projects", cs: "Přehled mé nejlepší práce a projektů" },
  },
  title: { en: "Projects", cs: "Projekty" },
  description: {
    en: "Here is a curated set of projects that reflects my growth as a developer, my hands-on approach to problem-solving, and my focus on thoughtful design, technical depth, and turning ideas/assignments into something real.",
    cs: "Vybrané projekty, které ukazují můj růst jako vývojáře, praktický přístup k řešení problémů a důraz na promyšlený design, technickou hloubku a proměnu nápadů či zadání v něco skutečného.",
  },
  projects: [
    // {
    //   title: "Transcendence",
    //   description:
    //     "A brief description of your first project. Explain what it does and what technologies you used.",
    //   image: "/assets/images/projects/project1.gif",
    //   href: "#",
    // },
    {
      title: "Cub3D",
      description: {
        en: "3D Graphic game written in C. It is simplified Wolfenstein 3D. It is based on raycasting and parsing algorithm.",
        cs: "3D grafická hra napsaná v C – zjednodušený Wolfenstein 3D. Je postavená na raycastingu a parsovacím algoritmu.",
      },
      image: "/assets/images/projects/Cub3D.gif",
      href: "https://github.com/simcak/Core/tree/main/11_CUB3D",
    },
    {
      title: { en: "Bachelor Thesis", cs: "Bakalářská práce" },
      description: {
        en: "Heart Rate Estimation from the PPG Signals. Code is done in Python and the thesis is written in LaTeX.",
        cs: "Odhad tepové frekvence z PPG signálů. Kód je napsaný v Pythonu a práce v LaTeXu.",
      },
      image: "/assets/images/projects/bakalarka.gif",
      href: "/assets/images/projects/bakalarka.pdf",
    },
    {
      title: "IRC (Internet Relay Chat)",
      description: {
        en: "42 team project: a server written in C++. It supports multiple clients, channels, and basic IRC commands.",
        cs: "Týmový projekt na 42: server napsaný v C++. Podporuje více klientů, kanály a základní IRC příkazy.",
      },
      image: "/assets/images/projects/IRC.png",
      href: "https://github.com/simcak/Core/tree/main/14_IRC",
    },
    // {
    //   title: "iProtect",
    //   description:
    //     "A brief description of your first project. Explain what it does and what technologies you used.",
    //   image: "/assets/images/projects/project1.jpg",
    //   href: "#",
    // },
    {
      title: { en: "Other Projects", cs: "Další projekty" },
      description: {
        en: "Explore my GitHub profile, where you'll find open-source projects as well as links and brief descriptions of selected private work hosted in organizations.",
        cs: "Prozkoumejte můj GitHub profil, kde najdete open-source projekty i odkazy a krátké popisy vybraných soukromých prací v organizacích.",
      },
      image: "/assets/images/projects/mario_pixelArt_wallpaper.gif",
      href: "https://github.com/simcak",
    },
  ],
};

//////////////////
// CERTIFICATES //
//////////////////
const certificatesContent = {
  meta: {
    title: { en: "Certificates - Simcak", cs: "Certifikáty - Simcak" },
    description: {
      en: "Showcase of my certificates and achievements",
      cs: "Přehled mých certifikátů a úspěchů",
    },
  },
  title: { en: "Certificates", cs: "Certifikáty" },
  description: {
    en: "Here are my certificates and achievements across different domains.",
    cs: "Moje certifikáty a úspěchy z různých oblastí.",
  },
  certificates: [
    {
      title: { en: "Mensa Card", cs: "Členská karta Mensy" },
      description: { en: "Proof of membership in Mensa.", cs: "Potvrzení o členství v Mense." },
      image: "/assets/images/certificates/mensa.png",
      pdf: "http://www.mensa.cz/qr?id=9ynnqr33h",
      issuer: "Mensa",
      date: "2021",
    },
    {
      title: { en: "National Math Testing", cs: "Celostátní testování z matematiky" },
      description: { en: "Diploma in Mathematics competition.", cs: "Diplom ze soutěže v matematice." },
      image: "/assets/images/certificates/scio.png",
      pdf: "/assets/images/certificates/scio_mat.pdf",
      issuer: "SCIO",
      date: "2019",
    },
    {
      title: { en: "AI Course", cs: "Kurz AI" },
      description: { en: "Diploma in Elements of AI course.", cs: "Diplom z kurzu Elements of AI." },
      image: "/assets/images/certificates/elements_of_AI.png",
      pdf: "/assets/images/certificates/elements_of_AI.pdf",
      issuer: "Elements of AI",
      date: "2023",
    },
  ],
};

////////////////////////
// UI (labels, texts) //
////////////////////////
const ui = {
  meta: {
    title: { en: "Petr Simcak · Developer", cs: "Petr Simcak · Vývojář" },
    description: {
      en: "Portfolio of Petr Simcak - developer, 42Prague student and former actor.",
      cs: "Portfolio Petra Simcaka – vývojáře, studenta 42Prague a bývalého herce.",
    },
  },
  header: {
    nav: [
      { href: "#about", label: { en: "About", cs: "O mně" } },
      { href: "#skills", label: { en: "Skills", cs: "Dovednosti" } },
      { href: "#experience", label: { en: "Experience", cs: "Zkušenosti" } },
      { href: "#projects", label: { en: "Projects", cs: "Projekty" } },
      { href: "#certificates", label: { en: "Certificates", cs: "Certifikáty" } },
      { href: "#contact", label: { en: "Contact", cs: "Kontakt" } },
    ],
    navLabel: { en: "Main", cs: "Hlavní" },
    backToTop: { en: "Back to top", cs: "Zpět nahoru" },
    toggleTheme: { en: "Toggle dark mode", cs: "Přepnout tmavý režim" },
    openMenu: { en: "Open menu", cs: "Otevřít menu" },
    language: { en: "Language", cs: "Jazyk" },
  },
  hero: {
    badge: { en: "Developer · 42Prague", cs: "Vývojář · 42Prague" },
    // Used when homeContent.description is empty.
    tagline: {
      en: "Developer who enjoys understanding systems in depth and building clean software with care - from low-level C/C++ to thoughtful, well-designed interfaces.",
      cs: "Vývojář, který rád do hloubky rozumí systémům a pečlivě staví čistý software – od nízkoúrovňového C/C++ po promyšlená, dobře navržená rozhraní.",
    },
    whoami: { en: "petr, developer & ex-actor", cs: "petr, vývojář & bývalý herec" },
    languagesKey: { en: "languages", cs: "jazyky" },
    studiedKey: { en: "studied", cs: "studium" },
    speaksKey: { en: "speaks", cs: "mluví" },
  },
  about: {
    eyebrow: { en: "01 / who I am", cs: "01 / kdo jsem" },
    visit: { en: "Visit", cs: "Navštívit" },
  },
  skills: {
    eyebrow: { en: "02 / toolbox", cs: "02 / výbava" },
    title: { en: "Skills", cs: "Dovednosti" },
    lead: { en: "The tools, languages and habits I work with.", cs: "Nástroje, jazyky a návyky, se kterými pracuji." },
    technical: { en: "Technical skills", cs: "Technické dovednosti" },
    languages: { en: "Languages", cs: "Jazyky" },
    soft: { en: "Soft skills", cs: "Měkké dovednosti" },
  },
  experience: {
    eyebrow: { en: "03 / background", cs: "03 / cesta" },
    lead: {
      en: "Before software, I spent over ten years in front of cameras and on stage.",
      cs: "Než jsem se pustil do softwaru, strávil jsem přes deset let před kamerou a na jevišti.",
    },
    learnMore: { en: "Learn more", cs: "Více informací" },
  },
  projects: {
    eyebrow: { en: "04 / work", cs: "04 / práce" },
    view: { en: "View project", cs: "Zobrazit projekt" },
  },
  certificates: {
    eyebrow: { en: "05 / achievements", cs: "05 / úspěchy" },
    view: { en: "View certificate", cs: "Zobrazit certifikát" },
  },
  contact: {
    eyebrow: { en: "06 / contact", cs: "06 / kontakt" },
    title: { en: "Let's build something", cs: "Pojďme něco vytvořit" },
    titleHighlight: { en: "together", cs: "společně" },
    text: {
      en: "Have a project, an idea, or just want to say hi? My inbox is always open.",
      cs: "Máte projekt, nápad, nebo mě jen chcete pozdravit? Můj inbox je vždy otevřený.",
    },
    email: { en: "Email me", cs: "Napište mi" },
  },
  footer: {
    rights: { en: "All rights reserved.", cs: "Všechna práva vyhrazena." },
  },
};

const content = { siteConfig, homeContent, aboutContent, projectsContent, certificatesContent, ui };

/** All site content with texts resolved to the given language (e.g. `Astro.currentLocale`). */
export const getContent = (lang?: string) => localize(content, toLang(lang));
