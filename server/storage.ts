import { 
  type User, 
  type InsertUser, 
  type AuditRequest, 
  type InsertAuditRequest,
  type ContactSubmission,
  type InsertContact
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest>;
  getAuditRequests(): Promise<AuditRequest[]>;
  
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private auditRequests: Map<string, AuditRequest>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.auditRequests = new Map();
    this.contactSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest> {
    const id = randomUUID();
    const auditRequest: AuditRequest = { 
      ...request, 
      id, 
      createdAt: new Date(),
      whatsapp: request.whatsapp || null
    };
    this.auditRequests.set(id, auditRequest);
    return auditRequest;
  }

  async getAuditRequests(): Promise<AuditRequest[]> {
    return Array.from(this.auditRequests.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt: new Date(),
      whatsapp: submission.whatsapp || null
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
