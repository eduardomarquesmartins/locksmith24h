import React from 'react';
import CityBasePage from '../CityBasePage';

const ElAlgarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h El Algar",
                "description": "Cerrajeros de coches en El Algar. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "El Algar, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-el-algar"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="el-algar" extraSEO={extraSEO} />;
};

export default ElAlgarPage;
