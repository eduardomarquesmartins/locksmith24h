import React from 'react';
import CityBasePage from '../CityBasePage';

const SantiagoRiberaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Santiago de la Ribera",
                "description": "Cerrajeros de coches en Santiago de la Ribera. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Santiago de la Ribera, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-santiago-de-la-ribera"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="santiago-de-la-ribera" extraSEO={extraSEO} />;
};

export default SantiagoRiberaPage;
