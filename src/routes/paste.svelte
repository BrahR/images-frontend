<script context="module" lang="ts">
	import { getPaste } from '$lib/api';
	// import { onMount } from 'svelte';
	// import Code from '../components/Code.svelte';
	import { CodeJar } from '@novacbn/svelte-codejar';
	export const ssr = true;
	export const prerender = true;
	export const hydrate = true;
	export const router = false;
	import Prism from 'prismjs';
	const highlight = (code, syntax) => Prism.highlight(code, Prism.languages[syntax], syntax);
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	// export async function load({ page }) {
	// 	const { paste } = page.params;
	// 	let params = paste?.split('/');

	// 	// if (params && params[params?.length - 1].split('.')?.[1]) {
	// 	// 	return {
	// 	// 		status: 404,
	// 	// 		error: new Error('Not found')
	// 	// 	};
	// 	// }
	// 	let [name, language] = params[params?.length - 1].split('.');
	// 	let data = await getPaste(name);
	// 	if (data?.success === false || !data?.content) return;

	// 	return {
	// 		props: { code: data.content, language, paste: name }
	// 	};
	// }
</script>

<script lang="ts">
	// export let user_name;
	// export let embed: Record<string, string> = {};
	let desc = 'Sogga Images is an extremely fast image uploader built with the newest technologies.';
	let title = 'Sogga Images - The fastest image uploader';
	// export let code: string;
	// export let paste: string;
	// export let language: string;
	// import Highlight, { HighlightAuto } from 'svelte-highlight';
	// import typescript from 'svelte-highlight/src/languages/typescript';
	// import atomOneDark from 'svelte-highlight/src/styles/solarized-dark';
	// import plug from 'highlightjs-line-numbers.js/src/highlightjs-line-numbers';
	// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	// import 'prismjs/plugins/command-line/prism-command-line.css';
	// import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
	import 'prismjs/themes/prism.css';
	import 'prismjs/themes/prism-okaidia.css';
	// import loadLanguages from 'prismjs/components/index.js';
	// import Prism from 'svelte-prismjs';
	// import 'prismjs/components/prism-csharp.js';
	// export let code;
	// export let language;
	import '../app.css';
	// import { goto } from '$app/navigation';
	// import Repl from '@sveltejs/svelte-repl';
	// console.log(plug);
	// onMount(() => plug.initHighlightingOnLoad());
	let content: string;
	async function create() {
		let res = await fetch('https://api.tricked.pro/paste', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				content: content
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
	// function handleChange(e) {
	// 	content = e.target.value;
	// }
	// let repl;
	// import { AceEditor } from 'svelte-ace';
	// import 'brace/mode/json';
	// import CodeMirror from '@joshnuss/svelte-codemirror';
	// import 'brace/theme/chrome';
	// let text = '';
	// const options = {
	// 	mode: 'javascript',
	// 	lineNumbers: true
	// };
	// let code = `Place holder`;
	// let editor;
	import { onMount } from 'svelte';
	import 'prismjs/themes/prism-tomorrow.css';
	export let value = '';
	// import Prism from 'prismjs';
	// const highlight = (code, syntax) => Prism.highlight(code, Prism.languages[syntax], syntax);
	// **NOTE:** Since `onMount` is only called on the client, we can just
	// make our import there. And assign to our Component's scope
	let CodeJar;
	onMount(async () => {
		({ CodeJar } = await import('@novacbn/svelte-codejar'));
	});
	setInterval(() => console.log(value), 2000);
</script>

<svelte:head>
	<!-- <title>{paste} Sogga bin!</title> -->
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

<div class="min-h-screen paste  ">
	{#if CodeJar}
		<CodeJar addClosing={true} indentOn={/{$/} spellcheck={false} tab={'\t'} bind:value />
	{:else}
		<!--
    **NOTE:** Normally the `CodeJar` Svelte handles fall through for us, and
    renders / syntax highlights without an editor during SSR / non-JS enabled clients
-->
		<pre><code>{value}</code></pre>
	{/if}
	<!-- <Code code="test" editable /> -->
	<!-- <div class="viewport">
		<Repl
			class="w-full bg-gray-800 min-h-full  h-screen"
			bind:this={repl}
			workersUrl="workers"
			relaxed={true}
			svelteUrl="https://unpkg.com/svelte@3"
			rollupUrl="https://unpkg.com/rollup@1/dist/rollup.browser.js"
			fixed={true}
		/>
	</div> -->

	<!-- <Prism
		id="editable"
		contenteditable
		class="prism"
		showLineNumber={true}
		{language}
		{code}
		on:input={handleChange}
		on:change={handleChange}
	/> -->
	<!-- <CodeMirror bind:editor {options} class="editor" bind:value={code} /> -->
	<!-- <AceEditor
		on:selectionChange={(obj) => console.log(obj.detail)}
		on:paste={(obj) => console.log(obj.detail)}
		on:input={(obj) => console.log(obj.detail)}
		on:focus={() => console.log('focus')}
		on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
		on:cut={() => console.log('cut')}
		on:cursorChange={() => console.log('cursor change')}
		on:copy={() => console.log('copy')}
		on:init={(editor) => console.log(editor.detail)}
		on:commandKey={(obj) => console.log(obj.detail)}
		on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
		on:blur={() => console.log('blur')}
		width="100%"
		height="300px"
		lang="json"
		theme="chrome"
		value={text}
	/> -->
	<!-- <pre>

	<textarea class="w-full bg-gray-800 min-h-full  h-screen" type="text" on:input={handleChange} />
    </pre> -->
	<button
		on:click|preventDefault={create}
		class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
		>Submit!</button
	>
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

<!-- <style lang="scss">
	.paste :global(code) {
		&:before,
		&:after {
			content: '';
		}
	}
	// .paste .prism {
	// 	background-color: inherit;
	// }
</style> -->
<!-- <style>
	.repl-outer {
		position: relative;
		height: 100vh;
		--app-controls-h: 5.6rem;
		--pane-controls-h: 4.2rem;
		overflow: hidden;
		background-color: var(--back);
		padding: var(--app-controls-h) 0 0 0;
		/* margin: 0 calc(var(--side-nav) * -1); */
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	.viewport {
		width: 100%;
		height: 100%;
	}
	.mobile .viewport {
		width: 200%;
		height: calc(100% - 42px);
		transition: transform 0.3s;
		flex: 1;
	}
	.mobile .offset {
		transform: translate(-50%, 0);
	}
	/* temp fix for #2499 and #2550 while waiting for a fix for https://github.com/sveltejs/svelte-repl/issues/8 */
	.viewport :global(.tab-content),
	.viewport :global(.tab-content.visible) {
		pointer-events: all;
		opacity: 1;
	}
	.viewport :global(.tab-content) {
		visibility: hidden;
	}
	.viewport :global(.tab-content.visible) {
		visibility: visible;
	}
	.zen-mode {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 111;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style> -->
