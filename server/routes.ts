import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { 
  insertUserSchema,
  insertHeroContentSchema,
  insertGameFeatureSchema,
  insertGameScreenshotSchema,
  insertDownloadContentSchema
} from "@shared/schema";

// Admin middleware
const adminAuth = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const session = await storage.getAdminSession(token);
  if (!session || new Date() > session.expiresAt) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  req.userId = session.userId;
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin authentication routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Create session token
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      await storage.createAdminSession(user.id, token, expiresAt);

      res.json({ token, user: { id: user.id, username: user.username } });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });

  app.post("/api/admin/logout", adminAuth, async (req: any, res) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (token) {
        await storage.deleteAdminSession(token);
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ error: 'Logout failed' });
    }
  });

  app.post("/api/admin/register", async (req, res) => {
    try {
      const { username, password } = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await storage.createUser({ username, password: hashedPassword });
      res.json({ user: { id: user.id, username: user.username } });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  });

  // Public content routes
  app.get("/api/hero-content", async (req, res) => {
    try {
      const content = await storage.getHeroContent();
      res.json(content);
    } catch (error) {
      console.error('Get hero content error:', error);
      res.status(500).json({ error: 'Failed to get hero content' });
    }
  });

  app.get("/api/game-features", async (req, res) => {
    try {
      const features = await storage.getGameFeatures();
      res.json(features);
    } catch (error) {
      console.error('Get game features error:', error);
      res.status(500).json({ error: 'Failed to get game features' });
    }
  });

  app.get("/api/game-screenshots", async (req, res) => {
    try {
      const screenshots = await storage.getGameScreenshots();
      res.json(screenshots);
    } catch (error) {
      console.error('Get game screenshots error:', error);
      res.status(500).json({ error: 'Failed to get game screenshots' });
    }
  });

  app.get("/api/download-content", async (req, res) => {
    try {
      const content = await storage.getDownloadContent();
      res.json(content);
    } catch (error) {
      console.error('Get download content error:', error);
      res.status(500).json({ error: 'Failed to get download content' });
    }
  });

  // Admin-only content management routes
  app.put("/api/admin/hero-content", adminAuth, async (req, res) => {
    try {
      const content = insertHeroContentSchema.parse(req.body);
      const updatedContent = await storage.updateHeroContent(content);
      res.json(updatedContent);
    } catch (error) {
      console.error('Update hero content error:', error);
      res.status(500).json({ error: 'Failed to update hero content' });
    }
  });

  app.post("/api/admin/game-features", adminAuth, async (req, res) => {
    try {
      const feature = insertGameFeatureSchema.parse(req.body);
      const newFeature = await storage.createGameFeature(feature);
      res.json(newFeature);
    } catch (error) {
      console.error('Create game feature error:', error);
      res.status(500).json({ error: 'Failed to create game feature' });
    }
  });

  app.put("/api/admin/game-features/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const feature = req.body;
      const updatedFeature = await storage.updateGameFeature(id, feature);
      res.json(updatedFeature);
    } catch (error) {
      console.error('Update game feature error:', error);
      res.status(500).json({ error: 'Failed to update game feature' });
    }
  });

  app.delete("/api/admin/game-features/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteGameFeature(id);
      res.json({ success: true });
    } catch (error) {
      console.error('Delete game feature error:', error);
      res.status(500).json({ error: 'Failed to delete game feature' });
    }
  });

  app.post("/api/admin/game-screenshots", adminAuth, async (req, res) => {
    try {
      const screenshot = insertGameScreenshotSchema.parse(req.body);
      const newScreenshot = await storage.createGameScreenshot(screenshot);
      res.json(newScreenshot);
    } catch (error) {
      console.error('Create game screenshot error:', error);
      res.status(500).json({ error: 'Failed to create game screenshot' });
    }
  });

  app.put("/api/admin/game-screenshots/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const screenshot = req.body;
      const updatedScreenshot = await storage.updateGameScreenshot(id, screenshot);
      res.json(updatedScreenshot);
    } catch (error) {
      console.error('Update game screenshot error:', error);
      res.status(500).json({ error: 'Failed to update game screenshot' });
    }
  });

  app.delete("/api/admin/game-screenshots/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteGameScreenshot(id);
      res.json({ success: true });
    } catch (error) {
      console.error('Delete game screenshot error:', error);
      res.status(500).json({ error: 'Failed to delete game screenshot' });
    }
  });

  app.put("/api/admin/download-content", adminAuth, async (req, res) => {
    try {
      const content = insertDownloadContentSchema.parse(req.body);
      const updatedContent = await storage.updateDownloadContent(content);
      res.json(updatedContent);
    } catch (error) {
      console.error('Update download content error:', error);
      res.status(500).json({ error: 'Failed to update download content' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
