<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	// import { user } from '../lib/store';
	async function login() {
		let r = await fetch('/auth/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				id: parseInt(username),
				key: pass
			})
		});
		console.log(r);
		let json = await r.json();
		console.log(json);
		if (json.discord_id) {
			$session.user = json;
			// user.set({
			// 	id: parseInt(username),
			// 	key: pass
			// });
			return goto('/');
		}
	}
	let username;
	let pass;
</script>

<section class="login">
	<form on:submit|preventDefault={login}>
		<input class="input" bind:value={username} />
		<input class="input" bind:value={pass} />

		<button> LOGIN! </button>
	</form>
</section>

<section>
	<form action="">
		<input class="idk" />
		<input class="idk" />
	</form>
</section>
