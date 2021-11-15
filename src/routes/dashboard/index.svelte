<script context="module" lang="ts">
	export function load({ session }: any) {
		return { props: { key: session?.user?.key, id: session?.user?.id } };
	}
</script>

<script lang="ts">
	export let id: string;
	export let key: string;
	async function downloadConfig() {
		let blob = await fetch(`https://ascella.wtf/images/config/${id}/${key}`).then((r) => r.blob());
		let url = URL.createObjectURL(blob);

		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.target = '_blank';
		anchor.download = 'config.sxcu';

		// Auto click on a element, trigger the file download
		anchor.click();

		// This is required
		URL.revokeObjectURL(url);
	}
</script>

<section>
	<div>
		<button on:click={downloadConfig}>Download config here</button>
	</div>
</section>
