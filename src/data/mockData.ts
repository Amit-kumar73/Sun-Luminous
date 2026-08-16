import {
  Project,
  Collection,
  Product,
  Material,
  Lead,
  ArchitectResource,
  JournalArticle,
  InstallationFormation,
  InstallationElement,
  ClientPartner,
  PDFCatalog,
  WorkflowStep,
  HospitalityAdvantage
} from '../types';

export const OFFICIAL_PDF_CATALOGS: PDFCatalog[] = [
  {
    id: 'cat-hospitality',
    title: 'SUN LUMINOUS — HOTEL PORTFOLIO',
    subtitle: 'Hospitality Solutions: Sculptural Lighting • Installations • Bespoke Art Pieces',
    year: '2024 / 2025',
    pages: 55,
    featured: true,
    category: 'Hospitality',
    coverImage: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600&auto=format&fit=crop',
    highlights: [
      '100+ Installations across leading global & luxury Indian hotels',
      'End-to-End multi-material expertise: glass, metal, ceramic, wood & textiles',
      'Proven 7-step hospitality engineering & installation workflow',
      'Featured projects: Leela Palace Jaipur, Ritz Delhi, Oberoi Soaltee Kathmandu, Taj Sawai Villas, Clarks Exotica, ITC Hotels, Accor Chennai'
    ],
    contactPerson: {
      name: 'Ms. Ananya Sharma',
      role: 'Head of Hospitality & Bespoke Commissions',
      phone: ['+91 98201 88472', '+91 98110 54291'],
      email: ['concierge@sunluminous.com', 'hospitality@sunluminous.com']
    }
  },
  {
    id: 'cat-residential',
    title: 'SUN LUMINOUS — RESIDENTIAL CATALOGUE',
    subtitle: 'Bespoke Luxury Lighting, Décor & Art Furniture for Premier Estates',
    year: '2023 / 2024',
    pages: 66,
    featured: true,
    category: 'Residential',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    highlights: [
      '1,450°C (2,642°F) state-of-the-art glass blowing centre with 100+ artisans',
      'Full bespoke lighting range: Chandeliers, Ceiling-to-Floor, Wall Sconces, Table & Floor Lamps, Vases & Art Furniture',
      'Featured estates: Wagh Bakri, Birla House, CM House Delhi (39 bespoke pieces), Amaryllis Group, Emaar, Max Towers, Camellias, TARC, Lodha',
      'Custom gradient color processes with zero-waste glass remelting cycle'
    ],
    contactPerson: {
      name: 'Ms. Ananya Sharma',
      role: 'Head of Residential & Bespoke Design',
      phone: ['+91 98201 88472', '+91 98110 54291'],
      email: ['concierge@sunluminous.com', 'bespoke@sunluminous.com']
    }
  },
  {
    id: 'cat-large-installations',
    title: 'SUN LUMINOUS LARGE LIGHTING INSTALLATIONS — DESIGN REFERENCE',
    subtitle: 'Creative Ambition, Engineered to Endure (Over 400+ Curated Reference Designs)',
    year: '2024 / 2025',
    pages: 47,
    featured: true,
    category: 'Large Installations',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    highlights: [
      'Over 400+ bespoke architectural lighting references & 300+ custom glass elements',
      '8 Core Structural Formations: Floral Halo, Orbiting Ring, Infinity Loop, Vedant Crown, Cascade, Raindrop, Cluster, Swirl',
      'Showcase concepts: SL 328, SL 312, SL 120, SL 2608, SL 142, SL 167, SL 121, SL 201, SL 221, SL 122, SL 126, SL 145, SL 105, SL 146, SL 137, SL 317, SL 334',
      'Landmark installations: Minerva Tower Mumbai, Monte South, 360 West Worli, Lodha World One Towers, CM House, Inorbit'
    ],
    contactPerson: {
      name: 'Ms. Ananya Sharma',
      role: 'Head of Large Installations & Infrastructure',
      phone: ['+91 98201 88472', '+91 98110 54291'],
      email: ['concierge@sunluminous.com', 'projects@sunluminous.com']
    }
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  // Builders
  { name: 'Oberoi Realty', category: 'Builders', badge: 'Flagship Partner' },
  { name: 'Embassy Group', category: 'Builders' },
  { name: 'Unity Group', category: 'Builders', badge: 'The Amaryllis' },
  { name: 'Lodha Group', category: 'Builders', badge: 'World One / The Park' },
  { name: 'Kalpataru', category: 'Builders' },
  { name: 'DLF', category: 'Builders', badge: 'The Camellias' },
  { name: 'M3M', category: 'Builders' },
  { name: 'Panchshil Realty', category: 'Builders' },
  { name: 'Prestige Group', category: 'Builders' },
  { name: 'Sobha Developers', category: 'Builders' },
  { name: 'Phoenix Mills', category: 'Builders' },
  { name: 'Rise Group', category: 'Builders' },
  { name: 'Prateek Group', category: 'Builders' },
  { name: 'Maia Design Studio', category: 'Builders' },
  { name: 'Morphogenesis', category: 'Builders' },

  // Hospitality / Hotels
  { name: 'Hyatt Hotels', category: 'Hospitality/Hotels', badge: 'Luxury Tier' },
  { name: 'Six Senses', category: 'Hospitality/Hotels', badge: 'Resorts & Spa' },
  { name: 'JW Marriott', category: 'Hospitality/Hotels' },
  { name: 'The Leela Palaces', category: 'Hospitality/Hotels', badge: 'Jaipur Palace' },
  { name: 'Taj Hotels & Resorts', category: 'Hospitality/Hotels', badge: 'Sawai Villas / Taj Mansingh' },
  { name: 'Oberoi Hotels & Resorts', category: 'Hospitality/Hotels', badge: 'Soaltee Kathmandu' },
  { name: 'Le Meridien', category: 'Hospitality/Hotels' },
  { name: 'Radisson Blu', category: 'Hospitality/Hotels', badge: 'Nathdwara / Ranchi' },
  { name: 'Sula Vineyards', category: 'Hospitality/Hotels' },
  { name: 'Westin Hotels', category: 'Hospitality/Hotels' },
  { name: 'ITC Hotels', category: 'Hospitality/Hotels', badge: 'Luxury Collection' },
  { name: 'Accor Hotels', category: 'Hospitality/Hotels', badge: 'Chennai' },
  { name: 'Clarks Exotica', category: 'Hospitality/Hotels', badge: 'Convention Resort' },
  { name: 'Novotel', category: 'Hospitality/Hotels' },
  { name: 'The Fern Hotels', category: 'Hospitality/Hotels' },
  { name: 'Lemon Tree Premier', category: 'Hospitality/Hotels' },
  { name: 'Signature Hotels', category: 'Hospitality/Hotels' },

  // Corporate / Commercial
  { name: 'K Raheja Corp', category: 'Corporate/Commercial', badge: 'Mindspace' },
  { name: 'Signature Global', category: 'Corporate/Commercial' },
  { name: 'Bhima Jewellers', category: 'Corporate/Commercial', badge: 'Flagship Showrooms' },
  { name: 'The Chanakya', category: 'Corporate/Commercial', badge: 'Luxury Mall Delhi' },
  { name: 'Malabar Gold & Diamonds', category: 'Corporate/Commercial' },
  { name: 'SKV Commercial', category: 'Corporate/Commercial' },
  { name: 'Vanijya Bhawan', category: 'Corporate/Commercial', badge: 'Commerce Ministry Delhi' },
  { name: 'Max Towers', category: 'Corporate/Commercial', badge: 'Noida HQ' },
  { name: 'Inorbit Mall', category: 'Corporate/Commercial', badge: 'Atrium Cascade' },

  // Residential
  { name: 'Lodha Altamount', category: 'Residential', badge: 'Billionaires Row' },
  { name: 'The Camellias (DLF)', category: 'Residential', badge: 'Golf Links' },
  { name: 'Oberoi 360 West Worli', category: 'Residential', badge: 'Ritz Residences' },
  { name: 'Wagh Bakri Heritage Estate', category: 'Residential', badge: 'Complete Residence' },
  { name: 'Birla House', category: 'Residential', badge: 'Historic Estate' },
  { name: 'CM House Delhi', category: 'Residential', badge: '39 Bespoke Pieces' },
  { name: 'Lodha World One Towers', category: 'Residential', badge: 'Showflat & Penthouses' },
  { name: 'TARC Luxury Residences', category: 'Residential', badge: 'Hourglass LED Pendants' },
  { name: '50+ Private Farmhouses & Villas', category: 'Residential', badge: 'Confidential NDA' }
];

export const INSTALLATION_FORMATIONS: InstallationFormation[] = [
  {
    id: 'form-floral-halo',
    name: 'Floral Halo Formation',
    category: 'Circular & Symmetrical',
    description: 'A circular perimeter of cascading glass florets radiating warm light outward, ideal for hotel lobbies, rotundas, and round grand dining spaces.',
    recommendedSpaces: ['Hotel Lobby Rotundas', 'Grand Circular Foyers', 'Ballroom Centers']
  },
  {
    id: 'form-orbiting-ring',
    name: 'Orbiting Ring Formation',
    category: 'Planetary & Concentric',
    description: 'Interlocking concentric glass tube rings suspended at varied angles creating dynamic kinetic depth and 360-degree illumination.',
    recommendedSpaces: ['Double-Height Atriums', 'Executive Boardrooms', 'Luxury Retail Lounges']
  },
  {
    id: 'form-infinity-loop',
    name: 'Infinity Loop Formation',
    category: 'Fluid Geometric',
    description: 'A continuous flowing ribbon of molten glass elements tracing an infinity curve through the horizontal and vertical ceiling planes.',
    recommendedSpaces: ['Long Hotel Corridors', 'Concierge Receptions', 'Gallery Walkways']
  },
  {
    id: 'form-vedant-crown',
    name: 'Vedant Crown Formation',
    category: 'Regal Tiered',
    description: 'An architectural crown structure with multi-tier vertical glass prisms ascending upward into a majestic crystalline canopy.',
    recommendedSpaces: ['Heritage Hotel Receptions', 'Palace Foyers', 'Presidential Suites']
  },
  {
    id: 'form-cascade',
    name: 'Cascade Formation',
    category: 'Waterfall Linear',
    description: 'Linear wave of suspended crystal prisms creating an undulating curtain of illumination along modern linear architectural spaces.',
    recommendedSpaces: ['Over-Bar Canopies', 'Banquet Prefunction Areas', 'Conference Dining']
  },
  {
    id: 'form-raindrop',
    name: 'Raindrop Cascade Formation',
    category: 'Organic Droplet',
    description: 'Hundreds of individually weighted mouth-blown glass droplets descending at staggered heights simulating summer rain caught in light.',
    recommendedSpaces: ['Multi-Level Staircase Voids', 'Luxury Residence Foyers', 'Spa Reception Pools']
  },
  {
    id: 'form-cluster',
    name: 'Cluster Formation',
    category: 'Dense Constellation',
    description: 'A high-density organic cluster of crystal spheres and bubbles concentrated in the core and dispersing softly toward the edges.',
    recommendedSpaces: ['Living Pavilion Centers', 'Showflat Dining Salons', 'VIP Hotel Lounges']
  },
  {
    id: 'form-swirl',
    name: 'Swirl Formation',
    category: 'Helical Tornado',
    description: 'A dynamic 3D spiral vortex of crystal leaves and spheres swirling downward through 3 to 6 stories of architectural atrium space.',
    recommendedSpaces: ['Spiral Staircases', 'High-Rise Atriums (30ft - 100ft)', 'Flagship Towers']
  }
];

export const INSTALLATION_ELEMENTS: InstallationElement[] = [
  {
    id: 'el-sl-126',
    code: 'SL 126',
    name: 'Gitter Fluted Prism',
    material: 'Optic Borosilicate Glass',
    finish: 'Fluted Ice Clear / Champagne Dip',
    imageUrl: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=400&auto=format&fit=crop',
    description: 'Elongated fluted glass rod designed to ripple with linear light and high optical dispersion in sweeping wave formations.'
  },
  {
    id: 'el-sl-312',
    code: 'SL 312',
    name: 'Bubble Sphere Orb',
    material: 'Hand-Blown Soda-Lime Glass',
    finish: 'Smoked Gradient & Internal Micro-Bubbles',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400&auto=format&fit=crop',
    description: 'Spherical blown glass orb with trapped internal air bubbles that scatter ambient LED light like suspended water droplets.'
  },
  {
    id: 'el-sl-201',
    code: 'SL 201',
    name: 'Crystal Sphere / Bloom',
    material: '30% Pure Lead Crystal',
    finish: 'High-Luster Diamond Polish',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop',
    description: 'Solid crystal sphere and floral bloom elements with faceted centers, engineered for inverted pyramid and chandelier matrixes.'
  },
  {
    id: 'el-sl-165',
    code: 'SL 165',
    name: 'Padmara Crystal Rock',
    material: 'Rough-Cast Sculpted Crystal',
    finish: 'Raw Chiseled Facet / Emerald & Quartz Hue',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=400&auto=format&fit=crop',
    description: 'Chiseled gemstone-inspired crystal chunk replicating natural emerald and quartz stones for organic mineral installations.'
  },
  {
    id: 'el-sl-299',
    code: 'SL 299',
    name: 'Ambird Flying Glass Wing',
    material: 'Amber Infused Molten Glass',
    finish: 'Flamed Amber / 24K Gold Leaf Veins',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=400&auto=format&fit=crop',
    description: 'Sculptural flying bird/wing glass element capturing kinetic flight motion across hotel atrium installations.'
  },
  {
    id: 'el-sl-133',
    code: 'SL 133',
    name: 'Stelara 4-Point Star',
    material: 'Mouth-Blown Crystal Glass',
    finish: 'Clear / Champagne Satin Dip',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
    description: 'Four-point geometric glass star used in celestial clusters and modern cosmic chandelier constellations.'
  },
  {
    id: 'el-sl-167',
    code: 'SL 167',
    name: 'Dew Drop & Honey Drop',
    material: 'Heavy Droplet Blown Glass',
    finish: 'Amber Honey / Crystal Teardrop',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop',
    description: 'Hand-drawn teardrop form with solid tip and hollow optical bulb, creating a warm, elegant glow.'
  },
  {
    id: 'el-sl-120',
    code: 'SL 120',
    name: 'Crystal Bloom Leaf',
    material: 'Curved Slumped Glass',
    finish: 'Clear Acid Frosted with Polished Core',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop',
    description: 'Elongated petal and blossom element forming large organic canopy fields across grand lobby ceilings.'
  },
  {
    id: 'el-sl-121',
    code: 'SL 121',
    name: 'Branchlet Crystal Twig',
    material: 'Cast Solid Glass & Brass',
    finish: 'Textured Bark Glass / Brushed Gold Armature',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop',
    description: 'Naturalistic glass branchlets joined in modular tree-canopy configurations across double-height hospitality lobbies.'
  },
  {
    id: 'el-sl-145',
    code: 'SL 145',
    name: 'Shade Layered Disc',
    material: 'Blown Glass & Anodized Metal Shell',
    finish: 'Dual Tone Charcoal & Radiant Warm Amber',
    imageUrl: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=400&auto=format&fit=crop',
    description: 'Layered shell element with interior illumination, producing dramatic light-and-shadow contrast.'
  },
  {
    id: 'el-sl-137',
    code: 'SL 137',
    name: 'Ice Bar Crystal Column',
    material: 'Solid Optical Crystal',
    finish: 'Diamond Beveled Edge Clear',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop',
    description: 'Solid beveled ice bar prisms mounted inside interwoven brass ribbon frameworks.'
  },
  {
    id: 'el-sl-142',
    code: 'SL 142',
    name: 'Nimbus Organic Cloud Stone',
    material: 'Translucent Slumped Glass',
    finish: 'Soft Opal & Matte Honey Glaze',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=400&auto=format&fit=crop',
    description: 'Floating pebble-shaped glass cloud that diffuses gentle indirect light across living and lounge ceilings.'
  },
  {
    id: 'el-sl-101',
    code: 'SL 101',
    name: 'Feather Golden Quill',
    material: 'Hand-Drawn Glass & 24K Gold Leaf',
    finish: 'Infused Gold Leaf / Clear Feather Tip',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
    description: 'Weightless quill-shaped glass feather that floats in vertical cascades with light and movement.'
  }
];

export const HOSPITALITY_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Brief & Concept',
    subtitle: 'Architectural Discovery',
    description: 'Collaborative analysis of architectural blueprints, ceiling heights, aesthetic design vision, and luxury hospitality spatial objectives.'
  },
  {
    stepNumber: 2,
    title: 'Technical Specification & Designing',
    subtitle: '3D Photometrics & Load Analysis',
    description: 'Generating detailed CAD DWG engineering drawings, structural load distribution, false-ceiling anchoring specifications, and DALI driver layouts.'
  },
  {
    stepNumber: 3,
    title: 'Prototyping / Sampling',
    subtitle: 'Physical Glass & Finish Swatches',
    description: 'Rapid dispatch of 1:1 scale mouth-blown glass element samples, metal finish coupons (champagne brass, rose gold, antique bronze), and light temperature mockups.'
  },
  {
    stepNumber: 4,
    title: 'Site Specs Inclusion',
    subtitle: 'Structural Alignment',
    description: 'On-site coordination with MEP consultants, structural engineers, and ceiling contractors to lock cable points and driver access panels.'
  },
  {
    stepNumber: 5,
    title: 'QC + Pre-Assembly',
    subtitle: '100% Studio Staging',
    description: 'Full trial pre-assembly at our manufacturing facility. Every electrical circuit, DALI dimming profile, and glass element undergoes 72-hour burn-in QC testing.'
  },
  {
    stepNumber: 6,
    title: 'Client Acceptance',
    subtitle: 'Live & Virtual Sign-Off',
    description: 'Formal inspection and client approval via high-definition video walkthrough or physical visit to the blowing centre before crating.'
  },
  {
    stepNumber: 7,
    title: 'Installations & Global Commissioning',
    subtitle: 'Turnkey Handover',
    description: 'Export-ready specialized crate packaging with on-ground technician supervision, laser alignment, and final scene programming.'
  }
];

export const HOSPITALITY_ADVANTAGES: HospitalityAdvantage[] = [
  {
    number: '01',
    title: 'Multi-Material Expertise',
    description: 'Mastery across glass, metal, ceramic, stone, wood, and textiles, enabling seamless integration of complex bespoke combinations under one roof.'
  },
  {
    number: '02',
    title: 'Accurate Timelines',
    description: 'Structured in-house project coordination and state-of-the-art furnace scheduling ensure dependable deliveries aligned with hotel launch deadlines.'
  },
  {
    number: '03',
    title: 'Sculptural Design Capability',
    description: 'Proven ability to translate abstract interior design visions into bold, statement-making architectural forms with monumental spatial presence.'
  },
  {
    number: '04',
    title: 'Engineering Depth',
    description: 'Rigorous structural engineering covering load distribution, anti-sway cable anchors, internal thermal management, and international electrical standards.'
  },
  {
    number: '05',
    title: 'Consistent Quality',
    description: 'Controlled production at 1,450°C glass furnaces delivers uniform finish, micron-level metal tolerances, and lifelong durability across thousands of pieces.'
  },
  {
    number: '06',
    title: 'Proven Hospitality Experience',
    description: 'Over 100+ executed installations in luxury hotels, branded residences, and diplomatic venues worldwide with full understanding of hospitality operations.'
  },
  {
    number: '07',
    title: 'Installation Readiness',
    description: 'Every fixture is engineered for swift on-site rigging with labeled connection blocks, color-coded harnesses, and comprehensive documentation.'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-minerva-towers',
    title: 'Minerva Tower Grand Starburst',
    slug: 'minerva-tower-mumbai',
    category: 'Large Installations',
    location: 'Mahalaxmi, Mumbai',
    country: 'India',
    client: 'Lokhandwala Infrastructure',
    architect: 'Hafeez Contractor',
    designer: 'Sutra Luminis Bespoke Team',
    year: 2024,
    description: 'A grand starburst lotus chandelier cascading with crystal light, creating a majestic focal point of luxury and architectural elegance in India’s tallest residential atrium.',
    challenge: 'Suspending 4.2 metric tons of glass in a 100-foot vertical drop with architectural wind shear dampening and 3D starburst petals.',
    solution: 'Developed a central radial champagne gold hub with 3D CAD elevation modeling, anchoring 3,500+ mouth-blown amber and optic crystal drops on high-tensile aircraft cables.',
    materials: ['Optic Fluted Crystal', 'Mouth-Blown Amber Drops', 'Champagne Brass Radial Frame', 'DALI Dimming Engines'],
    installationType: 'Grand Starburst Atrium Chandelier',
    installationHeightFeet: 100,
    diameterFeet: 45,
    elementCount: 3500,
    manufacturingTimeWeeks: 16,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-min-1',
        url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600&auto=format&fit=crop',
        alt: 'Minerva Tower Starburst Chandelier',
        type: 'hero',
        caption: 'Grand starburst lotus chandelier cascading through the double-height atrium'
      },
      {
        id: 'img-min-2',
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
        alt: 'CAD Elevation Drawing',
        type: 'drawing',
        caption: 'Plan, elevation and 3D rendering alignment model'
      }
    ],
    blueprintUrl: '/docs/minerva-tower-cad.pdf',
    createdAt: '2024-01-15'
  },
  {
    id: 'proj-monte-south-mumbai',
    title: 'Monte South Luminous Circular Ring',
    slug: 'monte-south-mumbai',
    category: 'Large Installations',
    location: 'Byculla, Mumbai',
    country: 'India',
    client: 'Marathon & Adani Realty',
    architect: 'Hafeez Contractor',
    designer: 'Sutra Studio Team',
    year: 2024,
    description: 'A luminous circular 360° light installation encircling the lobby water fountain with refined symmetry, creating a modern statement of elegance and calm grandeur.',
    challenge: 'Water feature humidity resistance, circular curvature precision with uniform 2700K diffusion around a 32-foot diameter circumference.',
    solution: 'Constructed an IP65 rated brushed champagne gold curved chassis holding 480 vertical fluted borosilicate glass tubes with internal anti-glare diffusers.',
    materials: ['Fluted Borosilicate Glass Tubes', 'Brushed Champagne Gold Anodized Aluminum', 'IP65 High-CRI LED Arrays'],
    installationType: 'Circular Lobby Fountain Installation',
    installationHeightFeet: 25,
    diameterFeet: 32,
    elementCount: 480,
    manufacturingTimeWeeks: 10,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-ms-1',
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
        alt: 'Monte South Circular Light Ring',
        type: 'hero',
        caption: 'Circular light ring floating above the central lobby water fountain'
      }
    ],
    createdAt: '2024-02-10'
  },
  {
    id: 'proj-360-west-worli',
    title: '360 West Ritz Residences — Worli',
    slug: '360-west-worli-mumbai',
    category: 'Hospitality',
    location: 'Worli, Mumbai',
    country: 'India',
    client: 'Oberoi Realty / Ritz-Carlton',
    architect: 'KPF (Kohn Pedersen Fox)',
    designer: 'Tony Chi & Associates',
    year: 2024,
    description: 'A striking suspended chandelier of cascading glass tubes, forming a sculptural grid with decorative laser-cut brass cornice that radiates contemporary luxury and refined brilliance.',
    challenge: 'Grade-A ultra-luxury acoustic vibration isolation and seamless integration with Italian marble wall panels.',
    solution: 'Manufactured handcrafted square grid of 250 borosilicate bubble glass tubes suspended from an intricately laser-cut antique brass cornice with hidden DALI drivers.',
    materials: ['Bubbled Borosilicate Glass Tubes', 'Laser-Cut Antique Brass Cornice', 'Solid State Drivers'],
    installationType: 'Cascading Lift Lobby Grid Chandelier',
    installationHeightFeet: 22,
    diameterFeet: 16,
    elementCount: 250,
    manufacturingTimeWeeks: 9,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-360-1',
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop',
        alt: '360 West Worli Chandelier',
        type: 'hero',
        caption: 'Square matrix chandelier with antique brass filigree frame in private lift lobby'
      }
    ],
    createdAt: '2024-03-05'
  },
  {
    id: 'proj-lodha-world-one',
    title: 'Lodha World One Towers — Penthouse Showflat',
    slug: 'lodha-world-one-towers-mumbai',
    category: 'Residential',
    location: 'Lower Parel, Mumbai',
    country: 'India',
    client: 'Lodha Group',
    architect: 'Pei Cobb Freed & Partners',
    designer: 'Armani/Casa Interior Design',
    year: 2024,
    description: 'A refined cluster of cascading glass globes of different sizes suspended at varying heights from a rectangular brass ceiling plate, creating a bundle of illuminated champagne bubbles.',
    challenge: 'Lightweight suspension over an imported 14-seater dining slab without creating glare points.',
    solution: 'Crafted 48 mouth-blown optic glass globes with internal micro-LED core diffusers that softly disperse warm 2400K illumination.',
    materials: ['Mouth-Blown Clear & Champagne Glass', 'Rectangular Brushed Brass Ceiling Canopy', 'Micro-LED Cables'],
    installationType: 'Cluster Bubble Dining Chandelier',
    installationHeightFeet: 14,
    diameterFeet: 12,
    elementCount: 48,
    manufacturingTimeWeeks: 6,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-wo-1',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
        alt: 'Lodha World One Dining Chandelier',
        type: 'hero',
        caption: 'Bubble glass globe chandelier suspended over luxury dining suite'
      }
    ],
    createdAt: '2024-03-22'
  },
  {
    id: 'proj-cm-house-delhi',
    title: 'CM House — Official Estate Delhi',
    slug: 'cm-house-delhi',
    category: 'Residential',
    location: 'Lutyens Delhi',
    country: 'India',
    client: 'Chief Minister Residence & Secretariat',
    architect: 'CPWD Heritage Architecture',
    designer: 'Sutra Luminis Bespoke Lab',
    year: 2024,
    description: '100% decorative lighting turnkey execution featuring 39 unique bespoke pieces including a monumental three-tier waterfall blown glass chandelier cascading across double-height reception.',
    challenge: 'Creating 39 distinct handcrafted fixtures (dining, corridors, suites, outdoor portico) all adhering to strict security and VIP longevity standards.',
    solution: 'Designed and manufactured 39 bespoke items: waterfall disc chandelier, antique brass torch wall sconces, pleated fabric floor lamps, and exterior bronze coach lanterns.',
    materials: ['Hand-Blown Three-Tier Glass Discs', 'Solid Cast Brass Armatures', 'Pleated Silk Shades', 'Weatherproof Bronze'],
    installationType: 'Complete Estate Turnkey Lighting (39 Custom Fixtures)',
    installationHeightFeet: 30,
    diameterFeet: 18,
    elementCount: 39,
    manufacturingTimeWeeks: 12,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-cm-1',
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
        alt: 'CM House Waterfall Glass Chandelier',
        type: 'hero',
        caption: 'Three-tier waterfall glass disc installation in double-height central hall'
      }
    ],
    createdAt: '2024-04-10'
  },
  {
    id: 'proj-inorbit-atrium',
    title: 'Inorbit Grand Retail Atrium',
    slug: 'inorbit-mall-atrium',
    category: 'Commercial',
    location: 'Cyberabad, Hyderabad',
    country: 'India',
    client: 'K Raheja Corp',
    architect: 'CallisonRTKL',
    designer: 'Sutra Luminis Engineering',
    year: 2024,
    description: 'A dynamic vertical constellation of emerald green and clear rock glass elements, suspended in rhythmic alignment across 5 commercial levels.',
    challenge: 'High public foot-traffic safety, seismic cable damping, and programmable kinetic sparkle.',
    solution: 'Suspended 1,200 raw-cast crystal rock and emerald chunks on aviation-grade tension cables with automated DMX color scene transitions.',
    materials: ['Emerald Raw Crystal Glass', 'Optic Clear Crystal Rocks', 'Titanium Swivel Cables'],
    installationType: 'Vertical Atrium Rock Constellation',
    installationHeightFeet: 75,
    diameterFeet: 25,
    elementCount: 1200,
    manufacturingTimeWeeks: 14,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-ino-1',
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
        alt: 'Inorbit Emerald Constellation',
        type: 'hero',
        caption: 'Emerald crystal rock cascade sweeping across multi-level mall atrium'
      }
    ],
    createdAt: '2024-05-02'
  },
  {
    id: 'proj-leela-palace-jaipur',
    title: 'The Leela Palace Heritage Ballrooms',
    slug: 'leela-palace-jaipur',
    category: 'Heritage & Religious',
    location: 'Jaipur, Rajasthan',
    country: 'India',
    client: 'The Leela Palaces, Hotels & Resorts',
    architect: 'Rajputana Heritage Studio',
    designer: 'Sutra Bespoke Lab',
    year: 2023,
    description: 'Grand crystal chandeliers, gilded ceiling medallions, etched glass wall sconces, and royal banquet hall candelabras reviving royal Rajputana grandeur.',
    challenge: 'Authentic 19th-century royal heritage aesthetic coupled with modern 0-10V low-heat LED lighting.',
    solution: 'Cast heavy brass arms with hand-cut Belgian crystal prisms and custom gold-leaf finished ceiling rosettes.',
    materials: ['Belgian Lead Crystal', 'Cast Heavy Brass', '24K Gold Leaf Details', 'Silk Pleated Shades'],
    installationType: 'Royal Heritage Palace Chandelier Suite',
    installationHeightFeet: 20,
    diameterFeet: 22,
    elementCount: 650,
    manufacturingTimeWeeks: 14,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-lp-1',
        url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
        alt: 'The Leela Palace Jaipur Lighting',
        type: 'hero',
        caption: 'Heritage crystal chandeliers under gold filigree ceiling in the grand ballroom'
      }
    ],
    createdAt: '2023-10-14'
  },
  {
    id: 'proj-clarks-exotica',
    title: 'Clarks Exotica Convention Atrium',
    slug: 'clarks-exotica-convention-resort',
    category: 'Hospitality',
    location: 'Bengaluru',
    country: 'India',
    client: 'Clarks Group of Hotels',
    architect: 'Studio Bangalore',
    designer: 'Sutra Luminis Hospitality',
    year: 2023,
    description: '76 running feet of undulating brushed brass frames with vertical clear borosilicate glass rods and cascading waterfall rings in the main lobby.',
    challenge: 'Modifying fin length from 48 running feet to 76 running feet while maintaining uniform structural balance on marine hardboard ceiling support.',
    solution: 'Designed modular interlocking 25mm marine-board ceiling anchoring plates with vertical glass rod banks and secondary center rings.',
    materials: ['Borosilicate Glass Rods', 'Brushed Metallic Brass Frame', '25mm Marine Board Support'],
    installationType: '76-Foot Undulating Ribbon Chandelier',
    installationHeightFeet: 28,
    diameterFeet: 76,
    elementCount: 1850,
    manufacturingTimeWeeks: 12,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-ce-1',
        url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600&auto=format&fit=crop',
        alt: 'Clarks Exotica Ribbon Chandelier',
        type: 'hero',
        caption: '76-foot undulating glass rod ribbon chandelier over the main convention lobby'
      }
    ],
    createdAt: '2023-11-20'
  },
  {
    id: 'proj-wagh-bakri-estate',
    title: 'Wagh Bakri Heritage Residence',
    slug: 'wagh-bakri-residence',
    category: 'Residential',
    location: 'Ahmedabad',
    country: 'India',
    client: 'Wagh Bakri Group Promoters',
    architect: 'Hiren Patel Architects',
    designer: 'Sutra Bespoke Lab',
    year: 2023,
    description: 'A complete residential lighting collection: mesh cylinder pendants, intersecting brass ring wall sculptures, and geometric cable grids across 18,000 sq ft.',
    challenge: 'Harmonizing contemporary brass geometric fixtures with traditional Gujarati courtyard architecture.',
    solution: 'Created custom mesh-molded brass cylinder pendants and adjustable linear LED hanging sculptures.',
    materials: ['Mesh Molded Brass', 'Satin Champagne Rods', 'Mouth-Blown Opal Spheres'],
    installationType: 'Complete Villa Interior Lighting Suite',
    installationHeightFeet: 18,
    diameterFeet: 15,
    elementCount: 45,
    manufacturingTimeWeeks: 8,
    featured: false,
    status: 'Completed',
    images: [
      {
        id: 'img-wb-1',
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
        alt: 'Wagh Bakri Residence Lighting',
        type: 'hero',
        caption: 'Suspended mesh cylinder chandeliers in double-height family lounge'
      }
    ],
    createdAt: '2023-12-05'
  },
  {
    id: 'proj-amaryllis-unity-group',
    title: 'The Amaryllis Flagship Atrium (Unity Group)',
    slug: 'the-amaryllis-unity-group-delhi',
    category: 'Builder',
    location: 'Karol Bagh, New Delhi',
    country: 'India',
    client: 'Unity Group',
    architect: 'Benoy Architects (UK)',
    designer: 'Sutra Luminis Commercial',
    year: 2024,
    description: 'Monumental installations including Golden Glow Balls and the "Never Ending Chandelier" featuring laser-cut textured glass feathers and customized DALI dimming in Khandala/Delhi projects.',
    challenge: 'Complex laser-cut curved glass feathers with internal light channels and zero shadow banding.',
    solution: 'Engineered custom DALI dimming LED mounting with precision edge glow illuminating each frosted glass feather from within.',
    materials: ['Laser-Cut Textured Glass', 'High-Precision Brass Core', 'DALI Dimming LEDs'],
    installationType: 'Never-Ending Feather & Glow Ball Atrium Suite',
    installationHeightFeet: 40,
    diameterFeet: 26,
    elementCount: 1600,
    manufacturingTimeWeeks: 14,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-ama-1',
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
        alt: 'The Amaryllis Never Ending Chandelier',
        type: 'hero',
        caption: 'Laser-cut frosted glass feather chandelier with inner precision LED glow'
      }
    ],
    createdAt: '2024-05-18'
  },
  {
    id: 'proj-lodha-the-park',
    title: 'Lodha The Park — Banquet Grand Chandeliers',
    slug: 'lodha-the-park-banquet-mumbai',
    category: 'Builder',
    location: 'Worli, Mumbai',
    country: 'India',
    client: 'Lodha Group',
    architect: 'WOHA Architects',
    designer: 'Italian Design Consultants & Sutra Studio',
    year: 2024,
    description: '10 custom chandeliers designed in consultation with Italian designers, completely fabricated in-house for the signature luxury banquet hall.',
    challenge: 'Creating 10 high-impact floating radial disc formations with ultra-low clearance and glare-free warm dispersion.',
    solution: 'Manufactured 10 sets of concentric rippled brass & glass disc clusters with concealed perimeter LED halos.',
    materials: ['Rippled Brass Discs', 'Fluted Crystal Insets', 'Warm 2700K Dimmable Drivers'],
    installationType: '10-Chandelier Grand Banquet Suite',
    installationHeightFeet: 16,
    diameterFeet: 20,
    elementCount: 10,
    manufacturingTimeWeeks: 10,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-lp-park',
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
        alt: 'Lodha The Park Banquet Chandelier',
        type: 'hero',
        caption: 'Italian-designed floating disc chandeliers across the grand ballroom'
      }
    ],
    createdAt: '2024-06-12'
  }
];

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: 'col-chandeliers',
    name: 'Monumental & Bespoke Chandeliers',
    slug: 'bespoke-chandeliers',
    description: 'Multi-tier crystal drums, concentric fluted glass rings, and starburst chandeliers engineered for grand residential and hospitality spaces.',
    category: 'Chandeliers',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000&auto=format&fit=crop',
    productCount: 28
  },
  {
    id: 'col-ceiling-to-floor',
    name: 'Ceiling-to-Floor Suspended Lights',
    slug: 'ceiling-to-floor-lighting',
    description: 'Vertical tension-mounted lighting columns that extend from floor to ceiling, providing dramatic visual impact and architectural space division.',
    category: 'Ceiling-to-Floor',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    productCount: 16
  },
  {
    id: 'col-wall-installations',
    name: 'Wall Sculptures & Sconces',
    slug: 'wall-installations-sconces',
    description: 'Wall-mounted light art, agate glass pebbles, molten glass wings, and brass torches combining functional illumination with tactile gallery aesthetics.',
    category: 'Wall Lighting & Art',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop',
    productCount: 24
  },
  {
    id: 'col-floor-lamps',
    name: 'Sculptural Floor Lamps',
    slug: 'sculptural-floor-lamps',
    description: 'Freestanding architectural floor lamps including cantilever arcs, organic bronze tripods, and blown glass statement lanterns.',
    category: 'Floor Lamps',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    productCount: 19
  },
  {
    id: 'col-table-lamps',
    name: 'Hand-Blown Table Lamps',
    slug: 'hand-blown-table-lamps',
    description: 'Portable luxury table lights featuring fluted crystal drums, gradient glass vessels, and diamond-faceted gem bases.',
    category: 'Table Lamps',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',
    productCount: 22
  },
  {
    id: 'col-pendant-lights',
    name: 'Artisan Glass Pendants',
    slug: 'artisan-glass-pendants',
    description: 'Single and clustered suspended pendants in ribbed amber, cobalt, and smoky finishes for islands, dining, and bedside accents.',
    category: 'Pendants',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    productCount: 34
  },
  {
    id: 'col-vases-decor',
    name: 'Art Glass Vases & Candle Holders',
    slug: 'vases-candle-holders',
    description: 'Mouth-blown faceted vases and geometric crystal candle bowls that blend artistic function with tactile luxury.',
    category: 'Décor & Accessories',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    productCount: 18
  },
  {
    id: 'col-art-furniture',
    name: 'Cast Glass Art Furniture',
    slug: 'cast-glass-art-furniture',
    description: 'Monumental cast glass coffee tables and jewel-toned translucent side pillars sculpted directly from furnace pours.',
    category: 'Furniture',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    productCount: 12
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-sl-328',
    collectionId: 'col-chandeliers',
    collectionName: 'Monumental & Bespoke Chandeliers',
    name: 'SL 328 Frozen Wave Ring',
    slug: 'sl-328-frozen-wave',
    description: 'A sculptural ring of crystalline forms in fluid motion, suspended like a frozen wave to bring artistic drama and luminous elegance to the space.',
    material: 'Mouth-Blown Crystalline Glass & Brass Chassis',
    finish: 'Clear Frozen Crystal & Brushed Champagne Brass',
    dimensions: 'Custom diameter from 2.5m to 8.0m',
    lightingType: '2700K DALI Dimmable LED',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-sl-312',
    collectionId: 'col-chandeliers',
    collectionName: 'Monumental & Bespoke Chandeliers',
    name: 'SL 312 Bubble Sphere Cascade',
    slug: 'sl-312-bubble-sphere',
    description: 'An artistic cascade of luminous glass spheres, floating in a fluid composition that brings movement, warmth, and sculptural drama.',
    material: 'Mouth-Blown Soda-Lime Bubble Glass',
    finish: 'Amber Honey & Gradient Smoked Grey',
    dimensions: '350cm Drop x 220cm Width',
    lightingType: 'Circadian Tunable White (2200K - 3500K)',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-sl-120',
    collectionId: 'col-chandeliers',
    collectionName: 'Monumental & Bespoke Chandeliers',
    name: 'SL 120 Crystal Bloom Canopy',
    slug: 'sl-120-crystal-bloom',
    description: 'A shimmering field of elongated crystal blooms cascading overhead to envelop the space in refined brilliance and immersive luxury.',
    material: 'Slumped Optical Lead Crystal',
    finish: 'Acid-Etched Satin with Polished Core',
    dimensions: 'Custom Field from 4m x 2m to 20m x 8m',
    lightingType: 'Micro-Downlight Spot Integration',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-sl-c2f-01',
    collectionId: 'col-ceiling-to-floor',
    collectionName: 'Ceiling-to-Floor Suspended Lights',
    name: 'SL Ceiling-to-Floor Tension Column',
    slug: 'sl-ceiling-to-floor-tension-column',
    description: 'A vertical architectural light column extending seamlessly from floor to ceiling with floating glass discs and luminous frosted stems.',
    material: 'Fluted Borosilicate Glass & Tension Steel Cable',
    finish: 'Brushed Brass & Acid Frosted Tube',
    dimensions: 'Ceiling heights from 3.0m to 9.0m',
    lightingType: 'Linear 360° Diffused LED',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-sl-wall-agate',
    collectionId: 'col-wall-installations',
    collectionName: 'Wall Sculptures & Sconces',
    name: 'SL Agate Blue Pebble Wall Constellation',
    slug: 'sl-agate-blue-pebble-wall',
    description: 'Organic cast-glass pebble sconces in deep cobalt and ocean blue tones that glow with soft indirect perimeter backlight.',
    material: 'Cast Solid Glass & Concealed Brass Mounting',
    finish: 'Cobalt Blue & Smoked Obsidian Glaze',
    dimensions: 'Pebble sizes 35cm, 50cm, 75cm width',
    lightingType: '2400K Ambient Halo Backlight',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-sl-table-drum',
    collectionId: 'col-table-lamps',
    collectionName: 'Hand-Blown Table Lamps',
    name: 'SL Ribbed Drum Crystal Table Lamp',
    slug: 'sl-ribbed-drum-table-lamp',
    description: 'Portable luxury luminaire featuring a cylindrical ribbed borosilicate glass crown resting on a solid brushed brass pedestal.',
    material: 'Borosilicate Ribbed Glass & Solid Turned Brass',
    finish: 'Polished Champagne Brass',
    dimensions: '35cm Height x 22cm Diameter',
    lightingType: 'Touch-Dimmable Warm 2700K',
    customizable: false,
    featured: true,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-sl-furn-coffee',
    collectionId: 'col-art-furniture',
    collectionName: 'Cast Glass Art Furniture',
    name: 'SL Monumental Cast Glass Cocktail Table',
    slug: 'sl-cast-glass-cocktail-table',
    description: 'Hand-poured 60mm thick solid cast glass tabletop on sculptural glass pillar columns, capturing frozen light and fluid texture.',
    material: 'Furnace-Poured Solid Cast Glass',
    finish: 'Sea Foam Clear & Amber Honey Pours',
    dimensions: '120cm Diameter x 38cm Height',
    lightingType: 'Sub-surface Floor Edge Lighting Optional',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'
  }
];

export const INITIAL_MATERIALS: Material[] = [
  {
    id: 'mat-glass-furnace',
    name: '1,450°C Furnace Mouth-Blown Glass',
    category: 'Glass',
    description: 'Prepared from Sutra’s proprietary glass-sand mixture melting at 1,450°C (2,642°F). Blown by master glassmakers with 20+ years of generational skill, utilizing a bespoke underlay color process for unique gradients and 100% remelting sustainability.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    properties: ['Proprietary 1,450°C Sand Formula', 'Underlay Gradient Color Process', '100% Re-melting Circularity', 'Optical Transparency >98%'],
    finishes: ['Crystal Clear', 'Honey Amber', 'Smoked Obsidian', 'Cobalt Blue', 'Ruby & 24K Gold Leaf Infusion'],
    lightTransmission: 'High (88% - 96%)',
    manufacturingProcess: 'Proprietary Sand Melting at 1,450°C → Free-Hand Blowpipe Shaping → Controlled 24-Hr Annealing Lehrs → Diamond Cold Cut',
    featuredProject: 'Minerva Tower & CM House Delhi'
  },
  {
    id: 'mat-brass-metal',
    name: 'Heavy Metal Casting & Architectural Brass',
    category: 'Metal',
    description: 'In-house heavy metal casting and CNC precision fabrication. Hand-patinated architectural brass and aviation titanium engineered for structural integrity, zero sag, and international electrical standards.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    properties: ['High Load-Bearing Capacity', 'Anti-Corrosion Wax Seal', 'Micron Precision CNC Threading', 'Seismic Anchor Ready'],
    finishes: ['Brushed Champagne Gold', 'Antique Patinated Bronze', 'Polished Rose Gold', 'Anodized Matte Charcoal'],
    lightTransmission: 'Opaque / Specular Reflection',
    manufacturingProcess: 'Sand & Lost-Wax Casting → CNC Turning → Ultrasonic Cleaning → Multi-Stage Electroplating & Hand Lacquer',
    featuredProject: '360 West Worli & Clarks Exotica'
  },
  {
    id: 'mat-optical-crystal',
    name: 'Pure Optical & 30% Lead Crystal',
    category: 'Crystal',
    description: 'Crucible melted crystal with ultra-high refractive index. Hand-cut and diamond beveled to break light into spectral prisms and vivid architectural brilliance.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    properties: ['Maximal Refractive Index (n=1.62)', 'Zero Internal Inclusions', 'Diamond Faceted Edges'],
    finishes: ['Diamond Beveled Edge', 'Laser Internal Micro-Engraved', 'Acid Polished Satin'],
    lightTransmission: 'Ultra High (99.2%)',
    manufacturingProcess: 'Electric Crucible Melting → Diamond Wheel Cutting → Robotic Polishing → Quality Inspection',
    featuredProject: 'The Leela Palace Jaipur & Inorbit Atrium'
  },
  {
    id: 'mat-cast-furniture-glass',
    name: 'Monumental Slumped & Cast Solid Glass',
    category: 'Glass',
    description: 'Heavy architectural slumped panels and 60mm solid cast furniture blocks created through high-temperature kilns, providing structural strength with fluid, organic surfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    properties: ['High Compressive Strength', 'Fluid Water-Ripple Texture', 'Thermal Shock Tested'],
    finishes: ['Water Ripple Slumped', 'Frosted Ice Texture', 'Seafoam Tinted'],
    lightTransmission: 'Medium to High (75% - 90%)',
    manufacturingProcess: 'Refractory Mold Casting → 850°C Slumping → Slow 72-Hour Annealing Cycle',
    featuredProject: 'Unity Group The Amaryllis & Cast Glass Art Furniture'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-01',
    name: 'Alexandra Vance',
    company: 'Vance & Partners Interior Architecture',
    email: 'alexandra@vancedesign.co.uk',
    phone: '+44 20 7946 0912',
    country: 'United Kingdom',
    projectType: 'Hospitality',
    projectLocation: 'Mayfair, London',
    budgetRange: '$150,000 - $300,000',
    timeline: '3-6 Months',
    message: 'We are designing the grand entrance foyer for a new boutique hotel in Mayfair with a 28ft ceiling. Looking for a sculptural mouth-blown glass cascade with warm 2700K LED integration.',
    attachmentName: 'Mayfair_Lobby_CAD_Concept.pdf',
    source: 'Website - Start a Project Wizard',
    status: 'NEW',
    priority: 'High',
    aiSummary: 'High-priority luxury hotel foyer project in London (28ft drop). Wants mouth-blown glass cascade, budget $150k-$300k, 3-6 month timeline.',
    createdAt: '2026-08-10'
  },
  {
    id: 'lead-02',
    name: 'Tariq Al-Mansoor',
    company: 'Al-Mansoor Luxury Estates',
    email: 'tariq@almansoor.ae',
    phone: '+971 4 321 8890',
    country: 'United Arab Emirates',
    projectType: 'Residential',
    projectLocation: 'Palm Jumeirah, Dubai',
    budgetRange: '$300,000+',
    timeline: '1-3 Months',
    message: 'Requesting a custom 18ft diameter crystal and champagne gold chandelier for a private beachfront villa in Palm Jumeirah.',
    source: 'Architects Portal',
    status: 'QUALIFIED',
    priority: 'High',
    aiSummary: 'Ultra-high budget private villa in Dubai ($300k+). Needs custom 18ft crystal chandelier in 1-3 months.',
    createdAt: '2026-08-08'
  }
];

export const INITIAL_ARCHITECT_RESOURCES: ArchitectResource[] = [
  {
    id: 'res-01',
    title: 'SUTRA Hotel Portfolio — Hospitality Solutions Guide',
    category: 'Catalogues',
    fileFormat: 'PDF',
    fileSize: '55 Pages / 38 MB',
    description: 'Comprehensive hospitality portfolio featuring 100+ installations, multi-material capabilities, and 7-step proven turnkey workflow.',
    downloadUrl: '#'
  },
  {
    id: 'res-02',
    title: 'SUTRA Residential Catalogue 2023 / 2024',
    category: 'Catalogues',
    fileFormat: 'PDF',
    fileSize: '66 Pages / 44 MB',
    description: 'Complete bespoke catalogue covering chandeliers, ceiling-to-floor tension lights, wall sconces, floor/table lamps, and cast glass art furniture.',
    downloadUrl: '#'
  },
  {
    id: 'res-03',
    title: 'SUTRA Large Lighting Installations — 400+ Curated Reference Designs',
    category: 'Catalogues',
    fileFormat: 'PDF',
    fileSize: '47 Pages / 52 MB',
    description: 'Curated technical reference catalog with 8 core structural formations and 300+ custom glass element codes (SL series).',
    downloadUrl: '#'
  },
  {
    id: 'res-04',
    title: 'BIM Revit Family Library — SL Series Modular Formations',
    category: 'BIM / Revit',
    fileFormat: 'RFA / RVT',
    fileSize: '142 MB',
    description: 'Fully parametric Revit BIM families with electrical connector parameters and structural weight load definitions for MEP coordination.',
    downloadUrl: '#'
  },
  {
    id: 'res-05',
    title: 'Autodesk CAD DWG Block Collection — False Ceiling Anchors & Drivers',
    category: 'CAD DWG',
    fileFormat: 'DWG',
    fileSize: '36 MB',
    description: 'Architectural line drawings of suspension mounts, canopy details, 25mm marine-board anchor specs, and DALI driver layouts.',
    downloadUrl: '#'
  },
  {
    id: 'res-06',
    title: 'IES Photometric Data Packages — 2200K to 3500K Tunable LED Engines',
    category: 'IES Photometric',
    fileFormat: 'IES / LDT',
    fileSize: '18 MB',
    description: 'High-precision ray-traced light distribution files for Dialux and Relux lighting simulations.',
    downloadUrl: '#'
  }
];

export const INITIAL_JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    title: 'The 1,450°C Cycle: Generational Glass Craftsmanship at SUN LUMINOUS',
    slug: 'generational-glass-craftsmanship-at-sun-luminous',
    category: 'Artisan Engineering',
    author: 'Ms. Ananya Sharma & Master Glassmakers',
    publishedDate: 'August 02, 2026',
    readTime: '6 min read',
    excerpt: 'Inside India’s largest bespoke glass blowing ecosystem: melting pure silica at 1,450°C, hand-pulling gradient crystals, and 100% circular glass recycling.',
    content: `To become a premier glass-blower takes years of practice and experience, with knowledge passed from masters to apprentices. These craftsmen become irreplaceable and are the foundation stone of SUN LUMINOUS artistry...`,
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'art-02',
    title: 'Engineering for Scale: 100+ Landmark Hospitality Installations',
    slug: 'engineering-for-scale-hospitality-installations',
    category: 'Hospitality Design',
    author: 'SUN LUMINOUS Engineering Atelier',
    publishedDate: 'July 18, 2026',
    readTime: '8 min read',
    excerpt: 'How SUN LUMINOUS collaborates with world-renowned architects like Foster + Partners and Kerry Hill to engineer monument-scale atriums with precision safety and DALI controls.',
    content: `From the 100ft vertical drop at Minerva Tower to the delicate water pavilions of luxury resorts, large-scale installations demand structural load distribution, anti-sway titanium cables, and zero-compromise optical fidelity...`,
    coverImage: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop'
  }
];

export const mockProjects = INITIAL_PROJECTS;
export const mockCollections = INITIAL_COLLECTIONS;
export const mockProducts = INITIAL_PRODUCTS;
export const mockMaterials = INITIAL_MATERIALS;
export const mockLeads = INITIAL_LEADS;
export const mockResources = INITIAL_ARCHITECT_RESOURCES;
export const mockJournalArticles = INITIAL_JOURNAL_ARTICLES;
