<script context="module">
	export const ssr = false;
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';

	hljs.registerLanguage('javascript', javascript);

	// `highlight` takes the input code and returns the highlighted HTML markup
	const highlight = (code, syntax) =>
		hljs.highlight(code, {
			language: syntax
		}).value;
	// import Prism from 'prismjs';
	// import { CodeJar } from '@novacbn/svelte-codejar';
	// const highlight = (code, syntax) => Prism.highlight(code, Prism.languages[syntax], syntax);
</script>

<script lang="ts">
	import Prism from 'prismjs';
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
</script>

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
