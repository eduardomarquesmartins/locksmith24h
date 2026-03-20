import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Phone, Menu, X, Facebook, Instagram, Mail, MapPin, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// Components
import CookieBanner from '@shared/components/CookieBanner'
import LegalModal from '@shared/components/LegalModal'

// Pages
import HomePage from './pages/HomePage'
import CityBasePage from './pages/CityBasePage'

// City Pages (Physical Files)
import TorreviejaPage from './pages/cities/Torrevieja'
import OrihuelaCostaPage from './pages/cities/OrihuelaCosta'
import GuardamarPage from './pages/cities/Guardamar'
import PilarPage from './pages/cities/Pilar'
import RojalesPage from './pages/cities/Rojales'
import CiudadQuesadaPage from './pages/cities/CiudadQuesada'
import SanMiguelPage from './pages/cities/SanMiguel'
import BenijofarPage from './pages/cities/Benijofar'
import FormenteraPage from './pages/cities/Formentera'
import AlgorfaPage from './pages/cities/Algorfa'
import DayaNuevaPage from './pages/cities/Daya-nueva'
import DayaViejaPage from './pages/cities/Daya-vieja'
import SanFulgencioPage from './pages/cities/SanFulgencio'
import CatralPage from './pages/cities/Catral'
import DoloresPage from './pages/cities/Dolores'
import CallosaPage from './pages/cities/Callosa'
import RedovanPage from './pages/cities/Redovan'
import GranjaPage from './pages/cities/Granja'
import SantaPolaPage from './pages/cities/SantaPola'
import GranAlacantPage from './pages/cities/GranAlacant'
import ElchePage from './pages/cities/Elche'
import SanJavierPage from './pages/cities/San-javier'
import LosAlcazaresPage from './pages/cities/LosAlcazares'
import LaMangaPage from './pages/cities/LaManga'
import TorrePachecoPage from './pages/cities/TorrePacheco'
import RoldanPage from './pages/cities/Roldan'
import ElAlgarPage from './pages/cities/ElAlgar'
import SantiagoRiberaPage from './pages/cities/SantiagoRibera'
import SanPedroPage from './pages/cities/SanPedro'
import CaboPalosPage from './pages/cities/CaboPalos'
import CartagenaPage from './pages/cities/Cartagena'

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

function App() {
    const { t, i18n } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [legalType, setLegalType] = useState(null)

    const [isLangOpen, setIsLangOpen] = useState(false)

    const languages = [
        { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
        { code: 'en', label: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
        { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/w20/pt.png' },
        { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
        { code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' }
    ]

    const changeLanguage = (code) => {
        i18n.changeLanguage(code)
        setIsLangOpen(false)
    }

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const openLegal = (type) => setLegalType(type)

    return (
        <HelmetProvider>
            <Router>
                <div className="app-container">
                    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                        <div className="nav-content">
                            <Link to="/" className="css-logo">
                                <img src="/Escudologo.png?v=2" alt="Locksmith Logo" className="navbar-logo" />
                                <div className="logo-text-container">
                                    <span className="main-logo-text">CERRAJEROS</span>
                                    <span className="sub-logo-text">LOCKSMITH | SOLUTION 24H</span>
                                </div>
                            </Link>

                            <div className="desktop-menu">
                                <Link to="/#sobre">{t('nav.about')}</Link>
                                <Link to="/#servicos">{t('nav.services')}</Link>
                                <Link to="/#portfolio">{t('nav.portfolio')}</Link>
                                <Link to="/#zonas">{t('nav.zones')}</Link>
                            </div>

                            <div className="nav-actions">
                                <div className={`lang-switcher ${isLangOpen ? 'open' : ''}`}>
                                    <button className="lang-btn selected" onClick={() => setIsLangOpen(!isLangOpen)}>
                                        <img src={`https://flagcdn.com/w40/${i18n.language === 'en' ? 'gb' : i18n.language}.png`} alt="Language" className="flag-icon" />
                                        <ChevronDown size={16} className={`chevron ${isLangOpen ? 'rotate' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isLangOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="lang-dropdown"
                                            >
                                                {[
                                                    { code: 'es', label: 'Español', flag: 'es' },
                                                    { code: 'en', label: 'English', flag: 'gb' },
                                                    { code: 'pt', label: 'Português', flag: 'pt' },
                                                    { code: 'fr', label: 'Français', flag: 'fr' },
                                                    { code: 'ru', label: 'Русский', flag: 'ru' }
                                                ].map((lang) => (
                                                    <button
                                                        key={lang.code}
                                                        className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                                                        onClick={() => changeLanguage(lang.code)}
                                                    >
                                                        <img src={`https://flagcdn.com/w40/${lang.flag}.png`} alt={lang.label} className="flag-icon" />
                                                        <span>{lang.label}</span>
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
                                <Link to="/#sobre" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.about')}</Link>
                                <Link to="/#servicos" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.services')}</Link>
                                <Link to="/#portfolio" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.portfolio')}</Link>
                                <Link to="/#zonas" onClick={() => setIsMenuOpen(false)}>{t('mobileMenu.zones')}</Link>
                                <a href="#contacto" className="btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <main style={{ minHeight: '600px', width: '100%' }}>
                        <Routes>
                            <Route path="/" element={<HomePage t={t} i18n={i18n} openLegal={openLegal} />} />
                            
                            {/* Static City Pages (Physical Files) */}
                            <Route path="/cerrajero-torrevieja" element={<TorreviejaPage />} />
                            <Route path="/cerrajero-orihuela-costa" element={<OrihuelaCostaPage />} />
                            <Route path="/cerrajero-guardamar-del-segura" element={<GuardamarPage />} />
                            <Route path="/cerrajero-pilar-de-la-horadada" element={<PilarPage />} />
                            <Route path="/cerrajero-rojales" element={<RojalesPage />} />
                            <Route path="/cerrajero-ciudad-quesada" element={<CiudadQuesadaPage />} />
                            <Route path="/cerrajero-san-miguel-de-salinas" element={<SanMiguelPage />} />
                            <Route path="/cerrajero-benijofar" element={<BenijofarPage />} />
                            <Route path="/cerrajero-formentera-del-segura" element={<FormenteraPage />} />
                            <Route path="/cerrajero-algorfa" element={<AlgorfaPage />} />
                            <Route path="/cerrajero-daya-nueva" element={<DayaNuevaPage />} />
                            <Route path="/cerrajero-daya-vieja" element={<DayaViejaPage />} />
                            <Route path="/cerrajero-san-fulgencio" element={<SanFulgencioPage />} />
                            <Route path="/cerrajero-la-marina" element={<SanFulgencioPage />} />
                            <Route path="/cerrajero-catral" element={<CatralPage />} />
                            <Route path="/cerrajero-dolores" element={<DoloresPage />} />
                            <Route path="/cerrajero-callosa-de-segura" element={<CallosaPage />} />
                            <Route path="/cerrajero-redovan" element={<RedovanPage />} />
                            <Route path="/cerrajero-granja-de-rocamora" element={<GranjaPage />} />
                            <Route path="/cerrajero-santa-pola" element={<SantaPolaPage />} />
                            <Route path="/cerrajero-gran-alacant" element={<GranAlacantPage />} />
                            <Route path="/cerrajero-elche" element={<ElchePage />} />
                            <Route path="/cerrajero-elx" element={<ElchePage />} />
                            <Route path="/cerrajero-san-javier" element={<SanJavierPage />} />
                            <Route path="/cerrajero-los-alcazares" element={<LosAlcazaresPage />} />
                            <Route path="/cerrajero-la-manga" element={<LaMangaPage />} />
                            <Route path="/cerrajero-torre-pacheco" element={<TorrePachecoPage />} />
                            <Route path="/cerrajero-roldan" element={<RoldanPage />} />
                            <Route path="/cerrajero-el-algar" element={<ElAlgarPage />} />
                            <Route path="/cerrajero-santiago-de-la-ribera" element={<SantiagoRiberaPage />} />
                            <Route path="/cerrajero-san-pedro-del-pinatar" element={<SanPedroPage />} />
                            <Route path="/cerrajero-cabo-de-palos" element={<CaboPalosPage />} />
                            <Route path="/cerrajero-cartagena" element={<CartagenaPage />} />

                            <Route path="/:citySlug" element={<CityBasePage />} />
                            <Route path="*" element={<HomePage t={t} i18n={i18n} openLegal={openLegal} />} />
                        </Routes>
                    </main>

                    <footer className="footer-dark">
                        <div className="container footer-grid-dark">
                            <div className="footer-brand">
                                <Link to="/" className="footer-logo-link">
                                    <img src="/logo-footer.jpg?v=2" alt="Locksmith Logo" className="footer-logo-big" />
                                </Link>
                            </div>

                            <div className="footer-info-area">
                                <p className="footer-desc">
                                    {t('footer.desc')}
                                </p>

                                <div className="footer-menus">
                                    <div className="footer-top-menus">
                                        <div className="footer-col">
                                            <h4>{t('footer.company')}</h4>
                                            <Link to="/#inicio">{t('footer.nav_home')}</Link>
                                            <Link to="/#sobre">{t('footer.nav_about')}</Link>
                                            <Link to="/#servicos">{t('footer.nav_services')}</Link>
                                            <Link to="/#portfolio">{t('footer.nav_portfolio')}</Link>
                                            <Link to="/#zonas">{t('footer.nav_zones')}</Link>
                                        </div>
                                        <div className="footer-col social-links">
                                            <h4>{t('footer.social')}</h4>
                                            <a href="https://www.facebook.com/people/Lock-Smith/61579581643179" target="_blank" rel="noopener noreferrer"><Facebook size={18} /> Facebook</a>
                                            <a href="https://www.instagram.com/locksmith24h/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram</a>
                                            <a href="https://wa.me/34602659054" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> WhatsApp</a>
                                        </div>
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
                        <div className="footer-bottom">
                            <div className="container footer-bottom-flex">
                                <div className="footer-legal-bar">
                                    <button onClick={() => openLegal('aviso')} className="legal-link-bar-btn">{t('footer.aviso')}</button>
                                    <span className="dot-sep">•</span>
                                    <button onClick={() => openLegal('privacidad')} className="legal-link-bar-btn">{t('footer.privacidad')}</button>
                                    <span className="dot-sep">•</span>
                                    <button onClick={() => openLegal('cookies')} className="legal-link-bar-btn">{t('footer.cookies')}</button>
                                </div>
                                <p className="copyright-text">{t('footer.rights')}</p>
                            </div>
                        </div>
                    </footer>

                    <CookieBanner t={t} />
                    <LegalModal isOpen={!!legalType} onClose={() => setLegalType(null)} type={legalType} />

                    <a href="https://wa.me/34602659054" className="whatsapp-fab" target="_blank" rel="noopener noreferrer">
                        <div className="fab-bubble">¿Necesitas ajuda?</div>
                        <div className="fab-icon">
                            <WhatsAppIcon size={38} />
                        </div>
                    </a>
                </div>
            </Router>
        </HelmetProvider>
    )
}

export default App
