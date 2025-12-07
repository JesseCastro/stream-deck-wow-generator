#!/bin/bash

# WoW Stream Deck Generator v2.0 - Startup Script
# This script builds and starts the Docker containers

set -e

echo "
╔══════════════════════════════════════════════════════════════╗
║        🎮 WoW Stream Deck Generator v2.0                     ║
║        Building and starting containers...                    ║
╚══════════════════════════════════════════════════════════════╝
"

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check for Docker Compose
if ! command -v docker compose &> /dev/null; then
    echo "❌ Docker Compose is not available."
    echo "   Make sure you have Docker Desktop or docker-compose installed."
    exit 1
fi

# Check if icons directory exists
if [ ! -d "Assets/Icons" ]; then
    echo "⚠️  Icons directory not found. Downloading icons..."
    mkdir -p Assets/Icons
    echo "   Note: Icons will need to be added manually or via the icon download script."
fi

echo "📦 Building containers (this may take a few minutes on first run)..."
docker compose build

echo "🚀 Starting services..."
docker compose up -d

echo "
╔══════════════════════════════════════════════════════════════╗
║  ✅ Ready!                                                   ║
║                                                               ║
║  Open your browser to: http://localhost:3000                  ║
║                                                               ║
║  To stop: docker compose down                                 ║
║  To view logs: docker compose logs -f                         ║
╚══════════════════════════════════════════════════════════════╝
"
