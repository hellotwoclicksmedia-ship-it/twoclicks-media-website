import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAuditNotificationEmail(data: {
  storeUrl: string;
  monthlyTraffic: string;
  monthlyRevenue: string;
  mainChallenge: string;
  email: string;
  whatsapp?: string | null;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping audit notification email.");
    return;
  }

  try {
    await resend.emails.send({
      from: "TwoClicks <onboarding@resend.dev>",
      to: ["hello@twoclicksmedia.com", "vrajtalatii@gmail.com"],
      subject: `New Audit Request from ${data.email}`,
      html: `
        <h2>New Audit Request</h2>
        <p><strong>Store URL:</strong> ${data.storeUrl}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp || "Not provided"}</p>
        <p><strong>Monthly Traffic:</strong> ${data.monthlyTraffic}</p>
        <p><strong>Monthly Revenue:</strong> ${data.monthlyRevenue}</p>
        <p><strong>Main Challenge:</strong></p>
        <p>${data.mainChallenge}</p>
      `,
    });
    console.log("Audit notification email sent successfully");
  } catch (error) {
    console.error("Failed to send audit notification email:", error);
  }
}
