import { createClient } from "@supabase/supabase-js";
import { Context, Next } from "hono";
import { env } from "hono/adapter";

export const supabaseMiddleware = async (c: Context, next: Next) => {
  const { SUPABASE_URL, SUPABASE_KEY } = env(c);
  const client = createClient(SUPABASE_URL, SUPABASE_KEY);
  c.set("supabase", client);
  await next();
};
