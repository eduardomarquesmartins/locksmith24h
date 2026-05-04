import React from 'react';
import CityBasePage from '../CityBasePage';

const CiudadQuesadaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Ciudad Quesada",
                "description": "Cerrajeros de coches en Ciudad Quesada. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Ciudad Quesada, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-ciudad-quesada"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="ciudad-quesada" extraSEO={extraSEO} />;
};

export default CiudadQuesadaPage;
