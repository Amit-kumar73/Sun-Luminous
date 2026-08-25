import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

import { isFirebaseAdminConfigured } from "./server/firebase-admin";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// In-memory backing state (with sample initial data)
let projectsStore = [
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
      }
    ],
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

let leadsStore = [
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
    createdAt: new Date().toISOString()
  }
];

// Lazy Gemini AI initialization
function getGeminiAi() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// REST API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", brand: "Sutra Luminis", version: "1.0.0" });
});

// GET all projects
app.get("/api/projects", (req, res) => {
  res.json(projectsStore);
});

// GET official PDF catalogues
app.get("/api/catalogs", (req, res) => {
  res.json([
    {
      id: 'pdf-hospitality-portfolio',
      title: 'SUN LUMINOUS Hotel Portfolio',
      subtitle: 'Bespoke Lighting Solutions for Luxury Hospitality & Public Architecture',
      pages: 55,
      year: '2024',
      category: 'Hospitality Portfolio',
      contactPerson: {
        name: 'Ms. Kamya Raghuvanshi',
        role: 'Business Head - ID / Hospitality',
        phone: ['+91 93127 40404', '+91 95608 08413'],
        email: ['interiors11@sunluminous.com', 'interiors12@sunluminous.com']
      }
    },
    {
      id: 'pdf-residential-catalogue',
      title: 'SUN LUMINOUS Residential Catalogue',
      subtitle: 'Curated Decorative & Sculptural Masterworks for Private Residences',
      pages: 66,
      year: '2023 / 2024',
      category: 'Residential Catalogue',
      contactPerson: {
        name: 'Ms. Kamya Raghuvanshi',
        role: 'Business Head - ID / Hospitality',
        phone: ['+91 93127 40404', '+91 95608 08413'],
        email: ['interiors11@sunluminous.com', 'interiors12@sunluminous.com']
      }
    },
    {
      id: 'pdf-large-installations',
      title: 'SUN LUMINOUS Large Lighting Installations',
      subtitle: 'Monumental Sculptural Glass & Atrium Illumination Masterworks (400+ Formations & Elements)',
      pages: 47,
      year: '2024',
      category: 'Large Installations',
      contactPerson: {
        name: 'Ms. Kamya Raghuvanshi',
        role: 'Business Head - ID / Hospitality',
        phone: ['+91 93127 40404', '+91 95608 08413'],
        email: ['interiors11@sunluminous.com', 'interiors12@sunluminous.com']
      }
    }
  ]);
});

// POST create project
app.post("/api/projects", (req, res) => {
  const newProj = {
    id: `proj-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0],
    featured: req.body.featured ?? false,
    status: req.body.status || 'Completed',
    images: req.body.images || [],
    materials: req.body.materials || ['Mouth-blown Glass', 'Brass'],
    ...req.body
  };
  projectsStore.unshift(newProj);
  res.status(201).json(newProj);
});

// GET leads
app.get("/api/leads", (req, res) => {
  res.json(leadsStore);
});

// POST create lead
app.post("/api/leads", async (req, res) => {
  const newLead = {
    id: `lead-${Date.now()}`,
    source: req.body.source || 'Website Lead Form',
    status: 'NEW',
    priority: 'High',
    createdAt: new Date().toISOString(),
    ...req.body
  };

  // Run Gemini auto-categorization if key available
  try {
    const ai = getGeminiAi();
    if (ai) {
      const prompt = `You are a high-end luxury architectural lead assessor for SUN LUMINOUS (bespoke lighting studio). Analyze this new project lead:
Name: ${newLead.name}
Company: ${newLead.company}
Project Type: ${newLead.projectType}
Location: ${newLead.projectLocation}
Budget: ${newLead.budgetRange}
Timeline: ${newLead.timeline}
Details: ${newLead.message}

Provide a 2-sentence executive summary highlighting priority level (High, Medium, Standard) and key architectural requirements.`;

      const aiRes = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt
      });
      if (aiRes.text) {
        newLead.aiSummary = aiRes.text.trim();
      }
    }
  } catch (err) {
    console.error("Gemini lead summary error (non-fatal):", err);
  }

  leadsStore.unshift(newLead);
  res.status(201).json(newLead);
});

// PATCH lead status
app.patch("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const leadIndex = leadsStore.findIndex(l => l.id === id);
  if (leadIndex === -1) {
    return res.status(404).json({ error: "Lead not found" });
  }
  leadsStore[leadIndex] = {
    ...leadsStore[leadIndex],
    ...req.body
  };
  res.json(leadsStore[leadIndex]);
});

// AI Lighting Assistant Endpoint
app.post("/api/gemini/assistant", async (req, res) => {
  try {
    const ai = getGeminiAi();
    if (!ai) {
      return res.status(503).json({
        error: "Gemini API Key is not configured in server environment secrets."
      });
    }

    const { roomHeightFeet, roomType, style, colorPalette, additionalDetails } = req.body;

    const systemInstruction = `You are the Master Architectural Lighting Design Consultant for SUN LUMINOUS, a global luxury bespoke decorative lighting and sculptural art studio comparable to Lasvit, Preciosa, Bocci, and WonderGlass.
Your task is to provide an elite, expert architectural lighting proposal for a client's space based on their parameters.
Always maintain a refined, sophisticated tone, emphasizing mouth-blown glass craft, custom metal engineering, color temperature strategies (e.g. 2700K - 3000K warm ambient), structural suspension drops, element counts, and artistic harmony.`;

    const userPrompt = `Client Space Specifications:
- Room Ceiling Height: ${roomHeightFeet || 25} feet
- Space / Room Type: ${roomType || 'Hotel Lobby Grand Atrium'}
- Preferred Aesthetic Style: ${style || 'Sculptural Wave / Organic Flow'}
- Preferred Materials / Colors: ${colorPalette || 'Mouth-Blown Amber Glass & Champagne Brass'}
- Special Requirements / Context: ${additionalDetails || 'Double height space with dark marble floors and high natural light during the day.'}

Generate a comprehensive bespoke lighting installation recommendation.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptName: { type: Type.STRING, description: "Evocative luxury title for the installation" },
            headline: { type: Type.STRING, description: "Single line artistic summary" },
            detailedDescription: { type: Type.STRING, description: "Deep architectural narrative describing glass shape, light refraction, and spatial impact" },
            recommendedDimensions: { type: Type.STRING, description: "Suggested diameter, length, and drop in feet/meters" },
            elementCount: { type: Type.STRING, description: "Estimated number of individual hand-blown glass or crystal drops" },
            colorTemperature: { type: Type.STRING, description: "Recommended lighting CCT (e.g., 2700K Warm Ambient with DALI dimming)" },
            glassFinish: { type: Type.STRING, description: "Specific glass craft finish (e.g., Slumped Amber Glass with 1450°C Furnace Bubble Texture)" },
            metalFinish: { type: Type.STRING, description: "Frame metal finish (e.g., Hand-Patinated Champagne Brass)" },
            suspensionStrategy: { type: Type.STRING, description: "Structural mounting and load balance advice" },
            artisticInspiration: { type: Type.STRING, description: "Design narrative source of inspiration" }
          },
          required: ["conceptName", "headline", "detailedDescription", "recommendedDimensions", "elementCount", "colorTemperature", "glassFinish", "metalFinish", "suspensionStrategy", "artisticInspiration"]
        }
      }
    });

    if (!response.text) {
      throw new Error("Empty response from Gemini API");
    }

    const jsonResult = JSON.parse(response.text);
    return res.json(jsonResult);
  } catch (error: any) {
    console.error("Error in AI Lighting Assistant route:", error);
    return res.status(500).json({
      error: "Failed to generate AI lighting recommendation",
      details: error.message || String(error)
    });
  }
});

// AI Case Study Generator for Admin
app.post("/api/gemini/generate-case-study", async (req, res) => {
  try {
    const ai = getGeminiAi();
    if (!ai) {
      return res.status(503).json({ error: "Gemini API Key missing" });
    }

    const { title, location, architect, heightFeet, elementCount, keyMaterials, rawNotes } = req.body;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Write an editorial-grade architectural case study for Sutra Luminis' website portfolio:
Project Name: ${title}
Location: ${location}
Architect: ${architect}
Height: ${heightFeet} ft
Elements: ${elementCount}
Key Materials: ${keyMaterials}
Project Notes: ${rawNotes}

Generate JSON with:
1. title
2. challenge (2-3 sentences explaining engineering or spatial hurdle)
3. solution (2-3 sentences describing Sutra's bespoke glass blowing and engineering solution)
4. architecturalDescription (3 paragraphs of rich, editorial commentary suitable for Architectural Digest)
5. manufacturingHighlights (bullet list of glass furnace and craft details)`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            challenge: { type: Type.STRING },
            solution: { type: Type.STRING },
            architecturalDescription: { type: Type.STRING },
            manufacturingHighlights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "challenge", "solution", "architecturalDescription", "manufacturingHighlights"]
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (err: any) {
    console.error("Case study error:", err);
    return res.status(500).json({ error: err.message || "Failed to generate case study" });
  }
});

// Firebase configuration status route
app.get("/api/firebase/status", (req, res) => {
  const adminConfigured = isFirebaseAdminConfigured();
  const projectId = process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID || null;
  res.json({
    configured: Boolean(adminConfigured || projectId),
    adminConfigured,
    projectId: projectId ? `${projectId.substring(0, 4)}***` : null
  });
});

// Start Express + Vite Server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ Sutra Luminis luxury server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
