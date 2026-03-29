import React from 'react';
import CityBasePage from '../CityBasePage';

const BenijofarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Benijófar",
                "description": "Cerrajeros de coches en Benijófar. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Benijófar, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-benijofar"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="benijofar" extraSEO={extraSEO} />;
};

export default BenijofarPage;
