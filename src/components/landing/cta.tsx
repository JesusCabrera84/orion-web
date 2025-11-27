import { component$ } from '@builder.io/qwik';

export const Cta = component$(() => {
    return (
        <section class="py-24 px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                {/* Background Glow */}
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-space-blue/20 rounded-full filter blur-[100px] -z-10"></div>

                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                    ¿Listo para comenzar?
                </h2>
                <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Empieza gratis y prueba Orion desde el panel de control.
                </p>
                <div class="flex justify-center">
                    <a href="/login" class="btn-primary px-10 py-4 rounded-full text-xl font-bold cyan-glow hover:scale-105 transition-transform">
                        Crear Cuenta Gratis
                    </a>
                </div>
            </div>
        </section>
    );
});
