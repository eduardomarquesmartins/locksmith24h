import React from 'react';
import CityBasePage from '../CityBasePage';

const RoldanPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Roldán",
                "description": "Cerrajeros de coches en Roldán. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Roldán, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-roldan"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="roldan" extraSEO={extraSEO} />;
};

export default RoldanPage;
