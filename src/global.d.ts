import type { SupabaseClient } from "@supabase/supabase-js";
import {} from "hono";

declare module "hono" {
  type ContextRenderer = (
    content: string | Promise<string>,
    props?: { title?: string; path?: string }
  ) => Response;

  interface Env {
    Variables: {
      supabase: SupabaseClient;
    };

    Bindings: {
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
    };
  }
}
