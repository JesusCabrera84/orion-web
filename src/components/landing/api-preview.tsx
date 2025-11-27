import { component$ } from '@builder.io/qwik';

export const ApiPreview = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10 bg-deep-space-light/30">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-space-blue text-glow">
                        Cómo funciona la API de Orion
                    </h2>
                    <p class="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Integración simple y potente para desarrolladores.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Code Blocks */}
                    <div class="space-y-8">
                        <div class="glass-panel p-6 rounded-xl border border-white/5 overflow-hidden relative group hover:border-space-blue/30 transition-colors duration-500">
                            <div class="absolute inset-0 bg-space-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div class="flex items-center justify-between mb-4 border-b border-white/5 pb-4 relative z-10">
                                <span class="text-sm font-mono text-space-blue font-bold tracking-wide">Request Example</span>
                                <span class="text-xs text-gray-500 font-mono">POST /v1/locate</span>
                            </div>
                            <pre class="font-mono text-sm text-gray-300 overflow-x-auto relative z-10 scrollbar-hide">
                                <code>{`curl -X POST https://api.orion.com/v1/locate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "mcc": 724,
    "mnc": 5,
    "lac": 12345,
    "cell_id": 67890
  }'`}</code>
                            </pre>
                        </div>

                        <div class="glass-panel p-6 rounded-xl border border-white/5 overflow-hidden relative group hover:border-luminous-cyan/30 transition-colors duration-500">
                            <div class="absolute inset-0 bg-luminous-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div class="flex items-center justify-between mb-4 border-b border-white/5 pb-4 relative z-10">
                                <span class="text-sm font-mono text-luminous-cyan font-bold tracking-wide">Response Example</span>
                                <span class="text-xs text-gray-500 font-mono">200 OK</span>
                            </div>
                            <pre class="font-mono text-sm text-gray-300 overflow-x-auto relative z-10 scrollbar-hide">
                                <code>{`{
  "lat": -22.89,
  "lng": -43.12,
  "accuracy": 800,
  "source": "cellid"
}`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Right Column: Plans & Steps */}
                    <div class="space-y-8">
                        <div class="glass-card p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h3 class="text-2xl font-bold mb-6 text-white">Planes Flexibles</h3>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-luminous-cyan/40 hover:bg-white/10 transition-all duration-300 cursor-default">
                                    <span class="text-gray-300 font-medium">Gratis</span>
                                    <span class="text-luminous-cyan font-mono font-bold">100 req/day</span>
                                </div>
                                <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-space-blue/40 hover:bg-white/10 transition-all duration-300 cursor-default">
                                    <span class="text-gray-300 font-medium">Plan Dev</span>
                                    <span class="text-space-blue font-mono font-bold">5,000 req/day</span>
                                </div>
                                <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-soft-purple/40 hover:bg-white/10 transition-all duration-300 cursor-default">
                                    <span class="text-gray-300 font-medium">Plan Pro</span>
                                    <span class="text-soft-purple font-mono font-bold">50,000 req/day</span>
                                </div>
                                <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/40 hover:bg-white/10 transition-all duration-300 cursor-default">
                                    <span class="text-gray-300 font-medium">Enterprise</span>
                                    <span class="text-white font-mono font-bold">Ilimitado</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-card p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h3 class="text-2xl font-bold mb-6 text-white">Cómo empezar</h3>
                            <ul class="space-y-4">
                                <li class="flex items-center gap-4 text-gray-300">
                                    <span class="w-8 h-8 rounded-full bg-space-blue/20 flex items-center justify-center text-space-blue font-bold text-sm border border-space-blue/30">1</span>
                                    Crear cuenta y verificar email
                                </li>
                                <li class="flex items-center gap-4 text-gray-300">
                                    <span class="w-8 h-8 rounded-full bg-space-blue/20 flex items-center justify-center text-space-blue font-bold text-sm border border-space-blue/30">2</span>
                                    Generar API Key desde el dashboard
                                </li>
                                <li class="flex items-center gap-4 text-gray-300">
                                    <span class="w-8 h-8 rounded-full bg-space-blue/20 flex items-center justify-center text-space-blue font-bold text-sm border border-space-blue/30">3</span>
                                    Seleccionar plan e integrar
                                </li>
                            </ul>
                            <div class="mt-8">
                                <a href="/login" class="block w-full text-center btn-primary py-3 rounded-lg font-medium cyan-glow">
                                    Crear Cuenta Gratis
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
