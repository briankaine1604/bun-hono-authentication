import { Hono } from "hono";
import users from "./users";
import { auth } from "../../auth";

const routes = new Hono();
routes.get("/",(c)=>c.text("You’ve reached Brian’s Auth API 🚀"))
routes.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

routes.route("/users", users);
export default routes;