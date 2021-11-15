<script context="module" lang="ts">
	export async function load({ session }: any) {
		let domains = await fetch('https://ascella.wtf/images/domains').then((r) => r.json());
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
	export let domain: string;
	export let domains: string[];
</script>

<div>
	<p>current domain {domain}</p>
</div>

<div>
	Select a new domain
	<div>
		<input /><select>
			{#each domains as domain}
				<option value={domain}>{domain}</option>
			{/each}
		</select>
	</div>
	<button>Update domain</button>
</div>

<div>
	<input placeholder="title" />
	<input placeholder="link" disabled={true} />
	<input placeholder="url" disabled={true} />
	<input placeholder="description" />
	<input placeholder="color" />
</div>
