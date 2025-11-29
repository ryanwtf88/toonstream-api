import { Hono } from 'hono';
import {
    scrapeCategory,
    scrapeCategories,
    scrapeByLanguage,
    scrapeMovies,
    scrapeSeries,
    scrapeLatestMovies,
    scrapeLatestSeries,
    scrapeRandomMovie,
    scrapeRandomSeries
} from '../scrapers/categories.js';

const categories = new Hono();

/**
 * GET /api/categories
 * Get all available categories
 */
categories.get('/', async (c) => {
    try {
        const data = await scrapeCategories();
        return c.json(data);
    } catch (error) {
        console.error('Categories list route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/:name?page={page}
 * Get anime by category
 */
categories.get('/:name', async (c) => {
    try {
        const name = c.req.param('name');
        const page = parseInt(c.req.query('page')) || 1;

        if (!name) {
            return c.json({
                success: false,
                error: 'Category name is required'
            }, 400);
        }

        const data = await scrapeCategory(name, page);
        return c.json(data);
    } catch (error) {
        console.error('Category route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/language/:lang?page={page}
 * Get anime by language
 */
categories.get('/language/:lang', async (c) => {
    try {
        const lang = c.req.param('lang');
        const page = parseInt(c.req.query('page')) || 1;

        if (!lang) {
            return c.json({
                success: false,
                error: 'Language is required'
            }, 400);
        }

        const data = await scrapeByLanguage(lang, page);
        return c.json(data);
    } catch (error) {
        console.error('Language route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/type/movies?page={page}
 * Get anime movies
 */
categories.get('/type/movies', async (c) => {
    try {
        const page = parseInt(c.req.query('page')) || 1;
        const data = await scrapeMovies(page);
        return c.json(data);
    } catch (error) {
        console.error('Movies route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/type/series?page={page}
 * Get anime series
 */
categories.get('/type/series', async (c) => {
    try {
        const page = parseInt(c.req.query('page')) || 1;
        const data = await scrapeSeries(page);
        return c.json(data);
    } catch (error) {
        console.error('Series route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

export default categories;

/**
 * GET /api/category/latest/movies?page={page}
 * Get latest anime movies
 */
categories.get('/latest/movies', async (c) => {
    try {
        const page = parseInt(c.req.query('page')) || 1;
        const data = await scrapeLatestMovies(page);
        return c.json(data);
    } catch (error) {
        console.error('Latest movies route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/latest/series?page={page}
 * Get latest anime series
 */
categories.get('/latest/series', async (c) => {
    try {
        const page = parseInt(c.req.query('page')) || 1;
        const data = await scrapeLatestSeries(page);
        return c.json(data);
    } catch (error) {
        console.error('Latest series route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/random/movie
 * Get random anime movie
 */
categories.get('/random/movie', async (c) => {
    try {
        const data = await scrapeRandomMovie();
        return c.json(data);
    } catch (error) {
        console.error('Random movie route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});

/**
 * GET /api/category/random/series
 * Get random anime series
 */
categories.get('/random/series', async (c) => {
    try {
        const data = await scrapeRandomSeries();
        return c.json(data);
    } catch (error) {
        console.error('Random series route error:', error.message);
        return c.json({
            success: false,
            error: error.message
        }, 500);
    }
});
