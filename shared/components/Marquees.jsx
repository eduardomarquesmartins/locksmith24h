import React from 'react';

export const BrandsMarquee = ({ t, brandsList = [] }) => (
    <section id="marcas" className="brands-marquee-section">
        <div className="container">
            <div className="section-center-header" style={{ marginBottom: '3rem' }}>
                <span className="sub-tag">{t('brands_section.tag')}</span>
                <h2>{t('brands_section.title')}</h2>
                <p>{t('brands_section.desc')}</p>
            </div>
        </div>

        <div className="marquee-container">
            <div className="marquee-track">
                {[...brandsList, ...brandsList].map((brand, index) => (
                    <div key={index} className="brand-logo-item">
                        <img src={brand} alt={`Brand ${index}`} loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const CarsMarquee = ({ t, carsList = [] }) => (
    <section className="brands-marquee-section cars-row">
        <div className="container">
            <div className="section-center-header">
                <h2>{t('cars_section.title')}</h2>
            </div>
        </div>

        <div className="marquee-container">
            <div className="marquee-track-reverse">
                {[...carsList, ...carsList].map((logo, index) => (
                    <div key={index} className="car-logo-item">
                        <img src={logo} alt={`Car Brand ${index}`} loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);
