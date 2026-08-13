import { Project, Collection, Product, Material, Lead, ArchitectResource, JournalArticle } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-minerva-towers',
    title: 'Minerva Towers Grand Atrium',
    slug: 'minerva-towers-mumbai',
    category: 'Large Installations',
    location: 'Mumbai',
    country: 'India',
    client: 'Lokhandwala Infrastructure',
    architect: 'Hafeez Contractor',
    designer: 'Sutra Luminis Bespoke Team',
    year: 2024,
    description: 'A colossal, 100-foot vertical lighting installation suspended in the central atrium of Minerva Towers. Comprising over 3,500 individual mouth-blown amber and clear glass elements engineered to withstand architectural wind shear and harmonic vibrations.',
    challenge: 'Engineering a structural load-bearing frame capable of suspending 4.2 metric tons of glass across a 100-foot vertical drop while ensuring optical uniformity and effortless maintenance access.',
    solution: 'Engineered a modular high-tensile titanium cable matrix with internal fiber-optic power runs and custom dampening joints. Each of the 3,500+ mouth-blown glass droplets was individually balanced and tuned to 2700K warm ambient illumination.',
    materials: ['Mouth-blown Amber Glass', 'Clear Borosilicate Crystal', 'Aircraft-grade Titanium', 'Champagne Brass Fittings'],
    installationType: 'Monumental Atrium Chandelier',
    installationHeightFeet: 100,
    diameterFeet: 50,
    elementCount: 3500,
    manufacturingTimeWeeks: 18,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-1',
        url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600&auto=format&fit=crop',
        alt: 'Minerva Towers Grand Atrium Lighting Sculpture',
        type: 'hero',
        caption: 'The 100ft monumental light sculpture viewed from the lower lobby'
      },
      {
        id: 'img-2',
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
        alt: 'Mouth-blown glass detail',
        type: 'detail',
        caption: 'Individual hand-blown amber glass droplets in 1,450°C furnace glass finish'
      },
      {
        id: 'img-3',
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
        alt: 'Atmospheric light dispersion',
        type: 'gallery',
        caption: 'Reflection patterns across marble atrium floors'
      }
    ],
    blueprintUrl: '/docs/minerva-towers-blueprint.pdf',
    createdAt: '2024-01-15'
  },
  {
    id: 'proj-oberoi-bali',
    title: 'The Oberoi Water Lily Pavilion',
    slug: 'oberoi-bali-water-lily',
    category: 'Hospitality',
    location: 'Seminyak, Bali',
    country: 'Indonesia',
    client: 'The Oberoi Group',
    architect: 'Kerry Hill Architects',
    designer: 'Studio Luminous Asia',
    year: 2024,
    description: 'An organic sculptural installation floating over the reflective lotus pool at The Oberoi Bali. Inspired by ripples on tropical waters, featuring hand-sculpted iridescent glass disks and bronze vines.',
    challenge: 'High-salinity coastal humidity and outdoor wind resistance required marine-grade alloys and weather-impermeable glass coatings.',
    solution: 'Utilized hand-forged marine bronze treated with anti-corrosive wax patinas, combined with sealed IP67 LED optics enclosed in thick, hand-carved textured glass.',
    materials: ['Textured Hand-Carved Glass', 'Marine-Grade Bronze', 'Teak Wood Accents', 'Custom Sealed Optics'],
    installationType: 'Outdoor Floating Pavilion Sculpture',
    installationHeightFeet: 24,
    diameterFeet: 30,
    elementCount: 820,
    manufacturingTimeWeeks: 12,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-ob-1',
        url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
        alt: 'The Oberoi Bali Lighting Pavilion',
        type: 'hero',
        caption: 'Floating glass sculpture lit against Balinese twilight'
      },
      {
        id: 'img-ob-2',
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
        alt: 'Glass detail',
        type: 'detail',
        caption: 'Hand-sculpted organic glass disk'
      }
    ],
    createdAt: '2024-03-20'
  },
  {
    id: 'proj-grand-plaza-dubai',
    title: 'Grand Plaza Imperial Cascade',
    slug: 'grand-plaza-dubai',
    category: 'Commercial',
    location: 'DIFC, Dubai',
    country: 'UAE',
    client: 'Emaar Properties',
    architect: 'Gensler Dubai',
    designer: 'Sutra Luminis Middle East',
    year: 2023,
    description: 'A 60-foot spiral chandelier composed of 1,800 optical crystal prisms and gold-anodized aluminum rings that dynamic-shifts color temperature throughout the day.',
    challenge: 'Creating an automated circadian lighting rhythm that shifts from energetic 4000K daylight to intimate 2200K evening gold.',
    solution: 'Designed custom DALI-2 controlled LED engine inside laser-etched champagne gold rings.',
    materials: ['Optical Crystal Prisms', 'Anodized Champagne Gold Aluminum', 'DALI Dimming Drivers'],
    installationType: 'Spiral Atrium Chandelier',
    installationHeightFeet: 60,
    diameterFeet: 22,
    elementCount: 1800,
    manufacturingTimeWeeks: 14,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-gp-1',
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
        alt: 'Grand Plaza Dubai Chandelier',
        type: 'hero',
        caption: 'Spiral crystal cascade over the DIFC luxury lobby'
      }
    ],
    createdAt: '2023-11-10'
  },
  {
    id: 'proj-st-regis-london',
    title: 'St. Regis Mayfair Presidential Suite',
    slug: 'st-regis-mayfair-london',
    category: 'Residential',
    location: 'London',
    country: 'United Kingdom',
    client: 'Marriott International Luxury',
    architect: 'Fosters & Partners',
    designer: 'Gilles & Boissier',
    year: 2024,
    description: 'Bespoke hand-blown smoked crystal amber pendants and wall light sculptures framing the master dining salon in Mayfair.',
    challenge: 'Ultra-precise dimming control and zero acoustic hum in a heritage Grade II listed interior.',
    solution: 'Hand-blown 30% lead crystal shades with silent solid-state drivers and hand-polished brushed nickel armatures.',
    materials: ['Smoked Lead Crystal', 'Brushed Nickel', 'Silk Braided Cord'],
    installationType: 'Custom Dining Room & Wall Art Installation',
    installationHeightFeet: 12,
    diameterFeet: 14,
    elementCount: 180,
    manufacturingTimeWeeks: 8,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-sr-1',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
        alt: 'St Regis London Lighting',
        type: 'hero',
        caption: 'Smoked crystal pendants over handcrafted marble dining table'
      }
    ],
    createdAt: '2024-02-01'
  },
  {
    id: 'proj-royal-opera-vienna',
    title: 'Royal Opera Symphony Light Sculpture',
    slug: 'royal-opera-vienna',
    category: 'Sculptural Art',
    location: 'Vienna',
    country: 'Austria',
    client: 'Vienna Philharmonic Society',
    architect: 'Studio Linz',
    designer: 'Sutra Bespoke Lab',
    year: 2023,
    description: 'A 40-foot ribbon of acoustic-dampening glass waves suspended in the grand grand foyer, reacting to live musical vibrations.',
    challenge: 'Integrating acoustic absorption material into hand-crafted glass forms without muddying the visual clarity.',
    solution: 'Developed porous acoustic crystal composite glass panels with micro-performents that absorb reverberation.',
    materials: ['Acoustic Micro-Porous Glass', 'Polished Steel Ribbons', 'RGBW Fiber Optics'],
    installationType: 'Acoustic Light Sculpture',
    installationHeightFeet: 40,
    diameterFeet: 35,
    elementCount: 1200,
    manufacturingTimeWeeks: 16,
    featured: false,
    status: 'Completed',
    images: [
      {
        id: 'img-ro-1',
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
        alt: 'Vienna Opera Sculpture',
        type: 'hero',
        caption: 'Symphony light sculpture flowing through the historic grand stairs'
      }
    ],
    createdAt: '2023-09-18'
  },
  {
    id: 'proj-amber-fort-jaipur',
    title: 'The Royal Heritage Palace',
    slug: 'amber-fort-palace-jaipur',
    category: 'Heritage & Religious',
    location: 'Jaipur',
    country: 'India',
    client: 'Royal Heritage Trust',
    architect: 'Abha Narain Lambah Associates',
    designer: 'Sutra Heritage Crafts',
    year: 2024,
    description: 'A grand court chandelier combining traditional Thikri mirror work with 1,450°C mouth-blown ruby glass cups and hand-filigree brass.',
    challenge: 'Preserving 17th-century architectural integrity while upgrading to warm, energy-efficient modern LED illumination.',
    solution: 'Crafted hidden LED cores inside handcrafted brass candle cups, delivering 2400K candlelight atmosphere.',
    materials: ['Mouth-blown Ruby Glass', 'Hand-hammered Filigree Brass', 'Thikri Mirror Glass'],
    installationType: 'Heritage Palace Chandelier',
    installationHeightFeet: 32,
    diameterFeet: 18,
    elementCount: 650,
    manufacturingTimeWeeks: 10,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-af-1',
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
        alt: 'Royal Heritage Palace Lighting',
        type: 'hero',
        caption: 'Handcrafted ruby glass chandelier illuminating royal courtyards'
      }
    ],
    createdAt: '2024-04-12'
  },
  {
    id: 'proj-pinnacle-atrium-builder',
    title: 'The Pinnacle Tower Grand Atrium',
    slug: 'pinnacle-tower-grand-atrium',
    category: 'Builder',
    location: 'Worli, Mumbai',
    country: 'India',
    client: 'Signature High-Rise Developers',
    architect: 'Foster + Partners',
    designer: 'Sutra Commercial Engineering',
    year: 2024,
    description: 'A monumental 80-foot kinetic illumination matrix designed for a premier luxury residential tower lobby. Composed of 2,400 gold-accented mouth-blown crystal drops suspended across 4 double-height floors.',
    challenge: 'High foot-traffic seismic stability requirements with automated circadian shifting to support real-estate grand reveal experiences.',
    solution: 'Designed aircraft-grade anti-sway cable anchors and programmed DMX/DALI color-temperature scenes ranging from crisp morning daylight to warm twilight gold.',
    materials: ['Optic Fluted Crystal', 'Aviation Titanium Suspension', 'Brushed Champagne Gold Fixtures'],
    installationType: 'Builder Flagship Lobby Cascade',
    installationHeightFeet: 80,
    diameterFeet: 28,
    elementCount: 2400,
    manufacturingTimeWeeks: 14,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-pin-1',
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
        alt: 'The Pinnacle Tower Grand Atrium',
        type: 'hero',
        caption: '80-foot crystal drop installation viewed from the residential concierge'
      }
    ],
    createdAt: '2024-05-18'
  },
  {
    id: 'proj-bel-air-residence',
    title: 'Bel-Air Promontory Estate',
    slug: 'bel-air-promontory-estate',
    category: 'Residential',
    location: 'Los Angeles',
    country: 'United States',
    client: 'Private Collector',
    architect: 'Olson Kundig Architects',
    designer: 'Studio Liaigre',
    year: 2024,
    description: 'A suspended organic glass cloud of 420 hand-blown Venetian crystal flutes illuminating a cantilevered double-height living pavilion overlooking the Pacific ocean.',
    challenge: 'Seamless integration with minimalist ceiling channels and glare-free soft illumination over ultra-high-definition art walls.',
    solution: 'Engineered custom zero-shadow optic lenses with hidden micro-LEDs within matte black patinated bronze stems.',
    materials: ['Venetian Clear & Amber Glass', 'Matte Black Patinated Bronze', 'Micro-diffused Optics'],
    installationType: 'Private Estate Light Cloud',
    installationHeightFeet: 20,
    diameterFeet: 25,
    elementCount: 420,
    manufacturingTimeWeeks: 9,
    featured: true,
    status: 'Completed',
    images: [
      {
        id: 'img-ba-1',
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
        alt: 'Bel-Air Promontory Living Pavilion',
        type: 'hero',
        caption: 'Custom glass cloud over minimalist living salon'
      }
    ],
    createdAt: '2024-06-02'
  }
];

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: 'col-aurora',
    name: 'Aurora Wave Series',
    slug: 'aurora-wave',
    description: 'Free-form sculptural ribbons of mouth-blown textured glass that fluidly flow across large architectural spaces.',
    category: 'Sculptural Installations',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000&auto=format&fit=crop',
    productCount: 14
  },
  {
    id: 'col-celestia',
    name: 'Celestia Chandelier Clusters',
    slug: 'celestia-chandeliers',
    description: 'Suspended clusters of optical crystal spheres and teardrops engineered for grand hotel lobbies and double-height staircases.',
    category: 'Chandeliers',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    productCount: 22
  },
  {
    id: 'col-fragmenta',
    name: 'Fragmenta Wall Sculptures',
    slug: 'fragmenta-wall-art',
    description: 'Bespoke illuminated wall art combining hand-sculpted ceramic, cast resin, and gold leaf backlighting.',
    category: 'Wall Lighting & Art',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop',
    productCount: 18
  },
  {
    id: 'col-solstice',
    name: 'Solstice Architectural Pillars',
    slug: 'solstice-pillars',
    description: 'Monumental vertical floor-to-ceiling lighting columns crafted from fluted borosilicate glass and brushed titanium.',
    category: 'Floor & Column Lighting',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    productCount: 9
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-aurora-01',
    collectionId: 'col-aurora',
    collectionName: 'Aurora Wave Series',
    name: 'Aurora Grand Ripple Chandelier',
    slug: 'aurora-grand-ripple',
    description: 'Custom-length wave of hand-blown slumped glass panels with internal champagne gold LED light engines.',
    material: 'Mouth-Blown Slumped Glass & Champagne Brass',
    finish: 'Warm Amber & Smoked Gradient',
    dimensions: 'Custom lengths from 3m to 25m',
    lightingType: '2700K DALI Dimmable LED',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-celestia-01',
    collectionId: 'col-celestia',
    collectionName: 'Celestia Chandelier Clusters',
    name: 'Celestia 100-Drop Crystal Matrix',
    slug: 'celestia-100-drop',
    description: 'Precision optical crystal drops with laser-engraved inner bubble geometries that catch ambient light.',
    material: '30% Lead Optical Crystal & Brushed Stainless Cable',
    finish: 'Clear & Champagne Gold Plated',
    dimensions: '300cm Drop x 180cm Diameter',
    lightingType: 'Micro-LED Cable Runs (2700K-3000K)',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prod-frag-01',
    collectionId: 'col-fragmenta',
    collectionName: 'Fragmenta Wall Sculptures',
    name: 'Fragmenta Eclipse Light Sculpture',
    slug: 'fragmenta-eclipse-wall',
    description: 'Geometric wall art featuring hand-gilded 24k gold leaf discs behind hand-cast textured lava stone glass.',
    material: '24K Gold Leaf, Smoked Glass & Anodized Charcoal Frame',
    finish: 'Gilded Gold & Charcoal',
    dimensions: '150cm x 150cm x 12cm Depth',
    lightingType: 'Indirect Perimeter LED (2400K)',
    customizable: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop'
  }
];

export const INITIAL_MATERIALS: Material[] = [
  {
    id: 'mat-glass',
    name: 'Mouth-Blown Artisan Glass',
    category: 'Glass',
    description: 'Crafted in Sutra’s dedicated glassworks at 1,450°C. Each element is individually blown by master artisans with over 20 years of experience, producing subtle organic ripples and light dispersion.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    properties: ['High Heat Resistance', 'Organic Texture', '98% Optical Transparency', 'UV Stable Color Integration'],
    finishes: ['Clear Crystal', 'Honey Amber', 'Smoked Quartz', 'Iridescent Opal', 'Ruby Infused'],
    lightTransmission: 'High (85% - 95%)',
    manufacturingProcess: 'Furnace Melting at 1,450°C → Hand Blowing → Slow Annealing → Precision Cold Cut & Polish',
    featuredProject: 'Minerva Towers Mumbai'
  },
  {
    id: 'mat-brass',
    name: 'Champagne Brass & Marine Bronze',
    category: 'Metal',
    description: 'Precision CNC-machined and hand-patinated structural alloys. Engineered for high load-bearing capacity and corrosion resistance in coastal luxury hospitality settings.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    properties: ['Structural Rigidity', 'Hand-Waxed Patina', 'Zero Oxidation Treated', 'Precision Threading'],
    finishes: ['Champagne Satin', 'Brushed Antique Bronze', 'Polished Rose Gold', 'Anodized Dark Charcoal'],
    lightTransmission: 'Opaque / Reflective Surface',
    manufacturingProcess: 'Laser Cutting → Forging → Micro-Bead Blasting → Hand Electroplating & Protective Lacquering',
    featuredProject: 'The Oberoi Water Lily Pavilion Bali'
  },
  {
    id: 'mat-crystal',
    name: 'Optical Crystal & Lead Crystal',
    category: 'Crystal',
    description: 'High refractive index glass containing up to 30% lead oxide or optical purity silica, hand-cut with diamond edges to refract light into vivid spectral rainbows.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    properties: ['Maximal Refraction', 'Spectral Prism Dispersion', 'Scratch Resistant Hardness'],
    finishes: ['Diamond Cut Facet', 'Frosted Satin Edge', 'Laser Engraved Internal Mesh'],
    lightTransmission: 'Ultra High (99%)',
    manufacturingProcess: 'Precision Crucible Melting → Robotic Diamond Cutting → Hand Acid Polishing',
    featuredProject: 'Grand Plaza Imperial Cascade Dubai'
  },
  {
    id: 'mat-ceramic',
    name: 'Hand-Carved Sculptural Ceramic',
    category: 'Ceramic',
    description: 'High-fire porcelain and terracotta ceramics hand-carved with intricate geometric reliefs and glazed with metallic oxides.',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
    properties: ['Tactile Ceramic Relief', 'Zero Thermal Expansion', 'Acoustic Absorption'],
    finishes: ['Matte Off-White', 'Metallic Platinum Glaze', 'Textured Terracotta'],
    lightTransmission: 'Translucent at 3mm thickness',
    manufacturingProcess: 'Hand Clay Modeling → 1,280°C Biscuit Firing → Glaze Application → Final High Firing',
    featuredProject: 'The Royal Heritage Palace Jaipur'
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
    title: 'Sutra Master Architectural Specifier Catalogue 2026',
    category: 'Catalogues',
    fileFormat: 'PDF',
    fileSize: '48.2 MB',
    description: 'Comprehensive 180-page reference guide covering large installations, engineering specs, load calculation formulas, and glass blowing finishes.',
    downloadUrl: '#'
  },
  {
    id: 'res-02',
    title: 'BIM Revit Family Library - Grand Chandelier Series',
    category: 'BIM / Revit',
    fileFormat: 'RFA / RVT',
    fileSize: '124 MB',
    description: 'Fully parametric Revit BIM models with lighting power connector definitions and weight metadata for structural engineers.',
    downloadUrl: '#'
  },
  {
    id: 'res-03',
    title: 'Autodesk CAD DWG Block Collection - Ceiling Anchors & Cables',
    category: 'CAD DWG',
    fileFormat: 'DWG',
    fileSize: '32 MB',
    description: '2D/3D DWG architectural line drawings of suspension mounts, canopy details, and structural mounting plates.',
    downloadUrl: '#'
  },
  {
    id: 'res-04',
    title: 'IES Photometric Data Packages - 2700K & 3000K LED Drivers',
    category: 'IES Photometric',
    fileFormat: 'IES / LDT',
    fileSize: '14 MB',
    description: 'High-precision light distribution files for Dialux and Relux lighting simulations.',
    downloadUrl: '#'
  }
];

export const INITIAL_JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    title: 'The Architecture of Light: Defining Grand Hotel Atriums',
    slug: 'architecture-of-light-grand-atriums',
    category: 'Hospitality Design',
    author: 'Elena Rostova, Head of Bespoke Design',
    publishedDate: 'July 28, 2026',
    readTime: '6 min read',
    excerpt: 'How monumental lighting installations shape human emotions, spatial acoustics, and visual hierarchy in multi-story luxury hotel lobbies.',
    content: `When an individual steps into a double-height hotel atrium, their subconscious instantly seeks a visual anchor. Decorative lighting is not merely a utility—it is the emotional centerpiece that defines the architectural identity...`,
    coverImage: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'art-02',
    title: '1,450°C Furnace Magic: The Art of Mouth-Blown Glass',
    slug: '1450c-furnace-magic-mouth-blown-glass',
    category: 'Artisan Crafts',
    author: 'Master Glassmaker Vikram Sharma',
    publishedDate: 'June 14, 2026',
    readTime: '8 min read',
    excerpt: 'Inside Sutra’s glass blowing furnace. A deep look into molten silica, hand-annealing techniques, and the physics of organic optical clarity.',
    content: `At 1,450 degrees Celsius, glass ceases to be solid rock and becomes a glowing, living element. It responds to the rhythm of breath, rotation, and gravity...`,
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop'
  }
];

export const mockProjects = INITIAL_PROJECTS;
export const mockCollections = INITIAL_COLLECTIONS;
export const mockProducts = INITIAL_PRODUCTS;
export const mockMaterials = INITIAL_MATERIALS;
export const mockLeads = INITIAL_LEADS;
export const mockResources = INITIAL_ARCHITECT_RESOURCES;
export const mockJournalArticles = INITIAL_JOURNAL_ARTICLES;


