export type Lang = 'nl' | 'en';

export const translations = {
  nl: {
    nav: {
      services: 'Diensten',
      about: 'Over mij',
      process: 'Werkwijze',
      cta: 'Start een project →',
      langSwitch: 'EN',
      langSwitchHref: '/en/',
    },
    hero: {
      eyebrow: 'Senior consultant · Voorburg, NL · Nu beschikbaar',
      words: ["AI\u00A0APPS", "DIGITALE<br>PROGRAMMA'S", "SAFe\u00A0AGILE"],
      desc: "Ik help bedrijven moderne software sneller te bouwen, leid digitale transformatieprogramma's die beklijven, en bouw echte wendbaarheid via SAFe — allemaal op de snelheid die AI-teams mogelijk maken.",
      btnPrimary: "Start een project →",
      btnGhost: "Bekijk diensten ↓",
    },
    marquee: [
      'AI coding teams',
      'Digitale transformatie',
      'SAFe 6.0',
      'Snelle levering',
      'OKR-afstemming',
      "Agile programma's",
      'Productstrategie',
      'Interim leiderschap',
    ],
    services: {
      label: '01 — Wat ik doe',
      title: ['Drie manieren', 'waarop ik impact maak'],
      right: "Senior freelance expertise in bouwen, transformeren en schalen. Snel inzetbaar — zonder bureau-overhead.",
      items: [
        {
          name: 'AI-gedreven App Ontwikkeling',
          location: 'Nederland',
          desc: "Ik bouw productieklare applicaties met AI-coding teams. Wat vroeger maanden duurde, duurt nu weken. Van idee tot deployed product — met de kwaliteit die je van een senior engineer verwacht.",
          tags: ['AI coding', 'Full-stack', 'React / Next.js', 'Node / Python', 'Snelle levering', 'Claude API'],
        },
        {
          name: "Digitale Transformatieprogramma's",
          location: 'Nederland',
          desc: "Leidinggeven aan complexe transformatieprogramma's op het snijvlak van strategie, technologie en mensen. Ik breng de hands-on leiding die digitale ambitie omzet in echte, blijvende verandering.",
          tags: ['Programmalead', 'Verandermanagement', 'OKR', 'Stakeholder align', 'Strategie', 'Interim CTO/CPO'],
        },
        {
          name: 'SAFe Agile Transformatie · Nederland',
          location: 'Nederland',
          desc: "Begeleid organisaties naar echte wendbaarheid via SAFe — niet de ceremonie zonder de substantie. Afgestemde teams, snellere doorstroming, betere resultaten. Ik coach, faciliteer en leid totdat het beklijft.",
          tags: ['SAFe® SPC4', 'PI Planning', 'Value streams', 'ICAgile AC', 'PSM I', 'Portfolio mgmt'],
        },
      ],
    },
    manifesto: {
      label: '02 — Waarom now→next',
      quote: 'De kloof tussen het <em>hier en nu</em> en <em>waar we naartoe willen</em> is waar de meeste bedrijven in vastlopen. Te traag om te bouwen. Te star om te veranderen. Te versnipperd om op één lijn te komen. Ik overbrugge die kloof — <em>snel, slim en zonder de ceremonie.</em>',
      pillars: [
        {
          label: 'Snelheid',
          text: 'AI-coding teams comprimeren maanden naar weken. Eerste werkende versie in dagen. Itereer ter plekke. Lever op voordat de markt beweegt.',
        },
        {
          label: 'Helderheid',
          text: "Geen methodologie-theater. Duidelijke doelen, afgestemde teams, tastbare voortgang zichtbaar elke sprint — van C-suite tot de mensen die leveren.",
        },
        {
          label: 'Transformatie',
          text: "Goed gedaan is het metamorfose. Fout gedaan ben je gewoon een snellere rups. Ik heb beide gezien — ik doe het eerste.",
        },
      ],
    },
    about: {
      label: '03 — Over mij',
      h2First: 'Één consultant.',
      h2Second: 'Volledige',
      h2Rest: ' capability.',
      p1: "Ik ben Chris van Eijk — oprichter van now→next, werkzaam vanuit Voorburg, NL. Ik werk met organisaties die senior expertise nodig hebben, geleverd zonder de overhead van een adviesbureau of de wrijving van een groot team.",
      p2: "Mijn achtergrond omvat 20+ jaar technologieleiderschap, enterprise agile en hands-on softwareontwikkeling. Ik heb grootschalige programma's geleid bij bedrijven waaronder Heineken en Nike — en ik weet het verschil tussen wat goed klinkt in een workshop en wat werkt in productie.",
      p3: "Mijn huidige voorsprong is AI-gedreven ontwikkeling. Ik heb een volledig SaaS-product solo gebouwd en uitgerold met AI-coding tools — de snelheid die de meeste teams niet bijhouden, gestuurd door senior engineering-oordeel.",
      statsLabels: [
        'Jaar in tech & transformatie',
        'Snellere levering met AI-teams',
        'Gevestigd in Voorburg, Nederland',
        'Dagen methodologie-theater',
      ],
      quote: '"Chris blinkt uit in het managen van grootschalige programma\'s met senior managementexpertise, zorgt voor tijdige levering en behoudt rust tijdens uitdagingen."',
      quoteBy: '— Zaid Jamal, voormalig collega',
    },
    process: {
      label: '04 — Hoe het werkt',
      title: ['Van briefing tot', 'doorbraak'],
      steps: [
        {
          num: '01 / Ontdekking',
          title: 'Het echte probleem begrijpen',
          desc: 'Een scherpe intake-sessie om doelen, beperkingen en de definitie van succes te begrijpen — niet hoe het klinkt, maar hoe het werkt.',
        },
        {
          num: '02 / Ontwerp',
          title: 'Het pad voorwaarts bepalen',
          desc: 'Een helder, gescopet plan met eerlijke resourcing en mijlpalen gericht op resultaten die ertoe doen.',
        },
        {
          num: '03 / Leveren',
          title: 'Bouwen, transformeren, versnellen',
          desc: 'Hands-on uitvoering. AI-ondersteund waar het helpt. Menselijk geleid waar het telt. Zichtbare voortgang elke week.',
        },
        {
          num: '04 / Verankeren',
          title: 'Capaciteit achterlaten',
          desc: 'Het doel is altijd om uw team sterker te maken — niet onbeperkt afhankelijk van een consultant.',
        },
      ],
    },
    caseStudy: {
      label: '02 — Case study',
      tag: 'AI-gedreven SaaS · Gebouwd met AI agents',
      title: ['Van idee tot', 'live product.'],
      desc: 'pilot-next.com is volledige vliegtuigbeheer- en boekingssoftware voor eigendomsgroepen en vliegclubs — gebouwd en gelanceerd door mij alleen, met AI-coding tools. Van eerste regel code tot betalende klanten in weken, niet maanden.',
      metrics: [
        { value: '4.9★', label: 'Gebruikerswaardering' },
        { value: '27', label: 'Bedrijven actief' },
        { value: '48', label: 'Geregistreerde gebruikers' },
        { value: 'AI', label: 'Gebouwd met AI agents' },
      ],
      features: ['2-klik boeken', 'Automatische facturatie', 'Onderhoud tracking', 'AI-assistent (MCP)', 'PWA · Mobile-first', 'GDPR-compliant'],
      cta: 'Bekijk pilot-next.com →',
    },
    articles: {
      label: '06 — Hardop nadenken',
      title: ['Artikelen &', 'inzichten'],
      right: 'Praktisch schrijven over AI-ontwikkeling, agile transformatie en de realiteit van moderne softwareteams.',
      more: 'Alle artikelen op LinkedIn →',
    },
    cta: {
      label: 'Laten we praten',
      h2: ['Van nu naar', 'volgende.'],
      sub: "Eén gesprek is genoeg om te weten of we bij elkaar passen. Vertel me waar je naartoe wilt — ik vertel je hoe snel we er kunnen komen.",
      btn: 'Start het gesprek →',
    },
    footer: {
      services: 'Diensten',
      about: 'Over mij',
      process: 'Werkwijze',
      contact: 'Contact',
    },
  },

  en: {
    nav: {
      services: 'Services',
      about: 'About',
      process: 'How it works',
      cta: 'Start a project →',
      langSwitch: 'NL',
      langSwitchHref: '/',
    },
    hero: {
      eyebrow: 'Senior consultant · Voorburg, NL · Available now',
      words: ["AI\u00A0APPS", "DIGITAL<br>PROGRAMS", "SAFe\u00A0AGILE"],
      desc: "I help companies ship modern software faster, lead digital transformation programs that stick, and build true agility through SAFe — all at the speed that AI-assisted teams unlock.",
      btnPrimary: "Start a project →",
      btnGhost: "See services ↓",
    },
    marquee: [
      'AI coding teams',
      'Digital transformation',
      'SAFe 6.0',
      'Rapid delivery',
      'OKR alignment',
      'Agile programs',
      'Product strategy',
      'Interim leadership',
    ],
    services: {
      label: '01 — What I do',
      title: ['Three ways I', 'drive impact'],
      right: "Senior freelance expertise across build, transform, and scale. Deployed fast — without the agency overhead.",
      items: [
        {
          name: 'AI-Powered App Development',
          location: 'Netherlands',
          desc: "I build production-ready applications using AI coding teams. What used to take months now takes weeks. From idea to deployed product — with the quality and craft you'd expect from a senior engineer.",
          tags: ['AI coding', 'Full-stack', 'React / Next.js', 'Node / Python', 'Rapid delivery', 'Claude API'],
        },
        {
          name: 'Digital Transformation Programs',
          location: 'Netherlands',
          desc: "Leading complex transformation programs across strategy, technology, and people. I bring the hands-on leadership and the ruthless clarity that turns digital ambition into real, sustained change.",
          tags: ['Program lead', 'Change management', 'OKR', 'Stakeholder align', 'Strategy', 'Interim CTO/CPO'],
        },
        {
          name: 'SAFe Agile Transformation · Netherlands',
          location: 'Netherlands',
          desc: "Guide organisations to genuine agility through SAFe — not the ceremony without the substance. Aligned teams, faster flow, better outcomes. I coach, facilitate, and lead until it sticks.",
          tags: ['SAFe® SPC4', 'PI Planning', 'Value streams', 'ICAgile AC', 'PSM I', 'Portfolio mgmt'],
        },
      ],
    },
    manifesto: {
      label: '02 — Why now→next',
      quote: "The gap between <em>now</em> and <em>next</em> is where most companies get stuck. Too slow to build. Too rigid to change. Too siloed to align. I close that gap — <em>fast, smart, and without the ceremony.</em>",
      pillars: [
        {
          label: 'Speed',
          text: 'AI coding teams compress months into weeks. First working version in days. Iterate on the spot. Deliver before the market moves.',
        },
        {
          label: 'Clarity',
          text: 'No methodology theater. Clear goals, aligned teams, tangible progress visible every sprint — from C-suite to the people shipping.',
        },
        {
          label: 'Transformation',
          text: "Done right, it's metamorphosis. Done wrong, you're just a faster caterpillar. I've seen both — I do the former.",
        },
      ],
    },
    about: {
      label: '03 — About',
      h2First: 'One consultant.',
      h2Second: 'Full-stack',
      h2Rest: ' capability.',
      p1: "I'm Chris van Eijk — founder of now→next, operating from Voorburg, NL. I work with organisations that need senior expertise delivered without the overhead of a consultancy or the friction of a large team.",
      p2: "My background spans 20+ years of technology leadership, enterprise agile, and hands-on software delivery. I've led large-scale programs at companies including Heineken and Nike — and I know the difference between what sounds good in a workshop and what works in production.",
      p3: "My current edge is AI-powered development. I've built and shipped a full SaaS product solo using AI coding tools — the kind of velocity most teams can't match, guided by senior engineering judgment.",
      statsLabels: [
        'Years in tech & transformation',
        'Faster delivery with AI teams',
        'Based in Voorburg, Netherlands',
        'Days of methodology theater',
      ],
      quote: '"Chris excels in managing large-scale programs with senior management expertise, ensuring timely deliveries and maintaining calm during challenges."',
      quoteBy: '— Zaid Jamal, former colleague',
    },
    process: {
      label: '04 — How it works',
      title: ['From brief to', 'breakthrough'],
      steps: [
        {
          num: '01 / Discover',
          title: 'Understand the real problem',
          desc: 'A sharp intake session to align on the goal, the constraints, and what success actually looks like — not what it sounds like.',
        },
        {
          num: '02 / Design',
          title: 'Define the path forward',
          desc: 'A clear, scoped plan with honest resourcing and milestones focused on outcomes that matter.',
        },
        {
          num: '03 / Deliver',
          title: 'Ship, transform, accelerate',
          desc: 'Hands-on execution. AI-assisted where it helps. Human-led where it counts. Visible progress every week.',
        },
        {
          num: '04 / Embed',
          title: 'Leave capability behind',
          desc: 'The goal is always to make your team stronger — not dependent on a consultant indefinitely.',
        },
      ],
    },
    caseStudy: {
      label: '02 — Case study',
      tag: 'AI-powered SaaS · Built with AI agents',
      title: ['From idea to', 'live product.'],
      desc: 'pilot-next.com is full aircraft management and booking software for co-ownership groups and flying clubs — built and launched by me alone, using AI coding tools. From first line of code to paying customers in weeks, not months.',
      metrics: [
        { value: '4.9★', label: 'User rating' },
        { value: '27', label: 'Companies active' },
        { value: '48', label: 'Registered users' },
        { value: 'AI', label: 'Built with AI agents' },
      ],
      features: ['2-click booking', 'Automated invoicing', 'Maintenance tracking', 'AI assistant (MCP)', 'PWA · Mobile-first', 'GDPR-compliant'],
      cta: 'Visit pilot-next.com →',
    },
    articles: {
      label: '06 — Thinking out loud',
      title: ['Articles &', 'insights'],
      right: 'Practical writing on AI development, agile transformation, and the realities of scaling modern software teams.',
      more: 'All articles on LinkedIn →',
    },
    cta: {
      label: "Let's talk",
      h2: ["Let's go from", 'now to next.'],
      sub: "One conversation is enough to know if we're a fit. Tell me where you want to go — I'll tell you how fast we can get there.",
      btn: 'Start the conversation →',
    },
    footer: {
      services: 'Services',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
    },
  },
} as const;

export type Translations = typeof translations.en;
