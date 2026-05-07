import React from 'react';
import CityBasePage from '../CityBasePage';

const SanPedroPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Pedro del Pinatar",
                "description": "Cerrajeros de coches en San Pedro del Pinatar. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "San Pedro del Pinatar, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-san-pedro-del-pinatar"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="san-pedro-del-pinatar" extraSEO={extraSEO} />;
};

export default SanPedroPage;
