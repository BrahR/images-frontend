import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	adapter: vercel(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#main',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	}
};

export default config;
