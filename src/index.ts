// 1. External dependencies first
import "dotenv/config";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/node-postgres";

// 2. Local modules
import app from "./app";

// 4. Export config
export default {
  port: 3000,
  fetch: app.fetch,
};
