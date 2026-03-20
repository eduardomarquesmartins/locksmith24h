import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const Portfolio = ({ t, photos = [] }) => {
    const [selectedImg, setSelectedImg] = useState(null);

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
                                {photos.map((img, index) => (
                                    <div
                                        key={`${i}-${index}`}
                                        className="portfolio-card"
                                        onClick={() => setSelectedImg(img)}
                                    >
                                        <img src={img} alt={`Serviço ${index + 1}`} decoding="async" />
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
