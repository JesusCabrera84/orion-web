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
                <div class="relative z-50 flex flex-col items-center justify-center md:flex-row md:justify-between w-full h-full px-6 md:px-16 lg:px-24 gap-8">
                    {/* Title */}
                    <div id="hero-title" class="text-center md:text-left mb-6 md:mb-0 md:mr-8 max-w-2xl">
                        <p class="audiowide-regular text-xs md:text-sm tracking-[0.28em] text-space-blue mb-3 opacity-90">
                            API-FIRST GEOLOCATION PLATFORM
                        </p>
                        <h1
                            class="audiowide-regular text-5xl md:text-7xl lg:text-8xl tracking-[0.22em] text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]"
                            style="letter-spacing: 0.25em"
                        >
                            ORION
                        </h1>
                        <p class="audiowide-regular mt-4 text-base md:text-lg lg:text-2xl text-gray-300 tracking-wide opacity-90">
                            La unión hace la ubicación.
                        </p>

                        <p class="mt-5 text-sm md:text-base text-gray-300/95 max-w-xl leading-relaxed">
                            Resuelve coordenadas desde Cell-ID con baja latencia, trazabilidad por request y una integración pensada para equipos de producto y backend.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                            <span class="px-3 py-1.5 rounded-full border border-space-blue/35 bg-space-blue/10 text-space-blue text-xs font-mono">Uptime 99.95%</span>
                            <span class="px-3 py-1.5 rounded-full border border-luminous-cyan/35 bg-luminous-cyan/10 text-luminous-cyan text-xs font-mono">Latencia p95 &lt; 200ms</span>
                            <span class="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-gray-200 text-xs font-mono">API v1 estable</span>
                        </div>

                        <div class="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <a
                                href="https://www.geminislabs.com/auth?mode=register"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn-primary px-7 py-3 rounded-xl font-semibold cyan-glow text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70"
                            >
                                Crear cuenta gratis
                            </a>
                            <a
                                href="/api/docs"
                                class="px-7 py-3 rounded-xl border border-white/20 text-gray-200 hover:text-white hover:border-luminous-cyan/60 transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-luminous-cyan/70"
                            >
                                Ver documentacion API
                            </a>
                        </div>
                    </div>
                    {/* Logo */}
                    <div class="flex items-center justify-center relative">
                        <div class="absolute inset-0 m-auto h-[58vh] w-[58vh] bg-space-blue/10 blur-3xl rounded-full"></div>
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
