import React from 'react';
import CityBasePage from '../CityBasePage';

const DayaViejaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Daya Vieja",
                "description": "Cerrajeros de coches en Daya Vieja. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Daya Vieja, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-daya-vieja"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="daya-vieja" extraSEO={extraSEO} />;
};

export default DayaViejaPage;
