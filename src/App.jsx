import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Phone, Car, Home, Clock, Shield, MapPin, CheckCircle2, Menu, X, Key, Video, Radio, AlertTriangle, Lock, Facebook, Instagram, Mail } from 'lucide-react'
import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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

// Optimized Components
import LazyVideo from './components/LazyVideo'
const ServiceMap = lazy(() => import('./components/ServiceMap'))
const Portfolio = lazy(() => import('./components/Portfolio'))

// Essential static imports
import logo from './assets/images/ui/logo.jpg.webp'
import CookieBanner from './components/CookieBanner'
import LegalModal from './components/LegalModal'
import keysback from './assets/images/ui/keysback.webp'
import heroBg from './assets/images/ui/background.webp'
import house2Image from './assets/images/gallery/WhatsApp Image 2026-03-02 at 17.08.15.webp'
import toolsDetail from './assets/images/gallery/WhatsApp Image 2026-03-02 at 17.07.02 (1).webp'
import whyChooseFixing from './assets/images/gallery/WhatsApp Image 2026-03-02 at 17.03.19.webp'
import car3d from './assets/images/ui/car.webp'
import videoMedia from './assets/videos/video.mp4'
import videoGallery from './assets/videos/WhatsApp Video 2026-03-02 at 17.08.15.mp4'
import extraVideo1 from './assets/videos/WhatsApp Video 2026-03-02 at 17.03.35.mp4'
import extraVideo2 from './assets/videos/WhatsApp Video 2026-03-02 at 17.03.42.mp4'
import extraVideo3 from './assets/videos/WhatsApp Video 2026-03-02 at 17.03.52.mp4'
import extraVideo4 from './assets/videos/WhatsApp Video 2026-03-02 at 17.03.41.mp4'
import imgEmergency from './assets/images/ui/howto.webp'
import srv2 from './assets/images/gallery/IMG-20250901-WA0006.webp'
import srv3 from './assets/images/gallery/IMG-20250901-WA0008.webp'
import srv4 from './assets/images/gallery/IMG-20250901-WA0010.webp'
import srv5 from './assets/images/gallery/IMG-20250901-WA0014.webp'
import emergencyCase1 from './assets/images/gallery/WhatsApp Image 2026-03-02 at 17.08.14 (4).webp'
import card1Img from './assets/images/gallery/WhatsApp Image 2026-03-02 at 17.06.58.webp'
import card2Img from './assets/images/gallery/IMG-20250901-WA0009.webp'
import card4Img from './assets/images/ui/service-automotive.webp'
import card5Img from './assets/images/gallery/IMG-20250901-WA0025.webp'
import almoradi from './assets/images/ui/almoradi.webp'

// Marquee Components
const BrandsMarquee = lazy(() => import('./components/Marquees').then(m => ({ default: m.BrandsMarquee })))
const CarsMarquee = lazy(() => import('./components/Marquees').then(m => ({ default: m.CarsMarquee })))

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [legalType, setLegalType] = useState(null);
    const [isLegalOpen, setIsLegalOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const companyLogo = logo;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const openLegal = (type) => {
        setLegalType(type);
        setIsLegalOpen(true);
    };


    // Scroll Detection
    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 3D Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x / width - 0.5);
        mouseY.set(y / height - 0.5);
    };

    return (
        <div className="app-container">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <div className="logo">
                        <img src={companyLogo} alt="Locksmith Boutique" className="logo-img" />
                    </div>

                    <div className="desktop-menu">
                        <a href="#sobre">{t('nav.about')}</a>
                        <a href="#servicos">{t('nav.services')}</a>
                        <a href="#portfolio">{t('nav.portfolio')}</a>
                        <a href="#marcas">{t('nav.brands')}</a>
                        <a href="#zonas">{t('nav.zones')}</a>
                    </div>

                    <div className="nav-actions">
                        <div className="lang-switcher">
                            <button className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`} onClick={() => changeLanguage('es')} title="Español">
                                <img src="https://flagcdn.com/w40/es.png" alt="Español" className="flag-icon" />
                            </button>
                            <button className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')} title="English">
                                <img src="https://flagcdn.com/w40/gb.png" alt="English" className="flag-icon" />
                            </button>
                            <button className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`} onClick={() => changeLanguage('pt')} title="Português">
                                <img src="https://flagcdn.com/w40/pt.png" alt="Português" className="flag-icon" />
                            </button>
                            <button className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`} onClick={() => changeLanguage('fr')} title="Français">
                                <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="flag-icon" />
                            </button>
                            <button className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`} onClick={() => changeLanguage('ru')} title="Русский">
                                <img src="https://flagcdn.com/w40/ru.png" alt="Русский" className="flag-icon" />
                            </button>
                        </div>
                        <a href="#contacto" className="btn-primary desktop-only">{t('nav.contact')}</a>
                        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        <a href="#sobre" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.about')}</a>
                        <a href="#servicos" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.services')}</a>
                        <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.portfolio')}</a>
                        <a href="#marcas" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.brands')}</a>
                        <a href="#zonas" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.zones')}</a>
                        <a href="#contacto" className="btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
                    </motion.div>
                )}
            </AnimatePresence>

            <header id="inicio" className="hero" onMouseMove={handleMouseMove}>
                <div className="hero-container-3d" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <div className="hero-3d-scene">
                        <div className="mesh-gradient" style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '80px'
                        }}></div>
                        <motion.div
                            className="car-3d-container"
                            style={{
                                rotateX,
                                rotateY,
                                perspective: 1000,
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <img src={car3d} alt="3D luxury car" className="car-3d-img" />
                            <div className="car-shadow"></div>
                        </motion.div>
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
                                    style={{ color: '#00a651', fontWeight: '500', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}
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
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        onMouseMove={(e) => e.stopPropagation()}
                                    >
                                        <Phone fill="currentColor" size={20} />
                                        <span>{t('hero.call_now')}</span>
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/34602659054"
                                        className="phone-link wa-btn"
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
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

            <section className="emergency-cases container">
                <div className="section-head-v2">
                    <span className="sub-tag">{t('hero.subtitle_badge')}</span>
                    <h2>{t('emergency_cases.title')}</h2>
                    <p>{t('emergency_cases.subtitle')}</p>
                </div>

                <div className="cases-grid">
                    {/* Case 3 moved to first */}
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

                    {/* Case 2 stays in middle */}
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

                    {/* Case 1 moved to last */}
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
            </section>

            {/* New Section 1: About (Trusted Partner) */}
            <section id="sobre" className="about-split container">
                <div className="about-image-main">
                    <LazyVideo src={videoMedia} autoPlay loop muted playsInline className="rounded-40" />
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
            </section>

            {/* Portfolio Section: Real Services Gallery */}
            <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div className="loader"></div></div>}>
                <Portfolio />
            </Suspense>

            {/* Video Showcase Section */}
            <section className="video-showcase-section dark-glow">
                <div className="section-head-v2 light-text">
                    <span className="sub-tag glow-green">{t('portfolio.video_tag')}</span>
                    <h2 className="text-white">{t('portfolio.video_title')}</h2>
                    <p className="text-gray-400">{t('portfolio.video_desc')}</p>
                </div>

                <div className="video-grid-three">
                    {[
                        { vid: extraVideo1, title: t('portfolio.video_item1'), icon: <Key size={18} /> },
                        { vid: videoGallery, title: t('portfolio.video_item2'), icon: <Home size={18} /> },
                        { vid: extraVideo2, title: t('portfolio.video_item3'), icon: <Car size={18} /> }
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

            {/* New Section 2: Services Preview (Protecting Properties) - Dark Theme */}
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
                            <div className="service-bg" style={{ backgroundImage: `url(${card1Img})` }}></div>
                            <div className="service-icon-box">
                                <Home size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.locks_title')}</h3>
                                <p>{t('services.locks_desc')}</p>
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
                    </div>
                </div>
            </section>

            {/* Refined Section 3: Why Choose Us (3-Column Gallery) */}
            <section className="why-choose container">
                <div className="section-center-header">
                    <span className="sub-tag">{t('why_choose.tag')}</span>
                    <h2>{t('why_choose.title')}</h2>
                    <p>{t('why_choose.desc')}</p>
                </div>

                <div className="why-grid-three">
                    {/* Column 1 */}
                    <div className="why-col" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="feature-card-overlap">
                            <LazyVideo
                                src={extraVideo4}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="overlap-vid"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px' }}
                            />
                            <div className="overlap-content">
                                <h3>{t('why_choose.col1_title')}</h3>
                                <p>{t('why_choose.col1_desc')}</p>
                            </div>
                        </div>
                        <div className="how-title-v2" style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
                            <span className="sub-tag" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{t('why_choose.how_tag')}</span>
                            <h2 style={{ fontSize: '2.8rem', lineHeight: '1.1', color: '#0c0c0c', marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: t('why_choose.how_title') }}></h2>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="why-col">
                        <LazyVideo
                            src={extraVideo3}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="full-height-img"
                        />
                    </div>

                    {/* Column 3 */}
                    <div className="why-col">
                        <div className="feature-card-feature">
                            <span className="big-percent">{t('why_choose.col3_percent')}</span>
                            <p>{t('why_choose.col3_desc')}</p>
                            <img src={whyChooseFixing} alt="Profissional chaveiro" className="card-inner-img" />
                            <a href="tel:+34602659054" className="btn-vibe-green">{t('why_choose.btn_call')}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Refined Section 4: How It Works */}
            <section className="how-it-works container" style={{ paddingTop: '2rem' }}>
                <div className="how-layout-grid">
                    <div className="how-visual-v2">
                        <img src={house2Image} alt="Expertise" className="rounded-large" />
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
            </section>

            {/* New Section 5: Testimonials */}
            <section className="testimonials container">
                <div className="section-head-split">
                    <div>
                        <span className="sub-tag">{t('testimonials.tag')}</span>
                        <h2>{t('testimonials.title')}</h2>
                    </div>
                    <div className="avatars-group">
                        <div className="sm-avatar initials-avatar" style={{ backgroundColor: '#4285F4' }}>AS</div>
                        <div className="sm-avatar initials-avatar" style={{ backgroundColor: '#DB4437' }}>MR</div>
                        <div className="sm-avatar initials-avatar" style={{ backgroundColor: '#F4B400' }}>MH</div>
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
                            <div className="initials-avatar" style={{ backgroundColor: '#4285F4' }}>AS</div>
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
                            <div className="initials-avatar" style={{ backgroundColor: '#DB4437' }}>MR</div>
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
                            <div className="initials-avatar" style={{ backgroundColor: '#F4B400' }}>MH</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section 6: CTA Banner */}
            <section className="cta-banner container">
                <div className="cta-banner-content">
                    <span className="sub-tag text-green">{t('cta.tag')}</span>
                    <h2 dangerouslySetInnerHTML={{ __html: t('cta.title') }}></h2>
                    <a href="https://wa.me/34602659054" className="btn-dark-cta" target="_blank" rel="noopener noreferrer">
                        <span className="btn-icon"><WhatsAppIcon fill="currentColor" size={18} /></span> +34 602 659 054
                    </a>
                </div>
                <div className="cta-banner-img">
                    <img src={srv5} alt="Lock Inspection" />
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/34602659054"
                className="whatsapp-fab"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="fab-icon">
                    <WhatsAppIcon size={32} />
                    <span className="fab-badge">1</span>
                </div>
            </motion.a>

            {/* Premium Service Coverage Section */}
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
                                {[
                                    "Alicante", "Cartagena", "Lorca", "Molina de Segura", "Murcia",
                                    "Abanilla", "Abarán", "Albatera", "Albudeite", "Alcantarilla", "Aledo", "Algorfa", "Alguazas", "Alhama de Murcia",
                                    "Almoradí", "Archena", "Benejúzar", "Benferri", "Beniel", "Benijófar", "Bigastro", "Blanca", "Bullas", "Calasparra",
                                    "Callosa de Segura", "Campos del Río", "Caravaca de la Cruz", "Catral", "Cehegín", "Ceutí", "Cieza", "Cox",
                                    "Daya Nueva", "Daya Vieja", "Dolores", "Formentera del Segura", "Fortuna", "Fuente Álamo de Murcia",
                                    "Granja de Rocamora", "Guardamar del Segura", "Jacarilla", "Jumilla", "La Unión", "Las Torres de Cotillas",
                                    "Librilla", "Lorquí", "Los Alcázares", "Los Montesinos", "Mazarrón", "Moratalla", "Mula", "Ojós", "Orihuela",
                                    "Pilar de la Horadada", "Pliego", "Puerto Lumbreras", "Rafal", "Redován", "Ricote", "Rojales", "San Fulgencio",
                                    "San Isidro", "San Javier", "San Miguel de Salinas", "San Pedro del Pinatar", "Santomera", "Torre-Pacheco",
                                    "Torrevieja", "Totana", "Ulea", "Villanueva del Río Segura", "Yecla"
                                ].sort((a, b) => a.localeCompare(b)).map((name, index) => (
                                    <div key={index} className="area-pill-compact">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}

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
                                <Suspense fallback={<div className="map-canvas-v2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0' }}>Carregando mapa...</div>}>
                                    <ServiceMap />
                                </Suspense>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Brands Marquee Section */}
            <Suspense fallback={<div style={{ height: '100px' }}></div>}>
                <BrandsMarquee t={t} />
            </Suspense>

            {/* Cars Marquee Section */}
            <Suspense fallback={<div style={{ height: '100px' }}></div>}>
                <CarsMarquee t={t} />
            </Suspense>



            <footer className="footer-dark">
                <div className="container footer-grid-dark">
                    <div className="footer-brand">
                        <h2 className="footer-logo-text">Locksmith Solutions</h2>
                        <img src={logo} alt="Locksmith Service" className="footer-brand-img" />
                    </div>

                    <div className="footer-info-area">
                        <p className="footer-desc">{t('footer.desc')}</p>

                        <div className="footer-menus">
                            <div className="footer-col">
                                <h4>{t('footer.company')}</h4>
                                <a href="#inicio">{t('footer.nav_home')}</a>
                                <a href="#sobre">{t('footer.nav_about')}</a>
                                <a href="#servicos">{t('footer.nav_services')}</a>
                                <a href="#portfolio">{t('footer.nav_portfolio')}</a>
                                <a href="#zonas">{t('footer.nav_zones')}</a>
                            </div>
                            <div className="footer-col social-links">
                                <h4>{t('footer.social')}</h4>
                                <a href="https://www.facebook.com/people/Lock-Smith/61579581643179" target="_blank" rel="noopener noreferrer"><Facebook size={18} /> Facebook</a>
                                <a href="https://www.instagram.com/locksmith24h/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram</a>
                                <a href="https://wa.me/34602659054" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> WhatsApp</a>
                            </div>
                            <div className="footer-col contact-col" id="contacto">
                                <h4>{t('footer.contact')}</h4>
                                <p><Phone size={18} /> +34 602 659 054</p>
                                <p><Mail size={18} /> locksmith.orihuela@gmail.com</p>
                                <p><MapPin size={18} /> C. Pico Lobo, 7A, 03189 Orihuela, Alicante</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-legal-links">
                        <button onClick={() => openLegal('aviso')} className="legal-link-btn">{t('footer.aviso')}</button>
                        <button onClick={() => openLegal('privacidad')} className="legal-link-btn">{t('footer.privacidad')}</button>
                        <button onClick={() => openLegal('cookies_policy')} className="legal-link-btn">{t('footer.cookies')}</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright-text">{t('footer.rights')}</p>
                    </div>
                </div>
            </footer>

            <CookieBanner openLegal={openLegal} />
            <LegalModal
                isOpen={isLegalOpen}
                onClose={() => setIsLegalOpen(false)}
                type={legalType}
            />
        </div >
    )
}

export default App
