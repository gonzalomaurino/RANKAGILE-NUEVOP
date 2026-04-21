# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Skip puppeteer chromium download durante npm install (PDF_ENABLED=false por default en Alpine)
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Copy package files
COPY package*.json ./
COPY api/package*.json ./api/
COPY frontend/package*.json ./frontend/

# Install dependencies (omit optional para no traer puppeteer en Alpine)
RUN npm ci
RUN cd api && npm ci --omit=optional
RUN cd frontend && npm ci

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PDF_ENABLED=false

# Copy package files
COPY package*.json ./
COPY api/package*.json ./api/

# Install production dependencies only (sin optional → sin puppeteer)
RUN npm ci --omit=dev
RUN cd api && npm ci --omit=dev --omit=optional

# Copy built frontend
COPY --from=builder /app/frontend/dist ./frontend/dist

# Copy API source
COPY api ./api

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

EXPOSE 8000

# Health check apuntando a la ruta real /api/health
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:'+(process.env.PORT||8000)+'/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["node", "api/app.js"]
