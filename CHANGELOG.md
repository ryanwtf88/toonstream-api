# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-29

### Added
- Initial release
- Cloudflare Workers support
- Home page data endpoint
- Search functionality with pagination
- Anime details with related content
- Episode streaming links
- Category browsing (genre, language, type)
- Weekly release schedule
- Optimized embed player with ad blocking
- Random movie/series endpoints
- Latest movies/series endpoints
- Interactive Swagger UI documentation
- Comprehensive API documentation

### Changed
- Migrated from Vercel to Cloudflare Workers
- Replaced `node-cache` with custom `SimpleCache` for Workers compatibility
- Removed `hono-rate-limiter` (using Cloudflare edge rate limiting)

### Removed
- Vercel deployment configuration
- Docker support
- Pterodactyl deployment files

### Fixed
- Session/cookie handling for Cloudflare bypass
- Episode and season extraction logic
- Schedule time parsing

### Security
- Removed sensitive account IDs from repository
- Added placeholder configuration values
