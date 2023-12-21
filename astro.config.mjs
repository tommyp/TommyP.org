import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'http://tommyp.org',
	output: 'hybrid',
	integrations: [svelte()]
});
