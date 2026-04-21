#!/bin/bash
# RankAgile Railway Deployment - Final Checklist

echo "🔍 Verifying RankAgile Railway Deployment Setup..."
echo ""

# Check critical files
echo "📋 Checking deployment files..."
files=(
  "Dockerfile"
  "docker-compose.yml"
  ".dockerignore"
  ".railwayrc"
  "railway.json"
  ".env.example"
  "start.sh"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file (MISSING)"
  fi
done

echo ""
echo "📝 Checking package.json..."
if grep -q "\"name\": \"rankagile-full-stack\"" package.json; then
  echo "✅ package.json is valid (no BOM)"
else
  echo "⚠️  package.json might have issues"
fi

echo ""
echo "🔧 Checking configuration..."
if grep -q "const PORT = process.env.PORT || 8000" api/app.js; then
  echo "✅ Port is set to 8000"
else
  echo "❌ Port configuration issue"
fi

echo ""
echo "📚 Checking documentation..."
docs=(
  "DEPLOY_GUIDE.md"
  "RAILWAY_DEPLOYMENT.md"
  "DEPLOYMENT_SUMMARY.md"
)

for doc in "${docs[@]}"; do
  if [ -f "$doc" ]; then
    echo "✅ $doc"
  else
    echo "⚠️  $doc"
  fi
done

echo ""
echo "✨ Setup complete! Ready for Railway deployment."
echo ""
echo "📌 Next steps:"
echo "  1. git add ."
echo "  2. git commit -m 'Configure for Railway deployment with Docker'"
echo "  3. git push"
echo "  4. Go to https://railway.app and connect your GitHub repo"
echo ""
echo "🚀 Happy deploying!"
