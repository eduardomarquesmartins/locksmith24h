import React from 'react';
import CityBasePage from '../CityBasePage';

const RojalesPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Rojales",
                "description": "Cerrajeros de coches en Rojales. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Rojales, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-rojales"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="rojales" extraSEO={extraSEO} />;
};

export default RojalesPage;
