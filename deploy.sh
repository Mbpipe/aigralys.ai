#!/bin/bash

# Script de deploy para GitHub Pages
# Uso: ./deploy.sh "mensaje del commit"

set -e

echo "🔨 Construyendo sitio..."
npm run build

echo "📦 Copiando archivos a la raíz..."
cp -r out/* .

echo "📝 Agregando cambios a git..."
git add .

if [ -z "$1" ]; then
  COMMIT_MSG="Update site"
else
  COMMIT_MSG="$1"
fi

echo "💾 Haciendo commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "🚀 Pusheando a GitHub..."
git push origin main

echo "✅ Deploy completado! El sitio se actualizará en 2-5 minutos."
echo "🌐 https://aigralys.ai"

