/* ========================================
Aigralys.ai - Bilingual Language Toggle
ES/EN with localStorage persistence
======================================== */

const defaultLang = localStorage.getItem(‘aigralys-lang’) || ‘es’;
let currentLang = defaultLang;

document.addEventListener(‘DOMContentLoaded’, () => {
applyLanguage(currentLang);

const toggleButtons = document.querySelectorAll(’[data-lang-toggle]’);
toggleButtons.forEach(btn => {
btn.addEventListener(‘click’, e => {
const selectedLang = e.target.getAttribute(‘data-lang-toggle’);
if (selectedLang && selectedLang !== currentLang) {
currentLang = selectedLang;
localStorage.setItem(‘aigralys-lang’, currentLang);
applyLanguage(currentLang);
highlightActiveLang();
}
});
});

highlightActiveLang();
});

function applyLanguage(lang) {
const translatables = document.querySelectorAll(’[data-i18n]’);
translatables.forEach(el => {
const key = el.getAttribute(‘data-i18n’);
const translation = translations[key]?.[lang];
if (translation) {
if (el.tagName === ‘INPUT’ || el.tagName === ‘TEXTAREA’) {
el.placeholder = translation;
} else {
el.textContent = translation;
}
}
});
document.documentElement.lang = lang;
}

function highlightActiveLang() {
document.querySelectorAll(’[data-lang-toggle]’).forEach(btn => {
const isActive = btn.getAttribute(‘data-lang-toggle’) === currentLang;
btn.classList.toggle(‘active-lang’, isActive);
});
}

// Complete Translation Dictionary
const translations = {
// Navigation
‘nav.home’: { es: ‘Inicio’, en: ‘Home’ },
‘nav.about’: { es: ‘Nosotros’, en: ‘About’ },
‘nav.solutions’: { es: ‘Soluciones’, en: ‘Solutions’ },
‘nav.consulting’: { es: ‘Consultoría’, en: ‘Consulting’ },
‘nav.workshops’: { es: ‘Workshops’, en: ‘Workshops’ },
‘nav.contact’: { es: ‘Contacto’, en: ‘Contact’ },

// Hero Section (Index)
‘hero.title’: { es: ‘Agentes de IA para ecosistemas digitales complejos’, en: ‘AI Agents for Complex Digital Ecosystems’ },
‘hero.subtitle’: { es: ‘Diseñamos e implementamos sistemas Agentic AI que transforman industrias globales’, en: ‘We design and implement Agentic AI systems that transform global industries’ },
‘hero.ctaPrimary’: { es: ‘Explorar soluciones’, en: ‘Explore solutions’ },
‘hero.ctaSecondary’: { es: ‘Conectar con nosotros’, en: ‘Get in touch’ },

// About Section
‘about.title’: { es: ‘Quiénes somos’, en: ‘Who We Are’ },
‘about.intro’: { es: ‘Aigralys.ai es una startup global especializada en el diseño e implementación de sistemas de Agentes de IA para ecosistemas digitales complejos. Transformamos desafíos industriales en oportunidades mediante inteligencia artificial agentica.’, en: ‘Aigralys.ai is a global startup specialized in designing and implementing AI Agent systems for complex digital ecosystems. We transform industrial challenges into opportunities through agentic artificial intelligence.’ },
‘about.pillar1.title’: { es: ‘Innovación’, en: ‘Innovation’ },
‘about.pillar1.desc’: { es: ‘Desarrollamos soluciones cutting-edge que anticipan las necesidades del futuro digital’, en: ‘We develop cutting-edge solutions that anticipate the needs of the digital future’ },
‘about.pillar2.title’: { es: ‘Adaptabilidad’, en: ‘Adaptability’ },
‘about.pillar2.desc’: { es: ‘Sistemas agnósticos que se integran perfectamente en cualquier infraestructura existente’, en: ‘Agnostic systems that integrate seamlessly into any existing infrastructure’ },
‘about.pillar3.title’: { es: ‘Impacto Global’, en: ‘Global Impact’ },
‘about.pillar3.desc’: { es: ‘Presencia internacional con soluciones escalables para múltiples industrias’, en: ‘International presence with scalable solutions for multiple industries’ },

// Solutions Section
‘solutions.title’: { es: ‘Soluciones Agentic AI’, en: ‘Agentic AI Solutions’ },
‘solutions.subtitle’: { es: ‘Sistemas inteligentes que operan de forma autónoma en entornos complejos’, en: ‘Intelligent systems that operate autonomously in complex environments’ },
‘solutions.scenario1.title’: { es: ‘Operaciones de Red’, en: ‘Network Operations’ },
‘solutions.scenario1.desc’: { es: ‘Agentes autónomos monitoreando y optimizando infraestructuras de red en tiempo real’, en: ‘Autonomous agents monitoring and optimizing network infrastructure in real-time’ },
‘solutions.scenario2.title’: { es: ‘Agricultura Inteligente’, en: ‘Smart Agriculture’ },
‘solutions.scenario2.desc’: { es: ‘Sistemas IoT con agentes que gestionan irrigación, nutrición y rendimiento de cultivos’, en: ‘IoT systems with agents managing irrigation, nutrition and crop yields’ },
‘solutions.scenario3.title’: { es: ‘Gestión Energética’, en: ‘Energy Management’ },
‘solutions.scenario3.desc’: { es: ‘Agentes inteligentes optimizando distribución y consumo energético en tiempo real’, en: ‘Intelligent agents optimizing energy distribution and consumption in real-time’ },
‘solutions.scenario4.title’: { es: ‘Retail Inteligente’, en: ‘Smart Retail’ },
‘solutions.scenario4.desc’: { es: ‘Optimización de inventarios y experiencia del cliente mediante agentes autónomos’, en: ‘Inventory optimization and customer experience through autonomous agents’ },

// Industries Section
‘industries.title’: { es: ‘Industrias que transformamos’, en: ‘Industries We Transform’ },
‘industries.telecom.title’: { es: ‘Telecomunicaciones’, en: ‘Telecommunications’ },
‘industries.telecom.desc’: { es: ‘Optimización de redes, prevención de fallos, gestión predictiva’, en: ‘Network optimization, failure prevention, predictive management’ },
‘industries.agriculture.title’: { es: ‘Agricultura’, en: ‘Agriculture’ },
‘industries.agriculture.desc’: { es: ‘Agricultura de precisión, gestión hídrica, monitoreo de cultivos’, en: ‘Precision agriculture, water management, crop monitoring’ },
‘industries.energy.title’: { es: ‘Energía’, en: ‘Energy’ },
‘industries.energy.desc’: { es: ‘Smart grids, optimización de consumo, integración de renovables’, en: ‘Smart grids, consumption optimization, renewable integration’ },
‘industries.retail.title’: { es: ‘Retail’, en: ‘Retail’ },
‘industries.retail.desc’: { es: ‘Gestión de inventario, personalización, logística inteligente’, en: ‘Inventory management, personalization, smart logistics’ },
‘industries.manufacturing.title’: { es: ‘Manufactura’, en: ‘Manufacturing’ },
‘industries.manufacturing.desc’: { es: ‘Mantenimiento predictivo, control de calidad, eficiencia operativa’, en: ‘Predictive maintenance, quality control, operational efficiency’ },
‘industries.logistics.title’: { es: ‘Logística’, en: ‘Logistics’ },
‘industries.logistics.desc’: { es: ‘Optimización de rutas, gestión de flotas, trazabilidad completa’, en: ‘Route optimization, fleet management, complete traceability’ },

// Technology Section
‘technology.title’: { es: ‘Tecnología Agentic AI’, en: ‘Agentic AI Technology’ },
‘technology.what.title’: { es: ‘¿Qué son los Agentes de IA?’, en: ‘What are AI Agents?’ },
‘technology.what.desc’: { es: ‘Los agentes de IA son sistemas autónomos capaces de percibir su entorno, tomar decisiones y ejecutar acciones para alcanzar objetivos específicos. A diferencia de los sistemas tradicionales, operan con autonomía, aprenden continuamente y se adaptan a condiciones cambiantes.’, en: ‘AI agents are autonomous systems capable of perceiving their environment, making decisions, and executing actions to achieve specific goals. Unlike traditional systems, they operate with autonomy, learn continuously, and adapt to changing conditions.’ },
‘technology.feature1.title’: { es: ‘Autonomía’, en: ‘Autonomy’ },
‘technology.feature1.desc’: { es: ‘Operación independiente sin intervención humana constante’, en: ‘Independent operation without constant human intervention’ },
‘technology.feature2.title’: { es: ‘Reactividad’, en: ‘Reactivity’ },
‘technology.feature2.desc’: { es: ‘Respuesta inmediata a cambios en el entorno operativo’, en: ‘Immediate response to changes in the operating environment’ },
‘technology.feature3.title’: { es: ‘Proactividad’, en: ‘Proactivity’ },
‘technology.feature3.desc’: { es: ‘Anticipación de necesidades y problemas antes de que ocurran’, en: ‘Anticipation of needs and problems before they occur’ },
‘technology.feature4.title’: { es: ‘Colaboración’, en: ‘Collaboration’ },
‘technology.feature4.desc’: { es: ‘Interacción y coordinación entre múltiples agentes’, en: ‘Interaction and coordination between multiple agents’ },

// Contact Section
‘contact.title’: { es: ‘Conectemos’, en: ‘Get in Touch’ },
‘contact.subtitle’: { es: ‘¿Listo para transformar tu ecosistema digital con Agentes de IA?’, en: ‘Ready to transform your digital ecosystem with AI Agents?’ },
‘contact.form.name’: { es: ‘Nombre’, en: ‘Name’ },
‘contact.form.email’: { es: ‘Email’, en: ‘Email’ },
‘contact.form.company’: { es: ‘Empresa’, en: ‘Company’ },
‘contact.form.message’: { es: ‘Mensaje’, en: ‘Message’ },
‘contact.form.submit’: { es: ‘Enviar mensaje’, en: ‘Send message’ },
‘contact.email’: { es: ‘Email: contact@aigralys.ai’, en: ‘Email: contact@aigralys.ai’ },
‘contact.location’: { es: ‘Global presence | Remote first’, en: ‘Global presence | Remote first’ },

// Footer
‘footer.tagline’: { es: ‘Agentes de IA para el futuro digital’, en: ‘AI Agents for the digital future’ },
‘footer.services.title’: { es: ‘Servicios’, en: ‘Services’ },
‘footer.services.consulting’: { es: ‘Consultoría’, en: ‘Consulting’ },
‘footer.services.workshops’: { es: ‘Workshops’, en: ‘Workshops’ },
‘footer.services.solutions’: { es: ‘Soluciones’, en: ‘Solutions’ },
‘footer.company.title’: { es: ‘Compañía’, en: ‘Company’ },
‘footer.company.about’: { es: ‘Nosotros’, en: ‘About’ },
‘footer.company.contact’: { es: ‘Contacto’, en: ‘Contact’ },
‘footer.copyright’: { es: ‘© 2025 Aigralys.ai. Todos los derechos reservados.’, en: ‘© 2025 Aigralys.ai. All rights reserved.’ },

// CONSULTING PAGE
‘consulting.hero.title’: { es: ‘Consultoría Agentic AI’, en: ‘Agentic AI Consulting’ },
‘consulting.hero.subtitle’: { es: ‘Transformamos tu visión en sistemas de Agentes de IA operativos y escalables’, en: ‘We transform your vision into operational and scalable AI Agent systems’ },
‘consulting.overview.title’: { es: ‘Nuestro enfoque’, en: ‘Our Approach’ },
‘consulting.overview.intro’: { es: ‘Nuestra consultoría de Agentic AI combina expertise técnico profundo con conocimiento sectorial para diseñar e implementar sistemas de agentes que resuelven desafíos reales de negocio.’, en: ‘Our Agentic AI consulting combines deep technical expertise with industry knowledge to design and implement agent systems that solve real business challenges.’ },
‘consulting.approach1.title’: { es: ‘Análisis Estratégico’, en: ‘Strategic Analysis’ },
‘consulting.approach1.desc’: { es: ‘Evaluamos tu ecosistema digital, identificamos oportunidades de automatización inteligente y definimos arquitecturas óptimas de agentes’, en: ‘We evaluate your digital ecosystem, identify intelligent automation opportunities, and define optimal agent architectures’ },
‘consulting.approach2.title’: { es: ‘Diseño de Sistema’, en: ‘System Design’ },
‘consulting.approach2.desc’: { es: ‘Creamos blueprints detallados de sistemas multi-agente, incluyendo flujos de decisión, protocolos de comunicación y métricas de éxito’, en: ‘We create detailed blueprints of multi-agent systems, including decision flows, communication protocols, and success metrics’ },
‘consulting.approach3.title’: { es: ‘Implementación Guiada’, en: ‘Guided Implementation’ },
‘consulting.approach3.desc’: { es: ‘Acompañamos la implementación técnica, asegurando integración fluida con tu infraestructura existente’, en: ‘We accompany technical implementation, ensuring seamless integration with your existing infrastructure’ },
‘consulting.approach4.title’: { es: ‘Optimización Continua’, en: ‘Continuous Optimization’ },
‘consulting.approach4.desc’: { es: ‘Monitoreamos rendimiento, ajustamos comportamientos de agentes y escalamos el sistema según evolucionen tus necesidades’, en: ‘We monitor performance, adjust agent behaviors, and scale the system as your needs evolve’ },

// Consulting Services
‘consulting.services.title’: { es: ‘Servicios de consultoría’, en: ‘Consulting Services’ },
‘consulting.service1.title’: { es: ‘Auditoría de Oportunidades AI’, en: ‘AI Opportunities Audit’ },
‘consulting.service1.desc’: { es: ‘Evaluación exhaustiva de procesos y sistemas actuales para identificar dónde los agentes de IA pueden generar mayor impacto y ROI’, en: ‘Comprehensive evaluation of current processes and systems to identify where AI agents can generate the greatest impact and ROI’ },
‘consulting.service1.benefit1’: { es: ‘Mapeo de procesos críticos’, en: ‘Critical process mapping’ },
‘consulting.service1.benefit2’: { es: ‘Análisis de viabilidad técnica’, en: ‘Technical feasibility analysis’ },
‘consulting.service1.benefit3’: { es: ‘Proyección de impacto operativo’, en: ‘Operational impact projection’ },
‘consulting.service1.benefit4’: { es: ‘Roadmap de implementación priorizado’, en: ‘Prioritized implementation roadmap’ },

‘consulting.service2.title’: { es: ‘Arquitectura de Sistemas Multi-Agente’, en: ‘Multi-Agent System Architecture’ },
‘consulting.service2.desc’: { es: ‘Diseño de arquitecturas complejas donde múltiples agentes especializados colaboran para alcanzar objetivos empresariales’, en: ‘Design of complex architectures where multiple specialized agents collaborate to achieve business objectives’ },
‘consulting.service2.benefit1’: { es: ‘Definición de roles y responsabilidades de agentes’, en: ‘Agent roles and responsibilities definition’ },
‘consulting.service2.benefit2’: { es: ‘Protocolos de comunicación inter-agente’, en: ‘Inter-agent communication protocols’ },
‘consulting.service2.benefit3’: { es: ‘Estrategias de coordinación y negociación’, en: ‘Coordination and negotiation strategies’ },
‘consulting.service2.benefit4’: { es: ‘Arquitectura de datos y conocimiento compartido’, en: ‘Shared data and knowledge architecture’ },

‘consulting.service3.title’: { es: ‘Integración Empresarial’, en: ‘Enterprise Integration’ },
‘consulting.service3.desc’: { es: ‘Integración de sistemas de agentes con infraestructura existente: ERP, CRM, SCADA, IoT y bases de datos corporativas’, en: ‘Integration of agent systems with existing infrastructure: ERP, CRM, SCADA, IoT and corporate databases’ },
‘consulting.service3.benefit1’: { es: ‘Análisis de sistemas legacy’, en: ‘Legacy systems analysis’ },
‘consulting.service3.benefit2’: { es: ‘Diseño de conectores y APIs’, en: ‘Connector and API design’ },
‘consulting.service3.benefit3’: { es: ‘Migración de datos sin interrupciones’, en: ‘Seamless data migration’ },
‘consulting.service3.benefit4’: { es: ‘Validación y testing exhaustivo’, en: ‘Comprehensive validation and testing’ },

‘consulting.service4.title’: { es: ‘Gobierno y Ética de IA’, en: ‘AI Governance and Ethics’ },
‘consulting.service4.desc’: { es: ‘Frameworks de gobernanza para garantizar operación ética, transparente y regulada de sistemas de agentes autónomos’, en: ‘Governance frameworks to ensure ethical, transparent, and regulated operation of autonomous agent systems’ },
‘consulting.service4.benefit1’: { es: ‘Políticas de transparencia y explicabilidad’, en: ‘Transparency and explainability policies’ },
‘consulting.service4.benefit2’: { es: ‘Protocolos de auditoría y control’, en: ‘Audit and control protocols’ },
‘consulting.service4.benefit3’: { es: ‘Cumplimiento regulatorio (GDPR, AI Act)’, en: ‘Regulatory compliance (GDPR, AI Act)’ },
‘consulting.service4.benefit4’: { es: ‘Gestión de riesgos y failsafes’, en: ‘Risk management and failsafes’ },

‘consulting.service5.title’: { es: ‘Capacitación de Equipos’, en: ‘Team Training’ },
‘consulting.service5.desc’: { es: ‘Formación técnica y operativa para que tus equipos gestionen, monitoreen y optimicen sistemas de agentes de forma autónoma’, en: ‘Technical and operational training so your teams can manage, monitor, and optimize agent systems autonomously’ },
‘consulting.service5.benefit1’: { es: ‘Training técnico en frameworks de agentes’, en: ‘Technical training in agent frameworks’ },
‘consulting.service5.benefit2’: { es: ‘Gestión operativa de sistemas multi-agente’, en: ‘Operational management of multi-agent systems’ },
‘consulting.service5.benefit3’: { es: ‘Troubleshooting y debugging avanzado’, en: ‘Advanced troubleshooting and debugging’ },
‘consulting.service5.benefit4’: { es: ‘Best practices de mantenimiento’, en: ‘Maintenance best practices’ },

// Consulting Process
‘consulting.process.title’: { es: ‘Proceso de trabajo’, en: ‘Work Process’ },
‘consulting.process.step1.title’: { es: ‘Discovery’, en: ‘Discovery’ },
‘consulting.process.step1.desc’: { es: ‘Inmersión profunda en tu negocio, infraestructura técnica, desafíos operativos y objetivos estratégicos’, en: ‘Deep dive into your business, technical infrastructure, operational challenges, and strategic objectives’ },
‘consulting.process.step2.title’: { es: ‘Diseño’, en: ‘Design’ },
‘consulting.process.step2.desc’: { es: ‘Creación de arquitectura de agentes, definición de comportamientos, protocolos y métricas de éxito’, en: ‘Agent architecture creation, behavior definition, protocols, and success metrics’ },
‘consulting.process.step3.title’: { es: ‘Proof of Concept’, en: ‘Proof of Concept’ },
‘consulting.process.step3.desc’: { es: ‘Desarrollo de piloto funcional en entorno controlado para validar viabilidad técnica y operativa’, en: ‘Functional pilot development in controlled environment to validate technical and operational feasibility’ },
‘consulting.process.step4.title’: { es: ‘Implementación’, en: ‘Implementation’ },
‘consulting.process.step4.desc’: { es: ‘Despliegue gradual en producción con monitoreo continuo y ajustes iterativos’, en: ‘Gradual production deployment with continuous monitoring and iterative adjustments’ },
‘consulting.process.step5.title’: { es: ‘Optimización’, en: ‘Optimization’ },
‘consulting.process.step5.desc’: { es: ‘Refinamiento continuo basado en datos reales, expansión de capacidades y escalamiento’, en: ‘Continuous refinement based on real data, capability expansion, and scaling’ },

// Case Studies
‘consulting.cases.title’: { es: ‘Casos de éxito’, en: ‘Success Stories’ },
‘consulting.case1.title’: { es: ‘Operadora de Telecomunicaciones Global’, en: ‘Global Telecommunications Operator’ },
‘consulting.case1.industry’: { es: ‘Telecomunicaciones’, en: ‘Telecommunications’ },
‘consulting.case1.challenge’: { es: ‘Desafío: Reducir tiempo de respuesta ante fallos de red y optimizar asignación de recursos técnicos’, en: ‘Challenge: Reduce network failure response time and optimize technical resource allocation’ },
‘consulting.case1.solution’: { es: ‘Solución: Sistema multi-agente de monitoreo predictivo, diagnóstico automático y orchestración de equipos de campo’, en: ‘Solution: Multi-agent system for predictive monitoring, automatic diagnosis, and field team orchestration’ },
‘consulting.case1.result’: { es: ‘Resultado: 73% reducción en tiempo de resolución, 40% menos tickets escalados, $2.3M ahorro anual’, en: ‘Result: 73% reduction in resolution time, 40% fewer escalated tickets, $2.3M annual savings’ },

‘consulting.case2.title’: { es: ‘Cooperativa Agrícola Regional’, en: ‘Regional Agricultural Cooperative’ },
‘consulting.case2.industry’: { es: ‘Agricultura’, en: ‘Agriculture’ },
‘consulting.case2.challenge’: { es: ‘Desafío: Optimizar uso de agua en 15,000 hectáreas con condiciones climáticas variables’, en: ‘Challenge: Optimize water use across 15,000 hectares with variable weather conditions’ },
‘consulting.case2.solution’: { es: ‘Solución: Red de agentes IoT integrando sensores de humedad, meteorología y análisis de imágenes satelitales’, en: ‘Solution: IoT agent network integrating humidity sensors, meteorology, and satellite image analysis’ },
‘consulting.case2.result’: { es: ‘Resultado: 35% reducción en consumo hídrico, 18% incremento en rendimiento de cultivos’, en: ‘Result: 35% reduction in water consumption, 18% increase in crop yields’ },

‘consulting.case3.title’: { es: ‘Utility Energética Nacional’, en: ‘National Energy Utility’ },
‘consulting.case3.industry’: { es: ‘Energía’, en: ‘Energy’ },
‘consulting.case3.challenge’: { es: ‘Desafío: Equilibrar generación renovable variable con demanda en tiempo real’, en: ‘Challenge: Balance variable renewable generation with real-time demand’ },
‘consulting.case3.solution’: { es: ‘Solución: Agentes de predicción de demanda, gestión de almacenamiento y coordinación con generadores distribuidos’, en: ‘Solution: Demand prediction agents, storage management, and distributed generator coordination’ },
‘consulting.case3.result’: { es: ‘Resultado: 28% mejora en integración de renovables, reducción de 12% en costos operativos’, en: ‘Result: 28% improvement in renewable integration, 12% reduction in operational costs’ },

// Consulting CTA
‘consulting.cta.title’: { es: ‘¿Listo para transformar tu operación con Agentes de IA?’, en: ‘Ready to transform your operation with AI Agents?’ },
‘consulting.cta.subtitle’: { es: ‘Agenda una sesión estratégica gratuita con nuestros expertos’, en: ‘Schedule a free strategic session with our experts’ },
‘consulting.cta.button’: { es: ‘Agendar consulta’, en: ‘Schedule consultation’ },

// WORKSHOPS PAGE
‘workshops.hero.title’: { es: ‘Workshops Agentic AI’, en: ‘Agentic AI Workshops’ },
‘workshops.hero.subtitle’: { es: ‘Formación práctica e intensiva en diseño e implementación de sistemas de Agentes de IA’, en: ‘Practical and intensive training in AI Agent system design and implementation’ },
‘workshops.overview.title’: { es: ‘Aprende haciendo’, en: ‘Learn by Doing’ },
‘workshops.overview.intro’: { es: ‘Nuestros workshops combinan teoría cutting-edge con ejercicios prácticos hands-on. Diseñados para equipos técnicos, product managers y líderes de transformación digital que quieren dominar la tecnología de Agentes de IA.’, en: ‘Our workshops combine cutting-edge theory with hands-on practical exercises. Designed for technical teams, product managers, and digital transformation leaders who want to master AI Agent technology.’ },

‘workshops.benefit1.title’: { es: ‘Formato Intensivo’, en: ‘Intensive Format’ },
‘workshops.benefit1.desc’: { es: ‘Sesiones de 2-3 días con balance óptimo entre conceptos y práctica’, en: ‘2-3 day sessions with optimal balance between concepts and practice’ },
‘workshops.benefit2.title’: { es: ‘Casos Reales’, en: ‘Real Cases’ },
‘workshops.benefit2.desc’: { es: ‘Trabajamos con datos y escenarios de tu industria específica’, en: ‘We work with data and scenarios from your specific industry’ },
‘workshops.benefit3.title’: { es: ‘Hands-On Labs’, en: ‘Hands-On Labs’ },
‘workshops.benefit3.desc’: { es: ‘Implementación práctica de agentes funcionales durante el workshop’, en: ‘Practical implementation of functional agents during the workshop’ },
‘workshops.benefit4.title’: { es: ‘Expertos Senior’, en: ‘Senior Experts’ },
‘workshops.benefit4.desc’: { es: ‘Instructores con experiencia real en proyectos de Agentic AI’, en: ‘Instructors with real experience in Agentic AI projects’ },

// Workshop Catalog
‘workshops.catalog.title’: { es: ‘Catálogo de workshops’, en: ‘Workshop Catalog’ },

‘workshops.ws1.title’: { es: ‘Fundamentos de Agentic AI’, en: ‘Agentic AI Fundamentals’ },
‘workshops.ws1.level’: { es: ‘Nivel: Introductorio’, en: ‘Level: Introductory’ },
‘workshops.ws1.duration’: { es: ‘Duración: 2 días’, en: ‘Duration: 2 days’ },
‘workshops.ws1.desc’: { es: ‘Introducción comprehensiva a sistemas de agentes: arquitecturas, frameworks, protocolos de comunicación y casos de uso por industria.’, en: ‘Comprehensive introduction to agent systems: architectures, frameworks, communication protocols, and industry use cases.’ },
‘workshops.ws1.topics.title’: { es: ‘Módulos:’, en: ‘Modules:’ },
‘workshops.ws1.topic1’: { es: ‘Conceptos fundamentales: agentes reactivos, deliberativos e híbridos’, en: ‘Fundamental concepts: reactive, deliberative, and hybrid agents’ },
‘workshops.ws1.topic2’: { es: ‘Arquitecturas de agentes: BDI, PEAS, subsumption’, en: ‘Agent architectures: BDI, PEAS, subsumption’ },
‘workshops.ws1.topic3’: { es: ‘Comunicación inter-agente: protocolos, ontologías, FIPA-ACL’, en: ‘Inter-agent communication: protocols, ontologies, FIPA-ACL’ },
‘workshops.ws1.topic4’: { es: ‘Frameworks y herramientas: LangChain, AutoGen, CrewAI’, en: ‘Frameworks and tools: LangChain, AutoGen, CrewAI’ },
‘workshops.ws1.topic5’: { es: ‘Casos de uso por industria: retail, energía, logística’, en: ‘Industry use cases: retail, energy, logistics’ },
‘workshops.ws1.topic6’: { es: ‘Lab: Implementar un agente reactivo simple’, en: ‘Lab: Implement a simple reactive agent’ },
‘workshops.ws1.audience.title’: { es: ‘Para quién:’, en: ‘For whom:’ },
‘workshops.ws1.audience.desc’: { es: ‘Desarrolladores, arquitectos de software, product managers y technical leaders sin experiencia previa en agentes’, en: ‘Developers, software architects, product managers, and technical leaders without prior agent experience’ },

‘workshops.ws2.title’: { es: ‘Diseño de Sistemas Multi-Agente’, en: ‘Multi-Agent System Design’ },
‘workshops.ws2.level’: { es: ‘Nivel: Intermedio’, en: ‘Level: Intermediate’ },
‘workshops.ws2.duration’: { es: ‘Duración: 3 días’, en: ‘Duration: 3 days’ },
‘workshops.ws2.desc’: { es: ‘Diseño e implementación de sistemas complejos donde múltiples agentes especializados colaboran para resolver problemas empresariales.’, en: ‘Design and implementation of complex systems where multiple specialized agents collaborate to solve business problems.’ },
‘workshops.ws2.topics.title’: { es: ‘Módulos:’, en: ‘Modules:’ },
‘workshops.ws2.topic1’: { es: ‘Patrones de coordinación: contratos, negociación, subastas’, en: ‘Coordination patterns: contracts, negotiation, auctions’ },
‘workshops.ws2.topic2’: { es: ‘Arquitecturas distribuidas y federadas’, en: ‘Distributed and federated architectures’ },
‘workshops.ws2.topic3’: { es: ‘Gestión de conocimiento compartido y bases de datos vectoriales’, en: ‘Shared knowledge management and vector databases’ },
‘workshops.ws2.topic4’: { es: ‘Orquestación vs coreografía de agentes’, en: ‘Agent orchestration vs choreography’ },
‘workshops.ws2.topic5’: { es: ‘Resiliencia, failover y handling de errores’, en: ‘Resilience, failover, and error handling’ },
‘workshops.ws2.topic6’: { es: ‘Lab: Sistema multi-agente para optimización logística’, en: ‘Lab: Multi-agent system for logistics optimization’ },
‘workshops.ws2.audience.title’: { es: ‘Para quién:’, en: ‘For whom:’ },
‘workshops.ws2.audience.desc’: { es: ‘Arquitectos de soluciones, senior developers y technical leads con conocimientos básicos de AI/ML’, en: ‘Solution architects, senior developers, and technical leads with basic AI/ML knowledge’ },

‘workshops.ws3.title’: { es: ‘Agentes Autónomos en Producción’, en: ‘Autonomous Agents in Production’ },
‘workshops.ws3.level’: { es: ‘Nivel: Avanzado’, en: ‘Level: Advanced’ },
‘workshops.ws3.duration’: { es: ‘Duración: 3 días’, en: ‘Duration: 3 days’ },
‘workshops.ws3.desc’: { es: ‘Despliegue, monitoreo y operación de sistemas de agentes en ambientes productivos de alta disponibilidad.’, en: ‘Deployment, monitoring, and operation of agent systems in high-availability production environments.’ },
‘workshops.ws3.topics.title’: { es: ‘Módulos:’, en: ‘Modules:’ },
‘workshops.ws3.topic1’: { es: ‘DevOps para sistemas agentic: CI/CD, versionado de comportamientos’, en: ‘DevOps for agentic systems: CI/CD, behavior versioning’ },
‘workshops.ws3.topic2’: { es: ‘Observabilidad: tracing de decisiones, logging estructurado’, en: ‘Observability: decision tracing, structured logging’ },
‘workshops.ws3.topic3’: { es: ‘Performance tuning y optimización de latencias’, en: ‘Performance tuning and latency optimization’ },
‘workshops.ws3.topic4’: { es: ‘Seguridad: autenticación, autorización, sandboxing’, en: ‘Security: authentication, authorization, sandboxing’ },
‘workshops.ws3.topic5’: { es: ‘Escalabilidad horizontal y vertical’, en: ‘Horizontal and vertical scalability’ },
‘workshops.ws3.topic6’: { es: ‘Lab: Deploy de sistema multi-agente en Kubernetes’, en: ‘Lab: Multi-agent system deploy on Kubernetes’ },
‘workshops.ws3.audience.title’: { es: ‘Para quién:’, en: ‘For whom:’ },
‘workshops.ws3.audience.desc’: { es: ‘DevOps engineers, SREs, platform engineers y architects responsables de infraestructura AI’, en: ‘DevOps engineers, SREs, platform engineers, and architects responsible for AI infrastructure’ },

‘workshops.ws4.title’: { es: ‘Agentes de IA para IoT e Industria 4.0’, en: ‘AI Agents for IoT and Industry 4.0’ },
‘workshops.ws4.level’: { es: ‘Nivel: Especializado’, en: ‘Level: Specialized’ },
‘workshops.ws4.duration’: { es: ‘Duración: 2 días’, en: ‘Duration: 2 days’ },
‘workshops.ws4.desc’: { es: ‘Integración de agentes con ecosistemas IoT, SCADA y sistemas de control industrial para manufactura y utilities.’, en: ‘Agent integration with IoT ecosystems, SCADA, and industrial control systems for manufacturing and utilities.’ },
‘workshops.ws4.topics.title’: { es: ‘Módulos:’, en: ‘Modules:’ },
‘workshops.ws4.topic1’: { es: ‘Protocolos industriales: MQTT, OPC-UA, Modbus’, en: ‘Industrial protocols: MQTT, OPC-UA, Modbus’ },
‘workshops.ws4.topic2’: { es: ‘Edge computing y procesamiento distribuido’, en: ‘Edge computing and distributed processing’ },
‘workshops.ws4.topic3’: { es: ‘Agentes para mantenimiento predictivo’, en: ‘Agents for predictive maintenance’ },
‘workshops.ws4.topic4’: { es: ‘Integración con sistemas SCADA y DCS’, en: ‘Integration with SCADA and DCS systems’ },
‘workshops.ws4.topic5’: { es: ‘Gestión de constraints de tiempo real’, en: ‘Real-time constraint management’ },
‘workshops.ws4.topic6’: { es: ‘Lab: Agente de monitoreo y control para línea de producción’, en: ‘Lab: Monitoring and control agent for production line’ },
‘workshops.ws4.audience.title’: { es: ‘Para quién:’, en: ‘For whom:’ },
‘workshops.ws4.audience.desc’: { es: ‘Engineers de automatización, especialistas OT/IT, responsables de Industria 4.0’, en: ‘Automation engineers, OT/IT specialists, Industry 4.0 leaders’ },

‘workshops.ws5.title’: { es: ‘Ética y Gobernanza de Agentes Autónomos’, en: ‘Ethics and Governance of Autonomous Agents’ },
‘workshops.ws5.level’: { es: ‘Nivel: Ejecutivo’, en: ‘Level: Executive’ },
‘workshops.ws5.duration’: { es: ‘Duración: 1 día’, en: ‘Duration: 1 day’ },
‘workshops.ws5.desc’: { es: ‘Frameworks de gobernanza, compliance regulatorio y consideraciones éticas para sistemas de agentes en producción.’, en: ‘Governance frameworks, regulatory compliance, and ethical considerations for agent systems in production.’ },
‘workshops.ws5.topics.title’: { es: ‘Módulos:’, en: ‘Modules:’ },
‘workshops.ws5.topic1’: { es: ‘Transparencia y explicabilidad de decisiones’, en: ‘Transparency and decision explainability’ },
‘workshops.ws5.topic2’: { es: ‘Compliance con AI Act, GDPR y regulaciones sectoriales’, en: ‘Compliance with AI Act, GDPR, and sector regulations’ },
‘workshops.ws5.topic3’: { es: ‘Gestión de riesgos y accountability’, en: ‘Risk management and accountability’ },
‘workshops.ws5.topic4’: { es: ‘Auditoría de sistemas autónomos’, en: ‘Autonomous systems auditing’ },
‘workshops.ws5.topic5’: { es: ‘Frameworks de IA responsable’, en: ‘Responsible AI frameworks’ },
‘workshops.ws5.topic6’: { es: ‘Workshop: Diseño de política de gobernanza de AI para tu organización’, en: ‘Workshop: AI governance policy design for your organization’ },
‘workshops.ws5.audience.title’: { es: ‘Para quién:’, en: ‘For whom:’ },
‘workshops.ws5.audience.desc’: { es: ‘CTOs, Chief AI Officers, compliance officers, legal teams y executive leadership’, en: ‘CTOs, Chief AI Officers, compliance officers, legal teams, and executive leadership’ },

‘workshops.ws6.title’: { es: ‘Workshop Personalizado’, en: ‘Custom Workshop’ },
‘workshops.ws6.level’: { es: ‘Nivel: A medida’, en: ‘Level: Tailored’ },
‘workshops.ws6.duration’: { es: ‘Duración: Flexible’, en: ‘Duration: Flexible’ },
‘workshops.ws6.desc’: { es: ‘Diseñamos workshops específicos para los desafíos y contexto de tu organización, integrando tus casos de uso reales.’, en: ‘We design specific workshops for your organization's challenges and context, integrating your real use cases.’ },
‘workshops.ws6.approach.title’: { es: ‘Nuestro enfoque:’, en: ‘Our approach:’ },
‘workshops.ws6.approach1’: { es: ‘Discovery session para entender objetivos y nivel técnico del equipo’, en: ‘Discovery session to understand team objectives and technical level’ },
‘workshops.ws6.approach2’: { es: ‘Diseño curricular personalizado’, en: ‘Personalized curriculum design’ },
‘workshops.ws6.approach3’: { es: ‘Integración de datasets y sistemas de tu organización’, en: ‘Integration of your organization's datasets and systems’ },
‘workshops.ws6.approach4’: { es: ‘Labs prácticos con tus casos de uso específicos’, en: ‘Practical labs with your specific use cases’ },
‘workshops.ws6.approach5’: { es: ‘Seguimiento post-workshop y mentoría’, en: ‘Post-workshop follow-up and mentoring’ },
‘workshops.ws6.audience.title’: { es: ‘Para quién:’, en: ‘For whom:’ },
‘workshops.ws6.audience.desc’: { es: ‘Organizaciones con necesidades específicas de formación en Agentic AI’, en: ‘Organizations with specific Agentic AI training needs’ },

// Workshop Formats
‘workshops.formats.title’: { es: ‘Formatos disponibles’, en: ‘Available Formats’ },
‘workshops.format1.title’: { es: ‘In-Company’, en: ‘In-Company’ },
‘workshops.format1.desc’: { es: ‘Workshop en tus instalaciones para equipos de 8-20 personas. Mayor confidencialidad y personalización.’, en: ‘Workshop at your facilities for teams of 8-20 people. Greater confidentiality and customization.’ },
‘workshops.format2.title’: { es: ‘Público Presencial’, en: ‘Public In-Person’ },
‘workshops.format2.desc’: { es: ‘Sesiones abiertas en ciudades principales. Networking con profesionales de otras organizaciones.’, en: ‘Open sessions in major cities. Networking with professionals from other organizations.’ },
‘workshops.format3.title’: { es: ‘Virtual Interactivo’, en: ‘Interactive Virtual’ },
‘workshops.format3.desc’: { es: ‘Formato remoto con labs en cloud. Alcance global sin desplazamientos.’, en: ‘Remote format with cloud labs. Global reach without travel.’ },
‘workshops.format4.title’: { es: ‘Híbrido’, en: ‘Hybrid’ },
‘workshops.format4.desc’: { es: ‘Combinación de sesiones presenciales y virtuales. Flexibilidad máxima para equipos distribuidos.’, en: ‘Combination of in-person and virtual sessions. Maximum flexibility for distributed teams.’ },

// Testimonials
‘workshops.testimonials.title’: { es: ‘Lo que dicen nuestros participantes’, en: ‘What Our Participants Say’ },
‘workshops.testimonial1.text’: { es: ‘“El workshop de Sistemas Multi-Agente transformó nuestra forma de abordar la automatización. Implementamos nuestro primer sistema productivo 3 semanas después.”’, en: ‘“The Multi-Agent Systems workshop transformed our approach to automation. We implemented our first production system 3 weeks later.”’ },
‘workshops.testimonial1.author’: { es: ‘— María González, Lead Architect, TechCorp’, en: ‘— María González, Lead Architect, TechCorp’ },
‘workshops.testimonial2.text’: { es: ‘“Excelente balance entre teoría y práctica. Los labs hands-on con nuestros propios datos fueron el diferencial clave.”’, en: ‘“Excellent balance between theory and practice. The hands-on labs with our own data were the key differentiator.”’ },
‘workshops.testimonial2.author’: { es: ‘— James Patterson, CTO, RetailChain’, en: ‘— James Patterson, CTO, RetailChain’ },
‘workshops.testimonial3.text’: { es: ‘“Los instructores tienen experiencia real en proyectos complejos. Cada pregunta fue respondida con casos concretos y soluciones prácticas.”’, en: ‘“The instructors have real experience in complex projects. Every question was answered with concrete cases and practical solutions.”’ },
‘workshops.testimonial3.author’: { es: ‘— Sofia Rodríguez, Senior Developer, EnergyGrid’, en: ‘— Sofia Rodríguez, Senior Developer, EnergyGrid’ },

// Workshops CTA
‘workshops.cta.title’: { es: ‘Acelera tu transformación con Agentic AI’, en: ‘Accelerate your transformation with Agentic AI’ },
‘workshops.cta.subtitle’: { es: ‘Consulta disponibilidad de workshops públicos o solicita una sesión in-company’, en: ‘Check availability of public workshops or request an in-company session’ },
‘workshops.cta.button’: { es: ‘Solicitar información’, en: ‘Request information’ }
};