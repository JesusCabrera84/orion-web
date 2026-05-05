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
                        Integra el endpoint de lookup para resolver coordenadas geográficas a partir de identidad de celda.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Code Blocks */}
                    <div class="space-y-8">
                        <div class="glass-panel p-6 rounded-xl border border-white/5 overflow-hidden relative group hover:border-space-blue/30 transition-colors duration-500">
                            <div class="absolute inset-0 bg-space-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div class="flex items-center justify-between mb-4 border-b border-white/5 pb-4 relative z-10">
                                <span class="text-sm font-mono text-space-blue font-bold tracking-wide">Request Example</span>
                                <span class="text-xs text-gray-500 font-mono">POST /api/v1/lookup</span>
                            </div>
                            <pre class="font-mono text-sm text-gray-300 overflow-x-auto relative z-10 scrollbar-hide">
                                <code>{`curl -X POST https://api.orion.geminislabs.com/api/v1/lookup \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "mcc": 310,
    "mnc": 260,
    "lac": "F303",
    "cid": 5678,
    "include": ["cell"]
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
  "matches": [
    {
      "lat": 41.18549,
      "lon": -80.361315,
      "confidence": 1.0,
      "cell": {
        "mcc": 310,
        "mnc": 260,
        "lac": "F303",
        "cellid": "12345"
      }
    }
  ],
  "meta": {
    "request_id": "a1b2c3d4e5f6a7b8"
  }
}`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Right Column: API Guide */}
                    <div class="space-y-8">
                        <div class="glass-card p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h3 class="text-2xl font-bold mb-6 text-white">Especificación del endpoint</h3>
                            <div class="space-y-4">
                                <div class="p-4 rounded-lg bg-white/5 border border-white/5">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-1">Base URL</p>
                                    <p class="text-luminous-cyan font-mono break-all">https://api.orion.geminislabs.com/api/v1/</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/5">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-2">Headers requeridos</p>
                                    <p class="text-gray-200 font-mono text-sm">x-api-key: &lt;tu-api-key&gt;</p>
                                    <p class="text-gray-200 font-mono text-sm">Content-Type: application/json</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/5">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-2">Regla de búsqueda</p>
                                    <p class="text-gray-300">Debes enviar al menos uno de estos campos: <span class="font-mono text-white">mcc</span>, <span class="font-mono text-white">mnc</span>, <span class="font-mono text-white">lac</span> o <span class="font-mono text-white">cid</span>.</p>
                                    <p class="text-gray-300 mt-2">La consulta se resuelve solo con los campos presentes en el body.</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/5">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-2">Parámetro include</p>
                                    <p class="text-gray-300">Valor aceptado: <span class="font-mono text-white">&quot;cell&quot;</span>.</p>
                                    <p class="text-gray-300 mt-2">Cuando se envía <span class="font-mono text-white">include: [&quot;cell&quot;]</span>, cada resultado incluye la estructura de celda asociada.</p>
                                </div>
                            </div>
                        </div>

                        <div class="glass-card p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h3 class="text-2xl font-bold mb-6 text-white">Campos del body</h3>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-4 text-gray-300">
                                    <span class="w-24 text-space-blue font-mono text-sm">mcc</span>
                                    <span class="flex-1">number, opcional. Mobile Country Code.</span>
                                </li>
                                <li class="flex items-start gap-4 text-gray-300">
                                    <span class="w-24 text-space-blue font-mono text-sm">mnc</span>
                                    <span class="flex-1">number, opcional. Mobile Network Code.</span>
                                </li>
                                <li class="flex items-start gap-4 text-gray-300">
                                    <span class="w-24 text-space-blue font-mono text-sm">lac</span>
                                    <span class="flex-1">string, opcional. Location Area Code en hexadecimal (ej. <span class="font-mono text-white">&quot;F303&quot;</span>).</span>
                                </li>
                                <li class="flex items-start gap-4 text-gray-300">
                                    <span class="w-24 text-space-blue font-mono text-sm">cid</span>
                                    <span class="flex-1">number, opcional. Cell ID.</span>
                                </li>
                                <li class="flex items-start gap-4 text-gray-300">
                                    <span class="w-24 text-space-blue font-mono text-sm">include</span>
                                    <span class="flex-1">array, opcional. Acepta únicamente <span class="font-mono text-white">[&quot;cell&quot;]</span>.</span>
                                </li>
                            </ul>

                            <div class="mt-8 p-4 rounded-lg bg-space-blue/10 border border-space-blue/20">
                                <p class="text-sm text-gray-200">
                                    Ejemplo de búsqueda parcial mínima:
                                </p>
                                <pre class="mt-2 font-mono text-sm text-space-blue overflow-x-auto scrollbar-hide">
                                    <code>{`{
  "lac": "F303"
}`}</code>
                                </pre>
                            </div>
                        </div>

                        <div class="glass-card p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h3 class="text-2xl font-bold mb-6 text-white">Cómo empezar</h3>
                            <ul class="space-y-4">
                                <li class="flex items-center gap-4 text-gray-300">
                                    <span class="w-8 h-8 rounded-full bg-space-blue/20 flex items-center justify-center text-space-blue font-bold text-sm border border-space-blue/30">1</span>
                                    Crear cuenta y verificar mail
                                </li>
                                <li class="flex items-center gap-4 text-gray-300">
                                    <span class="w-8 h-8 rounded-full bg-space-blue/20 flex items-center justify-center text-space-blue font-bold text-sm border border-space-blue/30">2</span>
                                    Generar API Key desde el dashboard de Geminislabs
                                </li>
                                <li class="flex items-center gap-4 text-gray-300">
                                    <span class="w-8 h-8 rounded-full bg-space-blue/20 flex items-center justify-center text-space-blue font-bold text-sm border border-space-blue/30">3</span>
                                    Comienza a usar
                                </li>
                            </ul>
                            <div class="mt-8">
                                <a
                                    href="https://www.geminislabs.com/auth?mode=register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="block w-full text-center btn-primary py-3 rounded-lg font-medium cyan-glow"
                                >
                                    Crear cuenta gratis
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
