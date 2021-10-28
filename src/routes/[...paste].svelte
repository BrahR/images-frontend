<script context="module" lang="ts">
	import { getPaste } from '$lib/api';
	import { onMount } from 'svelte';

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

		// if (params && params[params?.length - 1].split('.')?.[1]) {
		// 	return {
		// 		status: 404,
		// 		error: new Error('Not found')
		// 	};
		// }
		let [name, language] = params[params?.length - 1].split('.');
		console.log(language);
		let data = await getPaste(name);
		if (data?.success === false || !data?.content) return;

		return {
			props: { code: data.content, language, paste: name }
		};
	}
</script>

<script lang="ts">
	// export let user_name;
	// export let embed: Record<string, string> = {};
	let desc = 'Sogga Images is an extremely fast image uploader built with the newest technologies.';
	let title = 'Sogga Images - The fastest image uploader';
	export let code: string;
	export let paste: string;
	export let language: string;
	// import Highlight, { HighlightAuto } from 'svelte-highlight';
	// import typescript from 'svelte-highlight/src/languages/typescript';
	// import atomOneDark from 'svelte-highlight/src/styles/solarized-dark';
	// import plug from 'highlightjs-line-numbers.js/src/highlightjs-line-numbers';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	import 'prismjs/plugins/command-line/prism-command-line.css';
	import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
	import 'prismjs/themes/prism.css';
	import 'prismjs/themes/prism-okaidia.css';
	import Prism from 'svelte-prismjs';
	import 'prismjs/components/prism-csharp.js';
	// export let code;
	// export let language;
	import '../app.css';
	// console.log(plug);
	// onMount(() => plug.initHighlightingOnLoad());
</script>

<svelte:head>
	<title>{paste} Sogga bin!</title>
	<meta name="title" content={title} />
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:type" content="website" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />

	<meta property="theme-color" content="#1b8aeb" />

	<!-- {@html atomOneDark} -->
</svelte:head>

<div class="min-h-screen paste">
	<Prism class="prism" {language} {code} showLineNumbers={true} />
	<!-- {#if lang}
		<Highlight class="h-full" langtag={true} language={typescript} {code} />
	{:else}
		<HighlightAuto class="h-full" {code} langtag={true} />
	{/if} -->
	<!-- <p>{content}</p> -->
	<!-- <p class="text text-white">captured by {user_name}</p> -->
	<!-- <img
		style={`border: 9px solid ${embed.color || '#00a41b'}`}
		class="image"
		alt=""
		src={`https://api.tricked.pro/images/raw/${url}`}
	/> -->
</div>
