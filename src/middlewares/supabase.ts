import { createServerClient } from "@supabase/ssr";
import type { Context, Next } from "hono";
import { env } from "hono/adapter";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";

export const supabaseMiddleware = async (c: Context, next: Next) => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = env(c);
  const client = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      get: (key: string) => {
        return getCookie(c, key);
      },
      set: (key: string, value, options: object) => {
        setCookie(c, key, value, options);
      },
      remove: (key: string, options: object) => {
        deleteCookie(c, key, options);
      },
    },
    cookieOptions: {
      httpOnly: true,
      secure: true,
    },
  });
  c.set("supabase", client);
  await next();
};
