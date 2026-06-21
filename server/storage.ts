import {
  type User,
  type InsertUser,
  type AuditRequest,
  type InsertAuditRequest,
  type ContactSubmission,
  type InsertContact,
  users,
  auditRequests,
  contactSubmissions,
} from "../shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq, desc } from "drizzle-orm";
import pg from "pg";
import { randomUUID } from "crypto";

const { Pool } = pg;

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest>;
  getAuditRequests(): Promise<AuditRequest[]>;

  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest> {
    const result = await this.db.insert(auditRequests).values(request).returning();
    return result[0];
  }

  async getAuditRequests(): Promise<AuditRequest[]> {
    return await this.db.select().from(auditRequests).orderBy(desc(auditRequests.createdAt));
  }

  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const result = await this.db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }
}

/**
 * In-memory fallback used when DATABASE_URL is not configured (e.g. a fresh
 * Vercel deployment without a database). Form submissions still succeed and
 * trigger the notification email; data is not persisted across restarts or
 * serverless invocations. Set DATABASE_URL to enable durable Postgres storage.
 */
export class MemStorage implements IStorage {
  private users: User[] = [];
  private audits: AuditRequest[] = [];
  private contacts: ContactSubmission[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find((u) => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find((u) => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = { id: randomUUID(), ...insertUser };
    this.users.push(user);
    return user;
  }

  async createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest> {
    const auditRequest: AuditRequest = {
      id: randomUUID(),
      ...request,
      whatsapp: request.whatsapp ?? null,
      createdAt: new Date(),
    };
    this.audits.push(auditRequest);
    return auditRequest;
  }

  async getAuditRequests(): Promise<AuditRequest[]> {
    return [...this.audits].reverse();
  }

  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const contactSubmission: ContactSubmission = {
      id: randomUUID(),
      ...submission,
      whatsapp: submission.whatsapp ?? null,
      createdAt: new Date(),
    };
    this.contacts.push(contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contacts].reverse();
  }
}

export const storage: IStorage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemStorage();
