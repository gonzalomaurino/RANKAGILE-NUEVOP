# Railway Deployment Guide for RankAgile

## Prerequisites

- Railway account (https://railway.app)
- GitHub repository with this project
- Docker knowledge (optional - Railway handles it)

## Deployment Steps

### Option 1: Deploy Using Railway Dashboard (Recommended)

1. **Connect Your GitHub Repository**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your RankAgile repository
   - Grant Railway access to your GitHub account

2. **Configure Environment Variables**
   - In Railway dashboard, go to Variables
   - Add any required environment variables:
     ```
     NODE_ENV=production
     PORT=8000
     ```

3. **Deploy**
   - Railway automatically detects the Dockerfile
   - Click "Deploy"
   - Railway builds and deploys your app

### Option 2: Deploy Using Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project
railway link

# Deploy
railway up
```

## Configuration Files

The following files are configured for Railway deployment:

- **Dockerfile**: Multi-stage build for production optimization
- **railway.json**: Railway-specific configuration
- **.dockerignore**: Excludes unnecessary files from Docker build
- **start.sh**: Startup script for the application
- **docker-compose.yml**: Local development/testing configuration

## Port Configuration

- The application runs on port **8000** by default
- Railway automatically assigns a public URL
- PORT environment variable can override this

## Frontend Build

The Dockerfile automatically:
1. Installs all dependencies (root, API, frontend)
2. Builds the frontend with Vite
3. Serves the built frontend from the API server
4. Copies only production dependencies to final image

## Health Check

The Docker image includes a health check that:
- Runs every 30 seconds
- Checks the `/health` endpoint
- Allows 40 seconds for startup
- Retries up to 3 times

## Environment Variables

Essential variables for production:

```env
NODE_ENV=production
PORT=8000
```

Optional variables (if your app uses them):
```env
DATABASE_URL=your_database_url
API_KEY=your_api_key
CORS_ORIGIN=your_domain
```

## Troubleshooting

### Build Fails
- Check that all dependencies are specified in package.json files
- Verify Node.js version compatibility (requires >=18.0.0)

### App Crashes After Deploy
- Check logs in Railway dashboard
- Verify environment variables are set correctly
- Ensure PORT environment variable is respected

### Frontend Not Loading
- Verify `npm run build` works locally
- Check that frontend/dist directory is created
- Ensure frontend/package.json is correct

## Local Testing with Docker

Test your deployment locally:

```bash
# Build Docker image
docker build -t rankagile:latest .

# Run container
docker run -p 8000:8000 rankagile:latest

# Access at http://localhost:8000
```

Or use docker-compose:

```bash
# Production setup
docker-compose up

# Development setup (if Dockerfile.dev exists)
docker-compose --profile dev up
```

## Deployment Checklist

- [ ] Remove .env file from Git (use .env.example instead)
- [ ] Set environment variables in Railway dashboard
- [ ] Verify package.json has correct Node version
- [ ] Test locally with Docker first
- [ ] Check that api/app.js starts without errors
- [ ] Confirm frontend builds successfully
- [ ] Set up domain/custom URL in Railway settings
- [ ] Configure any required database connections
- [ ] Monitor logs after first deployment

## Support

For Railway-specific issues: https://docs.railway.app
For app-specific issues: Check the logs in Railway dashboard under "Deployments"
