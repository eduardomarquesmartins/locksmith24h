import React from 'react';
import CityBasePage from '../CityBasePage';

const GranjaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Granja de Rocamora",
                "description": "Cerrajeros de coches en Granja de Rocamora. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Granja de Rocamora, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-granja-de-rocamora"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="granja-de-rocamora" extraSEO={extraSEO} />;
};

export default GranjaPage;
