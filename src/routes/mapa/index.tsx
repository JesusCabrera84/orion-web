import { component$, useSignal, $ } from '@builder.io/qwik';
import { MapView } from '~/components/map/map-view';
import { apiFetch } from '~/lib/api/client';

export default component$(() => {
    const mcc = useSignal('724');
    const mnc = useSignal('5');
    const lac = useSignal('');
    const cellId = useSignal('');

    const result = useSignal<{ lat: number; lng: number; accuracy: number } | null>(null);
    const error = useSignal('');
    const loading = useSignal(false);

    const handleLocate = $(async () => {
        if (!mcc.value || !mnc.value || !lac.value || !cellId.value) {
            error.value = 'Todos los campos son requeridos';
            return;
        }

        loading.value = true;
        error.value = '';
        result.value = null;

        try {
            const res = await apiFetch('/v1/locate', {
                method: 'POST',
                body: JSON.stringify({
                    mcc: parseInt(mcc.value),
                    mnc: parseInt(mnc.value),
                    lac: parseInt(lac.value),
                    cell_id: parseInt(cellId.value)
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.detail || 'No se pudo localizar');
            }

            result.value = {
                lat: data.lat,
                lng: data.lng,
                accuracy: data.accuracy
            };
        } catch (e) {
            error.value = (e as Error).message;
        } finally {
            loading.value = false;
        }
    });

    return (
        <div class="flex h-screen w-full bg-deep-space-dark overflow-hidden relative">
            {/* Sidebar */}
            <div class="w-80 h-full glass-panel flex flex-col p-6 z-20 relative shadow-2xl">
                <div class="mb-8 flex items-center gap-3">
                    <img src="/images/logo.png" class="w-10 h-10" />
                    <h1 class="text-xl font-bold text-white">Orion Explorer</h1>
                </div>

                <div class="space-y-4 flex-1">
                    <div>
                        <label class="text-xs text-gray-400 uppercase tracking-wider font-semibold">MCC</label>
                        <input type="number" bind:value={mcc} class="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-space-blue outline-none transition-colors" placeholder="724" />
                    </div>
                    <div>
                        <label class="text-xs text-gray-400 uppercase tracking-wider font-semibold">MNC</label>
                        <input type="number" bind:value={mnc} class="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-space-blue outline-none transition-colors" placeholder="05" />
                    </div>
                    <div>
                        <label class="text-xs text-gray-400 uppercase tracking-wider font-semibold">LAC / TAC</label>
                        <input type="number" bind:value={lac} class="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-space-blue outline-none transition-colors" placeholder="12345" />
                    </div>
                    <div>
                        <label class="text-xs text-gray-400 uppercase tracking-wider font-semibold">Cell ID</label>
                        <input type="number" bind:value={cellId} class="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-space-blue outline-none transition-colors" placeholder="67890" />
                    </div>

                    <button
                        onClick$={handleLocate}
                        disabled={loading.value}
                        class="w-full btn-primary py-3 rounded font-bold cyan-glow mt-6 flex justify-center items-center"
                    >
                        {loading.value ? (
                            <svg class="animate-spin h-5 w-5 text-luminous-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Localizar'}
                    </button>

                    {error.value && (
                        <div class="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm animate-pulse">
                            {error.value}
                        </div>
                    )}
                </div>

                <div class="mt-auto pt-6 border-t border-white/5 text-xs text-gray-500">
                    <p>Orion Locator v1.0.0</p>
                    <a href="/" class="text-space-blue hover:underline mt-2 block">Volver al inicio</a>
                </div>
            </div>

            {/* Map Area */}
            <div class="flex-1 relative">
                <MapView
                    lat={result.value?.lat || -22.89}
                    lng={result.value?.lng || -43.12}
                    accuracy={result.value?.accuracy}
                />

                {/* Floating Result Card */}
                {result.value && (
                    <div class="absolute top-6 right-6 glass-card p-6 rounded-xl w-64 z-10 animate-float border border-luminous-cyan/30">
                        <h3 class="text-luminous-cyan font-bold mb-2 flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-luminous-cyan animate-pulse"></span>
                            Ubicación Encontrada
                        </h3>
                        <div class="space-y-2 text-sm text-gray-300">
                            <div class="flex justify-between border-b border-white/5 pb-1">
                                <span>Latitud:</span>
                                <span class="font-mono text-white">{result.value.lat.toFixed(5)}</span>
                            </div>
                            <div class="flex justify-between border-b border-white/5 pb-1">
                                <span>Longitud:</span>
                                <span class="font-mono text-white">{result.value.lng.toFixed(5)}</span>
                            </div>
                            <div class="flex justify-between pt-1">
                                <span>Precisión:</span>
                                <span class="font-mono text-white">{result.value.accuracy}m</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});
