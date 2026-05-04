import React from 'react';
import CityBasePage from '../CityBasePage';

const DoloresPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Dolores",
                "description": "Cerrajeros de coches en Dolores. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Dolores, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-dolores"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="dolores" extraSEO={extraSEO} />;
};

export default DoloresPage;
