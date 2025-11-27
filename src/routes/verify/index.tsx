import { component$, useSignal, $ } from '@builder.io/qwik';
import { API_BASE_URL } from '~/lib/config';

export default component$(() => {
    const email = useSignal('');
    const message = useSignal('');
    const error = useSignal('');

    const handleResend = $(async () => {
        if (!email.value) {
            error.value = 'Ingresa tu email';
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/v1/auth/resend-verification`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.value })
            });

            if (!res.ok) throw new Error('Error al reenviar');
            message.value = 'Correo de verificación reenviado.';
            error.value = '';
        } catch (e) {
            error.value = (e as Error).message;
            message.value = '';
        }
    });

    return (
        <div class="min-h-screen flex items-center justify-center bg-deep-space-dark relative overflow-hidden">
            {/* Background Glow */}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-space-blue/10 rounded-full filter blur-[100px] -z-10"></div>

            <div class="glass-panel p-8 rounded-xl max-w-md w-full text-center border border-white/10 shadow-2xl">
                <div class="mb-6">
                    <img src="/images/logo.png" class="w-16 h-16 mx-auto" />
                </div>
                <h1 class="text-2xl font-bold text-white mb-4">Verifica tu cuenta</h1>
                <p class="text-gray-400 mb-6 text-sm">Revisa tu correo electrónico para activar tu cuenta. Si no lo recibiste, puedes solicitar otro.</p>

                <div class="space-y-4">
                    <input
                        type="email"
                        bind:value={email}
                        placeholder="Tu email registrado"
                        class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-space-blue outline-none transition-colors"
                    />

                    <button
                        onClick$={handleResend}
                        class="btn-primary w-full py-3 rounded-lg font-bold cyan-glow"
                    >
                        Reenviar correo
                    </button>
                </div>

                {message.value && <p class="text-luminous-cyan mt-4 text-sm bg-luminous-cyan/10 p-2 rounded border border-luminous-cyan/20">{message.value}</p>}
                {error.value && <p class="text-red-400 mt-4 text-sm bg-red-500/10 p-2 rounded border border-red-500/20">{error.value}</p>}

                <div class="mt-6 pt-6 border-t border-white/5">
                    <a href="/login" class="text-space-blue hover:text-white text-sm transition-colors">Volver a iniciar sesión</a>
                </div>
            </div>
        </div>
    );
});
