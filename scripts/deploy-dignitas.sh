#!/bin/bash
set -e

echo "🎩 Deploying Dignitas to aigralys.ai/dignitas"
echo ""

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"
echo ""

# Clean
rm -rf .deploy-temp
mkdir .deploy-temp

# Build main site (Aigralys)
echo "📦 Building Aigralys (main site)..."
git checkout main
npm ci --cache /tmp/npm-cache
npm run build
cp -r out .deploy-temp/root-site
echo "✓ Aigralys built"
echo ""

# Build Dignitas
echo "🎩 Building Dignitas..."
git checkout dignitas  
npm ci --cache /tmp/npm-cache
npm run build
mkdir -p .deploy-temp/root-site/dignitas
cp -r out/* .deploy-temp/root-site/dignitas/
echo "✓ Dignitas built"
echo ""

# Deploy combined
echo "🚀 Deploying combined site..."
cd .deploy-temp/root-site

git init
git add .
git commit -m "Deploy: Aigralys (root) + Dignitas (/dignitas) - $(date)"

git push -f https://github.com/Mbpipe/aigralys.ai.git HEAD:gh-pages

cd ../..
rm -rf .deploy-temp

git checkout $CURRENT_BRANCH

echo ""
echo "✅ Deployment complete!"
echo ""
echo "URLs:"
echo "  • https://aigralys.ai"
echo "  • https://aigralys.ai/dignitas"
echo ""
echo "Wait 2-3 minutes for GitHub Pages to update."
