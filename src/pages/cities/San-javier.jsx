import React from 'react';
import CityBasePage from '../CityBasePage';

const SanJavierPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Javier",
                "description": "Cerrajeros de coches en San Javier. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "San Javier, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-san-javier"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="san-javier" extraSEO={extraSEO} />;
};

export default SanJavierPage;
