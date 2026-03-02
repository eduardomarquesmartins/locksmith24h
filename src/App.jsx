import React, { useState, useEffect } from 'react'
import { Phone, Car, Home, Clock, Shield, MapPin, CheckCircle2, Menu, X, Key, Video, Radio, AlertTriangle, Lock, MessageSquare, Facebook, Instagram } from 'lucide-react'
import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import logo from './public/logo.jpg.png'
import keysback from './public/keysback.png'
import heroBg from './public/background.png'
import house2Image from './public/premium-car-macro.png'
import modernKeys from './public/services/IMG-20250901-WA0023.webp'
import locksmithToolsMacro from './public/locksmith_tools_macro.png'
import carKeyFob from './public/car_key_fob.png'
import ctaBg from './public/services/IMG-20250901-WA0014.webp'
import car3d from './public/car.png'
import videoMedia from './public/video.mp4'
import imgLocks from './public/services/IMG-20250901-WA0014.webp'
import imgIntercom from './public/services/IMG-20250901-WA0037.webp'
import imgKeys from './public/service-keys.png'
import imgCameras from './public/services/IMG-20250901-WA0033.webp'
import imgAutomotive from './public/service-automotive.png'
import imgEmergency from './public/howto.png'
import srv1 from './public/services/IMG-20250901-WA0001.webp'
import srv2 from './public/services/IMG-20250901-WA0006.webp'
import srv3 from './public/services/IMG-20250901-WA0008.webp'
import srv4 from './public/services/IMG-20250901-WA0010.webp'
import srv5 from './public/services/IMG-20250901-WA0014.webp'
import srv6 from './public/services/IMG-20250901-WA0016.webp'
import srv7 from './public/services/IMG-20250901-WA0036.webp'
import srv8 from './public/services/IMG-20250901-WA0044.webp'
import srv9 from './public/services/IMG-20250901-WA0046.webp'
import srv10 from './public/services/IMG-20250901-WA0047.webp'
import srv11 from './public/services/IMG-20250901-WA0056.webp'
import almoradi from './public/almoradi.webp'

// Brand Logos
import brand1 from './public/marcs/IMG-20250701-WA0001.webp'
import brand2 from './public/marcs/IMG-20250701-WA0002.webp'
import brand3 from './public/marcs/IMG-20250701-WA0003.webp'
import brand4 from './public/marcs/IMG-20250701-WA0004.webp'
import brand5 from './public/marcs/IMG-20250701-WA0005.webp'
import brand6 from './public/marcs/IMG-20250701-WA0006.webp'
import brand7 from './public/marcs/IMG-20250701-WA0007.webp'
import brand8 from './public/marcs/IMG-20250701-WA0008.webp'
import brand9 from './public/marcs/IMG-20250701-WA0009.webp'
import brand10 from './public/marcs/IMG-20250701-WA0010.webp'
import brand11 from './public/marcs/IMG-20250701-WA0011.webp'
import brand12 from './public/marcs/IMG-20250701-WA0012.webp'
import brand13 from './public/marcs/IMG-20250701-WA0013.webp'
import brand14 from './public/marcs/IMG-20250701-WA0014.webp'
import brand15 from './public/marcs/IMG-20250701-WA0015.webp'
import brand16 from './public/marcs/IMG-20250701-WA0016.webp'
import brand17 from './public/marcs/IMG-20250701-WA0017.webp'


const ServiceMap = () => {
    useEffect(() => {
        const init = () => {
            if (!window.L) {
                setTimeout(init, 200);
                return;
            }
            const container = document.getElementById('leaflet-map');
            if (!container || container._leaflet_id) return;

            const map = window.L.map('leaflet-map', {
                center: [38.01, -0.80],
                zoom: 11,
                zoomControl: true,
                scrollWheelZoom: true,
                dragging: true,
                touchZoom: true,
                doubleClickZoom: true
            });

            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            // Polygon based on Vega Baja / coastal areas
            const region = [
                [38.16, -0.87], // San Isidro
                [38.15, -0.74], // Catral
                [38.11, -0.66], // Guardamar
                [37.99, -0.65], // Torrevieja
                [37.91, -0.71], // La Zenia
                [37.84, -0.77], // San Pedro del Pinatar
                [37.86, -0.90], // Pilar de la Horadada
                [37.92, -0.96], // San Miguel
                [38.08, -0.97], // Orihuela
                [38.15, -0.95], // Redovan
            ];

            window.L.polygon(region, {
                color: '#ef4444',
                fillColor: '#ef4444',
                fillOpacity: 0.15,
                weight: 3,
                dashArray: '8, 8'
            }).addTo(map);

            // Pulse Marker
            const officeIcon = window.L.divIcon({
                html: `<div class="map-pulse-v2"></div>`,
                className: 'custom-pulse-icon'
            });
            window.L.marker([37.9546, -0.7844], { icon: officeIcon }).addTo(map);

            // Fix for rendering issues in containers
            setTimeout(() => map.invalidateSize(), 500);
        };
        init();
    }, []);

    return <div id="leaflet-map" className="map-canvas-v2"></div>;
};

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null)
    const { t, i18n } = useTranslation();
    const companyLogo = logo;
    const brandsList = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
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
                        </div>
                        <a href="https://wa.me/34613227826" className="btn-primary desktop-only" target="_blank" rel="noopener noreferrer">{t('nav.contact')}</a>
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
                                <span style={{ color: '#00a651', fontWeight: '800', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>{t('hero.subtitle_badge')}</span>
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
                                        href="tel:+34613227826"
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
                                        href="https://wa.me/34613227826"
                                        className="phone-link wa-btn"
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        onMouseMove={(e) => e.stopPropagation()}
                                    >
                                        <MessageSquare fill="currentColor" size={20} />
                                        <span>{t('hero.write_us')}</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* New Section 1: About (Trusted Partner) */}
            <section id="sobre" className="about-split container">
                <div className="about-image-main">
                    <video src={videoMedia} autoPlay loop muted playsInline className="rounded-40" />
                </div>
                <div className="about-content">
                    <span className="sub-tag">{t('about.tag')}</span>
                    <div className="about-title-flex">
                        <h2>{t('about.title')}</h2>
                        <img src={modernKeys} alt="Detalle" className="about-side-img" />
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
            <section id="portfolio" className="portfolio-section">
                <div className="container">
                    <div className="portfolio-header">
                        <span className="sub-tag">{t('portfolio.tag')}</span>
                        <h2>{t('portfolio.title')}</h2>
                        <p>{t('portfolio.desc')}</p>
                    </div>
                </div>

                <div className="carousel-container overflow-hidden">
                    <div className="carousel-slider">
                        <div className="carousel-track-inner auto-scroll">
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {[srv1, srv2, srv3, srv4, srv5, srv6, srv7, srv8, srv9, srv10, srv11].map((img, index) => (
                                        <div
                                            key={`${i}-${index}`}
                                            className="portfolio-card"
                                            onClick={() => setSelectedImg(img)}
                                        >
                                            <img src={img} alt={`Serviço ${index + 1}`} loading="lazy" />
                                            <div className="portfolio-overlay">
                                                <div className="expand-btn">
                                                    <CheckCircle2 size={24} color="#00a651" />
                                                    <span>{t('portfolio.btn_view')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lightbox / Modal */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            className="img-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImg(null)}
                        >
                            <motion.div
                                className="img-modal-content"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="modal-close" onClick={() => setSelectedImg(null)}><X size={32} /></button>
                                <img src={selectedImg} alt="Serviço ampliado" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
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
                            <div className="service-bg" style={{ backgroundImage: `url(${imgLocks})` }}></div>
                            <div className="service-icon-box">
                                <Lock size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.locks_title')}</h3>
                                <p>{t('services.locks_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgIntercom})` }}></div>
                            <div className="service-icon-box">
                                <Radio size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.intercom_title')}</h3>
                                <p>{t('services.intercom_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgKeys})` }}></div>
                            <div className="service-icon-box">
                                <Key size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.keys_title')}</h3>
                                <p>{t('services.keys_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgCameras})` }}></div>
                            <div className="service-icon-box">
                                <Video size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.cameras_title')}</h3>
                                <p>{t('services.cameras_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgAutomotive})` }}></div>
                            <div className="service-icon-box">
                                <Car size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.auto_title')}</h3>
                                <p>{t('services.auto_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgEmergency})` }}></div>
                            <div className="service-icon-box">
                                <Clock size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.emergency_title')}</h3>
                                <p>{t('services.emergency_desc')}</p>
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
                            <img src={carKeyFob} alt="Detalhe fechadura" />
                            <div className="overlap-content">
                                <h3>{t('why_choose.col1_title')}</h3>
                                <p>{t('why_choose.col1_desc')}</p>
                            </div>
                        </div>
                        <div className="how-title-v2" style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
                            <span className="sub-tag" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{t('why_choose.how_tag')}</span>
                            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.1', color: '#0c0c0c', marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: t('why_choose.how_title') }}></h2>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="why-col">
                        <video
                            src={videoMedia}
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
                            <img src={locksmithToolsMacro} alt="Profissional chaveiro" className="card-inner-img" />
                            <a href="tel:+34613227826" className="btn-vibe-green">{t('why_choose.btn_call')}</a>
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
                    <a href="https://wa.me/34613227826" className="btn-dark-cta" target="_blank" rel="noopener noreferrer">
                        <span className="btn-icon"><MessageSquare fill="currentColor" size={18} /></span> +34 613 227 826
                    </a>
                </div>
                <div className="cta-banner-img">
                    <img src={ctaBg} alt="Security Check" />
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/34613227826"
                className="whatsapp-fab"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="fab-icon">
                    <MessageSquare size={32} />
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
                                <ServiceMap />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Brands Marquee Section */}
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
                                <img src={brand} alt={`Brand ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <footer className="footer-dark">
                <div className="container footer-grid-dark">
                    <div className="footer-brand">
                        <h2 className="footer-logo-text">Locksmith Solution</h2>
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
                                <a href="https://wa.me/34613227826" target="_blank" rel="noopener noreferrer"><MessageSquare size={18} /> WhatsApp</a>
                            </div>
                            <div className="footer-col contact-col">
                                <h4>{t('footer.contact')}</h4>
                                <p><Phone size={18} /> +34 613 227 826</p>
                                <p><MessageSquare size={18} /> lcksmithsolutiones@gmail.com</p>
                                <p><MapPin size={18} /> C. Pico Lobo, 7A, 03189 Orihuela, Alicante</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
