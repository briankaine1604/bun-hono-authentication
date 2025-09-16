import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./src/db";
import { openAPI } from "better-auth/plugins";
import * as schema from "./src/db/schema/auth";
import { sendEmail } from "./src/services/email";

// your drizzle instance

export const auth = betterAuth({
  plugins: [openAPI()],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const htmlBody = `
      <div>
        <p>Hello ${user.name},</p>
        <p>Click the link below to verify your email address:</p>
        <a href="${url}">${url}</a>
      </div>
    `;

      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        htmlBody,
      });
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
