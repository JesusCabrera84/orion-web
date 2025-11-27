import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { StarfieldLayer } from './starfield-layer';
import { EarthPlane } from './EarthPlane';

export const Hero = component$(() => {
    const offset = useSignal(0);

    useVisibleTask$(() => {
        const handler = () => {
            offset.value = window.scrollY * 0.1;
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    });
    return (
        <div class="relative w-full h-full">
            <section class="hero-section ">
            </section>

            <section
                class="relative flex items-center justify-center overflow-hidden w-screen h-screen"
                style={{
                    background: 'radial-gradient(circle at top right, #000000, #0a0a0a, #111111)',
                    perspective: '1200px',
                    perspectiveOrigin: 'center',
                }}
            >
                {/* Starfield layers */}
                <StarfieldLayer id="starfield-back" starCount={50} speedY={0} sizeRange={[1.5, 2.5]} opacity={0.6} class="twinkle"
                    style={{ transform: `translateZ(-300px)  translateY(${offset.value * 1.6}px) translateX(${offset.value * 0.6}px) scale(1.3)` }} />

                <StarfieldLayer id="starfield-mid" starCount={100} speedY={0} sizeRange={[0.8, 1.5]} opacity={0.8} class="twinkle"
                    style={{ transform: `translateZ(-300px)  translateY(${offset.value * 1.3}px) translateX(${offset.value * 0.1}px) scale(1.5)` }} />

                <StarfieldLayer id="starfield-front" starCount={150} speedY={0} sizeRange={[0.4, 1.0]} opacity={1} class="twinkle"
                    style={{ transform: `translateZ(-300px)  translateY(${offset.value * 1.0}px) translateX(${offset.value * 0.3}px) scale(1.6)` }} />

                {/* Earth */}
                <EarthPlane />

                {/* Responsive container for title and logo */}
                <div class="relative z-50 flex flex-col items-center justify-center md:flex-row md:justify-between w-full h-full mx-[25vw]">
                    {/* Title */}
                    <div id="hero-title" class="text-center md:text-left mb-6 md:mb-0 md:mr-8">
                        <h1
                            class="audiowide-regular text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]"
                            style="letter-spacing: 0.25em"
                        >
                            ORION
                        </h1>
                        <p class="audiowide-regular mt-4 text-base md:text-lg lg:text-2xl text-gray-300 tracking-wide opacity-80">
                            La unión hace la ubicación.
                        </p>
                    </div>
                    {/* Logo */}
                    <div class="flex items-center justify-center">
                        <img
                            src="/images/logo-orion-silver.png"
                            alt="Orion Locator"
                            style={{
                                height: '50vh',
                                maxWidth: '90vw',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );

});
