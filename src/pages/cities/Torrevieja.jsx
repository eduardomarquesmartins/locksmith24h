import React from 'react';
import CityBasePage from '../CityBasePage';

const TorreviejaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Torrevieja",
                "description": "Cerrajeros de coches en Torrevieja. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Torrevieja, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-torrevieja"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="torrevieja" extraSEO={extraSEO} />;
};

export default TorreviejaPage;
