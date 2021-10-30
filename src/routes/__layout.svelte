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
	const otherLinks = [
		{
			href: '/docs/domain',
			a: 'Adding your own domain'
		},
		{
			href: '/docs/rules',
			a: 'Rules'
		},
		{
			href: '/docs/privacy',
			a: 'Privacy'
		},
		{
			href: '/docs/index',
			a: 'Docs Index'
		},
		{
			href: '/docs/installing',
			a: 'Installing'
		},
		{
			href: '/domains',
			a: 'Domains'
		}
	];

	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let show = false; // menu state
	let menu = null; // menu wrapper DOM reference

	onMount(() => {
		show = false;
		const handleOutsideClick = (event) => {
			if (show && !menu.contains(event.target)) {
				show = false;
			}
		};

		const handleEscape = (event) => {
			if (show && event.key === 'Escape') {
				show = false;
			}
		};

		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});
</script>

<template bind:this={menu}>
	<div class="topnav  p-d gap-2 break-words">
		{#each links as link}
			<a
				class="p-3 border-b-4 border-green-500 hover:border-red-400 hover:bg-green-500"
				href={link.href}>{link.a}</a
			>
		{/each}
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="p-3 border-b-4 border-green-500 hover:border-red-400 hover:bg-green-500">
			<button on:click={() => (show = !show)}> Documentation </button>
		</a>
	</div>
	<div class="relative">
		<div>
			{#if show}
				<div
					in:scale={{ duration: 100, start: 0.95 }}
					out:scale={{ duration: 75, start: 0.95 }}
					class=" right-0 w-48 py-2 mt-1 bg-gray-900
          rounded shadow-md"
				>
					{#each otherLinks as link}
						<a href={link.href} class="block px-4 py-2 hover:bg-green-500 hover:text-green-100"
							>{link.a}</a
						>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<slot />
</template>
