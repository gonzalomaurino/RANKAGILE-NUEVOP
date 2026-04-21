# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY api/package*.json ./api/
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm ci
RUN cd api && npm ci
RUN cd frontend && npm ci

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY api/package*.json ./api/

# Install production dependencies only
RUN npm ci --omit=dev
RUN cd api && npm ci --omit=dev

# Copy built frontend
COPY --from=builder /app/frontend/dist ./frontend/dist

# Copy API source
COPY api ./api

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Expose port (Railway will assign dynamically, but we set a default)
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the application
CMD ["node", "api/app.js"]
