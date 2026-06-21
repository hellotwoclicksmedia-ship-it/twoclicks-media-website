import { storage } from "./storage";
import { insertAuditRequestSchema, insertContactSchema } from "../shared/schema";
import { sendAuditNotificationEmail } from "./email";

export async function submitAuditRequest(body: unknown) {
  const validatedData = insertAuditRequestSchema.parse(body);
  const auditRequest = await storage.createAuditRequest(validatedData);
  await sendAuditNotificationEmail(validatedData);
  return auditRequest;
}

export async function listAuditRequests() {
  return storage.getAuditRequests();
}

export async function submitContact(body: unknown) {
  const validatedData = insertContactSchema.parse(body);
  return storage.createContactSubmission(validatedData);
}

export async function listContactSubmissions() {
  return storage.getContactSubmissions();
}
