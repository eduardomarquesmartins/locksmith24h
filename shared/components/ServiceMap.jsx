import React, { useEffect } from 'react';

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

            const region = [
                [38.16, -0.87],
                [38.15, -0.74],
                [38.11, -0.66],
                [37.99, -0.65],
                [37.91, -0.71],
                [37.84, -0.77],
                [37.86, -0.90],
                [37.92, -0.96],
                [38.08, -0.97],
                [38.15, -0.95],
            ];

            window.L.polygon(region, {
                color: '#ef4444',
                fillColor: '#ef4444',
                fillOpacity: 0.15,
                weight: 3,
                dashArray: '8, 8'
            }).addTo(map);

            const officeIcon = window.L.divIcon({
                html: `<div class="map-pulse-v2"></div>`,
                className: 'custom-pulse-icon'
            });
            window.L.marker([37.9546, -0.7844], { icon: officeIcon }).addTo(map);

            setTimeout(() => map.invalidateSize(), 500);
        };
        init();
    }, []);

    return <div id="leaflet-map" className="map-canvas-v2"></div>;
};

export default ServiceMap;
