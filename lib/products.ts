// Product Data Layer - Dignitas
export interface Product {
  id: string;
  name: string;
  nameEs: string;
  category: 'cigars' | 'watches' | 'perfumes' | 'accessories';
  price: number;
  currency: string;
  story: string;
  storyEs: string;
  origin: string;
  originEs: string;
  ritual: string;
  ritualEs: string;
  images: string[];
  specifications: { label: string; labelEs: string; value: string }[];
  limited?: boolean;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  // PUROS
  {
    id: 'puro-cohiba-reserva',
    name: 'Cohiba Reserva 1966',
    nameEs: 'Cohiba Reserva 1966',
    category: 'cigars',
    price: 450,
    currency: 'USD',
    story: 'A timeless ritual. Each leaf aged seven years in Cuban cedar chambers. The slow burn of contemplation.',
    storyEs: 'Un ritual atemporal. Cada hoja añejada siete años en cámaras de cedro cubano. La lenta combustión de la contemplación.',
    origin: 'Vuelta Abajo, Cuba',
    originEs: 'Vuelta Abajo, Cuba',
    ritual: 'Cut. Light. Pause. Let the first draw transport you to a different era. This is not smoking—it is ceremony.',
    ritualEs: 'Corta. Enciende. Pausa. Deja que la primera calada te transporte a otra época. Esto no es fumar—es ceremonia.',
    images: [
      'https://images.unsplash.com/photo-1556139943-4a4634d5dd62?w=1200&q=80',
      'https://images.unsplash.com/photo-1609113075024-b7d0bbf8e6a6?w=1200&q=80'
    ],
    specifications: [
      { label: 'Length', labelEs: 'Longitud', value: '165mm' },
      { label: 'Ring Gauge', labelEs: 'Cepo', value: '52' },
      { label: 'Aging', labelEs: 'Añejamiento', value: '7 años' },
      { label: 'Wrapper', labelEs: 'Capa', value: 'Habano Oscuro' },
    ],
    limited: true,
    inStock: true,
  },
  {
    id: 'puro-montecristo-80',
    name: 'Montecristo 80th Anniversary',
    nameEs: 'Montecristo 80 Aniversario',
    category: 'cigars',
    price: 380,
    currency: 'USD',
    story: 'Eight decades of mastery condensed into one evening. The ritual your grandfather understood.',
    storyEs: 'Ocho décadas de maestría condensadas en una velada. El ritual que tu abuelo comprendía.',
    origin: 'Havana, Cuba',
    originEs: 'La Habana, Cuba',
    ritual: 'Pour whiskey. Light cigar. Silence phone. This moment belongs to you.',
    ritualEs: 'Sirve whisky. Enciende el puro. Silencia el teléfono. Este momento te pertenece.',
    images: ['https://images.unsplash.com/photo-1602524206710-d40af24f4bf9?w=1200&q=80'],
    specifications: [
      { label: 'Length', labelEs: 'Longitud', value: '178mm' },
      { label: 'Ring Gauge', labelEs: 'Cepo', value: '56' },
      { label: 'Aging', labelEs: 'Añejamiento', value: '5 años' },
      { label: 'Wrapper', labelEs: 'Capa', value: 'Connecticut Shade' },
    ],
    inStock: true,
  },

  // RELOJES
  {
    id: 'reloj-royal-oak-heritage',
    name: 'Royal Oak Heritage',
    nameEs: 'Royal Oak Heritage',
    category: 'watches',
    price: 42000,
    currency: 'USD',
    story: 'Gérald Genta\'s 1972 vision, reimagined. The octagonal bezel that changed horology forever.',
    storyEs: 'La visión de Gérald Genta de 1972, reimaginada. El bisel octagonal que cambió la relojería para siempre.',
    origin: 'Le Brassus, Switzerland',
    originEs: 'Le Brassus, Suiza',
    ritual: 'Mechanical heartbeat on your wrist. Wind it. Feel the balance wheel oscillate. Time slows down.',
    ritualEs: 'Latido mecánico en tu muñeca. Dale cuerda. Siente oscilar el volante. El tiempo se ralentiza.',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80'
    ],
    specifications: [
      { label: 'Movement', labelEs: 'Movimiento', value: 'Automático Calibre 2121' },
      { label: 'Power Reserve', labelEs: 'Reserva de Marcha', value: '40 horas' },
      { label: 'Case', labelEs: 'Caja', value: 'Acero inoxidable, 39mm' },
      { label: 'Water Resistance', labelEs: 'Resistencia al Agua', value: '50m' },
    ],
    limited: true,
    inStock: true,
  },
  {
    id: 'reloj-grand-seiko-spring',
    name: 'Grand Seiko Spring Drive',
    nameEs: 'Grand Seiko Spring Drive',
    category: 'watches',
    price: 8500,
    currency: 'USD',
    story: 'Japanese precision meets Swiss tradition. The smoothest seconds hand in watchmaking.',
    storyEs: 'Precisión japonesa encuentra tradición suiza. La aguja de segundos más suave de la relojería.',
    origin: 'Shiojiri, Japan',
    originEs: 'Shiojiri, Japón',
    ritual: 'Observe the sweep. No tick. Pure flow. Zazen for the wrist.',
    ritualEs: 'Observa el barrido. Sin tic-tac. Flujo puro. Zazen para la muñeca.',
    images: ['https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=80'],
    specifications: [
      { label: 'Movement', labelEs: 'Movimiento', value: 'Spring Drive 9R65' },
      { label: 'Power Reserve', labelEs: 'Reserva de Marcha', value: '72 horas' },
      { label: 'Case', labelEs: 'Caja', value: 'Titanio, 40mm' },
      { label: 'Accuracy', labelEs: 'Precisión', value: '±1 segundo/día' },
    ],
    inStock: true,
  },

  // PERFUMES
  {
    id: 'perfume-oud-eternal',
    name: 'Oud Eternal',
    nameEs: 'Oud Eterno',
    category: 'perfumes',
    price: 650,
    currency: 'USD',
    story: 'Liquid gold from the Aquilaria tree. 50 years to form. 5 seconds to captivate.',
    storyEs: 'Oro líquido del árbol Aquilaria. 50 años para formarse. 5 segundos para cautivar.',
    origin: 'Assam, India',
    originEs: 'Assam, India',
    ritual: 'One drop. Behind the ear. Let it warm on skin. The scent reveals itself slowly—like trust.',
    ritualEs: 'Una gota. Detrás de la oreja. Déjalo calentar en la piel. El aroma se revela lentamente—como la confianza.',
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80'
    ],
    specifications: [
      { label: 'Concentration', labelEs: 'Concentración', value: 'Extrait de Parfum' },
      { label: 'Volume', labelEs: 'Volumen', value: '50ml' },
      { label: 'Notes', labelEs: 'Notas', value: 'Oud, Ámbar, Sándalo' },
      { label: 'Longevity', labelEs: 'Duración', value: '12+ horas' },
    ],
    limited: true,
    inStock: true,
  },
  {
    id: 'perfume-tobacco-noir',
    name: 'Tobacco Noir',
    nameEs: 'Tabaco Noir',
    category: 'perfumes',
    price: 420,
    currency: 'USD',
    story: 'The scent of a Parisian gentleman club, 1958. Leather chairs. Oak paneling. Secrets.',
    storyEs: 'El aroma de un club de caballeros parisino, 1958. Sillas de cuero. Paneles de roble. Secretos.',
    origin: 'Grasse, France',
    originEs: 'Grasse, Francia',
    ritual: 'Spray once. Walk through the mist. The scent finds you.',
    ritualEs: 'Rocía una vez. Camina a través de la niebla. El aroma te encuentra.',
    images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80'],
    specifications: [
      { label: 'Concentration', labelEs: 'Concentración', value: 'Eau de Parfum' },
      { label: 'Volume', labelEs: 'Volumen', value: '100ml' },
      { label: 'Notes', labelEs: 'Notas', value: 'Tabaco, Cuero, Vainilla' },
      { label: 'Longevity', labelEs: 'Duración', value: '8+ horas' },
    ],
    inStock: true,
  },

  // ACCESORIOS
  {
    id: 'acc-diario-florentino',
    name: 'Florentine Leather Journal',
    nameEs: 'Diario de Cuero Florentino',
    category: 'accessories',
    price: 280,
    currency: 'USD',
    story: 'Full-grain Italian leather that ages like your wisdom. Pages for thoughts that matter.',
    storyEs: 'Cuero italiano de grano completo que envejece como tu sabiduría. Páginas para pensamientos que importan.',
    origin: 'Florence, Italy',
    originEs: 'Florencia, Italia',
    ritual: 'Morning coffee. Open journal. Write three thoughts. No distractions.',
    ritualEs: 'Café matutino. Abre el diario. Escribe tres pensamientos. Sin distracciones.',
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98b0225?w=1200&q=80'],
    specifications: [
      { label: 'Material', labelEs: 'Material', value: 'Cuero italiano grano completo' },
      { label: 'Pages', labelEs: 'Páginas', value: '240 hojas, marfil' },
      { label: 'Size', labelEs: 'Tamaño', value: '21.5cm × 28cm' },
      { label: 'Closure', labelEs: 'Cierre', value: 'Hebilla de latón' },
    ],
    inStock: true,
  },
  {
    id: 'acc-cortador-damasco',
    name: 'Damascus Steel Guillotine',
    nameEs: 'Guillotina de Acero Damasco',
    category: 'accessories',
    price: 195,
    currency: 'USD',
    story: '67 layers of folded steel. A tool that becomes ritual.',
    storyEs: '67 capas de acero plegado. Una herramienta que se convierte en ritual.',
    origin: 'Sheffield, England',
    originEs: 'Sheffield, Inglaterra',
    ritual: 'Feel the weight. One clean cut. Precision matters.',
    ritualEs: 'Siente el peso. Un corte limpio. La precisión importa.',
    images: ['https://images.unsplash.com/photo-1610461888400-5f7baeb3d0d8?w=1200&q=80'],
    specifications: [
      { label: 'Material', labelEs: 'Material', value: 'Acero Damasco' },
      { label: 'Blade', labelEs: 'Hoja', value: 'Autoafilable' },
      { label: 'Weight', labelEs: 'Peso', value: '180g' },
      { label: 'Finish', labelEs: 'Acabado', value: 'Pulido a mano' },
    ],
    inStock: true,
  },
];

export function getProductsByCategory(category: Product['category']) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.limited);
}
