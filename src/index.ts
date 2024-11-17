import { Env, Hono } from "hono";
import { logger } from "hono/logger";
import { supabaseMiddleware } from "./middlewares/supabase";
import { Context } from "hono";
import { swaggerUI } from "@hono/swagger-ui";
import openapi from "./openapi.json";

const app = new Hono();

app.use(logger());
app.use(supabaseMiddleware);

app.get("/", swaggerUI({ url: "/openapi" }));
app.get("/openapi", async (c: Context<Env>) => {
  return c.json(openapi);
});

app.get("/api/users", async (c: Context<Env>) => {
  const { data, error, count } = await c.var.supabase
    .from("users")
    .select("", { count: "exact" });
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/users/:id/dishes", async (c: Context<Env>) => {
  const { id } = c.req.param();
  const { data, error, count } = await c.var.supabase
    .from("favourite_dishes")
    .select("", { count: "exact" })
    .eq("user_id", id);
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/users/:id/places", async (c: Context<Env>) => {
  const { id } = c.req.param();
  const { data, error, count } = await c.var.supabase
    .from("favourite_places")
    .select("", { count: "exact" })
    .eq("user_id", id);

  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/landmarks", async (c: Context<Env>) => {
  const { data, error, count } = await c.var.supabase
    .from("landmarks")
    .select("", { count: "exact" });
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/landmarks/:id/feedbacks", async (c: Context<Env>) => {
  const { id } = c.req.param();
  const { data, error, count } = await c.var.supabase
    .from("landmark_feedbacks")
    .select("", { count: "exact" })
    .eq("landmark_id", id);
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/restaurants", async (c: Context<Env>) => {
  const { data, error, count } = await c.var.supabase
    .from("restaurants")
    .select("", { count: "exact" });
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/restaurants/:id/feedbacks", async (c: Context<Env>) => {
  const { id } = c.req.param();
  const { data, error, count } = await c.var.supabase
    .from("restaurant_feedbacks")
    .select("", { count: "exact" })
    .eq("restaurant_id", id);
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/restaurants/:id/dishes", async (c: Context<Env>) => {
  const { id } = c.req.param();
  const { data, error, count } = await c.var.supabase
    .from("restaurant_dishes")
    .select("", { count: "exact" })
    .eq("restaurant_id", id);
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/dishes", async (c: Context<Env>) => {
  const { data, error, count } = await c.var.supabase
    .from("dishes")
    .select("", { count: "exact" });
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

app.get("/api/dishes/:id/feedbacks", async (c: Context<Env>) => {
  const { id } = c.req.param();
  const { data, error, count } = await c.var.supabase
    .from("dish_feedbacks")
    .select("", { count: "exact" })
    .eq("dish_id", id);
  if (error) {
    throw error;
  }
  return c.json({ data, count });
});

export default app;
