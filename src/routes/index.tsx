import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { Features } from '~/components/landing/features';
import { ApiPreview } from '~/components/landing/api-preview';
import { Comparison } from '~/components/landing/comparison';
import { Cta } from '~/components/landing/cta';

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <ApiPreview />
      <Comparison />
      <Cta />

      {/* Footer */}
      <footer class="py-8 text-center text-gray-500 text-sm glass-panel border-t border-white/5 mt-10">
        <p>© {new Date().getFullYear()} Orion Locator. All rights reserved.</p>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Orion Locator - Geolocalización Híbrida',
  meta: [
    {
      name: 'description',
      content: 'Servicio de geolocalización híbrida basado en Cell-ID, WiFi y LoRa.',
    },
  ],
};
