// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fwnnanxzpvanliifoxqx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bm5hbnh6cHZhbmxpaWZveHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDY0NDYsImV4cCI6MjA1OTAyMjQ0Nn0.gMuH-z_-bXTefe4yAwSeY7rtKWzEcN6COaDOsROPpx8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);