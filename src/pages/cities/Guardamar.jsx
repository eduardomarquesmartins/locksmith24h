import React from 'react';
import CityBasePage from '../CityBasePage';

const GuardamarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Guardamar del Segura",
                "description": "Cerrajeros de coches en Guardamar del Segura. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Guardamar del Segura, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-guardamar-del-segura"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="guardamar-del-segura" extraSEO={extraSEO} />;
};

export default GuardamarPage;
