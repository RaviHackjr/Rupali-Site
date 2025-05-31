import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Hero/Trailer content
export const heroContent = pgTable("hero_content", {
  id: serial("id").primaryKey(),
  trailerThumbnail: text("trailer_thumbnail").notNull(),
  trailerVideoLink: text("trailer_video_link").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Game features for about section
export const gameFeatures = pgTable("game_features", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iconName: text("icon_name").notNull(),
  order: integer("order").notNull(),
  isActive: boolean("is_active").default(true),
});

// Game screenshots
export const gameScreenshots = pgTable("game_screenshots", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  altText: text("alt_text").notNull(),
  order: integer("order").notNull(),
  isActive: boolean("is_active").default(true),
});

// Download section content
export const downloadContent = pgTable("download_content", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  buttonText: text("button_text").notNull(),
  downloadLink: text("download_link"),
  isAvailable: boolean("is_available").default(false),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Admin sessions
export const adminSessions = pgTable("admin_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertHeroContentSchema = createInsertSchema(heroContent).omit({
  id: true,
  updatedAt: true,
});

export const insertGameFeatureSchema = createInsertSchema(gameFeatures).omit({
  id: true,
});

export const insertGameScreenshotSchema = createInsertSchema(gameScreenshots).omit({
  id: true,
});

export const insertDownloadContentSchema = createInsertSchema(downloadContent).omit({
  id: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type HeroContent = typeof heroContent.$inferSelect;
export type InsertHeroContent = z.infer<typeof insertHeroContentSchema>;
export type GameFeature = typeof gameFeatures.$inferSelect;
export type InsertGameFeature = z.infer<typeof insertGameFeatureSchema>;
export type GameScreenshot = typeof gameScreenshots.$inferSelect;
export type InsertGameScreenshot = z.infer<typeof insertGameScreenshotSchema>;
export type DownloadContent = typeof downloadContent.$inferSelect;
export type InsertDownloadContent = z.infer<typeof insertDownloadContentSchema>;
export type AdminSession = typeof adminSessions.$inferSelect;
