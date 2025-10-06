/* ========================================
 Aigralys.ai - Bilingual Language Toggle
 ES/EN with localStorage persistence
======================================== */

'use strict';

const defaultLang = localStorage.getItem('aigralys-lang') || 'es';
let currentLang = defaultLang;

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  const toggleButtons = document.querySelectorAll('[data-lang-toggle]');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const selectedLang = e.target.getAttribute('data-lang-toggle');
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem('aigralys-lang', currentLang);
        applyLanguage(currentLang);
        highlightActiveLang();
      }
    });
  });

  highlightActiveLang();
});

function applyLanguage(lang) {
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[key] ? translations[key][lang] : null;

    if (!translation) return;

    // Soporta forzar atributo con data-i18n-attr="placeholder" (opcional)
    const forceAttr = el.getAttribute('data-i18n-attr');
    if (forceAttr === 'placeholder') {
      el.setAttribute('placeholder', translation);
      return;
    }

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  document.documentElement.lang = lang;
}

function highlightActiveLang() {
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    const isActive = btn.getAttribute('data-lang-toggle') === currentLang;
    btn.classList.toggle('active-lang', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

// ===============================
// Complete Translation Dictionary
// ===============================
const translations = {
  // Navigation (añadí claves usadas en tus menús)
  'nav.home':        { es: 'Inicio',         en: 'Home' },
  'nav.how':         { es: 'Cómo funciona',  en: 'How it works' },
  'nav.industries':  { es: 'Industrias',     en: 'Industries' },
  'nav.consulting':  { es: 'Consultoría',    en: 'Consulting' },
  'nav.workshops':   { es: 'Workshops',      en: 'Workshops' },
  'nav.scenarios':   { es: 'Escenarios',     en: 'Scenarios' },
  'nav.contact':     { es: 'Contacto',       en: 'Contact' },

  // Hero Section (Index)
  'hero.title':       { es: 'Agentes de IA para ecosistemas digitales complejos', en: 'AI Agents for Complex Digital Ecosystems' },
  'hero.subtitle':    { es: 'Diseñamos e implementamos sistemas Agentic AI que transforman industrias globales', en: 'We design and implement Agentic AI systems that transform global industries' },
  'hero.ctaPrimary':  { es: 'Explorar soluciones', en: 'Explore solutions' },
  'hero.ctaSecondary':{ es: 'Conectar con nosotros', en: 'Get in touch' },

  // About Section (si la usás)
  'about.title':          { es: 'Quiénes somos', en: 'Who We Are' },
  'about.intro':          { es: 'Aigralys.ai es una startup global especializada en el diseño e implementación de sistemas de Agentes de IA para ecosistemas digitales complejos. Transformamos desafíos industriales en oportunidades mediante inteligencia artificial agéntica.', en: 'Aigralys.ai is a global startup specialized in designing and implementing AI Agent systems for complex digital ecosystems. We transform industrial challenges into opportunities through agentic artificial intelligence.' },
  'about.pillar1.title':  { es: 'Innovación', en: 'Innovation' },
  'about.pillar1.desc':   { es: 'Desarrollamos soluciones cutting-edge que anticipan las necesidades del futuro digital', en: 'We develop cutting-edge solutions that anticipate the needs of the digital future' },
  'about.pillar2.title':  { es: 'Adaptabilidad', en: 'Adaptability' },
  'about.pillar2.desc':   { es: 'Sistemas agnósticos que se integran perfectamente en cualquier infraestructura existente', en: 'Agnostic systems that integrate seamlessly into any existing infrastructure' },
  'about.pillar3.title':  { es: 'Impacto Global', en: 'Global Impact' },
  'about.pillar3.desc':   { es: 'Presencia internacional con soluciones escalables para múltiples industrias', en: 'International presence with scalable solutions for multiple industries' },

  // Solutions Section (si la usás como bloque aparte del index)
  'solutions.title':               { es: 'Soluciones Agentic AI', en: 'Agentic AI Solutions' },
  'solutions.subtitle':            { es: 'Sistemas inteligentes que operan de forma autónoma en entornos complejos', en: 'Intelligent systems that operate autonomously in complex environments' },
  'solutions.scenario1.title':     { es: 'Operaciones de Red', en: 'Network Operations' },
  'solutions.scenario1.desc':      { es: 'Agentes autónomos monitoreando y optimizando infraestructuras de red en tiempo real', en: 'Autonomous agents monitoring and optimizing network infrastructure in real-time' },
  'solutions.scenario2.title':     { es: 'Agricultura Inteligente', en: 'Smart Agriculture' },
  'solutions.scenario2.desc':      { es: 'Sistemas IoT con agentes que gestionan irrigación, nutrición y rendimiento de cultivos', en: 'IoT systems with agents managing irrigation, nutrition and crop yields' },
  'solutions.scenario3.title':     { es: 'Gestión Energética', en: 'Energy Management' },
  'solutions.scenario3.desc':      { es: 'Agentes inteligentes optimizando distribución y consumo energético en tiempo real', en: 'Intelligent agents optimizing energy distribution and consumption in real-time' },
  'solutions.scenario4.title':     { es: 'Retail Inteligente', en: 'Smart Retail' },
  'solutions.scenario4.desc':      { es: 'Optimización de inventarios y experiencia del cliente mediante agentes autónomos', en: 'Inventory optimization and customer experience through autonomous agents' },

  // Industries Section
  'industries.title':              { es: 'Industrias que transformamos', en: 'Industries We Transform' },
  'industries.telecom.title':      { es: 'Telecomunicaciones', en: 'Telecommunications' },
  'industries.telecom.desc':       { es: 'Optimización de redes, prevención de fallos, gestión predictiva', en: 'Network optimization, failure prevention, predictive management' },
  'industries.agriculture.title':  { es: 'Agricultura', en: 'Agriculture' },
  'industries.agriculture.desc':   { es: 'Agricultura de precisión, gestión hídrica, monitoreo de cultivos', en: 'Precision agriculture, water management, crop monitoring' },
  'industries.energy.title':       { es: 'Energía', en: 'Energy' },
  'industries.energy.desc':        { es: 'Smart grids, optimización de consumo, integración de renovables', en: 'Smart grids, consumption optimization, renewable integration' },
  'industries.retail.title':       { es: 'Retail', en: 'Retail' },
  'industries.retail.desc':        { es: 'Gestión de inventario, personalización, logística inteligente', en: 'Inventory management, personalization, smart logistics' },
  'industries.manufacturing.title':{ es: 'Manufactura', en: 'Manufacturing' },
  'industries.manufacturing.desc': { es: 'Mantenimiento predictivo, control de calidad, eficiencia operativa', en: 'Predictive maintenance, quality control, operational efficiency' },
  'industries.logistics.title':    { es: 'Logística', en: 'Logistics' },
  'industries.logistics.desc':     { es: 'Optimización de rutas, gestión de flotas, trazabilidad completa', en: 'Route optimization, fleet management, complete traceability' },

  // Technology Section
  'technology.title':              { es: 'Tecnología Agentic AI', en: 'Agentic AI Technology' },
  'technology.what.title':         { es: '¿Qué son los Agentes de IA?', en: 'What are AI Agents?' },
  'technology.what.desc':          { es: 'Los agentes de IA son sistemas autónomos capaces de percibir su entorno, tomar decisiones y ejecutar acciones para alcanzar objetivos específicos. A diferencia de los sistemas tradicionales, operan con autonomía, aprenden continuamente y se adaptan a condiciones cambiantes.', en: 'AI agents are autonomous systems capable of perceiving their environment, making decisions, and executing actions to achieve specific goals. Unlike traditional systems, they operate with autonomy, learn continuously, and adapt to changing conditions.' },
  'technology.feature1.title':     { es: 'Autonomía', en: 'Autonomy' },
  'technology.feature1.desc':      { es: 'Operación independiente sin intervención humana constante', en: 'Independent operation without constant human intervention' },
  'technology.feature2.title':     { es: 'Reactividad', en: 'Reactivity' },
  'technology.feature2.desc':      { es: 'Respuesta inmediata a cambios en el entorno operativo', en: 'Immediate response to changes in the operating environment' },
  'technology.feature3.title':     { es: 'Proactividad', en: 'Proactivity' },
  'technology.feature3.desc':      { es: 'Anticipación de necesidades y problemas antes de que ocurran', en: 'Anticipation of needs and problems before they occur' },
  'technology.feature4.title':     { es: 'Colaboración', en: 'Collaboration' },
  'technology.feature4.desc':      { es: 'Interacción y coordinación entre múltiples agentes', en: 'Interaction and coordination between multiple agents' },

  // Contact Section
  'contact.title':         { es: 'Conectemos', en: 'Get in Touch' },
  'contact.subtitle':      { es: '¿Listo para transformar tu ecosistema digital con Agentes de IA?', en: 'Ready to transform your digital ecosystem with AI Agents?' },
  'contact.form.name':     { es: 'Nombre', en: 'Name' },
  'contact.form.email':    { es: 'Email', en: 'Email' },
  'contact.form.company':  { es: 'Empresa', en: 'Company' },
  'contact.form.message':  { es: 'Mensaje', en: 'Message' },
  'contact.form.submit':   { es: 'Enviar mensaje', en: 'Send message' },
  'contact.email':         { es: 'Email: contact@aigralys.ai', en: 'Email: contact@aigralys.ai' },
  'contact.location':      { es: 'Presencia global | Remote first', en: 'Global presence | Remote first' },

  // Footer
  'footer.tagline':            { es: 'Agentes de IA para el futuro digital', en: 'AI Agents for the digital future' },
  'footer.services.title':     { es: 'Servicios', en: 'Services' },
  'footer.services.consulting':{ es: 'Consultoría', en: 'Consulting' },
  'footer.services.workshops': { es: 'Workshops', en: 'Workshops' },
  'footer.services.solutions': { es: 'Soluciones', en: 'Solutions' },
  'footer.company.title':      { es: 'Compañía', en: 'Company' },
  'footer.company.about':      { es: 'Nosotros', en: 'About' },
  'footer.company.contact':    { es: 'Contacto', en: 'Contact' },
  'footer.copyright':         { es: '© 2025 Aigralys.ai. Todos los derechos reservados.', en: '© 2025 Aigralys.ai. All rights reserved.' },

  // CONSULTING PAGE (si está en uso)
  'consulting.hero.title':     { es: 'Consultoría Agentic AI', en: 'Agentic AI Consulting' },
  'consulting.hero.subtitle':  { es: 'Transformamos tu visión en sistemas de Agentes de IA operativos y escalables', en: 'We transform your vision into operational and scalable AI Agent systems' },
  // ... (resto de claves de consulting que ya tenías)
  
  // WORKSHOPS PAGE (claves principales)
  'workshops.hero.title':      { es: 'Workshops Agentic AI', en: 'Agentic AI Workshops' },
  'workshops.hero.subtitle':   { es: 'Formación práctica e intensiva en diseño e implementación de sistemas de Agentes de IA', en: 'Practical and intensive training in AI Agent system design and implementation' },
  'workshops.overview.title':  { es: 'Aprendé haciendo', en: 'Learn by Doing' },
  'workshops.overview.intro':  { es: 'Nuestros workshops combinan teoría cutting-edge con ejercicios prácticos hands-on. Diseñados para equipos técnicos, product managers y líderes de transformación digital que quieren dominar la tecnología de Agentes de IA.', en: 'Our workshops combine cutting-edge theory with hands-on practical exercises. Designed for technical teams, product managers, and digital transformation leaders who want to master AI Agent technology.' },
  // ... (resto de claves de workshops que ya tenías)
  
  'workshops.cta.title':       { es: 'Acelerá tu transformación con Agentic AI', en: 'Accelerate your transformation with Agentic AI' },
  'workshops.cta.subtitle':    { es: 'Consultá disponibilidad de workshops públicos o solicitá una sesión in-company', en: 'Check availability of public workshops or request an in-company session' },
  'workshops.cta.button':      { es: 'Solicitar información', en: 'Request information' }
};

// =====================================
// Mobile Menu Toggle (Improved Version)
// =====================================
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;

  const closeMenu = () => {
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('no-scroll');
  };

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  // Cierra el menú al tocar un link o cambiar tamaño de pantalla
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 992) closeMenu(); });
});