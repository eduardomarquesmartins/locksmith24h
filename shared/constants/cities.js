export const CITIES = [
    "Alicante", "Cartagena", "Lorca", "Molina de Segura", "Murcia",
    "Abanilla", "Abarán", "Albatera", "Albudeite", "Alcantarilla", "Aledo", "Algorfa", "Alguazas", "Alhama de Murcia",
    "Almoradí", "Archena", "Benejúzar", "Benferri", "Beniel", "Benijófar", "Bigastro", "Blanca", "Bullas", "Calasparra",
    "Callosa de Segura", "Campos del Río", "Caravaca de la Cruz", "Catral", "Cehegín", "Ceutí", "Cieza", "Cox",
    "Daya Nueva", "Daya Vieja", "Dolores", "Formentera del Segura", "Fortuna", "Fuente Álamo de Murcia",
    "Granja de Rocamora", "Guardamar del Segura", "Jacarilla", "Jumilla", "La Unión", "Las Torres de Cotillas",
    "Librilla", "Lorquí", "Los Alcázares", "Los Montesinos", "Mazarrón", "Moratalla", "Mula", "Ojós", "Orihuela",
    "Pilar de la Horadada", "Pliego", "Puerto Lumbreras", "Rafal", "Redován", "Ricote", "Rojales", "San Fulgencio",
    "San Isidro", "San Javier", "San Miguel de Salinas", "San Pedro del Pinatar", "Santomera", "Torre-Pacheco",
    "Torrevieja", "Totana", "Ulea", "Villanueva del Río Segura", "Yecla"
].sort((a, b) => a.localeCompare(b));

export const slugify = (text) => {
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

export const getAutoKeyPath = (cityName) => {
    const slug = slugify(cityName);
    
    const mapping = {
        'pilar-de-la-horadada': '/llaves-coche-pilar-de-la-horadada',
        'san-miguel-de-salinas': '/llaves-coche-san-miguel-de-salinas',
        'guardamar-del-segura': '/llaves-coche-guardamar-del-segura',
        'orihuela': '/llaves-coche-orihuela-costa',
        'orihuela-costa': '/llaves-coche-orihuela-costa',
        'rojales': '/llaves-coche-rojales-ciudad-quesada',
        'ciudad-quesada': '/llaves-coche-rojales-ciudad-quesada',
        'dolores': '/llaves-coche-dolores',
        'san-fulgencio': '/llaves-coche-san-fulgencio-la-marina',
        'la-marina': '/llaves-coche-san-fulgencio-la-marina',
        'torrevieja': '/llaves-coche-torrevieja-orihuela-costa'
    };

    return mapping[slug] || null;
};

export const getCityNameFromSlug = (slug) => {
    // Remove "cerrajero-" if it's part of the slug provided to this function
    const actualSlug = slug.replace(/^cerrajero-/, '');
    const city = CITIES.find(c => slugify(c) === actualSlug);
    return city || actualSlug.charAt(0).toUpperCase() + actualSlug.slice(1).replace(/-/g, ' ');
};
