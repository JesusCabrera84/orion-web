import { component$ } from '@builder.io/qwik';

export const Comparison = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white text-glow">
                    ¿Por qué elegir Orion?
                </h2>

                <div class="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_35px_rgba(75,243,255,0.08)]">
                    <div class="grid grid-cols-3 bg-white/5 border-b border-white/10 text-sm md:text-base">
                        <div class="px-4 md:px-6 py-4 text-gray-300 font-semibold">Criterio</div>
                        <div class="px-4 md:px-6 py-4 text-gray-400 font-semibold">Soluciones tradicionales</div>
                        <div class="px-4 md:px-6 py-4 text-luminous-cyan font-semibold bg-luminous-cyan/10 border-l border-luminous-cyan/20">Orion Locator</div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-white/10 text-sm">
                        <div class="px-4 md:px-6 py-4 text-gray-200">Latencia</div>
                        <div class="px-4 md:px-6 py-4 text-gray-400">
                            <span class="px-2 py-1 rounded bg-red-500/10 text-red-300 text-xs font-mono">&gt; 2s</span>
                        </div>
                        <div class="px-4 md:px-6 py-4 bg-luminous-cyan/5 border-l border-luminous-cyan/20 text-white">
                            <span class="px-2 py-1 rounded bg-luminous-cyan/15 text-luminous-cyan text-xs font-mono">&lt; 200ms</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-white/10 text-sm">
                        <div class="px-4 md:px-6 py-4 text-gray-200">Actualizacion de datos</div>
                        <div class="px-4 md:px-6 py-4 text-gray-400">
                            <span class="px-2 py-1 rounded bg-yellow-500/10 text-yellow-300 text-xs font-mono">Parcial</span>
                        </div>
                        <div class="px-4 md:px-6 py-4 bg-luminous-cyan/5 border-l border-luminous-cyan/20 text-white">
                            <span class="px-2 py-1 rounded bg-luminous-cyan/15 text-luminous-cyan text-xs font-mono">Tiempo real</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-white/10 text-sm">
                        <div class="px-4 md:px-6 py-4 text-gray-200">Experiencia API</div>
                        <div class="px-4 md:px-6 py-4 text-gray-400">
                            <span class="px-2 py-1 rounded bg-red-500/10 text-red-300 text-xs font-mono">Compleja</span>
                        </div>
                        <div class="px-4 md:px-6 py-4 bg-luminous-cyan/5 border-l border-luminous-cyan/20 text-white">
                            <span class="px-2 py-1 rounded bg-luminous-cyan/15 text-luminous-cyan text-xs font-mono">Simple y clara</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 text-sm">
                        <div class="px-4 md:px-6 py-4 text-gray-200">Observabilidad</div>
                        <div class="px-4 md:px-6 py-4 text-gray-400">
                            <span class="px-2 py-1 rounded bg-yellow-500/10 text-yellow-300 text-xs font-mono">Limitada</span>
                        </div>
                        <div class="px-4 md:px-6 py-4 bg-luminous-cyan/5 border-l border-luminous-cyan/20 text-white">
                            <span class="px-2 py-1 rounded bg-luminous-cyan/15 text-luminous-cyan text-xs font-mono">request_id + logs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
