// ===== Pokédex App =====
// Spanish Pokédex using PokéAPI

// Configuration
const CONFIG = {
    API_BASE: 'https://pokeapi.co/api/v2',
    POKEMON_PER_PAGE: 30,
    MAX_POKEMON: 1025,
    LANGUAGE: 'es'
};

// Spanish type translations
const TYPE_TRANSLATIONS = {
    normal: 'Normal',
    fire: 'Fuego',
    water: 'Agua',
    electric: 'Eléctrico',
    grass: 'Planta',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    psychic: 'Psíquico',
    bug: 'Bicho',
    rock: 'Roca',
    ghost: 'Fantasma',
    dragon: 'Dragón',
    dark: 'Siniestro',
    steel: 'Acero',
    fairy: 'Hada'
};

// Spanish stat translations
const STAT_TRANSLATIONS = {
    hp: 'PS',
    attack: 'Ataque',
    defense: 'Defensa',
    'special-attack': 'At. Esp.',
    'special-defense': 'Def. Esp.',
    speed: 'Velocidad'
};

// Generation ranges
const GENERATIONS = {
    1: { start: 1, end: 151, name: 'Kanto' },
    2: { start: 152, end: 251, name: 'Johto' },
    3: { start: 252, end: 386, name: 'Hoenn' },
    4: { start: 387, end: 493, name: 'Sinnoh' },
    5: { start: 494, end: 649, name: 'Teselia' },
    6: { start: 650, end: 721, name: 'Kalos' },
    7: { start: 722, end: 809, name: 'Alola' },
    8: { start: 810, end: 905, name: 'Galar/Hisui' },
    9: { start: 906, end: 1025, name: 'Paldea' }
};

// State
let state = {
    allPokemon: [],
    displayedPokemon: [],
    currentOffset: 0,
    isLoading: false,
    searchQuery: '',
    typeFilter: '',
    generationFilter: '',
    pokemonCache: new Map(),
    speciesCache: new Map()
};

// DOM Elements
const elements = {
    pokemonGrid: document.getElementById('pokemonGrid'),
    loading: document.getElementById('loading'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    typeFilter: document.getElementById('typeFilter'),
    generationFilter: document.getElementById('generationFilter'),
    listView: document.getElementById('listView'),
    detailView: document.getElementById('detailView'),
    detailContent: document.getElementById('detailContent'),
    backBtn: document.getElementById('backBtn')
};

// ===== API Functions =====

async function fetchPokemonList() {
    try {
        const response = await fetch(`${CONFIG.API_BASE}/pokemon?limit=${CONFIG.MAX_POKEMON}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        return [];
    }
}

async function fetchPokemonDetails(pokemonIdOrName) {
    const cacheKey = pokemonIdOrName.toString().toLowerCase();
    
    if (state.pokemonCache.has(cacheKey)) {
        return state.pokemonCache.get(cacheKey);
    }
    
    try {
        const response = await fetch(`${CONFIG.API_BASE}/pokemon/${pokemonIdOrName}`);
        const data = await response.json();
        state.pokemonCache.set(cacheKey, data);
        return data;
    } catch (error) {
        console.error(`Error fetching Pokemon ${pokemonIdOrName}:`, error);
        return null;
    }
}

async function fetchPokemonSpecies(pokemonId) {
    if (state.speciesCache.has(pokemonId)) {
        return state.speciesCache.get(pokemonId);
    }
    
    try {
        const response = await fetch(`${CONFIG.API_BASE}/pokemon-species/${pokemonId}`);
        const data = await response.json();
        state.speciesCache.set(pokemonId, data);
        return data;
    } catch (error) {
        console.error(`Error fetching species ${pokemonId}:`, error);
        return null;
    }
}

async function fetchEvolutionChain(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching evolution chain:', error);
        return null;
    }
}

// ===== Helper Functions =====

function getSpanishName(species) {
    if (!species || !species.names) return null;
    const spanishName = species.names.find(n => n.language.name === CONFIG.LANGUAGE);
    return spanishName ? spanishName.name : null;
}

function getSpanishGenus(species) {
    if (!species || !species.genera) return null;
    const spanishGenus = species.genera.find(g => g.language.name === CONFIG.LANGUAGE);
    return spanishGenus ? spanishGenus.genus : null;
}

function getSpanishDescription(species) {
    if (!species || !species.flavor_text_entries) return null;
    const spanishEntries = species.flavor_text_entries.filter(
        e => e.language.name === CONFIG.LANGUAGE
    );
    if (spanishEntries.length === 0) return null;
    // Get the most recent entry and clean it
    const entry = spanishEntries[spanishEntries.length - 1];
    return entry.flavor_text.replace(/\f|\n/g, ' ').replace(/\s+/g, ' ').trim();
}

function formatPokemonNumber(id) {
    return `#${id.toString().padStart(4, '0')}`;
}

function getPokemonGeneration(id) {
    for (const [gen, range] of Object.entries(GENERATIONS)) {
        if (id >= range.start && id <= range.end) {
            return parseInt(gen);
        }
    }
    return null;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getTypeClass(type) {
    return `type-${type}`;
}

function translateType(type) {
    return TYPE_TRANSLATIONS[type] || capitalizeFirst(type);
}

function translateStat(stat) {
    return STAT_TRANSLATIONS[stat] || stat;
}

function getStatClass(stat) {
    const classes = {
        hp: 'hp',
        attack: 'attack',
        defense: 'defense',
        'special-attack': 'sp-attack',
        'special-defense': 'sp-defense',
        speed: 'speed'
    };
    return classes[stat] || '';
}

function decimetersToMeters(dm) {
    return (dm / 10).toFixed(1);
}

function hectogramsToKg(hg) {
    return (hg / 10).toFixed(1);
}

// ===== Rendering Functions =====

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.dataset.id = pokemon.id;
    
    const types = pokemon.types.map(t => t.type.name);
    const typeBadges = types.map(type => 
        `<span class="type-badge ${getTypeClass(type)}">${translateType(type)}</span>`
    ).join('');
    
    const sprite = pokemon.sprites.other['official-artwork'].front_default || 
                   pokemon.sprites.front_default;
    
    card.innerHTML = `
        <div class="pokemon-number">${formatPokemonNumber(pokemon.id)}</div>
        <div class="pokemon-image-container">
            <img src="${sprite}" alt="${pokemon.name}" loading="lazy">
        </div>
        <div class="pokemon-name">${pokemon.displayName || capitalizeFirst(pokemon.name)}</div>
        <div class="pokemon-types">${typeBadges}</div>
    `;
    
    card.addEventListener('click', () => showPokemonDetail(pokemon.id));
    
    return card;
}

async function renderPokemonBatch(pokemonList) {
    const fragment = document.createDocumentFragment();
    
    const detailedPokemon = await Promise.all(
        pokemonList.map(async (p) => {
            const details = await fetchPokemonDetails(p.name || p.id);
            if (details) {
                // Try to get Spanish name
                const species = await fetchPokemonSpecies(details.id);
                details.displayName = getSpanishName(species) || capitalizeFirst(details.name);
            }
            return details;
        })
    );
    
    detailedPokemon
        .filter(p => p !== null)
        .forEach(pokemon => {
            const card = createPokemonCard(pokemon);
            fragment.appendChild(card);
        });
    
    elements.pokemonGrid.appendChild(fragment);
}

async function showPokemonDetail(pokemonId) {
    elements.listView.classList.add('hidden');
    elements.detailView.classList.add('active');
    elements.detailContent.innerHTML = '<div class="loading"><div class="pokeball-loader"><div class="pokeball-top"></div><div class="pokeball-center"></div><div class="pokeball-bottom"></div></div><p>Cargando datos...</p></div>';
    
    const pokemon = await fetchPokemonDetails(pokemonId);
    const species = await fetchPokemonSpecies(pokemonId);
    
    if (!pokemon) {
        elements.detailContent.innerHTML = '<div class="no-results"><h3>Error</h3><p>No se pudieron cargar los datos del Pokémon</p></div>';
        return;
    }
    
    const spanishName = getSpanishName(species) || capitalizeFirst(pokemon.name);
    const spanishGenus = getSpanishGenus(species) || '';
    const spanishDescription = getSpanishDescription(species) || 'No hay descripción disponible en español.';
    
    const types = pokemon.types.map(t => t.type.name);
    const typeBadges = types.map(type => 
        `<span class="type-badge ${getTypeClass(type)}">${translateType(type)}</span>`
    ).join('');
    
    const sprite = pokemon.sprites.other['official-artwork'].front_default || 
                   pokemon.sprites.front_default;
    
    // Stats
    const statsHTML = pokemon.stats.map(stat => {
        const percentage = Math.min((stat.base_stat / 255) * 100, 100);
        return `
            <div class="stat-row">
                <div class="stat-header">
                    <span class="stat-name">${translateStat(stat.stat.name)}</span>
                    <span class="stat-value">${stat.base_stat}</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-fill ${getStatClass(stat.stat.name)}" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
    
    // Abilities
    const abilities = pokemon.abilities.map(a => capitalizeFirst(a.ability.name.replace('-', ' '))).join(', ');
    
    // Evolution chain
    let evolutionHTML = '';
    if (species && species.evolution_chain) {
        const evolutionData = await fetchEvolutionChain(species.evolution_chain.url);
        if (evolutionData) {
            evolutionHTML = await renderEvolutionChain(evolutionData.chain, pokemon.id);
        }
    }
    
    elements.detailContent.innerHTML = `
        <div class="detail-header">
            <div class="detail-image-container">
                <img src="${sprite}" alt="${spanishName}" class="detail-image">
            </div>
            <div class="detail-number">${formatPokemonNumber(pokemon.id)}</div>
            <h2 class="detail-name">${spanishName}</h2>
            <div class="detail-types">${typeBadges}</div>
            ${spanishGenus ? `<p class="detail-genus">${spanishGenus}</p>` : ''}
        </div>
        
        <div class="detail-info-grid">
            <div class="info-card">
                <h3>Información</h3>
                <div class="info-row">
                    <span class="info-label">Altura</span>
                    <span class="info-value">${decimetersToMeters(pokemon.height)} m</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Peso</span>
                    <span class="info-value">${hectogramsToKg(pokemon.weight)} kg</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Generación</span>
                    <span class="info-value">Gen ${getPokemonGeneration(pokemon.id)}</span>
                </div>
            </div>
            
            <div class="info-card">
                <h3>Habilidades</h3>
                <div class="info-row">
                    <span class="info-value">${abilities}</span>
                </div>
            </div>
        </div>
        
        <div class="stats-container">
            <h3>Estadísticas Base</h3>
            ${statsHTML}
        </div>
        
        <div class="description-card">
            <h3>Descripción</h3>
            <p class="description-text">${spanishDescription}</p>
        </div>
        
        ${evolutionHTML ? `
        <div class="evolution-card">
            <h3>Cadena Evolutiva</h3>
            <div class="evolution-chain">${evolutionHTML}</div>
        </div>
        ` : ''}
    `;
}

async function renderEvolutionChain(chain, currentPokemonId) {
    const evolutions = [];
    
    function extractEvolutions(node) {
        const pokemonName = node.species.name;
        const pokemonId = node.species.url.split('/').filter(Boolean).pop();
        evolutions.push({ name: pokemonName, id: parseInt(pokemonId) });
        
        node.evolves_to.forEach(evolution => extractEvolutions(evolution));
    }
    
    extractEvolutions(chain);
    
    // Get sprites and Spanish names for all evolutions
    const evolutionDetails = await Promise.all(
        evolutions.map(async (evo) => {
            const pokemon = await fetchPokemonDetails(evo.id);
            const species = await fetchPokemonSpecies(evo.id);
            return {
                ...evo,
                sprite: pokemon?.sprites.other['official-artwork'].front_default || 
                        pokemon?.sprites.front_default,
                displayName: getSpanishName(species) || capitalizeFirst(evo.name)
            };
        })
    );
    
    return evolutionDetails.map((evo, index) => {
        const isCurrent = evo.id === currentPokemonId;
        const arrow = index < evolutionDetails.length - 1 ? '<span class="evolution-arrow">→</span>' : '';
        
        return `
            <div class="evolution-pokemon ${isCurrent ? 'current' : ''}" onclick="showPokemonDetail(${evo.id})">
                <img src="${evo.sprite}" alt="${evo.displayName}">
                <span>${evo.displayName}</span>
            </div>
            ${arrow}
        `;
    }).join('');
}

function showListView() {
    elements.detailView.classList.remove('active');
    elements.listView.classList.remove('hidden');
}

// ===== Filter Functions =====

function filterPokemon() {
    let filtered = [...state.allPokemon];
    
    // Apply search filter
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(p => {
            const id = parseInt(p.url.split('/').filter(Boolean).pop());
            const nameMatch = p.name.toLowerCase().includes(query);
            const idMatch = id.toString().includes(query);
            return nameMatch || idMatch;
        });
    }
    
    // Apply generation filter
    if (state.generationFilter) {
        const gen = GENERATIONS[state.generationFilter];
        filtered = filtered.filter(p => {
            const id = parseInt(p.url.split('/').filter(Boolean).pop());
            return id >= gen.start && id <= gen.end;
        });
    }
    
    return filtered;
}

async function applyFilters() {
    state.currentOffset = 0;
    elements.pokemonGrid.innerHTML = '';
    elements.loading.classList.remove('hidden');
    
    state.displayedPokemon = filterPokemon();
    
    // For type filtering, we need to fetch details
    if (state.typeFilter) {
        const typeFilteredPokemon = [];
        
        for (const p of state.displayedPokemon) {
            const id = parseInt(p.url.split('/').filter(Boolean).pop());
            const details = await fetchPokemonDetails(id);
            
            if (details && details.types.some(t => t.type.name === state.typeFilter)) {
                typeFilteredPokemon.push(p);
            }
            
            // Stop after checking enough pokemon to show initial batch
            if (typeFilteredPokemon.length >= CONFIG.POKEMON_PER_PAGE * 2) {
                break;
            }
        }
        
        state.displayedPokemon = typeFilteredPokemon;
    }
    
    elements.loading.classList.add('hidden');
    
    if (state.displayedPokemon.length === 0) {
        elements.pokemonGrid.innerHTML = `
            <div class="no-results">
                <h3>¡No se encontraron Pokémon!</h3>
                <p>Intenta con otros filtros o términos de búsqueda.</p>
            </div>
        `;
        elements.loadMoreBtn.classList.add('hidden');
        return;
    }
    
    await loadMorePokemon();
}

async function loadMorePokemon() {
    if (state.isLoading) return;
    
    state.isLoading = true;
    elements.loadMoreBtn.disabled = true;
    elements.loadMoreBtn.textContent = 'Cargando...';
    
    const batch = state.displayedPokemon.slice(
        state.currentOffset, 
        state.currentOffset + CONFIG.POKEMON_PER_PAGE
    );
    
    if (batch.length > 0) {
        await renderPokemonBatch(batch);
        state.currentOffset += CONFIG.POKEMON_PER_PAGE;
    }
    
    // Show/hide load more button
    if (state.currentOffset >= state.displayedPokemon.length) {
        elements.loadMoreBtn.classList.add('hidden');
    } else {
        elements.loadMoreBtn.classList.remove('hidden');
    }
    
    state.isLoading = false;
    elements.loadMoreBtn.disabled = false;
    elements.loadMoreBtn.textContent = 'Cargar más Pokémon';
}

// ===== Event Listeners =====

function setupEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', debounce(() => {
        state.searchQuery = elements.searchInput.value;
        applyFilters();
    }, 300));
    
    elements.searchBtn.addEventListener('click', () => {
        state.searchQuery = elements.searchInput.value;
        applyFilters();
    });
    
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            state.searchQuery = elements.searchInput.value;
            applyFilters();
        }
    });
    
    // Type filter
    elements.typeFilter.addEventListener('change', () => {
        state.typeFilter = elements.typeFilter.value;
        applyFilters();
    });
    
    // Generation filter
    elements.generationFilter.addEventListener('change', () => {
        state.generationFilter = elements.generationFilter.value;
        applyFilters();
    });
    
    // Load more
    elements.loadMoreBtn.addEventListener('click', loadMorePokemon);
    
    // Back button
    elements.backBtn.addEventListener('click', showListView);
}

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Initialization =====

async function init() {
    setupEventListeners();
    
    // Fetch initial Pokemon list
    state.allPokemon = await fetchPokemonList();
    state.displayedPokemon = [...state.allPokemon];
    
    elements.loading.classList.add('hidden');
    
    // Load initial batch
    await loadMorePokemon();
}

// Make showPokemonDetail available globally for evolution chain clicks
window.showPokemonDetail = showPokemonDetail;

// Start the app
document.addEventListener('DOMContentLoaded', init);

