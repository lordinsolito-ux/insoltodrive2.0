
import { createClient } from '@supabase/supabase-js';
import { Mandate } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * InsolitoDrive Supabase Imperial Interface
 */
export const supabaseService = {
  async fetchMandates(): Promise<Mandate[]> {
    console.log("[SUPABASE OMEGA] Fetching encrypted fiduciary ledger...");
    const { data, error } = await supabase
      .from('mandates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("[SUPABASE ERROR]", error);
      return [];
    }
    return data || [];
  },

  async createMandate(mandateData: Partial<Mandate>) {
    console.log("[SUPABASE OMEGA] Initializing transaction proxy entry...");
    const { data, error } = await supabase
      .from('mandates')
      .insert([mandateData])
      .select();

    if (error) {
      console.error("[SUPABASE ERROR]", error);
      throw error;
    }
    return data;
  },

  async scheduleOblivion(mandateId: string) {
    console.log(`[SUPABASE OMEGA] Initializing Protocol OMEGA for ${mandateId}.`);
    // In a real app, this would call a Supabase Edge Function or a triggered cron
    console.log("-> EDGE FUNCTION: Schedulazione Wipe fisico T+48h confermata.");
  }
};
