import React from 'react';
import CityBasePage from '../CityBasePage';

const GranAlacantPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Gran Alacant",
                "description": "Cerrajeros de coches en Gran Alacant. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Gran Alacant, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-gran-alacant"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="gran-alacant" extraSEO={extraSEO} />;
};

export default GranAlacantPage;
