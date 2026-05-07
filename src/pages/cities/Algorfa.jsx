import React from 'react';
import CityBasePage from '../CityBasePage';

const AlgorfaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Algorfa",
                "description": "Cerrajeros de coches en Algorfa. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Algorfa, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-algorfa"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="algorfa" extraSEO={extraSEO} />;
};

export default AlgorfaPage;
