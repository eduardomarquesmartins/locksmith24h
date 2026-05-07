import React from 'react';
import CityBasePage from '../CityBasePage';

const CartagenaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Cartagena",
                "description": "Cerrajeros de coches en Cartagena. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Cartagena, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-cartagena"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="cartagena" extraSEO={extraSEO} />;
};

export default CartagenaPage;
