import { component$, useSignal, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { API_BASE_URL } from '~/lib/config';

export default component$(() => {
    const email = useSignal('');
    const password = useSignal('');
    const error = useSignal('');
    const loading = useSignal(false);
    const nav = useNavigate();

    const handleLogin = $(async () => {
        if (!email.value || !password.value) {
            error.value = 'Por favor completa todos los campos';
            return;
        }

        loading.value = true;
        error.value = '';

        try {
            // Adjust payload based on actual API requirements. Assuming JSON with email/password.
            const res = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.value, password: password.value })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.detail || 'Error al iniciar sesión');
            }

            sessionStorage.setItem('access_token', data.access_token);
            sessionStorage.setItem('refresh_token', data.refresh_token);

            // Check if verification is needed (if API returns user status)
            // For now redirect to map
            await nav('/mapa');
        } catch (e) {
            console.error(e);
            error.value = (e as Error).message;
        } finally {
            loading.value = false;
        }
    });

    return (
        <div class="min-h-screen flex items-center justify-center bg-deep-space-dark relative overflow-hidden">
            {/* Background Elements */}
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-space-blue/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
                <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luminous-cyan/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div class="glass-panel p-10 rounded-2xl w-full max-w-md relative z-10 border border-white/10 shadow-2xl">
                <div class="text-center mb-8">
                    <div class="w-20 h-20 mx-auto mb-4 relative">
                        <img src="/images/logo.png" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(76,158,255,0.5)]" />
                    </div>
                    <h1 class="text-2xl font-bold text-white tracking-wide">Bienvenido a Orion</h1>
                    <p class="text-gray-400 text-sm mt-2">Ingresa a tu panel de control</p>
                </div>

                <div class="space-y-6">
                    <div>
                        <label class="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            bind:value={email}
                            class="w-full bg-deep-space-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-space-blue focus:ring-1 focus:ring-space-blue focus:outline-none transition-all placeholder-gray-600"
                            placeholder="usuario@empresa.com"
                        />
                    </div>

                    <div>
                        <label class="block text-sm text-gray-400 mb-2 font-medium">Contraseña</label>
                        <input
                            type="password"
                            bind:value={password}
                            class="w-full bg-deep-space-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-space-blue focus:ring-1 focus:ring-space-blue focus:outline-none transition-all placeholder-gray-600"
                            placeholder="••••••••"
                        />
                    </div>

                    {error.value && (
                        <div class="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded border border-red-500/20">
                            {error.value}
                        </div>
                    )}

                    <button
                        onClick$={handleLogin}
                        disabled={loading.value}
                        class="w-full btn-primary py-3 rounded-lg font-bold cyan-glow disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                        {loading.value ? (
                            <svg class="animate-spin h-5 w-5 text-luminous-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Iniciar Sesión'}
                    </button>

                    <div class="text-center mt-6">
                        <p class="text-sm text-gray-500">
                            ¿No tienes cuenta? <a href="https://geminislabs.com" target="_blank" class="text-space-blue hover:text-luminous-cyan transition-colors font-medium">Regístrate aquí</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});
