import { component$ } from '@builder.io/qwik';

type Accent = 'blue' | 'cyan' | 'purple';

type Feature = {
    label: string;
    badge: string;
    accent: Accent;
    title: string;
    body: string;
    tags: string[];
    icon: 'road' | 'corridor' | 'partial';
};

const features: Feature[] = [
    {
        label: 'Naturaleza del dato',
        badge: 'Observado',
        accent: 'blue',
        title: 'Puntos de carretera, no centroides',
        body: 'Cada coordenada es un fix GPS real de un vehículo junto con la celda a la que estaba enganchado. No es la posición estimada de una antena: es un lugar donde efectivamente pasó una unidad, sobre un camino.',
        tags: ['Fix GPS + celda servidora', 'Flota propia en operación'],
        icon: 'road',
    },
    {
        label: 'Cobertura',
        badge: '372,641 celdas MX',
        accent: 'cyan',
        title: 'Medida sobre corredores, no en ciudades',
        body: 'Solo el 9.1% de las observaciones está en los diez cuadrantes más densos. La cobertura está repartida a lo largo de carreteras, que es justo donde las bases colectadas con teléfonos son más débiles.',
        tags: ['México y Estados Unidos', '≈1.16M km² con observación'],
        icon: 'corridor',
    },
    {
        label: 'Capacidad exclusiva',
        badge: 'Enterprise',
        accent: 'purple',
        title: 'Consulta con CID desnudo',
        body: 'Hay equipos que reportan un identificador de celda sin MCC ni MNC. OpenCellID, Combain y Google descartan esa consulta, y Unwired también, porque exige esos campos. Nosotros tenemos 88,670 registros indexados así.',
        tags: ['Sin MCC ni MNC', 'Respuesta marcada como ambigua'],
        icon: 'partial',
    },
];

const accents: Record<Accent, Record<string, string>> = {
    blue: {
        text: 'text-space-blue',
        border: 'hover:border-space-blue/50',
        shadow: 'hover:shadow-[0_0_30px_rgba(76,158,255,0.15)]',
        chip: 'bg-space-blue/15',
        ring: 'bg-space-blue/10 border-space-blue/20 group-hover:border-space-blue/50',
        title: 'group-hover:text-space-blue',
    },
    cyan: {
        text: 'text-luminous-cyan',
        border: 'hover:border-luminous-cyan/50',
        shadow: 'hover:shadow-[0_0_30px_rgba(75,243,255,0.15)]',
        chip: 'bg-luminous-cyan/15',
        ring: 'bg-luminous-cyan/10 border-luminous-cyan/20 group-hover:border-luminous-cyan/50',
        title: 'group-hover:text-luminous-cyan',
    },
    purple: {
        text: 'text-soft-purple',
        border: 'hover:border-soft-purple/50',
        shadow: 'hover:shadow-[0_0_30px_rgba(233,213,255,0.15)]',
        chip: 'bg-soft-purple/15',
        ring: 'bg-soft-purple/10 border-soft-purple/20 group-hover:border-soft-purple/50',
        title: 'group-hover:text-soft-purple',
    },
};

const paths: Record<string, string> = {
    road: 'M4 20c4-1 5-5 8-8s5-3 8-8',
    corridor: 'M2 18h6l4-12h4m2 0h4M8 18h3',
    partial: 'M8 7H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-5-5h2',
};

export const Features = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <p class="text-space-blue uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                        Qué nos hace distintos
                    </p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tres cosas que sí podemos sostener
                    </h2>
                    <p class="text-gray-300 max-w-3xl mx-auto">
                        Todas las cifras de esta página salen de medir nuestra propia base. No publicamos
                        números de disponibilidad ni de precisión porque todavía no los tenemos medidos.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            class={`glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/10 ${accents[f.accent].border} ${accents[f.accent].shadow}`}
                        >
                            <div class="flex items-center justify-between gap-3 mb-5">
                                <span class="text-xs font-mono text-gray-400">{f.label}</span>
                                <span class={`text-xs px-2.5 py-1 rounded-full font-mono whitespace-nowrap ${accents[f.accent].chip} ${accents[f.accent].text}`}>
                                    {f.badge}
                                </span>
                            </div>

                            <div class={`w-14 h-14 rounded-full flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 ${accents[f.accent].ring}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class={`w-7 h-7 ${accents[f.accent].text}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={paths[f.icon]} />
                                </svg>
                            </div>

                            <h3 class={`text-xl font-bold mb-3 text-white transition-colors duration-300 ${accents[f.accent].title}`}>
                                {f.title}
                            </h3>
                            <p class="text-gray-400 text-sm leading-relaxed font-light">{f.body}</p>

                            <div class="mt-5 flex flex-wrap gap-2">
                                {f.tags.map((t) => (
                                    <span key={t} class="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});
