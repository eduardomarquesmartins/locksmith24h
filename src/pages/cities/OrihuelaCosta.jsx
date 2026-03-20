import React from 'react';
import CityBasePage from '../CityBasePage';

const OrihuelaCostaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Orihuela Costa",
                "description": "Cerrajeros de coches en Orihuela Costa. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Orihuela Costa, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-orihuela-costa"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="orihuela-costa" extraSEO={extraSEO} />;
};

export default OrihuelaCostaPage;
