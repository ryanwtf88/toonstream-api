# Vercel Deployment Guide

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ryanwtf88/toonstream-api)

Click the button above to deploy instantly!

## Manual Deployment

### Option 1: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `ryanwtf88/toonstream-api`
4. Click "Deploy"
5. Done! Your API will be live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /root/toonstream-api
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **toonstream-api**
   - In which directory is your code located? **.**
   - Want to override settings? **N**

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Environment Variables (Optional)

No environment variables are required! The API uses `config.js` for configuration.

## Testing Your Deployment

Once deployed, test your API:

```bash
# Replace with your Vercel URL
curl https://your-project.vercel.app/

# Test search
curl "https://your-project.vercel.app/api/search?keyword=naruto"

# Test anime details
curl https://your-project.vercel.app/api/anime/bleach-dub
```

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Monitoring

- **Analytics**: Available in Vercel dashboard
- **Logs**: Real-time logs in Vercel dashboard
- **Performance**: Automatic monitoring

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18 or higher
- Check that all dependencies are in `package.json`

### API Returns Errors
- Check Vercel function logs
- Verify the API is accessible at the root URL

### Rate Limiting
- Vercel has function execution limits
- Consider upgrading plan for high traffic

## What's Deployed

✅ **All API Endpoints**:
- `/api/home` - Homepage data
- `/api/search` - Search functionality
- `/api/anime/:id` - Anime details
- `/api/episode/:id` - Episode streaming
- `/api/categories` - All categories
- `/api/schedule` - Weekly schedule

✅ **Features**:
- Caching (in-memory)
- Rate limiting
- Error handling
- Swagger documentation at `/docs`

## Performance

- ⚡ **Cold Start**: ~1-2 seconds
- 🚀 **Warm Response**: ~100-500ms
- 🔄 **Caching**: Reduces load on toonstream.love
- 📊 **Serverless**: Scales automatically

## Limits

Vercel Free Tier:
- 100GB bandwidth/month
- 100 hours function execution/month
- 10 second function timeout

For higher limits, upgrade to Pro plan.

## Support

If you encounter issues:
1. Check Vercel function logs
2. Open an issue on GitHub
3. Review Vercel documentation

## Next Steps

After deployment:
1. ✅ Test all endpoints
2. ✅ Set up custom domain (optional)
3. ✅ Monitor usage in Vercel dashboard
4. ✅ Share your API URL!

Your API is now live and ready to use! 🎉
