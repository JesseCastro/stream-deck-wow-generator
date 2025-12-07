# Server Dockerfile
FROM node:20-alpine

# Create non-root user
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/

# Install server dependencies
WORKDIR /app/server
RUN npm ci --only=production

# Copy source code
WORKDIR /app
COPY src/ ./src/
COPY server/ ./server/

# Create downloads directory
RUN mkdir -p /app/server/downloads && \
    chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

WORKDIR /app/server

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4000/health || exit 1

CMD ["node", "index.js"]
