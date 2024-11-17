import {} from "hono";
import { SupabaseClient } from "@supabase/supabase-js";

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props?: { title?: string; path?: string }
    ): Response;
  }

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
