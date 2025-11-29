# Contributing to ToonStream API

Thank you for considering contributing to ToonStream API! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (Node.js version, OS, etc.)

### Suggesting Features

Feature requests are welcome! Please create an issue with:
- A clear description of the feature
- Use cases and benefits
- Any implementation ideas you have

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/ryanwtf88/toonstream-api.git
   cd toonstream-api
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   # Test the affected endpoints
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes clearly

## Code Style

- Use ES6+ features
- Use async/await for asynchronous code
- Keep functions small and focused
- Use meaningful variable names
- Add JSDoc comments for functions

## Project Structure

```
src/
├── routes/      # API route handlers
├── scrapers/    # Web scraping logic
└── utils/       # Utility functions
```

## Testing

Before submitting a PR:
1. Test all affected endpoints
2. Ensure no breaking changes
3. Verify error handling works

## Questions?

Feel free to create an issue for any questions or clarifications.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

Thank you for contributing!
