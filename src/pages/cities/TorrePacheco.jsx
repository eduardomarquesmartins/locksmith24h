import React from 'react';
import CityBasePage from '../CityBasePage';

const TorrePachecoPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Torre Pacheco",
                "description": "Cerrajeros de coches en Torre Pacheco. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Torre Pacheco, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-torre-pacheco"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="torre-pacheco" extraSEO={extraSEO} />;
};

export default TorrePachecoPage;
