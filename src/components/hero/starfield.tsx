import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

interface StarfieldProps {
    speed?: number;
    opacity?: number;
    density?: number;
    size?: number;
}

export const Starfield = component$<StarfieldProps>(({ speed = 0.05, opacity = 1, density = 100, size = 1 }) => {
    const canvasRef = useSignal<HTMLCanvasElement>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
        const canvas = canvasRef.value;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const stars: { x: number; y: number; s: number; a: number }[] = [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const initStars = () => {
            stars.length = 0;
            for (let i = 0; i < density; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    s: Math.random() * size + 0.5,
                    a: Math.random()
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'white';

            stars.forEach(star => {
                star.y -= speed; // Move upwards (or downwards depending on perspective, here simple vertical drift)
                // Actually user requested vertical movement. Let's make them drift slowly up.
                // Wait, user said "speedY 0.01". Usually stars move down if camera moves up, or up if camera moves down.
                // Let's make them drift slowly upwards to simulate sinking into space or just ambient float.

                if (star.y < 0) star.y = height;

                ctx.globalAlpha = star.a * opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        const animId = requestAnimationFrame(animate);

        cleanup(() => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        });
    });

    return <canvas ref={canvasRef} class="absolute inset-0 pointer-events-none" />;
});
