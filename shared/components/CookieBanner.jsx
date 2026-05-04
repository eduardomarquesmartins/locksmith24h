import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CookieBanner = ({ openLegal }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="cookie-banner"
                >
                    <div className="cookie-content">
                        <div className="cookie-text">
                            <h4>{t('cookies.title')}</h4>
                            <p>{t('cookies.desc')}</p>
                        </div>
                        <div className="cookie-actions">
                            <button className="btn-cookie-settings" onClick={() => setShowSettings(!showSettings)}>
                                {showSettings ? t('cookies.hide_settings') : t('cookies.settings')}
                            </button>
                            <div className="cookie-main-btns">
                                <button className="btn-cookie-decline" onClick={handleDecline}>
                                    {t('cookies.decline')}
                                </button>
                                <button className="btn-cookie-accept" onClick={handleAccept}>
                                    {t('cookies.accept')}
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {showSettings && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="cookie-details"
                                >
                                    <div className="cookie-detail-item interactive" onClick={() => openLegal('aviso')}>
                                        <div className="detail-header">
                                            <strong>{t('cookies.tech_title')}</strong>
                                            <span className="read-more">{t('cookies.read_more')}</span>
                                        </div>
                                        <p>{t('cookies.tech_desc')}</p>
                                    </div>
                                    <div className="cookie-detail-item interactive" onClick={() => openLegal('privacidad')}>
                                        <div className="detail-header">
                                            <strong>{t('cookies.analysis_title')}</strong>
                                            <span className="read-more">{t('cookies.read_more')}</span>
                                        </div>
                                        <p>{t('cookies.analysis_desc')}</p>
                                    </div>
                                    <div className="cookie-detail-item interactive" onClick={() => openLegal('cookies_policy')}>
                                        <div className="detail-header">
                                            <strong>{t('cookies.marketing_title')}</strong>
                                            <span className="read-more">{t('cookies.read_more')}</span>
                                        </div>
                                        <p>{t('cookies.marketing_desc')}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
