import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Shield, CheckCircle2, MapPin, Key, Zap, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { slugify, getAutoKeyPath } from '@shared/constants/cities';
import SEO from '../components/SEO';
import heroBg from '../assets/images/ui/carbackground.png';
import './AutoKeysPage.css';

// Shared Components
import Portfolio from '@shared/components/Portfolio';

// Dynamic asset loading for shared gallery
const galleryPhotos = import.meta.glob('../assets/images/gallery/*.webp', { eager: true });
const photosList = Object.values(galleryPhotos).map(mod => mod.default);

const WhatsAppIcon = ({ size = 24, fill = "currentColor", ...props }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const AutoKeysPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = t('auto_keys_landing.services_list', { returnObjects: true }) || [];
    const urgentFeatures = t('auto_keys_landing.urgent_features', { returnObjects: true }) || [];
    const zones = t('auto_keys_landing.zones_list', { returnObjects: true }) || [];
    const pricing = t('auto_keys_landing.pricing_list', { returnObjects: true }) || [];
    const partnerItems = t('auto_keys_landing.partner_items', { returnObjects: true }) || [];

    return (
        <div className="ak-page">
            <SEO 
                title={t('auto_keys_landing.hero_title')} 
                description={t('auto_keys_landing.hero_text')} 
            />

            {/* 1. Hero Section */}
            <section
                className="ak-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${heroBg})`,
                }}
            >
                <div className="container ak-hero-container">
                    <motion.div 
                        className="ak-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="ak-hero-title">
                            {t('auto_keys_landing.hero_title')}
                        </h1>
                        <p className="ak-hero-subtitle">
                            {t('auto_keys_landing.hero_text')}
                        </p>
                        
                        <motion.div 
                            className="ak-hero-highlight"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap size={28} />
                            {t('auto_keys_landing.hero_subtext')}
                        </motion.div>

                        <div className="ak-hero-buttons">
                            <a href="tel:+34602659054" className="ak-btn ak-btn-primary">
                                <Phone size={24} /> {t('city_page.call_btn')}
                            </a>
                            <a href="https://wa.me/34602659054" className="ak-btn ak-btn-whatsapp">
                                <WhatsAppIcon size={24} /> {t('city_page.wa_btn')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Servicios */}
            <section className="ak-section ak-bg-white">
                <div className="container">
                    <div className="ak-services-grid">
                        <div className="ak-services-main">
                            <div className="ak-header-highlight">
                                {t('auto_keys_landing.services_title')}
                            </div>
                            <h2 className="ak-section-title">{t('auto_keys_landing.services_title')}</h2>
                            <p className="ak-section-subtitle">
                                {t('auto_keys_landing.services_desc')}
                            </p>
                            <div className="ak-services-list">
                                {services.map((item, idx) => (
                                    <div key={idx} className="ak-pill">
                                        <CheckCircle2 size={20} className="ak-icon-yellow" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ak-services-side">
                             <Shield className="ak-icon-large ak-icon-yellow ak-margin-b" size={48} />
                             <h4 className="ak-side-title">{t('why_choose.col1_title')}</h4>
                             <p className="ak-side-text">{t('auto_keys_landing.services_footer')}</p>
                             <a href="tel:+34602659054" className="ak-side-phone">
                                 <Phone size={24} className="ak-icon-yellow" /> +34 602 659 054
                             </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Servicio Urgente */}
            <section className="ak-section ak-bg-black ak-urgent-section">
                <div className="container">
                    <div className="ak-section-header">
                        <h2 className="ak-section-title ak-text-white">{t('auto_keys_landing.urgent_title')}</h2>
                        <p className="ak-section-subtitle ak-text-light">{t('auto_keys_landing.urgent_text')}</p>
                    </div>

                    <div className="ak-cards-grid ak-grid-3">
                        {urgentFeatures.map((item, idx) => {
                            const icons = [<Clock />, <Zap />, <Shield />];
                            const Icon = icons[idx] || <CheckCircle2 />;
                            return (
                                <div key={idx} className="ak-card ak-card-dark ak-hover-up">
                                    {React.cloneElement(Icon, { className: "ak-card-icon ak-icon-yellow", size: 40 })}
                                    <h3 className="ak-card-title ak-text-white">{item}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            {/* Middle CTA Hook */}
            <section className="ak-section ak-bg-gray ak-inline-cta">
                <div className="container">
                    <div className="ak-inline-cta-content">
                        <div className="ak-inline-cta-text">
                            <h2 className="ak-section-title">{t('inline_cta1.title')}</h2>
                            <p className="ak-section-subtitle">{t('inline_cta1.subtitle')}</p>
                        </div>
                        <div className="ak-inline-cta-action">
                             <a href="https://wa.me/34602659054" className="ak-btn ak-btn-primary">
                                 <WhatsAppIcon size={24} /> {t('inline_cta1.btn')}
                             </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Zonas */}
            <section className="ak-section ak-bg-gray">
                <div className="container">
                    <div className="ak-header-highlight">
                        {t('auto_keys_landing.zones_title')}
                    </div>
                    <div className="ak-zones-header">
                        <h2 className="ak-section-title ak-max-w-md">
                            {t('auto_keys_landing.zones_text')}
                        </h2>
                        <span className="ak-zones-footer">{t('auto_keys_landing.zones_footer')}</span>
                    </div>
                    
                    <div className="ak-pill-grid">
                        {zones.map((item, idx) => (
                            <Link 
                                key={idx} 
                                to={getAutoKeyPath(item) || `/llaves-coche-${slugify(item)}`}
                                className="ak-pill ak-pill-white ak-hover-border"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <MapPin size={20} className="ak-icon-yellow" />
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Precios */}
            <section className="ak-section ak-bg-white">
                <div className="container">
                    <div className="ak-section-header">
                        <h2 className="ak-section-title">{t('auto_keys_landing.pricing_title')}</h2>
                        <p className="ak-section-subtitle">{t('auto_keys_landing.pricing_text')}</p>
                    </div>

                    <div className="ak-cards-grid">
                        {pricing.map((item, idx) => (
                            <div key={idx} className="ak-card ak-card-light">
                                <CheckCircle2 className="ak-icon-large ak-icon-yellow ak-margin-b" size={48} />
                                <span className="ak-card-value">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5.5 Portfolio / Showcase */}
            <Portfolio t={t} photos={photosList} />

            {/* 6. Cerrajería General */}
            <section className="ak-section ak-bg-gray">
                <div className="container">
                    <div className="ak-partner-banner">
                        <div className="ak-partner-bg-glow"></div>
                        <div className="ak-partner-content">
                            <div className="ak-partner-tag">
                                {t('auto_keys_landing.partner_title')}
                            </div>
                            <h3 className="ak-partner-title">
                                {t('external_site.text')}
                            </h3>
                            <div className="ak-partner-items">
                                {partnerItems.map((item, idx) => (
                                    <div key={idx} className="ak-partner-item">
                                        <CheckCircle2 size={16} className="ak-icon-yellow" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a 
                            href={t('external_site.url')} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ak-btn ak-btn-primary ak-btn-partner"
                        >
                            {t('external_site.link_text')}
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="ak-cta-section">
                <div className="ak-cta-pattern"></div>
                <div className="container ak-cta-container">
                    <h2 className="ak-cta-title">{t('auto_keys_landing.cta_title')}</h2>
                    <p className="ak-cta-subtitle">
                        {t('auto_keys_landing.cta_text')}
                    </p>
                    
                    <div className="ak-cta-actions">
                        <a href="tel:+34602659054" className="ak-btn-massive">
                            <Phone size={56} className="ak-pulse-icon" /> +34 602 659 054
                        </a>
                        <a href="https://wa.me/34602659054" className="ak-btn-massive ak-btn-massive-wa">
                            <WhatsAppIcon size={56} className="ak-pulse-icon" /> {t('city_page.wa_btn')}
                        </a>
                        <div className="ak-cta-badge">
                             <div className="ak-status-dot"></div>
                             {t('auto_keys_landing.cta_badge')}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AutoKeysPage;
