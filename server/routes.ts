import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAuditRequestSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendAuditNotificationEmail(data: {
  storeUrl: string;
  monthlyTraffic: string;
  monthlyRevenue: string;
  mainChallenge: string;
  email: string;
  whatsapp?: string | null;
}) {
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

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/audit-requests", async (req, res) => {
    try {
      const validatedData = insertAuditRequestSchema.parse(req.body);
      const auditRequest = await storage.createAuditRequest(validatedData);
      
      await sendAuditNotificationEmail(validatedData);
      
      res.status(201).json(auditRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create audit request" });
      }
    }
  });

  app.get("/api/audit-requests", async (req, res) => {
    try {
      const requests = await storage.getAuditRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch audit requests" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create contact submission" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  return httpServer;
}
