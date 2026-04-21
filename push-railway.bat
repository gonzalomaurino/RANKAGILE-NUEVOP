@echo off
cd /d "%~dp0"

echo.
echo ========================================
echo Pushing RankAgile to GitHub for Railway
echo ========================================
echo.

echo [1/4] Checking git status...
git status
echo.

echo [2/4] Adding all files...
git add .
echo     ✅ Files staged

echo.
echo [3/4] Creating commit...
git commit -m "Configure for Railway deployment with Docker - Fix UTF-8 BOM, add Dockerfile, health checks, and documentation"
echo     ✅ Commit created

echo.
echo [4/4] Pushing to GitHub...
git push origin main
echo     ✅ Pushed successfully

echo.
echo ========================================
echo ✨ Push complete!
echo 
echo Next steps:
echo 1. Go to https://railway.app
echo 2. New Project → Deploy from GitHub
echo 3. Select RANKAGILE-NUEVOP repository
echo 4. Click Deploy
echo ========================================
echo.
pause
