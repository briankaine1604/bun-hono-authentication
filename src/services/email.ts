// For ES6
// @ts-ignore
// /src/services/email.ts
import { SendMailClient } from "zeptomail";

const client = new SendMailClient({
  url: "api.zeptomail.com/",
  token: process.env.ZOHO_API_KEY!,
});

export const sendEmail = async ({
  to,
  subject,
  htmlBody,
  from = { address: "noreply@briankaine.com", name: "noreply" },
}: {
  to: string;
  subject: string;
  htmlBody?: string;
  from?: { address: string; name: string };
}) => {
  return client.sendMail({
    from,
    to: [{ email_address: { address: to, name: to.split("@")[0] } }],
    subject,
    htmlbody: htmlBody,
  });
};
