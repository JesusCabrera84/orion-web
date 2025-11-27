import { component$ } from '@builder.io/qwik';

export const Comparison = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white text-glow">
                    ¿Por qué elegir Orion?
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Traditional */}
                    <div class="glass-panel p-8 rounded-2xl border border-red-500/10 opacity-70 hover:opacity-100 transition-all duration-500 hover:border-red-500/30">
                        <h3 class="text-xl font-bold mb-6 text-gray-400">Soluciones Tradicionales</h3>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                Lentas ({'>'} 2s latencia)
                            </li>
                            <li class="flex items-center gap-3 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                Datos desactualizados
                            </li>
                            <li class="flex items-center gap-3 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                API compleja y opaca
                            </li>
                        </ul>
                    </div>

                    {/* Orion */}
                    <div class="glass-card p-8 rounded-2xl border border-luminous-cyan/30 relative overflow-hidden group shadow-[0_0_30px_rgba(75,243,255,0.1)] hover:shadow-[0_0_50px_rgba(75,243,255,0.2)] transition-all duration-500">
                        <div class="absolute inset-0 bg-luminous-cyan/5 group-hover:bg-luminous-cyan/10 transition-colors duration-500"></div>
                        <h3 class="text-xl font-bold mb-6 text-luminous-cyan flex items-center gap-2">
                            Orion Locator
                            <span class="w-2 h-2 rounded-full bg-luminous-cyan animate-pulse"></span>
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-luminous-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                Ultra rápida ({'<'} 200ms)
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-luminous-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                Base de datos híbrida en tiempo real
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-luminous-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                API-First, segura y transparente
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
});
