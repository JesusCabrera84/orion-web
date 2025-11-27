import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface StarfieldLayerProps {
    id: string;
    starCount?: number;
    speedY?: number; // velocidad vertical
    sizeRange?: [number, number];
    opacity?: number;
    class?: string;
    style?: string;
}

export const StarfieldLayer = component$((props: StarfieldLayerProps) => {
    const canvasRef = useSignal<HTMLCanvasElement>();

    useVisibleTask$(() => {
        const canvas = canvasRef.value;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            const { clientWidth, clientHeight } = canvas;
            canvas.width = clientWidth * dpr;
            canvas.height = clientHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener('resize', resize);

        const starCount = props.starCount ?? 140;
        const speedY = props.speedY ?? 0.015;
        const [minSize, maxSize] = props.sizeRange ?? [0.4, 1.2];
        const opacity = props.opacity ?? 0.6;

        type Star = { x: number; y: number; r: number; alpha: number; vx: number; vy: number; flicker: number };

        let stars: Star[] = [];

        const initStars = () => {
            stars = [];
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: minSize + Math.random() * (maxSize - minSize),
                    alpha: 0.3 + Math.random() * 0.7,
                    vx: (Math.random() - 0.5) * 0.02,   // movimiento lateral suave
                    vy: (Math.random() - 0.5) * 0.02,   // variación vertical orgánica
                    flicker: Math.random() * 0.03       // intensidad del parpadeo
                });
            }
        };

        initStars();

        let lastTime = performance.now();

        const render = (time: number) => {
            const dt = time - lastTime;
            lastTime = time;

            const w = canvas.clientWidth;
            const h = canvas.clientHeight;

            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;

            for (const s of stars) {
                s.y += speedY * dt * 0.01;
                if (s.y > h + 5) s.y = -5;

                ctx.globalAlpha = s.alpha;
                s.x += s.vx * dt;
                s.y += (speedY * dt * 0.01) + s.vy;

                s.alpha += (Math.random() - 0.5) * s.flicker;
                s.alpha = Math.max(0.2, Math.min(1, s.alpha));

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resize);
        };
    });

    return (
        <canvas
            ref={canvasRef}
            id={props.id}
            style={props.style}
            class={
                'pointer-events-none absolute inset-0 w-full h-full ' + (props.class ?? '')
            }
        />
    );
});
