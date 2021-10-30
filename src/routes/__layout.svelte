<script lang="ts">
	import '../app.css';
	import '../roboto.css';
	const links = [
		{
			href: '/',
			a: 'home'
		},
		{
			href: '/docs/faq',
			a: 'faq'
		},
		{
			href: '/docs/rules',
			a: 'rules'
		},
		{
			href: '/docs/privacy',
			a: 'privacy'
		},
		{
			href: '/paste',
			a: 'paste'
		}
	];
</script>

<template>
	<div class="topnav  p-d gap-2 break-words">
		{#each links as link}
			<a class="p-3 border-b-4 border-green-500" href={link.href}>{link.a}</a>
		{/each}
	</div>

	<slot />
</template>
