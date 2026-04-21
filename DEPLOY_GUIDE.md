# RankAgile - Railway Deployment Quick Start

## ✅ What Has Been Fixed

1. **UTF-8 BOM Issue** - Removed the BOM character (`\ufeff`) from `package.json` that was causing Railpack to fail
2. **Docker Configuration** - Created optimized multi-stage Dockerfile for production
3. **Port Configuration** - Updated default port from 3001 to 8000 (Railway standard)
4. **Health Check** - Added Docker health check for Railway monitoring
5. **Startup Script** - Created `start.sh` for flexible initialization
6. **Environment Configuration** - Added `.env.example` and `railway.json`

## 🚀 Deploy to Railway in 3 Steps

### Step 1: Push Changes to GitHub
```bash
git add .
git commit -m "Configure for Railway deployment with Docker"
git push origin main
```

### Step 2: Connect to Railway
- Go to https://railway.app
- Click "New Project" 
- Select "Deploy from GitHub repo"
- Choose your `RANKAGILE-NUEVOP` repository
- Click "Deploy"

### Step 3: Configure (Optional)
In Railway dashboard → Variables tab:
```
NODE_ENV=production
PORT=8000
```

That's it! Railway will:
- ✅ Detect the Dockerfile
- ✅ Install dependencies automatically
- ✅ Build the frontend
- ✅ Start the API server
- ✅ Serve both API and frontend

## 🔍 Deployment Files Reference

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build for production-optimized image |
| `docker-compose.yml` | Local testing with Docker |
| `.dockerignore` | Exclude files from Docker build |
| `railway.json` | Railway-specific configuration |
| `.env.example` | Template for environment variables |
| `RAILWAY_DEPLOYMENT.md` | Detailed deployment guide |
| `start.sh` | Application startup script |

## 📊 Architecture

```
Railway Container
├── Node.js Runtime (18+)
├── API Server (Express on port 8000)
│   ├── /api/health → Health check endpoint
│   ├── /api/contact → Contact routes
│   └── Static Frontend (Vue/Vite build)
└── Health Check (every 30s)
```

## 🛠️ Local Testing Before Deploy

```bash
# Option 1: Docker
docker build -t rankagile:latest .
docker run -p 8000:8000 rankagile:latest

# Option 2: Docker Compose
docker-compose up

# Option 3: Direct Node
npm install:all
npm run build
npm start
```

Visit: http://localhost:8000

## 📝 Environment Variables

Key variables for Railway:

```env
NODE_ENV=production      # Set automatically
PORT=8000               # Railway uses this
```

Optional (if your app needs them):
```env
DATABASE_URL=           # Your database connection
API_KEY=                # Your API keys
CORS_ORIGIN=            # Your domain
```

## ✨ Key Improvements Made

1. **Fixed BOM Issue**: package.json now has valid UTF-8 encoding
2. **Production-Ready Dockerfile**: Multi-stage build reduces image size
3. **Health Checks**: Railway can monitor and restart the app if needed
4. **Security**: Non-root user in Docker (nodejs:1001)
5. **Caching**: Frontend cache optimized for production
6. **Port Standardization**: Aligned to Railway's expectations (8000)

## 🐛 Troubleshooting

**Build Still Fails?**
- Check Railway logs for specific errors
- Verify all package.json files are valid JSON
- Ensure frontend/package.json has a build script

**App Won't Start?**
- Check `/api/app.js` exists and is valid
- Verify database connections in env variables
- Check the `/health` endpoint is accessible

**Frontend Not Loading?**
- Run `npm run build` locally to verify
- Check `frontend/dist/index.html` exists
- Verify static file serving in Express

## 📚 Resources

- Railway Docs: https://docs.railway.app
- Docker Docs: https://docs.docker.com
- Express.js Docs: https://expressjs.com
- Vite Docs: https://vitejs.dev

## ✅ Pre-Deployment Checklist

- [x] Removed UTF-8 BOM from package.json
- [x] Created Dockerfile for production builds
- [x] Set correct default port (8000)
- [x] Added health check endpoint
- [x] Created environment variable template
- [x] Configured startup script
- [ ] Test deployment locally with Docker
- [ ] Push changes to GitHub
- [ ] Connect Railway to GitHub repo
- [ ] Monitor first deployment in Railway dashboard

Good luck with your deployment! 🎉
