import { 
  users, 
  heroContent,
  gameFeatures,
  gameScreenshots,
  downloadContent,
  adminSessions,
  type User, 
  type InsertUser,
  type HeroContent,
  type InsertHeroContent,
  type GameFeature,
  type InsertGameFeature,
  type GameScreenshot,
  type InsertGameScreenshot,
  type DownloadContent,
  type InsertDownloadContent,
  type AdminSession
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, asc } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admin session operations
  createAdminSession(userId: number, token: string, expiresAt: Date): Promise<AdminSession>;
  getAdminSession(token: string): Promise<AdminSession | undefined>;
  deleteAdminSession(token: string): Promise<void>;
  
  // Hero content operations
  getHeroContent(): Promise<HeroContent | undefined>;
  updateHeroContent(content: InsertHeroContent): Promise<HeroContent>;
  
  // Game features operations
  getGameFeatures(): Promise<GameFeature[]>;
  createGameFeature(feature: InsertGameFeature): Promise<GameFeature>;
  updateGameFeature(id: number, feature: Partial<InsertGameFeature>): Promise<GameFeature>;
  deleteGameFeature(id: number): Promise<void>;
  
  // Game screenshots operations
  getGameScreenshots(): Promise<GameScreenshot[]>;
  createGameScreenshot(screenshot: InsertGameScreenshot): Promise<GameScreenshot>;
  updateGameScreenshot(id: number, screenshot: Partial<InsertGameScreenshot>): Promise<GameScreenshot>;
  deleteGameScreenshot(id: number): Promise<void>;
  
  // Download content operations
  getDownloadContent(): Promise<DownloadContent | undefined>;
  updateDownloadContent(content: InsertDownloadContent): Promise<DownloadContent>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Admin session operations
  async createAdminSession(userId: number, token: string, expiresAt: Date): Promise<AdminSession> {
    const [session] = await db
      .insert(adminSessions)
      .values({ userId, token, expiresAt })
      .returning();
    return session;
  }

  async getAdminSession(token: string): Promise<AdminSession | undefined> {
    const [session] = await db
      .select()
      .from(adminSessions)
      .where(eq(adminSessions.token, token));
    return session || undefined;
  }

  async deleteAdminSession(token: string): Promise<void> {
    await db.delete(adminSessions).where(eq(adminSessions.token, token));
  }

  // Hero content operations
  async getHeroContent(): Promise<HeroContent | undefined> {
    const [content] = await db
      .select()
      .from(heroContent)
      .orderBy(desc(heroContent.updatedAt))
      .limit(1);
    return content || undefined;
  }

  async updateHeroContent(content: InsertHeroContent): Promise<HeroContent> {
    // Delete existing content and insert new
    await db.delete(heroContent);
    const [newContent] = await db
      .insert(heroContent)
      .values(content)
      .returning();
    return newContent;
  }

  // Game features operations
  async getGameFeatures(): Promise<GameFeature[]> {
    return await db
      .select()
      .from(gameFeatures)
      .where(eq(gameFeatures.isActive, true))
      .orderBy(asc(gameFeatures.order));
  }

  async createGameFeature(feature: InsertGameFeature): Promise<GameFeature> {
    const [newFeature] = await db
      .insert(gameFeatures)
      .values(feature)
      .returning();
    return newFeature;
  }

  async updateGameFeature(id: number, feature: Partial<InsertGameFeature>): Promise<GameFeature> {
    const [updatedFeature] = await db
      .update(gameFeatures)
      .set(feature)
      .where(eq(gameFeatures.id, id))
      .returning();
    return updatedFeature;
  }

  async deleteGameFeature(id: number): Promise<void> {
    await db
      .update(gameFeatures)
      .set({ isActive: false })
      .where(eq(gameFeatures.id, id));
  }

  // Game screenshots operations
  async getGameScreenshots(): Promise<GameScreenshot[]> {
    return await db
      .select()
      .from(gameScreenshots)
      .where(eq(gameScreenshots.isActive, true))
      .orderBy(asc(gameScreenshots.order));
  }

  async createGameScreenshot(screenshot: InsertGameScreenshot): Promise<GameScreenshot> {
    const [newScreenshot] = await db
      .insert(gameScreenshots)
      .values(screenshot)
      .returning();
    return newScreenshot;
  }

  async updateGameScreenshot(id: number, screenshot: Partial<InsertGameScreenshot>): Promise<GameScreenshot> {
    const [updatedScreenshot] = await db
      .update(gameScreenshots)
      .set(screenshot)
      .where(eq(gameScreenshots.id, id))
      .returning();
    return updatedScreenshot;
  }

  async deleteGameScreenshot(id: number): Promise<void> {
    await db
      .update(gameScreenshots)
      .set({ isActive: false })
      .where(eq(gameScreenshots.id, id));
  }

  // Download content operations
  async getDownloadContent(): Promise<DownloadContent | undefined> {
    const [content] = await db
      .select()
      .from(downloadContent)
      .orderBy(desc(downloadContent.updatedAt))
      .limit(1);
    return content || undefined;
  }

  async updateDownloadContent(content: InsertDownloadContent): Promise<DownloadContent> {
    // Delete existing content and insert new
    await db.delete(downloadContent);
    const [newContent] = await db
      .insert(downloadContent)
      .values(content)
      .returning();
    return newContent;
  }
}

export const storage = new DatabaseStorage();
