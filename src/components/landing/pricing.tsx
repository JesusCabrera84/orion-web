import { component$ } from '@builder.io/qwik';

type Plan = {
    name: string;
    tagline: string;
    price: string;
    period: string;
    hits: string;
    rpm: string;
    burst: string;
    batch: string;
    bareCid: boolean;
    featured?: boolean;
    cta: string;
    href: string;
};

const plans: Plan[] = [
    {
        name: 'Free',
        tagline: 'Evaluación y desarrollo',
        price: '$0',
        period: '',
        hits: '300',
        rpm: '10',
        burst: '10',
        batch: '—',
        bareCid: false,
        cta: 'Empezar',
        href: 'https://www.geminislabs.com/auth?mode=register',
    },
    {
        name: 'Starter',
        tagline: 'Producción, volumen bajo',
        price: '$200',
        period: 'MXN / mes',
        hits: '1,000',
        rpm: '120',
        burst: '20',
        batch: '—',
        bareCid: false,
        cta: 'Contratar',
        href: 'https://www.geminislabs.com/auth?mode=register',
    },
    {
        name: 'Professional',
        tagline: 'Operación con volumen',
        price: '$4,000',
        period: 'MXN / mes',
        hits: '25,000',
        rpm: '600',
        burst: '100',
        batch: '50 celdas',
        bareCid: false,
        featured: true,
        cta: 'Contratar',
        href: 'https://www.geminislabs.com/auth?mode=register',
    },
    {
        name: 'Enterprise',
        tagline: 'Capacidades exclusivas',
        price: 'A cotizar',
        period: '',
        hits: 'Negociable',
        rpm: '1,200+',
        burst: '200+',
        batch: 'Negociable',
        bareCid: true,
        cta: 'Hablemos',
        href: 'mailto:contacto@geminislabs.com?subject=Orion%20Enterprise',
    },
];

export const Pricing = component$(() => {
    return (
        <section id="precios" class="py-24 px-4 relative z-10">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <p class="text-space-blue uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                        Precios
                    </p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-glow">
                        Solo pagas cuando tenemos el dato
                    </h2>
                    <p class="text-gray-300 max-w-3xl mx-auto">
                        Cobramos por <span class="text-white font-medium">acierto</span>, no por consulta. Si
                        no encontramos la celda, no se descuenta de tu bolsa.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {plans.map((p) => (
                        <div
                            key={p.name}
                            class={`glass-card rounded-2xl p-7 flex flex-col border transition-all duration-500 ${
                                p.featured
                                    ? 'border-luminous-cyan/40 shadow-[0_0_35px_rgba(75,243,255,0.12)]'
                                    : 'border-white/10 hover:border-white/25'
                            }`}
                        >
                            <div class="flex items-center justify-between gap-2 mb-1">
                                <h3 class="text-xl font-bold text-white">{p.name}</h3>
                                {p.featured && (
                                    <span class="text-[0.65rem] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-luminous-cyan/15 text-luminous-cyan">
                                        Recomendado
                                    </span>
                                )}
                            </div>
                            <p class="text-xs text-gray-500 mb-5">{p.tagline}</p>

                            <div class="mb-6">
                                <span class="audiowide-regular text-3xl text-white">{p.price}</span>
                                {p.period && <span class="block text-xs text-gray-500 mt-1 font-mono">{p.period}</span>}
                            </div>

                            <dl class="space-y-2.5 text-sm mb-7 flex-1">
                                <div class="flex justify-between gap-3">
                                    <dt class="text-gray-500">Aciertos / mes</dt>
                                    <dd class="text-gray-100 font-mono">{p.hits}</dd>
                                </div>
                                <div class="flex justify-between gap-3">
                                    <dt class="text-gray-500">Consultas / min</dt>
                                    <dd class="text-gray-300 font-mono">{p.rpm}</dd>
                                </div>
                                <div class="flex justify-between gap-3">
                                    <dt class="text-gray-500">Ráfaga</dt>
                                    <dd class="text-gray-300 font-mono">{p.burst}</dd>
                                </div>
                                <div class="flex justify-between gap-3">
                                    <dt class="text-gray-500">Batch</dt>
                                    <dd class="text-gray-300 font-mono">{p.batch}</dd>
                                </div>
                                <div class="flex justify-between gap-3">
                                    <dt class="text-gray-500">CID desnudo</dt>
                                    <dd class={p.bareCid ? 'text-luminous-cyan font-mono' : 'text-gray-600 font-mono'}>
                                        {p.bareCid ? 'Sí' : '—'}
                                    </dd>
                                </div>
                            </dl>

                            <a
                                href={p.href}
                                class={`text-center px-5 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-space-blue/70 ${
                                    p.featured
                                        ? 'btn-primary cyan-glow'
                                        : 'border border-white/20 text-gray-200 hover:text-white hover:border-luminous-cyan/60'
                                }`}
                            >
                                {p.cta}
                            </a>
                        </div>
                    ))}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="glass-card rounded-2xl border border-white/10 p-7">
                        <h3 class="text-lg font-bold text-white mb-3">Qué cuenta como acierto</h3>
                        <p class="text-sm text-gray-400 leading-relaxed mb-4">
                            Una consulta que responde <span class="font-mono text-gray-200">200</span>, que lleva
                            identidad de celda completa —MCC, MNC, LAC y CID— y que devuelve al menos una
                            coincidencia. Una consulta equivale a un acierto como máximo, sin importar cuántos
                            resultados regrese.
                        </p>
                        <p class="text-sm text-gray-500 leading-relaxed">
                            No cuentan las respuestas vacías, los errores —incluidos los nuestros—, los rechazos
                            por límite de tasa ni las consultas demasiado amplias. Puedes verificar el conteo por
                            tu cuenta desde tu propio lado.
                        </p>
                    </div>

                    <div class="glass-card rounded-2xl border border-white/10 p-7">
                        <h3 class="text-lg font-bold text-white mb-3">Condiciones de uso del dato</h3>
                        <ul class="space-y-2.5 text-sm text-gray-400 leading-relaxed">
                            <li>Caché de hasta 48 horas, para cubrir operaciones que se extienden a dos días.</li>
                            <li>Sin redistribución, reventa ni construcción de producto derivado.</li>
                            <li>Sin extracción sistemática de la base.</li>
                            <li>Uso limitado a localizar unidades que tú administras.</li>
                            <li>El plan gratuito es para evaluación y desarrollo, no para producción.</li>
                        </ul>
                    </div>
                </div>

                <p class="text-xs text-gray-500 mt-6 text-center">
                    Precios en pesos mexicanos, sin IVA. Excedentes: $0.35 por acierto en Starter y $0.25 en
                    Professional.
                </p>
            </div>
        </section>
    );
});
