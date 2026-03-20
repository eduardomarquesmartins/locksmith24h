import React from 'react';
import CityBasePage from '../CityBasePage';

const SanMiguelPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Miguel de Salinas",
                "description": "Cerrajeros de coches en San Miguel de Salinas. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "San Miguel de Salinas, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-san-miguel-de-salinas"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="san-miguel-de-salinas" extraSEO={extraSEO} />;
};

export default SanMiguelPage;
