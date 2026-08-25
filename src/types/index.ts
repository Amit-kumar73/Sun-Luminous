export type ProjectCategory = 
  | 'Hospitality' 
  | 'Residential' 
  | 'Commercial' 
  | 'Large Installations' 
  | 'Sculptural Art' 
  | 'Sculptural'
  | 'Heritage & Religious'
  | 'Builder';

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  type: 'hero' | 'gallery' | 'detail' | 'manufacturing' | 'installation' | 'drawing';
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  country: string;
  client: string;
  architect: string;
  designer: string;
  year: number;
  description: string;
  challenge: string;
  solution: string;
  materials: string[];
  installationType: string;
  installationHeightFeet: number;
  diameterFeet?: number;
  elementCount?: number;
  manufacturingTimeWeeks: number;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Concept';
  images: ProjectImage[];
  blueprintUrl?: string;
  createdAt: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  featured: boolean;
  heroImage: string;
  productCount: number;
}

export interface Product {
  id: string;
  collectionId: string;
  collectionName: string;
  name: string;
  slug: string;
  description: string;
  material: string;
  finish: string;
  dimensions: string;
  lightingType: string;
  customizable: boolean;
  featured: boolean;
  image: string;
  specSheetUrl?: string;
}

export interface Material {
  id: string;
  name: string;
  category: 'Glass' | 'Metal' | 'Crystal' | 'Ceramic' | 'Wood' | 'Stone' | 'Resin';
  description: string;
  imageUrl: string;
  properties: string[];
  finishes: string[];
  lightTransmission: string;
  manufacturingProcess: string;
  featuredProject: string;
}

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'DESIGN_DISCUSSION' | 'PROPOSAL' | 'NEGOTIATION' | 'WON' | 'LOST';

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  projectType: ProjectCategory | string;
  projectLocation: string;
  budgetRange: string;
  timeline: string;
  message: string;
  attachmentName?: string;
  source: string;
  status: LeadStatus;
  priority: 'High' | 'Medium' | 'Standard';
  aiSummary?: string;
  createdAt: string;
}

export interface ArchitectResource {
  id: string;
  title: string;
  category: 'BIM / Revit' | 'CAD DWG' | 'IES Photometric' | 'Catalogues' | 'Finish Charts';
  fileFormat: string;
  fileSize: string;
  description: string;
  downloadUrl: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishedDate: string;
  readTime: string;
  excerpt: string;
  content: string;
  coverImage: string;
}

export interface ConfiguratorState {
  roomType: string;
  heightFeet: number;
  widthFeet: number;
  lengthFeet: number;
  style: string;
  primaryMaterial: string;
  glassFinish: string;
  metalFinish: string;
  colorTemperature: string;
  targetBudget: string;
}

export interface InstallationFormation {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName?: string;
  recommendedSpaces: string[];
}

export interface InstallationElement {
  id: string;
  code: string;
  name: string;
  material: string;
  finish: string;
  imageUrl: string;
  description: string;
}

export interface ClientPartner {
  name: string;
  category: 'Builders' | 'Hospitality/Hotels' | 'Corporate/Commercial' | 'Residential';
  badge?: string;
}

export interface PDFCatalog {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  pages: number;
  featured: boolean;
  category: 'Hospitality' | 'Residential' | 'Large Installations';
  coverImage: string;
  highlights: string[];
  contactPerson: {
    name: string;
    role: string;
    phone: string[];
    email: string[];
  };
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface HospitalityAdvantage {
  number: string;
  title: string;
  description: string;
}

export interface FirebaseConfigStatus {
  projectId: string | null;
  authConnected: boolean;
  firestoreConnected: boolean;
  adminConfigured: boolean;
}

