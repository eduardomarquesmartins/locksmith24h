import React, { useRef, useState, useEffect } from 'react';

const LazyVideo = ({ src, className, style, ...props }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.01,
                rootMargin: '400px 0px'  // Start loading 400px BEFORE it enters the viewport
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <video
            ref={videoRef}
            src={isVisible ? src : undefined}
            className={className}
            style={style}
            preload={isVisible ? "auto" : "none"}
            {...props}
        />
    );
};

export default LazyVideo;
