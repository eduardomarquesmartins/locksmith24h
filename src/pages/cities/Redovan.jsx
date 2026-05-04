import React from 'react';
import CityBasePage from '../CityBasePage';

const RedovanPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Redován",
                "description": "Cerrajeros de coches en Redován. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Redován, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-redovan"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="redovan" extraSEO={extraSEO} />;
};

export default RedovanPage;
