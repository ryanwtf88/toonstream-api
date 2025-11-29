<div align="center">

# ToonStream API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Hono](https://img.shields.io/badge/Hono-4.0+-orange?logo=hono)](https://hono.dev)
[![GitHub Stars](https://img.shields.io/github/stars/ryanwtf88/toonstream-api?style=social)](https://github.com/ryanwtf88/toonstream-api)

**A comprehensive RESTful API for scraping anime content from toonstream.love**
**Optimized for Cloudflare Workers**

[Features](#features) • [Installation](#installation) • [API Endpoints](#api-endpoints) • [Deployment](#deployment)

</div>

---

## Features

### Core Functionality
- **Home Page Data** - Latest series, movies, and schedules
- **Search Engine** - Full-text search with pagination
- **Anime Details** - Comprehensive information and metadata
- **Episode Streaming** - Extract video sources and links
- **Category Browsing** - Filter by genre, language, type
- **Release Schedule** - Weekly anime release calendar
- **Embed Player** - Optimized, ad-free player embed

### Technical Features
- **Serverless** - Built for Cloudflare Workers
- **High Performance** - Edge caching system
- **Error Handling** - Comprehensive error responses
- **API Documentation** - Interactive Swagger UI
- **Cloudflare Bypass** - Axios + cookie jar support

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (Cloudflare Workers CLI)

### Quick Start

```bash
# Clone repository
git clone https://github.com/ryanwtf88/toonstream-api.git
cd toonstream-api

# Install dependencies
npm install

# Start development server
npm run dev
```

The server will be running at `http://localhost:8787`

---

## API Endpoints

### Base URL
```
https://your-worker.workers.dev
```

### Available Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/` | GET | API information | - |
| `/api/home` | GET | Homepage data | - |
| `/api/search` | GET | Search anime | `keyword`, `page` |
| `/api/anime/:id` | GET | Anime details | `id` |
| `/api/episode/:id` | GET | Episode streaming | `id` |
| `/api/categories` | GET | All categories | - |
| `/embed/:id` | GET | Optimized Player | `id` |

---

## Deployment

### Cloudflare Workers

This project is designed to be deployed to Cloudflare Workers.

1. **Login to Cloudflare**
   ```bash
   npx wrangler login
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

That's it! Your API will be deployed to your Cloudflare Workers subdomain.

---

## Configuration

Configuration is handled in `config.js` and `wrangler.toml`.

### wrangler.toml
```toml
name = "toonstream-api"
main = "src/worker.js"
compatibility_date = "2024-11-29"
compatibility_flags = ["nodejs_compat"]
```

---

## Project Structure

```
toonstream-api/
├── config.js              # Configuration
├── src/
│   ├── worker.js          # Cloudflare Worker Entry Point
│   ├── app.js            # Main Hono Application
│   ├── routes/           # API Routes
│   ├── scrapers/         # Web Scrapers
│   └── utils/
│       ├── scraper.js    # Scraping Utilities
│       └── cache.js      # Worker-Compatible Cache
├── package.json
├── wrangler.toml         # Cloudflare Configuration
└── README.md
```

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white) | Edge Platform |
| ![Hono](https://img.shields.io/badge/Hono-orange?logo=hono&logoColor=white) | Web Framework |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) | HTTP Client |
| ![Cheerio](https://img.shields.io/badge/Cheerio-E88C00?logoColor=white) | HTML Parsing |

---

## Disclaimer

> **Warning**: This API is for educational purposes only. Web scraping may violate the website's Terms of Service. Use responsibly and at your own risk.

---

<div align="center">

**Made with ❤️ for the anime community**

[![GitHub](https://img.shields.io/badge/GitHub-ryanwtf88-black?logo=github)](https://github.com/ryanwtf88)

</div>
