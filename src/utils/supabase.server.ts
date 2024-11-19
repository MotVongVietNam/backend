import { createServerClient } from "@supabase/ssr";
import type { Context, Env } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";

export const createServerInstance = (c: Context<Env>) => {
  const { SUPABASE_URL, SUPABASE_KEY } = c.env;
  return createServerClient(SUPABASE_URL, SUPABASE_KEY, {
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
};
