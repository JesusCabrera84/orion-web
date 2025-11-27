import { component$ } from '@builder.io/qwik';
import { ApiPreview } from '~/components/landing/api-preview';

export default component$(() => {
    return (
        <div class="min-h-screen bg-deep-space-dark pt-20">
            <div class="text-center mb-10">
                <h1 class="text-4xl font-bold text-white">Documentación API</h1>
                <a href="/" class="text-space-blue hover:underline mt-4 block">Volver al inicio</a>
            </div>
            <ApiPreview />
        </div>
    );
});
