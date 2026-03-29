import React from 'react';
import CityBasePage from '../CityBasePage';

const CatralPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Catral",
                "description": "Cerrajeros de coches en Catral. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Catral, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-catral"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="catral" extraSEO={extraSEO} />;
};

export default CatralPage;
