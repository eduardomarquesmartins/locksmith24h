import React from 'react';
import CityBasePage from '../CityBasePage';

const LaMangaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h La Manga",
                "description": "Cerrajeros de coches en La Manga. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "La Manga, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-la-manga"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="la-manga" extraSEO={extraSEO} />;
};

export default LaMangaPage;
