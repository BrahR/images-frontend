<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	let CodeJar;
	onMount(async () => {
		({ CodeJar } = await import('@novacbn/svelte-codejar'));
	});
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	export let value = '';
	async function create() {
		console.log(value);
		if (value == '') return;
		let res = await fetch('https://api.tricked.pro/paste', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				content: value
			})
		});
		let json = await res.json();
		if (!res.ok) {
			console.log(json);
		} else {
			console.log(json);
			window.location.pathname = `/${json.code}`;
		}
	}
	let desc =
		'Sogga paste is a fast and beautiful site to share your text, pastes are stored for 30 days';
	let title = 'Sogga paste a fast and effecient paste server';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:type" content="website" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />
	<meta property="theme-color" content="#1b8aeb" />
</svelte:head>

<div id="jar">
	{#if CodeJar}
		<CodeJar
			syntax={'html'}
			catchTab
			withLineNumbers={true}
			addClosing={true}
			indentOn={/{$/}
			spellcheck={false}
			tab={'\t'}
			bind:value
		/>
	{/if}
</div>

<button
	on:click|preventDefault={create}
	class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	>Submit!</button
>
