import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./src/db";
import { openAPI } from "better-auth/plugins"
import * as schema from "./src/db/schema/auth";

 // your drizzle instance

export const auth = betterAuth({
   plugins: [ 
        openAPI(), 
    ] ,
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema
        
    }),
    emailAndPassword:{
      enabled:true
    },
    socialProviders:{
      google:{
        clientId:process.env.GOOGLE_CLIENT_ID!,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET!
      }
    }
});