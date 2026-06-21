import type { Express } from "express";
import { z } from "zod";
import {
  submitAuditRequest,
  listAuditRequests,
  submitContact,
  listContactSubmissions,
} from "./handlers";

export function registerRoutes(app: Express): void {
  app.post("/api/audit-requests", async (req, res) => {
    try {
      const auditRequest = await submitAuditRequest(req.body);
      res.status(201).json(auditRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        console.error(error);
        res.status(500).json({ error: "Failed to create audit request" });
      }
    }
  });

  app.get("/api/audit-requests", async (_req, res) => {
    try {
      res.json(await listAuditRequests());
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch audit requests" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const submission = await submitContact(req.body);
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        console.error(error);
        res.status(500).json({ error: "Failed to create contact submission" });
      }
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      res.json(await listContactSubmissions());
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });
}
