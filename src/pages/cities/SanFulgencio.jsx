import React from 'react';
import CityBasePage from '../CityBasePage';

const SanFulgencioPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Fulgencio",
                "description": "Cerrajeros de coches en San Fulgencio. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "San Fulgencio, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-san-fulgencio"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="san-fulgencio" extraSEO={extraSEO} />;
};

export default SanFulgencioPage;
