import React from 'react';
import CityBasePage from '../CityBasePage';

const ElchePage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Elche",
                "description": "Cerrajeros de coches en Elche. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Elche, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-elche"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="elche" extraSEO={extraSEO} />;
};

export default ElchePage;
