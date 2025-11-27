import { component$, useSignal, useVisibleTask$, noSerialize, type NoSerialize } from '@builder.io/qwik';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    lat: number;
    lng: number;
    accuracy?: number;
}

export const MapView = component$<MapProps>(({ lat, lng, accuracy }) => {
    const mapContainer = useSignal<HTMLElement>();
    const mapInstance = useSignal<NoSerialize<any>>();
    const markerInstance = useSignal<NoSerialize<any>>();
    const circleInstance = useSignal<NoSerialize<any>>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async ({ track }) => {
        track(() => lat);
        track(() => lng);
        track(() => accuracy);

        if (!mapContainer.value) return;

        const L = (await import('leaflet')).default;

        // Fix icon issue
        // @ts-expect-error Fix leaflet icon issue
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        if (!mapInstance.value) {
            const map = L.map(mapContainer.value, {
                zoomControl: false
            }).setView([lat, lng], 13);

            L.control.zoom({ position: 'bottomright' }).addTo(map);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap &copy; CARTO',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

            mapInstance.value = noSerialize(map);
        }

        const map = mapInstance.value;
        if (!map) return;

        if (markerInstance.value) markerInstance.value.remove();
        if (circleInstance.value) circleInstance.value.remove();

        const marker = L.marker([lat, lng]).addTo(map);
        markerInstance.value = noSerialize(marker);

        if (accuracy) {
            const circle = L.circle([lat, lng], {
                radius: accuracy,
                color: '#4BF3FF',
                fillColor: '#4BF3FF',
                fillOpacity: 0.1,
                weight: 1
            }).addTo(map);
            circleInstance.value = noSerialize(circle);
            map.fitBounds(circle.getBounds());
        } else {
            map.setView([lat, lng], 13);
        }
    });

    return <div ref={mapContainer} class="w-full h-full bg-deep-space-dark z-0" />;
});
