import React, { useState, useEffect, useRef } from 'react'
import { Phone, Car, Clock, Shield, MapPin, CheckCircle2, Menu, X, Key, Video, Radio, AlertTriangle, Lock, Facebook, Instagram, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

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

// Shared Components
import LazyVideo from '@shared/components/LazyVideo'
import ServiceMap from '@shared/components/ServiceMap'
import Portfolio from '@shared/components/Portfolio'
import { BrandsMarquee, CarsMarquee } from '@shared/components/Marquees'

// Dynamic asset loading for shared components
const brandLogos = import.meta.glob('../assets/images/brands/*.webp', { eager: true });
const carLogos = import.meta.glob('../assets/images/cars/*.webp', { eager: true });
const galleryPhotos = import.meta.glob('../assets/images/gallery/*.webp', { eager: true });

const brandsList = Object.values(brandLogos).map(mod => mod.default);
const carsList = Object.values(carLogos).map(mod => mod.default);
const photosList = Object.values(galleryPhotos).map(mod => mod.default);

// Essential static imports
import logo from '../assets/images/ui/logo.jpg.webp'
import keysback from '../assets/images/ui/keysback.webp'
import heroBg from '../assets/images/ui/carbackground.png'
import toolsDetail from '../assets/images/gallery/WhatsApp Image 2026-03-02 at 17.07.02 (1).webp'
import whyChooseFixing from '../assets/images/gallery/IMG-20250901-WA0001.webp'
import videoMedia from '../assets/videos/WhatsApp Video 2026-03-02 at 17.03.51.webm'
import videoGallery from '../assets/videos/WhatsApp-Video-2026-03-02-at-17.03.36.webm'
import extraVideo1 from '../assets/videos/WhatsApp Video 2026-03-02 at 17.03.35.webm'
import extraVideo2 from '../assets/videos/WhatsApp-Video-2026-03-02-at-17.03.42.webm'
import extraVideo3 from '../assets/videos/WhatsApp-Video-2026-03-02-at-17.03.52.webm'
import extraVideo4 from '../assets/videos/WhatsApp-Video-2026-03-02-at-17.03.36.webm'
import imgEmergency from '../assets/images/ui/howto.webp'
import srv2 from '../assets/images/gallery/IMG-20250901-WA0006.webp'
import srv3 from '../assets/images/gallery/IMG-20250901-WA0008.webp'
import srv4 from '../assets/images/gallery/IMG-20250901-WA0010.webp'
import srv5 from '../assets/images/gallery/IMG-20250901-WA0014.webp'
import emergencyCase1 from '../assets/images/gallery/IMG-20250901-WA0003.webp'
import card2Img from '../assets/images/gallery/IMG-20250901-WA0009.webp'
import card4Img from '../assets/images/ui/service-automotive.webp'
import card5Img from '../assets/images/gallery/IMG-20250901-WA0003.webp'
import almoradi from '../assets/images/ui/almoradi.webp'
import premiumQualityImg from '../assets/images/gallery/IMG-20250901-WA0015.webp'
import remoteRepairImg from '../assets/images/gallery/remote-repair.webp'

import { CITIES, slugify } from '@shared/constants/cities'
import { CITY_NEIGHBORHOODS } from '@shared/constants/neighborhoods'

const HomePage = ({ t, i18n, openLegal }) => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [openCity, setOpenCity] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.area-item-wrapper')) {
                setOpenCity(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <header id="inicio" className="hero">
                <div className="hero-container-3d" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <div className="hero-3d-scene">
                        <motion.div
                            className="mesh-gradient"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.3, 0.80, 0.30]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundImage: `url(${heroBg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
                            }}
                        />
                    </div>

                    <div className="hero-grid">
                        <div className="hero-text">
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {t('hero.title1')}<br></br> {t('hero.title2')}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.span
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ color: '#ffdd00', fontWeight: '500', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}
                                >
                                    {t('hero.subtitle_badge')}
                                </motion.span>
                                {t('hero.subtitle_text')}
                            </motion.p>
                        </div>

                        <div className="hero-card-area">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="floating-card"
                                onMouseMove={(e) => e.stopPropagation()}
                            >
                                <div className="card-header">
                                    <div className="avatar">
                                        <img src={keysback} alt="Chaveiro" />
                                    </div>
                                    <div className="user-info">
                                        <p className="name">{t('hero.card_status')}</p>
                                        <p className="role">{t('hero.card_role')}</p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <motion.a
                                        href="tel:+34602659054"
                                        className="phone-link call-btn"
                                        whileInView={{ scale: [1, 1.05, 1] }}
                                        whileHover={{ scale: 1.1, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ 
                                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                            type: "spring", stiffness: 400, damping: 10 
                                        }}
                                        onMouseMove={(e) => e.stopPropagation()}
                                    >
                                        <Phone fill="currentColor" size={32} />
                                        <span>{t('hero.call_now')}</span>
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/34602659054"
                                        className="phone-link wa-btn"
                                        whileInView={{ scale: [1, 1.05, 1] }}
                                        whileHover={{ scale: 1.1, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ 
                                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                            type: "spring", stiffness: 400, damping: 10 
                                        }}
                                        onMouseMove={(e) => e.stopPropagation()}
                                    >
                                        <WhatsAppIcon fill="currentColor" size={20} />
                                        <span>{t('hero.write_us')}</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="emergency-cases">
                <div className="container">
                    <div className="section-head-v2">
                        <span className="sub-tag">{t('hero.subtitle_badge')}</span>
                        <h2>{t('emergency_cases.title')}</h2>
                        <p>{t('emergency_cases.subtitle')}</p>
                    </div>

                    <div className="cases-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="case-card"
                        >
                            <div className="case-image">
                                <img src={srv4} alt="New key programming" />
                            </div>
                            <div className="case-info">
                                <h3>{t('emergency_cases.case3_title')}</h3>
                                <p>{t('emergency_cases.case3_desc')}</p>
                                <a href="https://wa.me/34602659054" className="case-link">{t('emergency_cases.btn')}</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="case-card"
                        >
                            <div className="case-image">
                                <img src={srv2} alt="Ignition repair" />
                            </div>
                            <div className="case-info">
                                <h3>{t('emergency_cases.case2_title')}</h3>
                                <p>{t('emergency_cases.case2_desc')}</p>
                                <a href="https://wa.me/34602659054" className="case-link">{t('emergency_cases.btn')}</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="case-card"
                        >
                            <div className="case-image">
                                <img src={emergencyCase1} alt="Car opening" />
                            </div>
                            <div className="case-info">
                                <h3>{t('emergency_cases.case1_title')}</h3>
                                <p>{t('emergency_cases.case1_desc')}</p>
                                <a href="https://wa.me/34613227826" className="case-link">{t('emergency_cases.btn')}</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* High Conversion Sales CTA Banner */}
            <section className="sales-cta-banner">
                <div className="container">
                    <div className="sales-cta-box">
                        <div className="sales-cta-content">
                            <span className="live-indicator">
                                <span className="pulse-dot"></span> {t('sales_cta.live_status')}
                            </span>
                            <h2>{t('sales_cta.title')}</h2>
                            <p>{t('sales_cta.subtitle')}</p>
                        </div>
                        <div className="sales-cta-actions">
                            <motion.a 
                                href="tel:+34602659054" 
                                className="btn-sales-call"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <Phone size={24} /> {t('sales_cta.call_btn')}
                            </motion.a>
                            <motion.a 
                                href="https://wa.me/34602659054" 
                                className="btn-sales-wa"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                }}
                            >
                                <WhatsAppIcon size={28} /> {t('sales_cta.wa_btn')}
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre" className="about-split">
                <div className="container about-grid">
                    <div className="about-image-main">
                        <LazyVideo src={extraVideo3} autoPlay loop muted playsInline className="rounded-40" />
                    </div>
                    <div className="about-content">
                        <span className="sub-tag">{t('about.tag')}</span>
                        <div className="about-title-flex">
                            <h2>{t('about.title')}</h2>
                            <img src={toolsDetail} alt="Detalle" className="about-side-img" />
                        </div>
                        <p className="about-subtitle">{t('about.subtitle')}</p>
                        <p>
                            {t('about.p1')}
                        </p>
                        <p>
                            {t('about.p2')}
                        </p>
                    </div>
                </div>
            </section>

            <Portfolio t={t} photos={photosList} />

            {/* Tech-Focused Expert Automotive Banner */}
            <section className="expert-automotive-banner">
                <div className="container">
                    <div className="expert-banner-card">
                        <div className="expert-banner-text">
                            <span className="tech-badge">
                                <Radio size={18} className="pulse-yellow" /> {t('expert_cta.badge')}
                            </span>
                            <h2>{t('expert_cta.title')}</h2>
                            <p>{t('expert_cta.subtitle')}</p>
                        </div>
                        <div className="expert-banner-action">
                            <motion.a 
                                href="tel:+34602659054" 
                                className="btn-expert-cta btn-call-main"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <Phone size={30} fill="currentColor" />
                                <span>{t('expert_cta.call_btn')}</span>
                            </motion.a>
                            <motion.a 
                                href="https://wa.me/34602659054" 
                                className="btn-expert-cta btn-wa-main"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1, background: '#22c35e' }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                }}
                            >
                                <WhatsAppIcon size={64} />
                                <span>{t('expert_cta.wa_btn')}</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-showcase-section dark-glow">
                <div className="section-head-v2 light-text">
                    <span className="sub-tag glow-green">{t('portfolio.video_tag')}</span>
                    <h2 className="text-white">{t('portfolio.video_title')}</h2>
                    <p className="text-gray-400">{t('portfolio.video_desc')}</p>
                </div>

                <div className="video-grid-three">
                    {[
                        { vid: extraVideo4, title: t('portfolio.video_item4'), icon: <Shield size={18} /> },
                        { vid: extraVideo2, title: t('portfolio.video_item3'), icon: <Car size={18} /> },
                        { vid: extraVideo1, title: t('portfolio.video_item1'), icon: <Key size={18} /> }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="video-card-v2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <LazyVideo
                                src={item.vid}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="showcase-vid"
                            />
                            <div className="video-overlay-v2">
                                <div className="live-badge">
                                    <div className="dot"></div>
                                    <span>{t('portfolio.video_badge')}</span>
                                </div>
                                <div className="video-info-v2">
                                    <div className="info-icon">{item.icon}</div>
                                    <span>{item.title}</span>
                                </div>
                                <div className="video-play-hint">
                                    <Video size={24} color="white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            <section id="servicos" className="services-showcase">
                <div className="container">
                    <div className="showcase-header">
                        <div className="header-left">
                            <span className="sub-tag text-white">{t('services.tag')}</span>
                            <h2 className="text-white">{t('services.title')}</h2>
                            <p className="text-white opacity-80 max-w-2xl mt-4">
                                {t('services.desc')}
                            </p>
                        </div>
                    </div>

                    <div className="showcase-grid">
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${card4Img})` }}></div>
                            <div className="service-icon-box">
                                <Car size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.vehicle_locks_title')}</h3>
                                <p>{t('services.vehicle_locks_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${card2Img})` }}></div>
                            <div className="service-icon-box">
                                <Key size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.auto_title')}</h3>
                                <p>{t('services.auto_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${srv3})` }}></div>
                            <div className="service-icon-box">
                                <CheckCircle2 size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.keys_title')}</h3>
                                <p>{t('services.keys_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${card5Img})` }}></div>
                            <div className="service-icon-box">
                                <Shield size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.emergency_title')}</h3>
                                <p>{t('services.emergency_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgEmergency})` }}></div>
                            <div className="service-icon-box">
                                <Clock size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.access_title')}</h3>
                                <p>{t('services.access_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${remoteRepairImg})` }}></div>
                            <div className="service-icon-box">
                                <Radio size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.remote_repair_title')}</h3>
                                <p>{t('services.remote_repair_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Context Call to Action for Automotive */}
            <section className="tech-cta-banner">
                <div className="container">
                    <div className="tech-cta-box">
                        <h2 className="tech-cta-title">{t('inline_cta1.title')}</h2>
                        <p className="tech-cta-subtitle">{t('inline_cta1.subtitle')}</p>
                        <motion.a 
                            href="https://wa.me/34602659054" 
                            className="tech-cta-btn"
                            whileInView={{ scale: [1, 1.05, 1] }}
                            whileHover={{ scale: 1.1, background: '#fff', color: '#000' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ 
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <WhatsAppIcon size={64} fill="currentColor" /> {t('inline_cta1.btn')}
                        </motion.a>
                    </div>
                </div>
            </section>

            <section className="why-choose">
                <div className="container">
                    <div className="section-center-header">
                        <span className="sub-tag">{t('why_choose.tag')}</span>
                        <h2>{t('why_choose.title')}</h2>
                        <p>{t('why_choose.desc')}</p>
                    </div>

                    <div className="why-grid-three">
                        <div className="why-col why-col-flex">
                            <div className="feature-card-overlap">
                                <img
                                    src={premiumQualityImg}
                                    alt="Calidad Premium"
                                    className="overlap-img"
                                />
                                <div className="overlap-content">
                                    <h3>{t('why_choose.col1_title')}</h3>
                                    <p>{t('why_choose.col1_desc')}</p>
                                </div>
                            </div>
                            <div className="how-title-v2 how-title-container">
                                <span className="sub-tag how-tag">{t('why_choose.how_tag')}</span>
                                <h2 className="how-main-title" dangerouslySetInnerHTML={{ __html: t('why_choose.how_title') }}></h2>
                            </div>
                        </div>

                        <div className="why-col">
                            <LazyVideo
                                src={videoMedia}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="full-height-img"
                            />
                        </div>

                        <div className="why-col">
                            <div className="feature-card-feature">
                                <span className="big-percent">{t('why_choose.col3_percent')}</span>
                                <p>{t('why_choose.col3_desc')}</p>
                                <img src={whyChooseFixing} alt="Profissional chaveiro" className="card-inner-img" />
                                <a href="tel:+34602659054" className="btn-vibe-green">{t('why_choose.btn_call')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <div className="container">
                    <div className="how-layout-grid">
                        <div className="how-visual-v2">
                            <img src={srv4} alt="Expertise" className="rounded-large" />
                        </div>
                        <div className="how-steps-v2">
                            <div className="step-v2">
                                <div className="step-num">01</div>
                                <div className="step-info">
                                    <h3>{t('steps.step1_title')}</h3>
                                    <p>{t('steps.step1_desc')}</p>
                                </div>
                            </div>
                            <div className="step-v2">
                                <div className="step-num">02</div>
                                <div className="step-info">
                                    <h3>{t('steps.step2_title')}</h3>
                                    <p>{t('steps.step2_desc')}</p>
                                </div>
                            </div>
                            <div className="step-v2">
                                <div className="step-num">03</div>
                                <div className="step-info">
                                    <h3>{t('steps.step3_title')}</h3>
                                    <p>{t('steps.step3_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-v4">
                <div className="container">
                    <div className="faq-grid-v4">
                        <div className="faq-left-v4">
                            <span className="sub-tag">{t('faq.tag')}</span>
                            <h2>{t('faq.title')}</h2>
                            <img src="/logo-faq.jpg?v=2" alt="Locksmith Solutions" className="faq-logo-v4" />
                        </div>
                        <div className="faq-accordion-v4">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div 
                                    key={num} 
                                    className={`faq-item-v4 ${activeFaq === num ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === num ? null : num)}
                                >
                                    <div className="faq-header-v4">
                                        <div className="faq-q-text">
                                            <span className="faq-index">0{num}</span>
                                            <h3>{t(`faq.q${num}`)}</h3>
                                        </div>
                                        <div className="faq-icon-v4">
                                            {activeFaq === num ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {activeFaq === num && (
                                            <motion.div 
                                                className="faq-answer-v4"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
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

            <section className="testimonials">
                <div className="container">
                    <div className="section-head-split">
                        <div>
                            <span className="sub-tag">{t('testimonials.tag')}</span>
                            <h2>{t('testimonials.title')}</h2>
                        </div>
                        <div className="avatars-group">
                            <div className="sm-avatar initials-avatar bg-google-blue">AS</div>
                            <div className="sm-avatar initials-avatar bg-google-red">MR</div>
                            <div className="sm-avatar initials-avatar bg-google-yellow">MH</div>
                            <p className="avatar-text">{t('testimonials.desc')}</p>
                        </div>
                    </div>

                    <div className="testi-grid">
                        <div className="testi-card">
                            <div className="quote-mark">"</div>
                            <p className="testi-text">"{t('testimonials.t1_text')}"</p>
                            <div className="stars">★★★★★</div>
                            <div className="testi-author">
                                <div>
                                    <h4>ALEXANDRE SILVA</h4>
                                    <span>{t('testimonials.client')}</span>
                                </div>
                                <div className="initials-avatar bg-google-blue">AS</div>
                            </div>
                        </div>
                        <div className="testi-card">
                            <div className="quote-mark">"</div>
                            <p className="testi-text">"{t('testimonials.t2_text')}"</p>
                            <div className="stars">★★★★★</div>
                            <div className="testi-author">
                                <div>
                                    <h4>Martina Rodriguez</h4>
                                    <span>{t('testimonials.client')}</span>
                                </div>
                                <div className="initials-avatar bg-google-red">MR</div>
                            </div>
                        </div>
                        <div className="testi-card">
                            <div className="quote-mark">"</div>
                            <p className="testi-text">"{t('testimonials.t3_text')}"</p>
                            <div className="stars">★★★★★</div>
                            <div className="testi-author">
                                <div>
                                    <h4>Miguel Hernán</h4>
                                    <span>{t('testimonials.client')}</span>
                                </div>
                                <div className="initials-avatar bg-google-yellow">MH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container">
                    <div className="cta-box">
                        <div className="cta-banner-content">
                            <span className="sub-tag text-green">{t('cta.tag')}</span>
                            <h2 dangerouslySetInnerHTML={{ __html: t('cta.title') }}></h2>
                            <motion.a 
                                href="https://wa.me/34602659054" 
                                className="btn-dark-cta" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <span className="btn-icon"><WhatsAppIcon fill="currentColor" size={24} /></span> +34 602 659 054
                            </motion.a>
                        </div>
                        <div className="cta-banner-img">
                            <img src={srv5} alt="Lock Inspection" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="zonas" className="service-areas-section">
                <div className="container">
                    <div className="areas-split-layout">
                        <div className="areas-visual-left">
                            <motion.img
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                src={almoradi}
                                alt="Almoradi Service"
                                className="almoradi-img-large"
                            />
                        </div>

                        <div className="areas-content-right">
                            <div className="areas-header-v3">
                                <span className="sub-tag">{t('areas.tag')}</span>
                                <h2>{t('areas.title')}</h2>
                                <p>{t('areas.desc')}</p>
                            </div>

                            <div className="areas-grid-compact">
                                {CITIES.map((name, index) => {
                                    const neighborhoods = CITY_NEIGHBORHOODS[name];
                                    const isOpen = openCity === name;
                                    const hasNeighborhoods = neighborhoods && neighborhoods.length > 0;

                                    return (
                                        <div
                                            key={index}
                                            className="area-item-wrapper"
                                            style={{ position: 'relative' }}
                                            onMouseEnter={() => setOpenCity(name)}
                                            onMouseLeave={() => setOpenCity(null)}
                                        >
                                            {hasNeighborhoods ? (
                                                <div className={`area-pill-compact ${isOpen ? 'is-open' : ''}`} style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
                                                    <Link to={`/cerrajero-${slugify(name)}`} style={{ color: 'inherit', textShadow: 'none', border: 'none', background: 'none', flex: 1, padding: '0px', textAlign: 'left', fontWeight: '500' }}>
                                                        {name}
                                                    </Link>
                                                    <div
                                                        style={{ cursor: 'pointer', paddingLeft: '8px', display: 'flex', alignItems: 'center' }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            setOpenCity(isOpen ? null : name);
                                                        }}
                                                    >
                                                        <ChevronDown size={14} className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={`/cerrajero-${slugify(name)}`} className="area-pill-compact">
                                                    {name}
                                                </Link>
                                            )}

                                            <AnimatePresence>
                                                {isOpen && neighborhoods && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        className="neighborhoods-dropdown"
                                                    >
                                                        <div className="dropdown-arrow" />
                                                        <div className="mobile-dropdown-header">
                                                            <span>{name}</span>
                                                            <button
                                                                className="close-dropdown-btn"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setOpenCity(null);
                                                                }}
                                                            >
                                                                <X size={20} />
                                                            </button>
                                                        </div>
                                                        <div className="dropdown-content">
                                                            {neighborhoods.map((n, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to={`/cerrajero-${slugify(name)}?barrio=${encodeURIComponent(n)}`}
                                                                    className="neighborhood-dropdown-item"
                                                                    onClick={() => setOpenCity(null)}
                                                                >
                                                                    {n}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="location-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="location-content"
                    >
                        <div className="location-info-card">
                            <span className="sub-tag">{t('location.tag')}</span>
                            <h2 className="location-title">{t('location.title')}</h2>
                            <div className="address-box">
                                <div className="address-icon">
                                    <MapPin size={24} />
                                </div>
                                <p className="location-address">{t('location.address_title')}<br />C. Pico Lobo, 7A, 03189 Orihuela, Alicante</p>
                            </div>
                        </div>

                        <div className="map-wrapper">
                            <div className="map-container">
                                <ServiceMap />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BrandsMarquee t={t} brandsList={brandsList} />

            <CarsMarquee t={t} carsList={carsList} />
        </>
    )
}

export default HomePage
