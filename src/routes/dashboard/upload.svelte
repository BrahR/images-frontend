<script context="module" lang="ts">
	export function load({ session }: any) {
		return {
			props: { key: session?.user?.key, id: session?.user?.id, domain: session?.user?.domain }
		};
	}
</script>

<script lang="ts">
	export let domain: string;
</script>

<div>
	Upload image
	<button>Upload</button>
</div>

<div>
	Create vanity
	<input placeholder={domain} disabled={true} /><input />
	<input placeholder="redirect to" />
	<button>Submit</button>
</div>
