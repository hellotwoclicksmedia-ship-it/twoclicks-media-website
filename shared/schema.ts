import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const auditRequests = pgTable("audit_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  storeUrl: text("store_url").notNull(),
  monthlyTraffic: text("monthly_traffic").notNull(),
  monthlyRevenue: text("monthly_revenue").notNull(),
  mainChallenge: text("main_challenge").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAuditRequestSchema = createInsertSchema(auditRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertAuditRequest = z.infer<typeof insertAuditRequestSchema>;
export type AuditRequest = typeof auditRequests.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  storeUrl: text("store_url").notNull(),
  challenge: text("challenge").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  primaryMetric: string;
  description: string;
  problem: string;
  approach: string[];
  changes: string[];
  results: {
    conversionRate: string;
    revenueImpact: string;
    speedImprovement?: string;
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "conversion" | "speed" | "apps" | "ux";
  readTime: string;
  content: string[];
  checklist?: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
  outcome: string;
}
