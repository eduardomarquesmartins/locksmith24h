import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LegalModal = ({ isOpen, onClose, type }) => {
    const { t } = useTranslation();

    const getTitle = () => {
        if (type === 'aviso') return t('legal.aviso_title');
        if (type === 'privacidad') return t('legal.privacidad_title');
        if (type === 'cookies_policy') return t('legal.cookies_title');
        return '';
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="legal-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="legal-modal-content"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header className="legal-modal-header">
                            <h3>{getTitle()}</h3>
                            <button className="close-legal" onClick={onClose}><X size={24} /></button>
                        </header>
                        <div className="legal-modal-body">
                            <div className="legal-text" dangerouslySetInnerHTML={{ __html: t(`legal.${type}_content`) }} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
