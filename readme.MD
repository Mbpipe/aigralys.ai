# Aigralys - IA Agéntica para ecosistemas complejos

Sitio web corporativo de Aigralys, construido con Next.js 14, TypeScript, TailwindCSS y Framer Motion.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Animaciones**: Framer Motion
- **Internacionalización**: Sistema i18n personalizado (ES/EN)
- **Deployment**: Configurado para exportación estática (Netlify/Vercel)

## ✨ Características

### 🌐 Multilenguaje
- **Español** (por defecto)
- **Inglés**
- Cambio de idioma en tiempo real
- Persistencia en localStorage

### 📱 Diseño Responsive
- Mobile-first approach
- Breakpoints optimizados para todos los dispositivos
- Menú móvil hamburguesa
- Imágenes optimizadas con Next.js Image

### 🎨 Diseño Moderno
- Modo oscuro por defecto
- Glassmorphism effects
- Gradientes sutiles azul-cian
- Animaciones suaves con Framer Motion
- Scroll-triggered animations
- Microinteracciones al hover

### 📧 Formulario de Contacto
- Validación de campos
- Estados de envío (loading, success, error)
- Diseño glassmorphic
- Responsive

## 🎨 Paleta de Colores

- **Grafito profundo**: `#1C1C1E` - Background principal
- **Azul eléctrico**: `#0A84FF` - Acentos y CTAs
- **Cian suave**: `#5DE1E6` - Gradientes y highlights
- **Blanco humo**: `#F7F8FA` - Textos principales

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción estática
npm start
```

El servidor de desarrollo estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
aigralys.ai/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Navegación con logo y selector de idioma
│   │   ├── Hero.tsx              # Hero principal con animaciones
│   │   ├── Consultoria.tsx       # Sección consultoría
│   │   ├── Workshops.tsx         # Sección workshops
│   │   ├── CasosSectoriales.tsx  # Casos con imágenes
│   │   ├── Filosofia.tsx         # Quote principal
│   │   ├── Contact.tsx           # Formulario de contacto
│   │   └── Footer.tsx            # Footer con logo
│   ├── i18n/
│   │   ├── translations.ts       # Traducciones ES/EN
│   │   └── LanguageContext.tsx   # Context API para idiomas
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página home
├── public/
│   └── images/
│       ├── logo.png              # Logo Aigralys
│       ├── Scenario1.png         # Agro
│       ├── Scenario2.png         # Finanzas
│       ├── Scenario3.png         # Turismo
│       └── Scenario4.png         # Manufactura
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎯 Secciones del Sitio

1. **Hero**: Headline principal con animaciones de partículas y CTAs
2. **Consultoría**: 4 servicios (Gap Analysis, Diseño, Escalamiento, Enablement)
3. **Workshops**: 2 niveles (C-Level Strategy y Hands-On Técnico)
4. **Casos Sectoriales**: 4 industrias con imágenes (Agro, Finanzas, Turismo, Manufactura)
5. **Filosofía**: Declaración de valores y enfoque
6. **Contacto**: Formulario funcional con validación
7. **Footer**: Links, logo y redes sociales

## 🌐 Internacionalización

El sistema de i18n está implementado con React Context API:

```typescript
// Uso en componentes
import { useLanguage } from '../i18n/LanguageContext'

function Component() {
  const { language, setLanguage, t } = useLanguage()
  
  return (
    <h1>{t.hero.title}</h1>
  )
}
```

### Agregar nuevas traducciones:

Editar `app/i18n/translations.ts`:

```typescript
export const translations = {
  es: {
    newSection: {
      title: 'Título en Español',
    }
  },
  en: {
    newSection: {
      title: 'Title in English',
    }
  }
}
```

## 🌐 Deploy

### Build para producción:

```bash
npm run build
```

Esto generará una carpeta `/out` con el sitio estático listo para deploy.

### Deploy en Netlify:

1. Conecta tu repositorio GitHub
2. Build command: `npm run build`
3. Publish directory: `out`

### Deploy en Vercel:

```bash
vercel
```

O conecta automáticamente desde GitHub.

## 📝 SEO

El sitio incluye:
- Meta tags optimizados (ES/EN)
- Open Graph para redes sociales
- Twitter Cards
- Sitemap automático (Next.js)
- Robots.txt

## 🎨 Personalización

### Colores:

Editar `tailwind.config.js`:

```javascript
colors: {
  grafito: '#1C1C1E',
  azul: '#0A84FF',
  cian: '#5DE1E6',
  humo: '#F7F8FA',
}
```

### Tipografías:

Editar `app/globals.css` para cambiar las fuentes de Google Fonts.

## 📱 Responsividad

El sitio utiliza breakpoints de Tailwind:
- **sm**: 640px (móviles grandes)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)

## 📧 Contacto

- **LinkedIn**: [Gonzalo Abadía](https://www.linkedin.com/in/gonzalo-abadia/)
- **Web**: [www.aigralys.ai](https://www.aigralys.ai)

## 📄 Licencia

© 2025 Aigralys – IA Agéntica para ecosistemas complejos

---

**Desarrollado con ❤️ usando Next.js, TypeScript y TailwindCSS**
