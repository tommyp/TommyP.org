import adapter from '@sveltejs/adapter-netlify';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [isoImport()]
		}
	},
	experimental: {
		useVitePreprocess: true
	}
};

export default config;
