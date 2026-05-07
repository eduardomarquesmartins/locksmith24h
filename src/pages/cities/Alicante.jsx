import React from 'react';
import CityBasePage from '../CityBasePage';

const AlicantePage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Alicante",
                "description": "Cerrajeros de coches en Alicante capital. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Alicante, Costa Blanca",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-alicante"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="alicante" extraSEO={extraSEO} />;
};

export default AlicantePage;
