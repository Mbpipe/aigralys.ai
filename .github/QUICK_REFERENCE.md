# Quick Reference - Safe Development

## 🚀 Starting a New Change

```bash
# For root site (aigralys.ai)
git checkout dev-main
git pull origin dev-main

# For Dignitas site (aigralys.ai/dignitas)
git checkout dev-dignitas
git pull origin dev-dignitas

# Make your changes...
```

## 🧪 Testing Locally

```bash
# Development server (hot reload)
npm run dev

# Production build test
npm run build
npx serve out
```

## ✅ Deploying to Production

```bash
# After testing, merge to production
git add .
git commit -m "your commit message"
git push origin dev-main  # or dev-dignitas

# Then merge to production
git checkout main  # or dignitas
git merge dev-main  # or dev-dignitas
git push origin main  # or dignitas
```

## 🔄 Emergency Rollback

```bash
git checkout main  # or dignitas
git reset --hard backup-dignitas-2026-02-07
git push --force origin main  # or dignitas
```

## 💾 Create Backup Before Big Changes

```bash
git tag -a backup-$(date +%Y-%m-%d) -m "Backup description"
git push origin --tags
```

## 📊 Monitor Deployment

GitHub Actions: https://github.com/Mbpipe/aigralys.ai/actions

## ⚠️ NEVER DO THIS

- ❌ Push directly to `main` or `dignitas`
- ❌ Skip testing locally
- ❌ Delete backup tags
