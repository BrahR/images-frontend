<script context="module" lang="ts">
	import { getPaste } from '$lib/api';

	export const ssr = true;
	export const prerender = true;
	export const hydrate = true;
	export const router = false;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const { paste } = page.params;
		let params = paste?.split('/');
		let [name, language] = params[params?.length - 1].split('.');
		let data = await getPaste(name);
		if (data?.success === false || !data?.content) return;

		return {
			props: { code: data.content, language, paste: name }
		};
	}
</script>

<script lang="ts">
	import Prism from 'svelte-prismjs';

	let desc = 'Ascella paste a fast and effecient paste server';
	let title = 'Ascella paste a fast and effecient paste server';
	export let code: string;
	export let paste: string;
	export let language: string;

	import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	import 'prismjs/plugins/command-line/prism-command-line.css';
	import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
	import 'prismjs/themes/prism.css';
	import 'prismjs/themes/prism-okaidia.css';
	import 'prismjs/components/prism-csharp.js';

	import '../app.css';
</script>

<svelte:head>
	<title>{paste} - {title}</title>
	<meta name="title" content={`${paste} - ${title}`} />
	<meta name="description" content={desc} />
	<meta property="og:title" content={`${paste} - ${title}`} />
	<meta property="og:description" content={desc} />
	<meta property="og:type" content="website" />
	<meta property="twitter:title" content={`${paste} - ${title}`} />
	<meta property="twitter:description" content={desc} />
	<meta property="theme-color" content="#1b8aeb" />
</svelte:head>

<div class="min-h-screen paste">
	<Prism class="prism" {language} {code} showLineNumbers={true} />
</div>
