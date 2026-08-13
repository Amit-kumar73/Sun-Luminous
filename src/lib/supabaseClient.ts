import { createClient } from '@supabase/supabase-js';

const env = (import.meta as any).env || {};
const supabaseUrl = env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to save project lead to Supabase if available, otherwise server API
export async function submitLeadData(leadPayload: any) {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('leads').insert([leadPayload]).select();
      if (!error && data) {
        return { success: true, data: data[0] };
      }
    } catch (e) {
      console.warn('Supabase lead insert failed, falling back to local server API:', e);
    }
  }

  // Fallback to Express backend API
  const res = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadPayload)
  });
  if (!res.ok) {
    throw new Error('Failed to submit lead to server');
  }
  const data = await res.json();
  return { success: true, data };
}
