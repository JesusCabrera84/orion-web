import { component$ } from '@builder.io/qwik';

export const Features = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <p class="text-space-blue uppercase tracking-[0.2em] text-xs font-semibold mb-3">Ventajas Orion</p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Diseñada para equipos que operan a escala</h2>
                    <p class="text-gray-300 max-w-3xl mx-auto">Arquitectura API-first con foco en velocidad, calidad de señal y trazabilidad en producción.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/10 hover:border-space-blue/50 hover:shadow-[0_0_30px_rgba(76,158,255,0.15)]">
                        <div class="flex items-center justify-between mb-5">
                            <span class="text-xs font-mono text-gray-400">Performance</span>
                            <span class="text-sm px-2.5 py-1 rounded-full bg-space-blue/15 text-space-blue font-mono">&lt; 200ms</span>
                        </div>
                    <div class="w-14 h-14 rounded-full bg-space-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-space-blue/20 group-hover:border-space-blue/50 group-hover:shadow-[0_0_20px_rgba(76,158,255,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-space-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-space-blue transition-colors duration-300">Velocidad Profesional</h3>
                    <p class="text-gray-400 text-sm leading-relaxed font-light">
                        Respuestas en milisegundos utilizando infraestructura optimizada para alta disponibilidad.
                    </p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">Baja latencia</span>
                        <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">Alta concurrencia</span>
                    </div>
                </div>

                <div class="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/10 hover:border-luminous-cyan/50 hover:shadow-[0_0_30px_rgba(75,243,255,0.15)]">
                    <div class="flex items-center justify-between mb-5">
                        <span class="text-xs font-mono text-gray-400">Calidad de datos</span>
                        <span class="text-sm px-2.5 py-1 rounded-full bg-luminous-cyan/15 text-luminous-cyan font-mono">Confianza 1.0</span>
                    </div>
                    <div class="w-14 h-14 rounded-full bg-luminous-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-luminous-cyan/20 group-hover:border-luminous-cyan/50 group-hover:shadow-[0_0_20px_rgba(75,243,255,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-luminous-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-luminous-cyan transition-colors duration-300">Precisión Real</h3>
                    <p class="text-gray-400 text-sm leading-relaxed font-light">
                        Algoritmos probabilísticos que refinan la ubicación mediante múltiples fuentes de datos.
                    </p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">Lookup parcial</span>
                        <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">Datos de celda</span>
                    </div>
                </div>

                <div class="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/10 hover:border-soft-purple/50 hover:shadow-[0_0_30px_rgba(233,213,255,0.15)]">
                    <div class="flex items-center justify-between mb-5">
                        <span class="text-xs font-mono text-gray-400">Observabilidad</span>
                        <span class="text-sm px-2.5 py-1 rounded-full bg-soft-purple/15 text-soft-purple font-mono">request_id</span>
                    </div>
                    <div class="w-14 h-14 rounded-full bg-soft-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-soft-purple/20 group-hover:border-soft-purple/50 group-hover:shadow-[0_0_20px_rgba(233,213,255,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-soft-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-soft-purple transition-colors duration-300">Seguridad Transparente</h3>
                    <p class="text-gray-400 text-sm leading-relaxed font-light">
                        Tus peticiones viajan cifradas; auditoría completa y logs disponibles en tiempo real.
                    </p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">TLS</span>
                        <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">Auditoria</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
});
