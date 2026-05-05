import { component$ } from '@builder.io/qwik';

export const Cta = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10">
            <div class="max-w-5xl mx-auto text-center glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                {/* Background Glow */}
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-space-blue/20 rounded-full filter blur-[100px] -z-10"></div>
                <div class="absolute top-8 left-12 w-28 h-28 bg-luminous-cyan/10 rounded-full blur-3xl -z-10"></div>

                <p class="text-space-blue uppercase tracking-[0.2em] text-xs font-semibold mb-3">Comienza hoy</p>
                <h2 class="text-3xl md:text-5xl font-bold mb-5 text-white">
                    Lleva la geolocalizacion de tu producto a nivel enterprise
                </h2>
                <p class="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Crea tu cuenta, genera tu API key y realiza tus primeras integraciones en minutos con Orion.
                </p>

                <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
                    <span class="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-gray-200 text-xs font-mono">Setup &lt; 5 min</span>
                    <span class="px-3 py-1.5 rounded-full border border-space-blue/35 bg-space-blue/10 text-space-blue text-xs font-mono">No friccion para empezar</span>
                    <span class="px-3 py-1.5 rounded-full border border-luminous-cyan/35 bg-luminous-cyan/10 text-luminous-cyan text-xs font-mono">Documentacion tecnica</span>
                </div>

                <div class="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href="https://www.geminislabs.com/auth?mode=register"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-primary px-10 py-4 rounded-xl text-lg font-bold cyan-glow hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70"
                    >
                        Crear Cuenta Gratis
                    </a>
                    <a
                        href="/api/docs"
                        class="px-10 py-4 rounded-xl text-lg font-semibold border border-white/20 text-gray-200 hover:text-white hover:border-luminous-cyan/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-luminous-cyan/70"
                    >
                        Ver documentacion API
                    </a>
                </div>

                <p class="text-xs text-gray-400 mt-4">Registro en Geminislabs, toma menos de 1 minuto.</p>
            </div>
        </section>
    );
});
