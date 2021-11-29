<script context="module" lang="ts">
	export async function load({ session }: any) {
		let domains = await fetch('https://ascella.wtf/v2/ascella/domains').then((r) => r.json());
		return {
			props: {
				key: session?.user?.key,
				domain: session?.user?.domain,
				id: session?.user?.id,
				domains: domains.map((x: any) => x.domain)
			}
		};
	}
</script>

<script lang="ts">
	import Button from '$lib/../components/Button.svelte';
	import Input from '$lib/../components/Input.svelte';

	export let domain: string;
	export let domains: string[];

	let subDomain: string;
	let selecetedDomain: string;

	let title: string;
	let link: string;
	let url: string;
	let description: string;
	let color: string;

	async function updateDomain() {}
</script>

<div>
	<p>current domain {domain}</p>
</div>

<div>
	Select a new domain
	<div>
		<input bind:value={subDomain} /><select bind:value={selecetedDomain}>
			{#each domains as domain}
				<option value={domain}>{domain}</option>
			{/each}
		</select>
	</div>
	<Button>Update domain</Button>
</div>

<div class="p-3 rounded-sm">
	<div class="grid grid-cols-1 p-4 bg-gray-700 gap-1 md:w-3/6 w-auto">
		<Input placeholder="title" bind:value={title} />
		<Input placeholder="link" bind:value={link} disabled={true} />
		<Input placeholder="url" bind:value={url} disabled={true} />
		<Input placeholder="description" bind:value={description} />
		<Input placeholder="color" bind:value={color} />
		<Button>submit</Button>
	</div>
	<div class="h-[20rem] w-auto pt-3 display">
		<p class="text-blue-500">
			{domain}/1234
		</p>
		{#if description || title}
			<div class="embed text-left">
				<p class="title text-blue-500 text-left">
					{title}
				</p>
				<p class="desc text-gray-300 text-left">
					{description}
				</p>
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					height="80%"
					width="auto"
					class="w-auto image"
					src="https://cdn.discordapp.com/attachments/748957504666599507/905949227753025566/Untitled91.png"
				/>
			</div>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				height="100%"
				width="auto"
				class="h-full w-auto"
				src="https://cdn.discordapp.com/attachments/748957504666599507/905949227753025566/Untitled91.png"
			/>
		{/if}
	</div>
</div>

<style>
	.embed {
		text-align: left !important;
		height: 100%;
		width: auto;
		border-left-width: 10px;
		background: #23272a;
	}
	.embed .title {
		font-size: 1rem;
	}
	.embed .image {
		height: 80%;
	}
	.embed .desc {
		padding-top: 0.2rem;
	}
	.display {
		background-color: #2c2f33;
	}
</style>
