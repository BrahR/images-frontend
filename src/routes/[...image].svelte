<script context="module" lang="ts">
	import { getImage } from '$lib/api';

	export const ssr = true;
	export const prerender = true;
	export const hydrate = true;
	export const router = false;
	// export const prerender = true;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const { image } = page.params;
		let params = image?.split('/');

		if (params && params[params?.length - 1].split('.')?.[1]) {
			return;
		}
		let data = await getImage(params[params?.length - 1]);
		if (data.success === false) return;
		if (data.redirect && data.content_type === 'redirect') {
			return {
				status: 302,
				redirect: data.redirect
			};
		}

		return {
			props: { ...data, url: params[params?.length - 1] }
		};
	}
</script>

<script lang="ts">
	export let user_name: string;
	export let embed: Record<string, string> = {};
	export let url: string;
	import '../image.css';
	import '../app.css';
</script>

<svelte:head>
	<title>{user_name} | Image Uploader</title>
	{#if embed.title}
		<meta name="title" content={embed.title} />
		<meta property="og:title" content={embed.title} />
		<meta property="twitter:title" content={embed.title} />
	{/if}
	{#if embed.description}
		<meta name="description" content={embed.description} />
		<meta property="og:description" content={embed.description} />
		<meta property="twitter:description" content={embed.description} />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:image" content={`https://ascella.wtf/images/raw/${url}`} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="theme-color" content={embed.color} />
</svelte:head>

<div class="main">
	<p class="text text-white">captured by {user_name}</p>
	<a href={`https://ascella.wtf/images/raw/${url}`}>
		<img
			style={`border: 9px solid ${embed.color || '#00a41b'}`}
			class="image"
			alt=""
			src={`https://ascella.wtf/images/raw/${url}`}
		/>
	</a>
</div>
