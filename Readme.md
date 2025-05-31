# Render Deployment Guide for Rupali - The Indian Horror Game Website

## Prerequisites
1. GitHub account
2. Render account (free at render.com)
3. Your project code uploaded to GitHub

## Step 1: Prepare Your Project for Deployment

### 1.1 Create/Update package.json scripts
Make sure your `package.json` has these scripts:
```json
{
  "scripts": {
    "build": "vite build",
    "start": "node server/index.js",
    "dev": "NODE_ENV=development tsx server/index.ts"
  }
}
```

### 1.2 Create render.yaml (Optional but recommended)
Create a `render.yaml` file in your project root:
```yaml
services:
  - type: web
    name: rupali-horror-game
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

## Step 2: Upload to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit - Rupali Horror Game Website"
git branch -M main
git remote add origin https://github.com/yourusername/rupali-horror-game.git
git push -u origin main
```

## Step 3: Deploy on Render

### 3.1 Connect GitHub Repository
1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub account
4. Select your repository: `rupali-horror-game`

### 3.2 Configure Build Settings
1. **Name**: `rupali-horror-game`
2. **Environment**: `Node`
3. **Region**: Choose closest to your audience
4. **Branch**: `main`
5. **Build Command**: `npm install && npm run build`
6. **Start Command**: `npm start`

### 3.3 Environment Variables
Add these environment variables:
- `NODE_ENV`: `production`

### 3.4 Advanced Settings
- **Auto-Deploy**: Yes (recommended)
- **Health Check Path**: `/`

## Step 4: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Build your project
   - Deploy the application

## Step 5: Custom Domain (Optional)

1. Go to your service dashboard
2. Click "Settings" → "Custom Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check that all dependencies are in `package.json`
   - Verify build command is correct
   - Check build logs in Render dashboard

2. **App Doesn't Start**
   - Verify start command points to correct file
   - Check that port is set correctly (Render provides PORT env variable)
   - Review application logs

3. **Static Files Not Loading**
   - Ensure Vite build outputs to correct directory
   - Check that server serves static files properly

### Port Configuration
Make sure your server listens on the PORT environment variable:
```javascript
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
```

## Final Steps

1. Test your deployed website
2. Share the Render URL: `https://your-app-name.onrender.com`
3. Optional: Set up monitoring and alerts

## Cost
- Free tier includes:
  - 750 hours per month
  - Automatic SSL certificates
  - Custom domains
  - GitHub integration

Your horror game website should now be live and accessible worldwide!
