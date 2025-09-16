import { Hono } from "hono";

const users = new Hono();

users.get("/", (c) => {
  return c.text("1 User!");
});

export default users;