import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'http://tommyp.org',
	integrations: [svelte()]
});
