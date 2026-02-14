// Product Data Layer - Dignitas
export interface Product {
  id: string;
  name: string;
  nameEs: string;
  category: 'cigars' | 'watches' | 'perfumes' | 'accessories' | 'destilados';
  subcategory?: 'single-malt' | 'cava';
  price: number;
  currency: string;
  story: string;
  storyEs: string;
  origin: string;
  originEs: string;
  ritual: string;
  ritualEs: string;
  images: string[];
  imageScale?: number;
  specifications: { label: string; labelEs: string; value: string }[];
  limited?: boolean;
  inStock: boolean;
  
  // DESTILADOS - Single Malt fields
  region?: string;
  age?: number;
  abv?: number;
  peatLevel?: 'light' | 'medium' | 'heavy';
  caskInfluence?: string;
  tastingNotes?: {
    nose: string;
    palate: string;
    finish: string;
  };
  tastingNotesEs?: {
    nose: string;
    palate: string;
    finish: string;
  };
  pairingSuggestion?: string;
  pairingSuggestionEs?: string;
  
  // DESTILADOS - Cava fields
  style?: string;
  agingClass?: string;
  grapes?: string;
  servingSuggestion?: string;
  servingSuggestionEs?: string;
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
      '/assets/puros/cohiba-reserva-01.jpg',
      '/assets/puros/cohiba-reserva-02.jpg'
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
    images: ['/assets/puros/montecristo-80.jpg'],
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
    name: 'AP Royal Oak Chronograph Blue Dial',
    nameEs: 'AP Royal Oak Cronógrafo Esfera Azul',
    category: 'watches',
    price: 42000,
    currency: 'USD',
    story: 'Gérald Genta\'s 1972 vision, reimagined. The iconic blue "Tapisserie" dial with chronograph complication.',
    storyEs: 'La visión de Gérald Genta de 1972, reimaginada. La icónica esfera azul "Tapisserie" con complicación cronógrafo.',
    origin: 'Le Brassus, Switzerland',
    originEs: 'Le Brassus, Suiza',
    ritual: 'Mechanical heartbeat on your wrist. The chronograph: precision timing for life\'s decisive moments.',
    ritualEs: 'Latido mecánico en tu muñeca. El cronógrafo: medición precisa para los momentos decisivos de la vida.',
    images: [
      '/assets/relojes/royal-oak-v3-01.jpg',
      '/assets/relojes/royal-oak-v3-02.jpg'
    ],
    imageScale: 0.9,
    specifications: [
      { label: 'Movement', labelEs: 'Movimiento', value: 'Automático Calibre 2385' },
      { label: 'Power Reserve', labelEs: 'Reserva de Marcha', value: '40 horas' },
      { label: 'Case', labelEs: 'Caja', value: 'Acero inoxidable, 41mm' },
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
    images: ['/assets/relojes/grand-seiko.jpg'],
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
      '/assets/perfumes/oud-eternal-01.jpg',
      '/assets/perfumes/oud-eternal-02.jpg'
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
    images: ['/assets/perfumes/tobacco-noir.jpg'],
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
    images: ['/assets/accesorios/diario-florentino.jpg'],
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
    images: ['/assets/accesorios/cortador-damasco.jpg'],
    specifications: [
      { label: 'Material', labelEs: 'Material', value: 'Acero Damasco' },
      { label: 'Blade', labelEs: 'Hoja', value: 'Autoafilable' },
      { label: 'Weight', labelEs: 'Peso', value: '180g' },
      { label: 'Finish', labelEs: 'Acabado', value: 'Pulido a mano' },
    ],
    inStock: true,
  },

  // DESTILADOS - SINGLE MALT WHISKY
  {
    id: 'whisky-lagavulin-16',
    name: 'Lagavulin 16 Year Old',
    nameEs: 'Lagavulin 16 Años',
    category: 'destilados',
    subcategory: 'single-malt',
    price: 185,
    currency: 'USD',
    story: 'Time, distilled. Sixteen years in oak casks. Islay peat smoke captured in amber liquid.',
    storyEs: 'El tiempo, destilado. Dieciséis años en barricas de roble. Humo de turba de Islay capturado en líquido ámbar.',
    origin: 'Islay, Scotland',
    originEs: 'Islay, Escocia',
    ritual: 'Pour. Add a single drop of water. Wait. Let the whisky breathe. The first sip is ceremony.',
    ritualEs: 'Sirve. Añade una sola gota de agua. Espera. Deja que el whisky respire. El primer sorbo es ceremonia.',
    images: [
      '/assets/destilados/whisky-hero-01.jpg',
      '/assets/destilados/whisky-glass-warm.jpg'
    ],
    specifications: [
      { label: 'Age', labelEs: 'Edad', value: '16 años' },
      { label: 'ABV', labelEs: 'Graduación', value: '43%' },
      { label: 'Volume', labelEs: 'Volumen', value: '700ml' },
      { label: 'Cask', labelEs: 'Barrica', value: 'Ex-Bourbon / Sherry' },
    ],
    region: 'Islay',
    age: 16,
    abv: 43,
    peatLevel: 'heavy',
    caskInfluence: 'Ex-Bourbon, Sherry Casks',
    tastingNotes: {
      nose: 'Intense peat smoke, seaweed, dark chocolate',
      palate: 'Rich fruit cake, sea salt, dark toffee',
      finish: 'Long, warming, maritime smoke'
    },
    tastingNotesEs: {
      nose: 'Intenso humo de turba, algas, chocolate oscuro',
      palate: 'Pastel de frutas intenso, sal marina, caramelo oscuro',
      finish: 'Largo, cálido, humo marítimo'
    },
    pairingSuggestion: 'Cohiba Reserva after dinner',
    pairingSuggestionEs: 'Cohiba Reserva después de la cena',
    limited: true,
    inStock: true,
  },
  {
    id: 'whisky-yamazaki-18',
    name: 'Yamazaki 18 Year Old',
    nameEs: 'Yamazaki 18 Años',
    category: 'destilados',
    subcategory: 'single-malt',
    price: 650,
    currency: 'USD',
    story: 'Japanese precision meets whisky tradition. Eighteen years in Mizunara oak. A pause worth keeping.',
    storyEs: 'Precisión japonesa encuentra tradición del whisky. Dieciocho años en roble Mizunara. Una pausa que vale la pena guardar.',
    origin: 'Yamazaki, Japan',
    originEs: 'Yamazaki, Japón',
    ritual: 'Silence phone. Pour neat. Small sips. This is contemplation, not consumption.',
    ritualEs: 'Silencia el teléfono. Sirve puro. Sorbos pequeños. Esto es contemplación, no consumo.',
    images: [
      '/assets/destilados/whisky-bottle-dark.jpg',
      '/assets/destilados/whisky-tumbler-wood.jpg'
    ],
    specifications: [
      { label: 'Age', labelEs: 'Edad', value: '18 años' },
      { label: 'ABV', labelEs: 'Graduación', value: '43%' },
      { label: 'Volume', labelEs: 'Volumen', value: '700ml' },
      { label: 'Cask', labelEs: 'Barrica', value: 'Mizunara Oak' },
    ],
    region: 'Japan',
    age: 18,
    abv: 43,
    peatLevel: 'light',
    caskInfluence: 'Mizunara Oak, American Oak, Sherry',
    tastingNotes: {
      nose: 'Sandalwood, coconut, dried fruit, incense',
      palate: 'Honeyed sweetness, mizunara spice, stone fruit',
      finish: 'Long, elegant, subtle smoke'
    },
    tastingNotesEs: {
      nose: 'Sándalo, coco, fruta seca, incienso',
      palate: 'Dulzor de miel, especias mizunara, fruta de hueso',
      finish: 'Largo, elegante, humo sutil'
    },
    pairingSuggestion: 'Quiet evening, leather-bound book',
    pairingSuggestionEs: 'Velada tranquila, libro encuadernado en cuero',
    limited: true,
    inStock: true,
  },
  {
    id: 'whisky-glenfiddich-21',
    name: 'Glenfiddich 21 Year Old',
    nameEs: 'Glenfiddich 21 Años',
    category: 'destilados',
    subcategory: 'single-malt',
    price: 285,
    currency: 'USD',
    story: 'Speyside elegance. Twenty-one years of patience rewarded in every pour.',
    storyEs: 'Elegancia de Speyside. Veintiún años de paciencia recompensados en cada vertido.',
    origin: 'Speyside, Scotland',
    originEs: 'Speyside, Escocia',
    ritual: 'Late evening. Dim lights. This whisky deserves your full attention.',
    ritualEs: 'Noche avanzada. Luces tenues. Este whisky merece tu plena atención.',
    images: ['/assets/destilados/glenfiddich-21.jpg'],
    specifications: [
      { label: 'Age', labelEs: 'Edad', value: '21 años' },
      { label: 'ABV', labelEs: 'Graduación', value: '40%' },
      { label: 'Volume', labelEs: 'Volumen', value: '700ml' },
      { label: 'Cask', labelEs: 'Barrica', value: 'Caribbean Rum' },
    ],
    region: 'Speyside',
    age: 21,
    abv: 40,
    peatLevel: 'light',
    caskInfluence: 'Caribbean Rum Cask Finish',
    tastingNotes: {
      nose: 'Banana, vanilla, toffee, subtle fig',
      palate: 'Creamy, lime, ginger, oak spice',
      finish: 'Smooth, warm, lingering sweetness'
    },
    tastingNotesEs: {
      nose: 'Plátano, vainilla, caramelo, higo sutil',
      palate: 'Cremoso, lima, jengibre, especias de roble',
      finish: 'Suave, cálido, dulzor persistente'
    },
    pairingSuggestion: 'Dark chocolate, 70% cacao minimum',
    pairingSuggestionEs: 'Chocolate oscuro, 70% cacao mínimo',
    inStock: true,
  },

  // DESTILADOS - VINOS DE CAVA
  {
    id: 'cava-recaredo-reserva',
    name: 'Recaredo Terrers Reserva Particular',
    nameEs: 'Recaredo Terrers Reserva Particular',
    category: 'destilados',
    subcategory: 'cava',
    price: 95,
    currency: 'USD',
    story: 'Quiet celebration. Fifty-four months on lees. Biodynamic viticulture. Catalan precision.',
    storyEs: 'Celebración silenciosa. Cincuenta y cuatro meses sobre lías. Viticultura biodinámica. Precisión catalana.',
    origin: 'Alt Penedès, Catalonia',
    originEs: 'Alt Penedès, Cataluña',
    ritual: 'Chill to 8°C. Pour slowly. The bubbles tell a story of patience.',
    ritualEs: 'Enfría a 8°C. Vierte lentamente. Las burbujas cuentan una historia de paciencia.',
    images: [
      '/assets/destilados/cava-hero-01.jpg',
      '/assets/destilados/cava-bottle-dark.jpg'
    ],
    specifications: [
      { label: 'Style', labelEs: 'Estilo', value: 'Brut Nature' },
      { label: 'Aging', labelEs: 'Crianza', value: 'Reserva Particular' },
      { label: 'Volume', labelEs: 'Volumen', value: '750ml' },
      { label: 'ABV', labelEs: 'Graduación', value: '12%' },
    ],
    style: 'Brut Nature',
    agingClass: 'Reserva Particular (54 months)',
    grapes: 'Xarel·lo, Macabeu, Parellada',
    abv: 12,
    tastingNotes: {
      nose: 'Brioche, white flowers, almond, subtle minerality',
      palate: 'Crisp apple, citrus zest, toasted hazelnut',
      finish: 'Long, clean, saline'
    },
    tastingNotesEs: {
      nose: 'Brioche, flores blancas, almendra, mineralidad sutil',
      palate: 'Manzana crujiente, cáscara de cítricos, avellana tostada',
      finish: 'Largo, limpio, salino'
    },
    servingSuggestion: 'Serve at 8°C in white wine glass',
    servingSuggestionEs: 'Servir a 8°C en copa de vino blanco',
    limited: true,
    inStock: true,
  },
  {
    id: 'cava-gramona-imperial',
    name: 'Gramona Imperial Gran Reserva',
    nameEs: 'Gramona Imperial Gran Reserva',
    category: 'destilados',
    subcategory: 'cava',
    price: 68,
    currency: 'USD',
    story: 'Six years of aging. A cava that understands time. Elegance in every bubble.',
    storyEs: 'Seis años de crianza. Un cava que entiende el tiempo. Elegancia en cada burbuja.',
    origin: 'Penedès, Catalonia',
    originEs: 'Penedès, Cataluña',
    ritual: 'Open. Let breathe for 10 minutes. Pour. Celebrate the moment, not the occasion.',
    ritualEs: 'Abre. Deja respirar 10 minutos. Vierte. Celebra el momento, no la ocasión.',
    images: [
      '/assets/destilados/cava-pour-cinematic.jpg',
      '/assets/destilados/cava-flute-elegant.jpg'
    ],
    specifications: [
      { label: 'Style', labelEs: 'Estilo', value: 'Brut' },
      { label: 'Aging', labelEs: 'Crianza', value: 'Gran Reserva' },
      { label: 'Volume', labelEs: 'Volumen', value: '750ml' },
      { label: 'ABV', labelEs: 'Graduación', value: '12%' },
    ],
    style: 'Brut',
    agingClass: 'Gran Reserva (72 months)',
    grapes: 'Xarel·lo, Macabeu, Chardonnay',
    abv: 12,
    tastingNotes: {
      nose: 'Ripe pear, honey, pastry, subtle oak',
      palate: 'Creamy mousse, green apple, brioche, citrus',
      finish: 'Balanced, persistent, elegant'
    },
    tastingNotesEs: {
      nose: 'Pera madura, miel, pastelería, roble sutil',
      palate: 'Mousse cremosa, manzana verde, brioche, cítricos',
      finish: 'Equilibrado, persistente, elegante'
    },
    servingSuggestion: 'Pair with oysters or aged cheese',
    servingSuggestionEs: 'Maridar con ostras o queso añejo',
    inStock: true,
  },
  {
    id: 'cava-mestres-clos-damiana',
    name: 'Mestres Clos Damiana Gran Reserva',
    nameEs: 'Mestres Clos Damiana Gran Reserva',
    category: 'destilados',
    subcategory: 'cava',
    price: 125,
    currency: 'USD',
    story: 'Fifteen years in bottle. The rarest cava in Catalonia. A liquid monument to patience.',
    storyEs: 'Quince años en botella. El cava más raro de Cataluña. Un monumento líquido a la paciencia.',
    origin: 'Penedès, Catalonia',
    originEs: 'Penedès, Cataluña',
    ritual: 'Reserve for moments that matter. This is not a toast—it is a statement.',
    ritualEs: 'Reserva para momentos que importan. Esto no es un brindis—es una declaración.',
    images: [
      '/assets/destilados/cava-cellar-barrel.jpg',
      '/assets/destilados/cava-bottle-cork.jpg'
    ],
    specifications: [
      { label: 'Style', labelEs: 'Estilo', value: 'Brut Nature' },
      { label: 'Aging', labelEs: 'Crianza', value: 'Gran Reserva' },
      { label: 'Volume', labelEs: 'Volumen', value: '750ml' },
      { label: 'ABV', labelEs: 'Graduación', value: '12.5%' },
    ],
    style: 'Brut Nature',
    agingClass: 'Gran Reserva (180 months)',
    grapes: 'Parellada, Xarel·lo, Macabeu',
    abv: 12.5,
    tastingNotes: {
      nose: 'Dried apricot, toasted almonds, beeswax, complexity',
      palate: 'Nutty richness, aged fruit, mineral backbone',
      finish: 'Exceptionally long, layered, profound'
    },
    tastingNotesEs: {
      nose: 'Albaricoque seco, almendras tostadas, cera de abeja, complejidad',
      palate: 'Riqueza de frutos secos, fruta añejada, columna mineral',
      finish: 'Excepcionalmente largo, estratificado, profundo'
    },
    servingSuggestion: 'Meditative drinking, no food needed',
    servingSuggestionEs: 'Bebida meditativa, sin necesidad de comida',
    limited: true,
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
