import { component$ } from '@builder.io/qwik';

export const Halo = component$(() => {
    return (
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
            style={{
                background: 'radial-gradient(circle, rgba(76, 158, 255, 0.4) 0%, rgba(76, 158, 255, 0) 70%)',
                filter: 'blur(60px)',
                transform: 'translate(-50%, -50%) translateY(var(--orion-parallax-2))', // Parallax movement
                opacity: 0.6
            }}
        />
    );
});
