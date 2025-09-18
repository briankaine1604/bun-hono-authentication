import { Hono } from "hono";
import routes from "./routes/router";
import { auth } from "../auth";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: process.env.FRONTEND_URL!, // frontend origin
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true, // important for cookies/auth
  })
);

app.route("/", routes);

export default app;
