<script lang="ts">
	import '../app.css';
	import '../roboto.css';
	const topLinks = [
		{
			href: '/',
			a: 'home'
		},

		{
			href: '/paste',
			a: 'paste'
		}
	];
	const bottomLinks = [
		[
			{
				href: '/docs/faq',
				a: 'Faq'
			},
			{
				href: '/docs/rules',
				a: 'Rules'
			},
			{
				href: '/docs/privacy',
				a: 'Privacy'
			}
		],
		[
			{
				href: 'https://github.com/Tricked-dev/uploader',
				a: 'Github'
			}
		]
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
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let show = false; // menu state
	let menu = null; // menu wrapper DOM reference

	onMount(() => {
		// if (window.location.hostname !== 'ascella.host' && window.location.hostname !== 'localhost') {
		// 	goto(`https://www.ascella.host${window.location.pathname}`);
		// }
		show = false;
		const handleOutsideClick = (event) => {
			if (menu && show && !menu.contains(event.target)) {
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
	<div class="topnav p-d gap-2 break-words bg-gray-700 ">
		{#each topLinks as link}
			<a class="p-3 hover:bg-green-700" href={link.href}>{link.a}</a>
		{/each}

		<!-- svelte-ignore a11y-missing-attribute -->

		<a
			class={`p-3 cursor-pointer hover:bg-green-700 ${show ? 'bg-green-800' : ''}`}
			on:click={() => (show = !show)}
		>
			Documentation
		</a>

		{#if show}
			{#each otherLinks as link}
				<a
					transition:fly={{ x: 1500, y: 0, duration: 800 }}
					href={link.href}
					class="p-3 hover:bg-green-700">{link.a}</a
				>
			{/each}
		{/if}
	</div>

	<div class="pb-4" />
	<slot />

	<div class="pb-7" />
	<div
		class="transform no-underline text-gray-500 hover:text-white min-h-full border-t-2 border-gray-600 hover:border-white pt-6"
	>
		<div class="flex-auto flex list-none">
			{#each bottomLinks as links}
				<div>
					<u>
						{#each links as link}
							<li>
								<a href={link.href} class="px-4 py-2 not-sr-only hover:text-blue-500 translate-x-"
									>{link.a}</a
								>
							</li>
						{/each}
					</u>
				</div>
			{/each}
		</div>
	</div>
</template>
