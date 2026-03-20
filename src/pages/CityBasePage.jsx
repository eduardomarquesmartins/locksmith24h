import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, Shield, CheckCircle2, ChevronRight, MapPin, Key, Lock, Car, ChevronDown, ChevronUp, Map } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { getCityNameFromSlug } from '@shared/constants/cities';
import SEO from '../components/SEO';
import heroBg from '../assets/images/ui/carbackground.png';

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

const getProvince = (city) => {
    if (!city) return "Murcia";
    const cleanCity = city.trim().toLowerCase();
    const alicanteCities = [
        "Alicante", "Albatera", "Algorfa", "Almoradí", "Benejúzar", "Benferri", "Benijófar",
        "Bigastro", "Callosa de Segura", "Catral", "Cox", "Daya Nueva", "Daya Vieja",
        "Dolores", "Formentera del Segura", "Granja de Rocamora", "Guardamar del Segura",
        "Jacarilla", "Los Montesinos", "Orihuela", "Pilar de la Horadada", "Rafal",
        "Redován", "Rojales", "San Fulgencio", "San Isidro", "San Miguel de Salinas", "Torrevieja"
    ].map(c => c.toLowerCase());

    return alicanteCities.includes(cleanCity) ? "Alicante" : "Murcia";
};

const CityPage = ({ citySlugOverride, extraSEO }) => {
    const { citySlug: paramCitySlug } = useParams();
    const citySlug = citySlugOverride || paramCitySlug;
    const location = useLocation();
    const { t } = useTranslation();
    const [activeFaq, setActiveFaq] = useState(null);

    // Get neighborhood from query string if present
    const searchParams = new URLSearchParams(location.search);
    const neighborhoodParam = searchParams.get('barrio');

    const baseCityName = getCityNameFromSlug(citySlug);
    const province = getProvince(baseCityName);
    const cityName = neighborhoodParam ? `${neighborhoodParam}, ${baseCityName}` : baseCityName;
    
    // Check if it's the specific Santa Lucia Cartagena page
    const isSantaLucia = baseCityName.toLowerCase().includes('santa lucía') || citySlug.includes('santa-lucia');
    const isCartagena = baseCityName.toLowerCase().includes('cartagena') || citySlug.includes('cartagena');
    const useSpecificSEO = isSantaLucia && isCartagena;

    // SEO Data
    const seoTitle = useSpecificSEO 
        ? t('city_page.santa_lucia_cartagena.title') 
        : t('city_page.title', { city: cityName });
    const seoDescription = useSpecificSEO 
        ? t('city_page.santa_lucia_cartagena.meta_description') 
        : t('city_page.meta_description', { city: cityName });

    // Evita redundância como "Alicante, Alicante" ou "Murcia, Murcia"
    const cityWithProvince = baseCityName.toLowerCase() === province.toLowerCase()
        ? cityName
        : `${cityName}, ${province}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cityWithProvince]);

    return (
        <div className="city-page-content">
            <SEO title={seoTitle} description={seoDescription} extraScripts={extraSEO} />
            
            {/* Hero Section for City */}
            <section
                className="city-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(13, 13, 13, 0.8)), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundColor: '#0d0d0d'
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="city-hero-text"
                    >
                        <span className="sub-tag">{t('city_page.hero_tag')}</span>
                        <h1>{useSpecificSEO ? t('city_page.santa_lucia_cartagena.h1') : seoTitle}</h1>

                        <div className="city-hero-actions">
                            <a href="tel:+34602659054" className="btn-primary pulse-gold">
                                <Phone size={20} /> {t('city_page.call_btn')}
                            </a>
                            <a href="https://wa.me/34602659054" className="btn-secondary pulse-green">
                                <WhatsAppIcon size={20} /> {t('city_page.wa_btn')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Narrative */}
            <section className="city-details">
                <div className="container">
                    <div className="city-grid">
                        <div className="city-main-text">
                            <div className="content-block intro-narrative">
                                <h2 className="city-section-title">
                                    {useSpecificSEO ? t('city_page.santa_lucia_cartagena.h2_services') : t('city_page.intro_title', { city: cityName })}
                                </h2>

                                <p className="lead-text">
                                    {useSpecificSEO ? t('city_page.santa_lucia_cartagena.intro') : t('city_page.intro_text', { city: cityWithProvince })}
                                </p>
                            </div>

                            {useSpecificSEO ? (
                                <>
                                    <div className="content-block advantages-narrative">
                                        <h2>{t('city_page.santa_lucia_cartagena.h2_apertura')}</h2>
                                        <p>{t('city_page.santa_lucia_cartagena.h2_apertura_text')}</p>
                                    </div>

                                    <div className="content-block process-narrative">
                                        <h2>{t('city_page.santa_lucia_cartagena.h2_near')}</h2>
                                        <p>{t('city_page.santa_lucia_cartagena.h2_near_text')}</p>
                                        <ul className="neighborhoods-list">
                                            {t('city_page.santa_lucia_cartagena.neighborhoods', { returnObjects: true }).map((item, idx) => (
                                                <li key={idx}><MapPin size={16} /> {item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="content-block process-narrative">
                                        <h2>{t('city_page.santa_lucia_cartagena.h2_urgent')}</h2>
                                        <p>{t('city_page.santa_lucia_cartagena.h2_urgent_text')}</p>
                                    </div>

                                    <div className="content-block process-narrative">
                                        <h2>{t('city_page.santa_lucia_cartagena.h2_time')}</h2>
                                        <p>{t('city_page.santa_lucia_cartagena.h2_time_text')}</p>
                                    </div>

                                    <div className="content-block process-narrative">
                                        <h2>{t('city_page.santa_lucia_cartagena.h2_cost')}</h2>
                                        <p>{t('city_page.santa_lucia_cartagena.h2_cost_text')}</p>
                                    </div>

                                    <div className="content-block process-narrative">
                                        <h2>{t('city_page.santa_lucia_cartagena.h2_call')}</h2>
                                        <p>{t('city_page.santa_lucia_cartagena.h2_call_text')}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="content-block advantages-narrative">
                                        <h3>{t('city_page.advantages_title', { city: cityWithProvince })}</h3>
                                        <p>{t('city_page.advantages_text', { city: cityWithProvince })}</p>
                                    </div>

                                    <div className="content-block process-narrative">
                                        <h3>{t('city_page.how_works_title', { city: cityWithProvince })}</h3>
                                        <p>{t('city_page.how_works_text', { city: cityWithProvince })}</p>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="city-sidebar">
                            <div className="sidebar-card">
                                <h3><Shield size={22} className="text-green" /> {t('city_page.why_us', { city: cityName })}</h3>
                                <ul className="premium-list">
                                    <li><CheckCircle2 size={18} className="text-green" /> {t('city_page.arrival')}</li>
                                    <li><CheckCircle2 size={18} className="text-green" /> {t('city_page.price')}</li>
                                    <li><CheckCircle2 size={18} className="text-green" /> {t('city_page.no_damage')}</li>
                                    <li><CheckCircle2 size={18} className="text-green" /> {t('city_page.warranty')}</li>
                                </ul>

                                <div className="sidebar-cta mt-8">
                                    <a href="tel:+34602659054" className="phone-link">
                                        <Phone size={18} /> +34 602 659 054
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section (Icons Grid) */}
            <section className="city-solutions bg-dark">
                <div className="container">
                    <div className="section-head-v2 light-text text-center">
                        <span className="sub-tag glow-green">{t('city_page.solutions_tag')}</span>
                        <h2 className="text-white">{t('city_page.solutions_title')}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">{t('city_page.solutions_desc')}</p>
                    </div>

                    <div className="solutions-list-grid mt-12">
                        <div className="sol-item">
                            <div className="sol-icon"><Car size={32} /></div>
                            <h4>{t('city_page.sol1')}</h4>
                            <p>{t('city_page.sol1_desc')}</p>
                        </div>
                        <div className="sol-item">
                            <div className="sol-icon"><Car size={32} /></div>
                            <h4>{t('city_page.sol5')}</h4>
                            <p>{t('city_page.sol5_desc')}</p>
                        </div>
                        <div className="sol-item">
                            <div className="sol-icon"><Key size={32} /></div>
                            <h4>{t('city_page.sol2')}</h4>
                            <p>{t('city_page.sol2_desc')}</p>
                        </div>
                        <div className="sol-item">
                            <div className="sol-icon"><Lock size={32} /></div>
                            <h4>{t('city_page.sol3')}</h4>
                            <p>{t('city_page.sol3_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Attention & FAQ */}
            <section className="special-faq">
                <div className="container">
                    <div className="special-attention-box p-10 rounded-3xl bg-dark-accent border border-white/10 mb-16">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Shield className="glow-green" /> {t('city_page.special_title', { city: cityName })}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {t('city_page.special_desc', { city: cityName })}
                        </p>
                    </div>

                    <div className="faq-section">
                        <div className="section-head-v2 mb-10">
                            <h2 className="text-3xl font-bold">{t('city_page.faq_title')}</h2>
                        </div>
                        
                        <div className="faq-accordion-city">
                            {/* City Specific Question */}
                            <div 
                                className={`faq-item-city ${activeFaq === 'city-q1' ? 'active' : ''}`}
                                onClick={() => setActiveFaq(activeFaq === 'city-q1' ? null : 'city-q1')}
                            >
                                <div className="faq-header-city">
                                    <h3>{t('city_page.faq_q1', { city: cityName })}</h3>
                                    <div className="faq-icon-city">
                                        {activeFaq === 'city-q1' ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {activeFaq === 'city-q1' && (
                                        <motion.div 
                                            className="faq-answer-city"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{t('city_page.faq_a1', { city: cityName })}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* General Questions */}
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                <div 
                                    key={num} 
                                    className={`faq-item-city ${activeFaq === num ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === num ? null : num)}
                                >
                                    <div className="faq-header-city">
                                        <h3>{t(`faq.q${num}`)}</h3>
                                        <div className="faq-icon-city">
                                            {activeFaq === num ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {activeFaq === num && (
                                            <motion.div 
                                                className="faq-answer-city"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p>{t(`faq.a${num}`)}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="city-final-cta pb-16">
                <div className="container">
                    <div className="final-cta-box bg-dark p-10 md:p-16 rounded-3xl border border-white/10 text-center shadow-2xl">
                        <span className="sub-tag glow-green mb-6 inline-block">{t('city_page.hero_tag')}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            {useSpecificSEO ? t('city_page.santa_lucia_cartagena.h1') : t('city_page.intro_title', { city: cityName })} 24h
                        </h2>
                        <div className="city-hero-actions justify-center">
                            <a href="tel:+34602659054" className="btn-primary pulse-gold">
                                <Phone size={20} /> {t('city_page.call_btn')}
                            </a>
                            <a href="https://wa.me/34602659054" className="btn-secondary pulse-green">
                                <WhatsAppIcon size={20} /> {t('city_page.wa_btn')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="city-internal-links pt-0 pb-20">
                <div className="container" style={{ paddingTop: 0 }}>
                    <div className="links-box p-10 rounded-3xl bg-white shadow-xl border border-gray-100">
                        <div className="seo-links-flex flex-wrap gap-3 mb-8">
                            <Link to="/cartagena" className="inline-link">cerrajero Cartagena</Link>
                            <Link to="/" className="inline-link">apertura coches</Link>
                            <Link to="/" className="inline-link">cerrajero 24h</Link>
                        </div>
                        <div className="h-px bg-white/10 my-8" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            <Trans i18nKey="city_page.internal_link1" values={{ province, city: cityName }}>
                                <Link to="/" className="inline-link font-bold">text</Link>
                            </Trans>
                        </p>
                        <div className="h-px bg-white/10 my-8" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            <Trans i18nKey="city_page.internal_link2">
                                <Link to="/" className="inline-link font-bold">página principal</Link>
                            </Trans>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CityPage;
