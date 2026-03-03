import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, type }) => {
    const getTitle = () => {
        if (type === 'aviso') return 'AVISO LEGAL';
        if (type === 'privacidad') return 'POLÍTICA DE PRIVACIDAD';
        if (type === 'cookies_policy') return 'POLÍTICA DE COOKIES';
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
                            {type === 'aviso' && (
                                <div className="legal-text">
                                    <h4>Titularidad del sitio web</h4>
                                    <p>En cumplimiento con el artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa que el presente sitio web es propiedad de:</p>
                                    <ul>
                                        <li><strong>Nombre comercial:</strong> Locksmith Solutions</li>
                                        <li><strong>Titular:</strong> Elvis pinheiro da Silva de Jesus</li>
                                        <li><strong>DNI:</strong> 60680450X</li>
                                        <li><strong>Dirección:</strong> C. Pico Lobo, 7A, 03189 Orihuela, Alicante</li>
                                        <li><strong>Teléfono:</strong> 602 659 054</li>
                                    </ul>

                                    <h4>Objeto</h4>
                                    <p>El presente sitio web tiene como finalidad ofrecer información sobre los servicios de cerrajería urgente 24h que presta Locksmith Solutions.</p>

                                    <h4>Condiciones de uso</h4>
                                    <p>El usuario se compromete a utilizar esta web y sus contenidos conforme a la legislación vigente, la buena fe y el orden público. Queda prohibido todo uso con fines ilícitos o que puedan perjudicar a terceros.</p>
                                    <p>Locksmith Solutions no se hace responsable del mal uso que se haga del contenido de este sitio web.</p>

                                    <h4>Propiedad intelectual</h4>
                                    <p>Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño, etc.) son propiedad de Locksmith Solutions o de sus respectivos titulares, y están protegidos por la normativa de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>

                                    <h4>Enlaces</h4>
                                    <p>Este sitio web puede incluir enlaces a sitios de terceros. Locksmith Solutions no se responsabiliza del contenido, seguridad o funcionamiento de dichos sitios externos.</p>

                                    <h4>Limitación de responsabilidad</h4>
                                    <p>Locksmith Solutions no garantiza la inexistencia de errores en el acceso al sitio web ni en su contenido, aunque pondrá los medios necesarios para evitarlos y corregirlos lo antes posible.</p>

                                    <h4>Legislación aplicable</h4>
                                    <p>El presente aviso legal se rige por la legislación española. En caso de conflicto o controversia, las partes se someterán a los Juzgados y Tribunales, salvo disposición legal en contrario.</p>
                                </div>
                            )}

                            {type === 'privacidad' && (
                                <div className="legal-text">
                                    <p><em>Última actualización: 03/03/2026</em></p>
                                    <p>En Locksmith Solutions, nos comprometemos a proteger tu privacidad y garantizar el cumplimiento de la legislación vigente en materia de protección de datos personales, incluyendo el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD).</p>

                                    <h4>1. Responsable del tratamiento</h4>
                                    <ul>
                                        <li><strong>Titular:</strong> Elvis pinheiro da Silva de Jesus</li>
                                        <li><strong>DNI:</strong> 60680450X</li>
                                        <li><strong>Dirección:</strong> C. Pico Lobo, 7A, 03189 Orihuela, Alicante</li>
                                        <li><strong>Teléfono:</strong> 602 659 054</li>
                                    </ul>

                                    <h4>2. Finalidad del tratamiento</h4>
                                    <p>Recopilamos y tratamos los datos personales que nos proporcionas a través de formularios de contacto, llamadas o correos electrónicos, con las siguientes finalidades:</p>
                                    <ul>
                                        <li>Responder a consultas o solicitudes.</li>
                                        <li>Gestionar citas o servicios solicitados.</li>
                                        <li>Realizar comunicaciones comerciales sobre nuestros servicios (si se ha dado consentimiento).</li>
                                        <li>Mejorar la experiencia de usuario y la calidad del sitio web.</li>
                                    </ul>

                                    <h4>3. Legitimación</h4>
                                    <p>El tratamiento de tus datos se basa en:</p>
                                    <ul>
                                        <li>Tu consentimiento expreso al contactar con nosotros o completar formularios.</li>
                                        <li>La ejecución de un contrato o medidas precontractuales (solicitudes de presupuesto, citas, etc.).</li>
                                        <li>El interés legítimo del responsable en mejorar sus servicios y atención al cliente.</li>
                                    </ul>

                                    <h4>4. Conservación de los datos</h4>
                                    <p>Tus datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que se recabaron, o el plazo exigido por obligaciones legales.</p>

                                    <h4>5. Destinatarios</h4>
                                    <p>No se comunicarán tus datos personales a terceros, salvo obligación legal o para la prestación de servicios necesarios (ej. empresa de hosting, correo electrónico), siempre bajo contrato de confidencialidad y tratamiento conforme a la normativa.</p>

                                    <h4>6. Derechos del usuario</h4>
                                    <p>Puedes ejercer en cualquier momento tus derechos de Acceso, Rectificación, Supresión, Oposición, Limitación del tratamiento y Portabilidad.</p>
                                    <p>Para ello, solo tienes que enviar una solicitud por email a <strong>locksmith.orihuela@gmail.com</strong> indicando claramente tu petición, adjuntando copia de tu DNI o documento identificativo.</p>

                                    <h4>7. Seguridad de los datos</h4>
                                    <p>Locksmith Solutions aplica medidas técnicas y organizativas apropiadas para garantizar la seguridad de tus datos personales y evitar su pérdida, mal uso o acceso no autorizado.</p>

                                    <h4>8. Cambios en esta política</h4>
                                    <p>Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta misma página con fecha de actualización.</p>

                                    <h4>9. Autoridad de control</h4>
                                    <p>Si consideras que tus derechos han sido vulnerados, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) – www.aepd.es.</p>
                                </div>
                            )}

                            {type === 'cookies_policy' && (
                                <div className="legal-text">
                                    <p><em>Última actualización: 03/03/2026</em></p>
                                    <p>En cumplimiento con el deber de información establecido en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE), te informamos que este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y realizar análisis estadísticos anónimos del uso del sitio.</p>

                                    <h4>¿Qué son las cookies?</h4>
                                    <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, móvil o tablet) cuando visitas una página web. Su función es reconocer tu navegador, guardar preferencias y facilitar una navegación más eficiente.</p>

                                    <h4>Tipos de cookies que usamos</h4>
                                    <ul>
                                        <li><strong>Cookies técnicas o necesarias:</strong> Permiten la navegación por la web y el uso de sus funcionalidades básicas. Estas cookies son imprescindibles y no requieren consentimiento.</li>
                                        <li><strong>Cookies de análisis:</strong> Nos permiten obtener estadísticas anónimas del uso del sitio (por ejemplo, mediante Google Analytics). Se utilizan para mejorar los contenidos y servicios, y requieren tu consentimiento.</li>
                                        <li><strong>Cookies de terceros:</strong> Algunos servicios incrustados, como mapas de Google o botones sociales, pueden instalar cookies propias. Su funcionamiento depende directamente de los proveedores externos.</li>
                                    </ul>

                                    <h4>¿Cómo puedes gestionar las cookies?</h4>
                                    <p>Al acceder al sitio por primera vez, se te informa mediante un banner o aviso de cookies. Puedes aceptar, rechazar o configurar el uso de cookies según tus preferencias.</p>
                                    <p>También puedes configurar tu navegador para aceptar o rechazar cookies automáticamente:</p>
                                    <ul>
                                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank">Google Chrome</a></li>
                                        <li><a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-en-firefox" target="_blank">Mozilla Firefox</a></li>
                                        <li><a href="https://support.apple.com/es-es/HT201265" target="_blank">Safari</a></li>
                                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank">Microsoft Edge</a></li>
                                    </ul>

                                    <h4>Cambios en esta política</h4>
                                    <p>Nos reservamos el derecho de actualizar esta Política de Cookies para reflejar posibles cambios legales o técnicos. La nueva versión se publicará en esta misma página.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
