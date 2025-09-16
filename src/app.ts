import { Hono } from "hono";
import routes from "./routes/router";
import { auth } from "../auth";


const app =new Hono();



app.route("/",routes)

export default app;