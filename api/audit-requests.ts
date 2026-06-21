import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { submitAuditRequest, listAuditRequests } from "../server/handlers";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      const auditRequest = await submitAuditRequest(req.body);
      return res.status(201).json(auditRequest);
    }

    if (req.method === "GET") {
      return res.status(200).json(await listAuditRequests());
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid request data", details: error.errors });
    }
    console.error(error);
    return res.status(500).json({ error: "Failed to process audit request" });
  }
}
