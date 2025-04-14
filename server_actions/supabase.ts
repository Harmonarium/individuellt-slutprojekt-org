import { createClient } from "@supabase/supabase-js";

const DATABASE_KEY = process.env.DATABASE_ADMIN_KEY as string;
const DATABASE_URL = process.env.DATABASE_URL as string;

export const supabase=createClient(DATABASE_URL, DATABASE_KEY);
