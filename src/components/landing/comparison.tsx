import { component$ } from '@builder.io/qwik';

type Verdict = 'win' | 'even' | 'loss';

type Row = {
    criterio: string;
    orion: string;
    verdict: Verdict;
    opencellid: string;
    unwired: string;
    combain: string;
    google: string;
};

const rows: Row[] = [
    {
        criterio: 'Naturaleza del dato',
        orion: 'Punto de carretera observado: fix GPS de un vehículo con su celda servidora',
        verdict: 'win',
        opencellid: 'Centroide calculado a partir de mediciones colaborativas',
        unwired: 'Centroide sobre la misma base más fuentes propias',
        combain: 'Centroide y polígonos de celda',
        google: 'Estimación propietaria, no documentada',
    },
    {
        criterio: 'Celdas en México',
        orion: '372,641',
        verdict: 'loss',
        opencellid: '1,027,519 histórico total, de las cuales 289,659 son LTE y el resto 2G/3G',
        unwired: 'No publicado por país',
        combain: 'No publicado por país',
        google: 'No publicado',
    },
    {
        criterio: 'Alcance geográfico',
        orion: 'México, EE. UU. y Centroamérica',
        verdict: 'loss',
        opencellid: 'Global',
        unwired: 'Global',
        combain: '195 países, más de 190M cell IDs',
        google: 'Global',
    },
    {
        criterio: 'Radio de incertidumbre en la respuesta',
        orion: 'No',
        verdict: 'loss',
        opencellid: 'Sí, campos range y samples',
        unwired: 'Sí, campo accuracy',
        combain: 'Sí, incluye polígonos de celda',
        google: 'Sí, campo accuracy',
    },
    {
        criterio: 'Consulta con CID sin MCC ni MNC',
        orion: 'Sí, 88,670 registros indexados así',
        verdict: 'win',
        opencellid: 'No',
        unwired: 'No, exige MCC y MNC. El LAC sí es opcional',
        combain: 'No documentado',
        google: 'No',
    },
    {
        criterio: 'Celdas dadas de baja',
        orion: 'Se conservan indefinidamente y se pueden consultar',
        verdict: 'win',
        opencellid: 'La descarga incluye solo los últimos 18 meses',
        unwired: 'No documentado',
        combain: 'No documentado',
        google: 'No consultable',
    },
    {
        criterio: 'Soporte 5G NR',
        orion: 'Por publicar',
        verdict: 'loss',
        opencellid: '149 celdas NR en México',
        unwired: 'Sí',
        combain: 'Sí, más de 2M celdas NR globales',
        google: 'Sí',
    },
    {
        criterio: 'Respaldo WiFi o IP',
        orion: 'No',
        verdict: 'loss',
        opencellid: 'No aplica',
        unwired: 'Sí',
        combain: 'Sí, más LoRaWAN y Bluetooth',
        google: 'Sí',
    },
    {
        criterio: 'Licencia del dato',
        orion: 'Comercial, sin obligación de compartir el trabajo derivado',
        verdict: 'win',
        opencellid: 'CC BY-SA 4.0, con atribución y ShareAlike',
        unwired: 'Comercial',
        combain: 'Comercial',
        google: 'Comercial',
    },
    {
        criterio: 'Derecho a almacenar el resultado',
        orion: 'Caché de hasta 48 horas',
        verdict: 'even',
        opencellid: 'Sin límite; el archivo se descarga',
        unwired: 'Según contrato',
        combain: 'Caché máximo 24 horas',
        google: 'Caché máximo 30 días naturales',
    },
    {
        criterio: 'Uso comercial de la vía gratuita',
        orion: 'No. El plan gratuito es para evaluación y desarrollo',
        verdict: 'even',
        opencellid: 'Los servidores comunitarios no se permiten para uso comercial sin contribuir datos',
        unwired: 'El plan Developer excluye uso comercial',
        combain: 'Prueba de 100 créditos',
        google: '10,000 eventos gratis al mes',
    },
];

const verdictStyle: Record<Verdict, string> = {
    win: 'bg-luminous-cyan/10 text-luminous-cyan border-luminous-cyan/25',
    even: 'bg-white/5 text-gray-200 border-white/15',
    loss: 'bg-amber-500/10 text-amber-200/90 border-amber-500/25',
};

const verdictLabel: Record<Verdict, string> = {
    win: 'Ganamos',
    even: 'Empate',
    loss: 'Perdemos',
};

export const Comparison = component$(() => {
    return (
        <section id="comparativa" class="py-24 px-4 relative z-10">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-10">
                    <p class="text-space-blue uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                        Comparativa
                    </p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-glow">
                        Dónde ganamos y dónde no
                    </h2>
                    <p class="text-gray-300 max-w-3xl mx-auto">
                        Cada renglón lo puedes verificar por tu cuenta en la documentación pública de cada
                        proveedor. Dejamos los renglones donde perdemos: una tabla donde alguien gana todo
                        no la cree nadie.
                    </p>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
                    {(['win', 'even', 'loss'] as Verdict[]).map((v) => (
                        <span key={v} class={`px-3 py-1.5 rounded-full border text-xs font-mono ${verdictStyle[v]}`}>
                            {verdictLabel[v]}
                        </span>
                    ))}
                </div>

                <div class="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_35px_rgba(75,243,255,0.08)]">
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[64rem] text-left border-collapse">
                            <thead>
                                <tr class="bg-white/5 border-b border-white/10 text-sm">
                                    <th class="px-4 md:px-5 py-4 text-gray-300 font-semibold align-bottom w-52">Criterio</th>
                                    <th class="px-4 md:px-5 py-4 text-luminous-cyan font-semibold align-bottom bg-luminous-cyan/10 border-x border-luminous-cyan/20 w-64">
                                        Orion
                                    </th>
                                    <th class="px-4 md:px-5 py-4 text-gray-400 font-semibold align-bottom">OpenCellID</th>
                                    <th class="px-4 md:px-5 py-4 text-gray-400 font-semibold align-bottom">Unwired Labs</th>
                                    <th class="px-4 md:px-5 py-4 text-gray-400 font-semibold align-bottom">Combain</th>
                                    <th class="px-4 md:px-5 py-4 text-gray-400 font-semibold align-bottom">Google</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r) => (
                                    <tr key={r.criterio} class="border-b border-white/10 last:border-b-0 text-sm align-top">
                                        <th scope="row" class="px-4 md:px-5 py-4 text-gray-200 font-medium">
                                            {r.criterio}
                                        </th>
                                        <td class="px-4 md:px-5 py-4 bg-luminous-cyan/5 border-x border-luminous-cyan/20 text-white">
                                            <span class={`inline-block mb-2 px-2 py-0.5 rounded border text-[0.65rem] font-mono ${verdictStyle[r.verdict]}`}>
                                                {verdictLabel[r.verdict]}
                                            </span>
                                            <span class="block leading-relaxed">{r.orion}</span>
                                        </td>
                                        <td class="px-4 md:px-5 py-4 text-gray-400 leading-relaxed">{r.opencellid}</td>
                                        <td class="px-4 md:px-5 py-4 text-gray-400 leading-relaxed">{r.unwired}</td>
                                        <td class="px-4 md:px-5 py-4 text-gray-400 leading-relaxed">{r.combain}</td>
                                        <td class="px-4 md:px-5 py-4 text-gray-400 leading-relaxed">{r.google}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p class="text-xs text-gray-500 mt-5 max-w-4xl leading-relaxed">
                    Cifras de competidores tomadas de sus páginas públicas de precios, documentación y
                    estadísticas, consultadas en agosto de 2026. «No publicado» significa que el dato no está
                    disponible públicamente, no que sea desfavorable. Los conteos de OpenCellID son celdas
                    lógicas acumuladas en la historia del proyecto y no equivalen a sitios físicos ni a celdas
                    activas hoy. No incluimos renglones de latencia, disponibilidad ni precisión porque
                    todavía no tenemos manera honesta de sostenerlos.
                </p>
            </div>
        </section>
    );
});
