import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { Features } from '~/components/landing/features';
import { ApiPreview } from '~/components/landing/api-preview';
import { Coverage } from '~/components/landing/coverage';
import { Comparison } from '~/components/landing/comparison';
import { Pricing } from '~/components/landing/pricing';
import { Cta } from '~/components/landing/cta';

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <Coverage />
      <ApiPreview />
      <Comparison />
      <Pricing />
      <Cta />

      {/* Footer */}
      <footer class="py-8 text-center text-gray-500 text-sm glass-panel border-t border-white/5 mt-10">
        <p>© {new Date().getFullYear()} Geminis Labs · Orion. Todos los derechos reservados.</p>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Orion — Geolocalización por celda',
  meta: [
    {
      name: 'description',
      content: 'Cuando el inhibidor apaga el GPS, la celda es lo único que queda. Orion resuelve identidad de celda a puntos de carretera observados en México y Estados Unidos.',
    },
  ],
};
