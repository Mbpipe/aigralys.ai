// Journal Articles Data
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageSrc: string;
  readTime: string;
  publishedAt: string;
}

export const ARTICLES: Article[] = [
  {
    slug: 'el-arte-de-seleccionar-puros',
    title: 'El arte de seleccionar puros',
    excerpt:
      'Comprender el terroir, el añejamiento y el ritual. Cómo los mejores puros son elegidos por hombres que saben lo que importa.',
    content: `
      <p>Un puro no es solo tabaco envuelto en hoja. Es tierra. Es tiempo. Son las manos de hombres que entienden la paciencia.</p>
      
      <p>Los mejores puros comienzan en tierra volcánica—lugares como Vuelta Abajo en Cuba, donde los minerales le dan al tabaco su alma. Las hojas se cosechan a mano. Ninguna máquina puede sentir cuándo la hoja está lista.</p>
      
      <p>Luego viene el añejamiento. Siete años. Diez años. El tabaco reposa en cámaras de cedro, temperatura controlada, humedad precisa. Como el vino, desarrolla complejidad. La aspereza se desvanece. Lo que queda es suave, profundo, contemplativo.</p>
      
      <p>Cuando enciendes un puro, no estás fumando. Estás participando en un ritual que abarca siglos. Estás eligiendo ir más despacio en un mundo obsesionado con la velocidad.</p>
      
      <p>El puro durará una hora, tal vez dos. Ese es el punto. No puedes apresurarlo. Debes estar presente.</p>
    `,
    imageSrc: '/assets/journal/seleccionar-puros-hero.png',
    readTime: '6 min',
    publishedAt: '2026-01-15',
  },
  {
    slug: 'relojes-mecanicos-en-era-digital',
    title: 'Por qué los relojes mecánicos aún importan',
    excerpt:
      'En una era de precisión atómica, el atractivo de la relojería mecánica se vuelve más fuerte. Esto es más que dar la hora.',
    content: `
      <p>Tu teléfono da la hora más precisa que cualquier reloj mecánico jamás lo hará. Entonces, ¿por qué los hombres aún dan cuerda a movimientos a mano?</p>
      
      <p>Porque un reloj mecánico no se trata de precisión. Se trata de oficio. De conexión. De llevar un pequeño milagro de ingeniería en tu muñeca.</p>
      
      <p>Dentro de esa caja hay cientos de piezas diminutas—engranajes, resortes, rubíes—trabajando en perfecta armonía. Sin batería. Sin chip. Solo física, refinada durante siglos.</p>
      
      <p>Cuando das cuerda a un reloj, eres parte de su función. El reloj te necesita. Y de forma extraña, tú lo necesitas a él—un recordatorio de que algunas cosas no pueden optimizarse, solo apreciarse.</p>
      
      <p>Un Grand Seiko Spring Drive. Un Audemars Piguet Royal Oak. Estos no son compras. Son herencias en espera. Objetos que te sobrevivirán, llevando tu historia hacia adelante.</p>
    `,
    imageSrc: '/assets/journal/mechanical-watches.jpg',
    readTime: '5 min',
    publishedAt: '2026-01-08',
  },
  {
    slug: 'guia-del-oud',
    title: 'Comprender el Oud: El oro de la perfumería',
    excerpt:
      'Desde los bosques de Assam hasta las boutiques parisinas, el oud representa la cúspide de la fragancia masculina. Una guía del oro líquido.',
    content: `
      <p>El oud no es un perfume. Es un fenómeno. Formado cuando el árbol Aquilaria se infecta con moho, produce una resina oscura para protegerse. Esa resina, añejada durante décadas, se convierte en oud—la materia prima natural más cara de la perfumería.</p>
      
      <p>El aroma es difícil de describir. Amaderado, animal, ligeramente dulce, profundamente complejo. No es para todos. Esa es parte de su atractivo.</p>
      
      <p>En el Medio Oriente, el oud se ha usado durante miles de años. Se quema como incienso. Se aplica como aceite. Señala refinamiento, profundidad, seriedad.</p>
      
      <p>Los perfumistas occidentales solo recientemente lo han adoptado, mezclando oud con rosa, azafrán, ámbar. Los resultados son embriagadores—fragancias que evolucionan durante horas, que hacen que la gente gire su cabeza.</p>
      
      <p>Una gota detrás de la oreja. Eso es todo lo que necesitas. El oud se anuncia lentamente. No grita. Susurra—y la gente se acerca para escuchar.</p>
    `,
    imageSrc: '/assets/journal/oud-guide.jpg',
    readTime: '7 min',
    publishedAt: '2025-12-20',
  },
  {
    slug: 'construir-ritual-matutino',
    title: 'Construir un ritual matutino que importa',
    excerpt:
      'La primera hora marca el tono para todo lo que sigue. Cómo los hombres más finos comienzan su día con intención.',
    content: `
      <p>No necesitas despertar a las 4am. No necesitas un baño de hielo. No necesitas un diario de manifestación.</p>
      
      <p>Lo que necesitas es consistencia. Una secuencia de acciones, repetidas diariamente, que te arraiguen antes de que comience el ruido.</p>
      
      <p>Para algunos, es café—café real, sin prisa. Prensa francesa. Granos molidos a mano. El ritual de preparación. Para otros, es escribir. Tres páginas. Flujo de conciencia. Volcado cerebral.</p>
      
      <p>Los objetos importan. Un diario bien hecho. Una pluma de calidad. Una taza apropiada. Estos no son lujos. Son invitaciones a tomarte en serio.</p>
      
      <p>La mañana es tuya. El mundo aún no ha hecho sus demandas. Usa ese tiempo para decidir quién quieres ser hoy.</p>
    `,
    imageSrc: '/assets/editorial/about-hero.jpg',
    readTime: '4 min',
    publishedAt: '2025-12-10',
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticles() {
  return ARTICLES.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
