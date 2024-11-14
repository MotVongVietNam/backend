import { Hono } from "hono";
import { bearerAuth } from "hono/bearer-auth";

const app = new Hono();

const token = "r4nd0mtok3n";

app.use("/api/*", bearerAuth({ token }));

app.get("/api/page", (c) => {
  return c.json({ message: "You are authorized" });
});

export default app;
