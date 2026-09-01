import { component$ } from '@builder.io/qwik';

const stats = [
    { value: '697,824', label: 'Celdas únicas en la base', accent: 'text-white' },
    { value: '372,641', label: 'Celdas en México', accent: 'text-luminous-cyan' },
    { value: '324,049', label: 'Celdas en Estados Unidos', accent: 'text-space-blue' },
    { value: '≈1.16M km²', label: 'Territorio mexicano con al menos una observación', accent: 'text-white' },
];

const operators = [
    { red: 'Telcel', mccmnc: '334-020', registros: '392,860' },
    { red: 'T-Mobile US', mccmnc: '310-260', registros: '206,575' },
    { red: 'Verizon', mccmnc: '311-480', registros: '63,718' },
    { red: 'AT&T US', mccmnc: '310-410', registros: '53,081' },
    { red: 'AT&T México', mccmnc: '334-050 / 140 / 090', registros: '≈36,000' },
];

export const Coverage = component$(() => {
    return (
        <section id="cobertura" class="py-24 px-4 relative z-10 bg-deep-space-light/30">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <p class="text-space-blue uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                        Cobertura
                    </p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        Qué hay dentro, medido
                    </h2>
                    <p class="text-gray-300 max-w-3xl mx-auto">
                        Estas cifras salen de contar la base, no de estimarla. Publicamos también lo que nos
                        falta, para que puedas decidir antes de integrar.
                    </p>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {stats.map((s) => (
                        <div key={s.label} class="glass-card rounded-2xl border border-white/10 p-6 md:p-7">
                            <p class={`audiowide-regular text-2xl md:text-3xl mb-2 ${s.accent}`}>{s.value}</p>
                            <p class="text-xs md:text-sm text-gray-400 leading-relaxed">{s.label}</p>
                        </div>
                    ))}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="glass-card rounded-2xl border border-white/10 p-7 md:p-8">
                        <h3 class="text-xl font-bold text-white mb-2">La forma importa más que el total</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">
                            Solo el <span class="text-luminous-cyan font-mono">9.1%</span> de las observaciones
                            está en los diez cuadrantes más densos, y el{' '}
                            <span class="text-luminous-cyan font-mono">29.8%</span> en los cien más densos. Es
                            una huella repartida a lo largo de corredores carreteros, no apilada en tres
                            ciudades. Nuestros datos vienen de camiones rodando, no de teléfonos caminando.
                        </p>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm">
                                <thead>
                                    <tr class="border-b border-white/10 text-xs uppercase tracking-wider text-gray-500">
                                        <th class="py-2 pr-4 font-medium">Red</th>
                                        <th class="py-2 pr-4 font-medium">MCC-MNC</th>
                                        <th class="py-2 font-medium text-right">Registros</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {operators.map((o) => (
                                        <tr key={o.red} class="border-b border-white/5 last:border-b-0">
                                            <td class="py-2.5 pr-4 text-gray-200">{o.red}</td>
                                            <td class="py-2.5 pr-4 text-gray-500 font-mono text-xs">{o.mccmnc}</td>
                                            <td class="py-2.5 text-right text-gray-300 font-mono">{o.registros}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl border border-amber-500/20 p-7 md:p-8">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="text-xs font-mono uppercase tracking-[0.14em] text-amber-300/90">
                                Lo que todavía no tenemos
                            </span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Dicho antes de que lo descubras</h3>
                        <ul class="space-y-3 text-sm text-gray-400 leading-relaxed">
                            <li>
                                <span class="text-gray-200">Sin radio de incertidumbre.</span> La respuesta es un
                                punto observado, no un área con margen de error.
                            </li>
                            <li>
                                <span class="text-gray-200">Sin dirección de circulación.</span> Todavía no
                                inferimos trayectoria a partir de secuencias de celdas.
                            </li>
                            <li>
                                <span class="text-gray-200">Sin métricas de servicio publicadas.</span> No
                                prometemos disponibilidad ni latencia hasta tenerlas medidas.
                            </li>
                            <li>
                                <span class="text-gray-200">Un tercio de la cobertura de OpenCellID en México.</span>{' '}
                                Por eso el plan gratuito existe: para que midas tu tasa de acierto con tus propias
                                celdas antes de pagar.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
});
