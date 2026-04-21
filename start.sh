#!/bin/bash
set -e

echo "Starting RankAgile application..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing root dependencies..."
  npm ci
fi

if [ ! -d "api/node_modules" ]; then
  echo "Installing API dependencies..."
  cd api && npm ci && cd ..
fi

# Build frontend if not already built
if [ ! -d "frontend/dist" ]; then
  echo "Building frontend..."
  if [ ! -d "frontend/node_modules" ]; then
    cd frontend && npm ci && cd ..
  fi
  npm run build
fi

# Start the API server
echo "Starting API server..."
exec node api/app.js
