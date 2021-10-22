<script lang="ts">
	import '../app.css';
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
		}
	];
</script>

<template>
	<div class="topnav  p-d gap-2 break-words">
		{#each links as link}
			<a class="p-3 border-b-4 border-green-500" href={link.href}>{link.a}</a>
		{/each}
	</div>
	<!-- svelte:head
		title {pageTitle($page.path)} · Frackit -->

	<slot />
</template>
