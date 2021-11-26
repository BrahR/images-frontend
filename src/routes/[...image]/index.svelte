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
	export async function load({ page, session }) {
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
			props: { ...data, url: params[params?.length - 1], visitor_name: session?.user?.name }
		};
	}
</script>

<script lang="ts">
	export let user_name: string;
	export let id: string;
	export let image_size: string = '10kb';
	export let embed: Record<string, string> = {};
	export let url: string;
	export let visitor_name: string | undefined;
	export let visitor_id: number | undefined;
	export let visitor_key: number | undefined;
	import '../../image.css';
	import '../../app.css';
	function make_public() {
		console.log({
			id,
			visitor_id,
			visitor_key,
			visitor_name
		});
	}
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
	{#if embed.author}
		<meta property="site_name" content={embed.author} />
		<meta property="og:site_name" content={embed.author} />
		<meta property="twitter:site_name" content={embed.author} />
	{/if}

	<meta property="twitter:author" content={user_name} />
	<meta property="author" content={user_name} />
	<meta property="theme-color" content={embed.color} />
	<meta property="og:author" content={user_name} />

	<meta property="og:image" content={`https://ascella.wtf/v2/ascella/view/${url}`} />
	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="flex-1 flex flex-col">
	<nav
		class="px-4 flex justify-between bg-gray-700 h-8 border-b-2"
		style={`border-color: ${embed.color || '#00a41b'}`}
	>
		<!-- top bar left -->
		<ul class="flex items-center">
			<li>
				{image_size}
			</li>
		</ul>

		<ul class="flex items-center">
			<!-- add button -->
			<li>
				<h1 class="pl-8 lg:pl-0"><a href="https://www.ascella.host">Ascella</a></h1>
			</li>
		</ul>

		<!-- to bar right  -->
		<ul class="flex items-center">
			<li class="">
				{visitor_name}
				{user_name}
			</li>
		</ul>
	</nav>
</div>
<div class="main">
	<a href={`https://ascella.wtf/v2/ascella/view/${url}`}>
		<img class="image" alt="" src={`https://ascella.wtf/v2/ascella/view/${url}`} />
	</a>
	<!-- <button onclick={make_public}> Make public </button> -->
</div>
<footer
	style={`border-color: ${embed.color || '#00a41b'}`}
	class="bg-gray-700
             text-white text-center
             border-t-2 
             fixed
             inset-x-0
             bottom-0
			 h-8
			 flex justify-between
             "
>
	<ul class="flex items-center" />
	<ul class="flex items-center">
		<!-- add button -->
		<li>
			<h1 class="pl-8 lg:pl-0">
				<a href="https://www.ascella.host">Ascella.host </a>
			</h1>
		</li>
	</ul>
	<ul class="flex items-center" />
</footer>
