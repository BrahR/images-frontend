<script>
	import { goto } from '$app/navigation';
	import { user } from '../lib/store';

	async function login() {
		let r = await fetch('https://api.tricked.pro/images/verify', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				id: parseInt(username),
				key: pass
			})
		});
		let json = await r.json();
		if (json.success) {
			user.set({
				id: parseInt(username),
				key: pass
			});
			return goto('/');
		}
	}
	let username;
	let pass;
</script>

<section>
	<form on:submit|preventDefault={login}>
		<input
			class="bg-gray-900"
			on:change={(e) =>
				(username =
					// @ts-ignore
					e.target.value)}
		/>
		<input
			class="bg-gray-900"
			on:change={(e) =>
				(pass =
					// @ts-ignore
					e.target.value)}
		/>

		<button> LOGIN! </button>
	</form>
</section>
