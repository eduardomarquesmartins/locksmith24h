import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, X } from 'lucide-react';

const Portfolio = () => {
    const { t } = useTranslation();
    const [selectedImg, setSelectedImg] = useState(null);
    const [allGalleryPhotos, setAllGalleryPhotos] = useState([]);

    useEffect(() => {
        // Dynamic import for all service and work photos (lazy loading)
        const photoModules = import.meta.glob('../assets/images/gallery/*.webp');

        const loadPhotos = async () => {
            const photoPromises = Object.values(photoModules).map(importFn => importFn());
            const photoResults = await Promise.all(photoPromises);

            const loadedPhotos = photoResults.map(mod => mod.default);
            setAllGalleryPhotos(loadedPhotos);
        };

        loadPhotos();
    }, []);

    if (allGalleryPhotos.length === 0) {
        return (
            <section id="portfolio" className="portfolio-section">
                <div className="container">
                    <div className="portfolio-header">
                        <span className="sub-tag">{t('portfolio.tag')}</span>
                        <h2>{t('portfolio.title')}</h2>
                        <p>{t('portfolio.desc')}</p>
                    </div>
                    <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="loader"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
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
                                {allGalleryPhotos.map((img, index) => (
                                    <div
                                        key={`${i}-${index}`}
                                        className="portfolio-card"
                                        onClick={() => setSelectedImg(img)}
                                    >
                                        <img src={img} alt={`Serviço ${index + 1}`} loading="lazy" decoding="async" />
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
    );
};

export default Portfolio;
