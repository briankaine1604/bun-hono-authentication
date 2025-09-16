// https://www.npmjs.com/package/zeptomail

// For ES6
// @ts-ignore
import { SendMailClient } from "zeptomail";

const url = "api.zeptomail.com/";
const token = "Zoho-enczapikey wSsVR60gqUb5Bvp0nT2rL708mwwHBluiFRt521Sg4iSvGPqW8sdvl0KdAgX1T/hMFGQ4FDZAou0sykoA2jsHjY4uyF5WCCiF9mqRe1U4J3x17qnvhDzDWWlUlRaPJIIMzwlqmmFoF8kk+g==";

const client: any = new SendMailClient({ url, token });

client.sendMail({
    "from": 
    {
        "address": "noreply@briankaine.com",
        "name": "noreply"
    },
    "to": 
    [
        {
        "email_address": 
            {
                "address": "admin@briankaine.com",
                "name": "Brian"
            }
        }
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully.</b></div>",
}).then((resp:any) => console.log("success")).catch((error:any) => console.log("error"));