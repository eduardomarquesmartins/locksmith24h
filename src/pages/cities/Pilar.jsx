import React from 'react';
import CityBasePage from '../CityBasePage';

const PilarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Pilar de la Horadada",
                "description": "Cerrajeros de coches en Pilar de la Horadada. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Pilar de la Horadada, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-pilar-de-la-horadada"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="pilar-de-la-horadada" extraSEO={extraSEO} />;
};

export default PilarPage;
