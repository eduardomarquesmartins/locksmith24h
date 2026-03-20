import React from 'react';
import CityBasePage from '../CityBasePage';

const FormenteraPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Formentera del Segura",
                "description": "Cerrajeros de coches en Formentera del Segura. Especialistas en apertura de vehículos y duplicado de llaves 24h.",
                "areaServed": "Formentera del Segura, Alicante",
                "telephone": "+34602659054",
                "url": "https://locksmith24h.es/cerrajero-formentera-del-segura"
            })}
        </script>
    );
    return <CityBasePage citySlugOverride="formentera-del-segura" extraSEO={extraSEO} />;
};

export default FormenteraPage;
