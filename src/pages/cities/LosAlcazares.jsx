import React from 'react';
import CityBasePage from '../CityBasePage';

const LosAlcazaresPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Los Alcázares",
                "description": "Cerrajeros de coches en Los Alcázares. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Los Alcázares, Murcia",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-los-alcazares"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="los-alcazares" extraSEO={extraSEO} />;
};

export default LosAlcazaresPage;
