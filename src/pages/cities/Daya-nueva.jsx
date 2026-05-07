import React from 'react';
import CityBasePage from '../CityBasePage';

const DayaNuevaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Daya Nueva",
                "description": "Cerrajeros de coches en Daya Nueva. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Daya Nueva, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-daya-nueva"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="daya-nueva" extraSEO={extraSEO} />;
};

export default DayaNuevaPage;
