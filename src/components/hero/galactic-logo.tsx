import { component$ } from '@builder.io/qwik';

export const GalacticLogo = component$(() => {
    return (
        <div
            class="relative w-64 h-64 md:w-96 md:h-96 z-10 animate-float"
            style={{ transform: 'translateY(var(--orion-parallax-3))' }} // Strongest parallax
        >
            {/* Base Logo (Ring) - Using the original image but masking out the arrow if possible, or just overlaying. 
          Since we don't have separate assets, we'll use the full logo as base and overlay the animated arrow.
          Ideally we'd have the ring separate. For now, we'll assume the logo.png is the full logo.
          To achieve the effect requested: "Dejar el aro del logo fijo (sin animación)".
          We will display the full logo, and then overlay the "Arrow" part with the galaxy texture using the mask.
      */}

            {/* 1. Base Static Logo */}
            <img
                src="/images/logo.png"
                alt="Orion Logo"
                class="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(76,158,255,0.3)]"
            />

            {/* 2. Galactic Arrow Overlay 
          We use the mask image to clip the galaxy texture to the shape of the arrow.
          The mask should be white where we want the galaxy, black elsewhere.
      */}
            <div
                class="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
                style={{
                    maskImage: 'url(/textures/logo-arrow-mask.png)',
                    WebkitMaskImage: 'url(/textures/logo-arrow-mask.png)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                }}
            >
                <div
                    class="w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 animate-galaxy-spin opacity-80"
                    style={{
                        backgroundImage: 'url(/textures/orion-galaxy.png)',
                        backgroundSize: 'cover',
                        filter: 'brightness(1.5) contrast(1.2)'
                    }}
                />
            </div>
        </div>
    );
});
