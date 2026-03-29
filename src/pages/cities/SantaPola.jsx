import React from 'react';
import CityBasePage from '../CityBasePage';

const SantaPolaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Santa Pola",
                "description": "Cerrajeros de coches en Santa Pola. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Santa Pola, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-santa-pola"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="santa-pola" extraSEO={extraSEO} />;
};

export default SantaPolaPage;
