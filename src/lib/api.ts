import { Project, Lead } from '../types';

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch('/api/projects');
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
  } catch (err) {
    console.warn('Using local fallback projects due to fetch error:', err);
    return [];
  }
}

export async function fetchLeads(): Promise<Lead[]> {
  try {
    const res = await fetch('/api/leads');
    if (!res.ok) throw new Error('Failed to fetch leads');
    return await res.json();
  } catch (err) {
    console.warn('Failed to fetch leads from server:', err);
    return [];
  }
}

export async function createProject(projectData: Partial<Project>): Promise<Project> {
  const res = await fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData)
  });
  if (!res.ok) throw new Error('Failed to create project');
  return await res.json();
}

export async function updateLeadStatus(id: string, status: string, priority?: string): Promise<Lead> {
  const res = await fetch(`/api/leads/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status, ...(priority ? { priority } : {}) })
  });
  if (!res.ok) throw new Error('Failed to update lead');
  return await res.json();
}

export async function requestAiLightingAssistant(params: {
  roomHeightFeet: number;
  roomType: string;
  style: string;
  colorPalette: string;
  additionalDetails?: string;
}) {
  const res = await fetch('/api/gemini/assistant', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || 'Failed to generate AI recommendation');
  }
  return await res.json();
}

export async function requestAiCaseStudyGenerator(params: {
  title: string;
  location: string;
  architect: string;
  heightFeet: number;
  elementCount: number;
  keyMaterials: string;
  rawNotes: string;
}) {
  const res = await fetch('/api/gemini/generate-case-study', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || 'Failed to generate AI case study');
  }
  return await res.json();
}
