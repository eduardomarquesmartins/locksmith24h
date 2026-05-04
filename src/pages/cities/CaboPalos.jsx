import React from 'react';
import CityBasePage from '../CityBasePage';

const CaboPalosPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Cabo de Palos",
                "description": "Cerrajeros de coches en Cabo de Palos. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Cabo de Palos, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-cabo-de-palos"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="cabo-de-palos" extraSEO={extraSEO} />;
};

export default CaboPalosPage;
