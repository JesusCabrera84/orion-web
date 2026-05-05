import { $, component$, useSignal } from '@builder.io/qwik';

type CodeTab = 'curl' | 'javascript' | 'python';

const codeExamples: Record<CodeTab, string> = {
    curl: `curl -X POST https://api.orion.geminislabs.com/api/v1/lookup \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "mcc": 310,
    "mnc": 260,
    "lac": "F303",
    "cid": 5678,
    "include": ["cell"]
  }'`,
    javascript: `const response = await fetch('https://api.orion.geminislabs.com/api/v1/lookup', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.ORION_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    mcc: 310,
    mnc: 260,
    lac: 'F303',
    cid: 5678,
    include: ['cell']
  })
});

const data = await response.json();
console.log(data.matches);`,
    python: `import requests

payload = {
    "mcc": 310,
    "mnc": 260,
    "lac": "F303",
    "cid": 5678,
    "include": ["cell"]
}

response = requests.post(
    "https://api.orion.geminislabs.com/api/v1/lookup",
    headers={
        "x-api-key": "YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json=payload,
    timeout=10,
)

print(response.json())`,
};

export const ApiPreview = component$(() => {
    const activeCodeTab = useSignal<CodeTab>('curl');
    const copied = useSignal(false);

    const copySnippet = $(async () => {
        const snippet = codeExamples[activeCodeTab.value];
        await navigator.clipboard.writeText(snippet);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 1600);
    });

    return (
        <section class="py-20 md:py-24 px-4 relative z-10 bg-deep-space-light/30">
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-12 left-1/3 h-40 w-40 rounded-full bg-space-blue/15 blur-3xl"></div>
                <div class="absolute bottom-16 right-1/4 h-48 w-48 rounded-full bg-luminous-cyan/10 blur-3xl"></div>
            </div>
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12 md:mb-14">
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-space-blue text-glow">
                        Cómo funciona la API de Orion
                    </h2>
                    <p class="text-gray-300 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
                        Orion permite resolver coordenadas geográficas con datos de identidad de celda usando una integración simple y robusta.
                    </p>

                    <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <span class="px-3 py-1.5 rounded-full border border-space-blue/30 bg-space-blue/10 text-space-blue text-xs font-mono">Uptime 99.95%</span>
                        <span class="px-3 py-1.5 rounded-full border border-luminous-cyan/30 bg-luminous-cyan/10 text-luminous-cyan text-xs font-mono">Latencia media 120ms</span>
                        <span class="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-200 text-xs font-mono">Version API v1</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)] gap-8 items-start">
                    <aside class="hidden xl:block sticky top-24">
                        <div class="glass-card p-5 rounded-xl border border-white/10">
                            <p class="text-xs uppercase tracking-[0.18em] text-gray-400 mb-4">Indice</p>
                            <nav class="space-y-2 text-sm">
                                <a href="#endpoint" class="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70">Endpoint</a>
                                <a href="#requests" class="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70">Requests</a>
                                <a href="#responses" class="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70">Responses</a>
                                <a href="#body" class="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70">Campos</a>
                                <a href="#quickstart" class="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70">Quickstart</a>
                                <a href="#practicas" class="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70">Buenas practicas</a>
                            </nav>
                        </div>
                    </aside>

                    <div class="space-y-8">
                        <section id="endpoint" class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <div class="flex flex-wrap items-center gap-3 mb-4">
                                <span class="px-3 py-1 rounded-md bg-space-blue/20 border border-space-blue/40 text-space-blue text-xs font-bold tracking-wide">POST</span>
                                <span class="px-3 py-1 rounded-md bg-white/5 border border-white/15 text-gray-100 text-xs md:text-sm font-mono">/api/v1/lookup</span>
                            </div>
                            <p class="text-gray-300 mb-6 max-w-3xl">
                                Este endpoint resuelve coordenadas geograficas a partir de identidad de celda. Orion busca usando solo los campos presentes en el body.
                            </p>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-1">Base URL</p>
                                    <p class="text-luminous-cyan font-mono break-all text-sm md:text-base">https://api.orion.geminislabs.com/api/v1/</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-1">Headers requeridos</p>
                                    <p class="text-gray-200 font-mono text-sm">x-api-key: &lt;tu-api-key&gt;</p>
                                    <p class="text-gray-200 font-mono text-sm">Content-Type: application/json</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10 md:col-span-2">
                                    <p class="text-sm uppercase tracking-wider text-gray-400 mb-2">Validacion de busqueda</p>
                                    <p class="text-gray-300">
                                        Debes enviar al menos uno de estos campos:
                                        <span class="mx-1 px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">mcc</span>
                                        <span class="mx-1 px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">mnc</span>
                                        <span class="mx-1 px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">lac</span>
                                        <span class="mx-1 px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">cid</span>
                                    </p>
                                    <p class="text-gray-400 mt-2 text-sm">El parametro include acepta solamente el valor &quot;cell&quot;.</p>
                                </div>
                            </div>
                        </section>

                        <section id="requests" class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <div class="flex flex-wrap items-center justify-between gap-4 mb-5">
                                <h3 class="text-xl md:text-2xl font-bold text-white">Requests</h3>
                                <div class="inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
                                    <button
                                        type="button"
                                        onClick$={() => (activeCodeTab.value = 'curl')}
                                        class={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70 ${
                                            activeCodeTab.value === 'curl' ? 'bg-space-blue/25 text-white' : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        cURL
                                    </button>
                                    <button
                                        type="button"
                                        onClick$={() => (activeCodeTab.value = 'javascript')}
                                        class={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70 ${
                                            activeCodeTab.value === 'javascript' ? 'bg-space-blue/25 text-white' : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        JavaScript
                                    </button>
                                    <button
                                        type="button"
                                        onClick$={() => (activeCodeTab.value = 'python')}
                                        class={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70 ${
                                            activeCodeTab.value === 'python' ? 'bg-space-blue/25 text-white' : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        Python
                                    </button>
                                </div>
                            </div>

                            <div class="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
                                <div class="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                    <span class="text-xs font-mono text-gray-400">POST /api/v1/lookup</span>
                                    <button
                                        type="button"
                                        onClick$={copySnippet}
                                        class="text-xs px-3 py-1.5 rounded-md border border-white/15 text-gray-200 hover:text-white hover:border-space-blue/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70"
                                    >
                                        {copied.value ? 'Copiado' : 'Copiar'}
                                    </button>
                                </div>
                                <pre class="font-mono text-sm text-gray-200 overflow-x-auto p-4 md:p-5 scrollbar-hide">
                                    <code>{codeExamples[activeCodeTab.value]}</code>
                                </pre>
                            </div>

                            <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-sm text-gray-400 mb-2">Busqueda parcial</p>
                                    <pre class="font-mono text-xs text-space-blue overflow-x-auto scrollbar-hide"><code>{`{
  "lac": "F303"
}`}</code></pre>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-sm text-gray-400 mb-2">Busqueda completa</p>
                                    <pre class="font-mono text-xs text-space-blue overflow-x-auto scrollbar-hide"><code>{`{
  "mcc": 310,
  "mnc": 260,
  "lac": "F303",
  "cid": 5678,
  "include": ["cell"]
}`}</code></pre>
                                </div>
                            </div>
                        </section>

                        <section id="responses" class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-5">Responses</h3>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div class="rounded-xl border border-white/10 bg-black/25 overflow-hidden">
                                    <div class="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                                        <span class="text-xs font-mono text-luminous-cyan">200 OK</span>
                                        <span class="text-xs font-mono text-gray-400">Sin include</span>
                                    </div>
                                    <pre class="font-mono text-xs text-gray-200 overflow-x-auto p-4 scrollbar-hide"><code>{`{
  "matches": [
    {
      "lat": 40.416775,
      "lon": -3.70379,
      "confidence": 1.0
    }
  ],
  "meta": {
    "request_id": "a1b2c3d4e5f6a7b8"
  }
}`}</code></pre>
                                </div>

                                <div class="rounded-xl border border-white/10 bg-black/25 overflow-hidden">
                                    <div class="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                                        <span class="text-xs font-mono text-luminous-cyan">200 OK</span>
                                        <span class="text-xs font-mono text-gray-400">Con include: ["cell"]</span>
                                    </div>
                                    <pre class="font-mono text-xs text-gray-200 overflow-x-auto p-4 scrollbar-hide"><code>{`{
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
}`}</code></pre>
                                </div>
                            </div>
                        </section>

                        <section id="body" class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-5">Campos del body</h3>
                            <div class="overflow-x-auto rounded-xl border border-white/10">
                                <table class="min-w-full text-sm">
                                    <thead class="bg-white/5">
                                        <tr>
                                            <th class="text-left px-4 py-3 text-gray-300 font-medium">Campo</th>
                                            <th class="text-left px-4 py-3 text-gray-300 font-medium">Tipo</th>
                                            <th class="text-left px-4 py-3 text-gray-300 font-medium">Requerido</th>
                                            <th class="text-left px-4 py-3 text-gray-300 font-medium">Descripcion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-t border-white/10 hover:bg-white/5 transition-colors">
                                            <td class="px-4 py-3 font-mono text-space-blue">mcc</td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-space-blue/15 text-space-blue text-xs font-mono">number</span></td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-white/10 text-gray-200 text-xs">No</span></td>
                                            <td class="px-4 py-3 text-gray-300">Mobile Country Code.</td>
                                        </tr>
                                        <tr class="border-t border-white/10 bg-white/3 hover:bg-white/5 transition-colors">
                                            <td class="px-4 py-3 font-mono text-space-blue">mnc</td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-space-blue/15 text-space-blue text-xs font-mono">number</span></td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-white/10 text-gray-200 text-xs">No</span></td>
                                            <td class="px-4 py-3 text-gray-300">Mobile Network Code.</td>
                                        </tr>
                                        <tr class="border-t border-white/10 hover:bg-white/5 transition-colors">
                                            <td class="px-4 py-3 font-mono text-space-blue">lac</td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-luminous-cyan/15 text-luminous-cyan text-xs font-mono">string</span></td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-white/10 text-gray-200 text-xs">No</span></td>
                                            <td class="px-4 py-3 text-gray-300">Location Area Code en hexadecimal, ejemplo "F303".</td>
                                        </tr>
                                        <tr class="border-t border-white/10 bg-white/3 hover:bg-white/5 transition-colors">
                                            <td class="px-4 py-3 font-mono text-space-blue">cid</td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-space-blue/15 text-space-blue text-xs font-mono">number</span></td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-white/10 text-gray-200 text-xs">No</span></td>
                                            <td class="px-4 py-3 text-gray-300">Cell ID.</td>
                                        </tr>
                                        <tr class="border-t border-white/10 hover:bg-white/5 transition-colors">
                                            <td class="px-4 py-3 font-mono text-space-blue">include</td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-soft-purple/15 text-soft-purple text-xs font-mono">array</span></td>
                                            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-white/10 text-gray-200 text-xs">No</span></td>
                                            <td class="px-4 py-3 text-gray-300">Solo acepta el valor ["cell"].</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="quickstart" class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <h3 class="text-xl md:text-2xl font-bold mb-6 text-white">Como empezar</h3>
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
                                    class="block w-full text-center btn-primary py-3 rounded-lg font-medium cyan-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70"
                                >
                                    Crear cuenta gratis
                                </a>
                                <p class="text-xs text-gray-400 mt-3 text-center">Registro en Geminislabs, toma menos de 1 minuto.</p>
                            </div>

                            <div class="mt-4">
                                <a
                                    href="/api/docs"
                                    class="block w-full text-center py-3 rounded-lg font-medium border border-white/15 text-gray-200 hover:text-white hover:border-space-blue/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70"
                                >
                                    Ver documentacion completa
                                </a>
                            </div>
                        </section>

                        <section id="practicas" class="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-5">Buenas practicas</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-white font-medium mb-2">Envio minimo</p>
                                    <p class="text-sm text-gray-300">Para reducir latencia, envia solo los campos disponibles en tu fuente.</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-white font-medium mb-2">Trazabilidad</p>
                                    <p class="text-sm text-gray-300">Guarda meta.request_id en logs para depurar incidentes con soporte tecnico.</p>
                                </div>
                                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p class="text-white font-medium mb-2">Resiliencia</p>
                                    <p class="text-sm text-gray-300">Aplica timeout y reintentos con backoff para mantener la integracion estable.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
});
