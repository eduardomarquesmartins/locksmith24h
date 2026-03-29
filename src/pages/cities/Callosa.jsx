import React from 'react';
import CityBasePage from '../CityBasePage';

const CallosaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Callosa de Segura",
                "description": "Cerrajeros de coches en Callosa de Segura. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Callosa de Segura, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-callosa-de-segura"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="callosa-de-segura" extraSEO={extraSEO} />;
};

export default CallosaPage;
