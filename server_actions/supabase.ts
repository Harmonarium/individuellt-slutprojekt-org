import { createClient } from "@supabase/supabase-js";

const DATABASE_KEY = process.env.DATABASE_PUBLIC_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

console.log(DATABASE_KEY,DATABASE_URL);

export const supabase=createClient(DATABASE_URL!, DATABASE_KEY!);
