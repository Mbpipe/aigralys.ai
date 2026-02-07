# Development Strategy for Dignitas

## Overview
This strategy allows you to make changes safely without affecting the production sites at `aigralys.ai` and `aigralys.ai/dignitas`.

## Branch Structure

### Production Branches (Protected)
- `main` → Deploys to `aigralys.ai` (root site)
- `dignitas` → Deploys to `aigralys.ai/dignitas` (subdirectory)

**Rule: Never push directly to these branches. Always merge from development branches.**

### Development Branches
- `dev-main` → Development for root site changes
- `dev-dignitas` → Development for Dignitas subdirectory changes
- `feature/*` → Individual feature branches (e.g., `feature/new-product`, `feature/update-pricing`)

## Workflow

### 1. Making Changes (Safe Development)

```bash
# For root site changes:
git checkout main
git pull origin main
git checkout -b dev-main

# For Dignitas changes:
git checkout dignitas
git pull origin dignitas
git checkout -b dev-dignitas

# For specific features:
git checkout main  # or dignitas
git checkout -b feature/your-feature-name
```

### 2. Testing Changes Locally

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Visit http://localhost:3000 to preview
```

### 3. Building and Testing Production Build

```bash
# Build static export
npm run build

# Test the production build locally
npx serve out
# Visit http://localhost:3000 to test
```

### 4. Deploying to Production (When Ready)

#### Option A: Direct Merge (Simple)
```bash
# After testing, merge to production branch
git checkout main  # or dignitas
git merge dev-main  # or dev-dignitas or feature/name
git push origin main  # or dignitas

# GitHub Actions will automatically deploy
```

#### Option B: Pull Request (Recommended)
```bash
# Push your development branch
git push origin dev-main  # or dev-dignitas or feature/name

# Create Pull Request on GitHub:
# 1. Go to https://github.com/Mbpipe/aigralys.ai/pulls
# 2. Click "New Pull Request"
# 3. Compare: main ← dev-main (or dignitas ← dev-dignitas)
# 4. Review changes, then merge when ready
```

## Preview Environment Strategy

### Option 1: Using GitHub Pages with a Staging Branch

Create a `staging` branch that deploys to a preview URL:

1. Modify `.github/workflows/deploy-both.yml` to add a staging workflow
2. Staging deploys to `mbpipe.github.io/aigralys.ai-staging`
3. Test there before merging to `main` or `dignitas`

### Option 2: Local Testing Only

- Always test locally before pushing to production branches
- Use `npm run dev` for rapid development
- Use `npm run build && npx serve out` to test production build

## Best Practices

### DO ✅
- Always create a new branch for changes
- Test locally before pushing to production
- Use descriptive branch names (`feature/add-lagavulin-photo`, `fix/pricing-update`)
- Commit frequently with clear messages
- Create backups before major changes: `git tag backup-YYYY-MM-DD`

### DON'T ❌
- Never push directly to `main` or `dignitas` without testing
- Don't skip the local build test (`npm run build`)
- Don't make changes in production branches directly
- Don't delete backup tags

## Emergency Rollback

If something breaks in production:

```bash
# Quick rollback to last backup
git checkout main  # or dignitas
git reset --hard backup-dignitas-2026-02-07  # or latest backup tag
git push --force origin main  # or dignitas

# GitHub Actions will redeploy the backup automatically
```

## Directory Structure

```
dignitas-source/
├── main branch         → Production root site (aigralys.ai)
├── dignitas branch     → Production Dignitas site (aigralys.ai/dignitas)
├── dev-main branch     → Development for root site
├── dev-dignitas branch → Development for Dignitas site
└── feature/* branches  → Individual features
```

## Quick Reference Commands

### Start New Feature
```bash
git checkout -b feature/my-feature-name
# Make changes...
git add .
git commit -m "Add my feature"
git push origin feature/my-feature-name
```

### Test Locally
```bash
npm run dev          # Development server
npm run build        # Production build
npx serve out        # Test production build
```

### Deploy to Production
```bash
git checkout main    # or dignitas
git merge feature/my-feature-name
git push origin main # or dignitas
```

### Create Backup
```bash
git tag -a backup-$(date +%Y-%m-%d) -m "Backup before major changes"
git push origin --tags
```

### View All Backups
```bash
git tag -l "backup-*"
```

## Monitoring Deployments

1. **GitHub Actions**: https://github.com/Mbpipe/aigralys.ai/actions
   - Watch for successful/failed builds
   - Check build logs if issues occur

2. **Live Sites**:
   - Root: https://aigralys.ai
   - Dignitas: https://aigralys.ai/dignitas

3. **Deployment Branch**: https://github.com/Mbpipe/aigralys.ai/tree/gh-pages
   - This is where the built files are stored
   - Don't modify this branch directly

## Next Steps

1. Create development branches:
   ```bash
   git checkout -b dev-main
   git push origin dev-main
   
   git checkout dignitas
   git checkout -b dev-dignitas
   git push origin dev-dignitas
   ```

2. Set branch protection rules on GitHub (optional but recommended):
   - Go to Settings → Branches → Add rule
   - Protect `main` and `dignitas` branches
   - Require pull request reviews before merging

3. Always work in development branches from now on!
